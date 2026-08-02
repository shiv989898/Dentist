import { Award, ShieldCheck, Cpu, Heart } from 'lucide-react'

const values = [
  {
    title: 'Precision Excellence',
    desc: 'Every treatment is calculated using sub-millimeter 3D intraoral scans and digital smile simulation.',
    icon: Cpu
  },
  {
    title: 'Compassionate Comfort',
    desc: 'We eliminated dental anxiety with spa amenities, noise-canceling audio, and pain-free lasers.',
    icon: Heart
  },
  {
    title: 'Ivy League Faculty',
    desc: 'Our team comprises former Harvard & Columbia dental faculty dedicated to ongoing research.',
    icon: Award
  },
  {
    title: 'Masterpiece Warranty',
    desc: 'We back all porcelain restorations with our signature lifetime clinical guarantee.',
    icon: ShieldCheck
  }
]

const timeline = [
  { year: '2010', title: 'Founded in Beverly Hills', desc: 'Established as a boutique cosmetic dental studio.' },
  { year: '2015', title: '3D Laser Integration', desc: 'Pioneered zero-vibration water-laser treatments.' },
  { year: '2020', title: 'New York & London Expansion', desc: 'Opened international care suites for celebrity & executive clientele.' },
  { year: '2026', title: 'AI Diagnostics Launch', desc: 'Introduced predictive 3D AI oral health screening.' }
]

export function About() {
  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Our Heritage & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Redefining Dental Care as <span className="font-serif italic font-normal text-sky-600">A Luxury Experience</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Founded on the principle that world-class healthcare should be delivered in an atmosphere of tranquility, precision, and unyielding elegance.
          </p>
        </div>
      </section>

      {/* Main Story Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2 block">
              The Luxe Standard
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Where Harvard Expertise Meets Spa-Like Tranquility
            </h2>
            <p className="text-slate-600 leading-relaxed font-light mb-6">
              At LuxeDent, we reject the cold, stressful environment of conventional dental clinics. Our suites are meticulously designed with acoustic isolation, ergonomic memory foam seating, and climate-controlled ambient air.
            </p>
            <p className="text-slate-600 leading-relaxed font-light mb-8">
              We combine artistic vision with cutting-edge 3D intraoral digital scanners, allowing you to preview your new smile in high resolution before any treatment begins.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-3xl font-bold text-slate-900 block font-serif">15+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-3xl font-bold text-slate-900 block font-serif">3,500+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Smiles Transformed</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
              alt="LuxeDent Interior" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-3">Our Core Pillars</h2>
            <p className="text-slate-600 font-light">The foundational values that guide every consultation and procedure.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon
              return (
                <div key={idx} className="apple-card rounded-2xl p-6 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 border border-sky-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Our Journey</h2>
            <p className="text-slate-600 font-light">A decade of setting new benchmarks in cosmetic dentistry.</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start border-l-2 border-slate-200 pl-6 relative">
                <div className="w-4 h-4 rounded-full bg-sky-600 absolute -left-[9px] top-1 border-2 border-white" />
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">{item.year}</span>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
