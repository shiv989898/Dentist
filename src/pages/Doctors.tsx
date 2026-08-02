import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Award, Calendar, GraduationCap } from 'lucide-react'

const doctorList = [
  {
    name: 'Dr. Sarah Jenkins, DDS',
    title: 'Lead Cosmetic Architect',
    education: 'Harvard School of Dental Medicine',
    experience: '16+ Years Experience',
    specialties: ['Porcelain Veneers', 'Digital Smile Design', 'Full Arch Restorations'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop',
    quote: 'Creating a natural, luminous smile is an exercise in both biology and fine art.'
  },
  {
    name: 'Dr. Michael Chen, DMD',
    title: 'Chief Orthodontic Specialist',
    education: 'Columbia University College of Dental Medicine',
    experience: '14+ Years Experience',
    specialties: ['Invisalign Diamond', 'Adult Orthodontics', 'Airway Alignment'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    quote: 'Modern orthodontics should be completely invisible, fast, and pain-free.'
  },
  {
    name: 'Dr. Elena Rostova, DDS',
    title: 'Surgical Restorations & Implants',
    education: 'Penn Dental Medicine',
    experience: '12+ Years Experience',
    specialties: ['3D Implant Surgery', 'Bone Architecture', 'Sedation Care'],
    image: 'https://images.unsplash.com/photo-1594824432258-f7bc32fcd443?q=80&w=1200&auto=format&fit=crop',
    quote: 'Restoring oral function gives patients back their confidence and quality of life.'
  }
]

export function Doctors() {
  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Clinical Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Meet Our <span className="font-serif italic font-normal text-sky-600">Specialists</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Our doctors trained at top Ivy League dental institutions and are internationally recognized leaders in cosmetic and restorative dentistry.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-16">
          {doctorList.map((doc, idx) => (
            <div 
              key={idx} 
              className={`apple-card rounded-3xl p-8 lg:p-12 bg-white grid lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-md">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                    {doc.title}
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900">{doc.name}</h2>
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    <GraduationCap className="w-4 h-4 text-sky-600" /> {doc.education}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    <Award className="w-4 h-4 text-amber-500" /> {doc.experience}
                  </span>
                </div>

                <blockquote className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 text-sm italic text-slate-700 font-serif">
                  "{doc.quote}"
                </blockquote>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map((spec, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/contact">
                    <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6">
                      <Calendar className="w-4 h-4 mr-2" /> Book Consultation with {doc.name.split(',')[0]}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
