'use client'

const RESEARCH_SOURCES = [
  { title: 'Semrush: AI Visibility & Citation Tracking 2026', author: 'Semrush Research', date: 'Mar 2026', url: 'https://www.semrush.com/blog/ai-search-trends/', tier: 'TIER 1' },
  { title: 'OptiFox: AI Overviews Citation Analysis', author: 'OptiFox Research', date: 'Mar 2026', url: 'https://www.optifox.in/blog/ai-overviews-citation-2026/', tier: 'TIER 1' },
  { title: 'Brandlight: Citation Gap Analysis (Google vs AI Systems)', author: 'Brandlight Research', date: 'Feb 2026', url: 'https://brandlight.io/research/ai-citation-analysis/', tier: 'TIER 1' },
  { title: 'Info-Tech: AI Momentum vs Delivery Readiness Gap', author: 'Info-Tech Research Group', date: 'Mar 2026', url: 'https://www.prnewswire.co.uk/news-releases/', tier: 'TIER 1' },
  { title: 'Google Official: AI Overviews Documentation', author: 'Google Search Central', date: 'Ongoing', url: 'https://developers.google.com/search/docs/appearance/ai-overviews', tier: 'TIER 1' },
  { title: 'Anthropic Official: Claude Documentation & Papers', author: 'Anthropic', date: 'Ongoing', url: 'https://www.anthropic.com/', tier: 'TIER 1' },
  { title: 'OpenAI Official: GPT & Accessibility Docs', author: 'OpenAI', date: 'Ongoing', url: 'https://platform.openai.com/docs/', tier: 'TIER 1' },
  { title: 'Moz: SEO & AI Visibility Research', author: 'Moz', date: 'Feb-Mar 2026', url: 'https://moz.com/blog/', tier: 'TIER 2' },
  { title: 'Ahrefs: AI Visibility & Citation Patterns', author: 'Ahrefs', date: 'Feb-Mar 2026', url: 'https://ahrefs.com/blog/', tier: 'TIER 2' },
  { title: 'Search Engine Journal: Practitioner Analysis', author: 'Search Engine Journal', date: 'Ongoing', url: 'https://www.searchenginejournal.com/', tier: 'TIER 2' },
  { title: 'Backlinko: Data-Driven SEO & AI Research', author: 'Backlinko', date: 'Feb-Mar 2026', url: 'https://backlinko.com/blog/', tier: 'TIER 2' },
  { title: 'AlmCorp: AI Citation Analysis & Tracking', author: 'AlmCorp', date: 'Mar 2026', url: 'https://almcorp.com/blog/', tier: 'TIER 2' },
  { title: 'Reddit Communities: r/SEO, r/ChatGPT, r/Perplexity', author: 'Community Discussion', date: 'Daily', url: 'https://reddit.com/r/SEO', tier: 'TIER 3' },
  { title: 'LinkedIn Practitioner Insights', author: 'Industry Leaders', date: 'Daily', url: 'https://www.linkedin.com/', tier: 'TIER 3' },
  { title: 'Import AI Newsletter: AI Trends & Research', author: 'Jack Clark', date: 'Weekly', url: 'https://importai.substack.com/', tier: 'TIER 3' },
]

export default function ResearchLibrary() {
  return (
    <div className="space-y-6">
      <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-purple-300 mb-2">🔬 Research Library</h2>
        <p className="text-slate-300">Curated, credible sources for AI visibility research. Every rule in Rules Today links back to one of these sources.</p>
      </div>

      <div className="space-y-3">
        {RESEARCH_SOURCES.map((source, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    source.tier === 'TIER 1' ? 'bg-green-900/50 text-green-300' :
                    source.tier === 'TIER 2' ? 'bg-blue-900/50 text-blue-300' :
                    'bg-slate-700 text-slate-300'
                  }`}>
                    {source.tier}
                  </span>
                </div>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium block mb-1">
                  {source.title}
                </a>
                <p className="text-sm text-slate-400">{source.author}</p>
                <p className="text-xs text-slate-500 mt-1">Updated: {source.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
        <h3 className="font-bold text-slate-300 mb-2">📊 Source Tier Explanation</h3>
        <ul className="space-y-2 text-sm text-slate-400">
          <li><span className="text-green-400 font-bold">TIER 1 (Official Truth):</span> Direct from LLM companies, official research papers, and established analytics platforms</li>
          <li><span className="text-blue-400 font-bold">TIER 2 (Verified Research):</span> Published studies from credible firms with transparent methodologies</li>
          <li><span className="text-slate-400 font-bold">TIER 3 (Community Intelligence):</span> Real practitioners testing things in real-time. Valuable but unverified</li>
        </ul>
      </div>
    </div>
  )
}
