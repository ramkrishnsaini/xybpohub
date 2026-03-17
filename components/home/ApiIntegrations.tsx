import SectionTag from '@/components/ui/SectionTag'

const apis = [
  {
    icon: '📞',
    name: 'Phone API',
    badge: 'Fires on lead load',
    badgeBg: 'bg-mint',
    badgeText: 'text-teal-dark',
    bg: 'bg-mint',
    border: 'border-teal/30',
    description:
      'Phone number lookup runs the moment a lead loads. Validates carrier, detects line type (mobile, landline, VoIP, prepaid), and flags disconnected or invalid numbers before the agent speaks.',
    returns: ['Carrier name', 'Line type', 'Valid / Invalid', 'Ported indicator'],
  },
  {
    icon: '🚫',
    name: 'DNC API',
    badge: 'Real-time scrub',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-600',
    bg: 'bg-rose-bpo',
    border: 'border-pink-200',
    description:
      'Do Not Call registry scrub fires before every dial. Checks federal, state, and internal DNC lists in real time. Non-compliant numbers are blocked automatically — the agent never sees a flagged lead.',
    returns: ['DNC status', 'Federal / State / Internal', 'Block or allow', 'Scrub timestamp'],
  },
  {
    icon: '📧',
    name: 'Email Address API',
    badge: 'Fires on entry',
    badgeBg: 'bg-lavender',
    badgeText: 'text-purple-700',
    bg: 'bg-lavender',
    border: 'border-purple-200',
    description:
      'Email validation fires as the agent types. Checks deliverability, detects disposable or temporary addresses, validates MX records, and auto-corrects common typos — before the sale is confirmed.',
    returns: ['Valid / Invalid', 'Disposable flag', 'MX record check', 'Typo correction'],
  },
  {
    icon: '🔁',
    name: 'Dupe Detection',
    badge: 'Cross-campaign check',
    badgeBg: 'bg-amber-bpo',
    badgeText: 'text-yellow-800',
    bg: 'bg-amber-bpo',
    border: 'border-yellow-300',
    description:
      'Real-time duplicate check runs against all leads, sales, and contacts across every campaign and center. Flags duplicates by phone, email, and address — preventing agents from processing the same customer twice.',
    returns: ['Duplicate flag', 'Matched campaign', 'Original sale date', 'Conflict center'],
  },
  {
    icon: '🏠',
    name: 'Address Check API',
    badge: 'Auto-completes on type',
    badgeBg: 'bg-lime-bpo',
    badgeText: 'text-green-700',
    bg: 'bg-lime-bpo',
    border: 'border-green-200',
    description:
      'Address lookup auto-completes as the agent types. Validates USPS deliverability, standardizes to official postal format, detects vacant or non-existent addresses, and prevents bad addresses from entering the sale record.',
    returns: ['USPS standardized', 'Deliverable flag', 'Unit / apt enrichment', 'ZIP+4 code'],
  },
  {
    icon: '🏡',
    name: 'Home Value Estimator API',
    badge: 'On-demand lookup',
    badgeBg: 'bg-coral',
    badgeText: 'text-orange-700',
    bg: 'bg-coral',
    border: 'border-orange-200',
    description:
      'On-demand property value lookup available to agents during the call for eligible campaigns — home services, insurance, solar, and real estate programs. Estimated home value and property details display inside the agent\'s screen.',
    returns: ['Estimated value', 'Property type', 'Year built', 'Sq footage'],
  },
  {
    icon: '🔌',
    name: 'Program Gateway APIs',
    badge: 'Per-product config',
    badgeBg: 'bg-navy',
    badgeText: 'text-teal',
    bg: 'bg-navy',
    border: 'border-navy/30',
    description:
      'Campaign-specific program eligibility APIs connect XyBPO Hub to external program gateways — government assistance programs, insurance qualification engines, utility enrollment systems, and more. Configured per product, triggered per sale.',
    returns: ['Eligibility status', 'Program match', 'Qualification data', 'Gateway confirmation ID'],
    dark: true,
  },
]

export default function ApiIntegrations() {
  return (
    <section className="section-padding bg-mist">
      <div className="section-container">

        {/* Header */}
        <div className="mb-16">
          <SectionTag variant="amber" className="mb-4">Live Call APIs</SectionTag>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="heading-lg max-w-xl mb-3">
                Data Validation APIs — All Fire During the Live Call.
              </h2>
              <p className="body-lg max-w-xl">
                Every lead is validated, enriched, and qualified in real time — before the agent says a word, as they type, and on demand. No post-call cleanup. No bad data in the sale record.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-white rounded-full px-4 py-2.5 border border-gray-200 shadow-sm self-start lg:self-auto">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
              <span className="text-xs font-bold text-navy">All checks run in real time</span>
            </div>
          </div>
        </div>

        {/* API Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {apis.map((api) => (
            <div
              key={api.name}
              className={`${api.bg} border-2 ${api.border} rounded-2xl p-6 flex flex-col gap-4 card-hover`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${api.dark ? 'bg-white/10' : 'bg-white/60'} flex items-center justify-center text-xl shrink-0`}>
                    {api.icon}
                  </div>
                  <h3 className={`text-base font-extrabold leading-tight ${api.dark ? 'text-white' : 'text-navy'}`}>
                    {api.name}
                  </h3>
                </div>
                <span className={`text-[10px] font-bold ${api.badgeBg} ${api.badgeText} px-2.5 py-1 rounded-full whitespace-nowrap shrink-0`}>
                  {api.badge}
                </span>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed flex-1 ${api.dark ? 'text-gray-300' : 'text-slate-bpo'}`}>
                {api.description}
              </p>

              {/* Returns */}
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${api.dark ? 'text-gray-500' : 'text-slate-bpo'}`}>
                  Returns
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {api.returns.map((r) => (
                    <span
                      key={r}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                        api.dark ? 'bg-white/10 text-teal' : 'bg-white/70 text-navy'
                      }`}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-card">
          <div>
            <p className="text-base font-extrabold text-navy mb-1">All APIs are configurable per campaign and per product.</p>
            <p className="text-sm text-slate-bpo leading-relaxed">
              Enable only the checks your campaign requires. Each API response is logged to the sale record — fully auditable, exportable in batch, and available via REST API for campaign owners.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {['Phone', 'DNC', 'Email', 'Dupe', 'Address', 'Home Value', 'Program Gateway'].map((a) => (
              <span key={a} className="inline-flex items-center gap-1.5 bg-mist border border-gray-200 text-navy text-xs font-bold px-3 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                {a}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
