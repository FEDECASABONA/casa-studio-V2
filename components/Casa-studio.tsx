'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WindowManager, { useWindowManager } from './WindowManager'

// Image data directly in component to avoid import issues
const galleryImages = [
  {
    id: 'greed-typography',
    src: '/images/gallery/greed.webp',
    alt: 'GREED Typography Design with Snake Imagery',
    title: 'GREED Typography',
    description: 'Bold typographic treatment featuring dramatic snake imagery and sophisticated 3D rendering',
    category: 'gallery',
    width: 1920,
    height: 800
  },
  {
    id: 'collective-platform',
    src: '/images/gallery/Collective-Ux-Ui.webp',
    alt: 'The Collective Co-living Platform Design',
    title: 'The Collective Platform',
    description: 'Mobile and desktop application design for co-living platform with modern UI elements',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'app-design',
    src: '/images/gallery/app-angle.webp',
    alt: 'Mobile App Design at Angle',
    title: 'Mobile App Design',
    description: 'Comprehensive mobile app design showcasing user interface and experience',
    category: 'gallery',
    width: 1920,
    height: 1280
  },
  {
    id: 'bytes-interface',
    src: '/images/gallery/bytes.webp',
    alt: 'Bytes Interface Design',
    title: 'Bytes Interface',
    description: 'Modern interface design with clean typography and user-friendly navigation',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'ninjas-website',
    src: '/images/gallery/ninjas.webp',
    alt: 'NINJAS Website Design',
    title: 'NINJAS Brand Website',
    description: 'Bold red and black website design with dynamic typography and cinematic elements',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'spheria-design',
    src: '/images/gallery/spheria.webp',
    alt: 'Spheria Brand Design',
    title: 'Spheria Project',
    description: 'Sophisticated brand design with modern aesthetics and professional presentation',
    category: 'gallery',
    width: 1920,
    height: 1200
  },
  {
    id: 'enter-project',
    src: '/images/gallery/ENTER.webp',
    alt: 'ENTER Project Design',
    title: 'ENTER Project',
    description: 'Dynamic project design with bold visual elements and contemporary styling',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'AI—BRAIN',
    src: '/images/gallery/AI—BRAIN.webp',
    alt: 'AI—BRAIN Project Design',
    title: 'AI—BRAIN Project',
    description: 'Artificial intelligence interface design with modern UI elements',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: '11:FS / Content Hub',
    src: '/images/gallery/11FS.webp',
    alt: '11:FS Content Hub Design',
    title: '11:FS Content Hub',
    description: 'Financial services content platform with sophisticated design',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'travel assistant',
    src: '/images/gallery/travel assistant.webp',
    alt: 'Travel Assistant App Design',
    title: 'Travel Assistant',
    description: 'Mobile travel application with intuitive user interface',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'sportify',
    src: '/images/gallery/sportify.webp',
    alt: 'Sportify App Design',
    title: 'Sportify',
    description: 'Sports streaming platform with dynamic visual design',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'marine chartering platform',
    src: '/images/gallery/marine chartering platform.webp',
    alt: 'Marine Chartering Platform Design',
    title: 'Marine Chartering Platform',
    description: 'Maritime business platform with professional interface design',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'magic places',
    src: '/images/gallery/magic places.webp',
    alt: 'Magic Places Project Design',
    title: 'Magic Places',
    description: 'Immersive digital experience design with magical elements',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'observer',
    src: '/images/gallery/observer.webp',
    alt: 'Observer Project Design',
    title: 'Observer',
    description: 'Data visualization and monitoring interface design',
    category: 'gallery',
    width: 1920,
    height: 1080
  },
  {
    id: 'casa',
    src: '/images/gallery/casa.webp',
    alt: 'Casa Project Design',
    title: 'Casa',
    description: 'Architectural visualization and design project',
    category: 'gallery',
    width: 1920,
    height: 1080
  }
]

// Map navigation items to corresponding images
const navImageMap: { [key: string]: string } = {
  'NINJAS': 'ninjas-website',
  'COLLECTIVE': 'collective-platform',
  'TRAVEL ASSISTANT': 'travel assistant',
  'AI—BRAIN': 'AI—BRAIN',
  'SPORTIFY': 'sportify',
  'Marine Chartering Platform': 'marine chartering platform',
  '11:FS / Content Hub': '11:FS / Content Hub',
  'BYTES': 'bytes-interface',
  'Greed': 'greed-typography',
  'Enter': 'enter-project',
  'Observer': 'observer',
  'Casa': 'casa',
  'Magic Places': 'magic places'
}

// Map navigation items to their project IDs
const navProjectMap: { [key: string]: string } = {
  'FEDE CASABONA': 'fede-casabona',
  'NINJAS': 'ninjas',
  'COLLECTIVE': 'collective',
  'TRAVEL ASSISTANT': 'travel-assistant',
  'AI—BRAIN': 'ai-brain',
  'SPORTIFY': 'sportify',
  'Marine Chartering Platform': 'marine-chartering',
  '11:FS / Content Hub': '11fs',
  'BYTES': 'bytes',
  'Greed': 'greed',
  'Enter': 'enter',
  'Observer': 'observer',
  'Casa': 'casa',
  'Magic Places': 'magic-places'
}

const Portfolio = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Window management
  const {
    openWindows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    handleDragStart
  } = useWindowManager()
  
  useEffect(() => {
    // Trigger the animation after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const getImageForNav = (navItem: string) => {
    const imageId = navImageMap[navItem]
    return galleryImages.find(img => img.id === imageId)
  }

  return (
    <div className="min-h-screen bg-black text-white font-roboto overflow-x-hidden relative">
      {/* Loading Animation Overlay */}
      <div 
        className={`page-load-overlay ${!isLoading ? 'hidden' : ''}`}
      />
      
      {/* Top Marquee */}
      <div className={`fixed top-0 left-0 right-0 bg-black text-white h-16 lg:h-20 xl:h-24 flex items-center overflow-hidden z-50 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-1000 ease-out`}>
        <div className="animate-marquee whitespace-nowrap" style={{ display: 'flex' }}>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            FEDE CASABONA + PRODUCT DESIGNER + AI PROTOTYPE + 10Y OF EXP + SUPER IC + MOTION + BRANDING + STRATEGY + CONCEPT + VISUAL +
          </span>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            FEDE CASABONA + PRODUCT DESIGNER + AI PROTOTYPE + 10Y OF EXP + SUPER IC + MOTION + BRANDING + STRATEGY + CONCEPT + VISUAL +
          </span>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            FEDE CASABONA + PRODUCT DESIGNER + AI PROTOTYPE + 10Y OF EXP + SUPER IC + MOTION + BRANDING + STRATEGY + CONCEPT + VISUAL +
          </span>
          <span className="marquee-text uppercase tracking-widest" style={{ paddingRight: '2rem' }}>
            FEDE CASABONA + PRODUCT DESIGNER + AI PROTOTYPE + 10Y OF EXP + SUPER IC + MOTION + BRANDING + STRATEGY + CONCEPT + VISUAL +
          </span>
        </div>
      </div>
      
      {/* Desktop Layout */}
      <div className={`hidden lg:flex min-h-screen ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-1000 ease-out`} style={{ paddingTop: '6rem' }}>
        {/* Bottom Left Navigation */}
        <div className="fixed bg-black" style={{ left: '20px', bottom: '20px', zIndex: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => {
                       setHoveredNav('FEDE CASABONA')
                       setIsVideoPlaying(true)
                     }}
                     onMouseLeave={() => {
                       setHoveredNav(null)
                       setIsVideoPlaying(false)
                     }}
                     onClick={() => openWindow('fede-casabona')}
                   >
                     FEDE CASABONA
            </div>
            <div 
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('NINJAS')}
              onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('ninjas')}
            >
                     NINJAS
            </div>
            <div 
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('COLLECTIVE')}
              onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('collective')}
            >
                     COLLECTIVE
            </div>
            <div 
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('TRAVEL ASSISTANT')}
              onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('travel-assistant')}
            >
                     TRAVEL ASSISTANT
            </div>
            <div 
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('AI—BRAIN')}
              onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('ai-brain')}
            >
                     AI—BRAIN
            </div>
            <div 
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('SPORTIFY')}
              onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('sportify')}
            >
                     SPORTIFY
            </div>
            <div 
                     className="nav-item cursor-pointer"
              onMouseEnter={() => setHoveredNav('Marine Chartering Platform')}
              onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('marine-chartering')}
            >
              Marine Chartering Platform
            </div>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('11:FS / Content Hub')}
                     onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('11fs')}
                   >
                     11:FS / Content Hub
                   </div>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('BYTES')}
                     onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('bytes')}
                   >
                     BYTES
                   </div>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('Greed')}
                     onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('greed')}
                   >
                     Greed
                   </div>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('Enter')}
                     onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('enter')}
                   >
                     Enter
                   </div>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('Observer')}
                     onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('observer')}
                   >
                     Observer
                   </div>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('Casa')}
                     onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('casa')}
                   >
                     Casa
                   </div>
                   <div
                     className="nav-item cursor-pointer"
                     onMouseEnter={() => setHoveredNav('Magic Places')}
                     onMouseLeave={() => setHoveredNav(null)}
                     onClick={() => openWindow('magic-places')}
                   >
                     Magic Places
            </div>
            <div className="nav-item">
                     GET IN TOUCH
            </div>
          </div>
        </div>

        {/* Main Content Area - Image/Video Preview on Hover */}
        <div className="flex-1 bg-black relative h-screen" style={{ paddingTop: '6rem' }}>
          {hoveredNav === 'FEDE CASABONA' && isVideoPlaying && (
            <div className="fixed bottom-0 right-0 animate-fadeIn" style={{ zIndex: 30, marginBottom: '20px', marginRight: '20px' }}>
              <video
                src="/images/gallery/fedecasabona_3d.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-contain"
                style={{ 
                  maxHeight: '70vh',
                  maxWidth: '60vw',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </div>
          )}
          {hoveredNav && hoveredNav !== 'FEDE CASABONA' && getImageForNav(hoveredNav) && (
            <div className="fixed bottom-0 right-0 animate-fadeIn" style={{ zIndex: 30, marginBottom: '20px', marginRight: '20px' }}>
              <Image
                src={getImageForNav(hoveredNav)!.src}
                alt={getImageForNav(hoveredNav)!.alt}
                title={getImageForNav(hoveredNav)!.title}
                width={getImageForNav(hoveredNav)!.width || 800}
                height={getImageForNav(hoveredNav)!.height || 600}
                className="object-contain"
                style={{ 
                  maxHeight: '70vh',
                  maxWidth: '60vw',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </div>
          )}
          
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className={`lg:hidden ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-1000 ease-out`} style={{ paddingTop: '4rem' }}>
        {/* Bottom Navigation (Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-black p-4" style={{ zIndex: 40, paddingBottom: '20px' }}>
          <div className="grid grid-cols-2" style={{ gap: '4px' }}>
                 <div
                   className="nav-item col-span-2 cursor-pointer"
                   onTouchStart={() => {
                     setHoveredNav('FEDE CASABONA')
                     setIsVideoPlaying(true)
                   }}
                   onTouchEnd={() => {
                     setHoveredNav(null)
                     setIsVideoPlaying(false)
                   }}
                   onClick={() => openWindow('fede-casabona')}
                 >
                   FEDE CASABONA
            </div>
            <div 
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('NINJAS')}
              onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('ninjas')}
            >
                   NINJAS
            </div>
            <div 
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('COLLECTIVE')}
              onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('collective')}
            >
                   COLLECTIVE
            </div>
            <div 
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('TRAVEL ASSISTANT')}
              onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('travel-assistant')}
            >
                   TRAVEL ASSISTANT
            </div>
            <div 
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('AI—BRAIN')}
              onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('ai-brain')}
            >
                   AI—BRAIN
            </div>
            <div 
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('SPORTIFY')}
              onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('sportify')}
            >
                   SPORTIFY
            </div>
            <div 
                   className="nav-item cursor-pointer"
              onTouchStart={() => setHoveredNav('Marine Chartering Platform')}
              onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('marine-chartering')}
            >
              Marine Chartering Platform
            </div>
                 <div
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('11:FS / Content Hub')}
                   onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('11fs')}
                 >
                   11:FS / Content Hub
                 </div>
                 <div
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('BYTES')}
                   onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('bytes')}
                 >
                   BYTES
                 </div>
                 <div
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('Greed')}
                   onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('greed')}
                 >
                   Greed
                 </div>
                 <div
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('Enter')}
                   onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('enter')}
                 >
                   Enter
                 </div>
                 <div
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('Observer')}
                   onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('observer')}
                 >
                   Observer
                 </div>
                 <div
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('Casa')}
                   onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('casa')}
                 >
                   Casa
                 </div>
                 <div
                   className="nav-item cursor-pointer"
                   onTouchStart={() => setHoveredNav('Magic Places')}
                   onTouchEnd={() => setHoveredNav(null)}
                   onClick={() => openWindow('magic-places')}
                 >
                   Magic Places
            </div>
            <div className="nav-item col-span-2">
                   GET IN TOUCH
            </div>
          </div>
        </div>

        {/* Mobile Image/Video Preview Area */}
        <div className="min-h-screen bg-black relative" style={{ paddingBottom: '300px' }}>
          {hoveredNav === 'FEDE CASABONA' && isVideoPlaying && (
            <div className="fixed bottom-0 right-0 animate-fadeIn" style={{ zIndex: 30, marginBottom: '250px', marginRight: '20px' }}>
              <video
                src="/images/gallery/fedecasabona_3d.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover"
                style={{ 
                  maxHeight: '50vh',
                  maxWidth: '80vw',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </div>
          )}
          {hoveredNav && hoveredNav !== 'FEDE CASABONA' && getImageForNav(hoveredNav) && (
            <div className="fixed bottom-0 right-0 animate-fadeIn" style={{ zIndex: 30, marginBottom: '250px', marginRight: '20px' }}>
              <Image
                src={getImageForNav(hoveredNav)!.src}
                alt={getImageForNav(hoveredNav)!.alt}
                title={getImageForNav(hoveredNav)!.title}
                width={getImageForNav(hoveredNav)!.width || 800}
                height={getImageForNav(hoveredNav)!.height || 600}
                className="object-cover"
                style={{ 
                  maxHeight: '50vh',
                  maxWidth: '80vw',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </div>
          )}
          
        </div>

      </div>

      {/* Mouse Position Tracker - Fixed Bottom Right */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          right: '20px',
          bottom: '20px',
          color: 'white',
          fontSize: '8.4px', // 30% smaller than 12px
          fontFamily: 'monospace',
          opacity: 0.7
        }}
      >
        <div>Y: {mousePosition.y}px</div>
        <div>X: {mousePosition.x}px</div>
      </div>

             {/* Terminal Windows Manager */}
             <WindowManager
               openWindows={openWindows}
               onCloseWindow={closeWindow}
               onMinimizeWindow={minimizeWindow}
               onMaximizeWindow={maximizeWindow}
               onDragStart={handleDragStart}
             />

    </div>
  )
}

export default Portfolio
