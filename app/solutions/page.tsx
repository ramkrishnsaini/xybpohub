import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Solutions — Purpose-Built for Every BPO Role',
  description: 'XyBPO Hub is built for every person in your BPO operation — agents, verifiers, center owners, and campaign owners each get a dedicated workflow.',
  alternates: { canonical: 'https://xybpohub.com/solutions/' },
}

const cards = [
  {
    icon: '📞',
    role: 'For Agents',
    desc: 'One screen. Full workflow. No tab switching during live calls.',
    href: '/solutions/agents/',
    bg: 'bg-mint',
    border: 'border-teal/30',
  },
  {
    icon: '✅',
    role: 'For Verifiers',
    desc: 'Warm transfers arrive with full context. Verify, upsell, confirm — zero re-entry.',
    href: '/solutions/verifiers/',
    bg: 'bg-coral',
    border: 'border-orange-200',
  },
  {
    icon: '📈',
    role: 'For Center Owners',
    desc: 'Live command center. Automated MIS. No more late-night reporting.',
    href: '/solutions/center-owners/',
    bg: 'bg-lavender',
    border: 'border-purple-200',
  },
  {
    icon: '🔗',
    role: 'For Campaign Owners',
    desc: 'Real-time API data delivery. Full ROI visibility. Zero batch files.',
    href: '/solutions/campaign-owners/',
    bg: 'bg-amber-bpo',
    border: 'border-yellow-200',
  },
]

export default function SolutionsPage() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <SectionTag variant="teal" className="mb-5">Solutions</SectionTag>
          <h1 className="heading-xl max-w-2xl mx-auto mb-5">
            Built for every person in your operation.
          </h1>
          <p className="body-lg max-w-xl mx-auto">
            XyBPO Hub gives every role exactly what they need — and nothing they don&apos;t. Select your role to explore the dedicated workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {cards.map((c) => (
            <Link
              key={c.role}
              href={c.href}
              className={`${c.bg} border ${c.border} rounded-2xl p-8 card-hover group block`}
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h2 className="text-xl font-extrabold text-navy mb-2 group-hover:text-teal-dark transition-colors">{c.role}</h2>
              <p className="text-sm text-slate-bpo leading-relaxed">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy group-hover:text-teal-dark transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
