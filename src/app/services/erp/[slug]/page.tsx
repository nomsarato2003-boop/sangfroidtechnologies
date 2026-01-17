"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const moduleData: Record<string, { name: string; description: string; video: string }> = {
  "hcbpm": {
    name: "HCBPM",
    description: "Human Capital and Business Process Management - Complete workforce and business processes management solution for your organization.",
    video: "/assets/hr.mp4"
  },
  "finance": {
    name: "Finance",
    description: "Comprehensive financial management including accounting, budgeting, and financial reporting.",
    video: "/assets/erp.mp4"
  },
  "mm": {
    name: "Materials Management",
    description: "Trace, track, and manage your inventory. Complete control of your warehouse and its workforce.",
    video: "/assets/erp.mp4"
  },
  "crm": {
    name: "CRM",
    description: "Customer Relationship Management - Build and maintain strong customer relationships with powerful tools.",
    video: "/assets/erp.mp4"
  },
  "spending-management": {
    name: "Spending Management",
    description: "Strategic spend analysis and procurement optimization to maximize your purchasing power.",
    video: "/assets/erp.mp4"
  },
  "engineering-production": {
    name: "Engineering and Production",
    description: "Concurrently configure, plan, and execute maintenance and production operations.",
    video: "/assets/erp.mp4"
  },
  "transport": {
    name: "Transport Management",
    description: "Fleet and logistics management for efficient transportation operations.",
    video: "/assets/transport.mp4"
  },
  "analytics": {
    name: "Analytics",
    description: "Business intelligence and analytics to make data-driven decisions.",
    video: "/assets/erp.mp4"
  }
};

export default function ModuleVideoPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string | undefined;
  const moduleInfo = slug ? moduleData[slug] : null;

  useEffect(() => {
    if (slug && !moduleInfo) {
      router.replace("/services/erp");
    }
  }, [slug, moduleInfo, router]);

  // Handle loading state or invalid slug
  if (!slug || !moduleInfo) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

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
              {moduleInfo.name}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              {moduleInfo.description}
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
                  src={moduleInfo.video}
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
            Interested in {moduleInfo.name}?
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
