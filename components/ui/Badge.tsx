interface LiveBadgeProps {
  className?: string
}

export function LiveBadge({ className = '' }: LiveBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 bg-lime-bpo text-green-800 px-3 py-1 rounded-full text-xs font-bold ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
      LIVE
    </div>
  )
}

interface ComplianceBadgeProps {
  label: string
  className?: string
}

export function ComplianceBadge({ label, className = '' }: ComplianceBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 bg-mist text-slate-bpo px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 ${className}`}>
      <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      {label}
    </span>
  )
}

interface HeroBadgeProps {
  children: React.ReactNode
  className?: string
}

export function HeroBadge({ children, className = '' }: HeroBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 bg-mint text-navy px-4 py-2 rounded-full text-sm font-semibold ${className}`}>
      <span className="live-dot" />
      {children}
    </div>
  )
}
