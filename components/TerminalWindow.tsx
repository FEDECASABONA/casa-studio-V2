'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface TerminalWindowProps {
  project: {
    id: string
    name: string
    description: string
    content: string
    images: string[]
    category: string
    year: string
    status: string
  }
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
  position: { x: number; y: number }
  onDragStart: (e: React.MouseEvent) => void
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  project,
  onClose,
  onMinimize,
  onMaximize,
  isMinimized,
  isMaximized,
  zIndex,
  position,
  onDragStart
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'images'>('content')
  const [isDragging, setIsDragging] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('terminal-header')) {
      setIsDragging(true)
      onDragStart(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseUp)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseUp)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  if (isMinimized) {
    return (
      <div
        className="fixed bg-black border border-green-400 rounded-t-lg cursor-pointer hover:bg-gray-900 transition-colors"
        style={{
          left: position.x,
          top: position.y,
          zIndex: zIndex,
          minWidth: '200px',
          height: '32px'
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="terminal-header flex items-center justify-between px-3 py-1 h-full">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-xs font-mono">{project.name}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
            className="text-green-400 hover:text-white transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect x="2" y="5" width="8" height="2" />
            </svg>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={windowRef}
      className={`fixed bg-black border border-green-400 rounded-lg shadow-2xl ${isMaximized ? 'w-full h-full top-0 left-0' : ''}`}
      style={{
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        width: isMaximized ? '100vw' : '800px',
        height: isMaximized ? '100vh' : '600px',
        zIndex: zIndex,
        minWidth: '400px',
        minHeight: '300px'
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Terminal Header */}
      <div className="terminal-header flex items-center justify-between px-4 py-2 border-b border-green-400 bg-gray-900 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-400 transition-colors" onClick={onClose}></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors" onClick={onMinimize}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-400 transition-colors" onClick={onMaximize}></div>
          </div>
          <span className="text-green-400 text-sm font-mono font-bold">{project.name}</span>
          <span className="text-gray-400 text-xs font-mono">[{project.status}]</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-xs font-mono">{project.category} • {project.year}</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-48 bg-gray-900 border-r border-green-400 p-4">
          <div className="space-y-2">
            <div className="text-green-400 text-xs font-mono font-bold mb-4">PROJECT INFO</div>
            <div className="text-gray-300 text-xs font-mono">
              <div className="mb-2">
                <span className="text-green-400">Name:</span><br />
                <span className="text-white">{project.name}</span>
              </div>
              <div className="mb-2">
                <span className="text-green-400">Category:</span><br />
                <span className="text-white">{project.category}</span>
              </div>
              <div className="mb-2">
                <span className="text-green-400">Year:</span><br />
                <span className="text-white">{project.year}</span>
              </div>
              <div className="mb-2">
                <span className="text-green-400">Status:</span><br />
                <span className="text-white">{project.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-green-400 bg-gray-800">
            <button
              className={`px-4 py-2 text-xs font-mono border-r border-green-400 transition-colors ${
                activeTab === 'content' 
                  ? 'bg-green-400 text-black font-bold' 
                  : 'text-green-400 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('content')}
            >
              content.txt
            </button>
            <button
              className={`px-4 py-2 text-xs font-mono transition-colors ${
                activeTab === 'images' 
                  ? 'bg-green-400 text-black font-bold' 
                  : 'text-green-400 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('images')}
            >
              images/
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto p-4">
            {activeTab === 'content' ? (
              <div className="text-green-400 text-sm font-mono leading-relaxed whitespace-pre-line">
                {project.content}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image}
                      alt={`${project.name} - Image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded border border-green-400 hover:border-green-300 transition-colors"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                      <span className="text-green-400 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                        view_fullscreen
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalWindow
