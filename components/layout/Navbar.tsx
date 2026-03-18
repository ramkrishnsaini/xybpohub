'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
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
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)

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
              // ── Dropdown item ─────────────────────────────────────────
              // The entire <li> is the hover zone. A transparent padding
              // bridge (pt-3) below the button fills the visual gap so the
              // mouse never leaves the group while travelling to the panel.
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-slate-bpo font-medium text-sm hover:text-navy transition-colors py-2"
                >
                  {item.label}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Invisible bridge: keeps the hover group alive over the gap */}
                <div className="absolute top-full left-0 w-full h-3 bg-transparent" />

                {/* Dropdown panel */}
                <div
                  className={[
                    'absolute top-[calc(100%+8px)] left-0 w-60',
                    'bg-white border border-gray-100 rounded-2xl shadow-card-hover py-2',
                    // Hidden by default; visible on group hover
                    'opacity-0 invisible translate-y-1',
                    'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0',
                    'transition-all duration-150 ease-out',
                  ].join(' ')}
                >
                  {/* Link to the parent /solutions/ page */}
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-navy hover:bg-mist transition-colors border-b border-gray-100 mb-1"
                  >
                    <span className="text-teal">→</span> All Solutions
                  </Link>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-slate-bpo hover:text-navy hover:bg-mist transition-colors rounded-lg mx-1"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
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
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/919022455556?text=${encodeURIComponent("Hi, I'm interested in XyBPO Hub. Can you please share more details?")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-4 py-2.5 rounded-full text-sm transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
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
              {item.children ? (
                <>
                  {/* Tappable row: label + chevron */}
                  <button
                    className="flex items-center justify-between w-full py-2.5 text-slate-bpo font-medium hover:text-navy text-left"
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {mobileSolutionsOpen && (
                    <div className="pl-4 space-y-0.5 border-l-2 border-teal/30 ml-2 mb-2">
                      <Link
                        href={item.href}
                        className="block py-2 text-sm font-semibold text-teal-dark hover:text-navy"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Solutions →
                      </Link>
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
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2.5 text-slate-bpo font-medium hover:text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href={`https://wa.me/919022455556?text=${encodeURIComponent("Hi, I'm interested in XyBPO Hub. Can you please share more details?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold w-full py-3 rounded-full text-sm transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/demo/"
              className="btn-teal w-full text-center py-3 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Book A Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
