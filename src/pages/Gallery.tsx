import { useState } from 'react'
import { Eye } from 'lucide-react'
import { handleImageError, IMAGES } from '@/lib/images'

const galleryItems = [
  {
    category: 'Veneers',
    title: 'Porcelain Veneers & Smile Alignment',
    patient: 'Sophia K.',
    img: IMAGES.veneers
  },
  {
    category: 'Invisalign',
    title: 'Full Arch Clear Aligner Alignment',
    patient: 'David M.',
    img: IMAGES.invisalign
  },
  {
    category: 'Implants',
    title: 'Full Restorative Implant Crown',
    patient: 'Arthur P.',
    img: IMAGES.implants
  },
  {
    category: 'Facility',
    title: 'Beverly Hills Reception Suite',
    patient: 'Clinic Interior',
    img: IMAGES.interior
  },
  {
    category: 'Veneers',
    title: 'Natural Translucent Ceramic Veneers',
    patient: 'Chloe B.',
    img: IMAGES.veneers
  },
  {
    category: 'Facility',
    title: '3D Laser Treatment Suite',
    patient: 'Technology Suite',
    img: IMAGES.hero
  }
]

export function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filtered = selectedFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter)

  return (
    <div className="pt-24 pb-24 bg-slate-950 text-white">
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-3 block">
            Transformation Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Real Patients, <span className="font-serif italic font-normal text-gradient-gold">Radiant Results</span>
          </h1>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Browse our portfolio of porcelain veneer designs, Invisalign alignment cases, and facility suites.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-slate-900/60 border-b border-slate-800">
        <div className="container mx-auto px-4 flex justify-center gap-3">
          {['All', 'Veneers', 'Invisalign', 'Implants', 'Facility'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <div key={idx} className="glass-card-dark rounded-3xl overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 font-medium">Case: {item.patient}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
