const testimonials = [
  {
    quote:
      "We were running three subscription campaigns across Manila and Davao on Excel sheets. XyBPO Hub replaced everything — our agents go live faster, verifiers get warm transfers with full context, and our clients receive API data the moment a sale is confirmed. Night-and-day difference.",
    name: 'Renz Villanueva',
    title: 'Operations Director',
    company: 'PrimeCall Philippines',
    location: '🇵🇭 Manila, Philippines',
    highlight: 'Replaced Excel across 3 campaigns',
    initials: 'RV',
    color: 'bg-teal',
  },
  {
    quote:
      "Our campaign owners in the US were getting batch files at 11 PM every night. With XyBPO Hub's Webhook integration, they receive every sale in real time. Chargebacks dropped 34% in the first month because BIN and DNC validation caught bad sales before they were confirmed.",
    name: 'Michael Torres',
    title: 'Center Owner',
    company: 'Apex Contact Solutions',
    location: '🇵🇭 Cebu, Philippines',
    highlight: 'Chargebacks down 34%',
    initials: 'MT',
    color: 'bg-orange-bpo',
  },
  {
    quote:
      "We manage a health supplement subscription campaign out of Texas and partner with BPO centers offshore. XyBPO Hub gives us a real-time client portal — I can see every sale, QA score, and upsell without emailing anyone. HIPAA compliance documentation was ready on day one.",
    name: 'Sarah Jennings',
    title: 'Campaign Owner',
    company: 'VitalHealth Direct',
    location: '🇺🇸 Houston, Texas',
    highlight: 'Real-time portal + HIPAA docs',
    initials: 'SJ',
    color: 'bg-purple-bpo',
  },
  {
    quote:
      "XyBPO Hub's AI Trends widget flagged a conversion drop on one of our products at 2 PM — mid-shift. My team lead adjusted the script immediately. We recovered 18 sales that afternoon we would have otherwise missed. That kind of real-time intelligence is impossible with our old tracker.",
    name: 'Jonah Reyes',
    title: 'Senior Team Lead',
    company: 'BrightWave BPO',
    location: '🇵🇭 Davao, Philippines',
    highlight: 'Recovered 18 sales mid-shift',
    initials: 'JR',
    color: 'bg-green-500',
  },
  {
    quote:
      "We run outbound health and insurance campaigns from Bangalore with campaign owners in the UK and US. XyBPO Hub's role-based dashboard means our agents only see what they need, our verifiers close confidently, and our overseas clients watch every sale happen in real time. Setup took days, not months.",
    name: 'Arjun Mehta',
    title: 'BPO Center Owner',
    company: 'NexGen Outsource India',
    location: '🇮🇳 Bangalore, India',
    highlight: 'Multi-country client visibility',
    initials: 'AM',
    color: 'bg-blue-600',
  },
  {
    quote:
      "Our UK-based clients demanded GDPR-aligned reporting and audit trails. XyBPO Hub's per-campaign access controls and automated MIS export gave us exactly that — structured, timestamped, and shareable. Our compliance review that used to take a week now takes an afternoon.",
    name: 'Callum Wright',
    title: 'Campaign Compliance Manager',
    company: 'ClearLine Direct UK',
    location: '🇬🇧 London, United Kingdom',
    highlight: 'Compliance review cut from 1 week to hours',
    initials: 'CW',
    color: 'bg-slate-600',
  },
]

const regions = [
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇵🇭', name: 'Philippines' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇿🇦', name: 'South Africa' },
  { flag: '🇲🇽', name: 'Mexico' },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-mist border-y border-gray-200">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-bpo mb-3">
            Trusted Globally
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-4">
            BPO Teams Rely on XyBPO Hub — Across Every Market
          </h2>
          <p className="text-base text-slate-bpo max-w-xl mx-auto">
            From inbound health campaigns in Texas to outbound subscription sales in Manila, Bangalore, and beyond — one platform that works wherever your BPO operates.
          </p>
        </div>

        {/* Region flags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map((r) => (
            <span
              key={r.name}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-bpo bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm"
            >
              <span>{r.flag}</span>
              <span>{r.name}</span>
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal bg-mint border border-teal/20 px-3 py-1.5 rounded-full shadow-sm">
            🌐 + More
          </span>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-card border border-gray-100 flex flex-col justify-between gap-5"
            >
              <div>
                <span className="inline-block bg-mint text-teal-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ✦ {t.highlight}
                </span>
                <blockquote className="text-base text-slate-bpo leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-black shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{t.name}</p>
                  <p className="text-xs text-slate-bpo">{t.title} · {t.company}</p>
                  <p className="text-xs text-slate-bpo mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
