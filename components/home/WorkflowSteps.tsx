import SectionTag from '@/components/ui/SectionTag'

const steps = [
  {
    icon: '📞',
    label: 'Agent Call',
    desc: 'Lead auto-populates with DNC/BIN/CNAM validation',
    color: 'bg-teal',
  },
  {
    icon: '📋',
    label: 'Lead Capture',
    desc: 'Address auto-complete, duplicate check in real time',
    color: 'bg-orange-bpo',
  },
  {
    icon: '🛒',
    label: 'Core Sale',
    desc: 'Payment collected securely during live call',
    color: 'bg-purple-bpo',
  },
  {
    icon: '🔄',
    label: 'Verifier Transfer',
    desc: 'SIP warm transfer with full order context',
    color: 'bg-green-500',
  },
  {
    icon: '💳',
    label: 'Upsell',
    desc: 'Structured upsell workflow, tracked by product',
    color: 'bg-yellow-500',
  },
  {
    icon: '✅',
    label: 'QA Review',
    desc: 'AI flags calls, QA scores and annotates recordings',
    color: 'bg-pink-500',
  },
  {
    icon: '📊',
    label: 'Live Report',
    desc: 'Dashboard updates instantly, MIS auto-generated',
    color: 'bg-navy',
  },
]

export default function WorkflowSteps() {
  return (
    <section className="section-padding bg-mist section-edge">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionTag variant="amber" className="mb-4">Sales Workflow</SectionTag>
          <h2 className="heading-lg mb-4">From First Call to Final Revenue</h2>
          <p className="body-lg max-w-xl mx-auto">
            Your entire BPO sales process — structured, automated, and tracked in one place.
          </p>
        </div>

        {/* Steps — horizontal on large, vertical on small */}
        <div className="hidden lg:flex items-start justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-start">
              <div className="flex flex-col items-center gap-3 w-[120px]">
                <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-xl text-white shadow-card`}>
                  {step.icon}
                </div>
                <span className="text-sm font-bold text-navy text-center leading-tight">{step.label}</span>
                <p className="text-sm text-slate-bpo text-center leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="text-2xl text-gray-300 mt-4 mx-1">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-lg text-white shrink-0`}>
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-gray-200 mt-1" />
                )}
              </div>
              <div className="pb-8">
                <span className="text-base font-bold text-navy">{step.label}</span>
                <p className="text-sm text-slate-bpo mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
