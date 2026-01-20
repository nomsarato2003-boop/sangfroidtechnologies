"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Wallet,
  CreditCard,
  ArrowLeftRight,
  Shield,
  Smartphone,
  PiggyBank,
} from "lucide-react";

export default function DigitalBankPage() {
  const features = [
    { name: "Digital Wallets", icon: Wallet, desc: "Secure digital money storage" },
    { name: "Card Management", icon: CreditCard, desc: "Virtual and physical cards" },
    { name: "Money Transfers", icon: ArrowLeftRight, desc: "Instant fund transfers" },
    { name: "Bank-grade Security", icon: Shield, desc: "End-to-end encryption" },
    { name: "Mobile Banking", icon: Smartphone, desc: "Bank from anywhere" },
    { name: "Savings Goals", icon: PiggyBank, desc: "Smart savings features" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="relative pt-16 pb-32 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50"></div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Digital Banking Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Banking reimagined
            <br />
            <span className="text-purple-700">for the digital age.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
          >
            Modern banking infrastructure for businesses. Secure, fast, and fully integrated with your existing systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-200"
            >
              Request a demo
            </Link>
            <span className="text-gray-400 text-sm">Enterprise solutions available</span>
          </motion.div>
        </div>
      </section>

      {/* Floating App Screenshot */}
      <section className="relative px-6 -mt-20 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-3xl transform rotate-1 scale-105 opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <video
                src="/assets/fintech.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete digital banking features
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to power your financial operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section with Gradient */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 order-2 md:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Financial Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Seamlessly integrated with your business
              </h2>
              <p className="text-white/80 mb-8">
                Connect your digital banking with ERP, accounting, and business management systems for unified financial operations.
              </p>
              <div className="flex flex-wrap gap-3">
                {["ERP Integration", "Accounting Sync", "Real-time Reporting", "API Access"].map((item, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to modernize your banking?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Get started with our digital banking solutions and transform your financial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-200"
            >
              Schedule a demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-200 hover:border-purple-200 text-gray-700 hover:text-purple-700 px-8 py-4 rounded-full font-medium text-lg transition-colors"
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
