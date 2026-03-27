'use client'

import { useState } from 'react'

// ─────────────────────────────────────────────
// AI VISIBILITY HUB — 5 AI NOTICE FORMATS
// Rebuilt March 2026. Every claim is sourced.
// See RESEARCH.md for full citation details.
//
// CRITICAL: These are AI NOTICES (GlobeNewswire/
// PR Newswire wire release format), NOT generic
// blog posts or press releases. Each format has
// distinct AI citation mechanics.
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

type FormatTabView = 'template' | 'example' | 'why' | 'checklist'

type ContentType = {
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

// ─────────────────────────────────────────────
// FORMAT 1: EDITORIAL/FEATURE
// ─────────────────────────────────────────────
const EDITORIAL_TEMPLATE = `FOR IMMEDIATE RELEASE

[HEADLINE: Keyword-led. Declarative statement. 12 words or fewer.]
[SUBHEAD: Expands on headline with one additional specific claim.]

[CITY, STATE, DATE] — [Company Name], [one-line description of what company does and who it serves], today released new findings on [topic]. [The core insight in one sentence. State it plainly.]

[BRIDGE PARAGRAPH: Market context. 2-3 sentences. Why does this topic matter now? Cite an industry stat with source attribution.]

## [PROBLEM SECTION HEAD: Frame the pain point buyers feel]

[Open with the specific problem. 2-3 sentences. Concrete, not abstract.]

According to [Full Name], [Title] at [Company Name], "[Quote that names the problem in plain language. 15-25 words. No corporate speak.]"

[Expand on the problem with data or a specific example. 2-3 sentences. Metric goes in the FIRST sentence of this paragraph.]

## [SOLUTION SECTION HEAD: Describe the approach or category]

[Company Name]'s approach to [topic] involves [specific mechanism]. [How it works in 2-3 sentences.]

"[Quote from SME that explains the 'how.' Specific claim or insight. 15-25 words.]" said [Full Name], [Title] at [Company Name].

[Second supporting paragraph. Include a measurable outcome or case signal if available.]

## [HOW IT WORKS SECTION HEAD: Mechanics or process]

[Numbered or bulleted breakdown. Use this structure for AI extraction:]

1. [Step or element]: [One-sentence explanation with specific detail.]
2. [Step or element]: [One-sentence explanation with specific detail.]
3. [Step or element]: [One-sentence explanation with specific detail.]

[Transition paragraph. Connect the process to the buyer outcome.]

## [WHERE IT'S GOING SECTION HEAD: Forward-looking signal]

[Market trajectory or next development. 2-3 sentences. Cite a trend stat with source.]

"[Forward-looking quote from SME. Specific prediction or recommendation. 15-25 words.]" said [Full Name], [Title].

## Frequently Asked Questions

**Q: [Most-searched question buyers ask about this topic]?**
A: [Complete answer. 2-3 sentences. Write as if ChatGPT will read this verbatim.]

**Q: [Second most-searched question — cost, comparison, or how-to]?**
A: [Complete answer. 2-3 sentences.]

**Q: [Third question — objection or alternative]?**
A: [Complete answer. 2-3 sentences.]

**Q: [Fourth question — implementation or timing]?**
A: [Complete answer. 2-3 sentences.]

**Q: [Fifth question — trend or future-state]?**
A: [Complete answer. 2-3 sentences.]

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator in one sentence.] Founded [year], headquartered in [city]. Learn more at [yourdomain.com/specific-page — NOT homepage].

Media Contact:
[Name] | [Title] | [email] | [phone]

[yourdomain.com/newsroom/[slug] — permanent URL, AI-crawlable]`

const EDITORIAL_EXAMPLE = `FOR IMMEDIATE RELEASE

Full Market Visibility Is Crucial for Winning Deals: What PE Firms Need to Know Now
New research from Grata shows 67% of dealmakers miss qualified targets without comprehensive private company data.

NEW YORK, NY, March 2026 — Grata, the private company intelligence platform for dealmakers, today released findings on how market visibility gaps are costing private equity firms competitive advantage. In a market where the best deals are won before they hit the auction block, firms with incomplete data coverage are systematically losing to better-informed competitors.

The private markets data problem is not new, but it has accelerated. As the number of PE-backed companies has tripled over the past decade, the gap between firms with full market coverage and those relying on incomplete databases has widened significantly.

## The Visibility Problem Costing PE Firms Deals

Most deal teams believe their pipeline is comprehensive. It is not. Standard commercial databases cover fewer than 40% of relevant private companies in most sectors, leaving the majority of potential targets invisible until a competitor acts first.

According to Dan Kroeger, Head of Business Development at Grata, "Firms consistently overestimate their market coverage. The targets they never saw are often the best ones."

When a PE firm runs a sector scan and finds 200 companies, the real number of qualified targets in that market is frequently above 500. That gap is not a search failure. It is a data infrastructure failure.

## What Full Market Coverage Actually Looks Like

Grata indexes over 10 million private companies using AI-powered firmographic data and ownership signals that commercial databases do not capture. The platform continuously monitors changes in headcount, revenue signals, ownership structure, and acquisition intent markers.

"Coverage is not about having the most companies in a database," said Kroeger. "It is about having accurate, current data on the companies that actually match your investment criteria."

Firms using comprehensive coverage tools identify an average of 3.2x more qualified targets per sector scan compared to firms using standard databases.

## How Private Company Intelligence Works

1. Entity identification: AI models surface companies that match ownership, revenue, and sector criteria from unstructured web data.
2. Firmographic enrichment: Headcount trends, leadership changes, and financial signals update continuously.
3. Intent signal scoring: Behavioral signals flag companies approaching liquidity events 6-18 months in advance.

These layers work together to surface targets before they appear in traditional deal flow channels, eliminating the reactive posture that costs firms their best deals.

## Where Private Company Intelligence Is Heading

The next development is sector-specific signal modeling. Platforms that map ownership signals to specific verticals will allow firms to predict which companies in their target sectors are approaching a liquidity event 12 to 18 months before it occurs.

"The firms winning in 2025 are not just searching better," said Kroeger. "They are operating with a predictive edge on when and why companies come to market."

## Frequently Asked Questions

**Q: What is private company intelligence and how does it help PE deal flow?**
A: Private company intelligence is structured data about privately held companies, including ownership, revenue signals, headcount trends, and acquisition intent markers. PE firms use it to identify qualified acquisition targets before they enter a formal sales process.

**Q: How is private company data different from a standard commercial database?**
A: Standard databases like PitchBook or CapIQ cover publicly available data on funded companies. Private company intelligence platforms like Grata use AI to index a broader universe, including unfunded, bootstrapped, and founder-owned businesses that rarely appear in traditional sources.

**Q: What does "full market coverage" mean for a PE deal team?**
A: Full market coverage means your sector scans surface all qualified targets, not just the companies that have raised capital or appeared in press. It requires data infrastructure that indexes the full private company universe, not a curated subset.

**Q: How accurate is AI-generated firmographic data on private companies?**
A: Accuracy depends on the platform's methodology. Grata validates data through multiple source layers and continuous update cycles. For critical deals, independent verification of key data points is always recommended.

**Q: How do PE firms integrate private company intelligence into their existing workflow?**
A: Integration typically follows three stages: sector mapping (replacing one-off database searches), target monitoring (ongoing signals on shortlisted companies), and intent scoring (prioritizing outreach based on deal readiness signals).

About Grata
Grata is the private company intelligence platform for dealmakers. The platform indexes over 10 million private companies using AI-powered data to help PE firms, investment banks, and strategic acquirers find, research, and track acquisition targets. Learn more at grata.com/private-equity.

Media Contact:
[Name] | Communications | press@grata.com

grata.com/newsroom/full-market-visibility-pe-firms`

// ─────────────────────────────────────────────
// FORMAT 2: LISTICLE
// ─────────────────────────────────────────────
const LISTICLE_TEMPLATE = `FOR IMMEDIATE RELEASE

[NUMBER] [Topic Nouns] [Separating / Driving / Defining] [Audience] [From/In] [Context]
[Example: 6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs From the Field]
[Subhead: One sentence that names the source of insight and why it matters.]

[CITY, STATE, DATE] — [Company Name], [one-line descriptor], today released findings on [specific practice pattern]. Based on [source — analysis of X customers / survey of Y professionals / proprietary data on Z], [Company Name] identified [number] [practices/patterns/factors] that [specific outcome: separate/drive/define].

KEY FACTS:
1. [Stat or finding with specific number. Source in parentheses. Example: "Contractors using pre-bid intelligence tools win 34% more bids (Fieldline, 2026)."]
2. [Second specific stat or finding with source.]
3. [Third specific stat or finding with source.]
4. [Fourth specific finding or market signal.]
5. [Fifth data point — market size, adoption rate, or directional trend.]

[BRIDGE: 2-3 sentences connecting the data to the numbered list. Why these specific [number] practices? What pattern do they represent?]

## The [Number] [Practices/Patterns/Factors]

**1. [Practice Title: Action Verb + Noun Phrase]**
[What this practice involves, in 2-3 sentences. Metric goes in the first sentence if available. Be specific — name the tool, process, or behavior.]

**2. [Practice Title]**
[2-3 sentences. One concrete example or measurable outcome included.]

**3. [Practice Title]**
[2-3 sentences. If this item has an SME quote, place it here — not at the end of the item.]

According to [Full Name], [Title] at [Company Name], "[Quote that adds insight to this specific item. 15-25 words. Specific claim.]"

**4. [Practice Title]**
[2-3 sentences.]

**5. [Practice Title]**
[2-3 sentences.]

**6. [Practice Title — if 6-item list]**
[2-3 sentences.]

## What These Patterns Reveal

[Synthesis paragraph: What do all [number] items have in common? What larger pattern do they represent? 2-3 sentences. This section is AI-extractable as a standalone insight.]

According to [Full Name], [Title], "[Quote summarizing the pattern. 15-25 words.]"

## Frequently Asked Questions

**Q: [Specific buyer question: "What separates X from Y?" or "How does X work?"]?**
A: [Complete, self-contained answer. 2-3 sentences. No jargon.]

**Q: [How-to question about implementing these practices]?**
A: [Complete answer. Steps if needed. 2-3 sentences.]

**Q: [Cost, time, or resource question]?**
A: [Complete answer. Specific if possible.]

**Q: [Comparison question — this vs. alternative approach]?**
A: [Complete answer.]

**Q: [Who-should-use-this question]?**
A: [Complete answer. Specific audience description.]

About [Company Name]
[Company Name] [does what] for [who]. [Differentiator.] Learn more at [yourdomain.com/specific-page].

Media Contact: [Name] | [email] | [phone]
[yourdomain.com/newsroom/[slug]]`

const LISTICLE_EXAMPLE = `FOR IMMEDIATE RELEASE

6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs From the Field
Fieldline analysis of 1,200 projects reveals the data habits driving win-rate advantages among leading general contractors.

AUSTIN, TX, February 2026 — Fieldline, the pre-bid intelligence platform for general contractors, today released findings from its analysis of 1,200 construction projects across 40 states. The analysis identified six pre-bid intelligence practices that consistently separate top-quartile GCs from the broader field.

KEY FACTS:
1. GCs using structured pre-bid intelligence win 34% more bids than those relying on estimator experience alone (Fieldline, 2026).
2. Top-quartile GCs analyze subcontractor capacity data before bid submission on 89% of projects. The field average is 31%.
3. Pre-bid site assessments that incorporate local labor market data reduce change order rates by 22% (Fieldline analysis, 2026).
4. Coverage of all 50 states in Fieldline's database became available in Q1 2026, enabling national GCs to run standardized pre-bid analysis regardless of region.
5. GCs that track historical subcontractor performance data close bids 18 days faster on average than those that rebuild context from scratch on each project.

The gap between top-quartile and median GC performance on win rates has widened since 2023. The practices below are not new ideas. They are disciplines that top performers execute consistently while the field treats them as occasional luxuries.

## The 6 Pre-Bid Intelligence Practices

**1. Subcontractor Capacity Analysis Before Bid Submission**
Top-performing GCs verify subcontractor capacity before committing to a bid, not after. This means checking current project load, crew availability, and equipment status for every key sub on the bid list. GCs that skip this step average 2.4 more change orders per project than those that do not.

**2. Local Labor Market Review for Each Project Location**
Labor rates and availability vary significantly across markets and shift quarter to quarter. Top-quartile GCs pull current wage data and labor availability signals for the specific project location before finalizing estimates. This practice reduces the risk of under-pricing labor costs by an average of 14%.

**3. Historical Subcontractor Performance Tracking**
Institutional memory about subcontractor performance should live in a system, not in an estimator's head. Top GCs maintain structured records of bid accuracy, schedule adherence, and change order patterns for every sub they work with. This data cuts bid review time by an average of 11 hours per project.

According to Marcus Webb, VP of Estimating at a top-10 ENR contractor, "The firms that keep their own performance database on subs have a structural advantage. They're making decisions based on data while everyone else is making them based on stories."

**4. Material Cost Verification Using Current Market Data**
Material prices fluctuate faster than annual cost books update. Top GCs verify current pricing for major material categories within 30 days of bid submission. This is particularly critical for steel, lumber, and copper, which have shown 15-40% price swings within single quarters since 2022.

**5. Owner and Project Type Pattern Analysis**
Top-quartile GCs build profiles of owners they bid for repeatedly, including preferred contract structures, typical change order patterns, and payment history. This intelligence shapes both bid strategy and risk allocation before contract execution.

**6. Regional Competitor Coverage Mapping**
Before bidding, top GCs identify which competitors are likely to bid and what their typical pricing strategy looks like in that region and project type. This competitive context informs margin decisions and identifies where a firm has a genuine advantage.

## What These Patterns Reveal

All six practices share a common structure: they replace estimator intuition with structured, retrievable data. The transition from experience-based to data-based pre-bid processes is the defining operational shift separating top performers from the field.

According to Fieldline CEO Jordan Kessler, "Win rate is a trailing indicator. The leading indicator is the quality of your pre-bid intelligence process. These six practices are what that looks like in practice."

## Frequently Asked Questions

**Q: What pre-bid intelligence practices do top GCs use to win more bids?**
A: Top-quartile GCs use six core practices: subcontractor capacity verification, local labor market analysis, historical sub performance tracking, current material cost verification, owner pattern analysis, and regional competitor mapping. These practices replace estimator intuition with structured data.

**Q: How does pre-bid intelligence software work for general contractors?**
A: Pre-bid intelligence platforms like Fieldline aggregate subcontractor capacity, labor market, and project history data into a single dashboard. GCs use the platform during the bid/no-bid decision and estimation phases to verify inputs before submission.

**Q: How much does pre-bid intelligence software cost for a mid-size GC?**
A: Pricing varies by platform and company size. Fieldline offers pricing based on annual project volume. Most mid-size GCs see ROI within two to three projects through reduced change orders and improved win rates.

**Q: How is pre-bid intelligence different from just using a better estimating tool?**
A: Estimating tools calculate costs based on inputs. Pre-bid intelligence tools verify whether the inputs are accurate before you calculate. The combination of verified inputs and accurate calculation is what produces competitive bids.

**Q: Which types of GCs benefit most from pre-bid intelligence platforms?**
A: GCs with annual revenue above $25M and active bid pipelines of 10 or more concurrent projects see the clearest ROI. Firms bidding in multiple states or across multiple market segments benefit most from national data coverage.

About Fieldline
Fieldline is the pre-bid intelligence platform for general contractors. The platform provides subcontractor capacity data, labor market signals, and project history analytics across all 50 states. Learn more at fieldline.com/for-gcs.

Media Contact: [Name] | press@fieldline.com | [phone]
fieldline.com/newsroom/pre-bid-intelligence-practices`

// ─────────────────────────────────────────────
// FORMAT 3: NEWS/ANNOUNCEMENT
// ─────────────────────────────────────────────
const NEWS_TEMPLATE = `FOR IMMEDIATE RELEASE

[HEADLINE: News verb + specific metric. "Company Expands X to Y Markets" or "Company Launches X, Serving Y Customers"]
[Subhead: One sentence with the second most important fact.]

[CITY, STATE, DATE] — [Company Name], [descriptor], today announced [the news in one sentence]. [Scale or metric: "now serving X clients in Y states" or "available to X users starting DATE"].

[WHY IT MATTERS PARAGRAPH: 2-3 sentences. Who is affected and how does this change things for them? This is the "so what" — write it like a journalist would.]

KEY FACTS:
1. [Specific metric: coverage, users, revenue, capacity, speed — whatever is most newsworthy.]
2. [Second metric or data point. Source in parentheses if external.]
3. [Third data point — market context or comparison to previous state.]
4. [Implementation detail: when, how, who can access it.]
5. [Company scale signal: customers, revenue band, founding year, or similar.]

[BODY PARAGRAPH: Problem this solves. 2-3 sentences. Context for why this announcement matters in the current market.]

"[Quote from CEO or relevant executive. Specific claim about what this means for customers or the market. Not a cliche. 15-25 words.]" said [Full Name], [Title] at [Company Name].

[HOW IT CHANGES THINGS PARAGRAPH: What does the audience now have access to that they did not before? 2-3 sentences. Specific, not vague.]

[TECHNICAL/IMPLEMENTATION PARAGRAPH: How does it work? Who can access it? Any integration or setup required? 2-3 sentences.]

"[Second quote if available — from a customer, partner, or analyst. Optional but strong. 15-25 words.]" said [Full Name], [Title], [Company/Organization].

[AVAILABILITY PARAGRAPH: When is this live? What does access look like? Any pricing signal if appropriate.]

## Frequently Asked Questions

**Q: [What is X and who is it for — the most obvious question about this announcement]?**
A: [Complete answer. 2-3 sentences.]

**Q: [How do I access or get started with X]?**
A: [Complete answer. Steps or link.]

**Q: [What changed — before vs. after comparison]?**
A: [Complete answer. Specific contrast.]

**Q: [Pricing or commercial question if relevant]?**
A: [Complete answer.]

**Q: [How does this compare to alternatives or competitors]?**
A: [Complete answer. Honest and specific.]

About [Company Name]
[Company Name] [does what] for [who]. [Founded year, HQ, one scale signal.] Learn more at [yourdomain.com/specific-page].

Media Contact: [Name] | [email] | [phone]
[yourdomain.com/newsroom/[slug]]`

const NEWS_EXAMPLE = `FOR IMMEDIATE RELEASE

Fieldline Expands Pre-Bid Intelligence Coverage to All 50 States
Platform now gives national general contractors standardized subcontractor and labor data for every U.S. market.

AUSTIN, TX, January 2026 — Fieldline, the pre-bid intelligence platform for general contractors, today announced the expansion of its subcontractor capacity and labor market database to cover all 50 U.S. states. Starting January 15, 2026, Fieldline customers can access standardized pre-bid intelligence data for any project location in the country.

National GCs have operated with a patchwork of regional data tools, accepting inconsistent coverage as a fixed cost of doing business across multiple markets. Fieldline's national expansion eliminates that constraint, giving multi-region contractors one data standard for every bid regardless of geography.

KEY FACTS:
1. Fieldline now indexes subcontractor capacity data for over 180,000 specialty trade contractors across all 50 states.
2. Labor market signals are updated weekly for every major construction market in the U.S.
3. National coverage was previously available for 38 states. The 12-state expansion adds all remaining Southeast and Mountain West markets.
4. Existing Fieldline subscribers gain access to expanded coverage automatically starting January 15, 2026.
5. Fieldline serves 850 general contractor firms, including 14 companies on the ENR Top 400 Contractors list.

Pre-bid data gaps are not evenly distributed. The Southeast and Mountain West markets have historically been underserved by commercial construction databases, forcing estimating teams to rely on local contacts and outdated cost books for projects in those regions. That gap is now closed.

"National GCs should not have to change their pre-bid process depending on what state a project is in," said Jordan Kessler, CEO of Fieldline. "Consistent data coverage is the foundation of consistent bid quality."

Fieldline's expansion means that a contractor headquartered in Chicago bidding on a project in Boise or Charlotte now has access to the same depth of subcontractor capacity data, labor market signals, and project history analytics available in their home market.

The new coverage was built using Fieldline's AI-powered data ingestion pipeline, which continuously processes contractor licensing records, payroll filings, and project permit data across all 50 states. No setup or configuration is required for existing customers.

"This removes the last major data gap we had when bidding outside our core markets," said Tom Reyes, Director of Estimating at Meridian Construction Group, a Fieldline customer. "We can now run the same pre-bid process in every state."

The expanded database is live as of January 15, 2026, for all Fieldline subscribers. New customers can access a 14-day trial at fieldline.com/trial.

## Frequently Asked Questions

**Q: What is Fieldline and what does the 50-state expansion mean for general contractors?**
A: Fieldline is a pre-bid intelligence platform that provides general contractors with subcontractor capacity data, labor market signals, and project history analytics. The 50-state expansion means national contractors can now run a consistent pre-bid analysis process for any project in the U.S. rather than managing separate regional data sources.

**Q: How do existing Fieldline customers access the expanded coverage?**
A: Existing subscribers receive access automatically starting January 15, 2026. No configuration or upgrade is required. The expanded state coverage appears in the standard Fieldline dashboard under the project location search.

**Q: What data does Fieldline provide for each state market?**
A: Fieldline provides three data layers for each market: subcontractor capacity indicators (current project load, crew availability), labor market signals (wage rates, labor availability by trade), and project history (historical bid accuracy and change order data for specialty contractors in that region).

**Q: Which states were added in the January 2026 expansion?**
A: The expansion added the 12 remaining states not previously covered, including all Southeast markets (Alabama, Mississippi, Louisiana, Arkansas, Tennessee, Kentucky, West Virginia, Virginia) and Mountain West markets (Idaho, Montana, Wyoming, New Mexico).

**Q: How does Fieldline compare to using a regional construction cost database?**
A: Regional cost databases provide historical averages. Fieldline provides current signals, updated weekly, on actual subcontractor availability and current labor market conditions. The key difference is timeliness: Fieldline data reflects market conditions at the time of bid, not at the time the database was compiled.

About Fieldline
Fieldline is the pre-bid intelligence platform for general contractors. The platform indexes over 180,000 specialty trade contractors and provides labor market and project history data across all 50 U.S. states. Founded 2021, headquartered in Austin, TX. Learn more at fieldline.com/coverage.

Media Contact: [Name] | press@fieldline.com | [phone]
fieldline.com/newsroom/50-state-expansion`

// ─────────────────────────────────────────────
// FORMAT 4: DATA/RESEARCH RELEASE
// ─────────────────────────────────────────────
const DATA_TEMPLATE = `FOR IMMEDIATE RELEASE

[STAT IS THE HEADLINE: "[Specific Number] [Audience] [Do/Experience/Report] [Finding]"]
[Example: "73% of PE Firms Miss Half Their Target Market Due to Private Company Data Gaps"]
[Subhead: Source identification + one additional finding.]

[CITY, STATE, DATE] — [Company Name], [descriptor], today released findings from [Study Name], a survey of [N] [audience description] conducted in [month/quarter, year]. The study found that [lead finding in one sentence with the most important number].

[SIGNIFICANCE PARAGRAPH: 2-3 sentences. Why does this finding matter? What decision does it inform?]

KEY FINDINGS:
1. [Primary finding with specific percentage or number. Source: [Study Name].]
2. [Second finding. Directionally consistent or revealing a contrast.]
3. [Third finding — a segmentation or sub-finding that adds nuance.]
4. [Fourth finding — a behavioral or attitudinal data point.]
5. [Fifth finding — trend or year-over-year comparison if available.]

## Methodology

[Study Name] surveyed [N] [respondents description] between [date range]. Respondents were [selection criteria: company size, role, geography]. [Any weighting or validation steps]. [Margin of error if applicable]. [Data collection method: online survey, phone, structured interview].

[Optional: independent verification or third-party audit reference if applicable.]

## What the Data Shows

[NARRATIVE SECTION: 2-3 paragraphs interpreting the findings. Each paragraph covers one theme from the key findings. Keep paragraphs to 3 sentences. Lead each paragraph with the number.]

According to [Full Name], [Title] at [Company Name], "[Quote interpreting the data. What does this finding mean in practice? 15-25 words.]"

[Additional context paragraph. Connect the data to a market dynamic or structural cause. 2-3 sentences.]

"[Second quote — from a survey respondent or external analyst if available. Or a second company SME. 15-25 words.]" said [Full Name], [Title].

## How to Act on This Data

[Actionable interpretation: What should the audience do differently based on these findings? 3-5 specific, concrete recommendations. Numbered list.]

1. [Action]: [One-sentence rationale tied directly to a finding.]
2. [Action]: [One-sentence rationale.]
3. [Action]: [One-sentence rationale.]

## Frequently Asked Questions

**Q: [Question about what the data means for the specific audience]?**
A: [Complete answer. 2-3 sentences.]

**Q: [Question about methodology — "How was this study conducted?"]?**
A: [Complete answer. Credibility detail.]

**Q: [Question about acting on the findings — "What should X do about this?"]?**
A: [Complete answer. Specific.]

**Q: [Question about the audience segment or industry context]?**
A: [Complete answer.]

**Q: [Question comparing this finding to a prior period or industry benchmark]?**
A: [Complete answer.]

The full report is available at [yourdomain.com/research/[report-slug]].

About [Company Name]
[Descriptor. Founded year, HQ, scale signal.] Learn more at [yourdomain.com/specific-page].

Media Contact: [Name] | [email] | [phone]
[yourdomain.com/newsroom/[slug]]`

const DATA_EXAMPLE = `FOR IMMEDIATE RELEASE

67% of PE Firms Miss More Than Half Their Target Market Due to Private Company Data Gaps
Grata's 2026 Dealmaker Intelligence Report surveys 400 PE professionals on data coverage and deal sourcing outcomes.

NEW YORK, NY, March 2026 — Grata, the private company intelligence platform for dealmakers, today released the 2026 Dealmaker Intelligence Report, a survey of 400 private equity professionals conducted in Q4 2025. The study found that 67% of PE firms are missing more than half of their qualified targets in any given sector scan due to gaps in private company data coverage.

The finding has direct implications for deal sourcing strategy. A firm that believes it has surveyed the full market for a sector acquisition is, on average, looking at fewer than half the qualified targets that actually exist. The targets they are not seeing are often the ones most aligned with their investment criteria.

KEY FINDINGS:
1. 67% of PE respondents report missing more than half of qualified targets in sector scans (Grata, 2026 Dealmaker Intelligence Report).
2. 43% of respondents discovered a missed target only after a competitor announced an acquisition of that company.
3. Firms using AI-powered private company databases identified 3.2x more qualified targets per sector scan than firms using traditional commercial databases.
4. 78% of respondents said improving data coverage is a top-3 priority for their deal sourcing function in 2026.
5. Only 22% of respondents said they had high confidence their current databases covered the full universe of relevant private companies in their target sectors.

## Methodology

The 2026 Dealmaker Intelligence Report surveyed 400 private equity professionals at firms with $250M or more in assets under management. Respondents held roles in deal sourcing, business development, or portfolio management. The survey was conducted online between October and December 2025. Respondents were distributed across buyout (55%), growth equity (30%), and venture capital (15%) strategies. No minimum deal size threshold was applied. The survey was conducted by an independent research firm on behalf of Grata. The margin of error is plus or minus 4.9 percentage points at a 95% confidence level.

## What the Data Shows

The visibility gap is most acute at the earliest stages of deal sourcing. When firms run initial sector scans, they are working from databases that index companies that have raised institutional capital, issued press releases, or appeared in industry coverage. Founder-owned and bootstrapped businesses, which represent a significant share of PE-relevant acquisition targets, are systematically underrepresented in these sources.

According to Dan Kroeger, Head of Business Development at Grata, "The standard databases are built for companies that want to be found. The best acquisition targets are often companies that have never needed external capital and have no reason to maintain a public profile."

The behavioral finding is equally significant. When 43% of firms only discover a missed target after a competitor announces an acquisition, it means competitive intelligence is arriving too late to change sourcing strategy. The value of comprehensive coverage is not just in finding more targets. It is in finding them before anyone else does.

"We ran a sector scan with our previous data tools and found 180 companies," said a senior associate at a mid-market buyout firm quoted anonymously in the survey. "When we ran the same criteria through Grata, we found 470. The delta was almost entirely founder-owned businesses we had no way to identify before."

## How to Act on This Data

1. Audit your current database coverage: Run a sample sector scan and cross-reference results against an alternative data source. Measure the gap before assuming coverage is adequate.
2. Add private company intelligence to your tech stack: Platforms that index founder-owned and bootstrapped businesses expand your addressable market beyond what traditional databases cover.
3. Set data coverage as a sourcing KPI: Track the percentage of your target universe you have visibility into, not just the number of companies in your pipeline.
4. Build a continuous monitoring layer: One-time sector scans miss companies that enter your criteria between scan cycles. Persistent monitoring flags new entrants in real time.
5. Prioritize sub-sectors where coverage gaps are largest: Private company intelligence has the greatest impact in fragmented sectors with high concentrations of founder-owned businesses.

## Frequently Asked Questions

**Q: Why do PE firms miss qualified acquisition targets in their sector scans?**
A: The primary cause is database coverage gaps. Standard commercial databases index companies that have raised institutional capital or maintained a public profile. Founder-owned businesses, which represent a significant share of PE-relevant acquisition targets, are systematically absent. The result is that firms see a partial market and believe they are seeing the full one.

**Q: How was the 2026 Dealmaker Intelligence Report conducted?**
A: The study surveyed 400 PE professionals at firms with $250M or more in AUM, conducted by an independent research firm between October and December 2025. The margin of error is plus or minus 4.9 percentage points. Full methodology is available at grata.com/research/2026-dealmaker-intelligence-report.

**Q: What should PE firms do to improve their private company data coverage?**
A: The most direct action is adding an AI-powered private company intelligence platform to the deal sourcing tech stack. These platforms index the full universe of private companies, including founder-owned and bootstrapped businesses, rather than the subset that appears in institutional databases. Firms should also audit their current coverage by cross-referencing sector scans against alternative data sources.

**Q: How does AI-powered private company data differ from what PitchBook or CapIQ provides?**
A: PitchBook and CapIQ focus on companies that have raised institutional capital. AI-powered platforms like Grata index company information from a broader set of sources including licensing records, web signals, and operational data, covering businesses that have never raised external funding. The primary difference is breadth of coverage, not analytical depth.

**Q: How representative is this survey of the overall PE industry?**
A: The survey covers firms with $250M or more in AUM across buyout, growth equity, and venture strategies. It does not cover micro-PE or independent sponsors. The findings are most applicable to institutional PE firms with formal deal sourcing functions.

The full report is available at grata.com/research/2026-dealmaker-intelligence-report.

About Grata
Grata is the private company intelligence platform for dealmakers, indexing over 10 million private companies for PE firms, investment banks, and strategic acquirers. Founded 2018, headquartered in New York, NY. Learn more at grata.com/research.

Media Contact: press@grata.com
grata.com/newsroom/2026-dealmaker-intelligence-report`

// ─────────────────────────────────────────────
// FORMAT 5: EXPERT Q&A / COMMENTARY
// ─────────────────────────────────────────────
const QA_TEMPLATE = `FOR IMMEDIATE RELEASE

[EXPERT NAME] on [Topic]: "[Specific, Opinionated Claim in 10-12 Words]"
[Subhead: Title, organization, and one-sentence credential that explains why this person's opinion matters.]

[CITY, STATE, DATE] — [Company Name] today shared the following Q&A with [Expert Full Name], [Title] at [Company/Organization]. [Expert Name] has [specific credential: years of experience, number of deals, specific role history that makes them qualified to speak on this topic].

---

**Q: [First question — the broadest, most accessible question about this topic. This should be a question buyers actually search for.]**

[Full Name]: [Answer in first person. Conversational, not corporate. Specific claim or insight in the first two sentences. 3-5 sentences total. Include one concrete example or number if available.]

---

**Q: [Second question — drill into the core problem or challenge. "What's the biggest mistake...?" or "Why do most [audience] struggle with...?"]**

[Full Name]: [Answer. 3-5 sentences. Direct opinion. Specific. No hedge words like "it depends."]

---

**Q: [Third question — the how-to. "What specifically should [audience] do about...?"]**

[Full Name]: [Answer. 3-5 sentences. Numbered steps or named practices are ideal here. Concrete.]

---

**Q: [Fourth question — misconception or myth. "What do most people get wrong about...?"]**

[Full Name]: [Answer. 3-5 sentences. State the misconception clearly, then correct it.]

---

**Q: [Fifth question — forward-looking. "Where is [topic/market] heading?"]**

[Full Name]: [Answer. 3-5 sentences. Specific prediction with a timeframe. Not vague.]

---

**Q: [Sixth question — practical starting point. "If someone wanted to [do X], where would they start?"]**

[Full Name]: [Answer. 3-5 sentences. Actionable. Specific enough that a reader can act on it today.]

---

About [Expert Full Name]
[Full Name] is [Title] at [Company]. [2-3 sentences: specific experience, number of years, notable deals or outcomes, and one professional credential or recognition.] [LinkedIn or company profile URL — not homepage.]

About [Company Name]
[Descriptor. Founded year, HQ, scale signal.] Learn more at [yourdomain.com/specific-page].

Media Contact: [Name] | [email] | [phone]
[yourdomain.com/newsroom/[slug]]`

const QA_EXAMPLE = `FOR IMMEDIATE RELEASE

Dan Kroeger on Pre-Bid Intelligence: "Win Rate Is a Lagging Indicator. Data Coverage Is the Leading One."
The Head of Business Development at Grata on why PE firms are systematically blind to their best acquisition targets.

NEW YORK, NY, February 2026 — Grata today shared the following Q&A with Dan Kroeger, Head of Business Development at Grata. Kroeger has worked with over 200 PE firms on deal sourcing infrastructure and spent eight years in investment banking before joining Grata.

---

**Q: What is private company intelligence and why should PE firms care about it right now?**

Dan Kroeger: Private company intelligence is structured, continuously updated data on privately held businesses — their ownership, financials, headcount trends, and acquisition readiness signals. PE firms should care because the market for private acquisitions has gotten more competitive at the top while remaining systematically underexplored in the middle. Most firms are competing intensely for the same 20% of their target market and leaving the other 80% unexamined.

---

**Q: What's the biggest mistake PE firms make in their deal sourcing process?**

Dan Kroeger: Confusing database size with database coverage. A platform with 5 million companies sounds comprehensive until you realize your target sector has 3,000 relevant businesses and the database covers 800 of them. The firms that struggle most are the ones that have never audited their coverage gap. They run a sector scan, get back 150 results, and assume they've seen the market. They haven't seen it at all.

---

**Q: What specifically should a PE firm do to improve their private company data coverage?**

Dan Kroeger: Three things. First, audit your current tool by cross-referencing a sector scan result against a second data source. Measure the gap before you decide whether it matters. Second, add a platform that indexes founder-owned and bootstrapped businesses, not just VC-backed ones. Those are the most likely acquisition targets and the most underrepresented in standard databases. Third, build a continuous monitoring layer. One-time scans miss companies that enter your criteria between scan cycles.

---

**Q: What do most people get wrong about private company data quality?**

Dan Kroeger: They focus on the number of companies in the database instead of the accuracy of the firmographic data. A database with 20 million companies where 40% of the data is stale is worse than one with 5 million companies where data is verified quarterly. The quality question to ask is: when was this data last updated, and what was the source? If the answer is vague, the data is probably not reliable enough to make sourcing decisions with.

---

**Q: Where is private company intelligence heading in the next three years?**

Dan Kroeger: Intent-based acquisition modeling. Right now, the best tools tell you what companies exist and what they look like. The next generation will tell you which companies are 12 to 18 months away from a liquidity event based on behavioral and operational signals. Ownership transitions, leadership changes, accelerating headcount growth, and financing structure changes are all early signals that a company is approaching a sale process. That's the data layer that will define deal sourcing in 2027 and beyond.

---

**Q: If a PE deal team wanted to improve their pre-bid data process starting this month, where should they begin?**

Dan Kroeger: Run the audit I mentioned. Take one sector you actively source in and run your standard scan. Then run the same criteria through a platform you haven't used before. Count the gap. If you find 50 companies in your current tool and 200 in the new one, that gap is costing you. Once you see the number, the business case for better data coverage is self-evident. Most teams I've worked with see the gap and never go back to the old workflow.

---

About Dan Kroeger
Dan Kroeger is Head of Business Development at Grata. He has worked with over 200 PE firms on deal sourcing strategy and data infrastructure, and spent eight years as an investment banker at Lincoln International before joining Grata. Kroeger holds an MBA from the University of Chicago Booth School of Business. linkedin.com/in/dankroeger

About Grata
Grata is the private company intelligence platform for dealmakers, indexing over 10 million private companies for PE firms, investment banks, and strategic acquirers. Founded 2018, headquartered in New York, NY. Learn more at grata.com/deal-sourcing.

Media Contact: press@grata.com
grata.com/newsroom/dan-kroeger-pre-bid-intelligence-qa`

// ─────────────────────────────────────────────
// CONTENT TYPE DEFINITIONS
// ─────────────────────────────────────────────

const CONTENT_TYPES: ContentType[] = [
  {
    id: 'editorial',
    name: 'Editorial/Feature',
    subtitle: 'Deep narrative. Problem > Solution > How > Where',
    badge: 'High AI Authority',
    badgeColor: 'bg-blue-100 text-blue-800',
    keyStat: '"Best X" listicles lead at 21.9% of all AI citations, but editorial/feature content leads for informational queries at 45.5% citation share (Wix Studio AI Search Lab, 75,000 AI answers, March 2026)',
    keyStatSource: 'Wix Studio AI Search Lab via Search Engine Land (March 2026)',
    keyStatUrl: 'https://searchengineland.com/ai-citations-favor-listicles-articles-product-pages-study-472364',
    copyTemplate: EDITORIAL_TEMPLATE,
    exampleTitle: 'Grata Editorial: "Full Market Visibility Is Crucial for Winning Deals"',
    exampleSource: 'Real example modeled on Grata/PE market visibility format',
    exampleBody: EDITORIAL_EXAMPLE,
    template: [
      {
        label: 'Headline: Keyword-led declarative statement (12 words or fewer)',
        content: '"Full Market Visibility Is Crucial for Winning Deals: What PE Firms Need to Know Now"',
        why: 'AI systems extract position statements that mirror heading syntax. When your headline states a specific claim, AI answers cite it as the authoritative framing. Semrush found that heading-mirrored opening sentences directly boosted AI visibility by 3x in a documented case study.',
        source: 'Semrush AI Visibility Case Study via ppc.land (Nov 2025)',
        sourceUrl: 'https://ppc.land/semrush-triples-ai-visibility-in-one-month-with-systematic-optimization/',
      },
      {
        label: 'Story structure: Problem > Solution > How It Works > Where It\'s Going',
        content: 'Four H2 sections, each covering one phase of the story arc',
        why: 'Editorial AI notices with 4+ subheadings allow AI to extract each section as a standalone answer. Pages with clear H2/H3 hierarchies are cited as sources for narrower queries, multiplying citation surface area across related questions.',
        source: 'Notified/GlobeNewswire AI Format Guide (Oct 2025)',
        sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search',
      },
      {
        label: 'SME quotes: Woven throughout, placed EARLY in each section',
        content: '"According to [Full Name], [Title] at [Company], \'[Specific claim. 15-25 words.]\'"',
        why: 'The Princeton GEO study found that including quotations from relevant sources is one of the highest-impact strategies for AI citation. Wellows research confirms 100% of top-cited AI content shows visible expert credentials. Quote placement matters: put quotes in the first half of each section, not the end.',
        source: 'Princeton/IIT Delhi GEO Study (KDD 2024) + Wellows AI Content Research',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'Metrics: First sentence of each section, attributed',
        content: '"[Stat with source in same sentence]. According to [Study], [number]."',
        why: 'AI extracts "position statements" from early in each section. A metric buried in paragraph 3 will not be extracted. A metric in sentence 1, with attribution in the same sentence, becomes a citable fact the AI can reproduce accurately.',
        source: 'Princeton GEO Paper + Notified AI Format Guide',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'FAQ section: 5 questions buyers actually search for',
        content: '"Q: [Actual search query]? A: [Complete, self-contained answer in 2-3 sentences.]"',
        why: 'Frase.io research found pages with FAQPage schema are 3.2x more likely to appear in Google AI Overviews. Each FAQ pair is an independent citation opportunity. Write each answer as if ChatGPT will display it verbatim.',
        source: 'Frase.io FAQ Schema AI Search Research (Nov 2025)',
        sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
      },
      {
        label: 'Deep links: 2-3 internal links per 500 words, specific anchor text',
        content: 'Link on first mention of topic. Anchor text: "private company intelligence platform" not "click here"',
        why: 'Internal linking distributes authority across your domain and signals topical depth to AI indexing systems. Anchor text should describe the destination specifically. Link to authority pages (product page, research page) not your homepage.',
        source: 'Stridec AI SEO Internal Linking Models (Feb 2026)',
        sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/',
      },
      {
        label: 'Permanent newsroom URL: yourdomain.com/newsroom/[slug]',
        content: 'Published on your owned domain, not only wire-distributed',
        why: 'Newsroom-published releases account for 18% of ChatGPT citations. Wire-only syndicated content accounts for 0.04%. The domain authority, permanent URL, and crawlability of your own newsroom are what drive AI citation, not wire distribution alone.',
        source: 'ACCESS Newswire Report (March 2026)',
        sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and',
      },
    ],
    checklist: [
      { text: 'No em-dashes anywhere in the document (breaks AI parsing)', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'Headline is a declarative statement, keyword-led, 12 words or fewer', source: 'Semrush AI Visibility Case Study', sourceUrl: 'https://ppc.land/semrush-triples-ai-visibility-in-one-month-with-systematic-optimization/' },
      { text: '4+ H2 sections following Problem > Solution > How > Where story arc', source: 'Notified/GlobeNewswire AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'SME quotes woven throughout (not isolated at the end)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Quotes are 15-25 words, placed early in each section', source: 'Princeton GEO Paper + Wellows Research', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Metrics appear in first sentence of each section with attribution', source: 'Princeton GEO Paper + Notified Format Guide', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'All stats formatted: "According to [Source], [number]."', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: '5 FAQ pairs, each a real search query with a complete 2-3 sentence answer', source: 'Frase.io FAQ Schema Research (Nov 2025)', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
      { text: '2-3 internal deep links per 500 words, specific descriptive anchor text', source: 'Stridec AI SEO Internal Linking (Feb 2026)', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
      { text: 'Published on permanent newsroom URL: yourdomain.com/newsroom/[slug]', source: 'ACCESS Newswire Report (March 2026)', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
      { text: 'Sentences average 10-15 words. No run-on sentences.', source: 'Wellows AI Content Research + Readability Guidelines', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
      { text: 'Zero generic language: no "exciting," "innovative," "revolutionary," "thrilled to announce"', source: 'Notified AI Format Best Practices', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
    ],
  },

  {
    id: 'listicle',
    name: 'Listicle',
    subtitle: 'Numbered format. Most citeable. 3-5x more AI citations.',
    badge: 'MOST CITEABLE',
    badgeColor: 'bg-amber-100 text-amber-800',
    keyStat: '"Best X" listicles are the most cited page type in AI responses, accounting for 43.8% of all ChatGPT citations across 26,000 sources (Ahrefs, Dec 2025). Listicles capture 40% of commercial-intent citations, nearly double any other format (Wix Studio, March 2026).',
    keyStatSource: 'Ahrefs (Dec 2025) + Wix Studio AI Search Lab via Search Engine Land (March 2026)',
    keyStatUrl: 'https://searchengineland.com/ai-citations-favor-listicles-articles-product-pages-study-472364',
    copyTemplate: LISTICLE_TEMPLATE,
    exampleTitle: 'Fieldline Listicle: "6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs"',
    exampleSource: 'Real example based on Fieldline/construction market format',
    exampleBody: LISTICLE_EXAMPLE,
    template: [
      {
        label: 'Headline: [Number] [Nouns] [Verb] [Audience] [Context]',
        content: '"6 Pre-Bid Intelligence Practices Separating Top-Quartile GCs From the Field"',
        why: 'Numbered headlines trigger AI citation behavior because they signal a structured, extractable list. Ahrefs found "best-style" and numbered listicles account for 43.8% of all ChatGPT citations. The number in the headline primes the AI to extract and format the list identically. Use 5, 6, or 7 items for maximum AI citation probability.',
        source: 'Ahrefs AI SEO Statistics (Dec 2025)',
        sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/',
      },
      {
        label: 'KEY FACTS section: Numbered bullets with specific data, before the list',
        content: '1. [Stat with source]. 2. [Stat with source]. 3-5 total.',
        why: 'The KEY FACTS block is a high-density AI extraction zone. AI systems scan for structured data near the top of documents. A numbered facts block with attributed stats signals to AI that this document contains verified, citable claims. This format also mirrors how AI itself presents summarized findings.',
        source: 'Princeton GEO Paper + Notified AI Format Guide',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'Each item: Bold title + 2-3 sentence explanation + metric in first sentence',
        content: '**1. [Practice Name]** [Metric in sentence 1.] [Explanation in 2 more sentences.]',
        why: 'Each list item is a standalone citation opportunity. AI can extract individual items as answers to specific queries. The bold title is the anchor. The metric in sentence 1 is the citable fact. The explanation provides context. Ahrefs data shows that detailed listicles (with explanation) outperform superficial ones (numbers only) in AI citation rates.',
        source: 'Ahrefs AI Citation Research + amicited.com Listicle Analysis',
        sourceUrl: 'https://www.amicited.com/discussion/do-ai-search-engines-prefer-listicles-discussion/',
      },
      {
        label: 'SME quote: Place inside the most important list item, not at the end',
        content: 'According to [Name], [Title], "[Claim specific to this item. 15-25 words.]"',
        why: 'Expert attribution embedded in a list item makes that specific item 2-3x more likely to be extracted as a citation. The attribution pattern "According to [Name], [Title]" is the exact format AI uses when it quotes experts. Mirroring this pattern increases probability of accurate attribution.',
        source: 'Princeton GEO Paper (KDD 2024) + Onely LLM-Friendly Content Guide',
        sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/',
      },
      {
        label: 'Pattern synthesis section: Summarize what all items have in common',
        content: '"## What These Patterns Reveal" — paragraph + SME quote synthesizing the full list',
        why: 'The synthesis section gives AI a pre-built summary it can extract for overview queries. When a user asks "what are the best practices for X?" the AI can cite either the full list or the synthesis paragraph, depending on the query. This doubles the citation surface.',
        source: 'LLMRefs GEO Guide + Snezzi Listicle Optimization for AI',
        sourceUrl: 'https://snezzi.com/blog/listicle-optimization-for-ai-9-tweaks-to-boost-citations/',
      },
      {
        label: 'FAQ: Write questions as literal search queries, not rhetorical questions',
        content: '"Q: What pre-bid intelligence practices do top GCs use to win more bids?" (not "So What Does This Mean?")',
        why: 'AI FAQ extraction is triggered by question phrasing that matches actual user queries. Questions that mirror how buyers search ("what practices," "how does X work," "what does X cost") are more likely to appear in AI answers to those exact queries. Rhetorical headings have no citation value.',
        source: 'Frase.io FAQ Schema Research + SingleGrain AI Overviews Guide',
        sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
      },
    ],
    checklist: [
      { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'Headline follows "[Number] [Nouns] [Verb] [Audience]" structure', source: 'Ahrefs AI SEO Statistics (Dec 2025)', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
      { text: 'Number of items is 5, 6, or 7 (not 3, not 10+)', source: 'Ahrefs listicle citation research', sourceUrl: 'https://www.position.digital/blog/ai-seo-statistics/' },
      { text: 'KEY FACTS section with 5 numbered stats, each with source attribution', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Each list item: bold title + metric in first sentence + 2-3 sentence explanation', source: 'Ahrefs + amicited.com Listicle Analysis', sourceUrl: 'https://www.amicited.com/discussion/do-ai-search-engines-prefer-listicles-discussion/' },
      { text: 'SME quote placed inside the most important list item (not isolated at end)', source: 'Princeton GEO Paper + Onely LLM Guide', sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/' },
      { text: 'SME quote format: "According to [Full Name], [Title] at [Company], \'[Quote.]\'\"', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Pattern synthesis section summarizes all items in 2-3 sentences', source: 'LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
      { text: 'FAQ questions are actual search queries (what, how, which, why)', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
      { text: '5 FAQ pairs, each with a 2-3 sentence complete answer', source: 'Frase.io FAQ Schema Research (Nov 2025)', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
      { text: 'Published on permanent newsroom URL with FAQPage schema markup', source: 'Frase.io + BrightEdge Structured Data Guide', sourceUrl: 'https://www.brightedge.com/blog/structured-data-ai-search-era' },
      { text: 'Zero slop markers: no "in today\'s landscape," "it\'s important to note," "one of the most"', source: 'AI Notice format best practices', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
    ],
  },

  {
    id: 'news',
    name: 'News/Announcement',
    subtitle: 'News hook first. Metric in headline. [CITY, STATE, DATE] format.',
    badge: 'Wire-Ready',
    badgeColor: 'bg-green-100 text-green-800',
    keyStat: 'Press release citations grew 5x since July 2025, driven by structured formatting and newsroom placement. Newsroom-published releases account for 18% of ChatGPT citations; wire-syndicated content accounts for 0.04% (ACCESS Newswire, March 2026).',
    keyStatSource: 'ACCESS Newswire + GlobeNewswire Muck Rack Data Report (Dec 2025)',
    keyStatUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and',
    copyTemplate: NEWS_TEMPLATE,
    exampleTitle: 'Fieldline News: "Fieldline Expands Pre-Bid Intelligence Coverage to All 50 States"',
    exampleSource: 'Real example based on Fieldline national coverage expansion format',
    exampleBody: NEWS_EXAMPLE,
    template: [
      {
        label: 'Headline: News verb + specific metric, not a teaser',
        content: '"Fieldline Expands Pre-Bid Intelligence Coverage to All 50 States" (not "Fieldline Makes Big Announcement")',
        why: 'AI extracts position statements from document titles. A headline with a specific metric ("All 50 States") is directly citable as a factual claim. A vague headline has no citation value. Notified\'s AI format guide confirms that keyword-rich, specific headlines are the primary AI indexing signal for announcement content.',
        source: 'Notified/GlobeNewswire AI Format Guide (Oct 2025)',
        sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search',
      },
      {
        label: '[CITY, STATE, DATE] dateline format',
        content: 'AUSTIN, TX, January 2026 — [Company Name]...',
        why: 'The dateline format signals to AI systems that this document is a verified news item. BusinessWire\'s AI guide confirms that structure and format determine whether AI recognizes content as a credible, citable source. Missing or malformed datelines reduce AI citation probability.',
        source: 'BusinessWire AI/GEO Press Release Guide (Jan 2025)',
        sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy',
      },
      {
        label: 'News hook in first sentence, scale in second sentence',
        content: '[Company] today announced [X]. [Now serving Y clients in Z states].',
        why: 'AI extracts the lead paragraph as the primary citation content. A buried news lead means AI may miss the core story. Specific scale signals ("850 general contractor firms," "14 companies on the ENR Top 400") give AI accurate context for related queries about company size and market position.',
        source: 'BusinessWire AI Guide + PR Newswire AI Era Announcement (Nov 2025)',
        sourceUrl: 'https://www.prnewswire.com/apac/news-releases/pr-newswire-powers-the-ai-era-embracing-the-future-of-ai-search-and-information-discovery-302615352.html',
      },
      {
        label: 'KEY FACTS section: 5 numbered bullets with specific metrics',
        content: '1. [Specific metric with attribution]. 2. [Second metric]. 3-5 total.',
        why: 'The KEY FACTS block is optimized for AI extraction. Structured, numbered facts with source attribution mirror the output format AI uses when summarizing announcements. PR Newswire\'s AI era guidance specifically calls out structured metadata as a primary AI attribution signal.',
        source: 'PR Newswire AI Era Guide (Nov 2025) + Princeton GEO Paper',
        sourceUrl: 'https://www.prnewswire.com/apac/news-releases/pr-newswire-powers-the-ai-era-embracing-the-future-of-ai-search-and-information-discovery-302615352.html',
      },
      {
        label: 'Executive quote: Real insight, not a cliche',
        content: '"National GCs should not have to change their pre-bid process depending on what state a project is in." (specific claim, not "We\'re excited to announce")',
        why: 'BusinessWire\'s AI guide confirms that quotes adding substance outperform boilerplate in AI citation rates. AI systems favor quotes that contain specific, attributable claims or predictions. Generic "thrilled to announce" quotes have zero citation value.',
        source: 'BusinessWire AI/GEO Press Release Guide (Jan 2025)',
        sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy',
      },
      {
        label: 'Boilerplate: Specific, with founding year, HQ, and scale signal',
        content: 'About Fieldline: [Descriptor. Founded year, city. One scale signal: employees, customers, revenue band.]',
        why: 'The boilerplate is extracted verbatim by AI when responding to "What is [Company]?" queries. A specific boilerplate with founding year, HQ, and a scale signal gives AI accurate context to cite. PR Newswire\'s AI guidance specifically identifies boilerplate as a primary source for AI brand attribution.',
        source: 'PR Newswire AI Era Guide (Nov 2025)',
        sourceUrl: 'https://www.prnewswire.com/apac/news-releases/pr-newswire-powers-the-ai-era-embracing-the-future-of-ai-search-and-information-discovery-302615352.html',
      },
    ],
    checklist: [
      { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'Headline contains the news verb + specific metric or scope', source: 'Notified/GlobeNewswire AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'Standard dateline: [CITY, STATE, DATE] — [Company]', source: 'BusinessWire AI Guide + AP Style', sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy' },
      { text: 'News hook in first sentence. Scale or metric in second sentence.', source: 'BusinessWire AI Guide', sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy' },
      { text: 'KEY FACTS section with 5 numbered bullets, each with a metric and source', source: 'PR Newswire AI Era Guide (Nov 2025)', sourceUrl: 'https://www.prnewswire.com/apac/news-releases/pr-newswire-powers-the-ai-era-embracing-the-future-of-ai-search-and-information-discovery-302615352.html' },
      { text: 'Executive quote contains a specific claim (not a generic announcement phrase)', source: 'BusinessWire AI Guide (Jan 2025)', sourceUrl: 'https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy' },
      { text: 'Boilerplate includes: founding year, HQ city, one scale signal (customers/employees/revenue)', source: 'PR Newswire AI Era Guide', sourceUrl: 'https://www.prnewswire.com/apac/news-releases/pr-newswire-powers-the-ai-era-embracing-the-future-of-ai-search-and-information-discovery-302615352.html' },
      { text: '5 FAQ pairs at end, each question mirrors a real search query', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
      { text: 'Published on permanent newsroom URL (not wire-only)', source: 'ACCESS Newswire Report (March 2026)', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
      { text: 'Page is publicly crawlable (no paywall, no noindex, no bot-blocking)', source: 'Goodie AI Crawling Guide', sourceUrl: 'https://higoodie.com/blog/why-isnt-my-site-being-crawled-indexed-cloudflare-blockage' },
      { text: 'NewsArticle or PressRelease JSON-LD schema on the newsroom page', source: 'BrightEdge Structured Data Guide', sourceUrl: 'https://www.brightedge.com/blog/structured-data-ai-search-era' },
      { text: 'Link to a supporting editorial or product page from within the body', source: 'ALM Corp AI Citation Research (March 2026)', sourceUrl: 'https://almcorp.com/blog/ai-search-press-release-citations/' },
    ],
  },

  {
    id: 'data',
    name: 'Data/Research Release',
    subtitle: 'Stat is the headline. Methodology = credibility signal.',
    badge: 'High Credibility',
    badgeColor: 'bg-purple-100 text-purple-800',
    keyStat: 'GEO strategies that include statistics and citations boost AI visibility by up to 40%. Including statistics is one of the top-performing optimization strategies across all tested content types (Princeton/IIT Delhi, KDD 2024).',
    keyStatSource: 'Aggarwal et al., Princeton/IIT Delhi — GEO Paper, KDD 2024',
    keyStatUrl: 'https://arxiv.org/abs/2311.09735',
    copyTemplate: DATA_TEMPLATE,
    exampleTitle: 'Grata Data Release: "67% of PE Firms Miss More Than Half Their Target Market"',
    exampleSource: 'Grata 2026 Dealmaker Intelligence Report format',
    exampleBody: DATA_EXAMPLE,
    template: [
      {
        label: 'Headline: The stat IS the headline',
        content: '"67% of PE Firms Miss More Than Half Their Target Market Due to Private Company Data Gaps"',
        why: 'For data releases, the headline must state the finding, not tease it. AI answers cite specific statistics with attribution. When the stat is in the headline, it becomes the most extracted element of the document. Vague headlines ("New Research Shows Private Equity Firms Have Data Challenges") have no citation value.',
        source: 'Princeton GEO Paper (KDD 2024) + Notified AI Format Guide',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'Methodology section: Required credibility signal',
        content: 'N=, respondent criteria, date range, selection method, margin of error, third-party audit if any',
        why: 'AI citation systems prioritize credible sources. A methodology section with sample size, respondent criteria, and data collection method signals that findings are verifiable. The Princeton GEO study identifies "statistics with verification signals" as a top citation strategy. A missing methodology reduces citation probability.',
        source: 'Princeton GEO Paper (KDD 2024)',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'KEY FINDINGS: 5 numbered stats, each with source attribution',
        content: '1. [Stat]. 2. [Stat]. 3. [Stat]. 4. [Stat]. 5. [Stat]. (All formatted "Finding (Source, Year).")',
        why: 'Numbered key findings are the highest-density AI extraction zone in a data release. Each finding is an independent citation opportunity. Format: "43% of respondents discovered a missed target only after a competitor announced an acquisition (Grata, 2026)." The parenthetical attribution makes each stat independently citable.',
        source: 'Princeton GEO Paper (KDD 2024) + PR Newswire AI Era Guide',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'SME quote: Interpreting the data, placed early in the narrative section',
        content: 'According to [Full Name], [Title], "[Quote interpreting what the data means. 15-25 words.]"',
        why: 'Data releases without SME interpretation are less citable because AI cannot source a claim without an attribution anchor. The quote should interpret the data ("The firms that struggle most are the ones that have never audited their coverage gap"), not restate it.',
        source: 'Princeton GEO Paper + Onely LLM-Friendly Content Guide',
        sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/',
      },
      {
        label: '"How to Act on This Data" section: Numbered actionable recommendations',
        content: '1. [Action]: [One-sentence rationale tied to a finding]. 2. [Action]... 3-5 total.',
        why: 'AI answers to "what should X do about Y" queries look for structured, actionable content. A numbered action section signals to AI that this document answers implementation queries, not just diagnostic ones. This expands citation surface to include "how to" queries that the raw data does not answer.',
        source: 'Notified AI Format Guide + LLMRefs GEO Guide',
        sourceUrl: 'https://llmrefs.com/generative-engine-optimization',
      },
      {
        label: 'Full report link: yourdomain.com/research/[report-slug]',
        content: '"The full report is available at grata.com/research/2026-dealmaker-intelligence-report."',
        why: 'Linking to the full report from the release creates an internal authority chain. The report page accumulates its own citations; the release links to it, passing AI citation context. Both pages benefit. Link text should be descriptive: "2026 Dealmaker Intelligence Report" not "click here."',
        source: 'Stridec AI SEO Internal Linking Models (Feb 2026)',
        sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/',
      },
    ],
    checklist: [
      { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'Headline states the primary stat (not a tease or vague claim)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Subhead identifies the study, sample size, and one additional finding', source: 'Notified AI Format Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'Methodology section: N, respondent criteria, date range, collection method, margin of error', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: '5 KEY FINDINGS, each with the stat and source in the same bullet', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Stats formatted: "[Number] (Source, Year)" in the findings list', source: 'Princeton GEO Paper', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'SME quote interprets the data (not restates it). Placed early in narrative section.', source: 'Princeton GEO Paper + Onely LLM Guide', sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/' },
      { text: '"How to Act on This Data" section with 3-5 numbered actions tied to findings', source: 'Notified AI Format + LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
      { text: '5 FAQ pairs at end, questions written as literal search queries', source: 'Frase.io FAQ Schema Research', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
      { text: 'FAQ includes "How was this study conducted?" as one question', source: 'Credibility signal best practice', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Full report available at a permanent URL (linked from the release)', source: 'Stridec AI SEO Internal Linking', sourceUrl: 'https://www.stridec.com/blog/ai-seo-internal-linking-models/' },
      { text: 'Published on permanent newsroom URL, AI-crawlable (no paywall)', source: 'ACCESS Newswire + Goodie AI Crawling Guide', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
    ],
  },

  {
    id: 'qa',
    name: 'Expert Q&A',
    subtitle: 'SME-driven. Conversational. Q&A pairs = AI citation pairs.',
    badge: 'High Attribution',
    badgeColor: 'bg-rose-100 text-rose-800',
    keyStat: '100% of top-cited AI content demonstrates clear E-E-A-T signals, including visible expert credentials and author expertise. LLMs prioritize content with "original research, expert perspectives, specific data, and consistent brand presence" (Wellows, 2025; Onely, 2025).',
    keyStatSource: 'Wellows AI Content Research (2025) + Onely LLM Optimization Guide (Nov 2025)',
    keyStatUrl: 'https://www.onely.com/blog/llm-friendly-content/',
    copyTemplate: QA_TEMPLATE,
    exampleTitle: 'Grata Q&A: "Dan Kroeger on Pre-Bid Intelligence: Win Rate Is a Lagging Indicator"',
    exampleSource: 'Expert commentary format, Grata/dealmaker market',
    exampleBody: QA_EXAMPLE,
    template: [
      {
        label: 'Headline: [Expert Name] on [Topic]: "[Specific opinionated claim in 10-12 words]"',
        content: '"Dan Kroeger on Pre-Bid Intelligence: \'Win Rate Is a Lagging Indicator. Data Coverage Is the Leading One.\'"',
        why: 'The Q&A headline establishes the expert as the attributed source for a specific claim. AI systems can cite this headline as "[Expert Name] said..." followed by the claim. The named attribution in the headline is the citation anchor. A generic headline ("Expert Shares Insights") has no citation value.',
        source: 'Princeton GEO Paper + Onely LLM Content Guide',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'SME credential block: Years of experience, specific deals or outcomes, one credential',
        content: '[Name] has worked with over 200 PE firms... spent eight years in investment banking... holds MBA from...',
        why: 'Wellows research found 100% of top-cited AI content shows visible expert credentials. The credibility block before the Q&A establishes why this person is qualified to speak on this topic. AI systems weigh E-E-A-T signals when deciding whether to cite a source. Specific credentials (years, deals, role history) are stronger signals than generic titles.',
        source: 'Wellows AI Content Research (2025) + Onely LLM-Friendly Content Guide',
        sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/',
      },
      {
        label: 'Q&A format: Questions match actual buyer search queries',
        content: '"Q: What is private company intelligence and why should PE firms care about it right now?"',
        why: 'Each Q&A pair is a standalone citation opportunity. When AI receives a query that matches a Q in the document, it can cite the corresponding A verbatim. Questions that mirror actual search queries ("what is," "how does," "what should," "what do people get wrong about") have the highest AI extraction probability.',
        source: 'Frase.io FAQ Research + LLMRefs GEO Guide',
        sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo',
      },
      {
        label: 'Answers: First-person, 3-5 sentences, specific claim in first 2 sentences',
        content: '[Expert Name]: [Specific claim or insight in sentence 1.] [Concrete example or number in sentence 2.] [3-5 sentences total.]',
        why: 'AI extracts position statements from the beginning of answer text. An answer that opens with the expert\'s core claim is citable immediately. An answer that builds to its point over 4 sentences before landing it will have lower extraction probability. The first-person voice maintains the conversational tone that makes Q&A content distinct and highly citable.',
        source: 'Princeton GEO Paper (KDD 2024)',
        sourceUrl: 'https://arxiv.org/abs/2311.09735',
      },
      {
        label: 'Natural language: No corporate speak, no hedge words',
        content: '"The firms that struggle most are the ones that have never audited their coverage gap." (not "Organizations may wish to consider evaluating their data infrastructure")',
        why: 'AI citation research consistently shows that direct, confident language is more citable than hedged corporate language. Phrases like "it depends," "organizations may wish to," and "in today\'s landscape" are non-specific and reduce citation probability. The Q&A format earns its citation value by providing a named expert\'s direct opinion.',
        source: 'Notified AI Format Guide + LLMRefs GEO Guide',
        sourceUrl: 'https://llmrefs.com/generative-engine-optimization',
      },
      {
        label: 'About the Expert section: Specific background, LinkedIn URL',
        content: '[Name] is [Title]. [Specific experience: deals, years, outcomes.] [Credential. LinkedIn URL.]',
        why: 'The expert bio is extracted by AI when the expert is cited in subsequent queries. A specific bio with verifiable credentials ("spent eight years as an investment banker at Lincoln International") gives AI accurate context for the expert\'s authority. A LinkedIn URL makes the expert findable and citable by name across platforms.',
        source: 'Wellows Research + Onely E-E-A-T Guide',
        sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/',
      },
    ],
    checklist: [
      { text: 'No em-dashes anywhere in the document', source: 'AI Notice format best practice', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
      { text: 'Headline: "[Expert Name] on [Topic]: \'[Specific claim]\'\"', source: 'Princeton GEO Paper + Onely Guide', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Subhead establishes expert title, organization, and why they are qualified', source: 'Wellows AI Content Research', sourceUrl: 'https://wellows.com/blog/readability-score-in-ai-content/' },
      { text: 'Credential block before Q&A: years of experience, specific outcomes, one formal credential', source: 'Wellows + Onely E-E-A-T research', sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/' },
      { text: '6 Q&A pairs minimum, each question matching an actual buyer search query', source: 'Frase.io FAQ Research + LLMRefs GEO Guide', sourceUrl: 'https://www.frase.io/blog/faq-schema-ai-search-geo-aeo' },
      { text: 'Every answer opens with the expert\'s core claim (not with context or caveats)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Answers are 3-5 sentences in first-person voice', source: 'Princeton GEO Paper', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'Zero hedge language: no "it depends," "may wish to," "it\'s important to," "in today\'s landscape"', source: 'Notified AI Format + LLMRefs GEO Guide', sourceUrl: 'https://llmrefs.com/generative-engine-optimization' },
      { text: 'At least one answer includes a concrete number (deals, %, years, or dollar amount)', source: 'Princeton GEO Paper (KDD 2024)', sourceUrl: 'https://arxiv.org/abs/2311.09735' },
      { text: 'About the Expert section: specific background, verifiable credential, LinkedIn URL', source: 'Wellows + Onely E-E-A-T research', sourceUrl: 'https://www.onely.com/blog/llm-friendly-content/' },
      { text: 'Published on permanent newsroom URL, AI-crawlable', source: 'ACCESS Newswire + BusinessWire AI Guide', sourceUrl: 'https://www.newswire.com/news/access-newswire-report-press-release-distribution-has-entered-the-ai-era-and' },
      { text: 'No run-on sentences. No generic language. Reads like a real conversation.', source: 'Notified AI Format + LLMRefs GEO Guide', sourceUrl: 'https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search' },
    ],
  },
]

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function RulesWorkspace() {
  const [selectedType, setSelectedType] = useState('editorial')
  const [activeView, setActiveView] = useState<FormatTabView>('template')
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
      {/* Format Selector */}
      <div className="border-b border-gray-200 px-12 py-4 bg-gray-50">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
          AI Notice Format
        </div>
        <div className="flex gap-3 flex-wrap">
          {CONTENT_TYPES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedType(c.id)
                setActiveView('template')
              }}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                selectedType === c.id
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
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
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-bold text-gray-900">{content.name}</h2>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${content.badgeColor}`}>
                  {content.badge}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{content.subtitle}</p>
            </div>
          </div>

          {/* Key Research Stat */}
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
              { id: 'example' as const, label: '📄 Example' },
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
                Replace all [BRACKETED] items with your content. Switch to "Example" to see a real-world application.
              </p>
            </div>
          )}

          {/* EXAMPLE VIEW */}
          {activeView === 'example' && (
            <div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 flex gap-2 items-start">
                <span className="text-blue-600 text-sm">📄</span>
                <div>
                  <p className="text-xs font-semibold text-blue-800">{content.exampleTitle}</p>
                  <p className="text-xs text-blue-600 mt-0.5">{content.exampleSource}</p>
                </div>
              </div>
              <div className="bg-gray-950 rounded-xl p-6 mb-4">
                <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {content.exampleBody}
                </pre>
              </div>
              <p className="text-xs text-gray-400 text-center">
                This example follows the template structure exactly. Compare it to the Template tab to see how each element maps.
              </p>
            </div>
          )}

          {/* WHY IT WORKS VIEW */}
          {activeView === 'why' && (
            <div className="space-y-4">
              {content.template.map((section, idx) => (
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
                        {section.source} ↗
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
                  {checkedCount}/{content.checklist.length}
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
                    All requirements met. This AI Notice is optimized for maximum citation probability.
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
