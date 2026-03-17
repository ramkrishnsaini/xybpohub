import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions — Built for Every BPO Role',
  description: 'XyBPO Hub solutions for agents, verifiers, center owners, and campaign owners. Each role has a dedicated workflow, dashboard, and toolset.',
}

const tabs = [
  { label: 'For Agents', href: '/solutions/agents/' },
  { label: 'For Verifiers', href: '/solutions/verifiers/' },
  { label: 'For Center Owners', href: '/solutions/center-owners/' },
  { label: 'For Campaign Owners', href: '/solutions/campaign-owners/' },
]

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Solutions sub-nav */}
      <div className="bg-mist border-b border-gray-200">
        <div className="section-container">
          <div className="flex gap-1 overflow-x-auto py-3">
            {tabs.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold text-slate-bpo hover:text-navy hover:bg-white transition-all duration-150"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {children}
    </>
  )
}
