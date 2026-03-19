import SectionTag from '@/components/ui/SectionTag'

const features = [
  {
    icon: '🏢',
    title: 'Multi-Center Management',
    body: 'For campaign owners, center owners, and BPO agencies. Manage multiple campaigns and multiple centers from one centralized location — view all centers, compare performance, and control campaigns across locations from a single dashboard.',
    bg: 'bg-mint',
    border: 'border-teal/30',
    iconBg: 'bg-teal',
  },
  {
    icon: '📈',
    title: 'Real-Time Sales Tracking',
    body: 'See every sale as it happens. Monitor revenue, agent conversions, and campaign performance live — no refresh needed.',
    bg: 'bg-mint',
    border: 'border-teal/30',
    iconBg: 'bg-teal',
  },
  {
    icon: '💰',
    title: 'Verifier Upsell System',
    body: 'Auto-transfer calls to verifiers after core sales. Structured upsell workflows that increase average order value on every call.',
    bg: 'bg-coral',
    border: 'border-orange-200',
    iconBg: 'bg-orange-bpo',
  },
  {
    icon: '🎯',
    title: 'Campaign Management',
    body: 'Launch multiple campaigns with different products, scripts, agents, and workflows. Go live in minutes with role-based setup.',
    bg: 'bg-lavender',
    border: 'border-purple-200',
    iconBg: 'bg-purple-bpo',
  },
  {
    icon: '👥',
    title: 'Agent Performance Dashboards',
    body: 'Track every agent\'s conversion rate, call duration, and revenue contribution in real time with detailed leaderboards.',
    bg: 'bg-lime-bpo',
    border: 'border-green-200',
    iconBg: 'bg-green-500',
  },
  {
    icon: '📊',
    title: 'MIS & Automated Reporting',
    body: 'Complete management dashboards — agent reports, verifier reports, product performance, and revenue breakdowns — generated automatically.',
    bg: 'bg-amber-bpo',
    border: 'border-yellow-200',
    iconBg: 'bg-yellow-500',
  },
  {
    icon: '🔍',
    title: 'AI-Powered QA & Anomaly Detection',
    body: 'AI reviews call recordings, flags compliance issues, and detects anomalies before they become chargebacks or escalations.',
    bg: 'bg-rose-bpo',
    border: 'border-pink-200',
    iconBg: 'bg-pink-500',
  },
  {
    icon: '📡',
    title: 'SIP-Based Call Routing',
    body: 'Controlled call transfers via SIP middleware. Route calls to verifiers or QA teams with full call metadata preserved end-to-end.',
    bg: 'bg-mint',
    border: 'border-teal/30',
    iconBg: 'bg-teal',
  },
  {
    icon: '💳',
    title: 'Integrated Payment Processing',
    body: 'Collect Credit Card, ACH, and bank details securely during the live call. PCI-compliant. No third-party redirects.',
    bg: 'bg-coral',
    border: 'border-orange-200',
    iconBg: 'bg-orange-bpo',
  },
  {
    icon: '🛡️',
    title: 'DNC / BIN / CNAM Validation',
    body: 'Real-time duplication checks, Do Not Call scrubbing, BIN validation, and CNAM lookup on every lead before an agent dials.',
    bg: 'bg-lavender',
    border: 'border-purple-200',
    iconBg: 'bg-purple-bpo',
  },
  {
    icon: '🔗',
    title: 'Live API & Webhook Integration',
    body: 'Push sales, subscriptions, and lead data to campaign owners in real time via secure REST API and Webhooks. Zero batch file dependency.',
    bg: 'bg-lime-bpo',
    border: 'border-green-200',
    iconBg: 'bg-green-500',
  },
  {
    icon: '⚡',
    title: 'Address & Data Auto-Complete',
    body: 'Reduce agent handle time with auto-complete for customer addresses, emails, and profile data — fewer errors, faster processing.',
    bg: 'bg-amber-bpo',
    border: 'border-yellow-200',
    iconBg: 'bg-yellow-500',
  },
  {
    icon: '🏥',
    title: 'HIPAA-Ready Compliance',
    body: 'SOC 2-aligned architecture hosted in U.S. data centers. Role-based access, encrypted data at rest and in transit, audit logs.',
    bg: 'bg-rose-bpo',
    border: 'border-pink-200',
    iconBg: 'bg-pink-500',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="section-padding bg-warm-white section-edge">
      <div className="section-container">
        <div className="mb-16">
          <SectionTag variant="purple" className="mb-4">Platform Features</SectionTag>
          <h2 className="heading-lg max-w-xl mb-4">
            Everything your BPO sales team needs.
          </h2>
          <p className="body-lg max-w-lg">
            One platform. Zero spreadsheets. Complete visibility from first call to final payment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.bg} border ${f.border} rounded-2xl p-7 card-hover`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center text-xl mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-base text-slate-bpo leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
