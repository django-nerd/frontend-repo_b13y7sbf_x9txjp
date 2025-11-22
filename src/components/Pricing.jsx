const tiers = [
  {
    name: 'Starter',
    price: '$29',
    period: 'mo',
    features: ['100 bookings/mo', 'Email reminders', '2 staff accounts', 'Basic analytics'],
    cta: 'Start free trial',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$79',
    period: 'mo',
    features: ['Unlimited bookings', 'SMS + Email reminders', 'Unlimited staff', 'Advanced analytics'],
    cta: 'Choose Growth',
    popular: true,
  },
  {
    name: 'Clinic',
    price: '$149',
    period: 'mo',
    features: ['Multi-location', 'Custom branding', 'Priority support', 'HIPAA BAA'],
    cta: 'Talk to sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Pick a plan that fits your practice today and scale as you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.popular ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'} bg-white p-6 shadow-sm`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                {tier.popular && (
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">Most popular</span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">/{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/pricing" className={`mt-6 block w-full text-center rounded-md px-4 py-2 text-sm font-medium ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
