'use client'

// ResearchSidebar.tsx
// Updated March 27, 2026. Cron-ready architecture.
// Consumes live API endpoints:
//   GET /api/research/whats-new  (Tier 1 every 12h, Tier 2 every 3d, Tier 3 real-time)
//   GET /api/research/trending   (daily at 10 AM PT)

import { useEffect, useState } from 'react'

interface WhatsNewItem {
  id: string
  title: string
  detail: string
  source: string
  sourceUrl: string
  date: string
  tier: 1 | 2 | 3
}

interface TrendingItem {
  id: string
  topic: string
  signal: 'HOT' | 'NEW' | 'RISING'
  description: string
}

// Fallback static data in case API is unavailable
const FALLBACK_WHATS_NEW: WhatsNewItem[] = [
  // ── MARCH 2026 CORE UPDATE + LLM CHANGES ──
  {
    id: 'google-march-2026-core-update',
    title: 'Google March 2026 Core Update rolling out — 55% of sites affected',
    detail: 'Began March 27. Recalibrates rankings on comparative value, intent alignment, and expertise. AI content farms lost 60-80% of traffic. Sites with human editorial oversight are performing well. Expected 2-week rollout.',
    source: 'Google Search Status Dashboard / Ahrefs + Semrush, March 2026',
    sourceUrl: 'https://status.search.google.com/',
    date: 'March 27, 2026',
    tier: 1,
  },
  {
    id: 'gemini-3-ai-overviews',
    title: 'Gemini 3 now powers AI Overviews globally — AI Mode gets Canvas',
    detail: 'Google Search uses Gemini 3 for AI Overviews worldwide (since Jan 27). AI Overviews now appear on 82% of B2B tech searches, up from 36% a year ago. Gemini Canvas in AI Mode transforms search into an interactive workspace.',
    source: 'Google Blog, January-March 2026',
    sourceUrl: 'https://blog.google/products-and-platforms/products/search/ai-mode-ai-overviews-updates/',
    date: 'March 2026',
    tier: 1,
  },
  {
    id: 'citations-not-rankings',
    title: 'Only 38% of AI Overview citations come from top-10 organic results',
    detail: '80% of LLM citations don\'t rank in Google\'s top 100 for the original query. Citation algorithms are now independent of traditional SEO rankings — requires a different optimization strategy.',
    source: 'Position.digital AI SEO Statistics, March 2026',
    sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
    date: 'March 2026',
    tier: 1,
  },
  {
    id: 'schema-trust-signal',
    title: 'Schema markup shifts from display trigger to AI trust signal',
    detail: 'Gemini-powered AI Mode uses schema to verify claims, establish entity relationships, and assess source credibility. Sites with proper schema are cited 3.2x more often in AI responses. JSON-LD in head remains the preferred format.',
    source: 'Digital Applied + Writesonic Research, March 2026',
    sourceUrl: 'https://www.digitalapplied.com/blog/schema-markup-after-march-2026-structured-data-strategies',
    date: 'March 2026',
    tier: 1,
  },
  {
    id: 'chatgpt-citation-behavior',
    title: 'ChatGPT only cites 15% of pages it retrieves — front-loading is critical',
    detail: '85% of retrieved sources never get cited. 44.2% of all citations come from the first 30% of text. Listicle citations dropped 30% (Dec 2025-Jan 2026). Turn 1 web searches are 2.5x more likely to trigger citations than Turn 10.',
    source: 'ALM Corp ChatGPT Citations Study, March 2026',
    sourceUrl: 'https://almcorp.com/blog/chatgpt-citations-study/',
    date: 'March 2026',
    tier: 1,
  },
  {
    id: 'comparative-value-filtering',
    title: 'Google now filters content that doesn\'t add comparative value',
    detail: 'The March 2026 update deploys a Gemini 4.0 Semantic Filter to evaluate how much genuinely new information a page contributes vs. existing top results. Pages rephrasing existing content without original data or unique perspective lose ground.',
    source: 'Zen Media Core Update Impact Analysis, March 2026',
    sourceUrl: 'https://searchengineland.com/',
    date: 'March 30, 2026',
    tier: 1,
  },
  {
    id: 'eeat-experience-amplified',
    title: 'E-E-A-T "Experience" signal amplified — named authors with credentials outperform',
    detail: 'The first E in E-E-A-T has been elevated beyond previous levels. Named authors with verifiable credentials and byline consistency outperform generic "Editorial Team" attribution. Structured author pages with industry affiliations saw measurable ranking improvements within weeks.',
    source: 'Digital Applied + Coalition Technologies, March 2026',
    sourceUrl: 'https://www.digitalapplied.com/',
    date: 'March 2026',
    tier: 1,
  },
  // ── EXISTING ITEMS (still valid) ──
  {
    id: 'wix-listicle-21pct',
    title: 'Listicles lead all AI citation formats at 21.9%',
    detail: 'Wix Studio AI Search Lab analyzed 75,000 AI answers and over 1 million citations across ChatGPT, Google AI Mode, and Perplexity.',
    source: 'Wix Studio AI Search Lab, March 2026',
    sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
    date: 'March 24, 2026',
    tier: 2,
  },
  {
    id: 'perplexity-drops-ads',
    title: 'Perplexity drops ads entirely — most diverse citation sourcing of any LLM',
    detail: 'Perplexity removed ads to protect answer integrity. Reddit represents 46.7% of its top citations. Only 25.11% domain duplication — the most diverse sourcing compared to ChatGPT (71% duplication).',
    source: 'Growtika LLM Visibility Guide, March 2026',
    sourceUrl: 'https://growtika.com/blog/llm-visibility',
    date: 'March 2026',
    tier: 2,
  },
  {
    id: 'content-structure-citations',
    title: 'Consistent heading levels = 40% more likely to be cited by ChatGPT',
    detail: 'Content with consistent heading hierarchy, bullet lists, and short paragraphs improves extraction likelihood. Sites with 32K+ referring domains are 3.5x more likely to be cited.',
    source: 'Wellows LLM Citations Research, February 2026',
    sourceUrl: 'https://wellows.com/blog/llm-citations/',
    date: 'February 2026',
    tier: 2,
  },
  {
    id: 'semrush-linkedin-2',
    title: 'LinkedIn is the #2 most cited domain in AI search',
    detail: 'LinkedIn appears in 11% of AI responses on average across ChatGPT Search, Perplexity, and Google AI Mode, based on 325,000 prompts.',
    source: 'Semrush LinkedIn AI Visibility Study, March 2026',
    sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
    date: 'March 2026',
    tier: 2,
  },
  {
    id: 'ai-overview-click-boost',
    title: 'Sites cited in AI Overviews see 25-40% click increase',
    detail: 'Getting cited inside an AI Overview earns 35% more clicks than holding a traditional ranking alone. Structured content with question-based headings, direct answers, stats, and expert names performs best for AI extraction.',
    source: 'Google 2026 Data via SEO HQ',
    sourceUrl: 'https://seohq.github.io/ai-overviews-optimization-2026',
    date: 'March 2026',
    tier: 2,
  },
]

const FALLBACK_TRENDING: TrendingItem[] = [
  { id: 'march-2026-core-update', topic: 'Google March 2026 Core Update rolling out', signal: 'HOT', description: 'First core update of 2026. 55% of sites affected. Comparative value filtering and E-E-A-T Experience amplification are the key signals.' },
  { id: 'citations-independent-of-seo', topic: 'LLM citations now independent of SEO rankings', signal: 'HOT', description: 'Only 38% of AI Overview citations come from top-10 organic results. 80% of LLM citations don\'t rank in Google top 100.' },
  { id: 'schema-as-ai-trust-signal', topic: 'Schema markup = AI trust signal (not just rich results)', signal: 'HOT', description: 'Gemini AI Mode uses schema to verify claims and assess credibility. 3.2x citation boost for sites with proper schema.' },
  { id: 'comparative-value-filter', topic: 'Gemini 4.0 Semantic Filter detecting low-value content', signal: 'HOT', description: 'Google now filtering pages that rephrase existing content without adding original data, expert perspective, or unique value.' },
  { id: 'front-loading-critical', topic: 'Front-loading claims is now critical for citations', signal: 'HOT', description: '44.2% of ChatGPT citations come from the first 30% of text. ChatGPT only cites 15% of pages it retrieves.' },
  { id: 'ai-overviews-82pct-b2b', topic: 'AI Overviews on 82% of B2B searches', signal: 'RISING', description: 'Up from 36% a year ago. Being cited in AI Overviews now earns 35% more clicks than traditional rankings alone.' },
  { id: 'agentic-web-2026', topic: '2026: Year of the Agentic Web', signal: 'RISING', description: 'ChatGPT Operator, Perplexity Actions executing tasks on behalf of users. Search and assistant functions merging.' },
  { id: 'author-credentials-amplified', topic: 'Named author credentials outperforming generic bylines', signal: 'RISING', description: 'E-E-A-T Experience signal elevated. Structured author pages with industry affiliations seeing measurable ranking improvements.' },
  { id: 'gemini-canvas-in-search', topic: 'Gemini Canvas live in Google AI Mode', signal: 'NEW', description: 'Transforms search into interactive workspace for planning, writing, and coding. Available to all U.S. users in English.' },
  { id: 'perplexity-ad-free', topic: 'Perplexity drops ads — most diverse citations', signal: 'NEW', description: 'Removed ads to protect answer integrity. Only 25% domain duplication vs. ChatGPT at 71%.' },
]

function formatUpdated(iso: string | null): string {
  if (!iso) return 'Loading...'
  const d = new Date(iso)
  return d.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
    timeZone: 'America/Los_Angeles',
  })
}

export default function ResearchSidebar() {
  const [whatsNew, setWhatsNew] = useState<WhatsNewItem[]>(FALLBACK_WHATS_NEW)
  const [trending, setTrending] = useState<TrendingItem[]>(FALLBACK_TRENDING)
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      try {
        const [wnRes, trRes] = await Promise.all([
          fetch('/api/research/whats-new', { cache: 'no-store' }),
          fetch('/api/research/trending', { cache: 'no-store' }),
        ])

        if (wnRes.ok && !cancelled) {
          const wnJson = await wnRes.json()
          if (wnJson.data && wnJson.data.length > 0) {
            setWhatsNew(wnJson.data)
            setUpdatedAt(wnJson.updatedAt)
          }
        }

        if (trRes.ok && !cancelled) {
          const trJson = await trRes.json()
          if (trJson.data && trJson.data.length > 0) {
            setTrending(trJson.data)
          }
        }
      } catch {
        // silently fall back to static data
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [])

  const tier1 = whatsNew.filter((i) => i.tier === 1)
  const tier2 = whatsNew.filter((i) => i.tier === 2)
  const tier3 = whatsNew.filter((i) => i.tier === 3)

  return (
    <div className="h-full flex flex-col bg-white text-xs">

      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <p className="font-bold text-gray-900 text-sm">Research Feed</p>
        <p className="text-gray-400 mt-0.5">
          {loading ? 'Loading...' : `Updated: ${formatUpdated(updatedAt)}`}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">

        {/* Trending */}
        <div className="px-6 py-5 border-b border-gray-100">
          <p className="font-semibold text-gray-500 uppercase tracking-widest mb-3">Trending Now</p>
          <div className="space-y-1.5">
            {trending.map((t) => (
              <div key={t.id} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  t.signal === 'HOT' ? 'bg-red-400' :
                  t.signal === 'RISING' ? 'bg-amber-400' :
                  'bg-blue-400'
                }`} />
                <span className="text-gray-700 leading-snug">{t.topic}</span>
                {t.signal === 'HOT' && (
                  <span className="ml-auto text-red-500 font-semibold uppercase tracking-wide" style={{ fontSize: '9px' }}>HOT</span>
                )}
                {t.signal === 'NEW' && (
                  <span className="ml-auto text-blue-500 font-semibold uppercase tracking-wide" style={{ fontSize: '9px' }}>NEW</span>
                )}
                {t.signal === 'RISING' && (
                  <span className="ml-auto text-amber-500 font-semibold uppercase tracking-wide" style={{ fontSize: '9px' }}>RISING</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What's New: Tier 1 */}
        {tier1.length > 0 && (
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
        )}

        {/* What's New: Tier 2 */}
        {tier2.length > 0 && (
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
        )}

        {/* What's New: Tier 3 */}
        {tier3.length > 0 && (
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
        )}

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
