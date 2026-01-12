"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const services = [
    {
      title: "Enterprise Resource Planning",
      description: "Comprehensive ERP solutions covering Human Capital Management, Financial Control, Materials Management, CRM, and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-purple-500 to-violet-500",
      href: "/services/erp",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "Messaging Application",
      description: "Secure, scalable messaging solutions for businesses to enhance communication and collaboration across teams.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "from-orange-500 to-amber-500",
      href: "/services/messaging",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80"
    },
    {
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce platforms with payment integration, inventory management, and customer analytics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-purple-500 to-orange-500",
      href: "/services/ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    }
  ];

  const erpModules = [
    { name: 'Human Capital Management', icon: '👥', desc: 'HR & workforce management' },
    { name: 'Financial Control', icon: '💰', desc: 'Accounting & reporting' },
    { name: 'Materials Management', icon: '📦', desc: 'Inventory & supply chain' },
    { name: 'CRM Solutions', icon: '🤝', desc: 'Customer relationships' },
    { name: 'Spending Management', icon: '📊', desc: 'Budget & expenses' },
    { name: 'Transport Management', icon: '🚚', desc: 'Fleet & logistics' },
    { name: 'Production Management', icon: '🏭', desc: 'Engineering & manufacturing' },
    { name: 'Business Process', icon: '⚙️', desc: 'Workflow automation' },
  ];

  const advantages = [
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom-built enterprise solutions designed specifically for your business needs and workflows.'
    },
    {
      icon: '⚡',
      title: 'Fast Implementation',
      description: 'Quick deployment with minimal disruption to your existing operations and processes.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols ensuring your data remains protected at all times.'
    },
    {
      icon: '🌍',
      title: 'Local Expertise',
      description: 'Deep understanding of the Zimbabwean market with solutions tailored for African businesses.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 customer support with a team that understands your business challenges.'
    },
    {
      icon: '🚀',
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business, from startup to enterprise level.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900">
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-40 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute bottom-20 left-1/3 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <div className="flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-purple-300 text-sm font-medium">Enterprise Solutions Since 2020</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-violet-400"
          >
            Transforming Business with
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            <span className="text-orange-400">Smart</span>
            <span className="text-white"> Enterprise </span>
            <span className="text-purple-400">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto"
          >
            ERP Systems | Messaging Applications | E-commerce Platforms
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/services/erp" className="group relative bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 flex items-center gap-2 cursor-pointer">
              Explore Our Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/contact" className="group bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 text-purple-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
              Get in Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 0.5)' }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 cursor-pointer group"
              >
                <motion.div
                  className="text-3xl font-bold text-orange-400 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 via-transparent to-orange-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400"></div>
                <h3 className="uppercase tracking-wider text-orange-400 text-sm font-semibold">
                  Who We Are
                </h3>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Sangfroid Technologies:{' '}
                <span className="text-orange-400">Empowering</span> Businesses with{' '}
                <span className="text-purple-400">Innovation</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex flex-col gap-6 justify-center"
            >
              <p className="text-purple-100 text-lg leading-relaxed">
                Founded on 4th May 2020 by Timothy Hwizah, Sangfroid Technologies has grown to become
                a trusted partner for businesses seeking comprehensive enterprise solutions. Based in
                Chitungwiza, Zimbabwe, we specialize in delivering powerful ERP systems, messaging
                applications, and e-commerce platforms.
              </p>
              <p className="text-purple-100 text-lg leading-relaxed">
                Our team combines technical excellence with deep business understanding to deliver
                solutions that drive real results. We believe in building lasting partnerships with
                our clients, understanding their unique challenges, and crafting solutions that
                propel their growth.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-semibold rounded-lg px-8 py-3 text-base shadow-lg transition-all duration-300 hover:scale-105 w-fit cursor-pointer group">
                Learn Our Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
              <h3 className="uppercase tracking-wider text-orange-400 text-sm font-semibold">
                Our Services
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              End-to-end enterprise solutions designed to streamline your operations
              and accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden cursor-pointer block h-full"
                >
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                    <div className="absolute bottom-4 left-4">
                      <motion.div
                        className={`inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-purple-200 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-4 transition-all">
                      Learn More
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-24 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
              <h3 className="uppercase tracking-wider text-purple-400 text-sm font-semibold">
                ERP Modules
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Complete ERP Ecosystem
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Integrated modules designed to cover every aspect of your enterprise operations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {erpModules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 0.5)' }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center cursor-pointer group"
              >
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {module.icon}
                </motion.div>
                <h4 className="text-white font-semibold mb-1">{module.name}</h4>
                <p className="text-slate-400 text-sm">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
                <h3 className="uppercase tracking-wider text-orange-400 text-sm font-semibold">
                  Why Choose Us
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                The Sangfroid Advantage
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 group"
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                Business?
              </span>
            </h2>
            <p className="text-xl mb-12 text-purple-100 leading-relaxed">
              Let&apos;s discuss how Sangfroid Technologies can help streamline your operations
              and drive growth with our comprehensive enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-10 py-5 rounded-lg shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 hover:shadow-orange-500/50 cursor-pointer">
                Get Started Today
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-transparent border-2 border-orange-400 hover:bg-orange-400/10 text-orange-300 hover:text-white px-10 py-5 rounded-lg shadow-lg transition-all duration-300 font-bold text-lg cursor-pointer">
                Contact Us
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
