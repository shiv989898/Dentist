import { motion } from 'framer-motion'
import { Award, Sparkles } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Jenkins',
    title: 'DDS, Harvard University',
    role: 'Master Cosmetic Architect',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop',
    tag: 'Smile Specialist',
    bio: 'Pioneer in minimally invasive porcelain veneers with over 15 years of Beverly Hills practice.'
  },
  {
    name: 'Dr. Michael Chen',
    title: 'DMD, MS Orthodontics',
    role: 'Chief Orthodontic Specialist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    tag: 'Invisalign Diamond',
    bio: 'International speaker & Diamond Platinum Invisalign provider specializing in adult alignment.'
  },
  {
    name: 'Dr. Elena Rostova',
    title: 'DDS, Implant Surgeon',
    role: 'Surgical Restorations',
    image: 'https://images.unsplash.com/photo-1594824432258-f7bc32fcd443?q=80&w=1200&auto=format&fit=crop',
    tag: 'Implant Master',
    bio: 'Specialist in 3D-guided full-arch dental implants and bone architecture restoration.'
  }
]

export function MeetDoctors() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 block mb-3">
              World-Class Faculty
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Meet Our <span className="font-serif italic font-normal text-teal-300">Master Clinicians</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-md font-light">
            Renowned specialists trained at Ivy League institutions, dedicated exclusively to clinical excellence.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-teal-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> {doc.tag}
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">
                    {doc.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{doc.name}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-3 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> {doc.title}
                  </p>
                  <p className="text-sm text-slate-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                    {doc.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
