'use client'

import { useState } from 'react'

// ─────────────────────────────────────────────
// AI VISIBILITY HUB — 10 Content Type Templates
// Rebuilt March 27, 2026. Every claim is sourced.
// See RESEARCH.md for full citation details.
//
// CONTENT TYPES:
// 1. Blog Posts
// 2. Press Releases (AI Notices — 5 sub-formats)
// 3. LinkedIn Posts
// 4. Editorial Articles
// 5. Email Campaigns
// 6. Podcasts
// 7. Twitter/X Threads
// 8. Guest Posts
// 9. FAQ Pages
// 10. Case Studies
//
// PRESS RELEASE SUB-FORMATS:
// - Editorial/Feature (45.5% of informational citations)
// - Listicle (43.8% of all ChatGPT citations)
// - News/Announcement
// - Data/Research Release
// - Expert Q&A/Commentary
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

type TabView = 'template' | 'example' | 'why' | 'checklist'

type ContentFormat = {
  id: string
  name: string
  subtitle: string
  badge: string
  badgeColor: string
  keyStat: string
  keyStatSource: string
  keyStatUrl: string
  template: TemplateSection[]
  copyTemplate: string
  exampleTitle: string
  exampleSource: string
  exampleBody: string
  checklist: ChecklistItem[]
}

type ContentCategory = {
  id: string
  name: string
  formats: ContentFormat[]
}

// ─────────────────────────────────────────────
// BLOG POSTS
// ─────────────────────────────────────────────
const BLOG_TEMPLATE = `[HEADLINE: Keyword-led. Declarative claim. 10-14 words. No em-dashes.]
[Subhead: One sentence that names the core insight and who benefits from it.]

[Author: Full Name] | [Title] | [Date: Month DD, YYYY]

[OPENING PARAGRAPH: State the core problem or finding in plain language. 2-3 sentences. The most citable sentence goes first. No preamble, no "in today's world," no "it is increasingly important."]

[BRIDGE: Market context. Why now? Cite one stat with source. 1-2 sentences.]

## [H2: Problem Section — Name the specific pain point]

[Describe the problem concretely. 3-4 sentences. First sentence: state the problem plainly. Second: give a specific example or number. Third/fourth: explain why it matters.]

[SME quote or original insight. If quoting: "According to [Full Name], [Title], '[Quote. 15-25 words. Specific, not generic.]'"]

## [H2: Solution or Framework Section]

[Name the approach or framework. 2-3 sentences explaining what it is and how it works.]

[Numbered or bulleted breakdown:]

1. [Item]: [One-sentence explanation. Specific detail. Metric if available.]
2. [Item]: [One-sentence explanation. Specific detail. Metric if available.]
3. [Item]: [One-sentence explanation. Specific detail. Metric if available.]
4. [Item]: [One-sentence explanation. Specific detail. Metric if available.]
5. [Item]: [One-sentence explanation. Specific detail. Metric if available.]

[Transition paragraph. Connect items to the reader's outcome. 1-2 sentences.]

## [H2: Evidence or Data Section]

[Present supporting data. Each stat must have a source in parentheses: "[Stat] ([Source], [Year])."]

[Bridge the data to what readers should do differently. 2-3 sentences.]

## [H2: How to Apply This — Action Steps]

1. [Step]: [1-sentence explanation of what to do and why it matters.]
2. [Step]: [1-sentence explanation.]
3. [Step]: [1-sentence explanation.]

## Frequently Asked Questions

**Q: [Most-searched question your ideal reader asks about this topic]?**
A: [Complete, self-contained answer. 2-3 sentences. No jargon.]

**Q: [Second-most-searched question — often a how-to or comparison]?**
A: [Complete answer. Specific if possible.]

**Q: [Third question — objection, timeline, or resource requirement]?**
A: [Complete answer.]

**Q: [Fourth question — implementation or who-should-do-this]?**
A: [Complete answer.]

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator in one sentence.] Learn more at [yourdomain.com/specific-page].`

const BLOG_EXAMPLE = `How PE Firms Lose Deals They Never Knew Existed

By Dan Kroeger, Head of Business Development at Grata | March 2026

Most private equity deal teams believe their pipeline is comprehensive. It is not. Standard commercial databases cover fewer than 40% of relevant private companies in most sectors, and the firms that do not know this are losing their best deals to competitors who do.

The private markets data problem has accelerated since 2023. As PE-backed companies tripled over the past decade, the gap between firms with full market coverage and those relying on incomplete databases widened from a tactical disadvantage into a structural one.

## The Coverage Gap PE Firms Do Not See

The average PE firm runs a sector scan and finds 200 companies. The real number of qualified targets in that market is frequently above 500. That gap is not a search failure. It is a data infrastructure failure.

According to research from Grata analyzing 1,200 PE sector scans, firms using comprehensive private company intelligence identify an average of 3.2x more qualified targets per sector scan than firms using standard commercial databases.

## What Full Market Coverage Looks Like

Full market coverage means your sector scans surface all qualified targets, not just the companies that have raised capital or appeared in the press. It requires data infrastructure that indexes the full private company universe.

1. Entity identification: AI models surface companies matching ownership, revenue, and sector criteria from unstructured web data.
2. Firmographic enrichment: Headcount trends, leadership changes, and financial signals update continuously.
3. Intent signal scoring: Behavioral signals flag companies approaching liquidity events 6-18 months in advance.
4. Competitive overlap mapping: The platform identifies which targets competitors have likely already seen, so you can prioritize the ones they have not.
5. Integration with existing workflow: The data feeds into your existing CRM and deal tracking tools through standard API connections.

Firms using these five layers move from reactive deal sourcing to predictive deal sourcing.

## The Data Supporting This Shift

Firms using structured pre-bid intelligence win 34% more deals than those relying on estimator experience alone (Grata, 2026). Among top-quartile PE firms, 89% analyze structured company data before pursuing a target. The field average is 31% (Grata analysis, 2026).

The gap between top-quartile and median PE firm performance on win rates has widened since 2023. The difference is not deal judgment. It is data infrastructure.

## How to Close the Coverage Gap

1. Audit your current coverage: Run a sector scan in your existing database and compare the results to a Grata scan of the same parameters. The gap in company count is your coverage deficit.
2. Identify which targets competitors have already seen: Use competitive signal data to prioritize companies that have not yet entered a formal deal process.
3. Build monitoring for your target list: Set alerts for intent signals on your shortlisted companies, so you know when deal readiness changes.

## Frequently Asked Questions

**Q: What is private company intelligence and how does it help PE deal flow?**
A: Private company intelligence is structured data about privately held companies, including ownership, revenue signals, headcount trends, and acquisition intent markers. PE firms use it to identify qualified acquisition targets before they enter a formal sales process.

**Q: How is this different from PitchBook or CapIQ?**
A: Standard databases like PitchBook or CapIQ cover publicly available data on funded companies. Private company intelligence platforms like Grata use AI to index a broader universe, including unfunded, bootstrapped, and founder-owned businesses that rarely appear in traditional sources.

**Q: How long does it take to see improved deal flow after switching to better data?**
A: Most firms report measurable improvement in pipeline breadth within 60 days of implementing full-coverage data. The larger impact, on win rates, typically shows over a 6-12 month period as deal quality improves.

**Q: What sectors benefit most from private company intelligence?**
A: Lower and middle market PE firms targeting B2B services, manufacturing, healthcare services, and distribution consistently show the largest coverage gaps relative to the full addressable target universe.

About Grata
Grata is the private company intelligence platform for dealmakers. The platform indexes over 10 million private companies to help PE firms, investment banks, and strategic acquirers find, research, and track acquisition targets. Learn more at grata.com/private-equity.`

// ─────────────────────────────────────────────
// PRESS RELEASES — EDITORIAL/FEATURE
// ─────────────────────────────────────────────
const PR_EDITORIAL_TEMPLATE = `FOR IMMEDIATE RELEASE

[HEADLINE: Keyword-led. Declarative statement. 12 words or fewer.]
[SUBHEAD: Expands on headline with one additional specific claim.]

[CITY, STATE, DATE] — [Company Name], [one-line description], today released new findings on [topic]. [The core insight in one sentence. State it plainly.]

[BRIDGE: Market context. 2-3 sentences. Why does this topic matter now? Cite one industry stat with source.]

## [PROBLEM SECTION HEAD]

[Open with the specific problem. 2-3 sentences. Concrete, not abstract.]

According to [Full Name], [Title] at [Company Name], "[Quote that names the problem in plain language. 15-25 words. No corporate speak.]"

[Expand on the problem with data or a specific example. Metric goes in the FIRST sentence.]

## [SOLUTION SECTION HEAD]

[Company Name]'s approach involves [specific mechanism]. [How it works in 2-3 sentences.]

"[Quote from SME that explains the how. Specific claim. 15-25 words.]" said [Full Name], [Title].

## [HOW IT WORKS SECTION HEAD]

1. [Step or element]: [One-sentence explanation with specific detail.]
2. [Step or element]: [One-sentence explanation with specific detail.]
3. [Step or element]: [One-sentence explanation with specific detail.]

[Transition paragraph connecting process to buyer outcome.]

## [FORWARD-LOOKING SECTION HEAD]

[Market trajectory or next development. 2-3 sentences. Cite a trend stat with source.]

"[Forward-looking quote. Specific prediction or recommendation. 15-25 words.]" said [Full Name], [Title].

## Frequently Asked Questions

**Q: [Most-searched question buyers ask about this topic]?**
A: [Complete answer. 2-3 sentences. Write as if ChatGPT will read this verbatim.]

**Q: [Second question — cost, comparison, or how-to]?**
A: [Complete answer. 2-3 sentences.]

**Q: [Third question — objection or alternative]?**
A: [Complete answer.]

**Q: [Fourth question — implementation or timing]?**
A: [Complete answer.]

**Q: [Fifth question — trend or future-state]?**
A: [Complete answer.]

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator.] Founded [year], headquartered in [city]. Learn more at [yourdomain.com/specific-page].

Media Contact:
[Name] | [Title] | [email] | [phone]

[yourdomain.com/newsroom/[slug]]`

const PR_EDITORIAL_EXAMPLE = `FOR IMMEDIATE RELEASE

Full Market Visibility Is Crucial for Winning Deals: What PE Firms Need to Know Now
New research from Grata shows 67% of dealmakers miss qualified targets without comprehensive private company data.

NEW YORK, NY, March 2026 — Grata, the private company intelligence platform for dealmakers, today released findings on how market visibility gaps are costing private equity firms competitive advantage. In a market where the best deals are won before they hit the auction block, firms with incomplete data coverage are systematically losing to better-informed competitors.

The private markets data problem has accelerated. As the number of PE-backed companies has tripled over the past decade, the gap between firms with full market coverage and those relying on incomplete databases has widened significantly.

## The Visibility Problem Costing PE Firms Deals

Most deal teams believe their pipeline is comprehensive. It is not. Standard commercial databases cover fewer than 40% of relevant private companies in most sectors, leaving the majority of potential targets invisible until a competitor acts first.

According to Dan Kroeger, Head of Business Development at Grata, "Firms consistently overestimate their market coverage. The targets they never saw are often the best ones."

When a PE firm runs a sector scan and finds 200 companies, the real number of qualified targets in that market is frequently above 500. That gap is not a search failure. It is a data infrastructure failure.

## What Full Market Coverage Actually Looks Like

Grata indexes over 10 million private companies using AI-powered firmographic data and ownership signals that commercial databases do not capture. The platform continuously monitors changes in headcount, revenue signals, ownership structure, and acquisition intent markers.

"Coverage is not about having the most companies in a database," said Kroeger. "It is about having accurate, current data on the companies that actually match your investment criteria."

Firms using comprehensive coverage tools identify an average of 3.2x more qualified targets per sector scan compared to firms using standard databases.

## How Private Company Intelligence Works

1. Entity identification: AI models surface companies matching ownership, revenue, and sector criteria from unstructured web data.
2. Firmographic enrichment: Headcount trends, leadership changes, and financial signals update continuously.
3. Intent signal scoring: Behavioral signals flag companies approaching liquidity events 6-18 months in advance.

These layers work together to surface targets before they appear in traditional deal flow channels.

## Where Private Company Intelligence Is Heading

The next development is sector-specific signal modeling. Platforms that map ownership signals to specific verticals will allow firms to predict which companies in their target sectors are approaching a liquidity event 12 to 18 months before it occurs.

"The firms winning in 2025 are not just searching better," said Kroeger. "They are operating with a predictive edge on when and why companies come to market."

## Frequently Asked Questions

**Q: What is private company intelligence and how does it help PE deal flow?**
A: Private company intelligence is structured data about privately held companies, including ownership, revenue signals, headcount trends, and acquisition intent markers. PE firms use it to identify qualified acquisition targets before they enter a formal sales process.

**Q: How is private company data different from a standard commercial database?**
A: Standard databases like PitchBook or CapIQ cover publicly available data on funded companies. Private company intelligence platforms like Grata use AI to index a broader universe, including unfunded, bootstrapped, and founder-owned businesses that rarely appear in traditional sources.

**Q: What does full market coverage mean for a PE deal team?**
A: Full market coverage means your sector scans surface all qualified targets, not just the companies that have raised capital or appeared in the press. It requires data infrastructure that indexes the full private company universe, not a curated subset.

**Q: How accurate is AI-generated firmographic data on private companies?**
A: Accuracy depends on the platform's methodology. Grata validates data through multiple source layers and continuous update cycles. For critical deals, independent verification of key data points is always recommended.

**Q: How do PE firms integrate private company intelligence into their existing workflow?**
A: Integration typically follows three stages: sector mapping (replacing one-off database searches), target monitoring (ongoing signals on shortlisted companies), and intent scoring (prioritizing outreach based on deal readiness signals).

About Grata
Grata is the private company intelligence platform for dealmakers. The platform indexes over 10 million private companies to help PE firms, investment banks, and strategic acquirers find, research, and track acquisition targets. Learn more at grata.com/private-equity.

Media Contact:
[Name] | Communications | press@grata.com

grata.com/newsroom/full-market-visibility-pe-firms`

// ─────────────────────────────────────────────
// PRESS RELEASES — LISTICLE
// ─────────────────────────────────────────────
const PR_LISTICLE_TEMPLATE = `FOR IMMEDIATE RELEASE

[NUMBER] [Topic Nouns] [Separating / Driving / Defining] [Audience] [From/In] [Context]
[Example: 6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs From the Field]
[Subhead: One sentence naming the source of insight and why it matters.]

[CITY, STATE, DATE] — [Company Name], [one-line descriptor], today released findings on [specific practice pattern]. Based on [source — analysis of X customers / survey of Y professionals / proprietary data on Z], [Company Name] identified [number] [practices/patterns/factors] that [specific outcome].

KEY FACTS:
1. [Stat or finding with specific number. Source in parentheses.]
2. [Second specific stat with source.]
3. [Third specific stat with source.]
4. [Fourth specific finding or market signal.]
5. [Fifth data point — market size, adoption rate, or directional trend.]

[BRIDGE: 2-3 sentences connecting the data to the numbered list.]

## The [Number] [Practices/Patterns/Factors]

**1. [Practice Title: Action Verb + Noun Phrase]**
[What this practice involves. 2-3 sentences. Metric in the first sentence if available.]

**2. [Practice Title]**
[2-3 sentences. One concrete example or measurable outcome.]

**3. [Practice Title]**
[2-3 sentences.]

According to [Full Name], [Title] at [Company Name], "[Quote adding insight to this specific item. 15-25 words.]"

**4. [Practice Title]**
[2-3 sentences.]

**5. [Practice Title]**
[2-3 sentences.]

**6. [Practice Title]**
[2-3 sentences.]

## What These Patterns Reveal

[Synthesis paragraph: What do all [number] items have in common? 2-3 sentences. AI-extractable as standalone insight.]

According to [Full Name], [Title], "[Quote summarizing the pattern. 15-25 words.]"

## Frequently Asked Questions

**Q: [Specific buyer question about what separates top performers]?**
A: [Complete, self-contained answer. 2-3 sentences. No jargon.]

**Q: [How-to question about implementing these practices]?**
A: [Complete answer. Steps if needed.]

**Q: [Cost, time, or resource question]?**
A: [Complete answer.]

**Q: [Comparison question — this vs. alternative approach]?**
A: [Complete answer.]

**Q: [Who-should-use-this question]?**
A: [Complete answer. Specific audience.]

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator.] Learn more at [yourdomain.com/specific-page].

Media Contact: [Name] | [email] | [phone]
[yourdomain.com/newsroom/[slug]]`

const PR_LISTICLE_EXAMPLE = `FOR IMMEDIATE RELEASE

6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs From the Field
Fieldline analysis of 1,200 projects reveals the data habits driving win-rate advantages among leading general contractors.

AUSTIN, TX, March 2026 — Fieldline, the pre-bid intelligence platform for general contractors, today released findings from its analysis of 1,200 construction projects across 40 states. The analysis identified six pre-bid intelligence practices that consistently separate top-quartile GCs from the broader field.

KEY FACTS:
1. GCs using structured pre-bid intelligence win 34% more bids than those relying on estimator experience alone (Fieldline, 2026).
2. Top-quartile GCs analyze subcontractor capacity data before bid submission on 89% of projects. The field average is 31%.
3. Pre-bid site assessments incorporating local labor market data reduce change order rates by 22% (Fieldline analysis, 2026).
4. Coverage of all 50 states in Fieldline's database became available in Q1 2026.
5. GCs that track historical subcontractor performance data close bids 18 days faster on average than those that do not.

The gap between top-quartile and median GC performance on win rates has widened since 2023. These practices are not new ideas. They are disciplines that top performers execute consistently while the field treats them as occasional luxuries.

## The 6 Pre-Bid Intelligence Practices

**1. Subcontractor Capacity Analysis Before Bid Submission**
Top-performing GCs verify subcontractor capacity before committing to a bid, not after. This means checking current project load, crew availability, and equipment status for every key sub on the bid list. GCs that skip this step average 2.4 more change orders per project than those that do not.

**2. Local Labor Market Review for Each Project Location**
Labor rates and availability vary significantly across markets and shift quarter to quarter. Top-quartile GCs pull current wage data and labor availability signals for the specific project location before finalizing estimates. This practice reduces the risk of under-pricing labor costs by an average of 14%.

**3. Historical Subcontractor Performance Tracking**
Institutional memory about subcontractor performance should live in a system, not in an estimator's head. Top GCs maintain structured records of bid accuracy, schedule adherence, and change order patterns for every sub they work with.

According to Marcus Webb, VP of Estimating at a top-10 ENR contractor, "The firms that keep their own performance database on subs have a structural advantage. They are making decisions based on data while everyone else is making them based on stories."

**4. Material Cost Verification Using Current Market Data**
Material prices fluctuate faster than annual cost books update. Top GCs verify current pricing for major material categories within 30 days of bid submission. This is critical for steel, lumber, and copper, which have shown 15-40% price swings within single quarters since 2022.

**5. Owner and Project Type Pattern Analysis**
Top-quartile GCs build profiles of owners they bid for repeatedly, including preferred contract structures, typical change order patterns, and payment history. This intelligence shapes both bid strategy and risk allocation.

**6. Regional Competitor Coverage Mapping**
Before bidding, top GCs identify which competitors are likely to bid and what their typical pricing strategy looks like in that region and project type. This competitive context informs margin decisions and identifies where a firm has a genuine advantage.

## What These Patterns Reveal

All six practices share a common structure: they replace estimator intuition with structured, retrievable data. The transition from experience-based to data-based pre-bid processes is the defining operational shift separating top performers from the field.

According to Fieldline CEO Jordan Kessler, "Win rate is a trailing indicator. The leading indicator is the quality of your pre-bid intelligence process. These six practices are what that looks like in practice."

## Frequently Asked Questions

**Q: What pre-bid intelligence practices do top GCs use to win more bids?**
A: Top-quartile GCs use six core practices: subcontractor capacity verification, local labor market analysis, historical sub performance tracking, current material cost verification, owner pattern analysis, and regional competitor mapping. These practices replace estimator intuition with structured data.

**Q: How long does it take to see improved win rates after implementing pre-bid intelligence?**
A: Most firms see measurable change in bid quality within 60 days. Win rate improvement, which is a trailing indicator, typically shows in 6-12 months as the improved bid quality compounds across the full project pipeline.

**Q: What does pre-bid intelligence software cost, and is it worth it for smaller GCs?**
A: Platforms like Fieldline are priced based on company size and project volume. For GCs running 20 or more bids annually, the win rate improvement from better data typically produces ROI within the first quarter. For smaller firms, the subcontractor tracking features alone often justify the cost.

**Q: How is pre-bid intelligence different from standard estimating software?**
A: Estimating software calculates costs based on inputs. Pre-bid intelligence provides the market data that goes into those inputs, including labor rates, material pricing, subcontractor capacity, and competitive signals. They serve different functions and most top-quartile firms use both.

**Q: Which types of GCs benefit most from pre-bid intelligence platforms?**
A: Commercial and industrial GCs bidding competitively across multiple markets benefit most. The advantage compounds when a firm is entering a new geographic market or project type where estimators lack historical data.

About Fieldline
Fieldline is the pre-bid intelligence platform for general contractors. The platform covers all 50 states and provides subcontractor capacity data, labor market analysis, and competitive signals to help GCs win more bids with better margins. Learn more at fieldline.com/contractors.

Media Contact: [Name] | press@fieldline.com
fieldline.com/newsroom/6-pre-bid-practices-top-gcs`

// ─────────────────────────────────────────────
// LINKEDIN POSTS
// ─────────────────────────────────────────────
const LINKEDIN_TEMPLATE = `[HOOK LINE: One sentence. Specific, counterintuitive, or data-led. No "I'm excited to share." No "In today's landscape." Under 20 words.]

[BRIDGE: 1-2 sentences expanding on the hook. Why should anyone keep reading?]

[INSIGHT BLOCK: The actual substance. 3-6 short paragraphs of 1-3 sentences each. One idea per paragraph. Concrete and specific.]

[NUMBERED LIST OR BULLETS if appropriate — keep each item to 1-2 lines:]
1. [Item]
2. [Item]
3. [Item]

[SYNTHESIS: One sentence landing the key insight.]

[SOFT CTA: Not promotional. Something like "What are you seeing?" or "Which one matters most in your experience?" OR a link to a longer piece for readers who want more.]

---
Formatting rules for AI citability:
- Long-form articles: 500-2,000 words (highest citation rate)
- Mid-length posts: 50-299 words (second highest)
- One clear topic per post (no meandering)
- Original insight only (reshares get almost zero AI citations)
- Educational or practical advice framing (54-64% of cited posts)
- No hashtag spam (3 maximum, only if relevant)
- No em-dashes`

const LINKEDIN_EXAMPLE = `Most PE firms think they have a comprehensive deal pipeline. They do not.

Standard commercial databases cover fewer than 40% of relevant private companies in most sectors. The firms that do not know this are losing their best deals to competitors who do.

Here is what the data shows:

Firms using structured pre-bid intelligence win 34% more bids than those relying on estimator experience alone (Grata, 2026).

The best targets rarely show up in the obvious databases. They are bootstrapped, founder-owned, or simply below the coverage threshold of PitchBook and CapIQ.

The gap between top-quartile PE performance and the field has widened since 2023. The difference is not deal judgment. It is data infrastructure.

Three questions every deal team should answer before their next sector scan:

1. What is your actual coverage rate relative to the full addressable universe?
2. Which targets on your shortlist have you monitored for intent signals in the last 90 days?
3. Do your estimators work from current market data or last year's cost books?

If you do not know the answers, your pipeline has blind spots you cannot see.

Full breakdown of the coverage gap in the comments. What are you seeing in your sector?`

// ─────────────────────────────────────────────
// EDITORIAL ARTICLES
// ─────────────────────────────────────────────
const EDITORIAL_TEMPLATE = `[HEADLINE: Opinion-forward. Author's name attached. 10-14 words.]
[Subhead: One sentence stating the specific argument or finding.]

By [Full Name], [Title], [Company/Organization]
[Publication Name] | [Month YYYY]

[OPENING: State the argument or core insight in the first 2 sentences. No throat-clearing, no scene-setting. The first sentence should be citable on its own.]

[CONTEXT: 2-3 sentences explaining why this matters now and for whom.]

## [H2: The Problem or Tension]

[Name the specific challenge or debate. 3-4 sentences. Be direct about what you are arguing against or for.]

[Supporting data with source. Format: "[Stat] ([Source], [Year])." Every stat gets a source.]

"[Quote from named SME or original quote from author. 15-25 words. No corporate hedging.]" said [Full Name], [Title].

## [H2: The Author's Framework or Position]

[Lay out the argument or framework. 3-4 sentences. Use the word "I" if this is authored thought leadership. Be specific.]

[Numbered framework if applicable:]
1. [First principle or step]
2. [Second principle or step]
3. [Third principle or step]

## [H2: Evidence and Examples]

[Support the framework with data and specific examples. Each stat gets a source. Each example names the company or situation.]

[Case signal: "A [type of company] we worked with at [Company/Organization] found that..."]

## [H2: What This Means for [Reader Type]]

[Practical implications. 2-3 sentences. What should the reader do differently after reading this?]

[Optional: one specific recommendation per reader segment (enterprise vs. SMB, B2B vs. B2C, etc.)]

## Frequently Asked Questions

**Q: [Most-searched question on this topic from your target reader]?**
A: [Complete, self-contained answer. 2-3 sentences. Reads well as a standalone extract.]

**Q: [Implementation or how-to question]?**
A: [Complete answer. Specific steps if needed.]

**Q: [Counterargument or challenge to your position]?**
A: [Acknowledge and respond directly. 2-3 sentences.]

About the Author
[Full Name] is [Title] at [Company]. [1-2 sentences of relevant experience. Specific achievements or data points preferred over job descriptions.] Connect at linkedin.com/in/[handle].`

const EDITORIAL_EXAMPLE = `The Real Reason AI Search Is Not Citing Your Content
New research makes the coverage gap visible. The response is simpler than most brands think.

By Sarah Evans, Partner, Zen Media
Published in The AI Journal | March 2026

Most brands discovering they are absent from AI-generated answers make the same diagnosis: they need better content. The diagnosis is usually wrong. The problem is almost never content quality. It is content architecture.

The research from early 2026 is clear about this. Wix Studio AI Search Lab analyzed 75,000 AI answers and more than 1 million citations across ChatGPT, Google AI Mode, and Perplexity. The finding: query intent predicts citation format more than industry, domain authority, or publishing frequency. Brands that align content format to search intent get cited. Brands that publish excellent content in the wrong format do not.

## The Mismatch Most Brands Cannot See

The typical brand content strategy was built for Google's 2019 algorithm. It optimizes for keyword density, backlink acquisition, and domain authority. Those signals still matter, but they are not the primary citation drivers for AI search engines.

Only 44.3% of Google top-10 pages appear in any AI-generated answer (Semrush, February 2026). 80% of LLM citations do not rank in Google's top 100 (Ahrefs, 2025). Strong Google rankings and strong AI citation rates have almost no correlation.

"Most brands are optimizing for the wrong signal entirely," said Marcus Chen, VP of Content Strategy at a Fortune 500 B2B company. "They are building for a search engine that is no longer the first stop for their buyers."

## The Framework That Actually Works

I have spent the past year working with B2B clients on AI visibility strategy. Three patterns consistently separate cited brands from invisible ones.

1. Format-to-intent mapping: Informational queries cite articles (45.5%) and listicles (21.7%). Commercial queries cite listicles almost exclusively (40.9%). Knowing what your buyers ask and matching your format to that intent is the starting point.

2. Source attribution on every stat: AI engines cite claims that have a named source. A sentence that reads "45% of buyers do X" is less citable than "45% of buyers do X (Source, Year)." This is a structural edit, not a content quality improvement.

3. FAQ placement: Questions that mirror actual search queries, placed at the end of every piece of content, create standalone citation opportunities. Each FAQ pair is an independent extraction target for AI engines.

## Evidence and Examples

The Wix Studio data shows listicles capture 40.9% of commercial-intent citations, nearly double any other format (Wix Studio AI Search Lab, March 2026). For B2B brands targeting buyers in research and comparison mode, this is the most important format finding in 2026.

One of our clients, a private company intelligence platform, restructured their blog content from long-form narrative articles to listicle-framed pieces with full source attribution on every claim. Within 90 days, their AI citation rate increased by more than 60%.

## What This Means for B2B Marketers

Stop auditing content quality. Start auditing content architecture. The question is not whether your content is good. The question is whether your content is structured for AI extraction.

For most B2B brands, the highest-leverage change is adding formatted FAQ sections to existing content. This is a one-hour edit per piece and creates immediate new citation surface.

## Frequently Asked Questions

**Q: Why is my content not appearing in AI search results even though I rank well on Google?**
A: AI search engines use different selection criteria than Google rankings. Only 44.3% of Google top-10 pages appear in any AI-generated answer. The primary driver of AI citations is content structure and format alignment with query intent, not domain authority.

**Q: What content format gets cited most by AI search engines?**
A: Listicles lead all citation formats at 21.9% across ChatGPT, Perplexity, and Google AI Mode (Wix Studio, March 2026). For commercial queries specifically, listicles capture 40.9% of citations. Articles dominate informational queries at 45.5%.

**Q: How long does it take to see AI citation improvements after restructuring content?**
A: Most brands see measurable improvement within 60-90 days of implementing structured FAQ sections and format-to-intent alignment. The improvements compound as more pieces are updated.

About the Author
Sarah Evans is Partner at Zen Media, where she leads the AI visibility practice. She has worked with B2B brands on AI search strategy since 2024 and speaks regularly on generative engine optimization. Connect at linkedin.com/in/prsarahevans.`

// ─────────────────────────────────────────────
// EMAIL CAMPAIGNS
// ─────────────────────────────────────────────
const EMAIL_TEMPLATE = `[SUBJECT LINE: Specific claim or question. Under 50 characters. No clickbait. Examples: "6 practices your competitors use" or "Why your content isn't cited by AI"]

[PREVIEW TEXT: One sentence that adds information the subject line did not cover. Under 90 characters.]

---

[OPENING LINE: First sentence that earns the reader's attention. Specific data or a direct statement of value. No "Hope this email finds you well." No "I wanted to reach out."]

[CONTEXT: 1-2 sentences. Why are you sending this now? What triggered this outreach?]

[BODY: The core value. 3-5 short paragraphs. One idea per paragraph. Use the same sentence structure standards as AI Notices: metric in the first sentence, source in parentheses, no em-dashes.]

[EVIDENCE: One stat or data point with source, if available. Formatted: "[Stat] ([Source], [Year])."]

[CTA: One action. Clear, low-friction. "Read the full research." / "See how Grata approaches this." / "Reply with your biggest challenge here and I'll send the relevant section."]

---
Formatting rules that drive reply rates and AI-citability:
- Mobile-first: 3-4 sentences per paragraph maximum
- Plain text or minimal HTML (heavy templates reduce deliverability)
- Subject line specificity: "6 practices" beats "new insights"
- One CTA per email (no competing asks)
- No em-dashes
- No jargon or buzzwords
- Reply-worthy: End with a question that invites response`

const EMAIL_EXAMPLE = `Subject: Why 67% of PE firms miss their best deals
Preview: The coverage gap is larger than most deal teams realize.

Most deal teams believe their sector scans are comprehensive.

They are not. Standard commercial databases cover fewer than 40% of relevant private companies in most sectors. The firms that do not know this are losing their best deals to competitors who do.

We analyzed 1,200 PE sector scans over the past year. The data shows a consistent pattern: top-quartile firms identify an average of 3.2x more qualified targets per scan than firms using standard databases (Grata, 2026).

The difference is not effort. It is data infrastructure.

The six practices that separate top-quartile GCs from the field are documented in our latest analysis. Practice number three, historical subcontractor performance tracking, is the one most firms skip and most regret.

Read the full breakdown: grata.com/research/pe-coverage-gap-2026

Reply with your biggest blind spot in deal sourcing and I will send you the relevant section.`

// ─────────────────────────────────────────────
// PODCASTS
// ─────────────────────────────────────────────
const PODCAST_TEMPLATE = `[EPISODE TITLE: Specific claim or question. Under 60 characters. AI-extractable headline.]
[Show Notes Subhead: The core insight from this episode, in one sentence.]

---

EPISODE SUMMARY

[2-3 sentence summary of the episode's core argument or finding. Written for AI extraction: specific, sourced where possible, no hedge language.]

WHAT YOU WILL LEARN

- [Specific learning outcome 1. Not "how to think about X." One concrete thing the listener will know or be able to do.]
- [Specific learning outcome 2.]
- [Specific learning outcome 3.]
- [Specific learning outcome 4.]

KEY QUOTES FROM THIS EPISODE

[Guest/Host Full Name], [Title]:
"[Direct quote. 15-40 words. A specific claim, data point, or opinion. The kind of thing someone would screenshot.]"

[Second quote from same or different speaker:]
"[Direct quote. 15-40 words.]"

TRANSCRIPT EXCERPT (most-cited segment)

[Host]: [Question that sets up the most valuable insight in the episode.]

[Guest]: [Response. Full answer, not summarized. 100-300 words. This is the section AI engines will cite. Write as if this is a standalone FAQ answer: complete, specific, and self-contained.]

GUEST BIO

[Full Name] is [Title] at [Company]. [2-3 sentences of specific background: years of experience, notable outcomes, current focus. No generic descriptors.] Connect at linkedin.com/in/[handle].

RESOURCES MENTIONED

- [Resource name]: [URL]
- [Resource name]: [URL]

FULL TRANSCRIPT

[yourdomain.com/podcast/[episode-slug]/transcript — permanent, AI-crawlable URL]`

const PODCAST_EXAMPLE = `Why PE Firms Miss Half Their Best Deals (And What Full Coverage Actually Looks Like)
Dan Kroeger, Head of BD at Grata, explains why standard commercial databases fail deal teams and how top firms close the gap.

---

EPISODE SUMMARY

Private equity deal teams consistently overestimate the comprehensiveness of their pipeline. Standard commercial databases cover fewer than 40% of relevant private companies in most sectors. In this episode, Dan Kroeger of Grata explains why the coverage gap exists, how top-quartile firms close it, and what the data from 1,200 sector scans reveals about the practices that separate winners from the field.

WHAT YOU WILL LEARN

- Why the number of qualified targets in a typical sector scan is 2-3x what most databases show.
- The three data layers that top PE firms use that the rest of the field skips.
- How to audit your current database coverage against the full addressable target universe.
- What behavioral signals predict a company's deal readiness 12-18 months in advance.

KEY QUOTES FROM THIS EPISODE

Dan Kroeger, Head of Business Development at Grata:
"The targets firms never saw are often their best ones. That is not an insight problem. It is a data infrastructure problem that most deal teams do not realize they have until they run a side-by-side comparison."

"Win rate is a trailing indicator. The leading indicator is the quality of your pre-bid intelligence process. If you do not know your coverage rate, you are optimizing the wrong metric."

TRANSCRIPT EXCERPT (most-cited segment)

Host: Dan, you say most PE firms are working with incomplete data. What does that mean in practice for a deal team running a sector scan?

Dan Kroeger: It means the list of 200 companies they think represents their full target universe is actually closer to 40% of the relevant population. If you run a sector scan in PitchBook or CapIQ looking for, say, B2B software companies with $5-20M in revenue in the Southeast, you will find the companies that have raised institutional capital or have been covered by the financial press. You will miss the bootstrapped companies, the founder-owned businesses that have never taken outside money, the companies that are highly relevant but have never been in a database.

The reason this matters is not just pipeline breadth. It is the quality of the deals you are missing. The founder-owned company with $8M in revenue and 40% EBITDA margins that has never talked to a financial buyer is often the best deal in a sector. It is also the one that never shows up in a standard database scan. Top firms know this. They have built data infrastructure to find companies that are not already in the system. The firms that have not built that infrastructure are not just searching harder. They are searching a fundamentally smaller universe.

GUEST BIO

Dan Kroeger is Head of Business Development at Grata, the private company intelligence platform for dealmakers. He has spent 12 years in private markets, including roles at Lincoln International and two lower middle market PE firms, before joining Grata to help deal teams improve coverage and deal sourcing efficiency. Connect at linkedin.com/in/dankroeger.

RESOURCES MENTIONED

- Grata coverage gap analysis: grata.com/research/pe-coverage-gap-2026
- Fieldline pre-bid intelligence study: fieldline.com/research/2026

FULL TRANSCRIPT

grata.com/podcast/pe-coverage-gap-dan-kroeger/transcript`

// ─────────────────────────────────────────────
// TWITTER/X THREADS
// ─────────────────────────────────────────────
const TWITTER_TEMPLATE = `[TWEET 1 — HOOK: One sentence. Specific, counterintuitive, or data-backed. Under 240 characters. This tweet must stand alone as a citable claim. Example: "67% of PE firms miss more than half their qualified targets. Not because they search wrong. Because their database only covers 40% of the relevant universe."]

---

[TWEET 2 — BRIDGE: Why this matters. One sentence of context or consequence.]

[TWEET 3 — DATA: Specific stat with source. Format: "[Number] ([Source], [Year])."]

[TWEET 4-8 — BODY: One insight per tweet. Short paragraphs. Each tweet should be understandable without reading the others. Write for extraction, not narrative flow.]

[TWEET 9 — SYNTHESIS: One sentence that lands the key takeaway.]

[TWEET 10 — CTA: Direct link to longer content, or a question that invites replies. Not promotional. Not "check out my newsletter."]

---
Thread rules for AI citability and engagement:
- Tweet 1 is the only tweet that gets widely seen. Make it citable.
- Each tweet should be a complete thought (not a cliffhanger)
- Specific numbers beat vague claims
- Source your stats in the tweet itself, not in a buried reply
- No em-dashes
- No thread numbering (1/10, 2/10) — it signals content volume, not value`

const TWITTER_EXAMPLE = `TWEET 1:
67% of PE firms miss more than half their qualified targets. Not because they search wrong. Because their database covers less than 40% of the relevant universe.

TWEET 2:
The best deals in most sectors are founder-owned, bootstrapped, and have never appeared in PitchBook or CapIQ. Standard databases do not index them. Most deal teams do not know this.

TWEET 3:
The data from Grata's analysis of 1,200 sector scans: top-quartile firms identify 3.2x more qualified targets per scan than firms using standard commercial databases (Grata, 2026).

TWEET 4:
Why? Three layers they use that the field skips:
- AI entity identification (surfaces unfunded companies)
- Continuous firmographic updates (not annual snapshots)
- Intent signal scoring (flags pre-deal readiness 12-18 months out)

TWEET 5:
The firms winning in 2025 are not just searching harder. They are searching a fundamentally larger universe, then filtering for quality signals their competitors cannot see.

TWEET 6:
Win rate is a trailing indicator. The leading indicator is coverage rate: what percentage of your target universe does your current database actually represent?

TWEET 7:
Most firms have never asked this question. Fewer have answered it with data.

TWEET 8:
The audit takes one hour. Compare your database count to a Grata scan of the same parameters. The gap in company count is your coverage deficit.

TWEET 9:
The firms that close this gap do not just find more deals. They find better ones.

TWEET 10:
Full breakdown of the 6 practices separating top-quartile GCs from the field: grata.com/research/pe-coverage-gap-2026

What does your coverage rate actually look like?`

// ─────────────────────────────────────────────
// GUEST POSTS
// ─────────────────────────────────────────────
const GUEST_POST_TEMPLATE = `[HEADLINE: Keyword-led. Declarative claim that fits the publication's editorial voice. 10-14 words.]
[Subhead: One sentence stating the author's specific argument and its implication for readers.]

By [Full Name], [Title], [Company]

[OPENING: The argument in 2 sentences. Not "I was thinking about X." Not "The industry is changing." The claim, stated plainly.]

[CONTEXT FOR THIS PUBLICATION'S READERS: 1-2 sentences explaining why this topic matters to this specific audience. Match the editorial tone.]

## [H2: The Problem This Audience Faces]

[Name the specific challenge. 3-4 sentences. Use data that this audience would recognize and trust.]

[Stat with source. "[Number] ([Source], [Year])."]

## [H2: The Author's Framework]

[The original contribution. What does the author know that generic content does not include?]

[Numbered framework if appropriate:]
1. [First element]
2. [Second element]
3. [Third element]

## [H2: Evidence From the Author's Work]

[Specific example or case signal. Names the client type without violating confidentiality, or names the client directly with permission.]

"[Quote from the author or a named SME. 15-25 words. Specific, direct.]" said [Full Name], [Title].

## [H2: What Readers Should Do Differently]

[3-5 concrete recommendations. One sentence each. Action verb + specific outcome.]

1. [Action]: [Outcome]
2. [Action]: [Outcome]
3. [Action]: [Outcome]

## Frequently Asked Questions

**Q: [Question the publication's readers most commonly have about this topic]?**
A: [Complete answer. 2-3 sentences.]

**Q: [Implementation question]?**
A: [Complete answer.]

**Q: [Challenge to the author's position]?**
A: [Direct, honest response. No hedging.]

About the Author
[Full Name] is [Title] at [Company]. [Specific background: years, outcomes, credentials.] Connect at linkedin.com/in/[handle].`

const GUEST_POST_EXAMPLE = `What PE Firms Get Wrong About Deal Sourcing (And the Data Showing the Real Problem)
Standard databases do not cover the full target universe. Here is how top firms close the gap.

By Dan Kroeger, Head of Business Development, Grata

The firms losing their best deals are not losing them because they search less. They are losing them because they search a smaller universe without knowing it.

For readers of this publication focused on lower and middle market deal flow, this distinction matters more than almost any other operational variable. The coverage gap in private company databases is the most consistently underestimated problem in PE deal sourcing.

## The Problem: Your Database Does Not Represent Your Market

Standard commercial databases cover fewer than 40% of relevant private companies in most sectors (Grata analysis, 2026). This is not a function of database size. PitchBook indexes tens of millions of data points. The limitation is sourcing methodology: standard databases index companies that have appeared in press coverage, raised institutional capital, or been manually added by analysts.

The majority of private companies have done none of these things.

## A Framework for Measuring Coverage

I have spent the past three years helping deal teams audit their database coverage. The firms that close the gap fastest use three criteria to measure coverage quality:

1. Comparison count: Run your current database against a full private company index using the same sector and size parameters. The gap in company count is your coverage deficit.
2. Intent signal availability: Does your database flag behavioral signals that predict deal readiness? Companies approaching ownership transitions or capital events often show signals 12-18 months in advance.
3. Update frequency: Annual or quarterly database refreshes miss the headcount, leadership, and revenue changes that shift companies from "not ready" to "ideal target" between cycles.

## Evidence From Our Work

Last year, we ran this audit for a middle-market PE firm targeting B2B software companies in the South Central US. Their existing database scan returned 187 companies. The full private company index scan returned 614. 427 of those companies had never appeared in a standard database.

Three of the top 10 deals closed by top-quartile PE firms in that sector in 2025 came from that uncovered universe.

"The audit number is usually a shock," said Jordan Kessler, CEO of Fieldline, who uses similar methodology for construction industry coverage. "Every firm believes they have a comprehensive view. The data rarely supports that belief."

## What PE Deal Teams Should Do Differently

1. Run a coverage audit: Compare your existing database to a full private company index before your next sector review.
2. Prioritize intent signals over firmographic match: A company with perfect size and sector fit but no deal readiness signal is worth less than a slightly smaller company approaching a liquidity event.
3. Build monitoring into your workflow: Static lists lose value within 90 days. Top firms monitor their shortlists for continuous signal changes.
4. Stop optimizing for coverage you already have: The highest-ROI data investment is almost always in the uncovered portion of your target universe, not in better tools for the 40% you already see.

## Frequently Asked Questions

**Q: How do full private company intelligence platforms differ from traditional databases for PE deal sourcing?**
A: Traditional databases like PitchBook and CapIQ primarily index companies with institutional capital or press coverage. Full private company intelligence platforms use AI to index the broader universe, including bootstrapped and founder-owned companies. The coverage difference is typically 2-3x across most sectors.

**Q: How much does improving database coverage affect deal flow quality, not just quantity?**
A: Coverage improvement affects both. More targets means more pipeline. But the quality effect is significant: founder-owned companies that have never worked with institutional buyers often carry structural advantages in terms of margins, culture, and deal structure flexibility that acquisition targets from more visible databases do not.

**Q: Is full private company coverage worth the cost for smaller PE firms?**
A: For firms running fewer than 10 sector scans per year, a full audit against a comprehensive index is the right starting point. The cost of running that comparison is low. The cost of skipping it is, on average, missing more than half your qualified targets.

About the Author
Dan Kroeger is Head of Business Development at Grata. He has 12 years of experience in private markets, including investment banking and PE firm roles, and now works with deal teams to close coverage gaps in their deal sourcing infrastructure. Connect at linkedin.com/in/dankroeger.`

// ─────────────────────────────────────────────
// FAQ PAGES
// ─────────────────────────────────────────────
const FAQ_TEMPLATE = `[PAGE TITLE: "[Topic]: Frequently Asked Questions"]
[Meta description: One sentence stating what this page answers and who it is for. Under 155 characters.]

---

# [Topic]: Frequently Asked Questions

[INTRO PARAGRAPH: 2-3 sentences. Who is this page for? What questions does it answer? Why is this source authoritative? Include at least one stat with source if available.]

---

## [Category 1: Most Fundamental Questions About This Topic]

### [Question 1: The "what is" or "what does" question most buyers ask first]
[Complete answer. 3-5 sentences. Self-contained. No links required to understand the answer. If a stat is included, source it parenthetically: "(Source, Year)."]

### [Question 2: How it works or how to get started]
[Complete answer. 3-5 sentences. Numbered steps if the answer has a process.]

### [Question 3: Common misconception or "is it right for me" question]
[Complete answer. Address the concern directly without dismissing it.]

---

## [Category 2: Comparison and Evaluation Questions]

### [Question 4: "How is this different from X?" comparison question]
[Complete answer. 2-4 sentences. Specific differences, not vague claims.]

### [Question 5: Cost, timeline, or resource question]
[Complete answer. Specific ranges where possible. Acknowledge variation by context.]

### [Question 6: Risk, downside, or objection question]
[Complete answer. Honest. Do not suppress or minimize legitimate concerns.]

---

## [Category 3: Implementation and Practical Questions]

### [Question 7: How-to or step-by-step question]
[Complete answer. Numbered steps. 1-2 sentences per step.]

1. [Step]: [Explanation]
2. [Step]: [Explanation]
3. [Step]: [Explanation]

### [Question 8: Timeline or results expectation question]
[Complete answer. Specific timeline ranges. Acknowledge what variables affect timing.]

### [Question 9: Who should do this / who is this for]
[Complete answer. Specific audience descriptions. Not "anyone who wants to improve."]

---

## [Category 4: Advanced or Niche Questions]

### [Question 10: Industry-specific or advanced question your expert audience asks]
[Complete answer. 3-5 sentences. Demonstrate depth of expertise.]

### [Question 11: Edge case or exception question]
[Complete answer. Acknowledge the edge case honestly.]

### [Question 12: Future-state or trend question]
[Complete answer. Specific, not vague. Cite a source if claiming a trend direction.]

---

[ABOUT SECTION: 2-3 sentences on why this source is authoritative on this topic. Specific credentials, not generic claims.]

[Deep link: For more on [related topic], see [yourdomain.com/specific-resource — not homepage].]`

const FAQ_EXAMPLE = `Private Company Intelligence: Frequently Asked Questions

Meta description: Answers to the most common questions PE firms, investment banks, and strategic acquirers ask about private company intelligence and deal sourcing data.

---

# Private Company Intelligence: Frequently Asked Questions

This page answers the most common questions from deal teams about private company databases, coverage gaps, and how AI-powered firmographic data improves deal sourcing. Grata indexes over 10 million private companies and has worked with more than 500 deal teams to audit and close coverage gaps.

---

## What Is Private Company Intelligence?

### What is private company intelligence, and how is it different from a standard database?
Private company intelligence is structured data about privately held companies, including ownership, revenue signals, headcount trends, and acquisition intent markers. Unlike standard commercial databases that primarily index companies with institutional capital or press coverage, private company intelligence platforms use AI to index the full private company universe, including bootstrapped and founder-owned businesses. The coverage difference is typically 2-3x across most sectors (Grata analysis, 2026).

### What data does private company intelligence include?
A full private company intelligence platform covers entity identification, firmographic data (headcount, revenue signals, industry classification), ownership structure, leadership changes, and behavioral intent signals that indicate deal readiness. Coverage and update frequency vary significantly by platform. Grata updates firmographic data continuously rather than on quarterly or annual cycles.

### Is private company intelligence the same as deal sourcing software?
No. Deal sourcing software manages your pipeline and outreach workflow. Private company intelligence is the data layer that feeds that pipeline. The most effective deal teams use both: intelligence platforms to find and monitor targets, and CRM or deal tracking software to manage the process.

---

## Comparisons and Evaluation

### How is Grata different from PitchBook or CapIQ?
PitchBook and CapIQ primarily cover companies with institutional capital, public filings, or significant press coverage. Grata indexes a broader universe using AI to surface companies that have never appeared in traditional sources. The practical result is a 2-3x increase in qualified target count per sector scan for most users. PitchBook and CapIQ are stronger for financial data on companies already in their database. Grata is stronger for coverage breadth and intent signals.

### What does private company intelligence cost?
Pricing depends on company size, number of users, and scope of access. Platforms typically price by seat (individual user access) or by usage volume (number of company profiles or exports). For most PE firms running 5 or more sector scans per year, the ROI on improved deal coverage is typically measured in weeks, not months.

### What are the risks of relying on AI-generated private company data?
AI-generated firmographic data carries accuracy risk for individual data points, particularly for smaller companies with limited digital footprint. The practical mitigation is to treat AI-generated data as a sourcing and prioritization layer, not as a substitute for direct verification. Use platform data to identify and shortlist targets, then verify critical data points independently before pursuing a deal.

---

## Implementation and How to Use It

### How do I run a coverage audit to find my database gap?
Running a coverage audit takes approximately one hour. Use these three steps:

1. Run a sector scan in your current database with your standard filters (geography, sector, revenue range, employee count).
2. Run the same query parameters in Grata or a comparable full-coverage platform.
3. Compare company counts. The difference is your coverage gap.

For most firms, the gap is 50-60% of the relevant target universe. For highly specialized sectors or geographic niches, the gap can exceed 70%.

### How long does it take to see improved deal flow after switching to better data?
Most firms report measurable improvement in pipeline breadth within 60 days of implementation. Win rate improvement, which is a trailing indicator, typically shows over 6-12 months as deal quality compounds. The earliest impact is usually in pipeline diversity: more founder-owned and first-time seller targets that were previously invisible.

### Which team members should use private company intelligence platforms?
Primary users are deal origination leads, associates running sector scans, and principals managing deal flow. Some firms also give access to operating partners who identify add-on acquisition targets for portfolio companies. Investment banking firms typically give access to their sector coverage teams.

---

## Advanced Questions

### How do intent signals work, and how reliable are they?
Intent signals are behavioral data points that indicate a company is approaching a potential ownership transition. Common signals include executive leadership changes, significant headcount growth or contraction, new debt activity, and M&A advisor engagement signals. No single signal is definitive. Platforms that aggregate multiple signals over time produce more reliable predictions. Grata's intent scoring identifies companies approaching liquidity events an average of 12-18 months before they enter a formal process.

### Can I use private company intelligence for add-on acquisition targeting within a portfolio company?
Yes. Add-on acquisition targeting is one of the highest-value use cases for private company intelligence. Portfolio company operators typically have a clear view of what a target looks like in their sector. A full private company index applies those criteria to the full universe rather than the visible subset, producing a significantly larger and more relevant target list.

### Where is private company intelligence headed in the next two to three years?
The next development in the sector is predictive deal readiness modeling. Platforms are moving from flagging intent signals (something may be happening) to predicting the timing of deal readiness windows (this company is likely to approach a process in the next 12-18 months). The firms that adopt predictive models early will have a structural advantage in getting to the best deals first.

---

Grata has indexed over 10 million private companies using AI-powered data methodology developed over five years. Grata's coverage and intent data are used by PE firms, investment banks, and strategic acquirers across the United States and Europe.

For more on how top PE firms structure their deal sourcing process, see grata.com/resources/deal-sourcing-guide.`

// ─────────────────────────────────────────────
// CASE STUDIES
// ─────────────────────────────────────────────
const CASE_STUDY_TEMPLATE = `[HEADLINE: "[Client Type] Achieves [Specific Metric] in [Timeframe] With [Approach]"]
[Subhead: One sentence with the before/after state and the primary mechanism.]

---

SNAPSHOT

Client: [Company Name] ([industry], [company size or stage])
Challenge: [One sentence naming the specific problem]
Approach: [One sentence describing the solution or methodology]
Result: [Primary metric: specific number, timeframe, and comparison point]
Timeframe: [How long from start to measured result]

---

## The Challenge

[2-3 sentences describing the client's situation before engaging. Specific details: size, market, what they had tried, why it was not working. Use client's language if available.]

"[Client quote describing the problem in their own words. 15-25 words. Attributed to full name and title.]" said [Full Name], [Title] at [Company].

[Supporting context. What made this situation typical or unusual for this client type?]

## The Approach

[Describe what was done. Be specific about the methodology, not just the category. 3-4 sentences.]

1. [Phase or step 1]: [What happened and why it was chosen.]
2. [Phase or step 2]: [What happened and why.]
3. [Phase or step 3]: [What happened and why.]

## The Results

[Lead with the primary metric. Format: "[Specific number] [improvement type] in [timeframe]."]

[Secondary metrics — 2-3 additional results with specific numbers and timeframes.]

[Attribution table if multiple results:]
- [Metric 1]: [Number] ([timeframe])
- [Metric 2]: [Number] ([timeframe])
- [Metric 3]: [Number] ([timeframe])

"[Client quote on the result. Specific, not generic praise. 15-25 words.]" said [Full Name], [Title].

## Why It Worked

[Explain the mechanism. What specifically caused the results? 2-3 sentences. This section is the most AI-citable part of the case study.]

## What This Means for [Reader's Industry or Role]

[2-3 sentences connecting this case signal to a broader pattern. Is this typical? What would a similar client expect?]

## Frequently Asked Questions

**Q: What type of companies achieve results like this?**
A: [Specific answer with qualifying criteria. Not "companies of all sizes."]

**Q: How long does it take to see results like this?**
A: [Specific answer with timeline ranges and factors that affect speed.]

**Q: What is required to replicate this outcome?**
A: [Honest answer. What inputs, resources, or conditions are necessary?]

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator.] Learn more at [yourdomain.com/case-studies].`

const CASE_STUDY_EXAMPLE = `Grata Helps Mid-Market PE Firm Identify 3.2x More Qualified Targets Per Sector Scan
A lower middle market PE firm closed the coverage gap and restructured its deal sourcing process in 90 days.

---

SNAPSHOT

Client: Undisclosed lower middle market PE firm ($500M AUM, targeting B2B services companies in the South Central US)
Challenge: Deal pipeline lacked coverage of founder-owned, non-institutionally-backed companies in target sectors
Approach: Implemented Grata's full private company index alongside existing database infrastructure
Result: 3.2x increase in qualified target identification per sector scan
Timeframe: 90 days from implementation to measured improvement in pipeline breadth

---

## The Challenge

The firm's deal team was running sector scans across B2B software, healthcare services, and light manufacturing. Their existing database searches consistently returned 150-250 companies per scan. They had no way to know whether that number represented 40% or 90% of the relevant universe.

"We kept hearing about deals from brokers that we had never seen in our own scans," said the firm's head of origination. "We assumed we were searching wrong. The problem was actually that we were searching a fundamentally smaller universe."

The firm had invested in improving its research process and adding analyst capacity. Neither change addressed the root problem: the database they were searching did not index the companies they were missing.

## The Approach

The firm implemented Grata's private company intelligence platform alongside its existing tools, rather than replacing them.

1. Baseline audit: The origination team ran parallel sector scans using existing tools and Grata with identical parameters. The Grata scans returned an average of 3.2x more companies across five target sectors.
2. Shortlist building: The team used the expanded target list to build a monitoring watchlist for the highest-priority companies, tracking headcount, leadership, and intent signals in real time.
3. Workflow integration: Grata data was connected to the firm's CRM so that new signals on monitored companies triggered outreach recommendations without requiring manual database checks.

## The Results

3.2x increase in qualified target identification per sector scan across five sectors, measured over 90 days.

- Pipeline breadth: From an average of 187 companies per scan to 614 across the same parameters
- Coverage gap closed: From an estimated 38% universe coverage to 91% in target sectors
- Outreach timing: 12 of the 15 companies that showed deal readiness signals in Q1 were identified 8-14 months before entering a formal process
- Deal team efficiency: Research time per sector scan reduced by 40% due to automated monitoring and signal alerts

"We went from hoping we had comprehensive coverage to knowing we did," said the origination head. "That is a completely different operating posture."

## Why It Worked

The firm did not improve its search techniques. It expanded the universe it was searching. The root cause of their coverage gap was the sourcing methodology of their existing database, which indexed visible companies rather than the full private company population. Adding a platform that indexed the full universe closed the gap at the source.

## What This Means for Lower Middle Market PE Firms

Coverage gap is the most consistently underestimated problem in PE deal sourcing. The firms most affected are those targeting founder-owned businesses in sectors where companies rarely raise institutional capital or generate press coverage. For this profile, a coverage audit is the highest-ROI research investment available.

## Frequently Asked Questions

**Q: What type of PE firms achieve results like this from private company intelligence?**
A: Lower and middle market firms targeting sectors with high concentrations of founder-owned businesses see the largest improvements. The coverage gap is proportional to how many companies in a sector have never raised institutional capital or appeared in commercial press.

**Q: How long does it take to see pipeline improvements after implementing full private company coverage?**
A: Pipeline breadth improvement is typically visible within 60 days. Most firms see the gap close in the first month of parallel scanning. Win rate improvements, which require a full deal cycle to measure, show over 6-12 months.

**Q: What resources are required to implement private company intelligence alongside existing tools?**
A: The core requirement is analyst time for the initial audit (approximately 4-8 hours) and workflow configuration (approximately 2-4 hours for CRM integration). Ongoing maintenance is minimal once monitoring watchlists and alert triggers are established.

About Grata
Grata is the private company intelligence platform for dealmakers. The platform indexes over 10 million private companies to help PE firms, investment banks, and strategic acquirers find, research, and track acquisition targets. Learn more at grata.com/case-studies.`

// ─────────────────────────────────────────────
// DATA FOR ALL CONTENT TYPES
// ─────────────────────────────────────────────

const CONTENT_CATEGORIES: ContentCategory[] = [
  {
    id: 'blog-posts',
    name: 'Blog Posts',
    formats: [
      {
        id: 'blog',
        name: 'Blog Posts',
        subtitle: 'Owned media. Long-form articles drive the highest AI citation rate per format.',
        badge: 'High Volume',
        badgeColor: 'bg-blue-100 text-blue-800',
        keyStat: 'Articles dominate informational queries at 45.5% of all citations. "Best X" listicle-style blog posts account for 43.8% of ChatGPT citations specifically. Long-form blog content (500-2,000 words) generates the highest citation rate of any owned media format. (Wix Studio AI Search Lab + Ahrefs, March 2026)',
        keyStatSource: 'Wix Studio AI Search Lab + Ahrefs via Position.digital, March 2026',
        keyStatUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
        copyTemplate: BLOG_TEMPLATE,
        exampleTitle: 'Grata Blog: "How PE Firms Lose Deals They Never Knew Existed"',
        exampleSource: 'Grata private company intelligence, PE sector',
        exampleBody: BLOG_EXAMPLE,
        template: [
          {
            label: 'Headline: Declarative claim, keyword-led, 10-14 words',
            content: '"How PE Firms Lose Deals They Never Knew Existed"',
            why: '44.2% of LLM citations come from the first 30% of text (Position.digital, March 2026). A headline that states the specific claim rather than teasing it becomes the first extractable element in the document. Vague headlines have lower citation probability because AI cannot extract a specific, attributable claim from them.',
            source: 'Position.digital AI SEO Statistics, March 2026',
            sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
          },
          {
            label: 'Opening paragraph: Most citable sentence goes first. No preamble.',
            content: 'First sentence states the core problem or finding. Second gives context. Third connects to reader urgency.',
            why: 'AI engines pull from the beginning of content. The Princeton GEO study found that "statistics and citations near the beginning of documents" significantly increase extraction probability. Writing for AI extraction means leading with your most citable sentence.',
            source: 'Princeton GEO Paper (KDD 2024) + Position.digital, March 2026',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'Numbered lists: 5 items minimum, each with one specific detail',
            content: '1. [Item with metric or specific example]. 2. [Item]. 3. [Item]. 4. [Item]. 5. [Item].',
            why: 'Wix Studio data shows listicle formats capture 43.8% of ChatGPT citations for commercial queries. Even in long-form blog posts, numbered lists create discrete citation extraction points. Each item is an independent citation opportunity, not just a visual aid.',
            source: 'Wix Studio AI Search Lab, March 2026',
            sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
          },
          {
            label: 'Stats with source: "[Number] ([Source], [Year])" format throughout',
            content: 'Firms using structured pre-bid intelligence win 34% more bids than those relying on estimator experience alone (Grata, 2026).',
            why: 'The Princeton GEO paper identifies "statistics and citations" as one of the top content strategies for generative engine optimization. A stat formatted with source in parentheses is independently citable. A stat without attribution is not.',
            source: 'Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'FAQ section: 4 questions matching actual search queries',
            content: 'Q: [Most-searched question from your ideal reader]? A: [Complete answer. 2-3 sentences. Self-contained.]',
            why: 'Each FAQ pair is an independent AI extraction opportunity. Questions written as literal search queries match the prompts AI engines receive. The answer should be complete without requiring the reader to read the surrounding article.',
            source: 'Frase.io FAQ Schema Research + LLMRefs GEO Guide',
            sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Headline states a specific claim (not a question or vague topic)', source: 'Position.digital AI SEO Statistics, March 2026', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
          { text: 'First sentence of the article is citable on its own', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Every stat formatted: "[Number] ([Source], [Year])"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'At least one numbered list with 5 or more items', source: 'Wix Studio AI Search Lab, March 2026', sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms' },
          { text: 'SME quote includes full name and title (no "a spokesperson said")', source: 'Wellows AI Content Research + Onely E-E-A-T Guide', sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/' },
          { text: 'FAQ section with 4 questions written as actual search queries', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Each FAQ answer is self-contained (complete without reading the article)', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
          { text: 'Author name and title included (named authorship is E-E-A-T signal)', source: 'Semrush AI Optimization Guide, March 2026', sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/' },
          { text: 'Deep link to specific resource page (not homepage)', source: 'Stridec AI SEO Internal Linking', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
          { text: 'Average sentence length: 10-15 words', source: 'Notified AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'No hedge language: no "it depends," "may wish to," "in today\'s landscape"', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
        ],
      },
    ],
  },
  {
    id: 'press-releases',
    name: 'Press Releases',
    formats: [
      {
        id: 'editorial',
        name: 'Editorial / Feature',
        subtitle: '45.5% of informational query citations. Long-form authority format.',
        badge: 'Most Cited (Info)',
        badgeColor: 'bg-purple-100 text-purple-800',
        keyStat: 'Articles and editorial features capture 45.5% of all informational query citations. For informational intent, this format outperforms every other type. The earned media version (placed in third-party publications) generates 239% median lift in AI citation visibility over brand-owned equivalents (Stacker/Scrunch via AuthorityTech, March 2026).',
        keyStatSource: 'Wix Studio AI Search Lab + AuthorityTech citing Stacker/Scrunch, March 2026',
        keyStatUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
        copyTemplate: PR_EDITORIAL_TEMPLATE,
        exampleTitle: 'Grata AI Notice: "Full Market Visibility Is Crucial for Winning Deals"',
        exampleSource: 'Grata private company intelligence, PE dealmaker market',
        exampleBody: PR_EDITORIAL_EXAMPLE,
        template: [
          {
            label: 'Headline: Keyword-led. Declarative. 12 words or fewer. No em-dashes.',
            content: '"Full Market Visibility Is Crucial for Winning Deals: What PE Firms Need to Know Now"',
            why: 'AI engines extract the headline as the primary attribution anchor. A declarative headline containing the core claim becomes the "According to [source], [headline]" citation pattern. Tease headlines ("The Truth About X") have no extractable claim. Source attribution requires a specific statement to attribute.',
            source: 'Notified AI Format Guide + Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search',
          },
          {
            label: 'Bridge paragraph: Market context + one sourced stat',
            content: 'The private markets data problem has accelerated. As the number of PE-backed companies has tripled over the past decade, [context]. [Stat] ([Source], [Year]).',
            why: 'Syndicated press releases earn just 0.04% of AI citations because they lack context and sourced data (BuzzStream via ALM Corp, March 2026). Adding market context and sourced stats immediately differentiates AI-ready editorial releases from standard wire releases.',
            source: 'BuzzStream/Citation Labs via ALM Corp, March 2026',
            sourceUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/',
          },
          {
            label: 'SME quote: Full name, title, specific claim in 15-25 words',
            content: 'According to [Full Name], [Title] at [Company], "[Specific claim. 15-25 words. No corporate speak.]"',
            why: 'Wellows found 100% of top-cited AI content shows visible expert credentials. Named SME quotes provide an attribution anchor for AI engines. The quote must contain a specific, citable claim, not generic encouragement.',
            source: 'Wellows AI Content Research (2025) + Onely E-E-A-T Guide',
            sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/',
          },
          {
            label: 'Numbered HOW IT WORKS section: 3-5 items',
            content: '1. [Process step]: [One sentence with specific detail]. 2. [Step]: [Detail]. 3. [Step]: [Detail].',
            why: 'Listicle and numbered-list formats capture 43.8% of ChatGPT citations (Ahrefs via Position.digital, March 2026). Even in editorial releases, numbered sections create discrete extraction points. Each numbered item is an independent citation opportunity.',
            source: 'Ahrefs via Position.digital, March 2026',
            sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
          },
          {
            label: 'FAQ section: 5 questions matching buyer search queries',
            content: 'Q: [Actual buyer search query]? A: [Complete, self-contained answer. 2-3 sentences.]',
            why: 'FAQ pairs are the highest-density citation extraction zone in an editorial release. Each pair is an independent extraction opportunity for AI engines answering related queries. Questions should match the exact language buyers use in search.',
            source: 'Frase.io FAQ Research + LLMRefs GEO Guide',
            sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Headline is declarative (states a specific claim, not a topic or question)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Subhead adds a specific second claim (not a restatement of the headline)', source: 'Notified AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Bridge paragraph includes one sourced stat with "[Number] ([Source], [Year])" format', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'SME quote: full name, title, 15-25 words, specific claim (not generic praise)', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: 'Metric appears in the first sentence of the paragraph it belongs to', source: 'Position.digital AI SEO Statistics', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
          { text: 'Numbered HOW IT WORKS section with 3-5 items', source: 'Ahrefs + LLMRefs GEO Guide', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
          { text: '5 FAQ pairs at end, each question written as a literal buyer search query', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Each FAQ answer is self-contained (complete without reading the release)', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
          { text: 'Deep link in About section goes to specific page (not homepage)', source: 'Stridec AI SEO Internal Linking', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
          { text: 'Published on permanent newsroom URL, AI-crawlable (no paywall)', source: 'ACCESS Newswire + GlobeNewswire AI Era Guide', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
        ],
      },
      {
        id: 'listicle',
        name: 'Listicle',
        subtitle: '43.8% of all ChatGPT citations. The most citeable format by volume.',
        badge: 'Most Citeable',
        badgeColor: 'bg-green-100 text-green-800',
        keyStat: '"Best X" listicles account for 43.8% of all ChatGPT page type citations (Ahrefs via Position.digital, March 2026). For commercial-intent queries, listicles capture 40.9% of citations, nearly double any other format. Wix Studio analysis of 75,000 AI answers confirmed listicles lead all formats at 21.9% overall citation share.',
        keyStatSource: 'Ahrefs via Position.digital + Wix Studio AI Search Lab, March 2026',
        keyStatUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
        copyTemplate: PR_LISTICLE_TEMPLATE,
        exampleTitle: 'Fieldline Listicle: "6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs"',
        exampleSource: 'Fieldline pre-bid intelligence, construction industry',
        exampleBody: PR_LISTICLE_EXAMPLE,
        template: [
          {
            label: 'Headline: [NUMBER] [Nouns] [Separating/Driving/Defining] [Audience] [From/In] [Context]',
            content: '"6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs From the Field"',
            why: 'The listicle headline structure is the most AI-citable format for commercial queries. "Best X" and "[Number] [things that do Y]" patterns match the query format AI engines receive. The headline signals: there is a specific number of items, they are differentiated (separating), and there is a comparison point (field).',
            source: 'Ahrefs via Position.digital, March 2026 + Wix Studio AI Search Lab',
            sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
          },
          {
            label: 'KEY FACTS block: 5 numbered stats, each with source in parentheses',
            content: '1. [Stat] ([Source], [Year]). 2. [Stat] ([Source], [Year]). 3. [Stat] ([Source], [Year]).',
            why: 'The KEY FACTS block is the highest-density AI extraction zone in a listicle press release. Each fact is an independent citation opportunity. The parenthetical source format is the specific pattern AI engines recognize as attributable data. Five facts creates five separate citation hooks.',
            source: 'Princeton GEO Paper (KDD 2024) + Notified AI Format Guide',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'Each list item: Bold title + 2-3 sentences. Metric in the first sentence.',
            content: '**[Item Title]**\n[Metric or specific detail in sentence 1.] [Example or mechanism in sentence 2.] [Additional context in sentence 3 if needed.]',
            why: 'Each bold titled item in the list is a discrete citation unit. AI engines extract named items with their descriptions. Putting the metric in the first sentence of each item ensures it is captured even when partial extraction occurs.',
            source: 'Wix Studio AI Search Lab, March 2026',
            sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
          },
          {
            label: 'SME quote placed inside one list item (not at the end)',
            content: 'According to [Full Name], [Title], "[Quote that adds insight to this specific item. 15-25 words.]"',
            why: 'Embedding the SME quote inside a specific list item ties the attribution to a concrete claim. A quote at the bottom of a listicle is less citable than one anchored to a specific item. The attribution context (who said it, about what specifically) makes the quote independently extractable.',
            source: 'Princeton GEO Paper (KDD 2024) + Wellows AI Content Research',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: '"What These Patterns Reveal" synthesis section',
            content: '[2-3 sentences synthesizing the common thread across all items. AI-extractable as standalone insight.] "[SME quote summarizing the pattern.]"',
            why: 'AI engines look for synthesized insights that answer "what does all this mean" queries. The synthesis section serves this function. Written as a standalone insight, it creates a second extraction point above and beyond the individual list items.',
            source: 'LLMRefs GEO Guide + Notified AI Format Guide',
            sourceUrl: 'https://llmrefs.com/generative-engine-optimization',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Headline: [NUMBER] [Topic Nouns] [Verb]-ing [Audience] [From/In] [Context]', source: 'Ahrefs + Wix Studio AI Search Lab, March 2026', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
          { text: 'KEY FACTS block: 5 numbered stats, each with source in parentheses', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Each list item has a bold title (not just a number)', source: 'Wix Studio AI Search Lab, March 2026', sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms' },
          { text: 'Each item: metric or specific detail in the first sentence', source: 'Position.digital AI SEO Statistics', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
          { text: 'SME quote embedded inside a specific list item (not at document end)', source: 'Princeton GEO Paper + Wellows Research', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: '"What These Patterns Reveal" synthesis section present', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
          { text: '5 FAQ pairs at end, each question is a literal buyer search query', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Third-party editorial listicles noted: third-party listicles earn 80.9% of citations in professional services vs. 19.1% for self-promotional lists', source: 'Wix Studio AI Search Lab, March 2026', sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms' },
          { text: 'Published on permanent newsroom URL, AI-crawlable', source: 'ACCESS Newswire + GlobeNewswire AI Era Guide', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
        ],
      },
      {
        id: 'news',
        name: 'News / Announcement',
        subtitle: 'Product launches, partnerships, milestones. Structured for AI extraction.',
        badge: 'Time-Sensitive',
        badgeColor: 'bg-yellow-100 text-yellow-800',
        keyStat: 'Direct wire service URLs (PRNewswire, GlobeNewswire) earn 0.21% of AI citations. Syndicated news republished on MSN and Yahoo earns 0.04%. Original newsroom pages with full context and FAQ sections perform significantly better than wire-only distribution. (BuzzStream/Citation Labs via ALM Corp, March 2026)',
        keyStatSource: 'BuzzStream/Citation Labs via ALM Corp, March 2026',
        keyStatUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/',
        copyTemplate: `FOR IMMEDIATE RELEASE

[HEADLINE: Specific announcement. Who did what. 10-12 words. No em-dashes.]
[SUBHEAD: The "so what" — why this announcement matters to the audience.]

[CITY, STATE, DATE] — [Company Name], [one-line descriptor], today announced [what was announced]. [In one sentence: the specific change, deal, product, or milestone and its primary significance.]

[BRIDGE: 2-3 sentences of context. What was the situation before? Why is this announcement happening now? Include one sourced market stat if relevant.]

[DETAIL SECTION 1: The announcement details]
[What specifically changed, launched, or was agreed to. 3-4 sentences. Specific details, not marketing language.]

"[Quote from primary SME or company leader. 15-25 words. Specific statement about the announcement, not generic excitement.]" said [Full Name], [Title].

[DETAIL SECTION 2: Impact or next steps]
[What happens next? Who is affected? What can customers or partners do with this? 2-3 sentences.]

"[Quote from second party or second SME, if applicable. 15-25 words.]" said [Full Name], [Title].

## Key Details

- [Fact 1]: [Specific detail with number or date]
- [Fact 2]: [Specific detail]
- [Fact 3]: [Specific detail]
- [Fact 4]: [Availability, pricing, or access information]
- [Fact 5]: [Next milestone or timeline]

## Frequently Asked Questions

**Q: What exactly changed or was announced?**
A: [Complete, plain-language answer. 2-3 sentences. No jargon.]

**Q: Who is affected and how?**
A: [Complete answer. Specific audience and specific impact.]

**Q: When is this available or effective?**
A: [Complete answer. Specific date or timeline.]

**Q: How does this compare to what existed before?**
A: [Complete answer. Before vs. after in plain language.]

**Q: What happens next?**
A: [Complete answer. Next milestone or step.]

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator.] Learn more at [yourdomain.com/specific-page].

Media Contact:
[Name] | [Title] | [email] | [phone]

[yourdomain.com/newsroom/[slug]]`,
        exampleTitle: 'Grata News Release: "Grata Expands Private Company Coverage to 12 Million Entities"',
        exampleSource: 'Product expansion announcement, Grata platform',
        exampleBody: `FOR IMMEDIATE RELEASE

Grata Expands Private Company Coverage to 12 Million Entities With Real-Time Firmographic Updates
New coverage tier provides deal teams with continuous data updates on headcount, leadership, and ownership signals across all 50 US states.

NEW YORK, NY, March 2026 — Grata, the private company intelligence platform for dealmakers, today announced the expansion of its database to 12 million private company entities with continuous firmographic updates. Previously, Grata's standard tier updated company data quarterly. The new coverage tier delivers updates as signals are detected, typically within 72 hours of a material change.

Most private company intelligence platforms still operate on quarterly or annual update cycles. As deal timelines have compressed and intent signals have become more predictive of deal readiness, the window between when a company shows early signals and when it enters a formal process has narrowed significantly.

## What Changed

Grata's expanded coverage includes three new data layers not previously available on the standard tier: executive leadership changes tracked within 72 hours of LinkedIn and press detection, headcount velocity signals that identify companies growing or contracting at more than 15% annually, and M&A advisor relationship signals derived from filing and engagement data.

"Real-time coverage changes how deal teams operate," said Jordan Kessler, CEO of Grata. "They stop doing quarterly database refreshes and start monitoring their shortlist the way a trader monitors a position."

The expanded tier is available to all Grata enterprise customers and through direct sales for new accounts. Existing accounts on standard tiers retain their current data access and update schedule.

## Who Is Affected

Deal teams at PE firms, investment banks, and strategic acquirers with active sector monitoring programs will see the most immediate impact. Teams that currently re-run sector scans quarterly to catch changes can now rely on automated signal alerts instead. The expanded tier is particularly relevant for deal teams targeting sectors with high owner turnover or active M&A calendars.

"We built this for firms that are already monitoring 500 or more companies in a given sector," said Kessler. "The previous update cycle created gaps. This closes them."

## Key Details

- Coverage: 12 million private companies, all 50 US states
- Update frequency: Within 72 hours of a detected material change
- New signal types: Leadership changes, headcount velocity, M&A advisor engagement
- Availability: Existing enterprise customers as of March 15, 2026; new accounts through direct sales
- Previous update cycle: Quarterly (unchanged for standard tier)

## Frequently Asked Questions

**Q: What specifically changed about Grata's database coverage?**
A: Grata expanded from 10 million to 12 million private company entities and added real-time firmographic updates. Previously, company data updated quarterly. The new tier detects and processes material changes within 72 hours of occurrence.

**Q: Who benefits most from real-time firmographic updates?**
A: Deal teams with active monitoring programs tracking 100 or more companies see the most immediate benefit. The real-time updates eliminate the coverage gaps that occur between quarterly refresh cycles when leadership changes or headcount shifts happen.

**Q: What new signal types are included in the expanded coverage?**
A: The expanded tier adds three new signal types: executive leadership changes (within 72 hours), headcount velocity tracking (identifies 15%+ annual changes), and M&A advisor relationship signals derived from filing and engagement data.

**Q: Is the expanded coverage available to existing Grata customers?**
A: Yes. Existing enterprise customers have access as of March 15, 2026. Customers on standard tiers retain their current access and update schedule. Upgrades are available through the Grata customer success team.

**Q: What is the difference between the standard tier and the expanded coverage tier?**
A: The standard tier updates company data quarterly and covers 10 million entities. The expanded tier updates within 72 hours of a detected change, covers 12 million entities, and includes the three new signal types described above.

About Grata
Grata is the private company intelligence platform for dealmakers. The platform indexes over 12 million private companies to help PE firms, investment banks, and strategic acquirers find, research, and track acquisition targets. Learn more at grata.com/coverage.

Media Contact:
[Name] | Communications | press@grata.com

grata.com/newsroom/coverage-expansion-march-2026`,
        template: [
          {
            label: 'Headline: Who did what, in 10-12 words. Specific and declarative.',
            content: '"Grata Expands Private Company Coverage to 12 Million Entities With Real-Time Firmographic Updates"',
            why: 'News announcement headlines must state the specific news in the headline itself. AI engines extract headlines as the primary citation anchor for news. A vague headline ("Grata Announces Major Platform Upgrade") has no citation value because there is no specific extractable claim.',
            source: 'Notified AI Format Guide + Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search',
          },
          {
            label: 'Key Details bullet block: 5 facts with specific numbers or dates',
            content: '- Coverage: [Number] entities\n- Update frequency: Within [time] of [trigger]\n- New features: [List]\n- Availability: [Date and terms]\n- Prior state: [What existed before]',
            why: 'Bullet-formatted key details blocks are extracted by AI engines as structured facts. Each bullet with a specific number or date is a discrete citation opportunity. Generalized descriptions ("significant expansion," "improved timeline") have no citation value.',
            source: 'Princeton GEO Paper + Position.digital AI SEO Statistics',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'Before/after context: What was the situation before this announcement?',
            content: 'Previously, [Company] [old state]. The new [product/service/policy] [new state].',
            why: 'News releases that provide before/after context are more citable because they create standalone understanding. AI engines answering "what changed at [Company]?" need the before/after comparison to construct an accurate answer. A release that states only the new state is incomplete.',
            source: 'Notified AI Format Guide + LLMRefs GEO Guide',
            sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Headline states the specific announcement (not a tease)', source: 'Notified AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'First paragraph: who, what, why it matters — in that order', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Before/after context included (what existed before this announcement)', source: 'Notified AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Key Details bullet block: 5 facts with specific numbers or dates', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'SME quote: full name, title, specific statement about the announcement', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: '5 FAQ pairs at end, including "what exactly changed?" and "who is affected?"', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Published on permanent newsroom URL, AI-crawlable', source: 'ACCESS Newswire + GlobeNewswire AI Era Guide', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
        ],
      },
      {
        id: 'data',
        name: 'Data / Research Release',
        subtitle: 'Stat is the headline. Methodology section is the credibility signal.',
        badge: 'High Credibility',
        badgeColor: 'bg-purple-100 text-purple-800',
        keyStat: 'GEO strategies that include statistics and citations boost AI visibility by up to 40%. Including statistics is one of the top-performing optimization strategies across all tested content types (Princeton/IIT Delhi, KDD 2024). Data releases with methodology sections earn higher citation rates because AI engines treat the methodology as a credibility signal.',
        keyStatSource: 'Princeton GEO Paper, KDD 2024',
        keyStatUrl: 'https://arxiv.org/abs/2311.09735',
        copyTemplate: `FOR IMMEDIATE RELEASE

[NUMBER]% of [Audience] [Finding — specific, verifiable claim]
[Subhead: Names the study, sample size, and one additional finding.]

[CITY, STATE, DATE] — [Company Name], [one-line descriptor], today released findings from [study name]. The [N]-respondent study found that [primary finding in one sentence]. [Secondary finding in the same sentence or the next.]

METHODOLOGY

- Study type: [Survey / Analysis / Platform data review]
- Sample: [N] [respondent type]
- Date collected: [Month Year]
- Selection criteria: [Who qualified to participate or be included]
- Margin of error: [If applicable]
- Third-party audit: [If applicable]

KEY FINDINGS:
1. [Primary stat] ([Company/Source], [Year]).
2. [Second stat] ([Source], [Year]).
3. [Third stat] ([Source], [Year]).
4. [Fourth finding or pattern] ([Source], [Year]).
5. [Fifth finding] ([Source], [Year]).

[BRIDGE: 2-3 sentences connecting the data to the numbered list. Why do these five findings matter together?]

## What the Data Shows

[Narrative section expanding on the most important 2-3 findings. 3-4 paragraphs. Each data reference includes parenthetical source.]

According to [Full Name], [Title] at [Company Name], "[Quote interpreting the data — not restating it. 15-25 words.]"

## How to Act on This Data

1. [Actionable recommendation]: [One sentence tying to a specific finding.]
2. [Recommendation]: [One sentence.]
3. [Recommendation]: [One sentence.]
4. [Recommendation]: [One sentence.]
5. [Recommendation]: [One sentence.]

## Frequently Asked Questions

**Q: What did this study find?**
A: [Complete summary. 3 sentences. Lead with the primary stat.]

**Q: Who was included in this study?**
A: [Complete answer: sample size, respondent type, selection criteria.]

**Q: How was this study conducted?**
A: [Complete answer: methodology, date range, collection method.]

**Q: How does this data compare to prior research on this topic?**
A: [Complete answer: context, change over time if available.]

**Q: What should [target audience] do with this data?**
A: [Complete answer: 2-3 specific recommendations.]

About [Company Name]
[Company Name] [does what] for [who]. The full report is available at [yourdomain.com/research/[slug]].

Media Contact:
[Name] | [email] | [phone]

[yourdomain.com/newsroom/[slug]]`,
        exampleTitle: 'Grata Data Release: "67% of PE Firms Miss More Than Half Their Target Market"',
        exampleSource: 'Grata 2026 Dealmaker Intelligence Report format',
        exampleBody: `FOR IMMEDIATE RELEASE

67% of PE Firms Miss More Than Half Their Target Market Due to Private Company Data Gaps
Grata analysis of 1,200 sector scans across 40 states finds top-quartile firms identify 3.2x more qualified targets than the field.

NEW YORK, NY, March 2026 — Grata, the private company intelligence platform for dealmakers, today released findings from its 2026 Dealmaker Intelligence Report. The analysis of 1,200 PE sector scans across 40 states found that 67% of deal teams are systematically missing more than half of the qualified targets in their target sectors. Top-quartile firms that use full private company intelligence identify an average of 3.2x more qualified targets per sector scan.

METHODOLOGY

- Study type: Analysis of Grata platform usage data and sector scan outputs
- Sample: 1,200 sector scans conducted by Grata platform users across 40 US states
- Date collected: January 2025 through February 2026
- Selection criteria: Sector scans with at least 50 qualifying company records and a defined geographic scope
- Third-party validation: Scan results cross-referenced against Grata's full entity index to calculate coverage rate

KEY FINDINGS:
1. 67% of PE deal teams miss more than half their qualified targets in a standard sector scan (Grata, 2026).
2. Top-quartile GCs analyze structured pre-bid intelligence on 89% of projects. The field average is 31% (Grata analysis, 2026).
3. Standard commercial databases cover fewer than 40% of relevant private companies in most sectors (Grata, 2026).
4. Pre-bid site assessments incorporating local labor market data reduce change order rates by 22% (Grata analysis, 2026).
5. Firms using full private company coverage close bids 18 days faster on average than those rebuilding context from scratch per project (Grata, 2026).

These five findings share a common thread: the gap between top-quartile PE performance and the field is primarily a data infrastructure gap, not a research effort gap. Firms that close the coverage gap do not just find more deals. They find better ones.

## What the Data Shows

The 67% figure represents the share of deal teams whose sector scan coverage rate, measured as a percentage of the full qualified universe, falls below 50%. In practical terms: a firm that believes it has scanned 200 qualified companies in a sector has typically seen fewer than 80 of the 500+ companies that match their criteria.

The gap is not evenly distributed. Sectors with high concentrations of bootstrapped, founder-owned companies show the largest coverage gaps. B2B software, healthcare services, and light manufacturing consistently show coverage rates below 35% in standard database scans.

According to Jordan Kessler, CEO of Grata, "The firms that struggle most are the ones that have never audited their coverage gap. They are optimizing their outreach, their criteria, their deal process, without ever questioning whether the universe they are searching actually represents the market."

Top-quartile firms differ from the field on one primary dimension: they have built data infrastructure that indexes the full private company universe rather than accepting the subset covered by traditional databases.

## How to Act on This Data

1. Run a coverage audit: Compare your existing database scan to a full private company index scan with identical parameters. The gap in company count is your coverage deficit.
2. Prioritize intent signals over firmographic match alone: Companies showing deal readiness signals 12-18 months before a process are more valuable pipeline additions than companies that merely fit the size and sector criteria.
3. Build continuous monitoring: Static quarterly scans miss companies that cross into your criteria range between refresh cycles. Automated monitoring eliminates this gap.
4. Expand your definition of the target universe: If your database only covers companies with institutional capital or press coverage, your sector maps are incomplete.
5. Benchmark coverage rate annually: Coverage rate should be a formal metric alongside deal count and win rate in your origination reporting.

## Frequently Asked Questions

**Q: What did this study find about PE deal sourcing coverage gaps?**
A: The study found that 67% of PE deal teams miss more than half of the qualified targets in their target sectors due to database coverage limitations. Standard commercial databases cover fewer than 40% of relevant private companies in most sectors. Top-quartile firms using full private company intelligence identify an average of 3.2x more qualified targets per sector scan.

**Q: Who was included in this analysis?**
A: The analysis covered 1,200 sector scans conducted by Grata platform users across 40 US states between January 2025 and February 2026. Scans were included if they had at least 50 qualifying company records and a defined geographic scope.

**Q: How was this study conducted?**
A: Grata analyzed sector scan outputs from platform users and cross-referenced results against its full entity index to calculate each scan's coverage rate. Coverage rate is defined as the percentage of companies matching the scan's criteria that appeared in the scan results.

**Q: How does this compare to prior research on PE deal sourcing?**
A: Prior research has documented database coverage limitations in aggregate, but this is the first study to quantify the gap using a large sample of actual deal team scan behavior and a standardized coverage rate methodology. The 67% figure represents a more specific measure than previous estimates.

**Q: What should PE deal teams do with this data?**
A: The most immediate action is to run a coverage audit by comparing your existing database scan to a full private company index scan. This typically takes less than two hours and produces a specific coverage rate figure. From there, the data supports a decision about whether to augment existing database access or replace it.

About Grata
Grata is the private company intelligence platform for dealmakers. The full 2026 Dealmaker Intelligence Report is available at grata.com/research/2026-dealmaker-intelligence-report.

Media Contact:
[Name] | press@grata.com

grata.com/newsroom/2026-dealmaker-intelligence-report`,
        template: [
          {
            label: 'Headline: The primary stat IS the headline',
            content: '"67% of PE Firms Miss More Than Half Their Target Market Due to Private Company Data Gaps"',
            why: 'AI citation systems extract the headline of data releases as the primary finding. When the stat is in the headline, it becomes the first and most extracted element. Vague data release headlines ("New Research Shows Private Equity Firms Have Data Challenges") have no citation value.',
            source: 'Princeton GEO Paper (KDD 2024) + Notified AI Format Guide',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'METHODOLOGY section: N, respondent criteria, date range, collection method',
            content: 'Sample: [N] [type]. Date collected: [Month Year]. Selection criteria: [Who qualified]. Margin of error: [If applicable].',
            why: 'AI citation systems prioritize credible sources. A methodology section with sample size, respondent criteria, and data collection method signals that findings are verifiable. The Princeton GEO study identifies "statistics with verification signals" as a top citation strategy. A missing methodology reduces citation probability.',
            source: 'Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'KEY FINDINGS: 5 numbered stats, each with source attribution in parentheses',
            content: '1. [Stat] ([Source], [Year]). 2. [Stat] ([Source], [Year]). 3. [Stat]. 4. [Stat]. 5. [Stat].',
            why: 'Numbered key findings are the highest-density AI extraction zone in a data release. Each finding is an independent citation opportunity. The parenthetical attribution makes each stat independently citable: "43% of respondents [found X] (Source, 2026)." Without the parenthetical, the stat is not citable.',
            source: 'Princeton GEO Paper (KDD 2024) + PR Newswire AI Era Guide',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: '"How to Act on This Data" section: 5 numbered recommendations',
            content: '1. [Action]: [One sentence tied to a specific finding]. 2. [Action]. 3. [Action]. 4. [Action]. 5. [Action].',
            why: 'AI engines answering "what should X do about Y" queries look for structured, actionable content. A numbered action section signals to AI that this document answers implementation queries, not just diagnostic ones. This expands citation surface to "how to" queries.',
            source: 'Notified AI Format Guide + LLMRefs GEO Guide',
            sourceUrl: 'https://llmrefs.com/generative-engine-optimization',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Headline states the primary stat (not a tease or vague claim)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Subhead identifies the study, sample size, and one additional finding', source: 'Notified AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'METHODOLOGY section: N, respondent criteria, date range, collection method', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: '5 KEY FINDINGS, each with the stat and source in the same bullet', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Stats formatted: "[Number] ([Source], [Year])" in the findings list', source: 'Princeton GEO Paper', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'SME quote interprets the data (does not restate it). Placed in narrative section.', source: 'Princeton GEO Paper + Onely LLM Guide', sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/' },
          { text: '"How to Act on This Data" section with 5 numbered recommendations', source: 'Notified AI Format + LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
          { text: '5 FAQ pairs at end, including "how was this study conducted?"', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Full report available at permanent URL (linked from the release)', source: 'Stridec AI SEO Internal Linking', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
          { text: 'Published on permanent newsroom URL, AI-crawlable (no paywall)', source: 'ACCESS Newswire + GlobeNewswire AI Era Guide', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
        ],
      },
      {
        id: 'qa',
        name: 'Expert Q&A',
        subtitle: 'SME-driven. Q&A pairs are the most direct AI citation unit.',
        badge: 'High Attribution',
        badgeColor: 'bg-rose-100 text-rose-800',
        keyStat: '100% of top-cited AI content demonstrates clear E-E-A-T signals, including visible expert credentials and author expertise. LLMs prioritize content with "original research, expert perspectives, specific data, and consistent brand presence" (Wellows, 2025; Onely, 2025). Named expert Q&A is the most direct way to create AI-citable attribution anchors.',
        keyStatSource: 'Wellows AI Content Research (2025) + Onely LLM Optimization Guide (Nov 2025)',
        keyStatUrl: 'https://www.onely.com/blog/llm-friendly-content/',
        copyTemplate: `FOR IMMEDIATE RELEASE

[Expert Full Name] on [Topic]: "[Specific Opinionated Claim in 10-12 Words]"
[Subhead: One sentence naming the expert, their organization, and one reason their perspective is authoritative.]

[CITY, STATE, DATE] — [Company Name] today published expert commentary from [Full Name], [Title], on [topic]. [One sentence of context: why is this person speaking on this topic right now?]

About [Expert Full Name]
[Full Name] [is/has been] [Title] at [Company]. [Specific experience: years, deals, outcomes, sector focus.] [One credential. LinkedIn: linkedin.com/in/[handle].]

---

Q: [Most fundamental question about this topic. What your ideal reader types into Google first.]
[Full Name]: [Answer. Start with the core claim. 3-5 sentences. First-person voice. Specific, not generic. No hedge language.]

Q: [How does X work? Process or mechanism question.]
[Full Name]: [Answer. Concrete explanation of mechanism. 3-5 sentences. One number or specific example included.]

Q: [What should [audience] do about X? Action-oriented question.]
[Full Name]: [Answer. 2-4 specific steps or recommendations. 3-5 sentences.]

Q: [What are you seeing right now? Current market observation question.]
[Full Name]: [Answer. First-person observation grounded in specific data or experience. 3-5 sentences.]

Q: [What do most [audience] get wrong about X?]
[Full Name]: [Answer. Direct, confident. Name the specific misconception. 3-5 sentences.]

Q: [Where is this heading? Forward-looking question.]
[Full Name]: [Answer. Specific prediction with reasoning. 3-5 sentences. No "time will tell."]

---

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator.] Learn more at [yourdomain.com/specific-page].

Media Contact:
[Name] | [email]

[yourdomain.com/newsroom/[slug]]`,
        exampleTitle: 'Grata Q&A: "Dan Kroeger on Pre-Bid Intelligence: Win Rate Is a Lagging Indicator"',
        exampleSource: 'Expert commentary format, Grata/dealmaker market',
        exampleBody: `FOR IMMEDIATE RELEASE

Dan Kroeger on Private Company Intelligence: "Win Rate Is a Lagging Indicator. Data Coverage Is the Leading One."
Dan Kroeger, Head of Business Development at Grata, explains how PE firms measure the wrong output and what changes when they close the coverage gap.

NEW YORK, NY, March 2026 — Grata today published expert commentary from Dan Kroeger, Head of Business Development, on how PE firms can identify and close the coverage gap in their deal sourcing infrastructure.

About Dan Kroeger
Dan Kroeger has spent 12 years in private markets, including roles at Lincoln International and two lower middle market PE firms, before joining Grata to lead business development. He works directly with deal teams at PE firms, investment banks, and strategic acquirers to audit coverage gaps and implement full private company intelligence programs. LinkedIn: linkedin.com/in/dankroeger.

---

Q: What is private company intelligence, and why should deal teams care about it now?
Kroeger: Private company intelligence is structured data about privately held companies that commercial databases do not capture. Most databases index companies that have raised institutional capital or been covered by the financial press. Private company intelligence platforms like Grata index the full universe, including the bootstrapped and founder-owned companies that make up the majority of qualified targets in most sectors. Deal teams should care now because the firms winning the best deals are already using it. The coverage gap between those firms and the field is widening.

Q: How does private company intelligence actually work at the data layer?
Kroeger: The core mechanism is AI-powered entity identification, which surfaces companies by crawling and classifying unstructured data across the web rather than relying on companies to be listed in a structured directory. On top of entity identification, the platform runs continuous enrichment, pulling firmographic signals like headcount velocity, leadership changes, and financial patterns from multiple sources. These signals update continuously rather than quarterly. The result is a data layer that reflects what companies are doing now, not what they were doing when someone last updated the database.

Q: What should a PE deal team do if they suspect they have a coverage gap?
Kroeger: Run an audit. Take your standard sector filters, run a scan in your existing database, and then run the same scan in a full private company index with identical parameters. The gap in company count is your coverage deficit. For most firms, this is the most surprising hour they will spend on deal sourcing operations. Once you know your coverage rate, you can make an informed decision about whether to augment or replace your existing data infrastructure.

Q: What patterns are you seeing right now among deal teams that have closed the coverage gap?
Kroeger: The most consistent change I see is a shift from reactive to predictive deal sourcing. When firms have continuous intent signal monitoring across their full target universe, they stop waiting for brokers to call and start identifying deal readiness windows 12 to 18 months before a company enters a formal process. The deal teams doing this consistently are getting to the best companies first, often before those companies have decided to run a formal process.

Q: What do most PE deal teams get wrong about database coverage?
Kroeger: They assume their database reflects the market. The database reflects what has been indexed by that vendor, which is almost always a subset of the market. The larger mistake is optimizing the wrong variable: most firms invest in better search techniques, better outreach, better deal terms, without ever auditing whether the universe they are searching actually represents the available opportunity. If you are searching 40% of the market, searching it more efficiently still only gets you 40% of the market.

Q: Where is private company intelligence headed in the next 24 months?
Kroeger: The next layer is predictive deal readiness modeling. Right now, we identify intent signals as they appear. The next step is predictive scoring: this company is likely to approach a process in the next 12 to 18 months, based on the combination of signals we are seeing. The firms that adopt predictive modeling early will have a structural advantage in getting to the best deals first. The ones that adopt it late will spend 18 months catching up.

---

About Grata
Grata is the private company intelligence platform for dealmakers. The platform indexes over 10 million private companies to help PE firms, investment banks, and strategic acquirers find, research, and track acquisition targets. Learn more at grata.com/private-equity.

Media Contact:
press@grata.com

grata.com/newsroom/dan-kroeger-qa-coverage-gap`,
        template: [
          {
            label: 'Headline: "[Expert Name] on [Topic]: \'[Specific opinionated claim]\'\"',
            content: '"Dan Kroeger on Private Company Intelligence: \'Win Rate Is a Lagging Indicator. Data Coverage Is the Leading One.\'"',
            why: 'The Q&A headline establishes the expert as the attributed source for a specific claim. AI systems cite this as "[Expert Name] said..." followed by the claim. The named attribution in the headline is the citation anchor. A generic headline ("Expert Shares Insights") has no citation value.',
            source: 'Princeton GEO Paper + Onely LLM Content Guide',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'Credential block: Specific years, deals, outcomes, LinkedIn URL',
            content: '[Name] has spent [X] years... including roles at [specific companies]... LinkedIn: linkedin.com/in/[handle].',
            why: 'Wellows found 100% of top-cited AI content shows visible expert credentials. The credibility block before the Q&A establishes why this person is qualified to speak on this topic. Specific credentials (years, companies, outcomes) are stronger E-E-A-T signals than generic titles.',
            source: 'Wellows AI Content Research (2025) + Onely LLM-Friendly Content Guide',
            sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/',
          },
          {
            label: 'Q&A format: 6 questions matching actual buyer search queries',
            content: 'Q: [Actual search query]?\n[Expert]: [Answer. First claim in sentence 1. Specific number or example in sentence 2. 3-5 sentences total.]',
            why: 'Each Q&A pair is a standalone citation opportunity. When AI receives a query matching the Q, it can cite the corresponding A verbatim. First-person answers that open with the expert\'s core claim are the most directly extractable format in AI content.',
            source: 'Frase.io FAQ Research + Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
          },
          {
            label: 'Answers: Start with the core claim, specific number in sentence 2, 3-5 sentences',
            content: '[Expert]: [Specific claim in sentence 1.] [Number or concrete example in sentence 2.] [3-5 sentences total. First-person.]',
            why: 'AI extracts position statements from the beginning of answer text. An answer that opens with the expert\'s core claim is citable immediately. An answer that builds to its point over 4 sentences before landing it will have lower extraction probability.',
            source: 'Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },          { text: 'Headline: "[Expert Name] on [Topic]: \'[Specific claim]\'"', source: 'Princeton GEO Paper + Onely Guide', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Credential block before Q&A: years, specific companies, outcomes, LinkedIn URL', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: '6 Q&A pairs minimum, each question matching an actual buyer search query', source: 'Frase.io FAQ Research + LLMRefs GEO Guide', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Every answer opens with the expert\'s core claim (not with context or caveats)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Answers are 3-5 sentences in first-person voice', source: 'Princeton GEO Paper', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Zero hedge language: no "it depends," "may wish to," "in today\'s landscape"', source: 'Notified AI Format + LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
          { text: 'At least one answer includes a concrete number (deals, %, years, or dollar amount)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Published on permanent newsroom URL, AI-crawlable', source: 'ACCESS Newswire + BusinessWire AI Guide', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
        ],
      },
    ],
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Posts',
    formats: [
      {
        id: 'linkedin-post',
        name: 'LinkedIn Posts',
        subtitle: 'LinkedIn is the #2 most cited domain in AI search. Original posts outperform reshares by 4x.',
        badge: '#2 AI-Cited Domain',
        badgeColor: 'bg-blue-100 text-blue-800',
        keyStat: 'LinkedIn is the second most cited domain across ChatGPT Search, Perplexity, and Google AI Mode, appearing in 11% of AI responses on average. Long-form articles (500-2,000 words) and mid-length posts (50-299 words) account for the highest citation rates. 54-64% of cited posts focus on sharing knowledge or practical advice. (Semrush analysis of 89,000 LinkedIn URLs, Jan-Feb 2026)',
        keyStatSource: 'Semrush LinkedIn AI Visibility Study, March 2026',
        keyStatUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
        copyTemplate: LINKEDIN_TEMPLATE,
        exampleTitle: 'Grata LinkedIn Post: "Most PE firms think they have a comprehensive deal pipeline. They do not."',
        exampleSource: 'Grata private company intelligence, PE sector',
        exampleBody: LINKEDIN_EXAMPLE,
        template: [
          {
            label: 'Hook: Specific, counterintuitive, or data-backed first line. Under 20 words.',
            content: '"Most PE firms think they have a comprehensive deal pipeline. They do not."',
            why: 'LinkedIn posts get three lines before the "See more" cutoff. The first line determines whether the post is read. A specific, counterintuitive, or data-backed first line outperforms vague teasers. AI also uses the first line as the primary citation anchor for the post.',
            source: 'Semrush LinkedIn AI Visibility Study, March 2026',
            sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
          },
          {
            label: 'Content type: Educational or practical advice (54-64% of AI-cited posts)',
            content: 'Original insight or how-to content. No reshares, no announcements, no "excited to share" posts.',
            why: '54-64% of AI-cited LinkedIn posts focus on sharing knowledge or practical advice (Semrush, March 2026). Reshares are rarely referenced by AI. The citation pattern rewards original, educational content that a reader could act on.',
            source: 'Semrush LinkedIn AI Visibility Study, March 2026',
            sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
          },
          {
            label: 'Length: 500-2,000 words for articles, 50-299 words for posts',
            content: 'Long-form articles (500-2,000 words) or substantive mid-length posts (50-299 words). Not micro-posts or reshares.',
            why: 'Long-form LinkedIn articles generate the highest citation rate of any LinkedIn content type. Mid-length posts (50-299 words) are second. The Semrush study found these two length categories account for the largest share of AI citations. Posts under 50 words are cited at significantly lower rates.',
            source: 'Semrush LinkedIn AI Visibility Study, March 2026',
            sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the post', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Hook line: specific, counterintuitive, or data-backed. Under 20 words.', source: 'Semrush LinkedIn AI Visibility Study, March 2026', sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/' },
          { text: 'Content is original (not a reshare of someone else\'s post)', source: 'Semrush LinkedIn AI Visibility Study, March 2026', sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/' },
          { text: 'Content is educational or practical advice (not an announcement or promotion)', source: 'Semrush LinkedIn AI Visibility Study, March 2026', sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/' },
          { text: 'Length: 50+ words for posts, 500+ words for articles', source: 'Semrush LinkedIn AI Visibility Study, March 2026', sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/' },
          { text: 'Any stat included is formatted: "[Number] ([Source], [Year])"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'One CTA at end — question that invites response or link to longer content', source: 'Semrush LinkedIn AI Visibility Study, March 2026', sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/' },
          { text: 'Author is an active poster (5+ posts in 4 weeks = citation predictor)', source: 'Semrush LinkedIn AI Visibility Study, March 2026', sourceUrl: 'https://www.semrush.com/blog/linkedin-ai-visibility-study/' },
        ],
      },
    ],
  },
  {
    id: 'editorial-articles',
    name: 'Editorial Articles',
    formats: [
      {
        id: 'editorial-article',
        name: 'Editorial Articles',
        subtitle: 'Bylined thought leadership placed in third-party publications. Highest trust signal.',
        badge: '239% Citation Lift',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        keyStat: 'Distributing content through third-party news outlets produces a median 239% lift in AI citation visibility, with some cases reaching 325% (Stacker/Scrunch via AuthorityTech, March 2026). Brand web mentions correlate 3x more strongly with AI Overview visibility than backlinks (Ahrefs, via AuthorityTech, March 2026). Earned coverage beats brand-owned content for AI citations.',
        keyStatSource: 'AuthorityTech citing Stacker/Scrunch + Ahrefs, March 2026',
        keyStatUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations',
        copyTemplate: EDITORIAL_TEMPLATE,
        exampleTitle: 'Sarah Evans in The AI Journal: "The Real Reason AI Search Is Not Citing Your Content"',
        exampleSource: 'Zen Media AI visibility practice, B2B clients',
        exampleBody: EDITORIAL_EXAMPLE,
        template: [
          {
            label: 'Headline: Opinion-forward, author\'s name attached, specific argument',
            content: '"The Real Reason AI Search Is Not Citing Your Content"',
            why: 'Editorial articles earn the 239% citation lift because they carry the authority of the publication plus the credibility of the named author. The headline must state the argument, not the topic. "AI search visibility tips" is a topic. "The Real Reason AI Search Is Not Citing Your Content" is an argument.',
            source: 'AuthorityTech citing Stacker/Scrunch, March 2026',
            sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations',
          },
          {
            label: 'Opening: Argument in 2 sentences. No scene-setting, no throat-clearing.',
            content: 'Sentence 1: The core argument, stated plainly. Sentence 2: The immediate implication for the reader.',
            why: 'AI engines extract from the beginning of documents. 44.2% of LLM citations come from the first 30% of text (Position.digital, March 2026). An editorial article that opens with context-setting before stating its argument loses the citation window before making its point.',
            source: 'Position.digital AI SEO Statistics, March 2026',
            sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
          },
          {
            label: 'Evidence section: Every stat gets a parenthetical source',
            content: '"Only 44.3% of Google top-10 pages appear in any AI-generated answer (Semrush, February 2026)."',
            why: 'Editorial articles earn citation lift from third-party publication placement, but the content still needs the same structural elements as an AI Notice. Every stat with a parenthetical source creates an independent citation opportunity. Stats without attribution are not citable.',
            source: 'Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the article', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Headline states the specific argument (not just the topic)', source: 'AuthorityTech citing Stacker/Scrunch, March 2026', sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations' },
          { text: 'Opening 2 sentences state the argument (no scene-setting or preamble)', source: 'Position.digital AI SEO Statistics, March 2026', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
          { text: 'Author name and title in the byline (E-E-A-T signal)', source: 'Semrush AI Optimization Guide, March 2026', sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/' },
          { text: 'Every stat formatted: "[Number] ([Source], [Year])"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Named SME quote with full name and title (not anonymous)', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: 'FAQ section with 4+ questions written as literal search queries', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Author bio includes specific credentials, not generic title description', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: 'Published in third-party publication (not only on brand website)', source: 'AuthorityTech citing Stacker/Scrunch, March 2026', sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations' },
        ],
      },
    ],
  },
  {
    id: 'email-campaigns',
    name: 'Email Campaigns',
    formats: [
      {
        id: 'email',
        name: 'Email Campaigns',
        subtitle: 'High deliverability. Drives traffic to AI-citable long-form content.',
        badge: 'Traffic Driver',
        badgeColor: 'bg-indigo-100 text-indigo-800',
        keyStat: 'Email drives traffic to the long-form content that gets cited by AI. The citation loop: email drives a click, the reader lands on a listicle or FAQ page, that page gets cited by AI, AI drives new organic traffic. Email campaigns that link to specific, optimized content pages are part of the AI visibility flywheel. Specific subject lines outperform vague ones: "6 practices" beats "new insights" consistently.',
        keyStatSource: 'Internal analysis + AI visibility flywheel framework, March 2026',
        keyStatUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/',
        copyTemplate: EMAIL_TEMPLATE,
        exampleTitle: 'Grata Email: "Why 67% of PE firms miss their best deals"',
        exampleSource: 'Grata outbound email, PE deal team audience',
        exampleBody: EMAIL_EXAMPLE,
        template: [
          {
            label: 'Subject line: Specific claim or question. Under 50 characters.',
            content: '"Why 67% of PE firms miss their best deals" (42 chars)',
            why: 'Specific subject lines with numbers outperform vague ones consistently. The number creates a specific claim ("67%") that readers want to verify. Vague subject lines like "Important update for deal teams" have no extractable claim and lower open rates.',
            source: 'Email marketing best practices + AI citation architecture',
            sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/',
          },
          {
            label: 'Opening: First sentence earns attention with specific data or direct statement',
            content: 'No "Hope this email finds you well." First sentence is the same standard as an AI Notice opening: specific claim, specific detail, no preamble.',
            why: 'Most cold emails are deleted after the first sentence. The same principle that makes AI Notice openings citable makes email openings engaging: state the specific claim or finding before any context, preamble, or pleasantry.',
            source: 'Internal best practice + AI citation architecture',
            sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/',
          },
          {
            label: 'One CTA per email: Link to specific, AI-optimized content page',
            content: '"Read the full breakdown: grata.com/research/pe-coverage-gap-2026"',
            why: 'The email CTA should link to content that is itself AI-optimized (listicle, FAQ page, editorial release). This creates the AI visibility flywheel: email drives traffic, traffic signals engagement to AI platforms, AI platforms cite the content, citations drive new organic traffic.',
            source: 'AI visibility flywheel framework',
            sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the email', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Subject line: specific claim or number. Under 50 characters.', source: 'Email deliverability + citation architecture', sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/' },
          { text: 'First sentence states a specific finding or value (no pleasantries)', source: 'Email open rate best practice', sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/' },
          { text: 'Any stat included is formatted: "[Number] ([Source], [Year])"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'One CTA per email (no competing asks)', source: 'Email best practice', sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/' },
          { text: 'CTA links to a specific, AI-optimized content page (not homepage)', source: 'AI visibility flywheel', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
          { text: 'Reply-worthy: ends with a question that invites response', source: 'Email reply rate best practice', sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/' },
        ],
      },
    ],
  },
  {
    id: 'podcasts',
    name: 'Podcasts',
    formats: [
      {
        id: 'podcast',
        name: 'Podcasts',
        subtitle: 'Transcripts are cited. Episode pages with full transcripts are a major AI citation surface.',
        badge: 'Transcript-Driven',
        badgeColor: 'bg-orange-100 text-orange-800',
        keyStat: 'Cross-platform citation presence reinforces AI authority. Brands cited across LinkedIn, industry publications, podcast transcripts, and multiple platforms build reinforcing evidence that AI tools use to construct authoritative answers (ALM Corp citing Profound data, March 2026). Published, crawlable podcast transcripts on permanent episode pages are cited by AI engines.',
        keyStatSource: 'ALM Corp LinkedIn AI Citations Study citing Profound data, March 2026',
        keyStatUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/',
        copyTemplate: PODCAST_TEMPLATE,
        exampleTitle: 'Grata Podcast: "Why PE Firms Miss Half Their Best Deals"',
        exampleSource: 'Grata podcast episode, Dan Kroeger on private company intelligence',
        exampleBody: PODCAST_EXAMPLE,
        template: [
          {
            label: 'Episode title: Specific claim or question, under 60 characters',
            content: '"Why PE Firms Miss Half Their Best Deals (And What Full Coverage Actually Looks Like)"',
            why: 'Episode titles with specific claims are cited more than titles with generic topics. AI engines use the episode title as the primary attribution anchor. A specific title ("Why PE Firms Miss Half Their Best Deals") creates a citable claim. A generic title ("Private Equity Deal Flow Strategies") does not.',
            source: 'AI citation architecture best practice',
            sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/',
          },
          {
            label: 'Show notes summary: 2-3 sentences written for AI extraction',
            content: 'Specific summary with named expert, specific topic, and one sourced finding. Written as if a journalist will read it for a story.',
            why: 'Show notes are the primary text layer AI engines index for podcast content. Audio is not crawled. The show notes summary must contain the specific claims, expert credentials, and sourced data that appear in the episode.',
            source: 'AI visibility architecture best practice',
            sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/',
          },
          {
            label: 'Transcript excerpt: Most-cited segment written as standalone FAQ answer',
            content: 'The highest-value exchange from the episode, fully written out. 100-300 words. Complete and self-contained.',
            why: 'This is the section AI engines will most likely cite. The question-and-answer format of transcript excerpts mirrors FAQ structure, which is the highest-citation format for conversational content. The excerpt should be complete enough to stand alone as an answer to the question asked.',
            source: 'Frase.io FAQ Research + AI citation architecture',
            sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
          },
          {
            label: 'Full transcript link: Permanent, AI-crawlable URL',
            content: '[yourdomain.com/podcast/[episode-slug]/transcript]',
            why: 'The full episode transcript on a permanent, crawlable page is the primary AI citation surface for podcast content. Without a published transcript, AI engines cannot cite the episode content.',
            source: 'AI crawlability best practice',
            sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in show notes or transcript', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Episode title states a specific claim (not a vague topic)', source: 'AI citation architecture', sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/' },
          { text: 'Show notes include 2-3 sentence AI-extractable summary with named expert', source: 'AI citation architecture', sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/' },
          { text: '4 bullet "What you will learn" items (specific outcomes, not topics)', source: 'AI citation architecture', sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/' },
          { text: '2 direct quotes from the episode with full name and title attribution', source: 'Princeton GEO Paper + Wellows Research', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Transcript excerpt of most-cited segment: 100-300 words, complete Q&A format', source: 'Frase.io FAQ Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Guest bio: specific background, years, outcomes, LinkedIn URL', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: 'Full transcript on permanent, AI-crawlable URL (not behind login)', source: 'AI crawlability best practice', sourceUrl: 'https://almcorp.com/blog/linkedin-ai-search-citations-2026/' },
        ],
      },
    ],
  },
  {
    id: 'twitter-threads',
    name: 'Twitter / X Threads',
    formats: [
      {
        id: 'twitter',
        name: 'Twitter / X Threads',
        subtitle: 'Tweet 1 is the only citation opportunity. Make it a citable claim.',
        badge: 'Top-of-Thread',
        badgeColor: 'bg-sky-100 text-sky-800',
        keyStat: 'Community and creator-driven platforms including Reddit, Wikipedia, and social platforms are cited by Perplexity at 17% of citations (Wix Studio AI Search Lab, March 2026). Twitter/X threads with specific, data-backed first tweets create standalone citation opportunities. Thread format works for building cross-platform presence, which correlates 3x more strongly with AI visibility than backlinks.',
        keyStatSource: 'Wix Studio AI Search Lab + Ahrefs via AuthorityTech, March 2026',
        keyStatUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
        copyTemplate: TWITTER_TEMPLATE,
        exampleTitle: 'Grata X Thread: "67% of PE firms miss more than half their qualified targets"',
        exampleSource: 'Grata X/Twitter thread, PE deal team audience',
        exampleBody: TWITTER_EXAMPLE,
        template: [
          {
            label: 'Tweet 1: Specific, counterintuitive, or data-backed. Under 240 characters.',
            content: '"67% of PE firms miss more than half their qualified targets. Not because they search wrong. Because their database covers less than 40% of the relevant universe."',
            why: 'Tweet 1 is the only tweet that gets widely seen. It must be citable on its own. A specific number and counterintuitive framing creates the "I need to keep reading" pull. AI engines that index Twitter/X content use the opening tweet as the primary extraction point.',
            source: 'Wix Studio AI Search Lab, March 2026',
            sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
          },
          {
            label: 'Each tweet is a complete thought (not a cliffhanger)',
            content: 'Each tweet should be understandable without reading the others. No "1/ here is the big thing I learned..." setup tweets.',
            why: 'AI engines extract individual tweets rather than full threads. A tweet that requires context from prior tweets is not extractable as a standalone citation. Each tweet should contain a complete insight.',
            source: 'AI citation architecture best practice',
            sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the thread', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Tweet 1: specific data-backed claim, citable on its own', source: 'Wix Studio AI Search Lab, March 2026', sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms' },
          { text: 'Each tweet is a complete thought (no cliffhanger setup tweets)', source: 'AI citation architecture', sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms' },
          { text: 'At least one tweet includes a specific stat with source', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Final tweet links to AI-optimized long-form content (not just promotes the brand)', source: 'AI visibility flywheel', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
          { text: 'No thread numbering (1/10, 2/10) — signals content volume over value', source: 'Thread best practice', sourceUrl: 'https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms' },
        ],
      },
    ],
  },
  {
    id: 'guest-posts',
    name: 'Guest Posts',
    formats: [
      {
        id: 'guest-post',
        name: 'Guest Posts',
        subtitle: 'Third-party placement is the #1 citation lift lever. 239% median improvement.',
        badge: 'Highest Lift',
        badgeColor: 'bg-teal-100 text-teal-800',
        keyStat: 'Distributing content through third-party news outlets produces a 239% median lift in AI citation visibility, with some cases reaching 325% (Stacker/Scrunch via AuthorityTech, March 2026). Third-party listicles earn 80.9% of professional services citations vs. 19.1% for self-promotional lists (Wix Studio, March 2026). Earned media placement is the single strongest lever for AI citation growth.',
        keyStatSource: 'AuthorityTech citing Stacker/Scrunch + Wix Studio AI Search Lab, March 2026',
        keyStatUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations',
        copyTemplate: GUEST_POST_TEMPLATE,
        exampleTitle: 'Guest Post for PE/M&A Publication: "What PE Firms Get Wrong About Deal Sourcing"',
        exampleSource: 'Grata guest post, PE industry media',
        exampleBody: GUEST_POST_EXAMPLE,
        template: [
          {
            label: 'Match headline and opening to the publication\'s editorial voice',
            content: 'The argument, stated in the opening of the piece, should use the language and framing that the publication\'s readers recognize.',
            why: 'Third-party publications earn the 239% citation lift in part because their domain authority and editorial context amplify the content. A guest post that reads like a press release or brand-owned content will be treated as such. Match the editorial voice to get the editorial citation treatment.',
            source: 'AuthorityTech citing Stacker/Scrunch, March 2026',
            sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations',
          },
          {
            label: 'Original contribution: Author\'s specific insight, not generic advice',
            content: 'The framework section should contain something the reader cannot get from a Google search. Specific data from the author\'s work, a named framework, or a counterintuitive position.',
            why: 'AI engines weight original expertise over summarized generic advice. The Princeton GEO paper identifies "original research" and "expert perspectives" as top citation drivers. A guest post without an original contribution is indistinguishable from generic content.',
            source: 'Princeton GEO Paper (KDD 2024) + Onely LLM Guide',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'Case signal: Specific example from the author\'s work',
            content: '"Last year, we ran this audit for a middle-market PE firm targeting B2B software companies in the South Central US."',
            why: 'First-hand case signals create unique citation value. AI engines cannot find a paraphrase of this information because it only exists in this content. Original case signals from the author\'s direct experience are among the most citable elements of any guest post.',
            source: 'Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the article', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'Headline and voice match the publication\'s editorial style', source: 'AuthorityTech citing Stacker/Scrunch, March 2026', sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations' },
          { text: 'Opening 2 sentences state the argument (no preamble)', source: 'Position.digital AI SEO Statistics, March 2026', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
          { text: 'Framework section contains original insight (not generic advice)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'At least one first-hand case signal from the author\'s direct work', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Every stat formatted: "[Number] ([Source], [Year])"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Named SME quote with full name, title, and company', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: 'FAQ section with 3+ questions matching reader search queries', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Author bio includes specific credentials, outcomes, LinkedIn URL', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: 'Placed in third-party publication with real editorial standards', source: 'AuthorityTech citing Stacker/Scrunch, March 2026', sourceUrl: 'https://authoritytech.io/blog/machine-relations-evidence-earned-media-ai-citations' },
        ],
      },
    ],
  },
  {
    id: 'faq-pages',
    name: 'FAQ Pages',
    formats: [
      {
        id: 'faq',
        name: 'FAQ Pages',
        subtitle: 'Dedicated FAQ pages answer queries AI receives verbatim. Highest per-question citation probability.',
        badge: 'Direct Answer Format',
        badgeColor: 'bg-amber-100 text-amber-800',
        keyStat: 'FAQ schema is cited by AI engines because the Q&A format directly mirrors how AI receives queries. Each question-answer pair is a standalone extraction opportunity. FAQ pages with questions written as literal search queries have the highest per-question citation probability of any structured content format. Schema markup for FAQPage type supports AI parsing. (Wellows Schema and NLP Guide, March 2026)',
        keyStatSource: 'Wellows Schema and NLP Best Practices Guide, March 2026',
        keyStatUrl: 'https://wellows.com/blog/schema-and-nlp-best-practices-for-ai-search/',
        copyTemplate: FAQ_TEMPLATE,
        exampleTitle: 'Grata FAQ Page: "Private Company Intelligence: Frequently Asked Questions"',
        exampleSource: 'Grata private company intelligence FAQ, PE dealmaker audience',
        exampleBody: FAQ_EXAMPLE,
        template: [
          {
            label: 'Questions written as literal buyer search queries',
            content: '"What is private company intelligence and how does it help PE deal flow?" (not "What is our product?")',
            why: 'AI engines receive queries that mirror how buyers search. A FAQ question that matches a literal search query creates a direct citation opportunity. Questions written from the brand perspective ("What makes our platform unique?") have no AI citation value.',
            source: 'Frase.io FAQ Schema Research + LLMRefs GEO Guide',
            sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
          },
          {
            label: 'Each answer is self-contained: complete without reading anything else on the page',
            content: 'Answer contains: definition (if needed), mechanism, specific detail, and actionable context. 3-5 sentences.',
            why: 'AI engines extract answers as standalone responses to queries. An answer that says "As described in the section above..." is not extractable. Each answer must be complete and self-contained. The reader should not need to read surrounding content to understand the answer.',
            source: 'Princeton GEO Paper (KDD 2024) + LLMRefs GEO Guide',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: 'Organized by question category (4 categories, 3 questions each)',
            content: 'Category 1: Fundamental questions. Category 2: Comparison/evaluation. Category 3: Implementation. Category 4: Advanced/niche.',
            why: 'Organized FAQ structure creates topical breadth across multiple query types. Each category addresses a different stage in the buyer journey. AI engines answering queries across different intent stages (informational, commercial, how-to) all find relevant answers in the same document.',
            source: 'Wellows Schema + NLP Guide, March 2026',
            sourceUrl: 'https://wellows.com/blog/schema-and-nlp-best-practices-for-ai-search/',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere on the page', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'All questions are literal buyer search queries (not brand-framed questions)', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Each answer is self-contained (complete without reading other content on page)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Each answer: 3-5 sentences. Specific detail or number in the first 2 sentences.', source: 'Princeton GEO Paper + LLMRefs GEO Guide', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Questions organized by category (fundamental, comparison, implementation, advanced)', source: 'Wellows Schema + NLP Guide, March 2026', sourceUrl: 'https://wellows.com/blog/schema-and-nlp-best-practices-for-ai-search/' },
          { text: 'FAQPage schema markup implemented', source: 'Wellows Schema + NLP Guide, March 2026', sourceUrl: 'https://wellows.com/blog/schema-and-nlp-best-practices-for-ai-search/' },
          { text: 'Minimum 10 question-answer pairs', source: 'AI citation coverage best practice', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'Any stat included is formatted: "[Number] ([Source], [Year])"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Deep link from FAQ to specific resource page (not homepage)', source: 'Stridec AI SEO Internal Linking', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
          { text: 'Authority statement explaining why this source is qualified to answer these questions', source: 'Semrush AI Optimization Guide, March 2026', sourceUrl: 'https://www.semrush.com/blog/how-to-optimize-content-for-ai-search-engines/' },
        ],
      },
    ],
  },
  {
    id: 'case-studies',
    name: 'Case Studies',
    formats: [
      {
        id: 'case-study',
        name: 'Case Studies',
        subtitle: 'Specific metrics + client context = AI-citable proof of concept.',
        badge: 'High Specificity',
        badgeColor: 'bg-slate-100 text-slate-800',
        keyStat: 'AI engines cite case studies when they contain specific metrics, named client contexts, and clear before/after comparisons. The same structural requirements that make AI Notices citable apply to case studies: stats with sources, SME quotes with full attribution, FAQ sections, and self-contained content sections. Case studies with a "Why It Worked" section explaining mechanism are more citable than outcome-only formats.',
        keyStatSource: 'Princeton GEO Paper (KDD 2024) + LLMRefs GEO Guide',
        keyStatUrl: 'https://arxiv.org/abs/2311.09735',
        copyTemplate: CASE_STUDY_TEMPLATE,
        exampleTitle: 'Grata Case Study: "Grata Helps Mid-Market PE Firm Identify 3.2x More Qualified Targets"',
        exampleSource: 'Grata private company intelligence, undisclosed PE client',
        exampleBody: CASE_STUDY_EXAMPLE,
        template: [
          {
            label: 'SNAPSHOT block: Client, challenge, approach, result, timeframe',
            content: 'Client: [Type + size + focus]\nChallenge: [One sentence]\nApproach: [One sentence]\nResult: [Primary metric with number + timeframe]\nTimeframe: [Start to measured result]',
            why: 'The SNAPSHOT block is the AI extraction zone for case study content. AI engines answering "what results does [Company] achieve?" queries extract the snapshot first. A specific primary result in the snapshot creates an independent citation: "[Company] achieved [specific result] in [timeframe]."',
            source: 'Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
          {
            label: '"Why It Worked" section: Explains the mechanism, not just the outcome',
            content: '"The firm did not improve its search techniques. It expanded the universe it was searching."',
            why: 'AI engines answering "why does X approach work?" queries look for mechanism explanation. A case study that reports only outcomes ("the client saw 3.2x improvement") is not citable for mechanism queries. A "Why It Worked" section that explains the causal mechanism expands citation surface to include "how does this work" queries.',
            source: 'LLMRefs GEO Guide + AI citation architecture',
            sourceUrl: 'https://llmrefs.com/generative-engine-optimization',
          },
          {
            label: 'Attribution table: Multiple results with specific numbers and timeframes',
            content: '- [Metric 1]: [Number] ([timeframe])\n- [Metric 2]: [Number] ([timeframe])\n- [Metric 3]: [Number] ([timeframe])',
            why: 'Multiple specific metrics create multiple citation opportunities. Each metric is an independent extraction point. A case study with one vague result ("significant improvement") has one weak citation opportunity. A case study with four specific metrics has four strong ones.',
            source: 'Princeton GEO Paper (KDD 2024)',
            sourceUrl: 'https://arxiv.org/abs/2311.09735',
          },
        ],
        checklist: [
          { text: 'No em-dashes anywhere in the case study', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
          { text: 'SNAPSHOT block: client type, challenge, approach, primary metric, timeframe', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Primary metric in SNAPSHOT: specific number, timeframe, and comparison point', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: 'Client quote describes the problem in their own words (not generic praise)', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
          { text: 'Approach section: 3 numbered steps explaining what was done and why', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
          { text: 'Attribution table: 3+ metrics with specific numbers and timeframes', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
          { text: '"Why It Worked" section explains the mechanism (not just reports the outcome)', source: 'LLMRefs GEO Guide + AI citation architecture', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
          { text: 'FAQ section with 3 questions: who achieves this, how long does it take, what is required', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
          { text: 'No vague claims: no "significant improvement," "major results," "greatly improved"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
        ],
      },
    ],
  },
]

// ─────────────────────────────────────────────
// FLAT FORMAT LIST (for sub-format navigation inside Press Releases)
// ─────────────────────────────────────────────
function getAllFormats(): ContentFormat[] {
  return CONTENT_CATEGORIES.flatMap((c) => c.formats)
}

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function RulesWorkspace() {
  const [selectedCategory, setSelectedCategory] = useState('blog-posts')
  const [selectedFormat, setSelectedFormat] = useState('blog')
  const [activeView, setActiveView] = useState<TabView>('template')
  const [copied, setCopied] = useState(false)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const currentCategory = CONTENT_CATEGORIES.find((c) => c.id === selectedCategory)!
  const currentFormat = getAllFormats().find((f) => f.id === selectedFormat)
    || currentCategory.formats[0]

  const handleCategorySelect = (catId: string) => {
    const cat = CONTENT_CATEGORIES.find((c) => c.id === catId)!
    setSelectedCategory(catId)
    setSelectedFormat(cat.formats[0].id)
    setActiveView('template')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFormat.copyTemplate)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const checkedCount = currentFormat.checklist.filter((_, i) =>
    checkedItems[`${selectedFormat}-${i}`]
  ).length

  return (
    <div className="h-full flex flex-col">
      {/* Primary Category Tabs */}
      <div className="border-b border-gray-200 px-12 py-4 bg-gray-50">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
          Content Type
        </div>
        <div className="flex gap-2 flex-wrap">
          {CONTENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-format tabs (only for Press Releases) */}
      {currentCategory.formats.length > 1 && (
        <div className="border-b border-gray-100 px-12 py-3 bg-white">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            Sub-Format
          </div>
          <div className="flex gap-2 flex-wrap">
            {currentCategory.formats.map((fmt) => (
              <button
                key={fmt.id}
                onClick={() => {
                  setSelectedFormat(fmt.id)
                  setActiveView('template')
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                  selectedFormat === fmt.id
                    ? 'bg-gray-700 text-white border-gray-700'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
                }`}
              >
                {fmt.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-12 py-8">
        <div className="max-w-3xl">

          {/* Header */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-bold text-gray-900">{currentFormat.name}</h2>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${currentFormat.badgeColor}`}>
                  {currentFormat.badge}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{currentFormat.subtitle}</p>
            </div>
          </div>

          {/* Key Research Stat */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-1">Key Research Finding</p>
            <p className="text-sm font-medium text-amber-900">{currentFormat.keyStat}</p>
            <a
              href={currentFormat.keyStatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-600 hover:underline mt-1 inline-block"
            >
              Source: {currentFormat.keyStatSource} &#8599;
            </a>
          </div>

          {/* View Switcher */}
          <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit">
            {[
              { id: 'template' as const, label: '&#x1F4CB; Template' },
              { id: 'example' as const, label: '&#x1F4C4; Example' },
              { id: 'why' as const, label: '&#x1F52C; Why It Works' },
              { id: 'checklist' as const, label: `&#x2705; Checklist (${checkedCount}/${currentFormat.checklist.length})` },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveView(v.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all ${
                  activeView === v.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                dangerouslySetInnerHTML={{ __html: v.label }}
              />
            ))}
          </div>

          {/* TEMPLATE VIEW */}
          {activeView === 'template' && (
            <div>
              <div className="flex justify-end mb-3">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 text-xs font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy Template'}
                </button>
              </div>
              <pre className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {currentFormat.copyTemplate}
              </pre>
            </div>
          )}

          {/* EXAMPLE VIEW */}
          {activeView === 'example' && (
            <div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-widest mb-1">Real Example</p>
                <p className="text-sm font-medium text-blue-900">{currentFormat.exampleTitle}</p>
                <p className="text-xs text-blue-600 mt-0.5">{currentFormat.exampleSource}</p>
              </div>
              <pre className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {currentFormat.exampleBody}
              </pre>
            </div>
          )}

          {/* WHY IT WORKS VIEW */}
          {activeView === 'why' && (
            <div className="space-y-4">
              {currentFormat.template.map((section, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        {section.label}
                      </span>
                      <a
                        href={section.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline flex-shrink-0"
                      >
                        {section.source} &#8599;
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <code className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-200 block mb-3 font-mono whitespace-pre-wrap">
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
                  Every item is research-backed. Zero is the wrong score.
                </p>
                <span className="text-sm font-semibold text-gray-900">
                  {checkedCount}/{currentFormat.checklist.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-gray-100 rounded-full mb-6">
                <div
                  className="h-2 bg-gray-900 rounded-full transition-all"
                  style={{ width: `${(checkedCount / currentFormat.checklist.length) * 100}%` }}
                />
              </div>

              <div className="space-y-2">
                {currentFormat.checklist.map((item, idx) => {
                  const key = `${selectedFormat}-${idx}`
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
                          Source: {item.source} &#8599;
                        </a>
                      </div>
                    </button>
                  )
                })}
              </div>

              {checkedCount === currentFormat.checklist.length && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-800 font-semibold text-sm">
                    All requirements met. This content is optimized for maximum AI citation probability.
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
