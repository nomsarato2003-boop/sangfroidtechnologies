"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Have a question or want to work together? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-3"
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-colors"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="ERP Solutions">ERP Solutions</option>
                      <option value="Messaging Application">Messaging Application</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-8 rounded-full transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                  <p className="text-gray-500">2202 St Mary&apos;s, Chitungwiza</p>
                  <p className="text-gray-500">Zimbabwe</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Email</h3>
                  <a href="mailto:info@sangfroidtechnologies.com" className="text-purple-700 hover:underline">
                    info@sangfroidtechnologies.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <p className="text-gray-500">Monday - Friday</p>
                  <p className="text-gray-500">8:00 AM - 5:00 PM CAT</p>
                </div>

                <div className="p-6 bg-purple-50 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-500 text-sm">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
