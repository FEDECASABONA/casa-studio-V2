'use client'

import { useState, useCallback } from 'react'
import TerminalWindow from './TerminalWindow'
import { projects, Project } from '../data/projects'

interface WindowState {
  id: string
  project: Project
  isMinimized: boolean
  isMaximized: boolean
  position: { x: number; y: number }
  zIndex: number
}

interface WindowManagerProps {
  openWindows: WindowState[]
  onCloseWindow: (windowId: string) => void
  onMinimizeWindow: (windowId: string) => void
  onMaximizeWindow: (windowId: string) => void
  onDragStart: (windowId: string, e: React.MouseEvent) => void
}

const WindowManager: React.FC<WindowManagerProps> = ({
  openWindows,
  onCloseWindow,
  onMinimizeWindow,
  onMaximizeWindow,
  onDragStart
}) => {
  return (
    <>
      {openWindows.map((window) => (
        <TerminalWindow
          key={window.id}
          project={window.project}
          onClose={() => onCloseWindow(window.id)}
          onMinimize={() => onMinimizeWindow(window.id)}
          onMaximize={() => onMaximizeWindow(window.id)}
          isMinimized={window.isMinimized}
          isMaximized={window.isMaximized}
          zIndex={window.zIndex}
          position={window.position}
          onDragStart={(e) => onDragStart(window.id, e)}
        />
      ))}
    </>
  )
}

export const useWindowManager = () => {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([])
  const [nextZIndex, setNextZIndex] = useState(1000)

  const openWindow = useCallback((projectId: string) => {
    const project = projects.find(p => p.id === projectId)
    if (!project) return

    // Check if window is already open
    const existingWindow = openWindows.find(w => w.id === projectId)
    if (existingWindow) {
      // Bring to front and unminimize
      setOpenWindows(prev => 
        prev.map(w => 
          w.id === projectId 
            ? { ...w, isMinimized: false, zIndex: nextZIndex }
            : w
        )
      )
      setNextZIndex(prev => prev + 1)
      return
    }

    // Create new window
    const newWindow: WindowState = {
      id: projectId,
      project,
      isMinimized: false,
      isMaximized: false,
      position: {
        x: typeof window !== 'undefined' ? Math.random() * (window.innerWidth - 800) + 50 : 50,
        y: typeof window !== 'undefined' ? Math.random() * (window.innerHeight - 600) + 50 : 50
      },
      zIndex: nextZIndex
    }

    setOpenWindows(prev => [...prev, newWindow])
    setNextZIndex(prev => prev + 1)
  }, [openWindows, nextZIndex])

  const closeWindow = useCallback((windowId: string) => {
    setOpenWindows(prev => prev.filter(w => w.id !== windowId))
  }, [])

  const minimizeWindow = useCallback((windowId: string) => {
    setOpenWindows(prev =>
      prev.map(w =>
        w.id === windowId ? { ...w, isMinimized: !w.isMinimized } : w
      )
    )
  }, [])

  const maximizeWindow = useCallback((windowId: string) => {
    setOpenWindows(prev =>
      prev.map(w =>
        w.id === windowId ? { ...w, isMaximized: !w.isMaximized } : w
      )
    )
  }, [])

  const bringToFront = useCallback((windowId: string) => {
    setOpenWindows(prev =>
      prev.map(w =>
        w.id === windowId ? { ...w, zIndex: nextZIndex } : w
      )
    )
    setNextZIndex(prev => prev + 1)
  }, [nextZIndex])

  const handleDragStart = useCallback((windowId: string, e: React.MouseEvent) => {
    bringToFront(windowId)
    
    const startX = e.clientX
    const startY = e.clientY
    const windowState = openWindows.find(w => w.id === windowId)
    if (!windowState) return

    const startPosX = windowState.position.x
    const startPosY = windowState.position.y

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX
      const deltaY = e.clientY - startY
      
      // Check if we're in the browser environment
      if (typeof window === 'undefined') return
      
      setOpenWindows(prev =>
        prev.map(w =>
          w.id === windowId
            ? {
                ...w,
                position: {
                  x: Math.max(0, Math.min(window.innerWidth - 400, startPosX + deltaX)),
                  y: Math.max(0, Math.min(window.innerHeight - 100, startPosY + deltaY))
                }
              }
            : w
        )
      )
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [openWindows, bringToFront])

  return {
    openWindows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    handleDragStart
  }
}

export default WindowManager
