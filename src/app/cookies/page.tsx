import Link from "next/link";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-violet-800 py-16">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-purple-200">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. What Are Cookies?</h2>
            <p className="text-slate-600 mb-6">
              Cookies are small text files that are stored on your device when you visit a website.
              They help websites remember your preferences and improve your browsing experience.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How We Use Cookies</h2>
            <p className="text-slate-600 mb-4">Sangfroid Technologies uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-slate-700 mb-3">Essential Cookies</h3>
            <p className="text-slate-600 mb-4">
              These cookies are necessary for the website to function and cannot be switched off.
              They are usually set in response to actions you take, such as setting your privacy preferences
              or filling in forms.
            </p>

            <h3 className="text-xl font-semibold text-slate-700 mb-3">Performance Cookies</h3>
            <p className="text-slate-600 mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve
              the performance of our site. They help us know which pages are the most and least popular.
            </p>

            <h3 className="text-xl font-semibold text-slate-700 mb-3">Functional Cookies</h3>
            <p className="text-slate-600 mb-6">
              These cookies enable the website to provide enhanced functionality and personalization.
              They may be set by us or by third-party providers whose services we have added to our pages.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Managing Cookies</h2>
            <p className="text-slate-600 mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through settings</li>
              <li><strong>Third-Party Tools:</strong> Various online tools can help you manage cookies across websites</li>
              <li><strong>Opt-Out Links:</strong> Some analytics providers offer opt-out mechanisms</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Third-Party Cookies</h2>
            <p className="text-slate-600 mb-6">
              Some cookies on our website are set by third-party services that appear on our pages.
              We do not control these cookies. Please refer to the respective third-party privacy
              policies for more information.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Updates to This Policy</h2>
            <p className="text-slate-600 mb-6">
              We may update this Cookie Policy from time to time. Any changes will be posted on this
              page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have questions about our use of cookies, please contact us at:
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
