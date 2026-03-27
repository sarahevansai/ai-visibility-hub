'use client'

// ─────────────────────────────────────────────
// ResearchSidebar.tsx
// Rebuilt March 27, 2026. Cron-ready architecture.
// CRON TARGET: Replace WHATS_NEW and TRENDING arrays daily.
// All data points include source URL for cron automation.
// ─────────────────────────────────────────────

// CRON-READY: Replace this array with fresh data daily.
// Format: { id, title, detail, source, sourceUrl, date }
// Tier 1 (critical): Update every 12 hours
const WHATS_NEW = [
  {
    id: 'wix-listicle-21pct',
    title: 'Listicles lead all AI citation formats at 21.9%',
    detail: 'Wix Studio AI Search Lab analyzed 75,000 AI answers and over 1 million citations across ChatGPT, Google AI Mode, and Perplexity.',
    source: 'Wix Studio AI Search Lab, March 2026',
    sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
    date: 'March 24, 2026',
    tier: 1,
  },
  {
    id: 'ahrefs-listicle-438pct',
    title: '"Best X" listicles account for 43.8% of all ChatGPT citations',
    detail: 'Listicle format dominates ChatGPT responses specifically, making it the single most powerful format for AI answer engine visibility.',
    source: 'Ahrefs via Position.digital, March 2026',
    sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
    date: 'March 26, 2026',
    tier: 1,
  },
  {
    id: 'semrush-linkedin-2',
    title: 'LinkedIn is the #2 most cited domain in AI search',
    detail: 'LinkedIn appears in 11% of AI responses on average across ChatGPT Search, Perplexity, and Google AI Mode, based on 325,000 prompts.',
    source: 'Semrush LinkedIn AI Visibility Study, March 2026',
    sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
    date: 'March 2026',
    tier: 1,
  },
  {
    id: 'wix-articles-informational',
    title: 'Articles capture 45.5% of informational query citations',
    detail: 'For informational search intent, articles dominate AI citations at 45.5%. Listicles follow at 21.7%. Query intent predicts format performance more than industry or model.',
    source: 'Wix Studio AI Search Lab, March 2026',
    sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
    date: 'March 24, 2026',
    tier: 1,
  },
  {
    id: 'buzzstream-pr-004pct',
    title: 'Syndicated press releases earn just 0.04% of AI citations',
    detail: 'Analysis of 4 million AI citations found syndicated releases on MSN/Yahoo earned 0.04% of citations. Direct wire service URLs (PRNewswire) earned 0.21%.',
    source: 'BuzzStream/Citation Labs via ALM Corp, March 2026',
    sourceUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/',
    date: 'March 20, 2026',
    tier: 1,
  },
  {
    id: 'position-first30pct',
    title: '44.2% of LLM citations come from the first 30% of text',
    detail: 'Content structure is critical. Nearly half of all AI citations are pulled from the opening section of a document. Lead with your most citable claims.',
    source: 'Position.digital AI SEO Statistics, March 2026',
    sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
    date: 'March 26, 2026',
    tier: 1,
  },
  {
    id: 'semrush-linkedin-longform',
    title: 'LinkedIn long-form articles (500-2000 words) get the most AI citations',
    detail: 'Mid-length posts (50-299 words) also rank high. Reshares are rarely referenced by AI. Educational, original content is cited most.',
    source: 'Semrush LinkedIn AI Visibility Study, March 2026',
    sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
    date: 'March 2026',
    tier: 1,
  },
  {
    id: 'stacker-239pct-lift',
    title: 'Third-party editorial distribution produces 239% median lift in AI citation visibility',
    detail: 'Stacker and Scrunch ran a controlled study across five LLMs. Some cases reached 325% lift. Earned media distribution is the strongest lever for AI citation growth.',
    source: 'AuthorityTech.io citing Stacker/Scrunch data, March 2026',
    sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations',
    date: 'March 20, 2026',
    tier: 2,
  },
  {
    id: 'ahrefs-brand-mentions',
    title: 'Brand web mentions correlate 3x more strongly with AI visibility than backlinks',
    detail: 'Ahrefs studied 75,000 brands. Brand web mention correlation: 0.664. Backlink correlation: 0.218. Earned coverage beats technical SEO for AI visibility.',
    source: 'AuthorityTech.io citing Ahrefs research, March 2026',
    sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations',
    date: 'March 20, 2026',
    tier: 2,
  },
  {
    id: 'wix-perplexity-discussions',
    title: 'Perplexity cites discussions and forums at 17% of citations',
    detail: 'Perplexity stands out among AI models for citing Reddit, forums, and community discussions. ChatGPT leans into articles and informational content. Google AI Mode is most balanced.',
    source: 'Wix Studio AI Search Lab, March 2026',
    sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
    date: 'March 24, 2026',
    tier: 2,
  },
  {
    id: 'semrush-linkedin-knowledge',
    title: '54-64% of AI-cited LinkedIn posts focus on knowledge and practical advice',
    detail: 'Posts sharing original insight or practical how-to guidance are cited 4x more than reshares. Consistent posting frequency (5+ posts in 4 weeks) is a predictor of citation likelihood.',
    source: 'Semrush LinkedIn AI Visibility Study, March 2026',
    sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
    date: 'March 2026',
    tier: 2,
  },
  {
    id: 'wix-commercial-listicle',
    title: 'Listicles capture 40.9% of commercial-intent AI citations',
    detail: 'For commercial search queries (comparisons, evaluations, "best X for Y"), listicles nearly double the citation share of any other format. This is the highest-leverage format for B2B sales cycle content.',
    source: 'Wix Studio AI Search Lab, March 2026',
    sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
    date: 'March 24, 2026',
    tier: 2,
  },
  {
    id: 'sxsw-geo-top-topic',
    title: 'GEO was the single most-discussed technical marketing topic at SXSW 2026',
    detail: 'Generative Engine Optimization dominated the SXSW 2026 marketing track. CMOs are replacing traditional SEO KPIs with AI citation volume and LLM referral traffic as leading indicators.',
    source: 'Digital Applied / SXSW 2026 Report, March 2026',
    sourceUrl: 'https://www.digitalapplied.com/blog/sxsw-2026-marketing-takeaways-ai-rewrites-search-podcasts',
    date: 'March 2026',
    tier: 2,
  },
  {
    id: 'semrush-eeat',
    title: 'Named authors with credentials are required for E-E-A-T signals in AI citations',
    detail: 'LLMs evaluate credibility using credible authorship, original content, clean structure, freshness, and domain trust. E-E-A-T remains the framework for AI citation selection.',
    source: 'Semrush AI Search Optimization Guide, March 2026',
    sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/',
    date: 'March 2026',
    tier: 2,
  },
  {
    id: 'seer-541k-responses',
    title: '20 brands analyzed across 541,213 LLM responses and 6 AI platforms',
    detail: 'Seer Interactive identified a "ghost citation" pattern: brand URLs cited but brand name not mentioned. Content strategy and brand name alignment matter for full citation credit.',
    source: 'Seer Interactive, February/March 2026',
    sourceUrl: 'https://www.seerinteractive.com/insights/llm-ghost-citations-why-your-content-is-working-and-your-brand-isnt',
    date: 'March 2026',
    tier: 3,
  },
  {
    id: 'almcorp-cross-platform',
    title: 'Cross-platform citation networks reinforce AI authority',
    detail: 'Brands cited across LinkedIn, industry publications, podcast transcripts, and multiple platforms build reinforcing authority that AI tools use to construct authoritative answers.',
    source: 'ALM Corp LinkedIn AI Citations Study, March 2026',
    sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/',
    date: 'March 2026',
    tier: 3,
  },
]

// CRON-READY: Replace this array with fresh trending data from Zen Media client wins.
// Format: { id, label, signal }
const TRENDING = [
  { id: 'listicle-dominance', label: 'Listicles dominating answer engines', signal: 'hot' as const },
  { id: 'entity-authority', label: 'Entity authority signals critical', signal: 'rising' as const },
  { id: 'faq-optimization', label: 'FAQ optimization surging', signal: 'rising' as const },
  { id: 'sme-attribution', label: 'SME attribution driving citations', signal: 'hot' as const },
  { id: 'deep-linking', label: 'Deep-linking patterns emerging', signal: 'new' as const },
  { id: 'data-releases', label: 'Data releases outperforming news', signal: 'rising' as const },
  { id: 'schema-markup', label: 'Schema markup now essential', signal: 'hot' as const },
  { id: 'earned-media', label: 'Earned media over brand-owned', signal: 'hot' as const },
]

// CRON-READY: Update this timestamp on every cron run.
const LAST_UPDATED = 'March 27, 2026 at 11:25 AM PT'

export default function ResearchSidebar() {
  const tier1 = WHATS_NEW.filter((i) => i.tier === 1)
  const tier2 = WHATS_NEW.filter((i) => i.tier === 2)
  const tier3 = WHATS_NEW.filter((i) => i.tier === 3)

  return (
    <div className="h-full flex flex-col bg-white text-xs">

      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <p className="font-bold text-gray-900 text-sm">Research Feed</p>
        <p className="text-gray-400 mt-0.5">Updated: {LAST_UPDATED}</p>
      </div>

      <div className="flex-1 overflow-y-auto">

        {/* Trending */}
        <div className="px-6 py-5 border-b border-gray-100">
          <p className="font-semibold text-gray-500 uppercase tracking-widest mb-3">Trending Now</p>
          <div className="space-y-1.5">
            {TRENDING.map((t) => (
              <div key={t.id} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  t.signal === 'hot' ? 'bg-red-400' :
                  t.signal === 'rising' ? 'bg-amber-400' :
                  'bg-blue-400'
                }`} />
                <span className="text-gray-700 leading-snug">{t.label}</span>
                {t.signal === 'hot' && (
                  <span className="ml-auto text-red-500 font-semibold uppercase tracking-wide" style={{ fontSize: '9px' }}>HOT</span>
                )}
                {t.signal === 'new' && (
                  <span className="ml-auto text-blue-500 font-semibold uppercase tracking-wide" style={{ fontSize: '9px' }}>NEW</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What's New: Tier 1 */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <p className="font-semibold text-gray-500 uppercase tracking-widest">What&apos;s New</p>
            <span className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wide" style={{ fontSize: '9px' }}>TIER 1</span>
          </div>
          <div className="space-y-4">
            {tier1.map((item) => (
              <div key={item.id} className="border-l-2 border-gray-200 pl-3">
                <p className="font-semibold text-gray-800 leading-snug mb-1">{item.title}</p>
                <p className="text-gray-500 leading-relaxed mb-1.5">{item.detail}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.source} &#8599;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* What's New: Tier 2 */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <p className="font-semibold text-gray-500 uppercase tracking-widest">What&apos;s New</p>
            <span className="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wide" style={{ fontSize: '9px' }}>TIER 2</span>
          </div>
          <div className="space-y-4">
            {tier2.map((item) => (
              <div key={item.id} className="border-l-2 border-gray-100 pl-3">
                <p className="font-semibold text-gray-800 leading-snug mb-1">{item.title}</p>
                <p className="text-gray-500 leading-relaxed mb-1.5">{item.detail}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.source} &#8599;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* What's New: Tier 3 */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <p className="font-semibold text-gray-500 uppercase tracking-widest">What&apos;s New</p>
            <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wide" style={{ fontSize: '9px' }}>TIER 3</span>
          </div>
          <div className="space-y-4">
            {tier3.map((item) => (
              <div key={item.id} className="border-l-2 border-gray-100 pl-3">
                <p className="font-semibold text-gray-800 leading-snug mb-1">{item.title}</p>
                <p className="text-gray-500 leading-relaxed mb-1.5">{item.detail}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.source} &#8599;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Update Schedule */}
        <div className="px-6 py-5">
          <p className="font-semibold text-gray-500 uppercase tracking-widest mb-3">Update Schedule</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Tier 1: Critical</p>
                <p className="text-gray-500">Every 12 hours. Ahrefs AI citations, Semrush AI visibility updates.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Tier 2: Important</p>
                <p className="text-gray-500">Every 3 days. Wix Studio, industry research, GlobeNewswire/PR Newswire updates.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Tier 3: Reference</p>
                <p className="text-gray-500">Real-time as discovered. Zen Media internal client wins and performance patterns.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
