# AI Visibility Hub — Deployment to Vercel

## Quick Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click **"Add New → Project"**
3. Select **"Import Git Repository"**
4. Paste this repo URL: `https://github.com/[your-github-username]/ai-visibility-hub`
5. Select **Framework Preset: Next.js**
6. Environment Variables: (none required for MVP)
7. Click **"Deploy"**
8. Once deployed, go to **Project Settings → Domains**
9. Add custom domain: `ai-visibility-hub.asksarah.ai`
10. Point your DNS to Vercel (instructions will appear)

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
cd /path/to/ai-visibility-hub
vercel --prod
```

Then configure the domain in Vercel dashboard.

---

## Project Structure

- **app/page.tsx** — Main dashboard with 5-section navigation
- **components/RulesToday.tsx** — Current rules for 3 content types (expandable)
- **components/ResearchLibrary.tsx** — Credible sources (Tier 1/2/3)
- **components/TestingGround.tsx** — Content analyzer (paste content, get feedback)
- **components/MagicMix.tsx** — Content stacks framework (coming soon)
- **components/NotesAndCaveats.tsx** — Caveats, warnings, glossary

---

## Next Steps (After MVP Deployment)

1. **Add all 24 content types** to RulesToday
2. **Integrate ZAVI data** — Request competitor analysis, update Magic Mix section
3. **Build TestingGround backend** — Real AI analysis vs. placeholder feedback
4. **Add user authentication** — Control access (Zen Media + select clients only)
5. **Set up daily updates** — Cron job to check for new research + update rules
6. **Add Supabase** — Database for storing feedback, user submissions, research timestamps

---

## Monitoring & Updates

- Daily monitoring of Tier 1/2 research sources
- Weekly ZAVI analysis requests (when needed)
- Real-time updates to Rules Today when new research/testing results emerge
- New Magic Mix stacks added as evidence supports them

---

## Access Control (Phase 2)

- Private Vercel project (invite-only)
- Add team members: sarah@zenmedia.com, select contractors
- Later: White-label for Zen Media clients

