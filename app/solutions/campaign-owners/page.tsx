import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'For Campaign Owners — Real-Time Data. Zero Batch Files.',
  description:
    'XyBPO Hub delivers every sale and subscription to your system via REST API and Webhooks in real time. Full campaign ROI visibility without waiting for batch files.',
  alternates: { canonical: 'https://xybpohub.com/solutions/campaign-owners/' },
}

const features = [
  { icon: '🔗', title: 'REST API & Webhook Delivery', body: 'Every sale event is delivered to your system via REST API or Webhook the moment a verifier confirms the order. OAuth 2.0 auth, sandbox environment included.' },
  { icon: '⚡', title: 'Real-Time Subscription Transfer', body: 'Subscription data — customer details, payment info, product code — transfers to your fulfillment system in real time. No polling, no batch delays.' },
  { icon: '📊', title: 'Campaign ROI Dashboard', body: 'Read-only client portal showing live campaign performance: sales count, lead quality metrics, QA scores, and revenue attribution.' },
  { icon: '🛡️', title: 'Chargeback-Reducing Validation', body: 'BIN validation, CNAM lookup, address verification, and DNC scrubbing on every lead reduce bad sales before they become chargebacks.' },
  { icon: '🔍', title: 'QA Score & Call Recording Access', body: 'Access QA scores and call recordings per sale for compliance verification. Audit trail available for every transaction.' },
  { icon: '📋', title: 'Lead Quality Metrics', body: 'DNC clean rate, duplicate rate, address match rate — all measured and reported per campaign. Full transparency into lead quality from your BPO.' },
]

export default function CampaignOwnersPage() {
  return (
    <>
      <section className="section-padding bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTag variant="amber" className="mb-5">For Campaign Owners</SectionTag>
              <h1 className="heading-xl mb-6">
                Real-Time Data. Zero Dependency on Your BPO&apos;s Timeline.
              </h1>
              <p className="body-lg mb-4">
                You receive batch files at end of day. By the time you validate sales, chargebacks have already started processing and leads have already gone cold.
              </p>
              <p className="body-lg mb-8">
                XyBPO Hub delivers every sale, subscription, and lead event to your system in real time via secure REST API and Webhooks. No waiting, no manual uploads, no stale data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo/" className="btn-primary px-8 py-3.5 text-sm">
                  Talk to Sales →
                </Link>
                <Link href="/integrations/" className="btn-secondary px-8 py-3.5 text-sm">
                  View Integrations
                </Link>
              </div>
            </div>
            {/* API mockup */}
            <div className="bg-navy rounded-2xl p-7 font-mono text-xs">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400 ml-2 font-sans text-xs">Webhook payload — real-time delivery</span>
              </div>
              <pre className="text-teal leading-relaxed overflow-x-auto">
{`POST /webhook/sale-confirmed
Authorization: Bearer ••••••••

{
  "event": "sale.confirmed",
  "timestamp": "2026-03-18T14:22:31Z",
  "campaign_id": "hlth-shield-pro",
  "sale": {
    "customer": "John Matthews",
    "product": "Health Shield Pro",
    "amount": 29.99,
    "billing": "monthly",
    "payment_method": "VISA",
    "qa_score": 94,
    "verified_by": "Priya K."
  }
}`}
              </pre>
              <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                200 OK — Delivered in 180ms
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist">
        <div className="section-container">
          <h2 className="heading-md mb-10">Everything a campaign owner needs for full transparency.</h2>
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
