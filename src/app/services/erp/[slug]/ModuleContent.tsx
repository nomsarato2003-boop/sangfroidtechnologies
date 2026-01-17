"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface ModuleContentProps {
  name: string;
  description: string;
  video: string;
}

export default function ModuleContent({ name, description, video }: ModuleContentProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-8 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/services/erp"
            className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to ERP Modules
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ERP Module
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {name}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl transform rotate-1 scale-105 opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="aspect-video bg-gray-900">
                <video
                  src={video}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Interested in {name}?
          </h2>
          <p className="text-gray-500 mb-8">
            Get in touch with our team to learn more about how this module can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-purple-200"
            >
              Request a demo
            </Link>
            <Link
              href="/services/erp"
              className="border-2 border-gray-200 hover:border-purple-200 text-gray-700 hover:text-purple-700 px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              View all modules
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
