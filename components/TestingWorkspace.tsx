'use client'

import { useState } from 'react'

export default function TestingWorkspace() {
  const [content, setContent] = useState('')
  const [analyzed, setAnalyzed] = useState(false)

  const handleAnalyze = () => {
    if (!content.trim()) return
    setTimeout(() => setAnalyzed(true), 1200)
  }

  return (
    <div className="space-y-8 max-w-5xl pb-12">
      {/* Input */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Content Type</label>
          <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0">
            <option>Blog Post</option>
            <option>Press Release</option>
            <option>LinkedIn Post</option>
            <option>Email</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Paste Your Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your draft content here..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 min-h-48 resize-none"
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={!content.trim()}
          className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Analyze
        </button>
      </div>

      {/* Feedback */}
      {analyzed && (
        <div className="space-y-4">
          <div className="border border-green-200 bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-3">✓ What\'s Working</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• Strong opening hook that captures attention</li>
              <li>• Clear H2 header structure throughout</li>
              <li>• Direct call-to-action at the end</li>
            </ul>
          </div>

          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Needs Attention</h3>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li>• Add authority sources in opening paragraph (paragraph 2-3)</li>
              <li>• Reduce repetitive phrases ("This is important" appears 3x)</li>
              <li>• Add at least one original stat or data point</li>
            </ul>
          </div>

          <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">💡 To Beat Competitors</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Add a stats table or data visualization (AI systems cite these heavily)</li>
              <li>• Include a counter-perspective section ("Some argue... but here\'s why...")</li>
              <li>• Add FAQ section at the end with 5-7 common questions</li>
            </ul>
          </div>

          <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">AI Detection Score</p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">28%</span>
              <span className="text-sm text-gray-600">Low detection (good!)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
