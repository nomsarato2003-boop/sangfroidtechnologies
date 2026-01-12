"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    {
      label: "Services",
      dropdown: [
        { label: "Enterprise Resource Planning", path: "/services/erp" },
        { label: "Messaging Application", path: "/services/messaging" },
        { label: "E-commerce Solutions", path: "/services/ecommerce" },
      ],
    },
    {
      label: "Company",
      dropdown: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/company/team" },
        { label: "Careers", path: "/careers" },
      ],
    },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-violet-900 shadow-lg backdrop-blur-sm bg-opacity-95">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center cursor-pointer">
                <div className="text-white font-bold text-2xl">
                  <span className="text-orange-400">SANGFROID</span>
                  <span className="text-white ml-1">TECHNOLOGIES</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-orange-300 transition-colors duration-300 py-2 font-medium text-base whitespace-nowrap cursor-pointer"
              >
                Home
              </Link>

              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-white hover:text-orange-300 transition-colors duration-300 py-2 font-medium text-base whitespace-nowrap cursor-pointer flex items-center">
                    {link.label}
                    <i className="fas fa-chevron-down ml-2 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-64 rounded-lg shadow-xl bg-gradient-to-b from-purple-900 to-violet-800 border border-orange-500/20 overflow-hidden transition-all duration-300 ${activeDropdown === link.label
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.path}
                          className="block px-4 py-3 text-sm text-white hover:text-orange-300 hover:bg-white/5 transition-all duration-300 cursor-pointer border-l-2 border-transparent hover:border-orange-400"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-orange-500/25"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-orange-300 focus:outline-none transition-colors duration-300 cursor-pointer p-2 rounded-lg hover:bg-white/10"
              >
                <i
                  className={`fas ${isOpen ? "fa-times text-xl" : "fa-bars text-xl"
                    }`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-gradient-to-b from-purple-900 to-violet-900 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block text-white hover:text-orange-300 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-300 cursor-pointer hover:bg-white/5"
            >
              Home
            </Link>

            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className="w-full flex justify-between items-center text-white hover:text-orange-300 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-300 cursor-pointer hover:bg-white/5"
                >
                  {link.label}
                  <i
                    className={`fas fa-chevron-${activeDropdown === link.label ? "up" : "down"
                      } ml-2 text-xs transition-transform duration-300`}
                  ></i>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === link.label
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.path}
                      className="block pl-8 pr-4 py-3 text-sm text-gray-200 hover:text-orange-300 hover:bg-white/5 transition-colors duration-300 cursor-pointer border-l-2 border-transparent hover:border-orange-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-orange-500/25"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-20" aria-hidden="true"></div>
    </>
  );
}

export default Navbar;
