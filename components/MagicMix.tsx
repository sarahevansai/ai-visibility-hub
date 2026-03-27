'use client'

export default function MagicMix() {
  return (
    <div className="space-y-6">
      <div className="bg-indigo-900/20 border border-indigo-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-indigo-300 mb-2">✨ Magic Mix</h2>
        <p className="text-slate-300">The exact content stack needed to achieve your goal. This changes only when research proves a new/different approach works better.</p>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6">
        <p className="text-yellow-300 font-semibold mb-2">🔬 Research in Progress</p>
        <p className="text-slate-300">We're analyzing real ZAVI data to understand what content stacks actually work for different scenarios. Coming this week:</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-400">
          <li>• Base stack (what works for most situations)</li>
          <li>• Crisis response stack (rapid, daily cadence for first 30 days)</li>
          <li>• Product/category launch stack (full-court press, multiple formats)</li>
          <li>• Thought leadership stack (reach over depth)</li>
          <li>• Educational/how-to stack (funnel-style, builds authority gradually)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-300">📊 Example Framework (Coming Soon)</h3>
        <p className="text-slate-400 text-sm">Once we have verified data, each stack will look like:</p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-4">
          <div className="border-b border-slate-700 pb-4">
            <h4 className="font-bold text-white mb-2">🎯 Goal: Product Launch</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p><span className="font-semibold text-slate-200">Content Stack:</span></p>
              <ul className="ml-4 space-y-1">
                <li>1. AI Notice (wire-style press release)</li>
                <li>2. Pillar Blog Post (2,500+ words, topical authority)</li>
                <li>3. Founder LinkedIn Article (narrative, vision, why this matters)</li>
                <li>4. FAQ Page (10-15 common questions about the product)</li>
                <li>5. Email Campaign (3-part sequence announcing, explaining, converting)</li>
                <li>6. YouTube Demo Video + Transcript</li>
                <li>7. Reddit Comment (rapid response to "anyone use [product]?" threads)</li>
              </ul>
              <p className="mt-3"><span className="font-semibold text-slate-200">Timeline:</span> Wire release Day 1 → Blog + Video Days 1-3 → LinkedIn + FAQ Days 1-7 → Email campaign throughout launch week</p>
              <p className="mt-2"><span className="font-semibold text-slate-200">Why this mix:</span> Each format hits different LLM citation patterns. Wire for newsworthiness, blog for topical depth, email for funnel conversion, Reddit for community signal.</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">🚨 Goal: Crisis Response</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p><span className="font-semibold text-slate-200">Content Stack:</span></p>
              <ul className="ml-4 space-y-1">
                <li>1. Editorial-style AI Notice (Day 1) — rapid, factual, no marketing speak</li>
                <li>2. Blog explainer (Days 1-3) — context, what happened, what you're doing</li>
                <li>3. Leadership quote/LinkedIn post (Day 1) — show you care, transparent communication</li>
                <li>4. Rapid FAQ (Days 1-7) — answer emerging questions quickly</li>
                <li>5. Reddit response (Hours 1-6) — get ahead of narrative</li>
              </ul>
              <p className="mt-3"><span className="font-semibold text-slate-200">Cadence:</span> Rapid first 48 hours, then daily updates for first week, then weekly updates for first 30 days if still active</p>
              <p className="mt-2"><span className="font-semibold text-slate-200">Why different:</span> Speed matters in crisis. AI systems cite rapid, transparent responses. This stack prioritizes velocity + trust over depth</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
        <h3 className="font-bold text-slate-300 mb-3">📈 How We're Building This</h3>
        <ol className="space-y-2 text-sm text-slate-400 list-decimal list-inside">
          <li>Request ZAVI analysis for key scenarios (product launch, crisis, thought leadership, etc.)</li>
          <li>Analyze which content formats appear in winning answer sets</li>
          <li>Identify patterns (e.g., "80% of cited launches include a blog post + video + email funnel")</li>
          <li>Test hypotheses with manual research and practitioner feedback</li>
          <li>Document the stack + publish (with sources)</li>
        </ol>
      </div>
    </div>
  )
}
