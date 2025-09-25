'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectLayoutProps {
  projectName: string
  description: string
  images?: string[]
  children?: React.ReactNode
}

const ProjectLayout = ({ projectName, description, images = [], children }: ProjectLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  // Create repeated project name for marquee
  const marqueeText = `${projectName.toUpperCase()}.${projectName.toUpperCase()}.${projectName.toUpperCase()}.${projectName.toUpperCase()}.${projectName.toUpperCase()}.${projectName.toUpperCase()}.`

  return (
    <div className="min-h-screen bg-black text-white font-roboto overflow-x-hidden relative">
      {/* Loading Animation Overlay */}
      <div 
        className={`page-load-overlay ${!isLoading ? 'hidden' : ''}`}
      />
      
      {/* Project Marquee */}
      <div className={`fixed top-0 left-0 right-0 bg-black text-white h-16 lg:h-20 xl:h-24 flex items-center overflow-hidden z-50 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-1000 ease-out`}>
        <div className="animate-marquee whitespace-nowrap" style={{ display: 'flex' }}>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            {marqueeText}
          </span>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            {marqueeText}
          </span>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            {marqueeText}
          </span>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-1000 ease-out`} style={{ paddingTop: '6rem' }}>
        
        {/* Left Content Area */}
        <div className="fixed top-0 left-0 w-1/2 h-full flex items-center" style={{ paddingTop: '6rem', paddingLeft: '20px', zIndex: 10 }}>
          <div className="max-w-lg">
            <div className="nav-item text-white mb-4">
              {description}
            </div>
            {children}
          </div>
        </div>

        {/* Right Image Gallery */}
        <div className="fixed top-0 right-0 w-1/2 h-full" style={{ paddingTop: '6rem', paddingRight: '20px', zIndex: 10 }}>
          <div className="h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-800 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={`${projectName} image ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))
              ) : (
                // Placeholder images
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="aspect-square bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image {index + 1}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Return CTA */}
        <div className="fixed bottom-0 left-0" style={{ margin: '20px', zIndex: 50 }}>
          <Link href="/" className="bg-red-500 text-black px-6 py-3 font-roboto font-normal uppercase tracking-wider hover:bg-red-400 transition-colors duration-200">
            RETURN
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ProjectLayout
