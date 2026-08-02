import React, { useState, useRef } from 'react'
import { Sparkles, SlidersHorizontal } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Porcelain Veneers & Smile Architecture',
    patient: 'Sophia K.',
    procedure: '8 Upper Porcelain Veneers',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f1?q=80&w=1200&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Invisalign Alignment & Whitening',
    patient: 'Alexander R.',
    procedure: 'Full Arch Alignment + Laser Whitening',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f1?q=80&w=1200&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop'
  }
]

export function BeforeAfterGallery() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let position = (x / rect.width) * 100
    if (position < 0) position = 0
    if (position > 100) position = 100
    setSliderPosition(position)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const currentItem = galleryItems[activeTab]

  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Comparison
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Drag to Reveal <span className="font-serif italic font-normal text-sky-600">The Perfection</span>
          </h2>
          <p className="text-slate-600 text-lg font-light">
            Slide left and right to inspect real patient transformations before and after our signature treatments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 mb-10">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                activeTab === idx 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Component */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[450px] sm:h-[520px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl select-none cursor-ew-resize touch-none bg-slate-100"
          >
            {/* Before Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={currentItem.beforeImg} 
                alt="Before treatment" 
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <span className="absolute top-6 left-6 bg-slate-900/90 text-white font-bold text-xs px-4 py-2 rounded-full shadow-sm">
                BEFORE
              </span>
            </div>

            {/* After Image Overlay */}
            <div 
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={currentItem.afterImg} 
                alt="After treatment" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <span className="absolute top-6 left-6 bg-sky-600 text-white font-bold text-xs px-4 py-2 rounded-full shadow-sm">
                AFTER
              </span>
            </div>

            {/* Divider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border border-slate-200">
                <SlidersHorizontal className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Details Bar */}
          <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-slate-900">{currentItem.title}</h4>
              <p className="text-xs text-sky-600 font-semibold">{currentItem.procedure}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block uppercase tracking-wider">Patient Case</span>
              <span className="text-sm font-semibold text-slate-700">{currentItem.patient}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
