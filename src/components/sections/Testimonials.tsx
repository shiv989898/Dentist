import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    name: 'Emily R.',
    role: 'Patient',
    content: "Absolutely the best dental experience I've ever had. The staff is incredibly professional, and the spa-like atmosphere completely removed my anxiety. My veneers look natural and beautiful.",
    image: 'https://i.pravatar.cc/150?img=44'
  },
  {
    name: 'David S.',
    role: 'Patient',
    content: "State-of-the-art facility with a team that truly cares. They explained every step of my implant procedure clearly. I couldn't be happier with the results and the pain-free process.",
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Sarah L.',
    role: 'Patient',
    content: "I brought my whole family here, and even my kids love going to the dentist now. The pediatric specialists are so patient and kind. Highly recommend LuxeDent to anyone.",
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'Michael T.',
    role: 'Patient',
    content: "From the easy online booking to the follow-up care, everything is seamless. The Invisalign treatment was faster than expected, and the results are fantastic.",
    image: 'https://i.pravatar.cc/150?img=12'
  }
]

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000 })])

  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h3>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((t, i) => (
              <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6" key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 h-full flex flex-col border border-white/50"
                >
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-600 text-lg mb-8 italic flex-grow">"{t.content}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
                    <div>
                      <h4 className="font-bold text-slate-900">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
