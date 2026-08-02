import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Check, Calculator, ShieldCheck } from 'lucide-react'

const treatmentRates: Record<string, { basePrice: number; unitLabel: string }> = {
  'Porcelain Veneer': { basePrice: 1200, unitLabel: 'teeth' },
  'Invisalign Full Arch': { basePrice: 3800, unitLabel: 'arch' },
  '3D Implant Restoration': { basePrice: 2500, unitLabel: 'implants' },
  'Laser Whitening': { basePrice: 450, unitLabel: 'session' }
}

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
  const [selectedTreatment, setSelectedTreatment] = useState<string>('Porcelain Veneer')
  const [quantity, setQuantity] = useState<number>(4)

  const currentRate = treatmentRates[selectedTreatment]
  const totalEst = currentRate.basePrice * quantity
  const monthlyEst = Math.round(totalEst / 24)

  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Membership Plans & <span className="font-serif italic font-normal text-sky-600">Estimator</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            We provide clear, upfront pricing with zero hidden fees. Calculate treatment estimates below.
          </p>
        </div>
      </section>

      {/* Pro UI Treatment Estimator Widget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="apple-card rounded-3xl p-8 sm:p-10 bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Interactive Treatment Calculator</h3>
                <p className="text-xs text-slate-400 font-light">Estimate your investment and monthly financing options</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Select Procedure</label>
                  <select
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {Object.keys(treatmentRates).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Quantity: {quantity} {currentRate.unitLabel}
                    </label>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Estimate Display Box */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-4">
                <div>
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">Estimated Total</span>
                  <span className="text-4xl font-extrabold text-white font-serif">${totalEst.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-slate-700">
                  <span className="text-xs text-slate-400 block">As low as</span>
                  <span className="text-lg font-bold text-sky-300">${monthlyEst}/mo</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">for 24 months with 0% APR Financing</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Wellness Membership Plans</h2>
            <p className="text-slate-600 font-light">Join our annual care program for routine preventative wellness and exclusive aesthetic savings.</p>
          </div>

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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" /> Insurance Coverage
          </div>
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
