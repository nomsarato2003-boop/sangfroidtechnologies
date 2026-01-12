import Link from "next/link";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-200">
            Build the future of AI and Blockchain with us
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Open Positions</h2>
          <p className="text-lg text-slate-600">Join a team of innovators and problem solvers</p>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { title: "Senior AI Engineer", department: "Engineering", location: "Harare", type: "Full-time" },
            { title: "Blockchain Developer", department: "Engineering", location: "Remote", type: "Full-time" },
            { title: "Product Manager", department: "Product", location: "Harare", type: "Full-time" },
            { title: "UX Designer", department: "Design", location: "Remote", type: "Contract" },
          ].map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                <p className="text-slate-600">{job.department} • {job.location} • {job.type}</p>
              </div>
              <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                Apply
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
