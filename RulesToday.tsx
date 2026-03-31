'use client'

import { useState } from 'react'

const CONTENT_TYPES = [
  {
    id: 'blog-posts',
    name: 'Blog Posts',
    emoji: '📝',
    description: 'Long-form, foundational content for topical authority and AI citations',
    rules: {
      format: [
        {
          rule: 'Front-load your most citable claim in the first 30% of text',
          why: '44.2% of all ChatGPT citations come from the first 30% of content. ChatGPT only cites 15% of pages it retrieves — your opening must earn it (ALM Corp, March 2026)',
          how: 'Put your strongest, most specific claim in the first 100 words. State the core finding plainly — no "in today\'s world" preamble',
          source: 'https://almcorp.com/blog/chatgpt-citations-study/',
          example: '❌ "There are many AI models available today..." vs ✅ "Most companies struggle to choose between ChatGPT and Claude for their use case. Here\'s what the data shows..."'
        },
        {
          rule: 'Use consistent H2 headers as answerable sub-questions (3-8 per post)',
          why: 'Content with consistent heading levels is 40% more likely to be cited by ChatGPT (Wellows, Feb 2026). AI Overviews pull structured, extractable content from H2 sections',
          how: 'Each H2 should be answerable ("What does X require?" not "The regulatory landscape"). Start with the most important topics',
          source: 'https://wellows.com/blog/llm-citations/',
          example: '✅ "## What Does CySEC Regulation Actually Require?" not "## The Regulatory Landscape"'
        },
        {
          rule: 'Place authority sources and citations early (paragraph 2-3)',
          why: 'AI systems are more likely to cite sources that appear early and are attributed clearly. Turn 1 web searches are 2.5x more likely to trigger citations than Turn 10',
          how: 'Reference credible research in your second paragraph. Use format: "According to [Source], [finding]"',
          source: 'https://almcorp.com/blog/chatgpt-citations-study/',
          example: '✅ "According to Anthropic\'s 2026 research, Claude handles reasoning tasks 23% faster than alternatives"'
        },
        {
          rule: 'Add original data, first-party research, or unique perspective',
          why: 'Google March 2026 Core Update now filters content for comparative value. Pages rephrasing existing top results without adding original data or unique perspective lose ground. Sites with original research saw ~22% visibility gains',
          how: 'Include at least one proprietary data point, original survey result, or named expert perspective not found elsewhere',
          source: 'https://searchengineland.com/',
          example: '✅ "Our analysis of 1,200 PE sector scans found firms using full-coverage data identify 3.2x more targets" — not a rehash of someone else\'s stat'
        }
      ],
      authorCredentials: [
        {
          rule: 'Use named authors with verifiable credentials — not "Editorial Team"',
          why: 'The March 2026 Core Update amplifies the Experience signal in E-E-A-T. Named authors with verifiable credentials outperform generic attribution. Sites with structured author pages saw ranking improvements within weeks',
          how: 'Add: full name, title, credentials, and a "who has..." clause. Add Schema.org Person markup linked to LinkedIn or company bio. Keep byline format consistent across all posts',
          source: 'https://www.digitalapplied.com/',
          example: '✅ "By Jane Smith, VP of Engineering at ClientCo, who has led the company\'s data infrastructure team since 2019"'
        }
      ],
      schema: [
        {
          rule: 'Add Article + FAQ schema (JSON-LD) — schema is now an AI trust signal',
          why: 'Post-March 2026 update: schema shifted from "SERP display trigger" to "AI trust and entity verification signal." Gemini AI Mode uses schema to verify claims and assess credibility. Sites with proper schema cited 3.2x more often (Writesonic, 2026)',
          how: 'Include: headline, description, author (Person type with sameAs to LinkedIn), datePublished, dateModified. Add FAQPage schema for your FAQ section. Add speakable property targeting bullet summary and FAQ sections',
          source: 'https://www.digitalapplied.com/blog/schema-markup-after-march-2026-structured-data-strategies',
          example: '```json\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "AI Visibility Best Practices 2026",\n  "datePublished": "2026-03-27",\n  "dateModified": "2026-03-30",\n  "author": { "@type": "Person", "name": "Jane Smith", "sameAs": "https://linkedin.com/in/janesmith" }\n}\n```'
        }
      ],
      freshness: [
        {
          rule: 'Align all three dates: dateline, datePublished in JSON-LD, and actual go-live',
          why: 'The March 2026 update rewards recency signals. Mismatched dates create confusion for both Google and AI systems. Flag any content where the gap between writing and go-live exceeds 14 days',
          how: 'Update "As of" dateline, dateModified in schema, and actual publish date. All three must match. Update monthly for evergreen content',
          source: 'https://www.semrush.com/blog/freshness-signals/',
          example: '✅ Dateline says "March 30, 2026" — JSON-LD dateModified says "2026-03-30" — article actually published March 30'
        }
      ],
      links: [
        {
          rule: 'Use descriptive, keyword-rich anchor text (not "click here")',
          why: 'AI systems use anchor text to understand link relevance. Sites with 32K+ referring domains are 3.5x more likely to be cited than those with up to 200 domains',
          how: 'Write: "Read our guide on [topic]" instead of "Read more"',
          source: 'https://wellows.com/blog/llm-citations/',
          example: '✅ "According to our [guide on AI visibility strategies for B2B SaaS](url)" vs ❌ "Read our [guide](url)"'
        }
      ],
      standOut: [
        'Include original research or proprietary data — Google\'s March 2026 update specifically rewards this with ~22% visibility gains',
        'Add a FAQ section (8-12 questions from real prompt analysis) — this is the highest-probability AI citation surface with AI Overviews on 82% of B2B searches',
        'Add a "Methodology" or "About This Data" note at the end of data-heavy posts to signal primary-source credibility',
        'Include a "Key Takeaways" section (5-8 items) — AI systems extract these heavily'
      ],
      aiWarning: 'Google\'s March 2026 Gemini 4.0 Semantic Filter specifically targets AI-language patterns. Posts with repetitive phrasing, obvious AI filler, or generic advice will be filtered. If your content sounds like ChatGPT\'s default output, rewrite 20-30% with your own voice, examples, and original data.'
    }
  },
  {
    id: 'press-releases',
    name: 'Press Releases (Wire + Editorial)',
    emoji: '📰',
    description: 'AI Notices and editorial releases optimized for the March 2026 Core Update signals',
    rules: {
      format: [
        {
          rule: 'Wire format: Headline → Dateline → Boilerplate (first 3 lines)',
          why: 'Wire format is standardized across news distribution. AI systems recognize and prioritize wire-formatted releases',
          how: 'Start with: [CITY, STATE] – [Date] – Company Announcement. Then the main news in 1-2 sentences',
          source: 'https://www.prnewswire.com/news-releases/',
          example: '✅ "SAN FRANCISCO, CA – March 30, 2026 – Zen Media announced it has become the #1 AI visibility agency..."'
        },
        {
          rule: 'Add a Comparative Value Pre-Check before drafting',
          why: 'Google\'s March 2026 update evaluates how much genuinely NEW information a page contributes vs. existing top results. This is now the #1 priority action (low effort, high impact)',
          how: 'Before drafting, run 2-3 target prompts through ChatGPT, Perplexity, and Google AI Overviews. Document what\'s already being cited. Your wire must add: (a) first-party data not in current citations, (b) a named expert perspective not represented, or (c) a specific scenario current answers lack',
          source: 'https://searchengineland.com/',
          example: 'Record the "comparative value add" in the Wire Brief table as a new field'
        }
      ],
      editorial: [
        {
          rule: 'Create editorial version alongside wire — editorial framing, not announcement framing',
          why: 'The update rewards content that leads with industry trends where the client is the expert source — not announcements. Every wire should pass: "Is this about an industry trend, or about the client doing something?"',
          how: 'Wire release (200-300 words) + Editorial version (800-1,200 words). Lead with the industry problem, not the company news',
          source: 'https://www.semrush.com/blog/pr-strategy/',
          example: 'Wire: "Company launches new product" → Editorial: "Here\'s why this industry problem is accelerating, expert analysis, and what organizations should do"'
        }
      ],
      smeCredentials: [
        {
          rule: 'Add credential clause after every SME quote attribution',
          why: 'The March 2026 update amplifies Experience signals. Named authors with verifiable credentials outperform generic "Editorial Team" attribution. The "who has..." clause signals verifiable experience to both Google and AI systems',
          how: 'After the first quote attribution, add one sentence with full name, exact title, company, and a credential establishing relevant experience. Keep it factual and specific',
          source: 'https://www.digitalapplied.com/',
          example: '✅ "Quote here," said Jane Smith, VP of Engineering at ClientCo, who has led the company\'s data infrastructure team since 2019.'
        }
      ],
      schemaAndDates: [
        {
          rule: 'Ensure JSON-LD schema on every wire + align all three dates',
          why: 'Article, Organization, FAQ schema are all high-ROI signals post-March 2026 update. Schema is now an AI trust verification signal, not just a rich result trigger. Mismatched dates between dateline, JSON-LD datePublished, and GlobeNewswire go-live date hurt freshness signals',
          how: 'Confirm "As of" date in dateline, datePublished in JSON-LD, and go-live date all align. Add speakable property targeting bullet summary and FAQ sections. Test in Google Rich Results Test before rollout',
          source: 'https://www.digitalapplied.com/blog/schema-markup-after-march-2026-structured-data-strategies',
          example: 'If a wire is delayed past its original date, update ALL THREE dates before submission'
        }
      ],
      standOut: [
        'Include at least one first-party data point per wire (SOAR Originality standard) — the update rewards original research with ~22% visibility gains',
        'Include specific metrics ("45% improvement in X" beats "significant improvement") — AI systems cite specifics',
        'FAQ sections sourced from real ZAVI prompt analysis, not invented questions — the update rewards structured Q&A optimized for AI extraction',
        'Quote leadership using their authentic voice with credential clauses — not corporate speak'
      ],
      aiWarning: 'The Gemini 4.0 Semantic Filter specifically targets AI-language patterns and content produced at scale without human editorial oversight. Our 16-point AI detection scan catches exactly what this filter looks for. Press releases with marketing fluff ("We\'re excited to announce...") don\'t get cited.'
    }
  },
  {
    id: 'linkedin-posts',
    name: 'LinkedIn Posts',
    emoji: '💼',
    description: 'LinkedIn is the #2 most cited domain in AI search (11% of AI responses). Optimize accordingly.',
    rules: {
      algoSignals: [
        {
          rule: 'Put the link in a COMMENT, not in the post body',
          why: 'LinkedIn\'s algorithm deprioritizes posts with links in the body. Comments preserve engagement signals',
          how: 'Post the text/hook first. Wait 1-2 minutes. Then paste the link in the first comment',
          source: 'https://www.linkedin.com/pulse/why-linkedin-algorithm-hates-links-2025/',
          example: '✅ Post body: "Here\'s what we learned about AI visibility..." (no link) → First comment: "[Link to full article]"'
        },
        {
          rule: 'Start with a hook that includes a specific claim or data point',
          why: 'LinkedIn shows first 1-2 lines in feeds. AI systems also extract opening lines. 44.2% of ChatGPT citations come from the first 30% of text — the same principle applies to LinkedIn content that gets cited',
          how: 'Use: a specific stat, contradiction, or bold claim. Not "Great insights below..."',
          source: 'https://almcorp.com/blog/chatgpt-citations-study/',
          example: '✅ "Only 38% of AI Overview citations come from top-10 organic results. Here\'s what that means for your strategy..." vs ❌ "Check out this great post about AI..."'
        },
        {
          rule: 'Use 5 hashtags (one per line, at the end)',
          why: 'LinkedIn algorithm indexes hashtags. Multiple hashtags = reach. But 5+ looks spammy',
          how: 'Choose hashtags matching your niche: #AIVisibility #AEO #ContentStrategy #AIMarketing #Visibility',
          source: 'https://www.linkedin.com/feed/',
          example: '✅ "Post content...\\n\\n#AIVisibility\\n#AEO\\n#ContentStrategy\\n#SEO\\n#AI"'
        }
      ],
      distribution: [
        {
          rule: 'Repost high-performing posts 3-4 days later',
          why: 'LinkedIn shows posts to different audiences at different times. Reposting extends reach. LinkedIn appears in 11% of all AI responses — high-performing posts have extended citation life',
          how: 'Check which posts got >100 comments/reactions. Repost 72 hours later (same post, no new commentary)',
          source: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
          example: 'Post goes live Tuesday. Gets 200+ reactions by Friday. Repost Monday (clean, no "reposting this..." note)'
        }
      ],
      standOut: [
        'Share original data or a surprising stat — AI systems cite original findings heavily. The March 2026 update specifically rewards comparative value',
        'Ask a specific question at the end to drive engagement (engagement = authority signal for AI systems)',
        'Use short sentences and white space (easier to read on mobile, easier for AI to extract)',
        'Tag relevant people/companies naturally — Perplexity sources 46.7% of its citations from community platforms'
      ],
      aiWarning: 'LinkedIn posts that are obviously AI-generated get buried by LinkedIn\'s algorithm AND ignored by AI citation systems. Write like a human. Use conversational language, share opinions, include personal experience. The March 2026 Gemini Semantic Filter detects AI-language patterns — this applies to all indexed content.'
    }
  }
]

export default function RulesToday() {
  const [expandedType, setExpandedType] = useState<string | null>(CONTENT_TYPES[0].id)
  const [expandedRule, setExpandedRule] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-300 mb-2">📋 Rules Today</h2>
        <p className="text-slate-300">Current best practices updated for the Google March 2026 Core Update (rolling out since March 27) and latest LLM citation research. Every rule is sourced.</p>
        <p className="text-sm text-slate-400 mt-2">Last updated: March 30, 2026 • Includes: March 2026 Core Update, Gemini 3 AI Overviews, ChatGPT/Perplexity citation shifts</p>
      </div>

      <div className="space-y-4">
        {CONTENT_TYPES.map((contentType) => (
          <div key={contentType.id} className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50">
            {/* Header */}
            <button
              onClick={() => setExpandedType(expandedType === contentType.id ? null : contentType.id)}
              className="w-full px-6 py-4 hover:bg-slate-700/50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{contentType.emoji}</span>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">{contentType.name}</h3>
                  <p className="text-sm text-slate-400">{contentType.description}</p>
                </div>
              </div>
              <span className="text-2xl text-slate-400">{expandedType === contentType.id ? '−' : '+'}</span>
            </button>

            {/* Rules */}
            {expandedType === contentType.id && (
              <div className="border-t border-slate-700 px-6 py-6 bg-slate-900/50 space-y-8">
                {Object.entries(contentType.rules).map(([category, items]) => {
                  if (typeof items === 'string') return null // Skip non-array items
                  if (!Array.isArray(items)) return null

                  return (
                    <div key={category}>
                      <h4 className="text-lg font-bold text-slate-300 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                      <div className="space-y-3">
                        {items.map((item, idx) => (
                          <div key={idx} className="bg-slate-800 rounded p-4 border border-slate-700">
                            {item.rule && (
                              <>
                                <div className="flex items-start gap-3 mb-2">
                                  <span className="text-green-400 font-bold">✓</span>
                                  <p className="font-semibold text-white">{item.rule}</p>
                                </div>
                                <div className="ml-7 space-y-2 text-sm">
                                  {item.why && <p><span className="text-blue-400">Why:</span> {item.why}</p>}
                                  {item.how && <p><span className="text-blue-400">How:</span> {item.how}</p>}
                                  {item.source && <p className="text-slate-400"><span className="text-slate-500">Source:</span> <a href={item.source} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{item.source}</a></p>}
                                  {item.example && <p><span className="text-blue-400">Example:</span> {item.example}</p>}
                                </div>
                              </>
                            )}
                            {!item.rule && typeof item === 'string' && (
                              <div className="ml-7">
                                <span className="text-slate-300">• {item}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}

                {contentType.rules.standOut && (
                  <div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-4">🎯 How to Stand Out</h4>
                    <ul className="space-y-2">
                      {contentType.rules.standOut.map((item: string, idx: number) => (
                        <li key={idx} className="flex gap-3 text-slate-300">
                          <span className="text-yellow-400">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {contentType.rules.aiWarning && (
                  <div className="bg-red-900/20 border border-red-800 rounded p-4">
                    <p className="text-red-300"><span className="font-bold">⚠️ AI-Generated Content Warning:</span> {contentType.rules.aiWarning}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-amber-900/20 border border-amber-800 rounded-lg p-6 mt-8">
        <h3 className="font-bold text-amber-300 mb-2">🔴 March 2026 Core Update — Key Signals</h3>
        <p className="text-slate-300 text-sm mb-3">Rolling out since March 27. Here are the signals that matter most for AI visibility content:</p>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li><span className="text-amber-300 font-bold">1.</span> <span className="font-semibold">Comparative Value Filtering:</span> Google now evaluates how much NEW information a page adds vs. existing top results. Gemini 4.0 Semantic Filter is active.</li>
          <li><span className="text-amber-300 font-bold">2.</span> <span className="font-semibold">E-E-A-T Experience Amplified:</span> Named authors with verifiable credentials and structured author pages outperform generic bylines.</li>
          <li><span className="text-amber-300 font-bold">3.</span> <span className="font-semibold">AI Overviews on 82% of B2B Searches:</span> Up from 36% a year ago. Being cited in AI Overviews earns 35% more clicks than traditional ranking.</li>
          <li><span className="text-amber-300 font-bold">4.</span> <span className="font-semibold">Schema = AI Trust Signal:</span> Sites with proper schema cited 3.2x more often. Schema now used by Gemini to verify claims, not just display rich results.</li>
          <li><span className="text-amber-300 font-bold">5.</span> <span className="font-semibold">Citations ≠ Rankings:</span> Only 38% of AI Overview citations come from top-10 organic. 80% of LLM citations don't rank in Google's top 100.</li>
        </ul>
      </div>
    </div>
  )
}
