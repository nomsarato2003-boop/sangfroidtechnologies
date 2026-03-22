import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Apps */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Apps</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/erp" className="text-gray-400 hover:text-white text-sm transition-colors">
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/messaging" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Messaging
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-gray-400 hover:text-white text-sm transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services/digital-bank" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Digital Bank
                </Link>
              </li>
            </ul>
          </div>

          {/* ERP Modules */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">ERP Modules</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/erp/hcbpm" className="text-gray-400 hover:text-white text-sm transition-colors">
                  HCBPM
                </Link>
              </li>
              <li>
                <Link href="/services/erp/finance" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/services/erp/mm" className="text-gray-400 hover:text-white text-sm transition-colors">
                  MM
                </Link>
              </li>
              <li>
                <Link href="/services/erp/crm" className="text-gray-400 hover:text-white text-sm transition-colors">
                  CRM
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>2202 St Mary&apos;s</li>
              <li>Chitungwiza, Zimbabwe</li>
              <li className="pt-2">
                <a href="mailto:ceo@sangfroidtechnologies.com" className="hover:text-white transition-colors">
                  ceo@sangfroidtechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-xl text-white">
              Sangfroid
            </Link>
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/timothy-hwizah-8641b5248" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
