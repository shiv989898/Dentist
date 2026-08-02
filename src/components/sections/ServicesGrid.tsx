import { motion } from 'framer-motion'
import { Sparkles, Stethoscope, Smile, Activity, Heart, Syringe, ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Cosmetic Dentistry & Veneers',
    subtitle: 'Signature Smile Design',
    description: 'Custom hand-crafted porcelain veneers, digital smile design, and instant laser teeth whitening.',
    icon: Sparkles,
    highlight: true,
    tag: 'Most Popular',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Invisalign & Clear Aligners',
    subtitle: 'Discreet Orthodontics',
    description: 'Virtually invisible aligners designed with 3D digital precision for effortless teeth straightening.',
    icon: Smile,
    highlight: false,
    tag: '3D Planned',
    img: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Dental Implants & Reconstruction',
    subtitle: 'Permanent Restorations',
    description: 'Biocompatible titanium implants and ceramic crowns engineered for natural aesthetics.',
    icon: Activity,
    highlight: false,
    tag: 'Lifetime Warranty'
  },
  {
    title: 'General & Preventative Care',
    subtitle: 'Comprehensive Wellness',
    description: 'Pain-free ultra-sonic cleanings, digital oral cancer screening, and enamel fortification.',
    icon: Stethoscope,
    highlight: false
  },
  {
    title: 'Surgical & Emergency Care',
    subtitle: 'Immediate Relief',
    description: 'Gentle wisdom teeth extraction, root canal therapy, and 24/7 priority emergency response.',
    icon: Syringe,
    highlight: false
  },
  {
    title: 'Pediatric Dentistry',
    subtitle: 'Gentle Youth Care',
    description: 'Fun, fear-free visits designed to build positive oral health habits for children of all ages.',
    icon: Heart,
    highlight: false
  }
]

export function ServicesGrid() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 block mb-3">
              Comprehensive Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Bespoke Treatments, <br />
              <span className="font-serif italic font-normal text-slate-400">Uncompromising Standards.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
            Every procedure is crafted using state-of-the-art digital dentistry in a tranquil luxury atmosphere.
          </p>
        </div>

        {/* Luxury Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative rounded-3xl p-8 transition-all duration-500 overflow-hidden border ${
                  service.highlight 
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/40 border-teal-500/30 hover:border-teal-400/60' 
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-500" />

                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    service.highlight 
                      ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-lg shadow-teal-500/25' 
                      : 'bg-slate-800 text-teal-400 border-slate-700 group-hover:bg-teal-500 group-hover:text-slate-950 group-hover:border-teal-400'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex items-center gap-3">
                    {service.tag && (
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800/80">
                        {service.tag}
                      </span>
                    )}
                    <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-slate-700 transition-colors">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <span className="text-xs font-medium text-teal-400 uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
