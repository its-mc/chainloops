'use client'

import { useState, useCallback } from 'react'
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap, 
  addEdge, 
  applyEdgeChanges, 
  applyNodeChanges,
  MarkerType
} from 'reactflow'
import 'reactflow/dist/style.css'

import Sidebar from './Sidebar'
import { 
  StartNode, 
  TelegramNode, 
  PriceChangeNode, 
  WalletNode, 
  WebhookNode, 
  CSVNode 
} from './NodeTypes'

// Custom node types mapping
const nodeTypes = {
  start: StartNode,
  telegram: TelegramNode,
  priceChange: PriceChangeNode,
  walletTracker: WalletNode,
  webhook: WebhookNode,
  csv: CSVNode,
}

export default function Dashboard() {
  const [nodes, setNodes] = useState([
    {
      id: '1',
      type: 'start',
      data: { label: 'Start' },
      position: { x: 250, y: 25 },
    },
  ])
  
  const [edges, setEdges] = useState([])
  
  // Handle node changes
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  
  // Handle edge changes
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )
  
  // Handle connection
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge({
      ...connection,
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#3b82f6',
      },
    }, eds)),
    [setEdges]
  )
  
  // Handle drop from sidebar
  const onDrop = useCallback(
    (event) => {
      event.preventDefault()
      
      const nodeType = event.dataTransfer.getData('application/reactflow/type')
      const nodeLabel = event.dataTransfer.getData('application/reactflow/label')
      
      // Get drop position adjusted to the pane
      const reactFlowBounds = document.querySelector('.react-flow').getBoundingClientRect()
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      }
      
      // Generate new node ID
      const newId = (nodes.length + 1).toString()
      
      // Create new node
      const newNode = {
        id: newId,
        type: nodeType,
        position,
        data: { label: nodeLabel },
      }
      
      setNodes((nds) => nds.concat(newNode))
    },
    [nodes, setNodes]
  )
  
  // Handle drag over
  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])
  
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1 h-full" onDrop={onDrop} onDragOver={onDragOver}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-white bg-opacity-80 backdrop-blur-sm"
        >
          <Background color="#3b82f6" variant="dots" gap={20} size={1} />
          <Controls className="bg-white bg-opacity-80 backdrop-blur-sm border-blue-100 shadow-md" />
          <MiniMap 
            nodeStrokeColor="#3b82f6"
            nodeColor="#e0f2fe"
            maskColor="rgba(240, 249, 255, 0.4)"
            className="bg-white bg-opacity-80 backdrop-blur-sm border border-blue-100 shadow-md"
          />
        </ReactFlow>
      </div>
    </div>
  )
}