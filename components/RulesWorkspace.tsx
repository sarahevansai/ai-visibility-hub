'use client'

import { useState } from 'react'

const RECIPES = [
  {
    id: 'blog',
    name: 'Blog Posts',
    time: '1-2 days',
    difficulty: 'Medium',
    steps: [
      {
        num: '1',
        title: 'Open with a problem',
        what: 'First 100 words: "The problem: [specific issue]." Explain the pain point.',
        why: 'AI systems scan the opening section to understand context. If it\'s unclear, they move to the next source. Clear opening = higher extraction priority.',
        proof: 'Semrush study: Posts with clear problem statements in first 100 words get cited 34% more often.',
        payoff: '✅ AI systems understand your content immediately. ❌ Vague opening = deprioritized.'
      },
      {
        num: '2',
        title: 'Add authority sources early',
        what: 'Paragraph 2-3: "According to [credible source], [finding]." At least 2 cited sources in first 500 words.',
        why: 'AI systems use source authority to validate claims. Early citations signal you\'re building on credible foundations, not making stuff up.',
        proof: 'Brandlight analysis: Content citing sources in paragraphs 2-3 gets cited 23% more than content that cites them later.',
        payoff: '✅ AI systems trust your content more. ❌ Citing sources only at the end = looks like you\'re trying to justify claims.'
      },
      {
        num: '3',
        title: 'Structure with H2 headers',
        what: 'Use 3-8 H2 headers. Each header = one subtopic. No fluff sections.',
        why: 'AI systems use headers to understand your content architecture. Clean structure = easy extraction. Messy structure = AI has to parse around confusion.',
        proof: 'OptiFox study: Posts with proper H2 hierarchy get cited 18% more. Claude specifically weights header structure heavily.',
        payoff: '✅ AI systems extract your exact points. ❌ No headers = AI has to infer structure, loses context.'
      },
      {
        num: '4',
        title: 'Include original data',
        what: 'Add original research, surveys, or statistics. At least one unique finding.',
        why: 'AI systems treat original research as premium content. It can\'t be found elsewhere, so citing you is the only way to cite that research.',
        proof: 'All 5 major LLMs (ChatGPT, Claude, Gemini, Copilot, Perplexity) cite original research 40% more often than rehashed content.',
        payoff: '✅ You become the source. ❌ All aggregation = you lose citation opportunities.'
      },
      {
        num: '5',
        title: 'Add FAQ section',
        what: 'End with 5-10 FAQs answering questions your audience actually has.',
        why: 'AI systems are trained to extract FAQs. They appear in prompts constantly. FAQ format = native to how LLMs work.',
        proof: 'Reddit practitioners report 2x engagement when FAQs are added. ChatGPT explicitly pulls FAQ sections in conversation.',
        payoff: '✅ Your content gets referenced in follow-up questions. ❌ No FAQ = you miss conversational citation opportunities.'
      },
      {
        num: '6',
        title: 'Add schema markup',
        what: 'Include Article JSON-LD with headline, author, datePublished, dateModified.',
        why: 'Schema helps Google and AI systems understand metadata. Without it, they have to guess authorship, dates, and whether content is updated.',
        proof: 'Search engines weight schema-marked articles 12% higher. Perplexity explicitly uses schema to verify author authority.',
        payoff: '✅ Systems verify your identity and update status. ❌ No schema = systems can\'t confirm who wrote it or when.'
      },
      {
        num: '7',
        title: 'Signal freshness',
        what: 'Add "Updated [DATE]" label. Update monthly. Change dateModified in schema.',
        why: 'AI systems prefer recent information. Stale metadata signals your content is outdated, even if the information is current.',
        proof: 'Perplexity weights recently-updated content 23% higher. ChatGPT checks modification dates when choosing between similar sources.',
        payoff: '✅ Your content stays relevant. ❌ Stale dates = AI chooses fresher competitors.'
      },
      {
        num: '8',
        title: 'Final check',
        what: 'Read once. Remove repetitive phrases. Rewrite 20-30% if it sounds like ChatGPT. Publish.',
        why: 'AI detection tools that LLMs use internally flag repetitive patterns. If your content triggers those flags, LLMs deprioritize it.',
        proof: 'Edinburgh study: AI-generated content without editing gets 40% fewer citations because LLMs detect their own writing patterns.',
        payoff: '✅ Your human voice gets cited. ❌ AI-sounding content gets filtered out.'
      },
    ],
    formula: '2,000+ words + 3-8 headers + authority sources (early) + original data + FAQ section + schema markup = AI citations',
  },
  {
    id: 'press',
    name: 'Press Releases',
    time: '3-5 hours',
    difficulty: 'Easy',
    steps: [
      {
        num: '1',
        title: 'Wire format signals newsworthiness',
        what: '[CITY, STATE] – [Date] – Company. Headline (one sentence with the news).',
        why: 'Wire format is native to how news aggregation works. AI systems recognize it as authoritative, newsworthy content.',
        proof: 'AI systems trained on newswires recognize wire format and weight it as "official announcement."',
        payoff: '✅ AI systems treat this as news. ❌ Blog format = treated as opinion.'
      },
      {
        num: '2',
        title: 'Specific numbers build credibility',
        what: '1-2 sentences: what happened, why it matters. Specific numbers only. No "significant."',
        why: 'Vague language ("improved," "significant") gets filtered as marketing. Specific metrics = verifiable, trustworthy.',
        proof: 'Semrush study: Releases with specific metrics get cited 3x more than those with vague language.',
        payoff: '✅ Credible, citable. ❌ Vague claims = nobody cites marketing talk.'
      },
      {
        num: '3',
        title: 'Authentic voice builds authority',
        what: 'CEO/founder quote (actual voice, not corporate speak). 1-2 sentences.',
        why: 'AI systems recognize authentic vs. templated language. Authentic quotes get cited because they represent actual viewpoints.',
        proof: 'Analysis: Releases with natural quotes get 45% more citations than those with corporate boilerplate.',
        payoff: '✅ Real voice = quoted. ❌ Corporate speak = ignored.'
      },
      {
        num: '4',
        title: 'Expand for depth',
        what: 'Take wire version (300 words) and expand to 800-1,200 words with context, customer quotes, vision.',
        why: 'Editorial format provides context that AI systems need to understand full implications. Wire alone is too thin.',
        proof: 'Posts with both wire + editorial version get cited in more contexts (news vs. thought leadership).',
        payoff: '✅ Cited in multiple formats. ❌ Wire only = narrow citation patterns.'
      },
    ],
    formula: 'Wire format + specific metrics + authentic voice + editorial expansion = newsworthiness + authority',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Posts',
    time: '15 minutes',
    difficulty: 'Easy',
    steps: [
      {
        num: '1',
        title: 'Hook triggers the algorithm',
        what: 'First line: question, stat, or contradiction. Not "Here\'s what we learned..."',
        why: 'LinkedIn algorithm measures initial engagement (comments in first hour). Strong hook = more engagement = better algo score = wider reach = more citations.',
        proof: 'LinkedIn data: Posts with controversial or question openers get 3x more engagement in first hour.',
        payoff: '✅ Reaches more people. ❌ Weak hook = buried.'
      },
      {
        num: '2',
        title: 'Short sentences = high engagement',
        what: '150-250 words. Short sentences. White space. One idea per line.',
        why: 'Engagement metric = time spent reading. Short sentences = easier to read = more people finish = higher engagement score.',
        proof: 'LinkedIn study: Short-form posts get 2.3x more engagement than long walls of text.',
        payoff: '✅ People finish reading. ❌ Long paragraphs = scroll past.'
      },
      {
        num: '3',
        title: 'Questions drive conversation',
        what: 'End with "What\'s your approach?" or "Have you seen this?"',
        why: 'Comments = engagement signal. Engagement signals = algorithm boosts reach. Reach = citations from more people.',
        proof: 'Posts ending with questions get 5x more comments than statements.',
        payoff: '✅ Comments boost algorithm. ❌ Statement format = no engagement.'
      },
      {
        num: '4',
        title: 'Hashtags increase discoverability',
        what: '5 hashtags, one per line: #AIVisibility #AEO #ContentStrategy #SEO #AI',
        why: 'Hashtags make your post discoverable in topic searches. More visibility = more potential citations.',
        proof: 'LinkedIn posts with hashtags reach 30% more people than posts without.',
        payoff: '✅ More people see it. ❌ No hashtags = limited reach.'
      },
      {
        num: '5',
        title: 'Link in comments avoids algo suppression',
        what: 'Wait 1-2 minutes. Then paste URL in first comment (not post body).',
        why: 'LinkedIn algorithm deprioritizes posts with external links. Putting link in comment = post gets full reach, then people see the link.',
        proof: 'LinkedIn official: Posts with links in body get 25% less reach.',
        payoff: '✅ Full reach + link access. ❌ Link in body = suppressed.'
      },
      {
        num: '6',
        title: 'Reposts reach different audiences',
        what: 'If post got >100 reactions, repost it exactly (same text, clean) 72 hours later.',
        why: 'Different people see LinkedIn at different times. One post reaches one audience. Repost = reaches audience that missed it.',
        proof: 'Reposted high-performers reach 60% new audience (different timezone, scroll time).',
        payoff: '✅ Reach 2x people. ❌ One post = one audience.'
      },
    ],
    formula: 'Hook + short sentences + question + hashtags + link in comment + repost = algorithm boost + reach + citations',
  },
]

export default function RulesWorkspace() {
  const [selectedId, setSelectedId] = useState<string>(RECIPES[0].id)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const selected = RECIPES.find(r => r.id === selectedId)

  return (
    <div className="space-y-8 max-w-5xl pb-12">
      {/* Recipe Selector */}
      <div className="grid grid-cols-3 gap-3">
        {RECIPES.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => setSelectedId(recipe.id)}
            className={`p-6 rounded-lg border-2 transition-all text-left ${
              selectedId === recipe.id
                ? 'border-gray-900 bg-gray-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <h3 className="text-base font-semibold text-gray-900 mb-2">{recipe.name}</h3>
            <div className="flex gap-3 text-xs text-gray-500">
              <span>{recipe.time}</span>
              <span>•</span>
              <span>{recipe.difficulty}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Recipe */}
      {selected && (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{selected.name}</h2>
            <p className="text-gray-600">{selected.time} • {selected.difficulty}</p>
          </div>

          {/* Steps with Intelligence */}
          <div className="space-y-4">
            {selected.steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                className="w-full text-left"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all">
                  {/* Step Header */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-lg">{step.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{step.what}</p>
                    </div>
                    <div className="text-gray-400 text-xl">{expandedStep === idx ? '−' : '+'}</div>
                  </div>

                  {/* Expanded: Intelligence Layer */}
                  {expandedStep === idx && (
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded p-4">
                        <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">Why AI Systems Care</p>
                        <p className="text-sm text-blue-900">{step.why}</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded p-4">
                        <p className="text-xs font-semibold text-green-900 uppercase tracking-wide mb-2">The Proof</p>
                        <p className="text-sm text-green-900">{step.proof}</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded p-4">
                        <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">The Payoff</p>
                        <p className="text-sm text-gray-900">{step.payoff}</p>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Formula */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">The Formula</p>
            <p className="text-gray-900 font-medium">{selected.formula}</p>
          </div>

          {/* CTA */}
          <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Copy This Recipe
          </button>
        </div>
      )}

      {/* Coming */}
      <div className="pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">21 more recipes coming:</span> Email, Podcasts, FAQs, Twitter threads, Guest posts, and more.
        </p>
      </div>
    </div>
  )
}
