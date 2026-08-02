import { useState } from 'react'
import { Eye } from 'lucide-react'
import { handleImageError, IMAGES } from '@/lib/images'

const galleryItems = [
  {
    category: 'Veneers',
    title: 'Porcelain Veneers & Smile Alignment',
    patient: 'Jessica T.',
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
    title: 'Beverly Hills Private Suite',
    patient: 'Clinic Interior',
    img: IMAGES.clinic
  },
  {
    category: 'Veneers',
    title: 'Natural Translucent Ceramic Veneers',
    patient: 'Chloe B.',
    img: IMAGES.hero
  },
  {
    category: 'Facility',
    title: '3D Imaging Suite',
    patient: 'Technology',
    img: IMAGES.clinic
  }
]

export function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filtered = selectedFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter)

  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Transformation Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Real Patients, <span className="font-serif italic font-normal text-sky-600">Radiant Results</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Browse our portfolio of porcelain veneer designs, Invisalign alignment cases, and facility suites.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 flex justify-center gap-3">
          {['All', 'Veneers', 'Invisalign', 'Implants', 'Facility'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
            <div key={idx} className="apple-card rounded-3xl overflow-hidden group bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium">Case: {item.patient}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
