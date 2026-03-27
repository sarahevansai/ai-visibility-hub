'use client'

export default function NotesAndCaveats() {
  return (
    <div className="space-y-6">
      <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-orange-300 mb-2">⚠️ Notes, Caveats & Warnings</h2>
        <p className="text-slate-300">Important context, contradictions, and edge cases. Not all rules apply to all situations.</p>
      </div>

      <div className="space-y-6">
        {/* Caveats */}
        <div>
          <h3 className="text-lg font-bold text-orange-300 mb-4">⚡ Key Caveats</h3>
          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">Different LLMs Prefer Different Content Structures</h4>
              <p className="text-slate-300 text-sm mb-2">
                ChatGPT cites sources differently than Claude, which differs from Gemini. Example:
              </p>
              <ul className="text-sm text-slate-400 space-y-1 ml-4">
                <li>• ChatGPT prefers well-structured blog posts with clear headers</li>
                <li>• Claude values original research and data more heavily</li>
                <li>• Gemini weights official documentation and primary sources</li>
                <li>• Perplexity prefers recent, updated content with timestamp signals</li>
              </ul>
              <p className="text-slate-400 text-sm mt-2">
                <strong>What to do:</strong> Our "Rules Today" is optimized for ALL five LLMs. If you're optimizing for one specific LLM, let us know and we can create specialized guidance.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">Vertical/Industry Differences</h4>
              <p className="text-slate-300 text-sm mb-2">
                Rules for B2B SaaS content may differ from Healthcare, Finance, or E-commerce. Examples:
              </p>
              <ul className="text-sm text-slate-400 space-y-1 ml-4">
                <li>• Healthcare: Authorship (physician vs. journalist) matters more for citation</li>
                <li>• Finance: Regulatory citations (SEC, FCA) carry more weight</li>
                <li>• B2B SaaS: Product comparisons and reviews get cited heavily</li>
              </ul>
              <p className="text-slate-400 text-sm mt-2">
                <strong>What to do:</strong> Start with universal rules. We'll add vertical-specific guidance as ZAVI data reveals patterns.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">AI Detection Tools Are Imperfect</h4>
              <p className="text-slate-300 text-sm">
                Tools like GPTZero, Originality.AI, and others flag content as "AI-written" even when humans wrote it. Our "AI-generated content score" in Testing Ground is a signal, not a guarantee. Some AI-written content can still get cited; some human content gets flagged as AI.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                <strong>What to do:</strong> Use AI detection as a gut-check. If you rewrote 30% of AI content with your own voice and examples, you're probably good. Trust your instincts.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">Rules Change Weekly (Sometimes Daily)</h4>
              <p className="text-slate-300 text-sm">
                LLM companies update their models, ranking algorithms, and citation preferences constantly. A rule that's true today may be obsolete in 2 weeks.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                <strong>What to do:</strong> Check this hub daily or weekly. Always verify rules before major content launches. When in doubt, reference the original source link.
              </p>
            </div>
          </div>
        </div>

        {/* Contradictions */}
        <div>
          <h3 className="text-lg font-bold text-red-400 mb-4">🔴 Known Contradictions</h3>
          <div className="space-y-4">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <h4 className="font-bold text-red-300 mb-2">Link Placement: What We Know vs. What Works</h4>
              <p className="text-slate-300 text-sm mb-2">
                <span className="font-bold">Contradiction:</span> LinkedIn algorithm guidance says "avoid links in post body," but some top posts include links and still get high engagement.
              </p>
              <p className="text-slate-400 text-sm">
                <strong>What we recommend:</strong> Follow the "link in comment" rule for consistency. But if you're already building a large audience, you have more flexibility.
              </p>
            </div>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <h4 className="font-bold text-red-300 mb-2">Length: Does Longer Always Mean Better?</h4>
              <p className="text-slate-300 text-sm mb-2">
                <span className="font-bold">Contradiction:</span> We recommend 2,000-3,500 word blog posts for authority. But some 1,200-word posts get cited heavily if they're exceptionally focused.
              </p>
              <p className="text-slate-400 text-sm">
                <strong>What we recommend:</strong> Length matters, but depth + focus matter more. A tight 1,500-word post on a narrow topic beats a fluffy 3,000-word post. Write enough to cover the topic completely.
              </p>
            </div>
          </div>
        </div>

        {/* Warnings */}
        <div>
          <h3 className="text-lg font-bold text-yellow-300 mb-4">⚠️ Warnings</h3>
          <div className="space-y-4">
            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <h4 className="font-bold text-yellow-300 mb-2">Don't Optimize Just for AI Visibility</h4>
              <p className="text-slate-300 text-sm">
                If you write only for AI citations and ignore human readers, your content will fail. Humans are still the audience. AI citations are a byproduct of writing good content for humans.
              </p>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <h4 className="font-bold text-yellow-300 mb-2">Don't Stuff Keywords or Create Fake Freshness Signals</h4>
              <p className="text-slate-300 text-sm">
                Both AI systems and search engines can detect keyword stuffing and fake update dates. Write naturally. Update genuinely.
              </p>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <h4 className="font-bold text-yellow-300 mb-2">Don't Ignore Your Analytics</h4>
              <p className="text-slate-300 text-sm">
                If your traffic is up but citations are down (or vice versa), something's off. Balance both metrics. These rules are guidelines, not gospel.
              </p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div>
          <h3 className="text-lg font-bold text-blue-300 mb-4">📖 Glossary (Plain English Translations)</h3>
          <div className="space-y-2 text-sm bg-slate-800/30 border border-slate-700 rounded-lg p-4">
            <div className="space-y-3">
              <div>
                <span className="font-bold text-blue-300">AEO (Answer Engine Optimization):</span> <span className="text-slate-300">Writing content so AI assistants (ChatGPT, Claude, Gemini) cite it when answering questions</span>
              </div>
              <div>
                <span className="font-bold text-blue-300">Citation:</span> <span className="text-slate-300">When an AI system mentions your content as a source for its answer</span>
              </div>
              <div>
                <span className="font-bold text-blue-300">GEO (Generative Engine Optimization):</span> <span className="text-slate-300">Optimizing for LLM visibility and citations (similar to AEO)</span>
              </div>
              <div>
                <span className="font-bold text-blue-300">Entity/Topical Authority:</span> <span className="text-slate-300">Being recognized as an expert on a specific topic. Cover all related angles, not just one</span>
              </div>
              <div>
                <span className="font-bold text-blue-300">Freshness Signal:</span> <span className="text-slate-300">Indicators that your content is recent/updated: publish date, "Updated [date]" label, current examples</span>
              </div>
              <div>
                <span className="font-bold text-blue-300">Schema/Structured Data:</span> <span className="text-slate-300">Code (JSON-LD) that tells search engines and AI systems about your content's structure and meaning</span>
              </div>
              <div>
                <span className="font-bold text-blue-300">AI Visibility:</span> <span className="text-slate-300">How often your content gets cited or mentioned by AI systems in their answers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
