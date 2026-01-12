"use client";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-orange-600 h-64 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-purple-100">We&apos;re here to help with your enterprise needs</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-800 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900 placeholder-purple-400"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900 placeholder-purple-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-purple-800 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900 placeholder-purple-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-purple-800 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900"
                  required
                >
                  <option value="" className="text-purple-400">Select a subject</option>
                  <option value="ERP Solutions">ERP Solutions</option>
                  <option value="Messaging Application">Messaging Application</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900 placeholder-purple-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-purple-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-purple-900">Office Location</h3>
                  <p className="text-purple-700">2202 St Mary&apos;s, Chitungwiza</p>
                  <p className="text-purple-700">Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-purple-900">Email</h3>
                  <p className="text-purple-700">info@sangfroidtechnologies.com</p>
                  <p className="text-purple-700">support@sangfroidtechnologies.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-purple-900">Business Hours</h3>
                  <p className="text-purple-700">Monday - Friday: 8:00 AM - 5:00 PM CAT</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-purple-900">Website</h3>
                  <p className="text-purple-700">sangfroidtechnologies.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-purple-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, color: 'bg-purple-600 hover:bg-purple-700' },
                  { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, color: 'bg-purple-500 hover:bg-purple-600' },
                  { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, color: 'bg-purple-700 hover:bg-purple-800' },
                  { name: 'WhatsApp', icon: <FaWhatsapp className="w-5 h-5" />, color: 'bg-orange-500 hover:bg-orange-600' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`${social.color} text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
