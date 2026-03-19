import Link from 'next/link'
import { LiveBadge } from '@/components/ui/Badge'

const featurePills = [
  { icon: '🏢', label: 'Multi-Center Management' },
  { icon: '📥', label: 'Inbound Campaigns' },
  { icon: '📤', label: 'Outbound Campaigns' },
  { icon: '📞', label: 'Live Call Tracking' },
  { icon: '💳', label: 'Payment Collection' },
  { icon: '🔄', label: 'Verifier Transfers' },
  { icon: '🧠', label: 'AI-Powered QA' },
  { icon: '📊', label: 'Automated MIS' },
  { icon: '🔗', label: 'API & Webhooks' },
  { icon: '🛡️', label: 'DNC / BIN Validation' },
  { icon: '🎯', label: 'Multi-Campaign Management' },
]

const aiTrends = [
  {
    icon: '↘',
    iconColor: 'text-red-500',
    bg: 'bg-red-50',
    name: 'Herbal Pain Relief Oil',
    status: 'Conversion down 12%',
    statusColor: 'text-red-600',
    meta: 'Last 2 hrs',
  },
  {
    icon: '↗',
    iconColor: 'text-green-600',
    bg: 'bg-green-50',
    name: 'Skin Glow Serum',
    status: 'Sales up 9%',
    statusColor: 'text-green-600',
    meta: 'vs yesterday',
  },
  {
    icon: '💡',
    iconColor: 'text-yellow-500',
    bg: 'bg-yellow-50',
    name: 'PH Wellness 2025',
    status: 'AI flag: conversion drop detected',
    statusColor: 'text-orange-600',
    meta: '-8% today',
  },
  {
    icon: '✓',
    iconColor: 'text-green-600',
    bg: 'bg-green-50',
    name: 'Manila Center',
    status: 'Top performing',
    statusColor: 'text-green-700',
    meta: '3.4 sales/agent/hr',
  },
  {
    icon: '⚠',
    iconColor: 'text-orange-500',
    bg: 'bg-orange-50',
    name: 'Davao Center',
    status: 'Low engagement',
    statusColor: 'text-orange-600',
    meta: 'Idle time ↑ 20%',
  },
  {
    icon: '⏱',
    iconColor: 'text-blue-500',
    bg: 'bg-blue-50',
    name: 'Avg Verification Time',
    status: '6 m 42 s',
    statusColor: 'text-blue-700',
    meta: 'Goal ≤ 5 m',
  },
]

export default function HeroSection() {
  return (
    <section className="bg-warm-white pt-14 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
      <div className="section-container text-center">

        {/* Category label */}
        <p className="text-xs font-bold tracking-widest uppercase text-teal-dark mb-5">
          AI-Powered BPO Sales Platform · Inbound &amp; Outbound · Trusted Worldwide
        </p>

        {/* H1 */}
        <h1 className="heading-xl max-w-4xl mx-auto mb-5">
          Track Every Call, Agent &amp; Sale —{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-teal">In Real Time.</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-mint opacity-60 -z-0 rounded" />
          </span>
        </h1>

        <p className="text-xl text-slate-bpo max-w-2xl mx-auto mb-5 leading-relaxed font-medium">
          XyBPO Hub is the complete Sales OS for call centers — built for both <strong className="text-navy">inbound</strong> and <strong className="text-navy">outbound</strong> operations. For campaign owners, center owners, and BPO agencies — manage multiple campaigns and multiple centers from one centralized location. Subscription sales, lead generation, agents, verifiers, QA, MIS, and live payments — one secure platform.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {featurePills.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-1.5 bg-mist border border-gray-200 text-navy text-xs font-semibold px-3 py-2 rounded-full"
            >
              <span>{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link href="/demo/" className="btn-primary px-9 py-4 text-base">
            Get A Free Demo →
          </Link>
          <a
            href={`https://wa.me/919022455556?text=${encodeURIComponent("Hi, I'm interested in XyBPO Hub. Can you please share more details?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-9 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(37,211,102,0.35)] text-base"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <Link href="/features/" className="btn-secondary px-9 py-4 text-base">
            Explore All Features
          </Link>
        </div>

        {/* ── DASHBOARD MOCKUP ── */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-hero p-6 lg:p-7 text-left">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-5">
            <div className="font-bold text-navy text-sm lg:text-base">
              📊 Operations Dashboard — All Centers
            </div>
            <LiveBadge />
          </div>

          {/* ── LEADS → SALES FUNNEL STATS ── */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5 mb-2">
            {[
              { num: '412',  label: 'Total Leads',          bg: 'bg-mist',      arrow: true },
              { num: '201',  label: 'Total Sales',           bg: 'bg-mint',      arrow: true },
              { num: '138',  label: 'Core Sales',            bg: 'bg-coral',     arrow: true },
              { num: '64',   label: 'Upsells',               bg: 'bg-lime-bpo',  arrow: true },
              { num: '46%',  label: 'Core→Upsell Conv.',     bg: 'bg-amber-bpo', arrow: false },
              { num: '94',   label: 'Avg QA Score',          bg: 'bg-lavender',  arrow: false },
            ].map((s, i) => (
              <div key={s.label} className="relative flex items-stretch">
                <div className={`${s.bg} rounded-xl p-3 text-center flex-1`}>
                  <div className="text-xl lg:text-2xl font-black text-navy">{s.num}</div>
                  <div className="text-[10px] text-slate-bpo font-medium mt-0.5 leading-tight">{s.label}</div>
                </div>
                {s.arrow && i < 3 && (
                  <div className="hidden lg:flex items-center justify-center absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <span className="text-gray-300 text-base font-black">›</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Funnel label */}
          <p className="text-[10px] text-slate-bpo font-medium mb-4 lg:text-center">
            ↑ Live sales funnel — Leads → Total Sales → Core Sales → Upsells → Conversion tracking
          </p>

          {/* ── TWO COLUMN BODY ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* LEFT — Center & Campaign breakdown */}
            <div className="space-y-4">

              {/* Center-wise */}
              <div>
                <p className="text-[10px] font-bold text-slate-bpo uppercase tracking-wider mb-2">Center-Wise Sales</p>
                <div className="space-y-1.5">
                  {[
                    { name: 'Manila Center',  pct: 88, c: 'bg-teal',       val: '62 sales' },
                    { name: 'Davao Center',   pct: 52, c: 'bg-orange-bpo', val: '31 sales' },
                    { name: 'Houston TX',     pct: 72, c: 'bg-purple-bpo', val: '45 sales' },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-bpo font-medium w-24 shrink-0">{r.name}</span>
                      <div className="flex-1 h-2 bg-mist rounded-full overflow-hidden">
                        <div className={`h-full ${r.c} rounded-full`} style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className="text-[11px] font-bold text-navy w-14 text-right">{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign / Product-wise */}
              <div>
                <p className="text-[10px] font-bold text-slate-bpo uppercase tracking-wider mb-2">Campaign / Product Sales</p>
                <div className="space-y-1.5">
                  {[
                    { name: 'Health Shield',   pct: 90, c: 'bg-teal',       val: '55 sales' },
                    { name: 'Skin Glow Serum', pct: 68, c: 'bg-yellow-400', val: '42 sales' },
                    { name: 'Pain Relief Oil', pct: 45, c: 'bg-red-400',    val: '28 sales' },
                    { name: 'PH Wellness',     pct: 60, c: 'bg-purple-bpo', val: '38 sales' },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-bpo font-medium w-24 shrink-0">{r.name}</span>
                      <div className="flex-1 h-2 bg-mist rounded-full overflow-hidden">
                        <div className={`h-full ${r.c} rounded-full`} style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className="text-[11px] font-bold text-navy w-14 text-right">{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — AI Trends */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs font-bold text-navy mb-3">🧠 AI Trends</p>
              <div className="space-y-2">
                {aiTrends.map((t) => (
                  <div key={t.name} className={`${t.bg} rounded-lg px-3 py-2 flex items-center justify-between gap-2`}>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-sm font-bold shrink-0 ${t.iconColor}`}>{t.icon}</span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-navy truncate">{t.name}</p>
                        <p className={`text-[10px] font-semibold ${t.statusColor}`}>{t.status}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-bpo font-medium whitespace-nowrap shrink-0">{t.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── SECURITY TRUST BAR ── */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            { icon: '🏥', label: 'HIPAA-Ready' },
            { icon: '🇺🇸', label: 'USA Hosted' },
            { icon: '🔐', label: '2FA + IP Security' },
            { icon: '🏢', label: 'Multi-Tenant' },
            { icon: '🖥️', label: 'In-House Deployment' },
            { icon: '👤', label: 'Role-Based Access' },
            { icon: '🔒', label: 'SOC 2 Aligned' },
          ].map((b) => (
            <span key={b.label} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-slate-bpo text-xs font-semibold px-3 py-2 rounded-full shadow-sm">
              <span>{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
