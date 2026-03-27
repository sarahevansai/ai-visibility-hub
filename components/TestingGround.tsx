'use client'

import { useState } from 'react'

export default function TestingGround() {
  const [content, setContent] = useState('')
  const [contentType, setContentType] = useState('blog-post')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => setIsAnalyzing(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="bg-pink-900/20 border border-pink-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-pink-300 mb-2">🧪 Testing Ground</h2>
        <p className="text-slate-300">Like a New York Times editor meets Moz meets SEMrush. Paste your content and get feedback on what's missing, what works, and what needs tweaking.</p>
      </div>

      <div className="space-y-6">
        {/* Content Type Selector */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Content Type</label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
          >
            <option value="blog-post">Blog Post</option>
            <option value="press-release">Press Release</option>
            <option value="linkedin-post">LinkedIn Post</option>
            <option value="email">Email Newsletter</option>
            <option value="podcast-notes">Podcast Show Notes</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Content Input */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Your Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your content here. We'll analyze it for AI visibility optimization..."
            className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white focus:border-blue-500 focus:outline-none min-h-64 font-mono text-sm"
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!content || isAnalyzing}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-3 rounded transition-colors"
        >
          {isAnalyzing ? '⏳ Analyzing...' : '🔍 Analyze Content'}
        </button>

        {/* Placeholder Feedback */}
        {content && !isAnalyzing && (
          <div className="space-y-4">
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
              <h3 className="font-bold text-green-300 mb-2">✓ What\'s Working</h3>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Strong opening hook (captures attention)</li>
                <li>• Good use of H2 headers for structure</li>
                <li>• Clear call-to-action at the end</li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <h3 className="font-bold text-yellow-300 mb-2">⚠️ Needs Attention</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Missing authority sources in opening paragraph (add 1-2 credible citations earlier)</li>
                <li>• "Freshness signal" detected as generic. Specific? Add dates, recent data, updated statistics</li>
                <li>• Repeated phrase "this is important" appears 3 times. Vary your language</li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
              <h3 className="font-bold text-blue-300 mb-2">💡 How to Beat Competitors</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Add a "Key Findings" table with 3-5 stats (AI systems cite tables heavily)</li>
                <li>• Include a competing perspective (e.g., "Some argue [viewpoint], but here's why...") — shows depth</li>
                <li>• Add a FAQ section at the end with 5-7 common questions</li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <h3 className="font-bold text-red-300 mb-2">🤖 AI Detection Score</h3>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-red-400">34%</div>
                <div className="text-sm text-slate-300">
                  <p className="font-semibold">Low AI detection (good!)</p>
                  <p>This content reads like a human wrote it. Rewrite 2-3 sentences to be even more unique.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!content && (
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8 text-center">
            <p className="text-slate-400">Paste your content above to see detailed feedback on structure, authority signals, AI detection, and competitive positioning.</p>
          </div>
        )}
      </div>

      <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
        <h3 className="font-bold text-slate-300 mb-2">📋 Full Checklist (Pre-Publish)</h3>
        <ul className="space-y-2 text-sm text-slate-400">
          <li>✓ Authority sources cited in opening paragraph</li>
          <li>✓ H2/H3 header hierarchy is clear and logical</li>
          <li>✓ No AI detection flags (generic phrases, repetition, obvious AI patterns)</li>
          <li>✓ Keywords naturally integrated (not forced)</li>
          <li>✓ Internal/external links use descriptive anchor text</li>
          <li>✓ Schema markup included (Article JSON-LD minimum)</li>
          <li>✓ Publish/modified dates current</li>
          <li>✓ Call-to-action clear at the end</li>
        </ul>
      </div>
    </div>
  )
}
