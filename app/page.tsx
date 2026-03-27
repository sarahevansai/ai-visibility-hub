'use client'

import { useState } from 'react'
import RulesToday from '@/components/RulesToday'
import ResearchLibrary from '@/components/ResearchLibrary'
import TestingGround from '@/components/TestingGround'
import MagicMix from '@/components/MagicMix'
import NotesAndCaveats from '@/components/NotesAndCaveats'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'rules' | 'research' | 'testing' | 'magic' | 'notes'>('rules')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-white mb-2">🌐 AI Visibility Hub</h1>
          <p className="text-slate-400">Daily-updated best practices for AI visibility, AEO, and GEO</p>
          <p className="text-sm text-slate-500 mt-2">Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-slate-700 bg-slate-800/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: 'rules', label: '📋 Rules Today', icon: '📋' },
              { id: 'research', label: '🔬 Research Library', icon: '🔬' },
              { id: 'testing', label: '🧪 Testing Ground', icon: '🧪' },
              { id: 'magic', label: '✨ Magic Mix', icon: '✨' },
              { id: 'notes', label: '⚠️ Notes & Caveats', icon: '⚠️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-4 border-b-2 font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-slate-400 hover:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'rules' && <RulesToday />}
        {activeTab === 'research' && <ResearchLibrary />}
        {activeTab === 'testing' && <TestingGround />}
        {activeTab === 'magic' && <MagicMix />}
        {activeTab === 'notes' && <NotesAndCaveats />}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 bg-slate-900/50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
          <p>Part of the asksarah.ai ecosystem • Powered by research, testing, and real-world data</p>
        </div>
      </div>
    </div>
  )
}
