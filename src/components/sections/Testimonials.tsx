import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    quote: "Dr. Jenkins and the LuxeDent team completely transformed my smile with porcelain veneers before my wedding. The spa-like suite eliminated all my dental anxiety!",
    author: "Victoria Sterling",
    role: "Fashion Director, NYC",
    rating: 5
  },
  {
    quote: "As an executive, time and discretion are paramount. Invisalign treatment with Dr. Chen was fast, 100% invisible, and fit seamlessly into my travel schedule.",
    author: "Marcus Vance",
    role: "Managing Director, Beverly Hills",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-28 bg-slate-900 text-white border-t border-slate-800/80">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Rating Metric Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block">
              Patient Verified Testimonials
            </span>
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              Loved by Over 3,500 <br />
              <span className="font-serif italic font-normal text-gradient-gold">Discerning Patients</span>
            </h2>

            <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </div>
              <div className="text-4xl font-extrabold text-white font-serif">
                4.98 <span className="text-sm font-sans font-light text-slate-400">/ 5.0 Rating</span>
              </div>
              <p className="text-xs text-slate-400 font-light">Verified by Google Reviews & Healthgrades</p>
            </div>
          </div>

          {/* Right Editorial Review Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="glass-card-dark rounded-3xl p-8 border border-slate-800 relative">
                <Quote className="w-10 h-10 text-teal-500/20 absolute top-6 right-6" />
                <p className="text-slate-200 text-base font-light italic leading-relaxed mb-6 font-serif">
                  "{rev.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">{rev.author}</h3>
                    <p className="text-xs text-teal-400 font-medium">{rev.role}</p>
                  </div>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
