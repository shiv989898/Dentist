import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'

export function AppointmentCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 z-0" />
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/90 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards a healthier, more confident you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="h-16 px-8 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-lg shadow-xl shadow-teal-500/20">
              <Calendar className="w-5 h-5 mr-2" /> Book Online Now
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-8 rounded-full border-white/30 text-white hover:bg-white/10 font-bold text-lg bg-transparent">
              <Phone className="w-5 h-5 mr-2" /> Call (555) 123-4567
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
