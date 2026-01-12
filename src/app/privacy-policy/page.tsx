"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, request a demo, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, company name, job title, and any other information you choose to provide."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about your use of our services, including your IP address, browser type, operating system, device identifiers, pages viewed, links clicked, and the date and time of your visit."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies, web beacons, and similar technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions."
        },
        {
          subtitle: "Communications",
          text: "We may use your information to send you promotional communications, such as information about products, services, and events offered by Movella Systems. You can opt-out of receiving these communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We use the information we collect to analyze trends, administer the site, track users' movements around the site, and gather demographic information about our user base as a whole."
        }
      ]
    },
    {
      title: "Information Sharing",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency)."
        },
        {
          subtitle: "Business Transfers",
          text: "We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company."
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols."
        },
        {
          subtitle: "Data Retention",
          text: "We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You may access, correct, or update your personal information by contacting us. We will respond to your request within a reasonable timeframe."
        },
        {
          subtitle: "Deletion",
          text: "You may request deletion of your personal information, subject to certain exceptions. We will take reasonable steps to delete your information from our records."
        },
        {
          subtitle: "Opt-Out",
          text: "You may opt out of receiving promotional communications from us by following the instructions in those messages. If you opt out, we may still send you non-promotional communications."
        }
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Cross-Border Transfers",
          text: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We take appropriate safeguards to require that your personal information remains protected."
        }
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Restrictions",
          text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information."
        }
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide additional notice."
        }
      ]
    },
    {
      title: "Contact Us",
      content: [
        {
          subtitle: "Questions or Concerns",
          text: "If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@movellasystems.com or through our contact page."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">Legal</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Privacy Policy
              </span>
            </h1>

            <p className="text-xl text-blue-200 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>

            <p className="text-slate-400">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Introduction */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-8">
              <p className="text-slate-300 leading-relaxed">
                Movella Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services. Please read this privacy policy carefully.
                If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>

                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-slate-400 mb-6">
                Have questions about our privacy practices?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
