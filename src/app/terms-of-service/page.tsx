import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-violet-800 py-16">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-purple-200">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing and using the services provided by Sangfroid Technologies, you agree to be
              bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Services</h2>
            <p className="text-slate-600 mb-6">
              Sangfroid Technologies provides enterprise solutions including Enterprise Resource Planning (ERP)
              systems, messaging applications, and e-commerce platforms. Our services are subject to the
              specific terms outlined in individual service agreements.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. User Responsibilities</h2>
            <p className="text-slate-600 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with the operation of our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 mb-6">
              All content, software, and materials provided through our services are the property of
              Sangfroid Technologies or our licensors. You may not copy, modify, distribute, or create
              derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Payment Terms</h2>
            <p className="text-slate-600 mb-6">
              Payment terms for our services will be specified in individual service agreements.
              All fees are non-refundable unless otherwise stated. We reserve the right to modify
              our pricing with reasonable notice.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 mb-6">
              To the maximum extent permitted by law, Sangfroid Technologies shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising out of
              your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Termination</h2>
            <p className="text-slate-600 mb-6">
              We reserve the right to suspend or terminate your access to our services at any time
              for violation of these terms or for any other reason we deem appropriate.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Governing Law</h2>
            <p className="text-slate-600 mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of Zimbabwe. Any disputes shall be resolved in the courts of Zimbabwe.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Contact Us</h2>
            <p className="text-slate-600 mb-6">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-slate-100 p-4 rounded-lg mb-6">
              <p className="text-slate-700"><strong>Sangfroid Technologies</strong></p>
              <p className="text-slate-600">2202 St Mary&apos;s, Chitungwiza, Zimbabwe</p>
              <p className="text-slate-600">Email: info@sangfroidtechnologies.com</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
