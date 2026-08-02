import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Award, GraduationCap, Calendar, Sparkles, CheckCircle2 } from 'lucide-react'
import { handleImageError, IMAGES } from '@/lib/images'

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins, DDS',
    role: 'Master Cosmetic Architect',
    education: 'Harvard School of Dental Medicine',
    experience: '16+ Years Clinical Practice',
    image: IMAGES.doctor1,
    tag: 'Veneer Specialist',
    quote: 'Creating a natural, luminous smile is an exercise in both clinical precision and fine art.',
    highlights: ['Specializes in zero-prep ceramic veneers', 'Former Harvard Dental faculty instructor', '3,500+ Smile Design Cases']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen, DMD',
    role: 'Chief Orthodontic Specialist',
    education: 'Columbia University Dentistry',
    experience: '14+ Years Practice',
    image: IMAGES.doctor2,
    tag: 'Invisalign Diamond',
    quote: 'Orthodontics should be completely invisible, fast, and engineered for adult lifestyles.',
    highlights: ['Top 1% Diamond Invisalign Provider', 'Expert in airway & jaw alignment', '3D Digital motion tracking']
  },
  {
    id: 3,
    name: 'Dr. Elena Rostova, DDS',
    role: 'Surgical Restorations & Implants',
    education: 'Penn Dental Medicine',
    experience: '12+ Years Practice',
    image: IMAGES.doctor3,
    tag: 'Implant Master',
    quote: 'Restoring dental implants gives patients back their confidence, diet, and joy of life.',
    highlights: ['Computer-guided 3D implant placement', 'Platelet-rich fibrin fast recovery', 'Full arch reconstruction specialist']
  }
]

export function MeetDoctors() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const currentDoc = doctors[selectedIdx]

  return (
    <section className="py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2 block">
            Magazine Editorial Showcase
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Ivy League <span className="font-serif italic font-normal text-sky-600">Faculty Specialists</span>
          </h2>
        </div>

        {/* Magazine Spotlight Split */}
        <div className="apple-card rounded-3xl p-8 lg:p-12 bg-slate-50 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200 shadow-md">
            <img 
              src={currentDoc.image} 
              alt={currentDoc.name}
              onError={handleImageError}
              className="w-full h-full object-cover object-top transition-all duration-500" 
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" /> {currentDoc.tag}
            </div>
          </div>

          {/* Right Interactive Detail (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Faculty Selector Tabs */}
            <div className="flex gap-2 border-b border-slate-200 pb-4">
              {doctors.map((doc, idx) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedIdx === idx
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {doc.name.split(',')[0]}
                </button>
              ))}
            </div>

            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                {currentDoc.role}
              </span>
              <h3 className="text-3xl font-bold text-slate-900">{currentDoc.name}</h3>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                <GraduationCap className="w-4 h-4 text-sky-600" /> {currentDoc.education}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                <Award className="w-4 h-4 text-amber-500" /> {currentDoc.experience}
              </span>
            </div>

            <blockquote className="p-5 rounded-2xl bg-white border border-slate-200 text-sm italic text-slate-700 font-serif leading-relaxed">
              "{currentDoc.quote}"
            </blockquote>

            <div className="space-y-2">
              {currentDoc.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" /> {h}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/contact">
                <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6">
                  <Calendar className="w-4 h-4 mr-2" /> Book Consultation with {currentDoc.name.split(',')[0]}
                </Button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
