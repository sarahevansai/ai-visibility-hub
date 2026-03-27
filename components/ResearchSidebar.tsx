'use client'

const RESEARCH = [
  { text: 'Semrush: Recent content weighted 23% higher', url: 'https://www.semrush.com/blog/ai-search-trends/' },
  { text: 'OptiFox: Headers boost citations 18%', url: 'https://www.optifox.in/blog/ai-overviews-citation-2026/' },
  { text: 'Brandlight: Citation gap now 80%', url: 'https://brandlight.io/research/ai-citation-analysis/' },
  { text: 'Reddit: FAQ sections +2x engagement', url: 'https://reddit.com/r/SEO' },
  { text: 'Moz: Anchor text quality matters', url: 'https://moz.com/blog/' },
]

const TRENDS = ['Entity Authority', 'Freshness Signals', 'Schema Markup', 'FAQ Sections', 'Original Research']

export default function ResearchSidebar() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* What's New - Tight Bullets with Links */}
      <div className="flex-1 overflow-y-auto px-8 py-8 border-b border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">What's New</h3>
        <ul className="space-y-2">
          {RESEARCH.map((item, idx) => (
            <li key={idx} className="text-xs text-gray-700 leading-snug">
              • <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Trending */}
      <div className="px-8 py-6 border-b border-gray-200 space-y-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Trending</h3>
        <div className="space-y-1.5">
          {TRENDS.map((trend, idx) => (
            <button
              key={idx}
              className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
            >
              → {trend}
            </button>
          ))}
        </div>
      </div>

      {/* Update Schedule */}
      <div className="px-8 py-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Update Schedule</p>
        <div className="space-y-1 text-xs text-gray-600">
          <p>Tier 1: Every 12 hours</p>
          <p>Tier 2: Every 3 days</p>
          <p>Tier 3: Real-time</p>
        </div>
      </div>
    </div>
  )
}
