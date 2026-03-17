import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'

const roles = [
  {
    icon: '📞',
    role: 'Agents',
    headline: 'One screen. One call. Full focus.',
    body: 'Lead auto-populates. Address auto-completes. Payment is collected live. One click transfers to verifier. Everything on a single screen — no tab switching during the call.',
    href: '/solutions/agents/',
    color: 'bg-mint',
    tag: 'For Agents',
  },
  {
    icon: '✅',
    role: 'Verifiers',
    headline: 'Receive the call. Order already filled.',
    body: 'Warm transfers arrive with complete context — no re-entry. Verifiers confirm, upsell from structured workflows, and close with compliance scripts built in.',
    href: '/solutions/verifiers/',
    color: 'bg-coral',
    tag: 'For Verifiers',
  },
  {
    icon: '📈',
    role: 'Center Owners',
    headline: 'Live command center. No more 10 PM MIS.',
    body: 'Watch every agent, every shift, every campaign in real time. AI anomaly alerts fire mid-shift. MIS reports generate automatically — no macros, no late nights.',
    href: '/solutions/center-owners/',
    color: 'bg-lavender',
    tag: 'For Center Owners',
  },
  {
    icon: '🔗',
    role: 'Campaign Owners',
    headline: 'Real-time data. Zero batch file dependency.',
    body: 'Every sale and subscription lands in your system via secure API/Webhook the moment a verifier confirms. Clean, structured, validated — no waiting, no manual uploads.',
    href: '/solutions/campaign-owners/',
    color: 'bg-amber-bpo',
    tag: 'For Campaign Owners',
  },
]

export default function PlatformOverview() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionTag variant="teal" className="mb-4">The Platform</SectionTag>
          <h2 className="heading-lg max-w-2xl mx-auto mb-4">
            One Platform. Every Role.<br />Real-Time Control.
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            XyBPO Hub is not a CRM. It&apos;s a complete Sales Operating System — purpose-built for multi-center BPOs running inbound and outbound campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <div key={r.role} className={`${r.color} rounded-2xl p-8 card-hover border border-white/60`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{r.icon}</span>
                <span className="text-xs font-bold bg-white/60 text-navy px-3 py-1 rounded-full">
                  {r.tag}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-3">{r.headline}</h3>
              <p className="text-base text-slate-bpo leading-relaxed mb-5">{r.body}</p>
              <Link
                href={r.href}
                className="inline-flex items-center gap-1.5 text-base font-bold text-navy hover:text-teal-dark transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
