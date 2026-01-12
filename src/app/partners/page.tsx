import Link from "next/link";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl text-blue-200">
            Building the future together through strategic partnerships
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "ZCHPC", type: "Research Partner", description: "High-performance computing research" },
            { name: "Drayce Systems", type: "Technology Partner", description: "Enterprise software solutions" },
            { name: "TechInnovate Africa", type: "Innovation Partner", description: "African tech ecosystem development" },
            { name: "BlockChain Solutions Ltd", type: "Blockchain Partner", description: "DLT implementation expertise" },
            { name: "AI Dynamics", type: "AI Partner", description: "Advanced ML research" },
            { name: "CloudInfra Solutions", type: "Infrastructure Partner", description: "Cloud infrastructure services" },
          ].map((partner, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{partner.name}</h3>
              <p className="text-blue-500 font-medium mb-3">{partner.type}</p>
              <p className="text-slate-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl mb-8 text-blue-100">Join our ecosystem of innovative partners</p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 rounded-lg px-8 py-3 font-semibold text-lg shadow-lg">
            Partner With Us
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
