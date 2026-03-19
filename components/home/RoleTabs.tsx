'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'

const roles = [
  {
    id: 'agents',
    label: 'Agents',
    icon: '📞',
    quote: '"I don\'t toggle between five tabs anymore. The lead is there, the script is there, the payment form is there. I just focus on the call."',
    headline: 'Everything an agent needs — on one screen.',
    body: 'Lead info, disposition form, address auto-complete, payment collection, and transfer button — all on a single screen. No switching tools. No re-entry. Just the call.',
    bullets: [
      'Single-screen disposition form',
      'Address & customer data auto-complete',
      'Payment collection during live call (CC/ACH/Bank)',
      'One-click SIP verifier transfer',
      'Personal leaderboard and conversion tracking',
    ],
    href: '/solutions/agents/',
    color: 'border-teal',
    bg: 'bg-mint',
  },
  {
    id: 'verifiers',
    label: 'Verifiers',
    icon: '✅',
    quote: '"I get the call and the full order is already filled in. I verify, upsell, and I\'m done. It\'s seamless."',
    headline: 'Warm transfers arrive with full context.',
    body: 'When a verifier receives a call, the complete order — customer details, product, payment info — is already on screen. No re-asking. Just verify, upsell from the structured workflow, and confirm.',
    bullets: [
      'Warm transfer with complete order context',
      'Structured upsell workflow per product',
      'Upsell rate tracked per agent and campaign',
      'Compliance script prompts built-in',
      'Real-time order validation',
    ],
    href: '/solutions/verifiers/',
    color: 'border-orange-bpo',
    bg: 'bg-coral',
  },
  {
    id: 'center-owners',
    label: 'Center Owners',
    icon: '📈',
    quote: '"I used to get the MIS at 10 PM. Now I watch the numbers live all day. I make decisions during the shift, not after."',
    headline: 'Run your floor without being on the floor.',
    body: 'Live command center for every agent, every team, every campaign. AI anomaly detection fires alerts mid-shift. Automated MIS means no more late-night reporting.',
    bullets: [
      'Multi-agent and multi-campaign live dashboards',
      'AI anomaly detection with real-time alerts',
      'Automated end-of-shift MIS reports',
      'Role-based access for supervisors and QA',
      'Multi-center management — one dashboard for all locations',
    ],
    href: '/solutions/center-owners/',
    color: 'border-purple-bpo',
    bg: 'bg-lavender',
  },
  {
    id: 'campaign-owners',
    label: 'Campaign Owners',
    icon: '🔗',
    quote: '"Every subscription hits our system in real time via API. We don\'t wait for batch files anymore. The data is clean, structured, and instant."',
    headline: 'Real-time data. Zero dependency on batch files.',
    body: 'Manage multiple campaigns and multiple centers from one place. Secure REST API and Webhook delivery of every sale, subscription, and lead event. Full visibility into campaign ROI without logging into each center\'s system.',
    bullets: [
      'Multi-center view — all locations in one dashboard',
      'REST API & Webhook delivery per sale event',
      'Real-time subscription data transfer',
      'Campaign-level ROI dashboard (read-only portal)',
      'Chargeback-reducing validation (BIN, CNAM, address)',
      'QA scores and call recording access',
    ],
    href: '/solutions/campaign-owners/',
    color: 'border-yellow-400',
    bg: 'bg-amber-bpo',
  },
]

export default function RoleTabs() {
  const [active, setActive] = useState(0)
  const role = roles[active]

  return (
    <section className="section-padding bg-warm-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionTag variant="teal" className="mb-4">Built For Every Role</SectionTag>
          <h2 className="heading-lg max-w-xl mx-auto">
            Built for every person in your operation.
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {roles.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border-2 ${
                active === i
                  ? `border-navy bg-navy text-white`
                  : 'border-gray-200 text-slate-bpo hover:border-navy hover:text-navy bg-white'
              }`}
            >
              <span>{r.icon}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className={`${role.bg} border-2 ${role.color} rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10`}>
          {/* Left */}
          <div>
            <blockquote className="text-base lg:text-lg font-semibold text-navy italic leading-relaxed mb-6 border-l-4 border-navy/20 pl-5">
              {role.quote}
            </blockquote>
            <h3 className="text-2xl font-extrabold text-navy mb-3">{role.headline}</h3>
            <p className="text-base text-slate-bpo leading-relaxed mb-6">{role.body}</p>
            <Link
              href={role.href}
              className="btn-primary px-7 py-3 text-sm"
            >
              See {role.label} Features →
            </Link>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-sm font-bold text-navy mb-4 tracking-wider uppercase">Key capabilities</h4>
            <ul className="space-y-3">
              {role.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-navy">
                  <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
