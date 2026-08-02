import { Link } from 'react-router-dom'
import { Sparkles, Smile, Activity, Stethoscope, Syringe, ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Porcelain Veneers & Smile Architecture',
    subtitle: 'Signature Aesthetic',
    description: 'Custom hand-crafted ceramic veneers designed to match your facial symmetry, skin tone, and natural translucency.',
    icon: Sparkles,
    featured: true,
    tag: 'Bespoke Artistry',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop'
  },
  {
    num: '02',
    title: 'Invisalign Aligners',
    subtitle: 'Discreet Orthodontics',
    description: 'Virtually invisible aligners planned using 3D intraoral digital scans.',
    icon: Smile,
    featured: false
  },
  {
    num: '03',
    title: '3D-Guided Implants',
    subtitle: 'Permanent Restorations',
    description: 'Biocompatible titanium tooth replacements with custom ceramic crowns.',
    icon: Activity,
    featured: false
  },
  {
    num: '04',
    title: 'General Wellness & Laser Care',
    subtitle: 'Preventative Health',
    description: 'Ultrasonic cleaning, pain-free laser gum therapy, and oral screening.',
    icon: Stethoscope,
    featured: false
  },
  {
    num: '05',
    title: 'Surgical & Emergency Care',
    subtitle: 'Immediate Response',
    description: 'Gentle wisdom teeth extraction and 24/7 priority emergency response.',
    icon: Syringe,
    featured: false
  }
]

export function ServicesGrid() {
  return (
    <section className="py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Asymmetric Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3 block">
              Bespoke Clinical Offerings
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              Crafted for Your Unique <br />
              <span className="font-serif italic font-normal text-sky-600">Facial Architecture.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <Link to="/services">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-sky-600 border-b-2 border-slate-900 hover:border-sky-600 pb-1 transition-colors">
                View Full Clinical Menu <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Pro Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Main Large Featured Hero Card (7 Cols) */}
          <div className="lg:col-span-7 apple-card rounded-3xl p-8 sm:p-10 bg-white flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-extrabold text-slate-200 font-serif group-hover:text-sky-600 transition-colors">
                {services[0].num}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-bold uppercase tracking-wider">
                {services[0].tag}
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block">
                {services[0].subtitle}
              </span>
              <h3 className="text-3xl font-bold text-slate-900">{services[0].title}</h3>
              <p className="text-slate-600 font-light leading-relaxed max-w-lg">
                {services[0].description}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mt-4 border border-slate-100">
              <img src={services[0].img} alt="Veneers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Secondary Stack (5 Cols) */}
          <div className="lg:col-span-5 grid gap-6">
            {services.slice(1, 3).map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="apple-card rounded-3xl p-8 bg-white flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-extrabold text-slate-200 font-serif group-hover:text-sky-600 transition-colors">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Row Asymmetric (2 Cards) */}
          {services.slice(3).map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="lg:col-span-6 apple-card rounded-3xl p-8 bg-white flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-extrabold text-slate-200 font-serif group-hover:text-sky-600 transition-colors">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
