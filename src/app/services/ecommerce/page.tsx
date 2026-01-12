"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function EcommercePage() {
  const features = [
    { name: "Online Store", icon: "🏪", desc: "Beautiful storefront" },
    { name: "Payments", icon: "💳", desc: "Multiple options" },
    { name: "Inventory", icon: "📦", desc: "Real-time tracking" },
    { name: "Shipping", icon: "🚚", desc: "Delivery integration" },
    { name: "Analytics", icon: "📊", desc: "Sales insights" },
    { name: "Mobile", icon: "📱", desc: "Mobile-optimized" },
    { name: "Security", icon: "🔒", desc: "SSL & encryption" },
    { name: "Support", icon: "💬", desc: "Customer service" },
  ];

  const payments = ["EcoCash", "OneMoney", "Visa", "Mastercard", "Bank Transfer"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="relative pt-16 pb-32 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50"></div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            E-commerce Platform
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Sell online
            <br />
            <span className="text-purple-700">with confidence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
          >
            Launch your online store with local payment support, inventory management, and everything you need to grow.
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
              Start selling
            </Link>
            <span className="text-gray-400 text-sm">Free trial available</span>
          </motion.div>
        </div>
      </section>

      {/* Floating Store Screenshot */}
      <section className="relative px-6 -mt-20 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl transform rotate-1 scale-105 opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
                alt="E-commerce Platform"
                width={1400}
                height={700}
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
              Everything to run your store
            </h2>
            <p className="text-gray-500 text-lg">
              From product listings to delivery — we&apos;ve got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payments Section with Gradient */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Local payment methods
              </h2>
              <p className="text-white/80 mb-8">
                Accept payments the way your customers prefer. We support all major local and international payment options.
              </p>
              <div className="flex flex-wrap gap-3">
                {payments.map((payment, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">
                    {payment}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Payment Methods"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
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
              Solutions for every business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "B2C", desc: "Sell directly to consumers", icon: "🛒" },
              { title: "B2B", desc: "Wholesale & business sales", icon: "🏢" },
              { title: "Marketplace", desc: "Multi-vendor platform", icon: "🏬" },
            ].map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl border border-gray-100 text-center hover:shadow-lg hover:border-purple-200 transition-all"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  {solution.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-2">{solution.title}</h3>
                <p className="text-gray-500">{solution.desc}</p>
              </motion.div>
            ))}
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
            Ready to launch your store?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Join businesses across Zimbabwe selling online with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-200"
            >
              Get started
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-200 hover:border-purple-200 text-gray-700 hover:text-purple-700 px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              See demo
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
