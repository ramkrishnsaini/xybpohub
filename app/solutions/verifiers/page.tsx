import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'For BPO Verifiers — Verify Faster. Upsell Smarter.',
  description:
    'XyBPO Hub gives verifiers warm transfers with full order context. No re-entry, no re-asking. Structured upsell workflows that increase average order value on every call.',
  alternates: { canonical: 'https://xybpohub.com/solutions/verifiers/' },
}

const features = [
  { icon: '📬', title: 'Warm Transfer with Full Context', body: 'When the call arrives, the complete order — customer details, product, payment info — is already on screen. No reading back. No re-entering.' },
  { icon: '💰', title: 'Structured Upsell Workflows', body: 'Pre-configured upsell presentations per product. Verifiers follow a guided flow — no improvising, no missed upsell opportunities.' },
  { icon: '📊', title: 'Upsell Rate Tracking', body: 'Every upsell acceptance and rejection is tracked by product, campaign, and agent. Managers see exactly what\'s converting and what isn\'t.' },
  { icon: '📋', title: 'Compliance Script Prompts', body: 'Compliance disclosures and confirmation scripts display contextually. Verifiers can\'t skip required statements — it\'s enforced at the interface level.' },
  { icon: '✅', title: 'Real-Time Order Validation', body: 'Address, payment, and product details are validated in real time before confirmation. Reduces chargebacks and post-sale corrections.' },
  { icon: '🎯', title: 'Per-Verifier Performance Dashboard', body: 'Track upsell conversion rate, order confirmation rate, and revenue contribution per verifier. Full leaderboard visibility.' },
]

export default function VerifiersPage() {
  return (
    <>
      <section className="section-padding bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTag variant="orange" className="mb-5">For Verifiers</SectionTag>
              <h1 className="heading-xl mb-6">
                Verify Faster. Upsell Smarter. Zero Re-Entry.
              </h1>
              <p className="body-lg mb-4">
                Verifiers re-asking for information agents already collected is the #1 reason customers hang up before confirmation.
              </p>
              <p className="body-lg mb-8">
                With XyBPO Hub, when a verifier receives a warm transfer, the complete order is already on their screen. They verify, upsell from the structured workflow, and confirm — without starting from scratch.
              </p>
              <Link href="/demo/" className="btn-primary px-8 py-3.5 text-sm">
                See Verifier Demo →
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-hero p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="font-bold text-navy text-sm">🔄 Verifier Screen — Warm Transfer Received</span>
                <span className="bg-coral text-orange-700 text-xs font-bold px-3 py-1 rounded-full">VERIFYING</span>
              </div>
              <div className="bg-lime-bpo rounded-xl p-4 mb-4 text-xs">
                <span className="font-bold text-green-800">✅ Order Pre-Filled by Agent:</span>
                <p className="text-green-700 mt-1">John Matthews · Health Shield Pro · VISA **** 4821 · $29.99/mo</p>
              </div>
              <div className="space-y-2 mb-5">
                <p className="text-xs font-bold text-navy">📋 Upsell Offer — Step 1 of 2:</p>
                <div className="bg-amber-bpo rounded-xl p-4 text-xs text-navy font-medium">
                  &ldquo;I can also add our Vision Plus add-on for just $9.99/mo — would you like to include that today?&rdquo;
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-teal text-white rounded-xl py-2.5 text-xs font-bold">✅ Accepted</button>
                <button className="flex-1 bg-mist text-slate-bpo rounded-xl py-2.5 text-xs font-bold">❌ Declined</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist">
        <div className="section-container">
          <h2 className="heading-md mb-10">Everything a verifier needs to confirm and upsell.</h2>
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
