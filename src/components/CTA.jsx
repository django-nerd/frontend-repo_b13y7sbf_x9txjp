export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-slate-900">Ready to see it in action?</h3>
          <p className="mt-2 text-slate-600">Book a 15‑minute demo and we’ll tailor it to your practice.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-700">Book a demo</a>
            <a href="/pricing" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">See pricing</a>
          </div>
        </div>
      </div>
    </section>
  )
}
