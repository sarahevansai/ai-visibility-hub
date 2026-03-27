# 🌐 AI Visibility Hub — MVP

A daily-updated, private resource for writers and content creators to master AI visibility, AEO, and GEO.

## Features

### 📋 Rules Today
Exact formats, structures, and strategies for each content type. Every rule includes:
- **What to do** — The specific action
- **Why** — Why it matters for AI visibility
- **How** — Step-by-step instructions
- **Source** — Credible research link
- **Example** — Good vs bad examples

Currently covers:
- Blog Posts
- Press Releases (Wire + Editorial)
- LinkedIn Posts
- *Coming: 21 more content types*

### 🔬 Research Library
15 curated research sources organized by credibility tier:
- **TIER 1** — Official (OpenAI, Anthropic, Google, Microsoft, Perplexity)
- **TIER 2** — Verified research (Semrush, Ahrefs, Moz, Brandlight, etc.)
- **TIER 3** — Community intelligence (Reddit, LinkedIn, Discord)

### 🧪 Testing Ground
Paste your content, get feedback like a New York Times editor + Moz + SEMrush analyst:
- Structure analysis
- Authority signals check
- AI-generated content score
- Competitive positioning gaps
- Pre-publish checklist

### ✨ Magic Mix
Research-driven content stacks for different scenarios:
- Base stack (most situations)
- Crisis response stack
- Product launch stack
- Thought leadership stack
- Educational/how-to stack

*Stacks update ONLY when research proves they're necessary.*

### ⚠️ Notes & Caveats
Important context:
- Different LLMs prefer different structures
- Vertical/industry differences
- Known contradictions in the field
- Warnings (what NOT to do)
- Plain-English glossary

---

## Getting Started

### Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## Project Structure

```
ai-visibility-hub/
├── app/
│   ├── page.tsx              # Main dashboard
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── RulesToday.tsx        # Content type rules (expandable)
│   ├── ResearchLibrary.tsx   # Credible sources
│   ├── TestingGround.tsx     # Content analyzer
│   ├── MagicMix.tsx          # Content stacks
│   └── NotesAndCaveats.tsx   # Context & warnings
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

---

## How It Works

1. **Writer chooses their content type** → Rules Today shows exact format, structure, strategy
2. **Writer creates content** → Testing Ground analyzes and gives feedback
3. **New research emerges** → Rules Today updates with new findings + source links
4. **ZAVI reveals patterns** → Magic Mix evolves with proof points

---

## Technology

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel
- **Database:** None (MVP) — Supabase coming in Phase 2

---

## Roadmap

### Phase 2 (This Week)
- [ ] Add all 24 content types to Rules Today
- [ ] Request ZAVI competitive analysis
- [ ] Populate Magic Mix with real examples
- [ ] Set up daily research monitoring

### Phase 3 (Next Week)
- [ ] Supabase integration (data storage)
- [ ] TestingGround backend (real AI analysis)
- [ ] User authentication (team access)
- [ ] Automated daily updates

### Phase 4 (Future)
- [ ] API endpoint for tool integration
- [ ] White-label version for clients
- [ ] Auto-Magic Mix updates from ZAVI data
- [ ] Writer leaderboard

---

## Contributing

This is a private hub for Zen Media team. To request changes or additions:
1. Share the new content type or rule
2. Provide credible source/research
3. Include real examples or test results

---

## Questions?

See the **Notes & Caveats** section in the app for common questions and context.

---

**Built with research, tested daily, updated when the rules change.** 🌊
