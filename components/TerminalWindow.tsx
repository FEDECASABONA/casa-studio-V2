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
  const [isResizing, setIsResizing] = useState(false)
  const [displayedContent, setDisplayedContent] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)
  const resizeRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('terminal-header')) {
      setIsDragging(true)
      onDragStart(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  // Typing animation effect
  useEffect(() => {
    if (activeTab === 'content' && project.content) {
      setIsTyping(true)
      setDisplayedContent('')
      
      let currentIndex = 0
      const typingSpeed = 30 // milliseconds per character
      
      const typeNextChar = () => {
        if (currentIndex < project.content.length) {
          setDisplayedContent(project.content.slice(0, currentIndex + 1))
          currentIndex++
          setTimeout(typeNextChar, typingSpeed)
        } else {
          setIsTyping(false)
        }
      }
      
      const timer = setTimeout(typeNextChar, 100) // Small delay before starting
      return () => clearTimeout(timer)
    }
  }, [activeTab, project.content])

  // Handle resize without moving position
  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsResizing(true)
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

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseUp)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseUp)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isResizing])

  if (isMinimized) {
    return (
      <div
        className="fixed bg-black border border-gray-500 cursor-pointer hover:bg-gray-900 transition-colors"
        style={{
          left: position.x,
          top: position.y,
          zIndex: zIndex,
          minWidth: '200px',
          height: '32px',
          borderWidth: '0.5px'
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="terminal-header flex items-center justify-between px-3 py-1 h-full">
          <div className="flex items-center space-x-2">
            <span className="text-white font-roboto font-normal uppercase tracking-wider" style={{ fontSize: '0.74rem' }}>{project.name}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
            className="text-gray-400 hover:text-white transition-colors"
            style={{ fontSize: '0.74rem' }}
          >
            −
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={windowRef}
      className={`fixed bg-black border border-gray-500 shadow-2xl ${isMaximized ? 'w-full h-full top-0 left-0' : ''}`}
      style={{
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        width: isMaximized ? '100vw' : '800px',
        height: isMaximized ? '100vh' : '600px',
        zIndex: zIndex,
        minWidth: '400px',
        minHeight: '300px',
        borderWidth: '0.5px',
        overflow: 'hidden'
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Terminal Header */}
      <div className="terminal-header flex items-center justify-between px-4 py-2 border-b border-gray-500 bg-black" style={{ borderWidth: '0.5px' }}>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <button 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={onClose}
              title="Close"
              style={{ fontSize: '0.74rem' }}
            >
              ✕
            </button>
            <button 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={onMinimize}
              title="Minimize"
              style={{ fontSize: '0.74rem' }}
            >
              −
            </button>
            <button 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={onMaximize}
              title="Maximize"
              style={{ fontSize: '0.74rem' }}
            >
              □
            </button>
          </div>
          <span className="text-white font-roboto font-normal uppercase tracking-wider" style={{ fontSize: '0.74rem' }}>{project.name}</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex h-full">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col w-full">
          {/* Tabs */}
          <div className="flex border-b border-gray-500 bg-black" style={{ borderWidth: '0.5px' }}>
            <button
              className={`px-4 py-2 font-roboto font-normal uppercase tracking-wider border-r border-gray-500 transition-colors ${
                activeTab === 'content' 
                  ? 'bg-gray-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
              style={{ fontSize: '0.74rem', borderWidth: '0.5px' }}
              onClick={() => setActiveTab('content')}
            >
              content.txt
            </button>
            <button
              className={`px-4 py-2 font-roboto font-normal uppercase tracking-wider transition-colors ${
                activeTab === 'images' 
                  ? 'bg-gray-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
              style={{ fontSize: '0.74rem' }}
              onClick={() => setActiveTab('images')}
            >
              images/
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto p-4" style={{ height: 'calc(100% - 40px)' }}>
            {activeTab === 'content' ? (
              <div className="text-white font-roboto font-normal uppercase tracking-wider leading-relaxed whitespace-pre-line" style={{ fontSize: '0.74rem' }}>
                {displayedContent}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image}
                      alt={`${project.name} - Image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover border border-gray-500 hover:border-gray-400 transition-colors"
                      style={{ borderWidth: '0.5px' }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                      <span className="text-white font-roboto font-normal uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: '0.74rem' }}>
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
      
      {/* Resize Handle */}
      <div
        ref={resizeRef}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background: 'linear-gradient(-45deg, transparent 0%, transparent 30%, #374151 30%, #374151 40%, transparent 40%, transparent 70%, #374151 70%, #374151 80%, transparent 80%)'
        }}
        onMouseDown={handleResizeStart}
      />
    </div>
  )
}

export default TerminalWindow
