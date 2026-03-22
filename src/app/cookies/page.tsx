import Link from "next/link";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-500">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website.
                They help websites remember your preferences and improve your browsing experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-3">Sangfroid Technologies uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Essential Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Performance Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies allow us to count visits and traffic sources so we can measure and improve performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Functional Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    These cookies enable the website to provide enhanced functionality and personalization.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Managing Cookies</h2>
              <p className="text-gray-600 mb-3">You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies</li>
                <li><strong>Third-Party Tools:</strong> Various online tools can help you manage cookies</li>
                <li><strong>Opt-Out Links:</strong> Some analytics providers offer opt-out mechanisms</li>
              </ul>
              <p className="text-gray-600 mt-3">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Some cookies on our website are set by third-party services that appear on our pages.
                We do not control these cookies. Please refer to the respective third-party privacy
                policies for more information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this
                page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about our use of cookies, please contact us at:
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
