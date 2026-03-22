import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Sangfroid Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website sangfroidtechnologies.com or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 mb-3">We may collect information about you in various ways:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and company information when you contact us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website.</li>
                <li><strong>Device Data:</strong> Information about your device, browser type, and IP address.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information. We may share your data with trusted third-party
                service providers who assist us in operating our business, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-900 font-medium">Sangfroid Technologies</p>
                <p className="text-gray-600">2202 St Mary&apos;s, Chitungwiza, Zimbabwe</p>
                <p className="text-gray-600">ceo@sangfroidtechnologies.com</p>
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
