import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white text-slate-900 overflow-hidden">
      
      {/* Soft Background Canvas Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* Top Centered Editorial Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          {/* Subtle Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-8 shadow-2xs"
          >
            <span className="flex h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Beverly Hills &bull; New York &bull; London
            </span>
            <span className="h-3.5 w-px bg-slate-300 mx-1" />
            <span className="text-xs text-slate-600 font-medium flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-500" /> Voted #1 Dental Clinic
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-8"
          >
            Precision Dentistry. <br />
            <span className="font-serif italic font-normal text-sky-600">
              Elevated to Fine Art.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience bespoke porcelain veneers, invisible alignment, and pain-free laser care in an ultra-serene, spa-like sanctuary.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-sm transition-all duration-200">
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base shadow-2xs">
                View All Treatments
              </Button>
            </Link>
          </motion.div>

          {/* Ratings Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-6 text-sm text-slate-600 font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <span className="font-semibold text-slate-900">4.98/5</span>
            </div>
            <span className="h-3.5 w-px bg-slate-200" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600" /> 3,500+ Verified Patient Cases
            </span>
          </motion.div>

        </div>

        {/* Hero Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100"
        >
          <div className="aspect-[16/9] w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop" 
              alt="LuxeDent Modern Dental Suite" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 max-w-md shadow-lg hidden sm:block">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">State-of-the-Art Care</p>
              <h3 className="text-base font-bold text-slate-900">Spa-Like Treatment Suites</h3>
              <p className="text-xs text-slate-600 font-light mt-0.5">Noise-canceling audio, ergonomic massage chairs, and pain-free water lasers.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
