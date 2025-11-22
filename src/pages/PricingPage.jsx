import Navbar from '../components/Navbar'

const tiers = [
  {
    name: 'Starter',
    price: '$29/mo',
    description: 'For solo dentists getting started with online bookings.' ,
    features: ['100 bookings/mo', 'Email reminders', '2 staff accounts', 'Basic analytics'],
  },
  {
    name: 'Growth',
    price: '$79/mo',
    description: 'For growing practices that want to automate more.',
    features: ['Unlimited bookings', 'SMS + Email reminders', 'Unlimited staff', 'Advanced analytics'],
  },
  {
    name: 'Clinic',
    price: '$149/mo',
    description: 'For multi‑location clinics that need scale and security.',
    features: ['Multi-location', 'Custom branding', 'Priority support', 'HIPAA BAA'],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900">Pricing</h1>
        <p className="mt-3 text-slate-600">Start free, upgrade as you grow.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-1 text-3xl font-bold text-slate-900">{t.price}</p>
              <p className="mt-2 text-sm text-slate-600">{t.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700">Get started</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
