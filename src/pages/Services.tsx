import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sparkles, Smile, Activity, Stethoscope, Syringe, ArrowRight, Check } from 'lucide-react'

const allServices = [
  {
    category: 'Cosmetic',
    title: 'Porcelain Veneers & Smile Architecture',
    desc: 'Ultra-thin, custom hand-crafted porcelain shells permanently bonded to your natural tooth structure for flawless shape and color.',
    duration: '2 Appointments',
    warranty: '10-Year Guarantee',
    icon: Sparkles,
    features: ['Digital Smile Simulation', 'Zero or minimal enamel prep', 'Stain-resistant ceramic']
  },
  {
    category: 'Cosmetic',
    title: 'Laser Teeth Whitening',
    desc: 'Medical-grade laser activated whitening that lifts stubborn discoloration up to 8 shades lighter in a single 60-minute session.',
    duration: '60 Minutes',
    warranty: 'Immediate Results',
    icon: Sparkles,
    features: ['Desensitizing gel shield', 'Long-lasting brilliance', 'Enamel safe formula']
  },
  {
    category: 'Orthodontics',
    title: 'Invisalign Clear Aligners',
    desc: 'Discreet, removable clear aligners custom-engineered using 3D digital scan data to align your teeth with precision.',
    duration: '6 - 12 Months',
    warranty: 'Includes Retainers',
    icon: Smile,
    features: ['3D progress tracking app', 'Removable for dining', 'Zero metal brackets']
  },
  {
    category: 'Implants',
    title: '3D-Guided Dental Implants',
    desc: 'Permanent biocompatible titanium tooth replacement topped with a custom porcelain crown for natural function and appearance.',
    duration: '3 - 6 Months',
    warranty: 'Lifetime Warranty',
    icon: Activity,
    features: ['Computer-guided surgical placement', 'Natural root structure mimicry', 'High density integration']
  },
  {
    category: 'General',
    title: 'Comprehensive Preventive Care',
    desc: 'Gentle ultrasonic tartar removal, high-definition digital X-rays, oral cancer screening, and custom fluoride treatments.',
    duration: '45 Minutes',
    warranty: 'Bi-annual Recommended',
    icon: Stethoscope,
    features: ['Air-flow polish technology', 'Comprehensive gum mapping', 'Oral health report']
  },
  {
    category: 'Surgical',
    title: 'Gentle Wisdom Tooth Extraction',
    desc: 'Pain-free extraction of impacted or problematic wisdom teeth performed under targeted sedation for optimal recovery.',
    duration: '60 - 90 Minutes',
    warranty: 'Post-op Care Included',
    icon: Syringe,
    features: ['Intravenous or oral sedation options', 'Platelet-rich fibrin healing', 'Fast 48-hour recovery']
  }
]

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = selectedCategory === 'All' 
    ? allServices 
    : allServices.filter(s => s.category === selectedCategory)

  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Specialized Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Our Dental <span className="font-serif italic font-normal text-sky-600">Offerings</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            From aesthetic transformations to restorative surgical care, every procedure is performed with Apple-grade precision.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-16 z-30 border-b border-slate-100 shadow-2xs">
        <div className="container mx-auto px-4 flex justify-center gap-2 overflow-x-auto">
          {['All', 'Cosmetic', 'Orthodontics', 'Implants', 'General', 'Surgical'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat} Services
            </button>
          ))}
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="apple-card rounded-3xl p-8 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 border border-sky-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase font-medium">Est. Duration</span>
                    <span className="text-xs font-bold text-slate-800">{service.duration}</span>
                  </div>
                  <Link to="/contact">
                    <Button size="sm" className="rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs h-9">
                      Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}
