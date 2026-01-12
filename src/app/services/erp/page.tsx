"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ERPPage() {
  const modules = [
    { name: "HR Management", icon: "👥", desc: "Complete workforce management" },
    { name: "Finance", icon: "💰", desc: "Accounting & budgeting" },
    { name: "Inventory", icon: "📦", desc: "Stock & warehouse control" },
    { name: "CRM", icon: "🤝", desc: "Customer relationships" },
    { name: "Procurement", icon: "🛒", desc: "Purchase management" },
    { name: "Production", icon: "🏭", desc: "Manufacturing control" },
    { name: "Transport", icon: "🚚", desc: "Fleet & logistics" },
    { name: "Analytics", icon: "📈", desc: "Business intelligence" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="relative pt-16 pb-32 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-50"></div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Enterprise Resource Planning
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            All-in-one ERP
            <br />
            <span className="text-purple-700">for growing businesses.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
          >
            Manage HR, Finance, Inventory, CRM, and more — all integrated in one powerful platform.
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
            <span className="text-gray-400 text-sm">Free consultation</span>
          </motion.div>
        </div>
      </section>

      {/* Floating Dashboard Image */}
      <section className="relative px-6 -mt-20 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl transform rotate-1 scale-105 opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
                alt="ERP Dashboard"
                width={1400}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
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
              Everything you need, integrated
            </h2>
            <p className="text-gray-500 text-lg">
              Modular design — use what you need, add more as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {module.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-gray-500">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Gradient BG */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Why choose our ERP?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Fully Integrated", desc: "All modules work together seamlessly" },
                  { title: "Cloud-Based", desc: "Access from anywhere, anytime" },
                  { title: "Scalable", desc: "Grows with your business" },
                  { title: "Local Support", desc: "Zimbabwe-based support team" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-purple-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Business Analytics"
                width={800}
                height={600}
                className="w-full h-auto"
              />
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
            Ready to streamline your operations?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Get started with a free demo and see how our ERP can transform your business.
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
