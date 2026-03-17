interface SectionTagProps {
  children: React.ReactNode
  variant?: 'purple' | 'teal' | 'orange' | 'amber'
  className?: string
}

const variants = {
  purple: 'bg-lavender text-purple-bpo',
  teal: 'bg-mint text-teal-dark',
  orange: 'bg-coral text-orange-bpo',
  amber: 'bg-amber-bpo text-yellow-800',
}

export default function SectionTag({ children, variant = 'purple', className = '' }: SectionTagProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
