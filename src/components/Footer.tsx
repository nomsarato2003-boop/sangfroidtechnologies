"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[128px]"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <div className="text-2xl font-bold">
                                <span className="text-orange-400">SANGFROID</span>
                                <span className="text-white ml-1">TECH</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
                            Empowering businesses with innovative enterprise solutions including ERP systems,
                            messaging applications, and e-commerce platforms since 2020.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { name: 'Facebook', icon: <FaFacebook className="w-4 h-4" />, url: '#', hoverBg: 'hover:bg-blue-600' },
                                { name: 'Twitter', icon: <FaTwitter className="w-4 h-4" />, url: '#', hoverBg: 'hover:bg-sky-500' },
                                { name: 'LinkedIn', icon: <FaLinkedin className="w-4 h-4" />, url: '#', hoverBg: 'hover:bg-blue-700' },
                                { name: 'Instagram', icon: <FaInstagram className="w-4 h-4" />, url: '#', hoverBg: 'hover:bg-pink-600' },
                                { name: 'WhatsApp', icon: <FaWhatsapp className="w-4 h-4" />, url: '#', hoverBg: 'hover:bg-green-600' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className={`bg-slate-800 ${social.hoverBg} text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-700 hover:border-transparent`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500"></div>
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Enterprise Resource Planning', path: '/services/erp' },
                                { label: 'Messaging Application', path: '/services/messaging' },
                                { label: 'E-commerce Solutions', path: '/services/ecommerce' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.path}
                                        className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ERP Modules */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-purple-500"></div>
                            ERP Modules
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Human Capital Management', path: '/services/erp#hcm' },
                                { label: 'Financial Control', path: '/services/erp#finance' },
                                { label: 'Materials Management', path: '/services/erp#materials' },
                                { label: 'CRM Solutions', path: '/services/erp#crm' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.path}
                                        className="text-slate-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 transition-all duration-300"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500"></div>
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'About Us', path: '/about' },
                                { label: 'Our Team', path: '/company/team' },
                                { label: 'Careers', path: '/careers' },
                                { label: 'Contact', path: '/contact' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.path}
                                        className="text-slate-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-slate-800 py-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="text-center lg:text-left">
                            <h4 className="text-xl font-semibold text-white mb-2">Stay Updated with Sangfroid</h4>
                            <p className="text-slate-400">
                                Subscribe for the latest insights on enterprise solutions and technology innovation.
                            </p>
                        </div>
                        <form className="flex gap-3 w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Info Bar */}
                <div className="border-t border-slate-800 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                                <i className="fas fa-map-marker-alt text-orange-400"></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Location</p>
                                <p className="text-white">2202 St Mary&apos;s, Chitungwiza</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                                <i className="fas fa-envelope text-orange-400"></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <p className="text-white">info@sangfroidtechnologies.com</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-end gap-3">
                            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                                <i className="fas fa-clock text-orange-400"></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Hours</p>
                                <p className="text-white">Mon-Fri: 8AM-5PM CAT</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} <span className="text-slate-400">Sangfroid Technologies</span>. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-orange-400 transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-sm text-slate-500 hover:text-orange-400 transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
