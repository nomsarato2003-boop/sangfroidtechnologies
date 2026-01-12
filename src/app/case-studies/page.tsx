import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-blue-200">
            Real-world success stories from our clients
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Smart City Traffic Management", industry: "Government", result: "40% reduction in congestion" },
            { title: "Supply Chain Blockchain", industry: "Logistics", result: "99% traceability accuracy" },
            { title: "AI-Powered Fraud Detection", industry: "Finance", result: "85% fraud reduction" },
            { title: "Decentralized Identity System", industry: "Healthcare", result: "Secure patient data sharing" },
            { title: "Predictive Maintenance AI", industry: "Manufacturing", result: "30% downtime reduction" },
            { title: "Marketing Automation Platform", industry: "Retail", result: "2x conversion rate" },
          ].map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <span className="text-blue-500 font-medium text-sm">{study.industry}</span>
              <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3">{study.title}</h3>
              <p className="text-green-600 font-semibold">{study.result}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
