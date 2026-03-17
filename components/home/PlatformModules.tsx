import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'

const modules = [
  {
    icon: '📈',
    name: 'Sales Tracking',
    desc: 'Real-time tracking of every sale across agents, verifiers, campaigns, and centers. Core sales, upsells, lead-to-sale conversion, and agent performance all visible live — no batch refresh required.',
    tags: ['Core sales', 'Upsell tracking', 'Agent leaderboard', 'Campaign-wise', 'Center-wise'],
    bg: 'bg-coral',
    border: 'border-orange-200',
    iconBg: 'bg-orange-bpo',
  },
  {
    icon: '🎯',
    name: 'Lead Generation Module',
    desc: 'Manage inbound and outbound lead flows across campaigns. Capture, validate, score, and distribute leads to agents in real time with full DNC/BIN/dupe checks on entry.',
    tags: ['Lead capture', 'Validation', 'Distribution', 'Scoring'],
    bg: 'bg-mint',
    border: 'border-teal/30',
    iconBg: 'bg-teal',
  },
  {
    icon: '📣',
    name: 'Campaign Management',
    desc: 'Launch and configure any number of campaigns with distinct products, scripts, workflows, agents, and API connections. Go live in minutes with role-based setup.',
    tags: ['Multi-campaign', 'Product config', 'Script builder', 'API per campaign'],
    bg: 'bg-coral',
    border: 'border-orange-200',
    iconBg: 'bg-orange-bpo',
  },
  {
    icon: '📋',
    name: 'Survey / Feedback Module',
    desc: 'Run structured survey campaigns during live calls. Capture responses in real time, track completion rates by agent and campaign, and export survey data in all standard formats.',
    tags: ['Live call surveys', 'Response capture', 'Completion tracking', 'Data export'],
    bg: 'bg-lavender',
    border: 'border-purple-200',
    iconBg: 'bg-purple-bpo',
  },
  {
    icon: '🗂️',
    name: 'Complaint / Grievance Management',
    desc: 'Log, route, and track complaints and grievances raised during or after calls. Assign resolution workflows, set SLA timers, and generate grievance reports for compliance and client transparency.',
    tags: ['Grievance logging', 'SLA tracking', 'Resolution workflows', 'Compliance reports'],
    bg: 'bg-amber-bpo',
    border: 'border-yellow-300',
    iconBg: 'bg-yellow-500',
  },
  {
    icon: '🔍',
    name: 'Quality Assurance (QA)',
    desc: 'AI-powered call scoring, anomaly detection, and compliance flagging — paired with a managed QA queue for human review. Score, annotate, approve, or reject calls with a full audit trail.',
    tags: ['AI scoring', 'QA queue', 'Anomaly detection', 'Call annotation', 'Audit trail'],
    bg: 'bg-rose-bpo',
    border: 'border-pink-200',
    iconBg: 'bg-pink-500',
  },
  {
    icon: '📊',
    name: 'MIS Reporting',
    desc: 'Automated Management Information System reports generated on schedule — shift-end, daily, weekly, or on demand. Agent, verifier, campaign, center, and product-level breakdowns with multi-format export.',
    tags: ['Auto-scheduled', 'Multi-format export', 'Agent & center reports', 'Campaign summaries'],
    bg: 'bg-lime-bpo',
    border: 'border-green-200',
    iconBg: 'bg-green-500',
  },
  {
    icon: '👤',
    name: 'Admin / Role Management',
    desc: 'Granular role-based access control for every user in the system. Define exactly what agents, verifiers, supervisors, QA, center owners, and campaign owners can view, edit, or export — down to the field level.',
    tags: ['Role-based access', 'Field-level control', 'Multi-center admin', 'IP restrictions', '2FA enforcement'],
    bg: 'bg-mint',
    border: 'border-teal/30',
    iconBg: 'bg-teal',
  },
  {
    icon: '🔁',
    name: 'Subscription Management',
    desc: 'Create, track, and manage subscriptions in real time during the live call. Supports live API-based subscription setup via campaign owner\'s gateway, with billing cycle tracking, renewal status, and cancellation handling.',
    tags: ['Live subscription setup', 'Billing cycle', 'Renewal tracking', 'Cancellation handling', 'Gateway integration'],
    bg: 'bg-lavender',
    border: 'border-purple-200',
    iconBg: 'bg-purple-bpo',
  },
  {
    icon: '🧠',
    name: 'AI Call Transcription',
    desc: 'Every call is automatically transcribed using AI. Transcripts are searchable, linked to the sale record, and used to power QA scoring, compliance checks, and anomaly detection — without manual review.',
    tags: ['Auto-transcription', 'Searchable transcripts', 'Linked to sale record', 'QA input', 'Keyword flagging'],
    bg: 'bg-navy',
    border: 'border-navy/30',
    iconBg: 'bg-teal',
    dark: true,
  },
]

export default function PlatformModules() {
  return (
    <section className="section-padding bg-mist">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionTag variant="purple" className="mb-4">Platform Modules</SectionTag>
            <h2 className="heading-lg max-w-xl mb-3">
              Every module your BPO needs — built in.
            </h2>
            <p className="body-lg max-w-xl">
              XyBPO Hub is not a single tool. It&apos;s a full operating system with dedicated modules for every function — from lead generation to grievance management to AI transcription. No add-ons. No third-party stitching.
            </p>
          </div>
          <Link
            href="/features/"
            className="btn-secondary px-6 py-3 text-sm shrink-0 self-start lg:self-auto"
          >
            Explore All Features →
          </Link>
        </div>

        {/* Module grid — 4 col on xl, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {modules.map((m) => (
            <div
              key={m.name}
              className={`${m.bg} border-2 ${m.border} rounded-2xl p-6 flex flex-col gap-3 card-hover`}
            >
              {/* Icon + name */}
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl ${m.iconBg} flex items-center justify-center text-xl shrink-0`}>
                  {m.icon}
                </div>
                <h3 className={`text-base font-extrabold leading-snug pt-0.5 ${m.dark ? 'text-white' : 'text-navy'}`}>
                  {m.name}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed flex-1 ${m.dark ? 'text-gray-300' : 'text-slate-bpo'}`}>
                {m.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t ${m.dark ? 'border-white/10' : 'border-black/5'}">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                      m.dark ? 'bg-white/10 text-teal' : 'bg-white/70 text-navy'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
