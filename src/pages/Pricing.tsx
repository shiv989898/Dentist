import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const membershipPlans = [
  {
    name: 'Signature Prevention',
    price: '$95',
    period: 'per month',
    desc: 'Complete routine preventative wellness for individuals looking for optimal oral maintenance.',
    features: [
      '2 Comprehensive cleanings per year',
      'Annual 3D Digital X-rays & Scans',
      '15% Off all restorative procedures',
      'Priority emergency booking'
    ],
    popular: false
  },
  {
    name: 'Cosmetic VIP',
    price: '$245',
    period: 'per month',
    desc: 'For patients seeking annual whitening, veneer maintenance, and aesthetic enhancement.',
    features: [
      'Everything in Signature Prevention',
      'Annual Laser Teeth Whitening session',
      'Annual Veneer polish & maintenance',
      '20% Off all cosmetic enhancements',
      'Complimentary sedation for procedures'
    ],
    popular: true
  },
  {
    name: 'Executive Concierge',
    price: '$450',
    period: 'per month',
    desc: 'Bespoke 24/7 dedicated dental concierge service for high-profile individuals and executives.',
    features: [
      'Unlimited emergency consultations',
      'After-hours private suite access',
      '25% Off full arch reconstructions',
      'Dedicated personal dental coordinator',
      'Worldwide emergency tele-dental care'
    ],
    popular: false
  }
]

export function Pricing() {
  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Membership Plans & <span className="font-serif italic font-normal text-sky-600">Insurance</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            We provide clear, upfront pricing with zero hidden fees. We work with all major PPO insurance providers.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`apple-card rounded-3xl p-8 bg-white flex flex-col justify-between relative ${
                  plan.popular ? 'border-2 border-sky-600 shadow-xl ring-4 ring-sky-50' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sky-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 font-light mb-6 leading-relaxed">{plan.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-slate-900 font-serif">{plan.price}</span>
                    <span className="text-xs text-slate-500 ml-1 font-medium">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <Button className={`w-full rounded-full h-11 text-xs font-semibold ${
                    plan.popular 
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-md' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}>
                    Enroll in {plan.name}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">PPO Insurance & Financing</h2>
          <p className="text-slate-600 text-sm font-light mb-8 max-w-xl mx-auto">
            We file claims directly on your behalf for maximum reimbursement. Flexible 0% APR financing is available via CareCredit & Sunbit.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500">
            {['Delta Dental', 'MetLife', 'Cigna', 'Aetna', 'Guardian', 'Humana', 'CareCredit'].map((provider, i) => (
              <span key={i} className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                {provider}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
