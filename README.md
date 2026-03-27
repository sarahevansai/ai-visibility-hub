# AI Visibility Hub

A production-ready reference tool for creating content that gets cited by AI platforms (ChatGPT, Perplexity, Google AI Overviews, and more).

**Live:** Deployed on Vercel  
**Stack:** Next.js 14, TypeScript, Tailwind CSS

---

## What This Is

The AI Visibility Hub gives content creators, PR professionals, and marketers exact, research-backed templates and requirements for three content types:

1. **Blog Posts** — The #1 format for AI citations
2. **Press Releases** — Wire ≠ AI citation. Newsroom = AI citation.
3. **LinkedIn Posts** — Engagement signal vs. AI visibility signal (they're different)

Every requirement, stat, and template element is tied to a verified research source. No vague "research shows" claims.

---

## Key Research Facts (All Sourced)

| Stat | Source |
|------|--------|
| AI-referred sessions grew 527% YoY (Jan–May 2025) | Previsible via Search Engine Land |
| ChatGPT has 900M weekly users (Feb 2026) | OpenAI |
| AI visitors convert 4.4x better than organic visitors | Semrush (Jun 2025) |
| Only 44.3% of Google top-10 pages appear in any AI answer | Semrush (Feb 2026) |
| 80% of LLM citations don't rank in Google's top 100 | Ahrefs (Aug 2025) |
| GEO strategies boost AI visibility up to 40% | Princeton/IIT Delhi, KDD 2024 |
| Newsroom PRs = 18% of ChatGPT citations; wire PRs = 0.04% | BuzzStream/XOFU via ALM Corp + ACCESS Newswire |
| LinkedIn blocks AI crawlers (User Agreement §8.2) | LinkedIn TOS |
| LinkedIn AI-detected posts see 30% reach drop | Closelyhq (Dec 2025) |
| LinkedIn sweet spot: 1,200–1,800 characters | Digital Blacksmiths (Nov 2025) |

---

## Component Structure

```
components/
├── RulesWorkspace.tsx     ← MAIN: Templates, Why It Works, Checklists
├── Workspace.tsx          ← Tab container
├── TestingWorkspace.tsx   ← Testing tools
├── MagicMixWorkspace.tsx  ← Content mixer
├── ResearchSidebar.tsx    ← Research links panel
├── ResearchLibrary.tsx    ← Full research library
├── RulesToday.tsx         ← Daily rules digest
├── NotesAndCaveats.tsx    ← Caveats and limitations
├── MagicMix.tsx           ← Mix logic
└── TestingGround.tsx      ← Testing sandbox

RESEARCH.md                ← 40 sourced citations with URLs and methodology notes
```

---

## RulesWorkspace — Three Views Per Content Type

Each content type (Blog / Press Release / LinkedIn) has three views:

### 📋 Template View
A complete, copy-paste template in dark code block. Every placeholder is labeled `[IN BRACKETS]`. Click "Copy Template" to grab it instantly.

### 🔬 Why It Works View
Every template element explained with:
- The specific requirement
- Why it matters for AI visibility
- Exact source with URL

### ✅ Checklist View
Pre-publish checklist. Check off each item to track readiness. Every checklist item links to its research source. Progress bar tracks completion.

---

## Research Foundation

All research in `RESEARCH.md`. 40 sources total, including:

- **Academic:** Princeton/IIT Delhi GEO paper (KDD 2024) — the foundational AI visibility study
- **Industry reports:** Semrush, Ahrefs, BuzzStream/XOFU, ACCESS Newswire, Muck Rack
- **Platform guidance:** BusinessWire, PR Newswire, Microsoft Bing, LinkedIn TOS
- **Practitioner analysis:** LLMRefs, Frase.io, SingleGrain, BrightEdge, Digidop
- **Data tracking:** Previsible AI Traffic Report, ALM Corp citation analysis

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

## What "AI Visibility" Actually Means

Ranking #1 on Google is no longer enough. AI platforms (ChatGPT, Perplexity, Google AI Overviews) synthesize answers from multiple sources — and they often cite pages that **don't rank on Google at all**.

- Only 2.1% of ChatGPT citations overlap with Google's top 10
- 80% of LLM citations don't even rank in Google's top 100

The game has changed. This hub shows you exactly what to do about it.

---

## Last Updated

March 2026
