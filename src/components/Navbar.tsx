"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const apps = [
    { name: "ERP Solutions", href: "/services/erp", desc: "Complete business management" },
    { name: "Messaging", href: "/services/messaging", desc: "Team communication" },
    { name: "E-commerce", href: "/services/ecommerce", desc: "Online store platform" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-[#714b67]">
              Sangfroid
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Apps Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("apps")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                  Apps
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === "apps" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "apps" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                    >
                      <div className="py-2">
                        {apps.map((app) => (
                          <Link
                            key={app.href}
                            href={app.href}
                            className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                          >
                            <span className="block text-sm font-medium text-gray-900">{app.name}</span>
                            <span className="block text-xs text-gray-500">{app.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA - REMOVED "Sign in" and "Try it free" */}
            <div className="hidden md:flex items-center gap-3">
              {/* Empty - removed the buttons */}
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
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider py-2">Apps</p>
                {apps.map((app) => (
                  <Link
                    key={app.href}
                    href={app.href}
                    className="block py-2 text-gray-600 hover:text-gray-900 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {app.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-3"></div>
                <Link href="/about" className="block py-2 text-gray-600 hover:text-gray-900 text-sm" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="block py-2 text-gray-600 hover:text-gray-900 text-sm" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                {/* REMOVED the "Try it free" button from mobile */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-14"></div>
    </>
  );
}

export default Navbar;