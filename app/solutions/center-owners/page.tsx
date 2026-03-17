import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'For BPO Center Owners — Run Your Floor in Real Time',
  description:
    'XyBPO Hub gives BPO center owners live dashboards, AI anomaly alerts, and automated MIS reports. Stop finding out about dropped conversion rates the next morning.',
  alternates: { canonical: 'https://xybpohub.com/solutions/center-owners/' },
}

const features = [
  { icon: '📊', title: 'Multi-Agent Live Dashboard', body: 'Every agent on the floor — their call status, conversion count, and revenue contribution — visible in real time. Sort, filter, drill down instantly.' },
  { icon: '🧠', title: 'AI Anomaly Detection & Alerts', body: 'AI monitors patterns across all agents and campaigns. When conversion rates drop, fraud patterns emerge, or compliance flags trigger, you get an alert — mid-shift, not the next morning.' },
  { icon: '📋', title: 'Automated MIS Reports', body: 'Shift-end, daily, and weekly MIS reports generate automatically. Agent reports, campaign summaries, and verifier stats are compiled without anyone opening Excel.' },
  { icon: '👥', title: 'Role-Based Access Control', body: 'Define exactly what supervisors, team leads, QA agents, and trainees can see and do. Granular access down to the field level.' },
  { icon: '🏢', title: 'Multi-Center Aggregated View', body: 'Running two or more centers? See every location\'s performance from a single view. Compare centers, campaigns, and teams side by side.' },
  { icon: '🔍', title: 'QA Review Queue', body: 'QA agents work from a managed review queue — flagged calls, scored recordings, and compliance annotations — all tracked inside the platform.' },
]

export default function CenterOwnersPage() {
  return (
    <>
      <section className="section-padding bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTag variant="purple" className="mb-5">For Center Owners</SectionTag>
              <h1 className="heading-xl mb-6">
                Run Your Floor Without Being on the Floor.
              </h1>
              <p className="body-lg mb-4">
                You find out your conversion rate dropped at 9 PM when the MIS lands. By then, you&apos;ve lost a full shift of revenue that could have been saved with a mid-shift intervention.
              </p>
              <p className="body-lg mb-8">
                XyBPO Hub gives you a live command center. Watch every agent. Get alerts when anomalies happen. And when the shift ends, MIS is already in your inbox — no macros, no cleanup, no late nights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo/" className="btn-primary px-8 py-3.5 text-sm">
                  See Center Owner Demo →
                </Link>
              </div>
            </div>
            {/* Dashboard mockup */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-hero p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="font-bold text-navy text-sm">📈 Center Dashboard — Live</span>
                <span className="bg-lime-bpo text-green-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { num: '34', label: 'Active Agents', bg: 'bg-mint' },
                  { num: '138', label: 'Sales Today', bg: 'bg-coral' },
                  { num: '64%', label: 'Conversion', bg: 'bg-lime-bpo' },
                ].map((s) => (
                  <div key={s.label} className={`${s.bg} rounded-xl p-3 text-center`}>
                    <div className="text-xl font-black text-navy">{s.num}</div>
                    <div className="text-xs text-slate-bpo font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-bpo rounded-xl p-3 mb-3 flex items-center gap-2 text-xs">
                <span className="text-lg">⚠️</span>
                <div>
                  <span className="font-bold text-navy">AI Alert:</span>
                  <span className="text-slate-bpo ml-1">Team B conversion dropped 18% in last 30 min</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: 'Team A — 12 agents', val: '52 sales', pct: 85, c: 'bg-teal' },
                  { name: 'Team B — 10 agents', val: '31 sales', pct: 52, c: 'bg-orange-bpo' },
                  { name: 'Team C — 12 agents', val: '55 sales', pct: 90, c: 'bg-purple-bpo' },
                ].map((r) => (
                  <div key={r.name} className="flex items-center gap-2 text-xs">
                    <span className="w-28 text-slate-bpo font-medium shrink-0">{r.name}</span>
                    <div className="flex-1 h-2 bg-mist rounded-full overflow-hidden">
                      <div className={`h-full ${r.c} rounded-full`} style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="font-bold text-navy w-14 text-right">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist">
        <div className="section-container">
          <h2 className="heading-md mb-10">Command center capabilities for floor managers.</h2>
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
