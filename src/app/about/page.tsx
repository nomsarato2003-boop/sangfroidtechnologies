import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-violet-900 to-orange-900 text-white py-20">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Businesses with Innovation
          </h1>
          <p className="text-xl text-purple-200">
            Your trusted partner for enterprise solutions since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Our Journey
            </h2>
            <div className="space-y-6 text-slate-600">
              <p>
                Sangfroid Technologies was founded on 4th May 2020 by Timothy Hwizah with a vision
                to provide comprehensive enterprise solutions to businesses across Zimbabwe and beyond.
                Based in Chitungwiza, we have grown from a small startup to a trusted technology partner
                for organizations seeking to modernize their operations.
              </p>
              <p>
                Our expertise spans Enterprise Resource Planning (ERP) systems, messaging applications,
                and e-commerce platforms. We understand the unique challenges faced by African businesses
                and have tailored our solutions to address these specific needs while maintaining
                world-class standards.
              </p>
              <p>
                Today, Sangfroid Technologies serves clients across multiple industries, helping them
                streamline their operations, improve efficiency, and achieve sustainable growth through
                innovative technology solutions.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">4+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">99%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-xl h-96 flex items-center justify-center">
              <span className="text-8xl">🚀</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-orange-500 text-white px-8 py-4 rounded-lg shadow-lg">
              <span className="block text-2xl font-bold">May 2020</span>
              <span className="text-sm">Founded</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Meet Our Founder
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6" />
          </div>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                <Image
                  src="/assets/founder.jpeg"
                  alt="Timothy Hwizah - Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Timothy Hwizah</h3>
                <p className="text-purple-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-slate-600">
                  With a passion for technology and entrepreneurship, Timothy founded Sangfroid Technologies
                  to bridge the gap between innovative enterprise solutions and African businesses.
                  His vision continues to drive the company&apos;s growth and commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Client-Centric Approach",
                description: "We put our clients first, understanding their unique needs and delivering solutions that exceed expectations.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to provide cutting-edge solutions for modern businesses.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "We operate with transparency and honesty, building trust through every interaction and deliverable.",
              },
              {
                icon: "⚡",
                title: "Excellence",
                description: "We strive for the highest quality in everything we do, from code to customer service.",
              },
              {
                icon: "🌍",
                title: "Local Expertise",
                description: "We understand the African market and create solutions tailored for local business environments.",
              },
              {
                icon: "📈",
                title: "Growth Partnership",
                description: "We grow alongside our clients, providing scalable solutions that evolve with their business needs.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Discover how our enterprise solutions can streamline your operations and drive growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 rounded-lg px-8 py-3 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Today
            </Link>
            <Link
              href="/services/erp"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg px-8 py-3 font-semibold text-lg transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
