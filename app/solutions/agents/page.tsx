import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'For BPO Agents — One Screen. Every Tool. Zero Switching.',
  description:
    'XyBPO Hub gives BPO agents a single-screen workflow for live calls — lead capture, address auto-complete, payment collection, and verifier transfer. No tab switching.',
  alternates: { canonical: 'https://xybpohub.com/solutions/agents/' },
}

const features = [
  { icon: '🖥️', title: 'Single-Screen Disposition Form', body: 'Lead info, script guide, disposition fields, and payment form — all visible on one screen during the live call. No switching, no confusion.' },
  { icon: '⚡', title: 'Address & Data Auto-Complete', body: 'Customer address, email, and profile fields auto-complete in real time. Fewer errors, faster handle time, cleaner data for the campaign owner.' },
  { icon: '💳', title: 'Payment Collection During Live Call', body: 'Collect Credit Card, ACH, or Bank Account details inside the platform — no redirect, no third-party handoff. PCI-compliant tokenization.' },
  { icon: '🔄', title: 'One-Click Verifier Transfer', body: 'After core sale, one click initiates a SIP warm transfer to a verifier. Full order context passes automatically — no re-reading the customer their details.' },
  { icon: '📊', title: 'Personal Performance Dashboard', body: 'Agents see their own live conversion rate, today\'s sales count, upsell contributions, and leaderboard rank — driving performance without manager intervention.' },
  { icon: '📋', title: 'Embedded Script Guide', body: 'Campaign scripts display contextually during the call. Agents follow the flow without a separate document — compliance built into the interface.' },
]

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTag variant="teal" className="mb-5">For Agents</SectionTag>
              <h1 className="heading-xl mb-6">
                The Tool That Lets Agents Focus on the Call.
              </h1>
              <p className="body-lg mb-4">
                Agents lose 30–40% of call time toggling between systems, re-entering data, and waiting for forms to load.
              </p>
              <p className="body-lg mb-8">
                With XyBPO Hub, everything an agent needs is on one screen — the moment the call connects. Lead auto-populates. Address auto-completes. Payment collects. Transfer fires in one click.
              </p>
              <Link href="/demo/" className="btn-primary px-8 py-3.5 text-sm">
                See Agent Demo →
              </Link>
            </div>
            {/* Agent screen mockup */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-hero p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="font-bold text-navy text-sm">📞 Active Call — Campaign: Health Shield Pro</span>
                <span className="bg-lime-bpo text-green-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
                  LIVE
                </span>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  ['Customer Name', 'John Matthews'],
                  ['Phone', '(555) 847-2219 ✅ DNC Clear'],
                  ['Address', '142 Oak Drive, Austin TX → Auto-filled'],
                  ['Product', 'Health Shield Pro — $29.99/mo'],
                  ['Payment', 'VISA **** 4821 — Collected ✅'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-start justify-between text-xs">
                    <span className="text-slate-bpo font-medium w-28 shrink-0">{label}</span>
                    <span className="text-navy font-semibold text-right">{val}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-teal text-white rounded-xl py-3 text-sm font-bold">
                🔄 Transfer to Verifier →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-mist">
        <div className="section-container">
          <h2 className="heading-md mb-10">Built around how agents actually work.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 shadow-card card-hover">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-slate-bpo leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
