const logos = ['VICIDIAL', 'STRIPE', 'SALESFORCE', 'ZOHO', 'PAYPAL', 'TWILIO', 'ZAPIER']

export default function LogoStrip() {
  return (
    <div className="bg-mist py-6 border-y border-gray-200">
      <div className="section-container">
        <p className="text-center text-xs font-semibold text-slate-bpo mb-4 tracking-widest uppercase">
          Trusted by teams running campaigns on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {logos.map((logo) => (
            <span key={logo} className="text-base font-bold text-gray-400 tracking-wide hover:text-slate-bpo transition-colors">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
