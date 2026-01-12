"use client";

import { motion, Variants, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

// Animation Variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Animated Section Component - triggers on scroll
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants: Record<string, Variants> = {
    up: fadeInUp,
    down: fadeInDown,
    left: fadeInLeft,
    right: fadeInRight,
    scale: scaleIn,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container for lists
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerContainer({ children, className = "", delay = 0 }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item for lists
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// Hover Scale Component
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function HoverScale({ children, className = "", scale = 1.05 }: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: scale - 0.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating Animation Component
interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function Floating({ children, className = "", duration = 3, distance = 10 }: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax Component
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      style={{ willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Text Reveal Animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: delay + i * 0.1, duration: 0.5 }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Pulse Glow Effect
interface PulseGlowProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function PulseGlow({ children, className = "", color = "cyan" }: PulseGlowProps) {
  const colorMap: Record<string, string> = {
    cyan: "rgba(6, 182, 212, 0.5)",
    blue: "rgba(59, 130, 246, 0.5)",
    purple: "rgba(139, 92, 246, 0.5)",
    pink: "rgba(236, 72, 153, 0.5)",
  };

  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px ${colorMap[color] || colorMap.cyan}`,
          `0 0 40px ${colorMap[color] || colorMap.cyan}`,
          `0 0 20px ${colorMap[color] || colorMap.cyan}`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Counter Animation
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {prefix}
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {to}
          </motion.span>
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}

// Page Transition Wrapper
interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Gradient Background Animation
interface AnimatedGradientProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
}

export function AnimatedGradient({
  children,
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4"],
}: AnimatedGradientProps) {
  return (
    <motion.div
      animate={{
        background: [
          `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
          `linear-gradient(135deg, ${colors[1]} 0%, ${colors[2]} 50%, ${colors[0]} 100%)`,
          `linear-gradient(135deg, ${colors[2]} 0%, ${colors[0]} 50%, ${colors[1]} 100%)`,
          `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
