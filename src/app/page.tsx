"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const apps = [
    { name: "ERP", icon: "📊", color: "bg-purple-100", href: "/services/erp" },
    { name: "HR", icon: "👥", color: "bg-blue-100", href: "/services/erp" },
    { name: "Finance", icon: "💰", color: "bg-green-100", href: "/services/erp" },
    { name: "Inventory", icon: "📦", color: "bg-orange-100", href: "/services/erp" },
    { name: "CRM", icon: "🤝", color: "bg-pink-100", href: "/services/erp" },
    { name: "Messaging", icon: "💬", color: "bg-indigo-100", href: "/services/messaging" },
    { name: "E-commerce", icon: "🛒", color: "bg-yellow-100", href: "/services/ecommerce" },
    { name: "Analytics", icon: "📈", color: "bg-cyan-100", href: "/services/erp" },
  ];

  const features = [
    {
      title: "All-in-one platform",
      description: "Manage your entire business with integrated apps that work seamlessly together.",
      icon: "🔗"
    },
    {
      title: "Easy to use",
      description: "Intuitive interfaces designed for real users, not just tech experts.",
      icon: "✨"
    },
    {
      title: "Affordable",
      description: "Enterprise features at a fraction of the cost. No hidden fees.",
      icon: "💎"
    },
    {
      title: "Local support",
      description: "Based in Zimbabwe, we understand your business needs.",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-16 pb-32 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            All your business
            <br />
            <span className="text-purple-700">on one platform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto"
          >
            Simple, affordable, and powerful. ERP, Messaging, E-commerce — everything you need to grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-200"
            >
              Start now - It&apos;s free
            </Link>
            <span className="text-gray-400 text-sm">No credit card required</span>
          </motion.div>

          {/* Decorative arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <svg className="w-16 h-16 mx-auto text-purple-300" viewBox="0 0 100 100" fill="none">
              <path d="M50 10 C30 30, 70 50, 50 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="5,5" />
              <path d="M40 80 L50 90 L60 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Screenshot Section with Gradient BG */}
      <section className="relative py-4 px-6 -mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background gradient for the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl transform rotate-1 scale-105 opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
                alt="Sangfroid Dashboard"
                width={1400}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A suite of business apps
            </h2>
            <p className="text-gray-500 text-lg">
              Everything integrated. Everything you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {apps.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={app.href}
                  className="block p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group"
                >
                  <div className={`w-14 h-14 ${app.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {app.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {app.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/services/erp" className="inline-flex items-center gap-2 text-purple-700 font-medium hover:gap-3 transition-all">
              See all apps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Section with Gradient BG */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why businesses choose Sangfroid
              </h2>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                      <p className="text-purple-100 text-sm">{feature.description}</p>
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
              className="relative"
            >
              {/* Floating device mockup */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Business Analytics"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">50+</div>
              <div className="text-gray-500">Happy clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">4+</div>
              <div className="text-gray-500">Years experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">99%</div>
              <div className="text-gray-500">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial with Gradient */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>

        {/* Decorative */}
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-white/20 rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
            &ldquo;Sangfroid transformed how we manage our business. Everything is now in one place and we&apos;ve saved countless hours.&rdquo;
          </p>
          <p className="text-white/80">
            — Local Business Owner, Harare
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Join businesses across Zimbabwe growing with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-200"
            >
              Start now - It&apos;s free
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-200 hover:border-purple-200 text-gray-700 hover:text-purple-700 px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              Contact sales
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">No credit card required • Free setup • Cancel anytime</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
