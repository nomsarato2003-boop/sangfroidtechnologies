"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ERPPage() {
  const modules = [
    {
      id: "hcm",
      title: "Human Capital Management",
      icon: "👥",
      description: "Complete HR and workforce management solution",
      features: [
        "Employee records and profiles",
        "Payroll processing and management",
        "Leave and attendance tracking",
        "Performance evaluation",
        "Recruitment and onboarding",
        "Training and development"
      ]
    },
    {
      id: "finance",
      title: "Financial Control & Reporting",
      icon: "💰",
      description: "Comprehensive financial management and reporting",
      features: [
        "General ledger management",
        "Accounts payable/receivable",
        "Budget planning and control",
        "Financial statements and reports",
        "Tax compliance",
        "Multi-currency support"
      ]
    },
    {
      id: "materials",
      title: "Materials Management",
      icon: "📦",
      description: "End-to-end inventory and supply chain control",
      features: [
        "Inventory tracking and control",
        "Procurement management",
        "Supplier relationship management",
        "Warehouse management",
        "Stock level optimization",
        "Barcode/RFID integration"
      ]
    },
    {
      id: "crm",
      title: "Customer Relationship Management",
      icon: "🤝",
      description: "Build stronger customer relationships",
      features: [
        "Contact and lead management",
        "Sales pipeline tracking",
        "Customer communication history",
        "Service ticket management",
        "Customer analytics",
        "Marketing automation"
      ]
    },
    {
      id: "spending",
      title: "Spending Management",
      icon: "📊",
      description: "Control and optimize business expenditure",
      features: [
        "Expense tracking and approval",
        "Purchase order management",
        "Vendor management",
        "Contract management",
        "Spend analytics",
        "Cost center allocation"
      ]
    },
    {
      id: "transport",
      title: "Transport Management",
      icon: "🚚",
      description: "Efficient fleet and logistics management",
      features: [
        "Fleet tracking and management",
        "Route optimization",
        "Driver management",
        "Fuel consumption tracking",
        "Maintenance scheduling",
        "Delivery tracking"
      ]
    },
    {
      id: "production",
      title: "Engineering & Production",
      icon: "🏭",
      description: "Manufacturing and production control",
      features: [
        "Production planning and scheduling",
        "Work order management",
        "Quality control",
        "Bill of materials management",
        "Equipment maintenance",
        "Production analytics"
      ]
    },
    {
      id: "process",
      title: "Business Process Management",
      icon: "⚙️",
      description: "Streamline and automate business workflows",
      features: [
        "Workflow automation",
        "Document management",
        "Approval workflows",
        "Process templates",
        "Task management",
        "Integration capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <div className="flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
              <span className="text-purple-300 text-sm font-medium">Enterprise Resource Planning</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Complete <span className="text-orange-400">ERP</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-purple-200 max-w-3xl mx-auto mb-8"
          >
            Streamline your entire business operations with our comprehensive ERP system.
            From HR to finance, inventory to production - all in one integrated platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              Request a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ERP Modules</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Our ERP system includes comprehensive modules to cover every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                id={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our ERP?</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Built specifically for African businesses with local expertise and global standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🔗",
                title: "Fully Integrated",
                description: "All modules work seamlessly together, eliminating data silos and improving efficiency."
              },
              {
                icon: "📱",
                title: "Cloud-Based",
                description: "Access your business data anywhere, anytime with our secure cloud infrastructure."
              },
              {
                icon: "🎨",
                title: "Customizable",
                description: "Tailored to your specific business needs with flexible configuration options."
              },
              {
                icon: "📈",
                title: "Scalable",
                description: "Grows with your business from startup to enterprise without missing a beat."
              },
              {
                icon: "🔒",
                title: "Secure",
                description: "Enterprise-grade security protecting your sensitive business information."
              },
              {
                icon: "🤝",
                title: "Local Support",
                description: "Dedicated support team that understands your local business environment."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-8 border border-slate-700"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get started with our ERP solution today and experience the difference of truly integrated business management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 rounded-lg px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg px-8 py-4 font-semibold text-lg transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
