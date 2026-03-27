'use client'

import { useState } from 'react'

const RECIPES = [
  {
    id: 'blog',
    name: 'Blog Posts',
    time: '1-2 days',
    difficulty: 'Medium',
    formula: '2,000+ words + headers + authority + FAQ = AI citations',
    steps: [
      { num: '1', action: 'Start: Problem statement (first 100 words)', example: '"The problem: [issue]"' },
      { num: '2', action: 'Paragraph 2-3: Add credible sources', example: '"According to [source], [finding]"' },
      { num: '3', action: 'Use 3-8 H2 headers (one topic each)', example: '## Why This Matters' },
      { num: '4', action: 'Include original research or data', example: 'Your own survey results' },
      { num: '5', action: 'End with 5-10 FAQ section', example: 'Q: How do I implement this? A: ...' },
      { num: '6', action: 'Add schema markup (JSON-LD)', example: 'Article type + datePublished' },
      { num: '7', action: 'Rewrite 20-30% if it sounds like ChatGPT', example: 'Add your voice, examples, stories' },
      { num: '8', action: 'Publish & update monthly', example: 'Keep dateModified current' }
    ]
  },
  {
    id: 'press',
    name: 'Press Releases',
    time: '3-5 hours',
    difficulty: 'Easy',
    formula: 'Wire format + dateline + boilerplate + news = citations',
    steps: [
      { num: '1', action: 'Start with wire format', example: '[CITY, STATE] – [Date] – [News]' },
      { num: '2', action: 'Lead: Your biggest news in 1-2 sentences', example: '"Company launches [major feature/partnership]"' },
      { num: '3', action: 'Boilerplate: What you do (2-3 sentences)', example: '"[Company] helps [audience] [outcome]"' },
      { num: '4', action: 'Body: Why it matters + who it affects', example: '2-3 short paragraphs, metrics if you have them' },
      { num: '5', action: 'Quote: Expert perspective (CEO or spokesperson)', example: '"This solves [problem]" – [Name], [Title]' },
      { num: '6', action: 'CTA link (if distributing via wire service)', example: 'Link to blog post or landing page' },
      { num: '7', action: 'Distribute via newswire (optional)', example: 'PRNewswire, GlobeNewswire, etc.' }
    ]
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Posts',
    time: '15 minutes',
    difficulty: 'Easy',
    formula: 'Hook + insight + CTA = engagement',
    steps: [
      { num: '1', action: 'Start with hook (first line matters)', example: '"Most people get this wrong..."' },
      { num: '2', action: 'Insight: Your main point (1 sentence)', example: '"Here\'s what actually works..."' },
      { num: '3', action: 'Proof: 1-2 data points or examples', example: '"We found X when we tested Y"' },
      { num: '4', action: 'Add line breaks between ideas', example: 'Every 2-3 sentences = new line' },
      { num: '5', action: 'End with question or CTA', example: '"What\'s your experience? Comment below."' },
      { num: '6', action: 'Use hashtags (3-5 max)', example: '#AIVisibility #AEO #ContentStrategy' }
    ]
  }
]

export default function RulesWorkspace() {
  const [selectedRecipe, setSelectedRecipe] = useState('blog')
  const [expandedStep, setExpandedStep] = useState<string | null>(null)

  const recipe = RECIPES.find(r => r.id === selectedRecipe)

  return (
    <div className="h-full flex flex-col">
      {/* Recipe Selector */}
      <div className="border-b border-gray-200 px-12 py-6">
        <div className="flex gap-4">
          {RECIPES.map(r => (
            <button
              key={r.id}
              onClick={() => setSelectedRecipe(r.id)}
              className={`pb-2 text-sm font-medium transition-colors border-b-2 ${
                selectedRecipe === r.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Content */}
      <div className="flex-1 overflow-y-auto px-12 py-8">
        <div className="max-w-3xl">
          {recipe && (
            <>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{recipe.name}</h2>
                <div className="flex gap-6 text-sm text-gray-600">
                  <span>⏱ {recipe.time}</span>
                  <span>📊 {recipe.difficulty}</span>
                </div>
              </div>

              {/* Formula */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">The Formula</p>
                <p className="text-lg font-semibold text-gray-900">{recipe.formula}</p>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                {recipe.steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setExpandedStep(expandedStep === `${recipe.id}-${idx}` ? null : `${recipe.id}-${idx}`)}
                    className="w-full text-left"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-all">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                            {step.num}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900">{step.action}</h4>
                          {expandedStep === `${recipe.id}-${idx}` ? (
                            <p className="text-sm text-gray-600 mt-2 bg-gray-50 px-3 py-2 rounded border border-gray-200 font-mono text-xs">
                              {step.example}
                            </p>
                          ) : (
                            <p className="text-sm text-gray-500 mt-1">{step.example}</p>
                          )}
                        </div>
                        <div className={`text-xl text-gray-400 transition-transform ${expandedStep === `${recipe.id}-${idx}` ? 'rotate-45' : ''}`}>
                          +
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Copy Button */}
              <button className="w-full mt-8 bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Copy This Recipe
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
