"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Building2, // ERP
  Users, // HR
  DollarSign, // Finance
  Package, // Inventory
  ContactRound, // CRM
  MessageSquare, // Messaging
  ShoppingCart, // E-commerce
  BarChart3, // Analytics
} from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to play videos when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch((e) => console.log("Autoplay prevented:", e));
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.5, // When 50% of video is visible
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const apps = [
    { name: "ERP", href: "/services/erp", color: "#7c3aed", icon: Building2 }, // Purple
    { name: "HR", href: "/services/erp", color: "#7c3aed", icon: Users }, // Purple
    { name: "Finance", href: "/services/erp", color: "#8b5cf6", icon: DollarSign }, // Light Purple
    { name: "Inventory", href: "/services/erp", color: "#a78bfa", icon: Package }, // Lighter Purple
    { name: "CRM", href: "/services/erp", color: "#7c3aed", icon: ContactRound }, // Purple
    { name: "Messaging", href: "/services/messaging", color: "#8b5cf6", icon: MessageSquare }, // Light Purple
    { name: "E-commerce", href: "/services/ecommerce", color: "#a78bfa", icon: ShoppingCart }, // Lighter Purple
    { name: "Analytics", href: "/services/erp", color: "#7c3aed", icon: BarChart3 }, // Purple
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
          style={{ 
            top: '10%', 
            left: '5%',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
          style={{ 
            top: '40%', 
            right: '10%',
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20"
          style={{ 
            bottom: '20%', 
            left: '20%',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            All your business
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">on one platform.</span>
              <span className="absolute -inset-2 bg-gradient-to-r from-purple-200 to-indigo-200 transform -skew-y-1 -z-10" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-500 mb-4"
          >
            Simple,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold">affordable</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-300 -skew-y-1" />
            </span>
            , and powerful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
          >
            <Link
              href="/contact"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
            >
              Contact us for more info
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-gray-400"
          >
            No credit card required
          </motion.p>

          {/* Decorative doodle arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex justify-center"
          >
            <svg width="60" height="60" viewBox="0 0 100 100" className="text-gray-300">
              <path
                d="M50 15 Q 30 40, 50 50 Q 70 60, 50 85"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
              <path
                d="M42 75 L50 85 L58 75"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-32 right-10 hidden lg:block">
          <svg className="w-20 h-20 text-purple-300" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.3" />
            <circle cx="35" cy="35" r="10" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative doodle - loop */}
            <svg className="absolute -right-8 top-20 w-16 h-16 text-purple-300 hidden md:block animate-pulse" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M75 35 L85 50 L75 65" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A suite of{" "}
              <span className="relative inline-block">
                <span className="relative z-10">business apps</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -skew-y-1 -z-10" />
              </span>
            </h2>
            <p className="text-gray-500">
              Everything integrated. Everything you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {apps.map((app, idx) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={app.href}
                    className="block p-6 bg-white rounded-xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1 group text-center"
                  >
                    <div
                      className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: app.color }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-[#7c3aed] transition-colors">
                      {app.name}
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/services/erp"
              className="inline-flex items-center gap-2 text-[#7c3aed] font-medium hover:underline hover:gap-3 transition-all"
            >
              See all apps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <svg className="w-16 h-16 text-purple-200" viewBox="0 0 100 100">
            <path d="M20 50 Q40 20, 60 50 Q80 80, 100 50" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="3 3" />
          </svg>
        </div>
      </section>

      {/* Video Showcase Section - UPDATED with alternating layout */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See our apps in action
            </h2>
            <p className="text-gray-500 text-lg">
              Watch how our solutions transform business operations
            </p>
          </motion.div>

          {/* ERP Video - Video Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="aspect-video bg-gray-900">
                <video
                  ref={(el) => { videoRefs.current[0] = el; }}
                  src="/assets/erp.mp4"
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete ERP System</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">All-in-one Management</h4>
                    <p className="text-gray-500 text-sm">Streamline HR, finance, inventory, and more in one unified platform</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Analytics</h4>
                    <p className="text-gray-500 text-sm">Make data-driven decisions with comprehensive business insights</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Workflow Automation</h4>
                    <p className="text-gray-500 text-sm">Automate repetitive tasks and improve operational efficiency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* HR Video - Text Left, Video Right */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">HR Management Solution</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Employee Management</h4>
                    <p className="text-gray-500 text-sm">Complete employee lifecycle management from hire to retire</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Payroll Processing</h4>
                    <p className="text-gray-500 text-sm">Automated payroll calculations and compliance management</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Tracking</h4>
                    <p className="text-gray-500 text-sm">Monitor and evaluate employee performance with detailed metrics</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300 order-1 md:order-2"
            >
              <div className="aspect-video bg-gray-900">
                <video
                  ref={(el) => { videoRefs.current[1] = el; }}
                  src="/assets/hr.mp4"
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>

          {/* E-commerce Video - Video Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="aspect-video bg-gray-900">
                <video
                  ref={(el) => { videoRefs.current[2] = el; }}
                  src="/assets/ecommerce.mp4"
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">E-commerce Platform</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Online Store Builder</h4>
                    <p className="text-gray-500 text-sm">Create beautiful online stores with drag-and-drop simplicity</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-channel Sales</h4>
                    <p className="text-gray-500 text-sm">Sell across multiple platforms with centralized inventory management</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Integration</h4>
                    <p className="text-gray-500 text-sm">Secure payment processing with support for local payment methods</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why businesses{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">choose Sangfroid</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -skew-y-1 -z-10" />
                </span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "All-in-one", desc: "Everything integrated in one platform" },
                  { title: "Easy to use", desc: "Intuitive design for everyone" },
                  { title: "Affordable", desc: "Enterprise features, startup pricing" },
                  { title: "Local support", desc: "Zimbabwe-based team" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Device mockup */}
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Business Analytics"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              {/* Doodle arrow */}
              <svg className="absolute -left-12 bottom-10 w-20 h-20 text-purple-300 hidden md:block" viewBox="0 0 100 100">
                <path
                  d="M80 20 Q 40 30, 30 70"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M20 60 L30 70 L40 60"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 text-center"
          >
            {[
              { value: "4+", label: "Years" },
              { value: "99%", label: "Uptime" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative">
                  <div className="text-5xl font-bold text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <svg className="w-12 h-12 text-purple-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-l-4 border-[#7c3aed] shadow-xl">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Sangfroid transformed how we manage our business. Everything is now in one place.
            </p>
            <p className="text-gray-500 font-medium">
              — Local Business Owner, Harare
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-100 rounded-full opacity-50 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-100 rounded-full opacity-50 blur-2xl" />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#7c3aed] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">get started?</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-white/30 -skew-y-1 -z-10" />
            </span>
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join businesses across Zimbabwe growing with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#7c3aed] px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
            >
              Contact us for more info
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 hover:bg-white/10 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              Contact sales
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}