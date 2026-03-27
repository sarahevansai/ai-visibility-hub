# AI Visibility Hub

A production-ready reference tool for creating AI Notices that get cited by AI platforms (ChatGPT, Perplexity, Google AI Overviews, and more).

**Live:** Deployed on Vercel
**Stack:** Next.js 14, TypeScript, Tailwind CSS

---

## What This Is

The AI Visibility Hub gives content teams, PR professionals, and marketers exact, research-backed templates and requirements for five distinct AI Notice formats.

**These are AI NOTICES** — wire-release-ready content structured for AI citation. Not generic blog posts. Not press releases. AI Notices are a specific format published on GlobeNewswire, PR Newswire, and owned newsrooms, structured to maximize citation probability in ChatGPT, Perplexity, and Google AI Overviews.

---

## The 5 AI Notice Formats

| Format | Best For | AI Citation Mechanic |
|--------|----------|---------------------|
| **Editorial/Feature** | Deep narrative on a topic, SME perspective, market analysis | Informational query citations (45.5% share) |
| **Listicle** | Practice comparisons, "what separates" content, numbered best practices | Commercial query citations (40% share) — MOST CITEABLE FORMAT |
| **News/Announcement** | Product launches, coverage expansions, partnerships | News retrieval + entity establishment |
| **Data/Research Release** | Original survey data, proprietary study findings | Stat extraction + methodology credibility |
| **Expert Q&A** | SME perspectives, buyer question coverage, roundtables | Named attribution + E-E-A-T signals |

---

## Critical Rules (Non-Negotiable)

1. **No em-dashes** — breaks AI parsing. Use a comma or period instead.
2. **Listicles are 3-5x more likely to be cited** — use when you want maximum AI extraction.
3. **Deep links are required** — first mention of every topic links to an authority page, not the homepage.
4. **SME attribution follows the "According to" pattern** — not "our CEO said" or "as the team noted."
5. **Metrics go in the first sentence of each section** — not buried in paragraph 3.
6. **FAQ questions must mirror actual search queries** — not rhetorical section titles.
7. **Published on owned newsroom URL** — wire is amplification, not the primary AI channel.

---

## Key Research Facts (All Sourced)

| Stat | Source |
|------|--------|
| "Best X" listicles account for 43.8% of all ChatGPT citations | Ahrefs (Dec 2025), via Glen Allsopp, 26,000 sources |
| Listicles capture 40% of commercial-intent AI citations | Wix Studio AI Search Lab, 75,000 AI answers (Mar 2026) |
| GEO strategies boost AI visibility up to 40% | Princeton/IIT Delhi GEO Paper, KDD 2024 |
| Newsroom PRs = 18% of ChatGPT citations; wire PRs = 0.04% | ACCESS Newswire Report (Mar 2026) |
| 100% of top-cited AI content shows visible expert credentials | Wellows Research (2025), cited by Onely (Nov 2025) |
| Wide distribution increases AI citations by up to 325% | Stacker (Dec 2025) |
| AI visitors convert 4.4x better than organic visitors | Semrush (Jun 2025) |
| Only 44.3% of Google top-10 pages appear in any AI answer | Semrush AI Visibility Guide (Feb 2026) |
| Press release citations grew 5x since July 2025 | GlobeNewswire / Muck Rack Data Report (Dec 2025) |

---

## Component Structure

```
components/
├── RulesWorkspace.tsx     <- MAIN: 5 AI Notice format tabs with Template | Example | Why It Works | Checklist
├── Workspace.tsx          <- Tab container
├── TestingWorkspace.tsx   <- Testing tools
├── MagicMixWorkspace.tsx  <- Content mixer
├── ResearchSidebar.tsx    <- Research links panel
├── ResearchLibrary.tsx    <- Full research library
├── RulesToday.tsx         <- Daily rules digest
├── NotesAndCaveats.tsx    <- Caveats and limitations
├── MagicMix.tsx           <- Mix logic
└── TestingGround.tsx      <- Testing sandbox

RESEARCH.md                          <- 49 sourced citations with URLs and methodology notes
DEEP-LINKING-GUIDE.md                <- Where to link, anchor text patterns, authority page linking
SME-ATTRIBUTION-METRIC-PLACEMENT-GUIDE.md  <- How to introduce SMEs, quote length, metric placement
```

---

## RulesWorkspace — Four Views Per AI Notice Format

Each format tab has four views:

### Template View
A complete, copy-paste template for this format with every placeholder labeled `[IN BRACKETS]`. Click "Copy Template" to grab it instantly.

### Example View
A complete, real-world example document using Grata (PE/dealmaker market) or Fieldline (construction market) content. Compare the example directly to the template to see how each element maps.

### Why It Works View
Every template element explained with:
- The specific requirement
- Why it matters for AI citation probability
- Exact source with URL

### Checklist View
Pre-publish checklist. Every item is research-backed. Every item links to its source. Progress bar tracks completion.

---

## Supplemental Guides

### DEEP-LINKING-GUIDE.md
- Where to link (first mention of topic, 2-3 links per 500 words)
- Anchor text patterns (specific, descriptive)
- Authority page linking (product page, not homepage)
- Citation source linking (stat + link in same sentence)
- Format-specific linking rules

### SME-ATTRIBUTION-METRIC-PLACEMENT-GUIDE.md
- The "According to [Name], [Title]" attribution pattern
- Quote length: 10-30 words for citability
- Quote placement: early in section, not at end
- Metric placement: first sentence of each section
- Verification signals for maximum credibility
- Combining stats + SME quotes for peak citation probability

---

## Research Foundation

All research in `RESEARCH.md`. 49 sources total.

**Academic:** Princeton/IIT Delhi GEO Paper (KDD 2024) — foundational AI visibility study

**Platform guidance:** GlobeNewswire/Notified (Oct 2025), BusinessWire (Jan 2025), PR Newswire (Nov 2025)

**Industry studies:** Wix Studio AI Search Lab (75,000 AI answers, Mar 2026), Ahrefs (Dec 2025), ACCESS Newswire (Mar 2026)

**Practitioner analysis:** Onely, Wellows, LLMRefs, Frase.io, BrightEdge, Stridec, Snezzi

**Data tracking:** Previsible AI Traffic Report, ALM Corp citation analysis, Position.digital stats roundup

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed via Vercel. See `DEPLOYMENT.md` for full instructions.

---

## What "AI Notice" Actually Means

An AI Notice is not a traditional press release. It is content published on a wire distribution service (GlobeNewswire, PR Newswire) or an owned newsroom, structured specifically so AI platforms can extract, attribute, and cite it accurately.

The structural difference from a traditional press release:
- **AI Notice:** Numbered KEY FACTS near the top, SME quotes with full attribution, FAQ section with literal search queries, deep links to authority pages
- **Traditional press release:** Quote at the bottom, wire dateline, one boilerplate paragraph, no FAQ

The format difference matters because AI systems extract "position statements" from structured, attributed, specific content. Vague, unstructured, quote-at-the-end press releases are largely invisible to AI citation systems.

---

## Last Updated

March 27, 2026 — Complete rebuild. 5 formats. Real examples. Full research documentation.
