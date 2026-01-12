"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function MessagingPage() {
  const features = [
    {
      icon: "💬",
      title: "Real-time Messaging",
      description: "Instant message delivery with read receipts and typing indicators for seamless communication."
    },
    {
      icon: "👥",
      title: "Group Chats",
      description: "Create team channels and group conversations for efficient collaboration across departments."
    },
    {
      icon: "📎",
      title: "File Sharing",
      description: "Share documents, images, and files securely within conversations with preview support."
    },
    {
      icon: "🔒",
      title: "End-to-End Encryption",
      description: "Your messages are encrypted and secure, ensuring confidential business communications."
    },
    {
      icon: "📱",
      title: "Multi-Platform",
      description: "Access your messages from desktop, mobile, or web - stay connected anywhere."
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Customizable notification settings to help you stay focused while never missing important messages."
    },
    {
      icon: "🎥",
      title: "Voice & Video Calls",
      description: "Built-in voice and video calling for face-to-face meetings without leaving the app."
    },
    {
      icon: "🔍",
      title: "Advanced Search",
      description: "Quickly find messages, files, and conversations with powerful search capabilities."
    }
  ];

  const useCases = [
    {
      title: "Internal Team Communication",
      description: "Connect your workforce with instant messaging, reducing email overload and speeding up decision-making.",
      icon: "🏢"
    },
    {
      title: "Customer Support",
      description: "Provide real-time support to your customers with integrated chat support features.",
      icon: "🎧"
    },
    {
      title: "Project Collaboration",
      description: "Keep project teams aligned with dedicated channels, file sharing, and task integration.",
      icon: "📋"
    },
    {
      title: "Remote Work",
      description: "Enable seamless communication for distributed teams with video calls and screen sharing.",
      icon: "🏠"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-amber-900 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <div className="flex items-center gap-3 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-2">
              <span className="text-orange-300 text-sm font-medium">Business Messaging</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Enterprise <span className="text-orange-400">Messaging</span> Solution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-orange-200 max-w-3xl mx-auto mb-8"
          >
            Secure, scalable messaging platform designed for modern businesses.
            Connect your teams, enhance collaboration, and boost productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-orange-200 text-lg max-w-2xl mx-auto">
              Everything you need for effective business communication in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-orange-200 text-lg max-w-2xl mx-auto">
              See how businesses are using our messaging solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-8 border border-slate-700"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Integration</h2>
            <p className="text-orange-200 text-lg mb-8">
              Our messaging application integrates seamlessly with our ERP system and other business tools,
              creating a unified communication ecosystem for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-slate-900 px-6 py-3 rounded-lg border border-slate-700">
                <span className="text-white font-medium">ERP Integration</span>
              </div>
              <div className="bg-slate-900 px-6 py-3 rounded-lg border border-slate-700">
                <span className="text-white font-medium">CRM Integration</span>
              </div>
              <div className="bg-slate-900 px-6 py-3 rounded-lg border border-slate-700">
                <span className="text-white font-medium">Email Integration</span>
              </div>
              <div className="bg-slate-900 px-6 py-3 rounded-lg border border-slate-700">
                <span className="text-white font-medium">Calendar Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Team Communication?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Start using our messaging platform today and see the difference in your team&apos;s productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-orange-600 hover:bg-orange-50 rounded-lg px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg px-8 py-4 font-semibold text-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
