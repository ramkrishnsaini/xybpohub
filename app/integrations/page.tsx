import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Integrations — Connect XyBPO Hub to Your Stack',
  description:
    'XyBPO Hub integrates with VICIDIAL, Twilio, Stripe, Salesforce, Zoho, PayPal, Zapier, and more. REST API and Webhooks for custom integrations.',
  alternates: { canonical: 'https://xybpohub.com/integrations/' },
}

const integrationGroups = [
  {
    category: 'Dialers',
    icon: '📞',
    bg: 'bg-mint',
    items: [
      { name: 'VICIDIAL', desc: 'Native dialer data sync. Lead status, call disposition, and agent activity synced in real time.' },
      { name: 'Five9', desc: 'Cloud dialer integration via API. Campaign routing and agent status synchronization.' },
      { name: 'Genesys', desc: 'Enterprise contact center integration. Call metadata and recording transfer.' },
      { name: 'Twilio', desc: 'SIP trunk integration. Programmable voice for outbound campaigns and IVR workflows.' },
    ],
  },
  {
    category: 'Payment',
    icon: '💳',
    bg: 'bg-coral',
    items: [
      { name: 'Stripe', desc: 'Credit card tokenization and subscription billing. Webhook-based payment confirmation.' },
      { name: 'PayPal', desc: 'ACH and card processing for U.S.-based subscription campaigns.' },
      { name: 'Authorize.net', desc: 'Direct merchant integration for recurring billing and one-time payments.' },
      { name: 'NMI', desc: 'Gateway support for high-risk and mid-risk merchant accounts common in BPO campaigns.' },
    ],
  },
  {
    category: 'CRM & Sales',
    icon: '🎯',
    bg: 'bg-lavender',
    items: [
      { name: 'Salesforce', desc: 'Bi-directional lead and sale sync. Campaign performance data pushed to Salesforce objects.' },
      { name: 'Zoho CRM', desc: 'Lead transfer and deal creation in real time as sales are confirmed in XyBPO Hub.' },
      { name: 'HubSpot', desc: 'Contact creation and deal pipeline sync for campaign owners using HubSpot.' },
    ],
  },
  {
    category: 'Automation & Reporting',
    icon: '⚙️',
    bg: 'bg-amber-bpo',
    items: [
      { name: 'Zapier', desc: '5,000+ app connections. Trigger workflows on any XyBPO Hub sale, lead, or QA event.' },
      { name: 'Make (Integromat)', desc: 'Complex multi-step automations triggered by webhook events from XyBPO Hub.' },
      { name: 'Google Sheets', desc: 'Export any report to Google Sheets on schedule or on demand for client sharing.' },
      { name: 'Power BI', desc: 'Custom BI dashboards built on top of XyBPO Hub data via REST API.' },
    ],
  },
]

export default function IntegrationsPage() {
  return (
    <>
      <section className="section-padding bg-warm-white">
        <div className="section-container text-center">
          <SectionTag variant="teal" className="mb-5">Integrations</SectionTag>
          <h1 className="heading-xl max-w-2xl mx-auto mb-6">
            Connect XyBPO Hub to the Tools You Already Use.
          </h1>
          <p className="body-lg max-w-xl mx-auto mb-10">
            Native integrations and open APIs mean XyBPO Hub plugs into your existing stack in hours — not weeks. From dialers to payment gateways to CRMs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo/" className="btn-primary px-8 py-3.5 text-sm">Talk to an Integration Specialist →</Link>
          </div>
        </div>
      </section>

      {/* Integration cards */}
      <section className="section-padding bg-mist">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationGroups.map((group) => (
              <div key={group.category} className={`${group.bg} rounded-2xl p-8`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{group.icon}</span>
                  <h2 className="text-lg font-extrabold text-navy">{group.category}</h2>
                </div>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="bg-white/60 rounded-xl p-4">
                      <span className="text-sm font-bold text-navy">{item.name}</span>
                      <p className="text-xs text-slate-bpo mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API section */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag variant="teal" className="mb-5">For Developers</SectionTag>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5">
                Full REST API & Webhook Support
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Every sale, lead, and QA event in XyBPO Hub is available via REST API. Configure Webhooks per campaign for real-time push delivery. OAuth 2.0 authentication, sandbox environment, and dedicated technical onboarding for enterprise accounts.
              </p>
              <ul className="space-y-3">
                {['REST API for all events', 'Webhook delivery per campaign', 'OAuth 2.0 authentication', 'Sandbox environment', 'Rate limiting & retry logic', 'Dedicated API docs'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-teal shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a1525] rounded-2xl p-6 font-mono text-xs">
              <pre className="text-teal leading-relaxed">
{`GET /api/v1/campaigns/:id/sales
Authorization: Bearer YOUR_TOKEN

Response 200:
{
  "sales": [
    {
      "id": "sale_9x2k",
      "agent": "Rahul S.",
      "verifier": "Priya K.",
      "product": "Health Shield Pro",
      "amount": 29.99,
      "status": "confirmed",
      "qa_score": 94,
      "timestamp": "2026-03-18T14:22:31Z"
    }
  ],
  "total": 138,
  "revenue": 4138.62
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
