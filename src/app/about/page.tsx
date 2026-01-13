"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Handshake, // Client First
  Lightbulb, // Innovation
  Sparkles, // Integrity
  Trophy, // Excellence
  Globe, // Local Expertise
  Users, // Partnership
} from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "Client First", icon: Handshake, description: "We put our clients first, understanding their unique needs." },
    { title: "Innovation", icon: Lightbulb, description: "We explore new technologies to provide cutting-edge solutions." },
    { title: "Integrity", icon: Sparkles, description: "We operate with transparency and honesty in everything." },
    { title: "Excellence", icon: Trophy, description: "We strive for the highest quality in everything we do." },
    { title: "Local Expertise", icon: Globe, description: "We understand the African market and local business needs." },
    { title: "Partnership", icon: Users, description: "We grow alongside our clients with scalable solutions." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            About Sangfroid
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Empowering African businesses with innovative technology solutions since 2020.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-500">
                <p>
                  Sangfroid Technologies was founded on 4th May 2020 by Timothy Hwizah
                  with a vision to provide comprehensive enterprise solutions to businesses
                  across Zimbabwe and beyond.
                </p>
                <p>
                  Based in Chitungwiza, we have grown from a small startup to a trusted
                  technology partner for organizations seeking to modernize their operations.
                </p>
                <p>
                  Our expertise spans Enterprise Resource Planning (ERP) systems, messaging
                  applications, and e-commerce platforms.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-purple-700">4+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-700">99%</div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team Collaboration"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Founder</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-purple-50 p-8 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0 bg-purple-100">
                <Image
                  src="/assets/founder.jpeg"
                  alt="Timothy Hwizah - Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Timothy Hwizah</h3>
                <p className="text-purple-700 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-500">
                  With a passion for technology and entrepreneurship, Timothy founded Sangfroid
                  Technologies to bridge the gap between innovative enterprise solutions and
                  African businesses. His vision continues to drive the company&apos;s growth.
                </p>
                <p className="text-gray-500 mt-4">
                  The need for digitalization is influenced by the 3Es i.e Embrace, Empower, Emancipate. 
                  The founder has embraced his African people, digital knowledge on their behalf, to empower 
                  and emancipate the African people inconsiderate of creed, color, ability, religion, age, and gender.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-purple-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-purple-100 text-lg mb-10">
            Let&apos;s discuss how we can help transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/services/erp"
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              View services
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}