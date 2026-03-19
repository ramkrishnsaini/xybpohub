import type { Metadata } from 'next'
import SectionTag from '@/components/ui/SectionTag'
import { ComplianceBadge } from '@/components/ui/Badge'
import DemoForm from '@/components/demo/DemoForm'

export const metadata: Metadata = {
  title: 'Book A Demo — See XyBPO Hub Running Live in 30 Minutes',
  description:
    'Book a free 30-minute demo of XyBPO Hub. See a live campaign setup, agent view, verifier flow, dashboard, and API output. No sales pressure. Just the product.',
  alternates: { canonical: 'https://xybpohub.com/demo/' },
}

const whatToExpect = [
  { icon: '⚡', text: '30-minute live walkthrough — no slides, just the product' },
  { icon: '🎯', text: 'We configure a sample campaign for your campaign type live' },
  { icon: '📊', text: 'See agent view, verifier view, dashboard, and API output' },
  { icon: '📋', text: 'You leave with a full setup checklist for your team' },
  { icon: '🤝', text: 'No sales pressure — this is a technical demo' },
]

export default function DemoPage() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — form */}
          <div>
            <SectionTag variant="teal" className="mb-5">Book A Demo</SectionTag>
            <h1 className="heading-xl mb-5">
              See XyBPO Hub Running Live in 30 Minutes.
            </h1>
            <p className="body-lg mb-8">
              We&apos;ll walk you through a real campaign setup — agent view, verifier view, live dashboard, and API output — matched to your specific campaign type.
            </p>

            {/* Form */}
            <DemoForm />
          </div>

          {/* Right — what to expect */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-navy rounded-2xl p-8 mb-6">
              <h3 className="text-lg font-extrabold text-white mb-6">What to expect in your demo</h3>
              <ul className="space-y-4">
                {whatToExpect.map((w) => (
                  <li key={w.text} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-lg shrink-0">{w.icon}</span>
                    {w.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-mist rounded-2xl p-7">
              <h4 className="text-sm font-bold text-navy mb-4 tracking-wider uppercase">Your data is protected</h4>
              <div className="flex flex-wrap gap-2">
                <ComplianceBadge label="HIPAA-Ready" />
                <ComplianceBadge label="SOC 2 Aligned" />
                <ComplianceBadge label="U.S. Data Centers" />
                <ComplianceBadge label="SSL Encrypted" />
              </div>
              <p className="mt-4 text-xs text-slate-bpo leading-relaxed">
                Your demo data is never stored or shared. We use a clean sandbox environment for every walkthrough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
