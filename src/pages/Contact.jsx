import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // For now, just simulate submit success
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We will reach out shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900">Contact us</h1>
        <p className="mt-3 text-slate-600">Tell us a bit about your practice and we’ll get back within 1 business day.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700">Send</button>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </form>
      </section>
    </div>
  )
}
