import SectionTag from '@/components/ui/SectionTag'

const steps = [
  {
    num: '01',
    icon: '📞',
    title: 'Agent — Lead Capture & Core Sale',
    color: 'bg-mint',
    border: 'border-teal/40',
    numColor: 'text-teal',
    tags: ['Lead auto-populated', 'DNC / BIN validated', 'CNAM lookup', 'Script guide embedded', 'Disposition form'],
    detail: 'Agent receives or dials a call. Lead auto-populates with real-time DNC/BIN/CNAM validation. Agent captures the sale and fills the disposition form — all on one screen during the live call.',
  },
  {
    num: '02',
    icon: '✅',
    title: 'Verifier — Confirm Order',
    color: 'bg-coral',
    border: 'border-orange-200',
    numColor: 'text-orange-bpo',
    tags: ['SIP warm transfer', 'Order pre-filled', 'No re-entry', 'Compliance script'],
    detail: 'Call transfers via SIP with the complete order context already on screen. Verifier confirms customer details, reads compliance disclosures, and prepares the order for payment and API processing.',
  },
  {
    num: '03',
    icon: '🔗',
    title: 'Live API Transfer — During the Call',
    color: 'bg-amber-bpo',
    border: 'border-yellow-300',
    numColor: 'text-yellow-700',
    tags: ['Customer data posted live', "Campaign owner's payment API", 'Subscription setup live', 'CC · ACH · Bank', 'Per-product config'],
    detail: 'If the product is configured with a live API: customer data is posted to the campaign owner\'s system immediately during the call. Payment is charged using the campaign owner\'s own payment API. Subscriptions are created live if the API supports it — all before the call ends.',
    highlight: true,
  },
  {
    num: '04',
    icon: '💰',
    title: 'Upsell — Increase Order Value',
    color: 'bg-lime-bpo',
    border: 'border-green-200',
    numColor: 'text-green-600',
    tags: ['Structured upsell workflow', 'Per-product scripts', 'Additional payment / API', 'Acceptance tracked'],
    detail: 'Verifier presents structured upsell offers. If accepted, additional payment is collected (or charged via campaign owner\'s API) and the upsell data is pushed live to the campaign system. Every acceptance and decline is tracked.',
  },
  {
    num: '05',
    icon: '🔍',
    title: 'QA — AI Review & Scoring',
    color: 'bg-lavender',
    border: 'border-purple-200',
    numColor: 'text-purple-bpo',
    tags: ['AI call scoring', 'Anomaly detection', 'Compliance flags', 'QA agent annotation'],
    detail: 'AI reviews the call recording, scores compliance, and flags anomalies or quality failures. QA agents annotate, approve, or reject from a managed queue — all tracked and reportable inside the platform.',
  },
  {
    num: '06',
    icon: '📦',
    title: 'Batch Processing — Scheduled Reports',
    color: 'bg-navy',
    border: 'border-navy/30',
    numColor: 'text-teal',
    tags: ['Auto-scheduled batches', 'Multi-format export', 'MIS reports', 'Campaign owner delivery'],
    detail: 'After live processing, scheduled batch jobs compile sales data into MIS reports and export files. Campaign owners and centers receive structured data in their preferred format — automatically, on schedule.',
    dark: true,
  },
]

const exportFormats = [
  {
    label: 'Bar-Delimited .txt',
    example: 'John|Matthews|Health Shield|29.99',
    delimiter: '| delimiter',
    bg: 'bg-mint',
    text: 'text-teal-dark',
  },
  {
    label: 'Double-Quoted CSV (.sa)',
    example: '"John","Matthews","Health Shield","29.99"',
    delimiter: 'comma-separated, all fields in ""',
    bg: 'bg-coral',
    text: 'text-orange-700',
  },
  {
    label: 'Standard CSV (.csv)',
    example: '"John","Matthews","Health Shield","29.99"',
    delimiter: 'Double-quoted .csv standard',
    bg: 'bg-lavender',
    text: 'text-purple-700',
  },
  {
    label: "Single-Quoted CSV (.csv)",
    example: "'John','Matthews','Health Shield','29.99'",
    delimiter: "' around each field",
    bg: 'bg-lime-bpo',
    text: 'text-green-700',
  },
  {
    label: 'Tab-Delimited .txt',
    example: 'John\\tMatthews\\tHealth Shield\\t29.99',
    delimiter: '\\t delimiter',
    bg: 'bg-amber-bpo',
    text: 'text-yellow-800',
  },
]

export default function CallFlow() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag variant="teal" className="mb-4">Live Call Flow</SectionTag>
          <h2 className="heading-lg max-w-2xl mx-auto mb-4">
            From First Ring to Final Confirmation.
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Every sale follows a structured, tracked, and automated path. Customer data is posted live to campaign owner systems during the call. Payments are charged using the campaign owner&apos;s own payment APIs. Subscriptions are created live. Reports batch automatically — no manual work.
          </p>
        </div>

        {/* ── STEPS — desktop 3+3 grid, mobile vertical ── */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mb-5">
          {steps.map((s) => (
            <div key={s.num} className={`${s.color} border-2 ${s.border} rounded-2xl p-6 flex flex-col gap-3 ${s.highlight ? 'ring-2 ring-yellow-400 ring-offset-2' : ''}`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${s.dark ? 'bg-white/10' : 'bg-white/60'} flex items-center justify-center text-xl shrink-0`}>
                  {s.icon}
                </div>
                <span className={`text-xs font-black tracking-widest uppercase ${s.dark ? 'text-teal' : s.numColor}`}>
                  Step {s.num}
                </span>
              </div>
              <h3 className={`text-lg font-extrabold leading-tight ${s.dark ? 'text-white' : 'text-navy'}`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed flex-1 ${s.dark ? 'text-gray-300' : 'text-slate-bpo'}`}>
                {s.detail}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      s.dark ? 'bg-white/10 text-teal' : 'bg-white/70 text-navy'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0 mb-5">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-12 h-12 rounded-xl ${s.color} border-2 ${s.border} flex flex-col items-center justify-center shadow-card`}>
                  <span className="text-lg">{s.icon}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-6 bg-gray-200 my-1" />
                )}
              </div>
              <div className={`${s.color} border ${s.border} rounded-2xl p-5 mb-4 flex-1`}>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${s.dark ? 'text-teal' : s.numColor}`}>Step {s.num}</p>
                <h3 className={`text-base font-extrabold mb-2 ${s.dark ? 'text-white' : 'text-navy'}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-3 ${s.dark ? 'text-gray-300' : 'text-slate-bpo'}`}>{s.detail}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span key={tag} className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${s.dark ? 'bg-white/10 text-teal' : 'bg-white/70 text-navy'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── LIVE API CALLOUT ── */}
        <div className="bg-navy rounded-2xl p-6 lg:p-8 mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Live API Transfer — Step 03</p>
              <h3 className="text-xl font-extrabold text-white mb-3">
                Customer data posted to campaign owner&apos;s system — during the live call.
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                When a product is configured with a live API, XyBPO Hub posts the customer data to the campaign owner&apos;s system the moment the verifier confirms. Payment is charged using the <span className="text-teal font-semibold">campaign owner&apos;s own payment API</span>. If the product supports subscriptions, the subscription is created live — all before the call ends.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Per-product API config', 'Customer data push', 'Live charge via owner API', 'Live subscription setup', 'Webhook confirmation'].map((t) => (
                  <span key={t} className="text-[11px] font-semibold bg-white/10 text-teal px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#0a1525] rounded-xl p-5 font-mono text-xs">
              <p className="text-gray-500 mb-3 font-sans text-[10px] uppercase tracking-widest">Live API call — during call</p>
              <pre className="text-teal leading-relaxed overflow-x-auto whitespace-pre-wrap">{`POST /api/product/health-shield/sale
X-API-Key: owner_api_key_••••

{
  "event": "core_sale",
  "customer": {
    "name": "John Matthews",
    "phone": "+1-555-847-2219",
    "address": "142 Oak Drive, Austin TX"
  },
  "product_code": "hlth-shield-pro",
  "charge": {
    "method": "credit_card",
    "token": "tok_••••4821",
    "amount": 29.99,
    "billing": "monthly"
  },
  "subscription": "create"
}`}</pre>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-green-400 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                200 OK — Subscription created · Confirmation received
              </div>
            </div>
          </div>
        </div>

        {/* ── BATCH PROCESSING + EXPORT FORMATS ── */}
        <div className="bg-mist rounded-2xl p-6 lg:p-8 border border-gray-200">
          <div className="mb-6">
            <p className="text-xs font-bold tracking-widest uppercase text-slate-bpo mb-2">Batch Processing — Step 06</p>
            <h3 className="text-xl font-extrabold text-navy mb-2">
              Automated Batch Reports — Scheduled, Multi-Format
            </h3>
            <p className="text-base text-slate-bpo leading-relaxed max-w-2xl">
              After live call processing, XyBPO Hub automatically runs scheduled batch jobs to compile sales data, generate MIS reports, and deliver export files to centers and campaign owners in their required format.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {exportFormats.map((f) => (
              <div key={f.label} className={`${f.bg} rounded-xl p-4 border border-white/60`}>
                <p className={`text-xs font-extrabold ${f.text} mb-2`}>{f.label}</p>
                <p className="text-[10px] text-slate-bpo mb-2 font-medium">{f.delimiter}</p>
                <div className="bg-white/70 rounded-lg px-2.5 py-2">
                  <code className="text-[9px] text-navy font-mono break-all leading-relaxed">{f.example}</code>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-bpo">
            ✦ Batch schedules are configurable per campaign · Auto-delivery via SFTP, email, or API endpoint · Reports include core sales, upsells, agent-level, verifier-level, and center-level breakdowns
          </p>
        </div>

      </div>
    </section>
  )
}
