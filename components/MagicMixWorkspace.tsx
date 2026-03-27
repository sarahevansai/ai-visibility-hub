'use client'

import { useState } from 'react'

const MIXES = [
  {
    id: 'launch',
    name: 'Product Launch',
    stack: [
      { name: 'AI Notice', time: 'Day 1', desc: 'Wire-style press release (newsworthy format)' },
      { name: 'Pillar Blog', time: 'Days 1-3', desc: '2,500+ words, full topical authority' },
      { name: 'Founder Article', time: 'Day 1', desc: 'LinkedIn narrative: why this matters' },
      { name: 'FAQ Page', time: 'Days 1-7', desc: '10-15 common product questions' },
      { name: 'Email Campaign', time: 'Week 1', desc: '3-part sequence (announce, explain, convert)' },
      { name: 'YouTube Demo', time: 'Days 1-3', desc: 'Product demo + full transcript' },
      { name: 'Reddit Comments', time: 'Days 1-14', desc: 'Community signal in relevant threads' },
    ]
  },
  {
    id: 'crisis',
    name: 'Crisis Response',
    stack: [
      { name: 'Editorial Notice', time: 'Hours 1-6', desc: 'Rapid, factual (not defensive)' },
      { name: 'Blog Explainer', time: 'Days 1-3', desc: 'What happened + what you\'re doing' },
      { name: 'CEO Statement', time: 'Day 1', desc: 'LinkedIn post showing transparency' },
      { name: 'Quick FAQ', time: 'Days 1-7', desc: 'Answer emerging questions fast' },
      { name: 'Reddit Response', time: 'Hours 1-12', desc: 'Get ahead of narrative early' },
    ]
  },
]

export default function MagicMixWorkspace() {
  const [selectedId, setSelectedId] = useState<string>(MIXES[0].id)
  const selected = MIXES.find(m => m.id === selectedId)

  return (
    <div className="space-y-8 max-w-5xl pb-12">
      {/* Selector */}
      <div className="grid grid-cols-2 gap-3">
        {MIXES.map((mix) => (
          <button
            key={mix.id}
            onClick={() => setSelectedId(mix.id)}
            className={`p-6 rounded-lg border-2 transition-all text-left ${
              selectedId === mix.id
                ? 'border-gray-900 bg-gray-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <h3 className="text-base font-semibold text-gray-900">{mix.name}</h3>
          </button>
        ))}
      </div>

      {/* Details */}
      {selected && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">{selected.name} Stack</h2>

          {/* Stack */}
          <div className="space-y-3">
            {selected.stack.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="flex-shrink-0 text-right">
                  <p className="text-xs font-semibold text-gray-500 uppercase">{item.time}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Use This Stack
          </button>
        </div>
      )}

      {/* Coming */}
      <div className="pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">More stacks coming:</span> Thought leadership, educational, expansions, and seasonal campaigns.
        </p>
      </div>
    </div>
  )
}
