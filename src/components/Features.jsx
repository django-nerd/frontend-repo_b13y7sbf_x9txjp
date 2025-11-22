import { CalendarClock, ShieldCheck, FileSpreadsheet, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: CalendarClock,
    title: 'Smart Scheduling',
    description: 'Let patients book online with automated confirmations and reminders.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    description: 'HIPAA-ready security with encrypted data and access controls.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Digital Forms',
    description: 'Paperless intake, consent, and medical history forms on any device.',
  },
  {
    icon: BarChart3,
    title: 'Practice Analytics',
    description: 'Track growth, no-shows, and revenue with clear dashboards.',
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600">Purpose-built tools to streamline your practice.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
