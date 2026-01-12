import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the services provided by Sangfroid Technologies, you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Sangfroid Technologies provides enterprise solutions including Enterprise Resource Planning (ERP)
                systems, messaging applications, and e-commerce platforms. Our services are subject to the
                specific terms outlined in individual service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-3">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with the operation of our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content, software, and materials provided through our services are the property of
                Sangfroid Technologies or our licensors. You may not copy, modify, distribute, or create
                derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Payment terms for our services will be specified in individual service agreements.
                All fees are non-refundable unless otherwise stated. We reserve the right to modify
                our pricing with reasonable notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Sangfroid Technologies shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising out of
                your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time
                for violation of these terms or for any other reason we deem appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws
                of Zimbabwe. Any disputes shall be resolved in the courts of Zimbabwe.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-900 font-medium">Sangfroid Technologies</p>
                <p className="text-gray-600">2202 St Mary&apos;s, Chitungwiza, Zimbabwe</p>
                <p className="text-gray-600">info@sangfroidtechnologies.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
