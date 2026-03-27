# SME Attribution and Metric Placement Guide

## Why These Two Elements Drive AI Citation

The Princeton GEO study (KDD 2024) identified the top strategies for boosting AI visibility. Two of the highest-impact strategies are:

1. Including quotations from relevant sources (SME attribution)
2. Including statistics with clear attribution (metric placement)

Combined, these two elements can increase AI visibility by up to 40% (Aggarwal et al., 2024).

Source: Aggarwal, P. et al., "GEO: Generative Engine Optimization," KDD 2024. https://arxiv.org/abs/2311.09735

---

## Part 1: SME Attribution Patterns

### The Attribution Formula

Standard format AI systems recognize as citable:

`According to [Full Name], [Title] at [Company], "[Quote.]"`

Examples:

- "According to Dan Kroeger, Head of Business Development at Grata, 'Firms consistently overestimate their market coverage.'"
- "According to Jordan Kessler, CEO of Fieldline, 'National GCs should not have to change their pre-bid process depending on what state a project is in.'"
- "According to Marcus Webb, VP of Estimating at Meridian Construction Group, 'The firms that keep their own performance database on subs have a structural advantage.'"

### Why "According to" Beats Every Other Attribution Format

AI systems are trained on large corpora of cited text. The phrase "According to [person], [claim]" is the most common citation pattern in that training data. When your content mirrors this exact pattern, AI extraction probability increases because the pattern is familiar and parseable.

Patterns that work:
- "According to [Name], [Title], '[Quote.]'"
- "[Name], [Title] at [Company], said: '[Quote.]'"
- "'[Quote],' said [Name], [Title] at [Company]."

Patterns that reduce citation probability:
- "As [Name] noted..." (vague verb, incomplete attribution)
- "Our CEO believes..." (missing full attribution)
- "[Company] says..." (company-level, not person-level attribution)

### Quote Length: 10-30 Words for Maximum Citability

The citable range is 10-30 words per quote.

- Under 10 words: Too short to contain a citeable claim
- 10-30 words: Ideal. Long enough to make a specific point. Short enough to extract cleanly.
- Over 30 words: AI may truncate or paraphrase, losing attribution accuracy

Examples by length:

Under 10 (not citable as a standalone):
"The data is clear." (4 words)

10-25 words (ideal):
"Firms consistently overestimate their market coverage. The targets they never saw are often the best ones." (16 words)

Over 30 (too long for clean extraction):
"When you look at what these firms are doing with their current tools, and you compare that to what firms that use comprehensive coverage tools are able to accomplish on a quarter-by-quarter basis, the difference is significant." (39 words)

### Quote Placement: Early in the Section, Not at the End

AI extracts "position statements" from the first 50% of each section. A quote placed at the end of a section paragraph has lower extraction probability than a quote placed in the opening or middle.

Wrong structure:
1. Context paragraph (3 sentences)
2. Additional context (2 sentences)
3. Quote at the end

Right structure:
1. Opening stat or claim (1-2 sentences)
2. SME quote immediately after (10-30 words)
3. Expansion paragraph (2-3 sentences)

### SME Credential Signal: What to Include

AI systems weigh E-E-A-T (Experience, Expertise, Authority, Trust). For each SME, include at minimum:

- Full name (not "our CEO")
- Specific title (not "executive")
- Company name (not "the company")
- One credential signal: years in role, deals closed, specific prior experience, or named credential

Example of full credential signal:
"Dan Kroeger, Head of Business Development at Grata, has worked with over 200 PE firms on deal sourcing infrastructure and spent eight years in investment banking at Lincoln International."

This level of specificity increases AI citation probability because each element is independently verifiable.

Source: Wellows AI Content Research (2025); Onely LLM-Friendly Content Guide (Nov 2025)

---

## Part 2: Metric Placement Rules

### Rule 1: Metric in the First Sentence of Each Section

AI extracts position statements from early in each section. A metric buried in the third sentence of a paragraph has much lower extraction probability than a metric in the first sentence.

Wrong:
"Most deal teams believe their pipeline is comprehensive. They run sector scans and review available databases. In fact, standard commercial databases cover fewer than 40% of relevant private companies in most sectors."

Right:
"Standard commercial databases cover fewer than 40% of relevant private companies in most sectors. Deal teams that rely on these tools are systematically missing the majority of their qualified targets."

### Rule 2: Attribution in the Same Sentence as the Stat

AI cannot cite a stat it cannot source. Attribution must appear in the same sentence as the number.

Format:
"[Stat], according to [Source]."
OR
"According to [Source], [Stat]."

Examples:
- "GCs using structured pre-bid intelligence win 34% more bids than those relying on estimator experience alone, according to Fieldline analysis of 1,200 projects."
- "According to the 2026 Dealmaker Intelligence Report, 67% of PE firms miss more than half of their qualified targets in any given sector scan."

Not citable:
"67% of PE firms miss more than half of their qualified targets. This finding comes from Grata's latest research." (Attribution in a separate sentence reduces extraction probability)

### Rule 3: Verification Signals Increase Credibility

Verification signals are specific details that make a stat more trustworthy and more citable.

Verification signal types:

| Signal Type | Example |
|------------|---------|
| Sample size | "survey of 400 PE professionals" |
| Date range | "collected between October-December 2025" |
| Methodology | "analysis of 1,200 construction projects across 40 states" |
| Third-party audit | "independently verified by [Firm]" |
| Margin of error | "plus or minus 4.9 percentage points at 95% confidence" |
| Respondent criteria | "firms with $250M or more in assets under management" |

A stat with two or more verification signals is significantly more citable than a bare number.

### Rule 4: KEY FACTS Section Placement

Place the KEY FACTS section near the top of the document, after the lead paragraph. This is the highest-density AI extraction zone.

Format:
```
KEY FACTS:
1. [Stat with attribution].
2. [Stat with attribution].
3. [Stat with attribution].
4. [Stat with attribution].
5. [Stat with attribution].
```

Each item should be self-contained: a reader (or AI) should be able to understand the claim from that one line without reading the surrounding text.

### Rule 5: External Stats vs. Proprietary Stats

Both types are citable, but they serve different purposes.

External stats (from third-party sources):
- Establish market context
- Signal that you know your industry
- Higher AI credibility because they are independently verifiable
- Format: "According to [Named Third-Party Study], [stat]."

Proprietary stats (from your own data):
- Differentiate your brand
- Cannot be found elsewhere (creates citation dependency on your content)
- Format: "According to [Your Company]'s [Named Study], [stat]. [Methodology signal: based on analysis of X records over Y period.]"

Ideal AI notice: a mix of both. External stats for market context, proprietary stats for brand-specific claims.

---

## Combining SME Attribution and Metrics

The highest-impact citation pattern combines a metric with an SME interpretation in adjacent sentences.

Formula:
`[Metric in sentence 1, attributed.] According to [Name], [Title], "[Quote interpreting the metric in 10-30 words.]"`

Example:
"GCs using structured pre-bid intelligence win 34% more bids than those relying on estimator experience alone, according to Fieldline's analysis of 1,200 construction projects. According to Jordan Kessler, CEO of Fieldline, 'Win rate is a trailing indicator. The leading indicator is the quality of your pre-bid intelligence process.'"

This pattern gives AI two citable elements in adjacent sentences: a verifiable stat and a named expert's interpretation of it.

---

## Quick Reference

| Element | Format | Placement |
|---------|--------|-----------|
| SME quote intro | "According to [Full Name], [Title] at [Company]," | First half of section |
| Quote length | 10-30 words | Within quote marks |
| Stat attribution | "according to [Source]" in same sentence | First sentence of section |
| Verification signal | Sample size + date range | Same sentence or immediately after |
| KEY FACTS | 5 numbered items with attribution | After lead paragraph |
| Expert credential | Years + specific experience + named credential | In "About the Expert" block |

---

## Sources

- Princeton/IIT Delhi GEO Paper (KDD 2024): https://arxiv.org/abs/2311.09735
- Wellows AI Content Research (2025): https://wellows.com/blog/readability-score-in-ai-content/
- Onely LLM-Friendly Content Guide (Nov 2025): https://www.onely.com/blog/llm-friendly-content/
- Notified AI Format Guide (Oct 2025): https://www.notified.com/resources/how-to-format-a-press-release-for-ai-search
- BusinessWire AI/GEO Press Release Guide (Jan 2025): https://www.businesswire.com/blog/ai-geo-aeo-transforming-press-release-strategy
