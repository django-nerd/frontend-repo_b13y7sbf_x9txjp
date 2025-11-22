import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900">About Dentify</h1>
        <p className="mt-4 text-slate-700">
          We’re a team of product designers and healthcare engineers on a mission to modernize dental practices. 
          Our platform helps clinics provide a better patient experience while improving operational efficiency.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { stat: '500+', label: 'Clinics served' },
            { stat: '2.1M', label: 'Appointments booked' },
            { stat: '32%', label: 'Avg. fewer no‑shows' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <p className="text-3xl font-bold text-slate-900">{item.stat}</p>
              <p className="text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
