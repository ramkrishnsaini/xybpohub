import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Features — All Platform Capabilities',
  description:
    'Explore XyBPO Hub features: real-time dashboards, AI QA, SIP call routing, payment processing, DNC validation, MIS automation, API webhooks, and more.',
  alternates: { canonical: 'https://xybpohub.com/features/' },
}

const featureGroups = [
  {
    group: 'Sales Leads Surveys',
    tag: 'teal' as const,
    features: [
      {
        icon: '📈',
        title: 'Real-Time Sales Tracking',
        body: 'See every sale the moment it\'s entered. Live dashboard updates across agents, teams, and campaigns — no polling, no refresh.',
        bullets: ['Revenue counter updates in real time', 'Per-agent and per-campaign breakdowns', 'Hourly, daily, and shift-level views'],
        bg: 'bg-mint',
        border: 'border-teal/30',
        iconBg: 'bg-teal',
      },
      {
        icon: '📋',
        title: 'Lead Management & Disposition',
        body: 'Capture, route, and disposition leads in real time. Single-screen disposition forms with validation, duplicate check, and instant sync to campaign owner systems.',
        bullets: ['Single-screen disposition form', 'Real-time duplicate check', 'Lead status sync to CRM and dialer'],
        bg: 'bg-coral',
        border: 'border-orange-200',
        iconBg: 'bg-orange-bpo',
      },
      {
        icon: '📊',
        title: 'Survey Campaigns',
        body: 'Run structured survey campaigns during live calls. Capture responses in real time, track completion rates by agent and campaign, and export in standard formats.',
        bullets: ['Structured survey scripts per campaign', 'Real-time response capture', 'Completion rates and export to CSV / API'],
        bg: 'bg-lavender',
        border: 'border-purple-200',
        iconBg: 'bg-purple-bpo',
      },
      {
        icon: '💰',
        title: 'Verifier Upsell System',
        body: 'Structured upsell workflows presented to verifiers after every core sale. Track upsell rates by product, agent, and campaign.',
        bullets: ['Pre-configured upsell script per product', 'Acceptance and rejection rates tracked', 'Upsell revenue attributed to verifier'],
        bg: 'bg-amber-bpo',
        border: 'border-yellow-200',
        iconBg: 'bg-yellow-500',
      },
      {
        icon: '💳',
        title: 'Integrated Payment Processing',
        body: 'Collect Credit Card, ACH, and bank account details inside the platform during the live call. PCI-compliant. No redirect, no third-party handoff.',
        bullets: ['Credit Card, ACH, Bank Account support', 'PCI-compliant tokenized collection', 'Live payment confirmation on sale record'],
        bg: 'bg-rose-bpo',
        border: 'border-pink-200',
        iconBg: 'bg-pink-500',
      },
      {
        icon: '🔁',
        title: 'Subscription Management',
        body: 'Create, track, and manage subscriptions in real time during the live call. Billing cycle tracking, renewal status, and cancellation handling with gateway integration.',
        bullets: ['Live subscription setup', 'Billing cycle and renewal tracking', 'Cancellation handling', 'Gateway integration'],
        bg: 'bg-lime-bpo',
        border: 'border-green-200',
        iconBg: 'bg-green-500',
      },
    ],
  },
  {
    group: 'AI Powered',
    tag: 'purple' as const,
    features: [
      {
        icon: '🔍',
        title: 'AI-Powered QA & Call Scoring',
        body: 'AI reviews call recordings and scores compliance, script adherence, and quality. Flags anomalies and fraud patterns before they escalate to chargebacks or client complaints.',
        bullets: ['Automated call scoring', 'Anomaly and fraud pattern detection', 'QA agent review queue with annotations'],
        bg: 'bg-lavender',
        border: 'border-purple-200',
        iconBg: 'bg-purple-bpo',
      },
      {
        icon: '🎙️',
        title: 'AI Call Transcription',
        body: 'Every call is automatically transcribed using AI. Transcripts are searchable, linked to the sale record, and power QA scoring, compliance checks, and keyword flagging.',
        bullets: ['Auto-transcription for every call', 'Searchable transcripts and keyword flagging', 'Linked to sale record and QA input'],
        bg: 'bg-mint',
        border: 'border-teal/30',
        iconBg: 'bg-teal',
      },
      {
        icon: '🧠',
        title: 'AI Anomaly Detection & Alerts',
        body: 'AI monitors patterns across all agents and campaigns. When conversion rates drop, fraud patterns emerge, or compliance flags trigger, you get an alert — mid-shift, not the next morning.',
        bullets: ['Real-time anomaly alerts', 'Conversion drop and fraud pattern detection', 'Mid-shift alerts to managers'],
        bg: 'bg-coral',
        border: 'border-orange-200',
        iconBg: 'bg-orange-bpo',
      },
      {
        icon: '📊',
        title: 'AI Trends on Live Dashboard',
        body: 'AI Trends widget on your operations dashboard shows live trends — conversion up/down by product, center performance, AI flags for drops, and verification metrics. Adjust scripts mid-shift, not the next morning.',
        bullets: ['Live trend cards on dashboard', 'Product and center-wise performance', 'AI flag for conversion drops', 'Verification time and engagement metrics'],
        bg: 'bg-amber-bpo',
        border: 'border-yellow-200',
        iconBg: 'bg-yellow-500',
      },
    ],
  },
  {
    group: 'Campaigns & Operations',
    tag: 'orange' as const,
    features: [
      {
        icon: '🏢',
        title: 'Multi-Center Management',
        body: 'For campaign owners, center owners, and BPO agencies — manage multiple campaigns and multiple centers from one centralized location. View all centers, compare performance, and control campaigns across Manila, Davao, Houston, or anywhere from a single dashboard.',
        bullets: ['Multiple campaigns and multiple centers in one dashboard', 'Compare center performance side by side', 'Single login for campaign owners, center owners, and BPO agencies', 'Campaign-wise and center-wise reporting'],
        bg: 'bg-lime-bpo',
        border: 'border-green-200',
        iconBg: 'bg-green-500',
      },
      {
        icon: '🎯',
        title: 'Campaign Management',
        body: 'Launch and configure full campaigns in minutes. Define products, scripts, payment modes, agent roles, and verifier workflows — all from one screen.',
        bullets: ['Multiple active campaigns simultaneously', 'Per-campaign product and script config', 'Role-based agent assignment per campaign'],
        bg: 'bg-amber-bpo',
        border: 'border-yellow-200',
        iconBg: 'bg-yellow-500',
      },
      {
        icon: '📡',
        title: 'SIP-Based Call Routing',
        body: 'Controlled call transfers from agents to verifiers via SIP middleware. Full call metadata — customer info, disposition, payment status — passes with the transfer.',
        bullets: ['Agent-to-verifier warm transfer via SIP', 'Call metadata passed on transfer', 'Queue management and transfer logging'],
        bg: 'bg-coral',
        border: 'border-orange-200',
        iconBg: 'bg-orange-bpo',
      },
      {
        icon: '⚡',
        title: 'Address & Data Auto-Complete',
        body: 'Reduce handle time with intelligent auto-complete for customer addresses, email, and profile fields. Fewer typos, faster dispositions, cleaner data.',
        bullets: ['Address lookup and auto-complete', 'Email format validation in real time', 'Customer history auto-population on repeat contact'],
        bg: 'bg-rose-bpo',
        border: 'border-pink-200',
        iconBg: 'bg-pink-500',
      },
      {
        icon: '👤',
        title: 'Admin & Role Management',
        body: 'Granular role-based access control for every user. Define what agents, verifiers, supervisors, QA, center owners, and campaign owners can view, edit, or export — down to the field level.',
        bullets: ['Role-based access', 'Field-level control', 'Multi-center admin', 'IP restrictions', '2FA enforcement'],
        bg: 'bg-mint',
        border: 'border-teal/30',
        iconBg: 'bg-teal',
      },
    ],
  },
  {
    group: 'Performance & Reporting',
    tag: 'purple' as const,
    features: [
      {
        icon: '👥',
        title: 'Agent Performance Dashboards',
        body: 'Track every agent\'s conversion rate, call duration, revenue contribution, and upsell participation in real time. Leaderboards visible to agents and managers.',
        bullets: ['Real-time agent leaderboard', 'Conversion rate and revenue per agent', 'Call duration and disposition analytics'],
        bg: 'bg-mint',
        border: 'border-teal/30',
        iconBg: 'bg-teal',
      },
      {
        icon: '📊',
        title: 'MIS & Automated Reporting',
        body: 'Management Information System reports generated automatically at shift end, daily, or on demand. Agent reports, verifier reports, campaign summaries, and revenue breakdowns.',
        bullets: ['Shift-end MIS auto-generation', 'Campaign, agent, and product reports', 'Export to CSV / PDF / API'],
        bg: 'bg-coral',
        border: 'border-orange-200',
        iconBg: 'bg-orange-bpo',
      },
      {
        icon: '🔗',
        title: 'Live API & Webhook Integration',
        body: 'Push every sale, subscription, and lead event to your campaign owner\'s system in real time. REST API with Webhook support, OAuth 2.0 auth, sandbox environment.',
        bullets: ['REST API for all sale events', 'Webhook delivery per campaign or product', 'OAuth 2.0 authentication, sandbox testing'],
        bg: 'bg-lavender',
        border: 'border-purple-200',
        iconBg: 'bg-purple-bpo',
      },
    ],
  },
  {
    group: 'Compliance & Quality',
    tag: 'amber' as const,
    features: [
      {
        icon: '🛡️',
        title: 'DNC / BIN / CNAM Validation',
        body: 'Real-time Do Not Call scrubbing, BIN validation for payment legitimacy, CNAM lookup, and full duplicate check on every lead before the first word is spoken.',
        bullets: ['DNC scrub before dial', 'BIN validation for card legitimacy', 'CNAM caller ID lookup, omit & override rules'],
        bg: 'bg-amber-bpo',
        border: 'border-yellow-200',
        iconBg: 'bg-yellow-500',
      },
      {
        icon: '🏥',
        title: 'HIPAA-Ready Compliance Infrastructure',
        body: 'SOC 2-aligned architecture hosted in U.S. data centers. Encrypted data at rest and in transit. Role-based field-level access. Full audit trail.',
        bullets: ['HIPAA BAA available for enterprise plans', 'SOC 2 aligned architecture', 'Encrypted at rest (AES-256) and in transit (TLS)'],
        bg: 'bg-rose-bpo',
        border: 'border-pink-200',
        iconBg: 'bg-pink-500',
      },
      {
        icon: '🗂️',
        title: 'Complaint & Grievance Management',
        body: 'Log, route, and track complaints and grievances raised during or after calls. Assign resolution workflows, set SLA timers, and generate grievance reports for compliance.',
        bullets: ['Grievance logging', 'SLA tracking', 'Resolution workflows', 'Compliance reports'],
        bg: 'bg-lime-bpo',
        border: 'border-green-200',
        iconBg: 'bg-green-500',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-warm-white">
        <div className="section-container text-center">
          <SectionTag variant="purple" className="mb-5">All Features</SectionTag>
          <h1 className="heading-xl max-w-3xl mx-auto mb-6">
            AI-powered capabilities for inbound & outbound BPO sales.
          </h1>
          <p className="body-lg max-w-xl mx-auto mb-10">
            Features across sales, leads, surveys, AI, compliance, and reporting — purpose-built for live inbound and outbound call center operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo/" className="btn-primary px-8 py-3.5 text-sm">Get A Free Demo →</Link>
            <Link href="/pricing/" className="btn-secondary px-8 py-3.5 text-sm">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group) => (
        <section key={group.group} className="section-padding bg-warm-white border-t border-gray-100">
          <div className="section-container">
            <div className="mb-10">
              <SectionTag variant={group.tag} className="mb-3">{group.group}</SectionTag>
              <h2 className="heading-md">{group.group}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {group.features.map((f) => (
                <div key={f.title} className={`${f.bg} border ${f.border} rounded-2xl p-8 card-hover`}>
                  <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center text-xl mb-5`}>
                    {f.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-navy mb-3">{f.title}</h3>
                  <p className="text-sm text-slate-bpo leading-relaxed mb-5">{f.body}</p>
                  <ul className="space-y-1.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-navy font-medium">
                        <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  )
}
