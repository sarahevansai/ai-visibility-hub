'use client'

import { useState } from 'react'
import RulesWorkspace from './RulesWorkspace'
import TestingWorkspace from './TestingWorkspace'
import MagicMixWorkspace from './MagicMixWorkspace'

interface WorkspaceProps {
  activeTab: 'rules' | 'testing' | 'mix'
  setActiveTab: (tab: 'rules' | 'testing' | 'mix') => void
}

export default function Workspace({ activeTab, setActiveTab }: WorkspaceProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Tabs */}
      <div className="border-b border-gray-200 px-12 py-6">
        <div className="flex gap-12">
          {[
            { id: 'rules', label: 'Rules' },
            { id: 'testing', label: 'Testing' },
            { id: 'mix', label: 'Magic Mix' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-12 py-8">
        {activeTab === 'rules' && <RulesWorkspace />}
        {activeTab === 'testing' && <TestingWorkspace />}
        {activeTab === 'mix' && <MagicMixWorkspace />}
      </div>
    </div>
  )
}
