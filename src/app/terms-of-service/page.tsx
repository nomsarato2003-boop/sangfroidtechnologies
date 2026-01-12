"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        {
          text: "By accessing or using the services provided by Movella Systems, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
        },
        {
          text: "We reserve the right to modify these terms at any time. Your continued use of the services following the posting of changes constitutes your acceptance of such changes."
        }
      ]
    },
    {
      title: "Description of Services",
      content: [
        {
          subtitle: "Platform Services",
          text: "Movella Systems provides AI and blockchain-based technology solutions including but not limited to: intelligent transportation systems, AI security solutions, blockchain infrastructure, marketing automation, and related consulting services."
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the services."
        }
      ]
    },
    {
      title: "User Accounts",
      content: [
        {
          subtitle: "Account Creation",
          text: "To access certain features of our services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security."
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without prior notice or liability, for any reason, including breach of these Terms."
        }
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Ownership",
          text: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the compilation thereof, are the exclusive property of Movella Systems and are protected by international copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "License",
          text: "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your personal or internal business purposes."
        },
        {
          subtitle: "Restrictions",
          text: "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services without our prior written consent."
        }
      ]
    },
    {
      title: "User Conduct",
      content: [
        {
          subtitle: "Prohibited Activities",
          text: "You agree not to: (a) use our services for any unlawful purpose; (b) attempt to gain unauthorized access to any portion of our services; (c) interfere with or disrupt the integrity or performance of our services; (d) transmit any viruses, worms, or malicious code; (e) collect or harvest any information from our services; (f) impersonate any person or entity."
        },
        {
          subtitle: "Compliance",
          text: "You agree to comply with all applicable local, state, national, and international laws and regulations in your use of our services."
        }
      ]
    },
    {
      title: "Payment Terms",
      content: [
        {
          subtitle: "Fees",
          text: "Certain services may be subject to fees. You agree to pay all applicable fees as described on our website or in your service agreement. All fees are non-refundable unless otherwise specified."
        },
        {
          subtitle: "Billing",
          text: "We may use third-party payment processors to bill you. The processing of payments will be subject to the terms and privacy policies of such payment processors."
        },
        {
          subtitle: "Taxes",
          text: "You are responsible for paying all taxes associated with your use of our services. If we are required to collect or pay taxes, the taxes will be charged to you."
        }
      ]
    },
    {
      title: "Confidentiality",
      content: [
        {
          subtitle: "Confidential Information",
          text: "Each party agrees to maintain the confidentiality of any confidential or proprietary information disclosed by the other party and to use such information only for the purposes of fulfilling obligations under these Terms."
        },
        {
          subtitle: "Exceptions",
          text: "Confidentiality obligations do not apply to information that: (a) is or becomes publicly available; (b) was known to the receiving party prior to disclosure; (c) is independently developed; or (d) is required to be disclosed by law."
        }
      ]
    },
    {
      title: "Disclaimer of Warranties",
      content: [
        {
          text: "OUR SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT."
        },
        {
          text: "We do not warrant that: (a) the services will meet your requirements; (b) the services will be uninterrupted, timely, secure, or error-free; (c) the results obtained from the use of the services will be accurate or reliable."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        {
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MOVELLA SYSTEMS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES."
        },
        {
          text: "Our total liability for any claims arising out of or relating to these Terms or your use of the services shall not exceed the amount you paid us in the twelve (12) months prior to the claim."
        }
      ]
    },
    {
      title: "Indemnification",
      content: [
        {
          text: "You agree to defend, indemnify, and hold harmless Movella Systems and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the services."
        }
      ]
    },
    {
      title: "Governing Law",
      content: [
        {
          text: "These Terms shall be governed by and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Harare, Zimbabwe for the resolution of any disputes."
        }
      ]
    },
    {
      title: "Dispute Resolution",
      content: [
        {
          subtitle: "Informal Resolution",
          text: "Before filing a claim, you agree to try to resolve the dispute informally by contacting us. We will try to resolve the dispute informally by contacting you via email."
        },
        {
          subtitle: "Arbitration",
          text: "If we cannot resolve a dispute informally, any dispute arising from these Terms shall be resolved through binding arbitration in accordance with applicable arbitration rules."
        }
      ]
    },
    {
      title: "Severability",
      content: [
        {
          text: "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect."
        }
      ]
    },
    {
      title: "Contact Information",
      content: [
        {
          text: "If you have any questions about these Terms of Service, please contact us at legal@movellasystems.com or through our contact page."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              <span className="text-purple-300 text-sm font-medium">Legal</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400">
                Terms of Service
              </span>
            </h1>

            <p className="text-xl text-purple-200 mb-4">
              Please read these terms carefully before using our services.
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
                Welcome to Movella Systems. These Terms of Service (&quot;Terms&quot;) govern your access to and use
                of the Movella Systems website, products, and services (&quot;Services&quot;). By accessing or using
                our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        {"subtitle" in item && item.subtitle && (
                          <h3 className="text-lg font-semibold text-purple-400 mb-2">
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-slate-400 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Agreement Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Agreement to Terms</h3>
                  <p className="text-slate-400">
                    By using our services, you acknowledge that you have read, understood, and agree to be
                    bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-slate-400 mb-6">
                Have questions about our terms?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 text-purple-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
