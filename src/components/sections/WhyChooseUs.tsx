import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Sparkles, Cpu, ShieldCheck, HeartHandshake } from 'lucide-react'

const features = [
  {
    title: '3D AI Digital Diagnostics',
    luxe: 'Sub-millimeter 3D intraoral scans with zero radiation delay',
    traditional: 'Uncomfortable physical impressions & manual X-rays',
    icon: Cpu
  },
  {
    title: 'Pain-Free Laser Precision',
    luxe: 'Gentle water-laser treatments with zero noise or vibration',
    traditional: 'Noisy high-vibration drills and invasive techniques',
    icon: Sparkles
  },
  {
    title: 'Spa-Like Tranquility Sanctuary',
    luxe: 'Noise-canceling headphones, aromatherapy & massage chairs',
    traditional: 'Sterile, anxious clinical waiting room environment',
    icon: HeartHandshake
  },
  {
    title: 'Transparent Masterpiece Guarantee',
    luxe: 'Comprehensive lifetime warranties on all restorative veneers',
    traditional: 'Limited short-term coverage & hidden fee structures',
    icon: ShieldCheck
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 block mb-3">
            The Luxe standard
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            How We Redefine <span className="font-serif italic font-normal text-teal-300">Dental Luxury</span>
          </h2>
          <p className="text-slate-400 text-lg font-light">
            Compare the clinical standard of traditional practices with our ultra-luxury patient care model.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Luxe Practice Box */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40 border border-teal-500/40 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">LuxeDent Sanctuary</h3>
                <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider">The Future of Care</p>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-teal-500/20 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                        {item.title} <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      </h4>
                      <p className="text-sm text-slate-300 font-light">{item.luxe}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Traditional Practice Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 sm:p-10 bg-slate-950/60 border border-slate-800/80 relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold">
                ✕
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-400">Traditional Clinics</h3>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Standard Practice</p>
              </div>
            </div>

            <div className="space-y-6 opacity-75">
              {features.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/30 border border-slate-800/40 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5 text-rose-400/80" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-400 text-base mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-light">{item.traditional}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
