'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Platform', href: '/platform/' },
  { label: 'Features', href: '/features/' },
  {
    label: 'Solutions',
    href: '/solutions/',
    children: [
      { label: 'For Agents', href: '/solutions/agents/' },
      { label: 'For Verifiers', href: '/solutions/verifiers/' },
      { label: 'For Center Owners', href: '/solutions/center-owners/' },
      { label: 'For Campaign Owners', href: '/solutions/campaign-owners/' },
    ],
  },
  { label: 'Integrations', href: '/integrations/' },
  { label: 'Pricing', href: '/pricing/' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-white border-b border-gray-100 backdrop-blur-sm">
      <nav className="section-container flex items-center justify-between h-16 lg:h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-xl font-black tracking-tight text-navy">
          Xy<span className="text-teal">BPO</span>Hub
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-slate-bpo font-medium text-sm hover:text-navy transition-colors"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {item.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-card-hover py-2"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-bpo hover:text-navy hover:bg-mist transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-slate-bpo font-medium text-sm hover:text-navy transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/demo/" className="btn-teal px-5 py-2.5 text-sm">
            Book A Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-warm-white border-t border-gray-100 px-6 py-4 space-y-1">
          {navLinks.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block py-2.5 text-slate-bpo font-medium hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1 border-l-2 border-mist ml-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-sm text-slate-bpo hover:text-navy"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link href="/demo/" className="btn-teal w-full text-center py-3 text-sm" onClick={() => setMobileOpen(false)}>
              Book A Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
