import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(1000px_400px_at_50%_-10%,#93c5fd,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900"
            >
              The modern way to grow your dental practice
            </motion.h1>
            <p className="mt-5 text-lg text-slate-600">
              An all‑in‑one platform for bookings, reminders, patient forms and growth analytics — built for dentists.
            </p>

            <ul className="mt-6 space-y-3">
              {['Online bookings', 'Automated reminders', 'Digital intake forms', 'HIPAA-ready security'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-700 transition-colors">
                See Pricing
              </a>
              <a href="/contact" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Book a Demo
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl p-6"
          >
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-50 to-sky-100 grid place-items-center">
              <img src="/dental-hero.png" alt="Dental software" className="w-4/5 object-contain" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl shadow p-4">
              <p className="text-sm font-medium text-slate-700">24/7 Booking</p>
              <p className="text-xs text-slate-500">Reduce no‑shows by 32%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
