import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, ShieldCheck, Award, Sparkles } from 'lucide-react'
import { IMAGES, handleImageError } from '@/lib/images'

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-luxury text-white overflow-hidden">
      
      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-600/20 via-teal-500/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* Top Centered Editorial Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          {/* Subtle Shimmer Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 mb-8 shadow-xl backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Beverly Hills &bull; New York &bull; London
            </span>
            <span className="h-3.5 w-px bg-slate-700 mx-1" />
            <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" /> Voted #1 Dental Clinic 2026
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8"
          >
            Precision Dentistry. <br />
            <span className="font-serif italic font-normal text-gradient-gold">
              Elevated to Fine Art.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience bespoke porcelain veneers, 3D digital alignment, and pain-free laser care in an ultra-serene, spa-like sanctuary.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-white font-semibold text-base shadow-lg shadow-sky-500/25 transition-all duration-200 hover:scale-[1.02]">
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base backdrop-blur-md">
                View All Treatments
              </Button>
            </Link>
          </motion.div>

          {/* Ratings Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-6 text-sm text-slate-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <span className="font-semibold text-white">4.98/5</span>
            </div>
            <span className="h-3.5 w-px bg-slate-800" />
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" /> 3,500+ Verified Patient Cases
            </span>
          </motion.div>

        </div>

        {/* Hero Visual Banner (Local Generated Asset) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900"
        >
          <div className="aspect-[16/9] w-full relative">
            <img 
              src={IMAGES.hero} 
              alt="LuxeDent Modern Dental Suite" 
              onError={handleImageError}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 max-w-md shadow-xl hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <p className="text-xs font-bold uppercase tracking-wider text-teal-400">State-of-the-Art Care</p>
              </div>
              <h3 className="text-base font-bold text-white">Beverly Hills Private Treatment Suite</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">Noise-canceling audio, ergonomic memory foam, and pain-free water lasers.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
