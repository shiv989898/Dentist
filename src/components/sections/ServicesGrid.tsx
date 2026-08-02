import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Smile, Activity, Stethoscope, Syringe, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { handleImageError, IMAGES } from '@/lib/images'

const services = [
  {
    num: '01',
    title: 'Porcelain Veneers & Smile Architecture',
    subtitle: 'Signature Aesthetic',
    description: 'Custom hand-crafted ceramic veneers designed to match your facial symmetry and translucency.',
    icon: Sparkles,
    tag: 'Bespoke Artistry',
    img: IMAGES.veneers,
    duration: '2 Sessions'
  },
  {
    num: '02',
    title: 'Invisalign Clear Aligners',
    subtitle: 'Discreet Orthodontics',
    description: 'Virtually invisible aligners planned using 3D intraoral digital scans.',
    icon: Smile,
    tag: '3D Planned',
    img: IMAGES.invisalign,
    duration: '6-12 Months'
  },
  {
    num: '03',
    title: '3D-Guided Dental Implants',
    subtitle: 'Permanent Restorations',
    description: 'Biocompatible titanium tooth replacements with custom ceramic crowns.',
    icon: Activity,
    tag: 'Lifetime Warranty',
    img: IMAGES.implants,
    duration: '3-6 Months'
  },
  {
    num: '04',
    title: 'General Wellness & Laser Care',
    subtitle: 'Preventative Health',
    description: 'Ultrasonic cleaning, pain-free laser gum therapy, and digital screening.',
    icon: Stethoscope,
    tag: 'Painless Laser',
    img: IMAGES.clinic,
    duration: '45 Minutes'
  },
  {
    num: '05',
    title: 'Surgical & Emergency Care',
    subtitle: 'Immediate Response',
    description: 'Gentle wisdom teeth extraction and 24/7 priority emergency response.',
    icon: Syringe,
    tag: '24/7 Response',
    img: IMAGES.hero,
    duration: '60 Minutes'
  }
]

export function ServicesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 420
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="py-28 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Filmstrip Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2 block">
              Horizontal Filmstrip Showcase
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Explore Our <span className="font-serif italic font-normal text-sky-600">Specialized Treatments</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Filmstrip Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`snap-start shrink-0 w-[340px] sm:w-[420px] rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  activeIdx === idx 
                    ? 'border-sky-600 shadow-xl ring-2 ring-sky-100' 
                    : 'border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-extrabold text-slate-200 font-serif group-hover:text-sky-600 transition-colors">
                      {item.num}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-[11px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      onError={handleImageError}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>

                  <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Est. {item.duration}</span>
                  <Link to="/services">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-sky-600 flex items-center gap-1">
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
