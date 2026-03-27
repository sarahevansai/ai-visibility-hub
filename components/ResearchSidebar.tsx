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
]

const FALLBACK_TRENDING: TrendingItem[] = [
  { id: 'listicle-format-dominance', topic: 'Listicles dominating answer engines', signal: 'HOT', description: 'Listicle format driving the highest citation rates across Zen Media client portfolio.' },
  { id: 'sme-attribution-citations', topic: 'SME attribution driving citations', signal: 'HOT', description: 'Named expert attribution seeing 2-3x citation uplift vs. unsigned content.' },
  { id: 'earned-media-over-owned', topic: 'Earned media over brand-owned content', signal: 'HOT', description: 'Third-party editorial placements outperforming brand-owned content for AI citation rate.' },
  { id: 'entity-authority-signals', topic: 'Entity authority signals critical', signal: 'RISING', description: 'Knowledge panel presence and entity disambiguation driving AI visibility.' },
  { id: 'faq-optimization-surge', topic: 'FAQ optimization surging', signal: 'RISING', description: 'FAQ-structured content capturing outsized share of conversational AI queries.' },
  { id: 'data-releases-outperform', topic: 'Data releases outperforming news', signal: 'RISING', description: 'Original data driving the highest sustained citation rates.' },
  { id: 'schema-markup-essential', topic: 'Schema markup now essential', signal: 'HOT', description: 'Structured data implementation correlating with higher AI citation rates.' },
  { id: 'deep-linking-patterns', topic: 'Deep-linking patterns emerging', signal: 'NEW', description: 'Internal deep-linking strategy improving AI crawlability and citation cohesion.' },
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
