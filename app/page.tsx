'use client'

import { useState } from 'react'
import Workspace from '@/components/Workspace'
import ResearchSidebar from '@/components/ResearchSidebar'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'rules' | 'testing' | 'mix'>('rules')

  return (
    <div className="h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-full px-12 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">AI Visibility</h1>
              <p className="text-4xl font-semibold text-gray-900 mt-3">Daily Intelligence</p>
            </div>
            <div className="text-right text-sm">
              <p className="text-gray-500">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
              <p className="text-gray-400 text-xs mt-1">Live monitoring</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto border-r border-gray-200">
          <Workspace activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="w-96 overflow-y-auto hidden lg:block border-l border-gray-200">
          <ResearchSidebar />
        </div>
      </div>
    </div>
  )
}
