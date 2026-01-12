"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const directors = [
  {
    name: "Farai Rato",
    role: "Chief Executive Officer",
    bio: "Visionary leader with over 15 years of experience in technology innovation and business strategy. Farai drives Movella's mission to transform industries through AI and blockchain convergence.",
    expertise: ["Strategic Leadership", "Business Development", "AI Innovation"],
    image: "FR",
    gradient: "from-blue-500 to-cyan-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "farai@movellasystems.com"
    }
  },
  {
    name: "Nathan Makwara",
    role: "Chief Technology Officer",
    bio: "A seasoned technologist with deep expertise in distributed systems and machine learning. Nathan leads our engineering teams in building cutting-edge solutions that push technological boundaries.",
    expertise: ["Distributed Systems", "Machine Learning", "Cloud Architecture"],
    image: "NM",
    gradient: "from-purple-500 to-pink-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nathan@movellasystems.com"
    }
  },
  {
    name: "Tinotenda Takaendesa",
    role: "Chief Operations Officer",
    bio: "Operations excellence expert with a track record of scaling technology companies. Tinotenda ensures seamless delivery of our solutions while maintaining the highest standards of quality.",
    expertise: ["Operations Management", "Process Optimization", "Quality Assurance"],
    image: "TT",
    gradient: "from-cyan-500 to-teal-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "tinotenda@movellasystems.com"
    }
  },
  {
    name: "Winston Mabhongo",
    role: "Chief Financial Officer",
    bio: "Financial strategist with extensive experience in technology sector investments and corporate finance. Winston drives sustainable growth and financial excellence at Movella.",
    expertise: ["Financial Strategy", "Investment Management", "Corporate Finance"],
    image: "WM",
    gradient: "from-indigo-500 to-purple-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "winston@movellasystems.com"
    }
  }
];

const values = [
  {
    icon: "🚀",
    title: "Innovation First",
    description: "We push boundaries and embrace emerging technologies to solve complex challenges."
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    description: "We work as an extension of your team, committed to your success as our own."
  },
  {
    icon: "🔒",
    title: "Trust & Security",
    description: "We build systems that enterprises can rely on with confidence."
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description: "We create solutions that make a meaningful difference across industries."
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/50 to-purple-900/50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 text-sm font-medium">Our Leadership</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Meet Our Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Visionary leaders driving innovation at the intersection of AI and Blockchain technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <h3 className="uppercase tracking-wider text-cyan-400 text-sm font-semibold">Board of Directors</h3>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our directors bring decades of combined experience in technology, finance, and operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${director.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-500`}></div>

                <div className="relative z-10 p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-24 bg-gradient-to-br ${director.gradient} rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {director.image}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {director.name}
                      </h3>
                      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${director.gradient} font-semibold mb-3`}>
                        {director.role}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {director.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {director.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        <a
                          href={director.social.linkedin}
                          className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                          aria-label={`${director.name} LinkedIn`}
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={director.social.twitter}
                          className="w-10 h-10 bg-slate-700 hover:bg-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                          aria-label={`${director.name} Twitter`}
                        >
                          <FaTwitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${director.social.email}`}
                          className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                          aria-label={`Email ${director.name}`}
                        >
                          <FaEnvelope className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
              <h3 className="uppercase tracking-wider text-purple-400 text-sm font-semibold">What Drives Us</h3>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The principles that guide our decisions and define our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              We&apos;re always looking for talented individuals who share our passion for innovation.
              Join us in building the future of enterprise technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/careers"
                className="group bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg px-8 py-4 font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View Open Positions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg px-8 py-4 font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
