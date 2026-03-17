import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Pricing — Built for BPO Scale',
  description:
    'XyBPO Hub pricing built for BPOs — Starter, Growth, and Enterprise plans. No per-seat penalties. Pricing structured around campaigns and centers. Contact for a quote.',
  alternates: { canonical: 'https://xybpohub.com/pricing/' },
}

const tiers = [
  {
    name: 'Starter',
    badge: null,
    subtitle: 'For single-center BPOs launching their first campaign',
    features: [
      'Up to 2 active campaigns',
      'Up to 25 agents',
      'Live dashboard & real-time MIS',
      'Agent + verifier workflows',
      'Payment collection (CC/ACH/Bank)',
      'DNC / BIN / CNAM validation',
      'Email support',
    ],
    cta: 'Get A Quote →',
    highlighted: false,
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    subtitle: 'For multi-team BPOs running multiple campaigns simultaneously',
    features: [
      'Unlimited active campaigns',
      'Up to 100 agents',
      'AI QA — up to 500 calls/month',
      'REST API & Webhook integration',
      'Multi-center dashboard',
      'Automated MIS & batch reports',
      'Dedicated onboarding specialist',
      'Priority email & chat support',
    ],
    cta: 'Get A Quote →',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    badge: null,
    subtitle: 'For multi-center operations needing full compliance and client transparency',
    features: [
      'Unlimited campaigns & centers',
      'Unlimited agents',
      'Full AI QA + anomaly detection',
      'HIPAA BAA & SOC 2 documentation',
      'Campaign owner client portal',
      'SLA guarantee — 99.9% uptime',
      'Custom SIP integration',
      'Dedicated account manager',
      '24/7 priority support',
    ],
    cta: 'Talk to Sales →',
    highlighted: false,
  },
]

const faqs = [
  {
    q: 'Is pricing per seat or per campaign?',
    a: 'XyBPO Hub pricing is structured around campaigns and centers, not per-agent seats. This means adding agents to an existing campaign doesn\'t increase your base cost.',
  },
  {
    q: 'How quickly can we go live?',
    a: 'Most teams go live with their first campaign in under 30 minutes after onboarding. The role-based setup wizard handles product configuration, script assignment, and agent access.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fee on Starter or Growth. Enterprise accounts include a white-glove onboarding session at no additional charge.',
  },
  {
    q: 'What compliance documentation is available?',
    a: 'Enterprise plans include a HIPAA Business Associate Agreement (BAA) and SOC 2 alignment documentation for client-facing compliance needs.',
  },
  {
    q: 'Can campaign owners get their own access without a full seat?',
    a: 'Yes. Campaign owners receive a read-only client portal included in Growth and Enterprise plans — no separate seat cost.',
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="section-padding bg-warm-white">
        <div className="section-container text-center">
          <SectionTag variant="teal" className="mb-5">Pricing</SectionTag>
          <h1 className="heading-xl max-w-2xl mx-auto mb-5">
            Pricing Built for BPO Scale.
          </h1>
          <p className="body-lg max-w-xl mx-auto">
            No per-seat pricing that penalizes growth. Plans structured around campaigns and centers — so you scale without friction.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="pb-20 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? 'bg-navy text-white border-2 border-teal shadow-2xl scale-105'
                    : 'bg-white border border-gray-200 shadow-card'
                }`}
              >
                {tier.badge && (
                  <span className="inline-block bg-teal text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                    {tier.badge}
                  </span>
                )}
                <h2 className={`text-2xl font-black mb-2 ${tier.highlighted ? 'text-white' : 'text-navy'}`}>
                  {tier.name}
                </h2>
                <p className={`text-sm mb-6 leading-relaxed ${tier.highlighted ? 'text-gray-300' : 'text-slate-bpo'}`}>
                  {tier.subtitle}
                </p>
                <div className={`text-2xl font-black mb-6 ${tier.highlighted ? 'text-teal' : 'text-navy'}`}>
                  Custom Pricing
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${tier.highlighted ? 'text-gray-200' : 'text-slate-bpo'}`}>
                      <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo/"
                  className={tier.highlighted ? 'btn-primary py-3.5 text-sm w-full text-center' : 'btn-secondary py-3.5 text-sm w-full text-center'}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-bpo mt-8">
            All plans include: SSL encryption · 99.9% uptime · U.S. data centers · No hidden fees
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-mist">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="heading-md text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-7 shadow-card">
                <h3 className="text-base font-bold text-navy mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-bpo leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
