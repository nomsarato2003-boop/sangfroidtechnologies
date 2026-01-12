"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function EcommercePage() {
  const features = [
    {
      icon: "🛒",
      title: "Online Storefront",
      description: "Beautiful, responsive online store that showcases your products and services professionally."
    },
    {
      icon: "💳",
      title: "Payment Integration",
      description: "Multiple payment options including mobile money, cards, and bank transfers for local markets."
    },
    {
      icon: "📦",
      title: "Inventory Management",
      description: "Real-time inventory tracking with automatic stock updates and low-stock alerts."
    },
    {
      icon: "🚚",
      title: "Shipping & Delivery",
      description: "Integrated shipping management with delivery tracking and multiple carrier support."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to track sales, customer behavior, and business performance."
    },
    {
      icon: "👥",
      title: "Customer Management",
      description: "CRM integration for managing customer relationships and purchase history."
    },
    {
      icon: "📱",
      title: "Mobile Commerce",
      description: "Mobile-optimized shopping experience for customers on the go."
    },
    {
      icon: "🔐",
      title: "Secure Transactions",
      description: "SSL encryption and secure payment processing to protect customer data."
    }
  ];

  const solutions = [
    {
      title: "B2C E-commerce",
      description: "Sell directly to consumers with a feature-rich online store",
      features: ["Product catalog", "Shopping cart", "Customer accounts", "Wishlist", "Reviews & ratings"]
    },
    {
      title: "B2B E-commerce",
      description: "Wholesale and business-to-business sales platform",
      features: ["Bulk ordering", "Custom pricing", "Account management", "Quote requests", "Credit terms"]
    },
    {
      title: "Marketplace",
      description: "Multi-vendor marketplace platform",
      features: ["Vendor management", "Commission system", "Vendor dashboards", "Product approvals", "Split payments"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-orange-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <div className="flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
              <span className="text-purple-300 text-sm font-medium">E-commerce Solutions</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Complete <span className="text-orange-400">E-commerce</span> Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-purple-200 max-w-3xl mx-auto mb-8"
          >
            Launch and grow your online business with our comprehensive e-commerce solution.
            From storefront to delivery - everything you need to sell online successfully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              Start Selling Online
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Everything you need to build, launch, and scale your online store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Solutions</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Choose the right solution for your business model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-8 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-slate-400 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Payment Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Local Payment Support</h2>
              <p className="text-purple-200 text-lg">
                We understand the African market and support local payment methods
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["EcoCash", "OneMoney", "Visa/Mastercard", "Bank Transfer"].map((payment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 rounded-xl p-6 border border-slate-700 text-center"
                >
                  <div className="text-3xl mb-2">💳</div>
                  <p className="text-white font-medium">{payment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join businesses across Zimbabwe that are growing their sales with our e-commerce platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 rounded-lg px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg px-8 py-4 font-semibold text-lg transition-all"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
