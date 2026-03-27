// app/api/research/whats-new/route.ts
// Vercel Cron endpoint: Tier 1 runs every 12h, Tier 2 every 3d, Tier 3 real-time
// All data March 2026+ only
// Data structure: { id, title, detail, source, sourceUrl, date, tier }

import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export interface WhatsNewItem {
  id: string
  title: string
  detail: string
  source: string
  sourceUrl: string
  date: string
  tier: 1 | 2 | 3
}

// Tier 1: High-frequency data (refresh every 12h)
// Sources: Ahrefs AI citation reports, Semrush AI visibility, Wix Studio AI analysis
const TIER1_FINDINGS: WhatsNewItem[] = [
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
]

// Tier 2: Mid-frequency data (refresh every 3 days)
// Sources: Industry research, GlobeNewswire, PR Newswire
const TIER2_FINDINGS: WhatsNewItem[] = [
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
]

// Tier 3: Real-time data as discovered
// Sources: Zen Media internal client data, citation rates by content type/format
const TIER3_FINDINGS: WhatsNewItem[] = [
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

export async function GET() {
  const allFindings: WhatsNewItem[] = [
    ...TIER1_FINDINGS,
    ...TIER2_FINDINGS,
    ...TIER3_FINDINGS,
  ]

  // Return top 16 findings, sorted by tier priority then by date
  const top16 = allFindings.slice(0, 16)

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    count: top16.length,
    data: top16,
  })
}
