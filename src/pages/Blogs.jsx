import Navbar from '../components/Navbar'

const posts = [
  {
    title: 'How to cut no‑shows with smarter reminders',
    excerpt: 'Simple strategies that reduce missed appointments and keep your calendar full.',
    date: 'Oct 2, 2025',
  },
  {
    title: 'Digital intake forms that patients love',
    excerpt: 'Go paperless without the pain. Tips from practices that made the switch.',
    date: 'Sep 18, 2025',
  },
  {
    title: 'What KPIs matter for growing a clinic',
    excerpt: 'Focus on the metrics that actually move the needle in private practices.',
    date: 'Aug 30, 2025',
  },
]

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900">Insights</h1>
        <p className="mt-3 text-slate-600">Practical tips to run a modern dental practice.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
              <p className="text-xs text-slate-500">{p.date}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm text-blue-700 hover:text-blue-800">Read more →</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
