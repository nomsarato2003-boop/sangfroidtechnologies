import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-violet-800 py-16">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-purple-200">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-6">
              Sangfroid Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website sangfroidtechnologies.com or use our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-4">We may collect information about you in various ways:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company information when you contact us or request our services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
              <li><strong>Device Data:</strong> Information about your device, browser type, IP address, and operating system.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Sharing</h2>
            <p className="text-slate-600 mb-6">
              We do not sell your personal information. We may share your data with trusted third-party
              service providers who assist us in operating our business, subject to confidentiality agreements.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
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
