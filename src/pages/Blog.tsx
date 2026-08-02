import { useState } from 'react'
import { Clock, ArrowRight, Search } from 'lucide-react'

const articles = [
  {
    title: 'The Science of Porcelain Veneers: How Digital Smile Design Works',
    category: 'Cosmetic',
    readTime: '5 min read',
    date: 'August 1, 2026',
    summary: 'Discover how 3D intraoral scanning and custom ceramic layering create natural, light-translucent smiles.',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Invisalign vs. Ceramic Braces: Which Is Right for Adult Alignment?',
    category: 'Orthodontics',
    readTime: '4 min read',
    date: 'July 24, 2026',
    summary: 'A detailed clinical comparison of treatment timeline, lifestyle convenience, and alignment precision.',
    img: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Why Pain-Free Water-Laser Dentistry Is Replacing Traditional Drills',
    category: 'Technology',
    readTime: '6 min read',
    date: 'July 18, 2026',
    summary: 'How hydrodynamic laser energy performs cavity removals and gum contouring without vibration or anesthesia.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
  }
]

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = articles.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.summary.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Dental Wellness Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Insights & <span className="font-serif italic font-normal text-sky-600">Innovations</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Stay informed with the latest research in cosmetic dentistry, laser technology, and oral health wellness.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <article key={idx} className="apple-card rounded-3xl overflow-hidden bg-white flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-bold text-sky-600 uppercase tracking-wider">{item.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{item.title}</h2>
                  <p className="text-xs text-slate-500 font-light leading-relaxed mb-4">{item.summary}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button className="text-xs font-bold text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-1">
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}
