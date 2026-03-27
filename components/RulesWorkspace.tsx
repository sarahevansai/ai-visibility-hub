'use client'

import { useState } from 'react'

// ─────────────────────────────────────────────
// RESEARCH-BACKED DATA
// Every stat below has a verified source URL.
// See RESEARCH.md for full citation details.
// ─────────────────────────────────────────────

type ChecklistItem = {
  text: string
  source: string
  sourceUrl: string
}

type TemplateSection = {
  label: string
  content: string
  why: string
  source: string
  sourceUrl: string
}

type ContentType = {
  id: string
  name: string
  subtitle: string
  keyStat: string
  keyStatSource: string
  keyStatUrl: string
  template: TemplateSection[]
  copyTemplate: string
  checklist: ChecklistItem[]
}

const CONTENT_TYPES: ContentType[] = [
  {
    id: 'blog',
    name: 'Blog Posts',
    subtitle: 'The #1 format for AI citations',
    keyStat: 'GEO strategies can boost AI visibility by up to 40% — Princeton/IIT Delhi, KDD 2024',
    keyStatSource: 'Princeton University / IIT Delhi (KDD 2024)',
    keyStatUrl: 'https://arxiv.org/abs/2311.09735',
    copyTemplate: `# [Keyword-Led Title: Answer the Question in the H1]

[CITY, DATE] — [One-sentence summary of what this post covers and why it matters now.]

## What Is [Topic]?

[Topic] is [direct definition in first sentence — mirror the H2 heading exactly]. [2-3 sentences expanding on the definition with your specific angle.]

## Why [Topic] Matters in [Year]

[Stat or data point with attribution]. [Your expert analysis, 2-3 sentences.] [Second supporting point.]

According to [Specific Source], [exact quote or close paraphrase of a verifiable finding].

## How to [Main Action: Step-by-Step]

### Step 1: [Action Verb + Noun]

[2-3 sentences. Keep paragraphs short — one idea per paragraph.]

### Step 2: [Action Verb + Noun]

[2-3 sentences.]

### Step 3: [Action Verb + Noun]

[2-3 sentences.]

## [Topic] Best Practices

- **[Practice 1]:** [One sentence explanation.]
- **[Practice 2]:** [One sentence explanation.]
- **[Practice 3]:** [One sentence explanation.]
- **[Practice 4]:** [One sentence explanation.]

## Common Mistakes to Avoid

[2-3 sentences on what goes wrong and why.]

## Frequently Asked Questions

**Q: [Most-searched question about this topic]?**

A: [Concise, complete answer in 2-3 sentences. Write as if answering directly in ChatGPT.]

**Q: [Second most-searched question]?**

A: [Concise, complete answer in 2-3 sentences.]

**Q: [Third question — objection or comparison]?**

A: [Concise, complete answer in 2-3 sentences.]

**Q: [Fourth question — how-to or cost]?**

A: [Concise, complete answer in 2-3 sentences.]

**Q: [Fifth question — future or trend-related]?**

A: [Concise, complete answer in 2-3 sentences.]

## The Bottom Line

[2-3 sentences summarizing the main takeaway. Include your brand's positioning.]

*Last updated: [Month Year] | Author: [Name], [Title]*

<!-- Schema markup: Add Article + FAQPage JSON-LD to <head> -->`,
    template: [
      {
        label: 'H1: Keyword-Led Title',
        content: '# [Keyword-Led Title: Answer the Question in the H1]',
        why: 'Semrush found that AI tools mirror heading syntax in their first sentence. If your H1 asks "What Is AI Visibility?" the AI answer begins "AI visibility is…" — matching your framing directly.',
        source: 'Semrush (Nov 2025) via ppc.land',
        sourceUrl: 'https://ppc.land/semrush-triples-ai-visibility-in-one-month-with-systematic-optimization/',
      },
      {
        label: 'Opening: State the problem or answer immediately',
        content: '[One-sentence summary of what this covers and why it matters now.]',
        why: 'AI systems extract "position statements" — direct, early answers to the query. A buried thesis reduces citation probability. LLMRefs recommends 2–3 sentence max paragraphs throughout.',
        source: 'LLMRefs GEO Guide (2026)',
        sourceUrl: 'https://llmrefs.com/generative-engine-optimization',
      },
      {
        label: 'H2s: 3–8 headers, one topic each',
        content: '## What Is [Topic]? / ## Why It Matters / ## How To / ## FAQ',
        why: 'Structured headers are a top signal for AI Overviews. Pages with clear H2/H3 hierarchies allow AI to extract sections as standalone answers, dramatically increasing citation surface area.',
        source: 'SingleGrain Google AI Overviews Guide (2025)',
        sourceUrl: 'https://www.singlegrain.com/search-everywhere-optimization/google-ai-overviews-the-ultimate-guide-to-ranking-in-2025/',
      },
      {
        label: 'Body: Attribution to sources inline',
        content: '"According to [Specific Source], [verifiable finding]."',
        why: 'The Princeton GEO study found that including citations, quotations from relevant sources, and statistics are the highest-impact strategies — boosting source visibility by up to 40% in generative engine responses.',
        source: 'Aggarwal et al. (Princeton/IIT Delhi, KDD 2024)',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'FAQ: 5+ Q&A pairs at the end',
        content: '**Q: [Question]?**\nA: [Complete answer in 2-3 sentences.]',
        why: 'Pages with FAQPage schema markup are 3.2x more likely to appear in Google AI Overviews compared to pages without it. Write each answer as if ChatGPT will read it verbatim.',
        source: 'Frase.io FAQ Schema AI Search Research (Nov 2025)',
        sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
      },
      {
        label: 'Schema: JSON-LD Article + FAQPage in <head>',
        content: '<script type="application/ld+json">{ "@type": "Article", ... }</script>',
        why: 'Schema feeds the knowledge-graph and context layers that AI relies on. FAQ, HowTo, Article, and Organization schema are the highest-signal types for AI Overviews (SingleGrain, 2025).',
        source: 'BrightEdge Structured Data in AI Search Era',
        sourceUrl: 'https://www.brightedge.com/blog/structured-data-ai-search-era',
      },
      {
        label: 'Sentences: 15–20 words average, never >30',
        content: 'Short, clear sentences. One idea per sentence.',
        why: 'Readability guidelines and AI content research consistently cite 15–20 words as optimal sentence length. Long blocks of text are harder for AI to parse and less likely to be extracted as citations.',
        source: 'Readability Guidelines / Wellows AI Content Research (Jan 2026)',
        sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/',
      },
      {
        label: 'Update: Keep dateModified current (monthly)',
        content: '*Last updated: [Month Year]*',
        why: 'Recency is a top AI citation signal. ChatGPT and Perplexity both favor recently updated content. The Semrush AI visibility guide emphasizes freshness as a primary ranking factor.',
        source: 'Semrush AI Visibility Guide (Mar 2026)',
        sourceUrl: 'https://www.semrush.com/blog/ai-visibility/',
      },
    ],
    checklist: [
      { text: 'H1 directly answers the target question (not clever wordplay)', source: 'Semrush GEO case study', sourceUrl: 'https://ppc.land/semrush-triples-ai-visibility-in-one-month-with-systematic-optimization/' },
      { text: 'First paragraph states your position clearly within 50 words', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
      { text: '3–8 H2 headers, each covering one distinct topic', source: 'SingleGrain AI Overviews Guide', sourceUrl: 'https://www.singlegrain.com/search-everywhere-optimization/google-ai-overviews-the-ultimate-guide-to-ranking-in-2025/' },
      { text: 'At least 2 inline citations to external sources with attribution', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: '5+ FAQ pairs at end, each answer 2–3 sentences', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
      { text: 'Article + FAQPage JSON-LD schema in <head>', source: 'BrightEdge / Digidop Structured Data', sourceUrl: 'https://www.brightedge.com/blog/structured-data-ai-search-era' },
      { text: 'Sentences average 15–20 words (no wall-of-text paragraphs)', source: 'Wellows / Readability Guidelines', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
      { text: 'Paragraphs max 2–3 sentences (AI parse-friendly)', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
      { text: 'datePublished and dateModified in schema; update monthly', source: 'Semrush AI Visibility Guide', sourceUrl: 'https://www.semrush.com/blog/ai-visibility/' },
      { text: 'AI crawlers not blocked (no robots.txt exclusion of GPTBot, ClaudeBot, PerplexityBot)', source: 'Goodie AI Crawling Guide', sourceUrl: 'https://higoodie.com/blog/why-isnt-my-site-being-crawled-indexed-cloudflare-blockage' },
      { text: 'Original data, research, or first-hand perspective included', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Author name + title visible on page and in schema', source: 'Averi.ai Blog Optimization Guide', sourceUrl: 'https://www.averi.ai/guides/optimize-blog-content-chatgpt-perplexity-gemini' },
    ],
  },
  {
    id: 'press',
    name: 'Press Releases',
    subtitle: 'Wire ≠ AI citation. Newsroom = AI citation.',
    keyStat: 'Newsroom-published press releases account for 18% of ChatGPT citations — ACCESS Newswire (Mar 2026)',
    keyStatSource: 'ACCESS Newswire Report (Mar 2026)',
    keyStatUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and',
    copyTemplate: `FOR IMMEDIATE RELEASE

[COMPANY NAME] [DOES/ANNOUNCES/LAUNCHES] [THE MOST NEWSWORTHY THING]

[HEADLINE: Specific. No jargon. State the news in plain language.]

[CITY, STATE, Date] — [Company Name], [one-line description of what company does], today announced [the news in one sentence]. [Metric or scale of the news — "serving 2,000 clients across 40 states"].

[BODY PARAGRAPH 1: The "so what." Why does this matter? Who is affected? Keep to 3 sentences max.]

[BODY PARAGRAPH 2: Supporting context. Market condition, problem being solved, or background. Cite an industry stat if available, with source.]

"[Quote from CEO or relevant executive that adds perspective, not a press release cliché. Say something real.]" said [Full Name], [Title] at [Company Name].

[BODY PARAGRAPH 3 (optional): Product/partnership/integration details. Specific, not vague. Numbers when available.]

"[Second quote from partner, customer, or analyst if relevant. Optional.]" said [Name], [Title] at [Partner Organization].

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator]. [Founded year, HQ, and one scale signal — employees, revenue, customers.] Learn more at [website].

Contact:
[Name]
[Title]
[Email]
[Phone]

###

[PERMANENT NEWSROOM URL: yourdomain.com/newsroom/[slug]]
[Note: This release is hosted permanently at the URL above for AI indexing.]`,
    template: [
      {
        label: 'Dateline: [CITY, STATE, Date] — format matters',
        content: '[CITY, STATE, Date] — [Company Name], [descriptor], today announced...',
        why: 'Standard wire format is the primary signal that a document is a press release. BusinessWire\'s AI guide confirms that structure and format determine whether AI systems recognize and cite a release as a credible source.',
        source: 'BusinessWire AI/GEO Press Release Guide (Jan 2025)',
        sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy',
      },
      {
        label: 'Lead: Biggest news in sentence 1, metric in sentence 2',
        content: '[Company] announced [X]. [Scale: "serving 2,000 clients in 40 states."]',
        why: 'AI extracts "position statements" from early in the document. A buried news lead means AI may miss the core story entirely. Get the news and a concrete number into the first two sentences.',
        source: 'ALM Corp AI Citation Research (Mar 2026)',
        sourceUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/',
      },
      {
        label: 'Quote: Real perspective, not a cliché',
        content: '"[Specific insight about why this matters]," said [Name], [Title].',
        why: 'AI systems favor quotes that add substance, not boilerplate like "we\'re thrilled to announce." A genuine quote with a specific claim or prediction gives AI models a citable, attributable statement.',
        source: 'BusinessWire AI/GEO Press Release Guide (Jan 2025)',
        sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy',
      },
      {
        label: 'Boilerplate: Specific, not generic',
        content: 'About [Company]: [does what] for [who]. [Differentiator]. [Founding year, HQ, scale signal.]',
        why: 'The boilerplate is often extracted verbatim by AI when summarizing a company. A specific, factual boilerplate gives AI accurate brand context to cite in company-related queries.',
        source: 'PR Newswire AI Era Announcement (Nov 2025)',
        sourceUrl: 'https://www.prnewswire.com/apac/news-releases/pr-newswire-powers-the-ai-era-embracing-the-future-of-ai-search-and-information-discovery-302615352.html',
      },
      {
        label: 'Publish on your own newsroom URL (permanent)',
        content: 'yourdomain.com/newsroom/[slug] — permanent, crawlable, indexed',
        why: 'Critical insight: newsroom-published press releases account for 18% of ChatGPT citations (ACCESS Newswire, 2026). Wire-syndicated releases account for only 0.04% of all AI citations. The channel is your domain, not the wire.',
        source: 'ACCESS Newswire Report (Mar 2026) + ALM Corp/BuzzStream Study',
        sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and',
      },
      {
        label: 'Link to a supporting blog post on your site',
        content: 'For more detail, see: [yourdomain.com/blog/full-story]',
        why: 'The BuzzStream/ALM Corp study shows original editorial content accounts for 81% of AI news citations. Linking from the release to your owned editorial content chains authority from the release to a more citable format.',
        source: 'ALM Corp AI Citation Research (Mar 2026)',
        sourceUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/',
      },
    ],
    checklist: [
      { text: 'Standard wire dateline format: [CITY, STATE, Date] —', source: 'BusinessWire AI Strategy Guide', sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy' },
      { text: 'Biggest news + concrete metric in first 2 sentences', source: 'ALM Corp Press Release Citation Study', sourceUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/' },
      { text: 'At least 1 real, substantive quote (not a cliché)', source: 'BusinessWire AI Strategy Guide', sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy' },
      { text: 'Boilerplate has founding year, HQ, and one scale signal', source: 'PR Newswire AI Era Guide', sourceUrl: 'https://www.prnewswire.com/apac/news-releases/pr-newswire-powers-the-ai-era-embracing-the-future-of-ai-search-and-information-discovery-302615352.html' },
      { text: 'Published on your own newsroom domain (permanent URL)', source: 'ACCESS Newswire Report Mar 2026', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
      { text: 'Page is crawlable — no login, no paywall, no noindex', source: 'Goodie AI Crawling Guide', sourceUrl: 'https://higoodie.com/blog/why-isnt-my-site-being-crawled-indexed-cloudflare-blockage' },
      { text: 'Links to a supporting blog post or landing page on your domain', source: 'ALM Corp Press Release Citation Study', sourceUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/' },
      { text: 'NewsArticle or PressRelease JSON-LD schema on the page', source: 'Digidop Structured Data Guide 2026', sourceUrl: 'https://www.digidop.com/blog/structured-data-secret-weapon-seo' },
      { text: 'Wire distribution used as amplification, not as primary AI strategy', source: 'ALM Corp / SearchEngineJournal', sourceUrl: 'https://www.searchenginejournal.com/ai-search-barely-cites-syndicated-news-or-press-releases/569854/' },
      { text: 'Body paragraphs max 3 sentences; plain language throughout', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
    ],
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Posts',
    subtitle: 'Engagement ≠ AI citation. Your website does the AI work.',
    keyStat: 'LinkedIn blocks AI crawlers — posts don\'t get cited by LLMs. Your website and newsroom do. (BusinessWire, Jan 2025)',
    keyStatSource: 'BusinessWire AI Strategy Guide (Jan 2025)',
    keyStatUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy',
    copyTemplate: `[HOOK — First 140 characters. This is what shows in the feed before "See more."]
[Make a bold claim, ask a counterintuitive question, or share a specific number.]

[LINE BREAK]

[BRIDGE — 1-2 sentences. Expand on the hook. Set up the insight or list.]

[LINE BREAK]

Here's what [most people miss / actually works / the data shows]:

[LINE BREAK]

→ [Point 1: Specific, concrete, actionable]
→ [Point 2: Specific, concrete, actionable]
→ [Point 3: Specific, concrete, actionable]
→ [Point 4 (optional): Specific, concrete, actionable]

[LINE BREAK]

[PROOF — 1-2 sentences. A stat, case, or example that backs up your points. Cite the source.]

[LINE BREAK]

[CLOSER — A question to drive comments, or a restatement of the core takeaway.]

[LINE BREAK]

[If sharing a link, put it in the first comment — not the post body.]

#[Hashtag1] #[Hashtag2] #[Hashtag3]

---
📌 AI VISIBILITY NOTE: LinkedIn content does NOT get crawled by LLMs. 
To get cited in ChatGPT/Perplexity, publish this insight as a blog post on your domain.
This post should drive traffic THERE — not be your AI visibility strategy itself.`,
    template: [
      {
        label: 'Hook: First 140 characters — visible without clicking',
        content: '[Bold claim, specific number, or counterintuitive question in under 140 chars]',
        why: 'Only the first 140 characters appear in the LinkedIn feed before "See more." This is your entire opening bid. A weak hook means no one expands the post, which tanks algorithmic reach.',
        source: 'AutoPosting.ai LinkedIn Post Length Guide (Jun 2025)',
        sourceUrl: 'https://autoposting.ai/ideal-linkedin-post-length/',
      },
      {
        label: 'Length: 1,200–1,800 characters total',
        content: 'Count your characters. 1,200–1,800 is the sweet spot for 2025.',
        why: 'Digital Blacksmiths\' 2025 analysis found posts between 1,200 and 1,800 characters drive peak engagement on LinkedIn. This aligns with LinkedIn\'s algorithm, which rewards content that holds attention.',
        source: 'Digital Blacksmiths LinkedIn Post Length Analysis (Nov 2025)',
        sourceUrl: 'https://digitalblacksmiths.io/best-linkedin-post-length-1200-to-1800-characters/',
      },
      {
        label: 'Format: Line breaks between every 1-2 sentences',
        content: 'One idea.\n\nNew line.\n\nKeep it scannable.',
        why: 'LinkedIn is mobile-first. Dense paragraphs kill reach. White space is an engagement signal — it reduces scroll-past behavior, which LinkedIn\'s algorithm interprets as low-quality content.',
        source: 'Botdog LinkedIn Algorithm 2025 Guide',
        sourceUrl: 'https://www.botdog.co/blog-posts/linkedin-algorithm-2025',
      },
      {
        label: 'Voice: Human, not AI-generated',
        content: 'Write it yourself. Or edit AI output heavily before posting.',
        why: 'LinkedIn\'s detection systems flag AI-generated content with 94% accuracy. Posts flagged as AI see a 30% drop in reach and 55% less engagement. Algorithmic suppression is real and measurable.',
        source: 'Closelyhq LinkedIn Algorithm 2025 (Dec 2025)',
        sourceUrl: 'https://blog.closelyhq.com/linkedin-algorithm-2025-post-at-these-exact-times-10x-reach/',
      },
      {
        label: 'Link: First comment, not the post body',
        content: 'Put your link in the first comment to avoid reach penalty.',
        why: 'LinkedIn suppresses posts with outbound links in the body because they reduce dwell time on platform. The standard workaround: post the link in the first comment immediately after publishing.',
        source: 'LinkedIn Algorithm Expert Consensus 2025',
        sourceUrl: 'https://authoredup.com/blog/linkedin-algorithm',
      },
      {
        label: 'AI Visibility: LinkedIn ≠ LLM citation source',
        content: 'LinkedIn restricts AI crawlers. Posts do not appear in ChatGPT or Perplexity.',
        why: 'LinkedIn prohibits crawlers in its User Agreement (Section 8.2). LLMs cannot index LinkedIn posts. For AI visibility, publish the same content on your website or newsroom — that\'s what gets cited.',
        source: 'BusinessWire AI/GEO Strategy Guide (Jan 2025)',
        sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy',
      },
    ],
    checklist: [
      { text: 'Hook fits in 140 characters (test by counting before posting)', source: 'AutoPosting.ai LinkedIn Length Guide', sourceUrl: 'https://autoposting.ai/ideal-linkedin-post-length/' },
      { text: 'Total post is 1,200–1,800 characters for max engagement', source: 'Digital Blacksmiths LinkedIn Analysis Nov 2025', sourceUrl: 'https://digitalblacksmiths.io/best-linkedin-post-length-1200-to-1800-characters/' },
      { text: 'Line break between every 1–2 sentences throughout', source: 'Botdog LinkedIn Algorithm 2025', sourceUrl: 'https://www.botdog.co/blog-posts/linkedin-algorithm-2025' },
      { text: 'Written or heavily edited by a human (not raw AI output)', source: 'Closelyhq LinkedIn Algorithm 2025', sourceUrl: 'https://blog.closelyhq.com/linkedin-algorithm-2025-post-at-these-exact-times-10x-reach/' },
      { text: '3–5 hashtags at the end (not interspersed in body)', source: 'LinkedIn Algorithm Best Practices 2025', sourceUrl: 'https://authoredup.com/blog/linkedin-algorithm' },
      { text: 'Link moved to first comment (not in post body)', source: 'LinkedIn Algorithm Expert Consensus', sourceUrl: 'https://authoredup.com/blog/linkedin-algorithm' },
      { text: 'Ends with a question or clear CTA to drive comments', source: 'Avenue Z LinkedIn Brands Guide 2026', sourceUrl: 'https://avenuez.com/blog/linkedin-organic-social-media-guide-for-brands/' },
      { text: '★ AI VISIBILITY: Same insight also published as blog post on your domain', source: 'BusinessWire AI Strategy Guide Jan 2025', sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy' },
    ],
  },
]

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function RulesWorkspace() {
  const [selectedType, setSelectedType] = useState('blog')
  const [activeView, setActiveView] = useState<'template' | 'why' | 'checklist'>('template')
  const [copied, setCopied] = useState(false)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const content = CONTENT_TYPES.find((c) => c.id === selectedType)!

  const handleCopy = () => {
    navigator.clipboard.writeText(content.copyTemplate)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const checkedCount = content.checklist.filter((_, i) =>
    checkedItems[`${selectedType}-${i}`]
  ).length

  return (
    <div className="h-full flex flex-col">
      {/* Content Type Selector */}
      <div className="border-b border-gray-200 px-12 py-5">
        <div className="flex gap-6">
          {CONTENT_TYPES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedType(c.id)
                setActiveView('template')
              }}
              className={`pb-2 text-sm font-medium transition-colors border-b-2 ${
                selectedType === c.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-12 py-8">
        <div className="max-w-3xl">

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{content.name}</h2>
            <p className="text-gray-500 mt-1 text-sm">{content.subtitle}</p>
          </div>

          {/* Key Stat */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-1">Key Research Finding</p>
            <p className="text-sm font-medium text-amber-900">{content.keyStat}</p>
            <a
              href={content.keyStatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-600 hover:underline mt-1 inline-block"
            >
              Source: {content.keyStatSource} ↗
            </a>
          </div>

          {/* View Switcher */}
          <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit">
            {[
              { id: 'template' as const, label: '📋 Template' },
              { id: 'why' as const, label: '🔬 Why It Works' },
              { id: 'checklist' as const, label: `✅ Checklist (${checkedCount}/${content.checklist.length})` },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveView(v.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all ${
                  activeView === v.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* TEMPLATE VIEW */}
          {activeView === 'template' && (
            <div>
              <div className="bg-gray-950 rounded-xl p-6 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Copy-Paste Template
                  </span>
                  <button
                    onClick={handleCopy}
                    className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {copied ? '✓ Copied!' : 'Copy Template'}
                  </button>
                </div>
                <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {content.copyTemplate}
                </pre>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Replace all [BRACKETED] items with your content. Switch to "Why It Works" to understand each element.
              </p>
            </div>
          )}

          {/* WHY IT WORKS VIEW */}
          {activeView === 'why' && (
            <div className="space-y-4">
              {content.template.map((section, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        {section.label}
                      </span>
                      <a
                        href={section.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline"
                      >
                        {section.source} ↗
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <code className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-200 block mb-3 font-mono">
                      {section.content}
                    </code>
                    <p className="text-sm text-gray-700 leading-relaxed">{section.why}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CHECKLIST VIEW */}
          {activeView === 'checklist' && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Check off requirements before publishing. Every item is research-backed.
                </p>
                <span className="text-sm font-semibold text-gray-900">
                  {checkedCount}/{content.checklist.length} complete
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-gray-100 rounded-full mb-6">
                <div
                  className="h-2 bg-gray-900 rounded-full transition-all"
                  style={{ width: `${(checkedCount / content.checklist.length) * 100}%` }}
                />
              </div>

              <div className="space-y-2">
                {content.checklist.map((item, idx) => {
                  const key = `${selectedType}-${idx}`
                  const isChecked = checkedItems[key] || false
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleCheck(key)}
                      className={`w-full text-left border rounded-lg p-4 transition-all flex gap-3 items-start ${
                        isChecked
                          ? 'bg-gray-50 border-gray-200 opacity-70'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center transition-all ${
                          isChecked
                            ? 'bg-gray-900 border-gray-900'
                            : 'border-gray-300'
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${isChecked ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                          {item.text}
                        </p>
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-blue-500 hover:underline mt-0.5 inline-block"
                        >
                          Source: {item.source} ↗
                        </a>
                      </div>
                    </button>
                  )
                })}
              </div>

              {checkedCount === content.checklist.length && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-800 font-semibold text-sm">
                    ✓ All requirements met. This content is optimized for AI visibility.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
