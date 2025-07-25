'use client'

import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

const NODE_TYPES = [
  {
    type: 'start',
    label: 'Start',
    icon: '▶️',
    color: 'bg-green-500'
  },
  {
    type: 'telegram',
    label: 'Send Telegram Message',
    icon: '📱',
    color: 'bg-blue-500'
  },
  {
    type: 'priceChange',
    label: 'On Price Change',
    icon: '📈',
    color: 'bg-indigo-500'
  },
  {
    type: 'walletTracker',
    label: 'On Wallet Moved Funds',
    icon: '💰',
    color: 'bg-purple-500'
  },
  {
    type: 'webhook',
    label: 'On HTTP Webhook',
    icon: '🌐',
    color: 'bg-cyan-500'
  },
  {
    type: 'csv',
    label: 'Append CSV Row',
    icon: '📊',
    color: 'bg-amber-500'
  },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const onDragStart = (event, nodeType, nodeLabel) => {
    event.dataTransfer.setData('application/reactflow/type', nodeType)
    event.dataTransfer.setData('application/reactflow/label', nodeLabel)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className={`md:hidden fixed top-4 ${isOpen ? 'left-64' : 'left-4'} z-50 p-2 rounded-full bg-blue-600 text-white shadow-lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed md:relative h-full z-40 transition-all duration-300 ease-in-out
          ${isOpen ? 'left-0' : '-left-72 md:left-0'} 
          w-72 md:w-64 shrink-0 bg-gradient-to-b from-blue-600 to-blue-800
          text-white shadow-xl backdrop-blur-lg backdrop-filter bg-opacity-90 
          border-r border-blue-300/20`}
      >
        {/* Logo area */}
        <div className="p-4 border-b border-blue-500/30">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">Chainloops Dashboard</h1>
            <button 
              className="hidden md:block p-1.5 rounded-md hover:bg-blue-700/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <ChevronRight size={18} className={`transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} />
            </button>
          </div>
          <p className="text-xs text-blue-200 mt-1">Automate your crypto workflow</p>
        </div>

        {/* Nodes */}
        <div className="p-4">
          <h2 className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-3">Nodes</h2>
          <div className="space-y-2">
            {NODE_TYPES.map((node) => (
              <div
                key={node.type}
                className="flex items-center p-3 rounded-lg cursor-grab bg-white/10 hover:bg-white/20 
                  backdrop-blur-sm border border-white/20 transition-all group"
                draggable
                onDragStart={(e) => onDragStart(e, node.type, node.label)}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${node.color} mr-3`}>
                  <span>{node.icon}</span>
                </div>
                <span className="text-sm font-medium">{node.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Flows section */}
        <div className="p-4 border-t border-blue-500/30 mt-4">
          <h2 className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-3">Saved Flows</h2>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                <span className="text-sm font-medium">Price Alert Flow</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                <span className="text-sm font-medium">Wallet Tracking</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                <span className="text-sm font-medium">Daily Report</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* User section */}
        <div className="absolute bottom-0 w-full p-4 border-t border-blue-500/30">
          <div className="flex items-center">
            <img src="https://picsum.photos/40/40" alt="User" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <p className="text-sm font-medium">Alex Trader</p>
              <p className="text-xs text-blue-200">Pro Account</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}