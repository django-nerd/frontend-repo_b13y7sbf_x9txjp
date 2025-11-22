import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Tooth, Phone, FileText, Info, DollarSign, Home as HomeIcon } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/about', label: 'About', icon: Info },
  { to: '/blogs', label: 'Blogs', icon: FileText },
  { to: '/pricing', label: 'Pricing', icon: DollarSign },
  { to: '/contact', label: 'Contact', icon: Phone },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-blue-600 text-white shadow-md group-hover:shadow-lg transition">
              <Tooth className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900 tracking-tight">Dentify</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="ml-3 inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-colors">
              Book a Call
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'}`}>
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block text-center w-full rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-blue-700">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
