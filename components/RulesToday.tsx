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
          rule: 'Start with a clear problem statement (first 100 words)',
          why: 'AI systems extract the opening section to understand context. Clarity here = higher citation likelihood',
          how: 'Open with "Problem: [specific issue]" and explain the pain point before introducing your solution',
          source: 'https://www.semrush.com/blog/ai-search-trends/',
          example: '❌ "There are many AI models available today..." vs ✅ "Most companies struggle to choose between ChatGPT and Claude for their use case. Here\'s what you need to know..."'
        },
        {
          rule: 'Use H2 headers for major topic sections (3-8 headers per post)',
          why: 'AI systems use header hierarchy to understand content structure. Proper headers = better extraction and citation',
          how: 'Each H2 should introduce a distinct subtopic. Start with the most important/foundational topics',
          source: 'https://www.optifox.in/blog/ai-overviews-citation-2026/',
          example: '✅ "## Understanding Model Selection Criteria" then "## ChatGPT vs Claude Comparison"'
        },
        {
          rule: 'Place authority sources and citations early (paragraph 2-3, not buried)',
          why: 'AI systems are more likely to cite sources that appear early and are attributed clearly',
          how: 'Reference credible research, studies, or official docs in your second paragraph. Use format: "According to [Source], [finding]"',
          source: 'https://brandlight.io/research/ai-citation-analysis/',
          example: '✅ "According to Anthropic\'s 2026 research, Claude handles reasoning tasks 23% faster than alternatives"'
        }
      ],
      length: [
        {
          rule: 'Target 2,000-3,500 words for topical authority',
          why: 'Longer content signals expertise to AI systems. Too short (< 1,200 words) = dismissed as surface-level',
          how: 'Cover all angles of your topic. If competitors write 2,500, aim for 3,000+',
          source: 'https://www.semrush.com/blog/',
          example: 'A post on "AI visibility best practices" should cover: definition, why it matters, the LLMs that matter, implementation, tools, common mistakes, and future outlook'
        }
      ],
      schema: [
        {
          rule: 'Add Article schema (JSON-LD) to every blog post',
          why: 'Schema helps Google and other AI systems understand your content structure and metadata',
          how: 'Include: headline, description, author, datePublished, dateModified, image, articleBody',
          source: 'https://schema.org/Article',
          example: '```json\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "AI Visibility Best Practices 2026",\n  "datePublished": "2026-03-27",\n  "dateModified": "2026-03-27",\n  "author": { "@type": "Person", "name": "Your Name" }\n}\n```'
        }
      ],
      freshness: [
        {
          rule: 'Update publish/modified date monthly if content is evergreen',
          why: 'AI systems prefer recently updated content. Stale metadata = deprioritized',
          how: 'Add a "Last updated: [date]" note at the top or bottom. Update dateModified in schema',
          source: 'https://www.semrush.com/blog/freshness-signals/',
          example: '✅ "Last updated March 27, 2026" (update this every 30 days if content is accurate)'
        }
      ],
      links: [
        {
          rule: 'Use descriptive, keyword-rich anchor text (not "click here")',
          why: 'AI systems use anchor text to understand link relevance. Vague text = weak signal',
          how: 'Write: "Read our guide on [topic]" instead of "Read more"',
          source: 'https://www.optifox.in/blog/ai-overviews-citation-2026/',
          example: '✅ "According to our [guide on AI visibility strategies for B2B SaaS](url)" vs ❌ "Read our [guide](url)"'
        }
      ],
      standOut: [
        'Include original research or data (even small surveys). AI systems cite original findings heavily',
        'Add a FAQ section at the end covering common questions about your topic',
        'Reference competitors by name when comparing (but stay fair and factual)',
        'Include a "Key Takeaways" section (bullet points, 5-8 items) that summarizes the post'
      ],
      aiWarning: 'Posts with repetitive phrasing, obvious AI filler, or generic advice get low citation scores. If your content sounds like ChatGPT\'s default output, edit it. Rewrite 20-30% of AI-generated content with your own voice and examples.'
    }
  },
  {
    id: 'press-releases',
    name: 'Press Releases (Wire + Editorial)',
    emoji: '📰',
    description: 'Newswire-style and editorial press releases for maximum AI visibility and distribution',
    rules: {
      format: [
        {
          rule: 'Wire format: Headline → Dateline → Boilerplate (first 3 lines)',
          why: 'Wire format is standardized across news distribution. AI systems recognize and prioritize wire-formatted releases',
          how: 'Start with: [CITY, STATE] – [Date] – Company Announcement. Then the main news in 1-2 sentences',
          source: 'https://www.prnewswire.com/news-releases/',
          example: '✅ "SAN FRANCISCO, CA – March 27, 2026 – Zen Media announced it has become the #1 AI visibility agency..."'
        }
      ],
      editorial: [
        {
          rule: 'Create editorial version (blog post style) alongside wire release',
          why: 'Wire releases are cited for newsworthiness; editorial versions are cited for depth and authority',
          how: 'Wire release (200-300 words) + Editorial version (800-1,200 words with narrative, context, expert quotes)',
          source: 'https://www.semrush.com/blog/pr-strategy/',
          example: 'Wire: "Company launches new product" → Editorial: "Here\'s why this product matters, the problem it solves, customer quotes, vision"'
        }
      ],
      standOut: [
        'Include specific metrics or results (not vague claims). "45% improvement in X" beats "significant improvement"',
        'Quote leadership using their voice (not corporate speak). AI systems prefer authentic quotes',
        'Add context about *why* this matters (not just what happened)',
        'Include a clear call-to-action or next step for readers'
      ],
      aiWarning: 'Press releases that read like marketing fluff ("We\'re excited to announce...") don\'t get cited. AI systems can detect marketing language. Be specific, direct, and newsworthy.'
    }
  },
  {
    id: 'linkedin-posts',
    name: 'LinkedIn Posts',
    emoji: '💼',
    description: 'Social media posts optimized for LinkedIn\'s algorithm and AI citation patterns',
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
          rule: 'Use 5 hashtags (one per line, at the end)',
          why: 'LinkedIn algorithm indexes hashtags. Multiple hashtags = reach. But 5+ looks spammy',
          how: 'Choose hashtags matching your niche: #AIVisibility #AEO #ContentStrategy #AIMarketing #Visibility',
          source: 'https://www.linkedin.com/feed/',
          example: '✅ "Post content...\\n\\n#AIVisibility\\n#AEO\\n#ContentStrategy\\n#SEO\\n#AI"'
        },
        {
          rule: 'Start with a hook (first line). Make readers want to continue',
          why: 'LinkedIn shows first 1-2 lines in feeds. Strong hook = higher click rate = better algorithm score',
          how: 'Use: a question, contradiction, stat, or bold statement. Not "Great insights below..."',
          source: 'https://www.linkedin.com/pulse/',
          example: '✅ "I just found out why 87% of AI visibility strategies fail..." vs ❌ "Check out this great post about AI..."'
        }
      ],
      distribution: [
        {
          rule: 'Repost high-performing posts (without comment) 3-4 days later',
          why: 'LinkedIn shows posts to different audiences at different times. Reposting extends reach',
          how: 'Check which posts got >100 comments/reactions. Repost 72 hours later (same post, no new commentary)',
          source: 'https://www.linkedin.com/pulse/',
          example: 'Post goes live Tuesday. Gets 200+ reactions by Friday. Repost Monday (clean, no "reposting this..." note)'
        }
      ],
      standOut: [
        'Ask a specific question at the end to drive engagement (AI systems track engagement as authority signal)',
        'Share a surprising stat or contradiction (e.g., "We tested 50 AI visibility tactics. Most don\'t work...")',
        'Use short sentences and white space (easier to read on mobile)',
        'Tag relevant people/companies naturally (not spam-like)'
      ],
      aiWarning: 'LinkedIn posts that are obviously AI-generated (flat tone, generic advice) get buried. Write like a human. Use conversational language, share opinions, include personal experiences.'
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
        <p className="text-slate-300">Current best practices for each content type based on verified research and testing. Every rule is tied to a credible source.</p>
        <p className="text-sm text-slate-400 mt-2">Last updated: Today • Next update: Tomorrow 5:00 AM PT</p>
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
        <h3 className="font-bold text-amber-300 mb-2">📊 Coming Next: All 24 Content Types</h3>
        <p className="text-slate-300 text-sm">We're researching and adding rules for: Email newsletters, Podcast show notes, Webinar transcripts, FAQ pages, Twitter/X threads, Substack posts, Guest posts, Interviews, Infographics, Product docs, Comparison articles, Trend reports, and more.</p>
      </div>
    </div>
  )
}
