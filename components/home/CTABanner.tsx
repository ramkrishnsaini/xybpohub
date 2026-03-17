import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-navy py-20 lg:py-28 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-teal/5" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-orange-bpo/5" />
      </div>

      <div className="section-container relative z-10">
        <p className="text-teal text-sm font-bold tracking-widest uppercase mb-5">
          Ready to scale?
        </p>
        <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
          Ready to run your entire<br />BPO on one platform?
        </h2>
        <p className="text-teal text-lg font-medium mb-10 max-w-lg mx-auto">
          Join call centers already tracking real-time revenue with XyBPO Hub.
        </p>
        <Link href="/demo/" className="btn-primary px-12 py-4 text-base">
          Book Your Free Demo →
        </Link>
        <p className="mt-5 text-gray-500 text-sm">
          No credit card required · Setup in under 30 minutes · Cancel anytime
        </p>
      </div>
    </section>
  )
}
