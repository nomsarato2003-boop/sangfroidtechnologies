"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: "ERP Solutions", href: "/services/erp", desc: "Complete business management" },
    { name: "Messaging", href: "/services/messaging", desc: "Team communication" },
    { name: "E-commerce", href: "/services/ecommerce", desc: "Online store platform" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-2xl text-purple-700">
              Sangfroid
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-purple-700 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors">
                  Apps
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors"
                          >
                            <span className="block text-sm font-medium text-gray-900">{service.name}</span>
                            <span className="block text-xs text-gray-500 mt-0.5">{service.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-purple-700 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-purple-700 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 font-medium">
                Sign in
              </Link>
              <Link
                href="/contact"
                className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-colors"
              >
                Start now - It&apos;s free
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-2">Apps</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 text-gray-700 hover:text-purple-700 text-sm font-medium rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-3"></div>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-700 text-sm font-medium rounded-lg hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-700 text-sm font-medium rounded-lg hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block bg-purple-700 text-white text-center py-3 rounded-full text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Start now - It&apos;s free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
