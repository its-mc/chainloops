'use client'

import { memo } from 'react'
import { Handle, Position } from 'reactflow'

// Start Node
export const StartNode = memo(({ data }) => {
  return (
    <div className="rounded-lg border border-green-500 bg-gradient-to-b from-green-50 to-green-100 shadow-md p-3 min-w-[180px]">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          ▶️
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold text-green-800">Start Flow</div>
        </div>
      </div>
      
      <div className="mt-2 p-2 bg-white bg-opacity-70 rounded border border-green-200">
        <div className="text-xs text-green-700">
          Triggers: 
          <select className="block w-full mt-1 text-xs bg-white bg-opacity-70 border border-green-200 rounded p-1">
            <option>Manual</option>
            <option>Schedule</option>
            <option>Recurring</option>
          </select>
        </div>
      </div>
      
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-green-500 border-2 border-white" 
      />
    </div>
  )
})

// Telegram Node
export const TelegramNode = memo(({ data }) => {
  return (
    <div className="rounded-lg border border-blue-500 bg-gradient-to-b from-blue-50 to-blue-100 shadow-md p-3 min-w-[220px]">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          📱
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold text-blue-800">Send Telegram Message</div>
        </div>
      </div>
      
      <div className="mt-2 p-2 bg-white bg-opacity-70 rounded border border-blue-200">
        <div className="text-xs text-blue-700 mb-2">
          <label className="block mb-1">Chat ID</label>
          <input className="w-full px-2 py-1 text-xs bg-white border border-blue-200 rounded" placeholder="Enter Chat ID" />
        </div>
        <div className="text-xs text-blue-700">
          <label className="block mb-1">Message</label>
          <textarea className="w-full px-2 py-1 text-xs bg-white border border-blue-200 rounded" rows={2} placeholder="Enter message text"></textarea>
        </div>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left}
        className="w-3 h-3 bg-blue-500 border-2 border-white" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-blue-500 border-2 border-white" 
      />
    </div>
  )
})

// Price Change Node
export const PriceChangeNode = memo(({ data }) => {
  return (
    <div className="rounded-lg border border-indigo-500 bg-gradient-to-b from-indigo-50 to-indigo-100 shadow-md p-3 min-w-[220px]">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
          📈
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold text-indigo-800">On Price Change</div>
        </div>
      </div>
      
      <div className="mt-2 p-2 bg-white bg-opacity-70 rounded border border-indigo-200">
        <div className="text-xs text-indigo-700 mb-2">
          <label className="block mb-1">Cryptocurrency</label>
          <select className="w-full px-2 py-1 text-xs bg-white border border-indigo-200 rounded">
            <option>Bitcoin (BTC)</option>
            <option>Ethereum (ETH)</option>
            <option>Solana (SOL)</option>
            <option>Cardano (ADA)</option>
            <option>Ripple (XRP)</option>
          </select>
        </div>
        <div className="text-xs text-indigo-700 mb-2">
          <label className="block mb-1">Condition</label>
          <select className="w-full px-2 py-1 text-xs bg-white border border-indigo-200 rounded">
            <option>Increases by</option>
            <option>Decreases by</option>
            <option>Goes above</option>
            <option>Goes below</option>
          </select>
        </div>
        <div className="text-xs text-indigo-700">
          <label className="block mb-1">Value</label>
          <div className="flex">
            <input className="w-full px-2 py-1 text-xs bg-white border border-indigo-200 rounded-l" placeholder="10" />
            <select className="px-2 py-1 text-xs bg-white border-y border-r border-indigo-200 rounded-r">
              <option>%</option>
              <option>USD</option>
            </select>
          </div>
        </div>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left}
        className="w-3 h-3 bg-indigo-500 border-2 border-white" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-indigo-500 border-2 border-white" 
      />
    </div>
  )
})

// Wallet Node
export const WalletNode = memo(({ data }) => {
  return (
    <div className="rounded-lg border border-purple-500 bg-gradient-to-b from-purple-50 to-purple-100 shadow-md p-3 min-w-[220px]">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
          💰
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold text-purple-800">On Wallet Moved Funds</div>
        </div>
      </div>
      
      <div className="mt-2 p-2 bg-white bg-opacity-70 rounded border border-purple-200">
        <div className="text-xs text-purple-700 mb-2">
          <label className="block mb-1">Wallet Address</label>
          <input className="w-full px-2 py-1 text-xs bg-white border border-purple-200 rounded" placeholder="0x..." />
        </div>
        <div className="text-xs text-purple-700 mb-2">
          <label className="block mb-1">Blockchain</label>
          <select className="w-full px-2 py-1 text-xs bg-white border border-purple-200 rounded">
            <option>Ethereum</option>
            <option>Bitcoin</option>
            <option>Solana</option>
            <option>Polygon</option>
          </select>
        </div>
        <div className="text-xs text-purple-700">
          <label className="block mb-1">Minimum Amount</label>
          <div className="flex">
            <input className="w-full px-2 py-1 text-xs bg-white border border-purple-200 rounded-l" placeholder="0.1" />
            <select className="px-2 py-1 text-xs bg-white border-y border-r border-purple-200 rounded-r">
              <option>ETH</option>
              <option>BTC</option>
              <option>SOL</option>
              <option>USD</option>
            </select>
          </div>
        </div>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left}
        className="w-3 h-3 bg-purple-500 border-2 border-white" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-purple-500 border-2 border-white" 
      />
    </div>
  )
})

// Webhook Node
export const WebhookNode = memo(({ data }) => {
  return (
    <div className="rounded-lg border border-cyan-500 bg-gradient-to-b from-cyan-50 to-cyan-100 shadow-md p-3 min-w-[220px]">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
          🌐
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold text-cyan-800">On HTTP Webhook</div>
        </div>
      </div>
      
      <div className="mt-2 p-2 bg-white bg-opacity-70 rounded border border-cyan-200">
        <div className="text-xs text-cyan-700 mb-2">
          <div className="flex items-center">
            <span className="block py-1 px-2 bg-cyan-100 rounded text-cyan-800 font-mono text-xs">
              https://api.example.com/webhook/YOUR_ID
            </span>
            <button className="ml-2 text-cyan-600 hover:text-cyan-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-xs text-cyan-700">
          <label className="block mb-1">Secret Key</label>
          <div className="flex">
            <input className="w-full px-2 py-1 text-xs bg-white border border-cyan-200 rounded-l" type="password" value="••••••••••••" readOnly />
            <button className="px-2 py-1 text-xs bg-cyan-100 border-y border-r border-cyan-200 rounded-r text-cyan-800">
              Show
            </button>
          </div>
        </div>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left}
        className="w-3 h-3 bg-cyan-500 border-2 border-white" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-cyan-500 border-2 border-white" 
      />
    </div>
  )
})

// CSV Node
export const CSVNode = memo(({ data }) => {
  return (
    <div className="rounded-lg border border-amber-500 bg-gradient-to-b from-amber-50 to-amber-100 shadow-md p-3 min-w-[220px]">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
          📊
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold text-amber-800">Append CSV Row</div>
        </div>
      </div>
      
      <div className="mt-2 p-2 bg-white bg-opacity-70 rounded border border-amber-200">
        <div className="text-xs text-amber-700 mb-2">
          <label className="block mb-1">File Path</label>
          <input className="w-full px-2 py-1 text-xs bg-white border border-amber-200 rounded" placeholder="/path/to/file.csv" />
        </div>
        <div className="text-xs text-amber-700">
          <label className="block mb-1">Columns</label>
          <div className="space-y-1">
            <div className="flex">
              <input className="w-1/3 px-2 py-1 text-xs bg-white border border-amber-200 rounded-l" placeholder="Column name" />
              <input className="w-2/3 px-2 py-1 text-xs bg-white border-y border-r border-amber-200 rounded-r" placeholder="Value or {{variable}}" />
            </div>
            <div className="flex">
              <input className="w-1/3 px-2 py-1 text-xs bg-white border border-amber-200 rounded-l" placeholder="Column name" />
              <input className="w-2/3 px-2 py-1 text-xs bg-white border-y border-r border-amber-200 rounded-r" placeholder="Value or {{variable}}" />
            </div>
            <button className="w-full px-2 py-1 text-xs bg-amber-100 border border-amber-200 rounded text-amber-800">
              + Add Column
            </button>
          </div>
        </div>
      </div>
      
      <Handle 
        type="target" 
        position={Position.Left}
        className="w-3 h-3 bg-amber-500 border-2 border-white" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-amber-500 border-2 border-white" 
      />
    </div>
  )
})