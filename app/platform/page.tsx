import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Platform — The BPO Sales Operating System',
  description:
    'XyBPO Hub is not a generic CRM. It\'s a complete AI-powered Sales Operating System built from scratch for BPOs running live inbound and outbound sales campaigns.',
  alternates: { canonical: 'https://xybpohub.com/platform/' },
}

const layers = [
  {
    name: 'Call Layer',
    color: 'bg-mint border-teal/30',
    iconBg: 'bg-teal',
    icon: '📡',
    items: ['SIP-based call routing & middleware', 'Inbound / outbound call handling', 'DNC / BIN / CNAM validation', 'Real-time deduplication'],
  },
  {
    name: 'Sales Layer',
    color: 'bg-coral border-orange-200',
    iconBg: 'bg-orange-bpo',
    icon: '💼',
    items: ['Agent single-screen UI', 'Verifier warm transfer workflow', 'CC / ACH / Bank payment collection', 'Lead management & disposition'],
  },
  {
    name: 'Intelligence Layer',
    color: 'bg-lavender border-purple-200',
    iconBg: 'bg-purple-bpo',
    icon: '🧠',
    items: ['Live multi-center dashboards', 'AI QA & anomaly detection', 'Automated MIS & batch reports', 'REST API & Webhook delivery'],
  },
]

const whyOS = [
  {
    icon: '📊',
    title: 'A CRM stores data.',
    subtitle: 'An OS runs your business.',
    body: 'XyBPO Hub is the command center your entire team operates from — agents, verifiers, QA, management, and clients all working from the same real-time source of truth.',
  },
  {
    icon: '⚡',
    title: 'Go live in minutes.',
    subtitle: 'Not days or weeks.',
    body: 'Role-based setup means any new campaign or new center goes live in under 5 minutes. Scripts, products, agents, and workflows are configured — not coded.',
  },
  {
    icon: '🔗',
    title: 'Built for every stakeholder.',
    subtitle: 'One platform. Four roles.',
    body: 'Agents, verifiers, center owners, and campaign owners each see exactly what they need — nothing more, nothing less. Role-based access down to the field level.',
  },
]

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-warm-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTag variant="teal" className="mb-5">Platform Overview</SectionTag>
            <h1 className="heading-xl mb-6">
              The Sales OS Your BPO Has Been Missing.
            </h1>
            <p className="body-lg mb-4 max-w-2xl mx-auto">
              Most BPO software was built for generic contact centers. XyBPO Hub was built for one thing — BPOs running live sales campaigns where every second on a call is revenue, or a missed opportunity.
            </p>
            <p className="body-lg mb-10 max-w-2xl mx-auto">
              We didn&apos;t adapt a generic CRM. We built from scratch, starting with the way an agent dispositions a call, the way a verifier confirms an order, and the way a campaign owner measures ROI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/demo/" className="btn-primary px-8 py-3.5 text-sm">Book A Demo →</Link>
              <Link href="/features/" className="btn-secondary px-8 py-3.5 text-sm">All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding bg-mist">
        <div className="section-container">
          <div className="text-center mb-14">
            <SectionTag variant="purple" className="mb-4">Architecture</SectionTag>
            <h2 className="heading-lg mb-4">Three Layers. One System.</h2>
            <p className="body-lg max-w-lg mx-auto">
              XyBPO Hub operates in three interconnected layers — every layer talks to the others in real time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {layers.map((l) => (
              <div key={l.name} className={`${l.color} border rounded-2xl p-8 card-hover`}>
                <div className={`w-12 h-12 ${l.iconBg} rounded-xl flex items-center justify-center text-xl mb-5`}>
                  {l.icon}
                </div>
                <h3 className="text-lg font-extrabold text-navy mb-4">{l.name}</h3>
                <ul className="space-y-2">
                  {l.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-bpo">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OS */}
      <section className="section-padding bg-warm-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <SectionTag variant="orange" className="mb-4">Why "Operating System"</SectionTag>
            <h2 className="heading-lg mb-4">Not a CRM. An Operating System.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyOS.map((w) => (
              <div key={w.title} className="bg-mist rounded-2xl p-8 card-hover">
                <div className="text-3xl mb-4">{w.icon}</div>
                <div className="text-xs font-bold text-teal uppercase tracking-widest mb-1">{w.subtitle}</div>
                <h3 className="text-lg font-bold text-navy mb-3">{w.title}</h3>
                <p className="text-sm text-slate-bpo leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Enterprise-Grade Security & Compliance</h2>
          <p className="text-teal text-lg mb-10 max-w-xl mx-auto">
            Built to meet the compliance requirements of U.S.-based subscription and lead generation campaigns.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {['HIPAA-Ready', 'SOC 2 Aligned', 'U.S. Data Centers', 'PCI-Compliant Payments'].map((badge) => (
              <div key={badge} className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-semibold text-white">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
