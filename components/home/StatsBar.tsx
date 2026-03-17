const stats = [
  { value: '500K+', label: 'Sales Tracked Monthly', desc: 'Across all campaigns and centers' },
  { value: '99.9%', label: 'Platform Uptime SLA', desc: 'Guaranteed reliability for live operations' },
  { value: '< 5 min', label: 'Campaign Go-Live Time', desc: 'Role-based setup, no delays' },
  { value: '40%', label: 'Less MIS Prep Time', desc: 'Automated reports, zero manual cleanup' },
]

export default function StatsBar() {
  return (
    <section className="bg-navy py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i < stats.length - 1 ? 'lg:border-r border-white/10' : ''}`}>
              <div className="text-4xl lg:text-5xl font-black text-teal mb-2">{s.value}</div>
              <div className="text-base font-bold text-white mb-1">{s.label}</div>
              <div className="text-sm text-gray-400">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
