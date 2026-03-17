import SectionTag from '@/components/ui/SectionTag'

const pains = [
  {
    icon: '📊',
    title: 'Excel & Macro Chaos',
    body: 'Your team spends 2–3 hours every night building MIS reports in macros. By the time it reaches the client, the data is stale and decisions are already wrong.',
    bg: 'bg-coral',
    border: 'border-orange-200',
  },
  {
    icon: '👁️',
    title: 'No Real-Time Visibility',
    body: 'When conversion rates drop mid-shift, you find out the next morning. Missed calls, missed revenue, no alerts — and no way to course-correct in time.',
    bg: 'bg-lavender',
    border: 'border-purple-200',
  },
  {
    icon: '📋',
    title: 'Duplicate Leads & Missed Follow-Ups',
    body: 'Without DNC/BIN validation and dedup checks, agents waste calls on invalid leads — and you lose both compliance and revenue with every dial.',
    bg: 'bg-amber-bpo',
    border: 'border-yellow-200',
  },
]

export default function PainSection() {
  return (
    <section className="section-padding bg-mist section-edge">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionTag variant="orange" className="mb-4">The Problem</SectionTag>
          <h2 className="heading-lg max-w-2xl mx-auto mb-4">
            Your BPO is growing.<br />Your tools aren&apos;t keeping up.
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            Still using Excel, paying high tracker fees, or staying late to send reports?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pains.map((p) => (
            <div
              key={p.title}
              className={`${p.bg} border ${p.border} rounded-2xl p-8 card-hover`}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-3">{p.title}</h3>
              <p className="text-base text-slate-bpo leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Callout Quote */}
        <div className="bg-navy rounded-2xl p-10 lg:p-14 text-center">
          <p className="text-xl lg:text-2xl font-semibold text-warm-white leading-relaxed max-w-3xl mx-auto">
            &ldquo;Every night, thousands of BPO managers stay late — cleaning data, verifying sales, and building reports just to <span className="text-teal">prove performance</span>. That ends now.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}

