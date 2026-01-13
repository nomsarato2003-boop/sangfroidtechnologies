"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const apps = [
    { name: "ERP", href: "/services/erp", color: "#714b67" },
    { name: "HR", href: "/services/erp", color: "#00A09D" },
    { name: "Finance", href: "/services/erp", color: "#017E84" },
    { name: "Inventory", href: "/services/erp", color: "#F06050" },
    { name: "CRM", href: "/services/erp", color: "#714b67" },
    { name: "Messaging", href: "/services/messaging", color: "#00A09D" },
    { name: "E-commerce", href: "/services/ecommerce", color: "#017E84" },
    { name: "Analytics", href: "/services/erp", color: "#F06050" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            All your business
            <br />
            on one platform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-500 mb-4"
          >
            Simple, affordable, and powerful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
          >
            <Link
              href="/contact"
              className="bg-[#00A09D] hover:bg-[#017E84] text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              Start now - It&apos;s free
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
            {/* Browser mockup frame */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {/* Browser bar */}
              <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-400 text-center">
                    sangfroid.co.zw
                  </div>
                </div>
              </div>
              {/* Screenshot */}
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Sangfroid Dashboard"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Decorative doodle - loop */}
            <svg className="absolute -right-8 top-20 w-16 h-16 text-gray-300 hidden md:block" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M75 35 L85 50 L75 65" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A suite of business apps
            </h2>
            <p className="text-gray-500">
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
                  className="block p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group text-center"
                >
                  <div
                    className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: app.color }}
                  >
                    <span className="text-white font-bold text-lg">{app.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-[#00A09D] transition-colors">
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
            <Link
              href="/services/erp"
              className="inline-flex items-center gap-2 text-[#00A09D] font-medium hover:underline"
            >
              See all apps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why businesses choose Sangfroid
              </h2>
              <div className="space-y-6">
                {[
                  { title: "All-in-one", desc: "Everything integrated in one platform" },
                  { title: "Easy to use", desc: "Intuitive design for everyone" },
                  { title: "Affordable", desc: "Enterprise features, startup pricing" },
                  { title: "Local support", desc: "Zimbabwe-based team" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00A09D] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
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
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200">
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
              <svg className="absolute -left-12 bottom-10 w-20 h-20 text-gray-300 hidden md:block" viewBox="0 0 100 100">
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
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-500 text-sm">Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">4+</div>
              <div className="text-gray-500 text-sm">Years</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">99%</div>
              <div className="text-gray-500 text-sm">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <svg className="w-10 h-10 text-gray-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Sangfroid transformed how we manage our business. Everything is now in one place.
          </p>
          <p className="text-gray-500">
            — Local Business Owner, Harare
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#714b67]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/80 mb-8">
            Join businesses across Zimbabwe growing with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#714b67] px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              Start now - It&apos;s free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors"
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
