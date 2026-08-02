import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Calendar, CheckCircle2 } from 'lucide-react'

const appointmentSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a date'),
  notes: z.string().optional()
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema)
  })

  const onSubmit = (data: AppointmentFormData) => {
    console.log('Appointment Request:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <div className="pt-24 pb-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3 block">
            Online Concierge
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Reserve Your <span className="font-serif italic font-normal text-sky-600">Consultation</span>
          </h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Schedule your personalized consultation with our Beverly Hills specialists online or reach our concierge team 24/7.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12">
          
          {/* Appointment Form */}
          <div className="lg:col-span-7 apple-card rounded-3xl p-8 sm:p-10 bg-white">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Request an Appointment</h2>
            <p className="text-slate-500 text-sm font-light mb-8">Fill in your details below and our patient care team will confirm your time within 2 hours.</p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Appointment Request Received!</h3>
                <p className="text-slate-600 text-sm font-light">
                  Thank you. Our patient care coordinator will contact you shortly to confirm your reservation details.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">
                  Book Another Appointment
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                    <input 
                      {...register('fullName')}
                      placeholder="e.g. Sophia Carter"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                    />
                    {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
                    <input 
                      {...register('email')}
                      type="email"
                      placeholder="sophia@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      {...register('phone')}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                    />
                    {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Primary Interest *</label>
                    <select 
                      {...register('service')}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                    >
                      <option value="">Select Service...</option>
                      <option value="Porcelain Veneers">Porcelain Veneers</option>
                      <option value="Invisalign Aligners">Invisalign Aligners</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Laser Whitening">Laser Whitening</option>
                      <option value="General Cleaning">General Cleaning & Exam</option>
                      <option value="Emergency Care">Emergency Care</option>
                    </select>
                    {errors.service && <p className="text-xs text-rose-500 mt-1">{errors.service.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Preferred Date *</label>
                  <input 
                    {...register('preferredDate')}
                    type="date"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                  {errors.preferredDate && <p className="text-xs text-rose-500 mt-1">{errors.preferredDate.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Additional Notes / Requests</label>
                  <textarea 
                    {...register('notes')}
                    rows={3}
                    placeholder="Tell us about your dental goals or concerns..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white h-14 font-semibold text-base shadow-md"
                >
                  <Calendar className="w-4 h-4 mr-2" /> Confirm Appointment Request
                </Button>

              </form>
            )}
          </div>

          {/* Contact Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="apple-card rounded-3xl p-8 bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Clinic Information</h3>

              <div className="space-y-4 text-sm font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Beverly Hills Flagship</h4>
                    <p className="text-slate-600">450 Rodeo Drive, Suite 300, Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Direct Phone</h4>
                    <p className="text-slate-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Concierge Email</h4>
                    <p className="text-slate-600">concierge@luxedent.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="apple-card rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200 relative border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop" 
                alt="Beverly Hills Location Map" 
                className="w-full h-full object-cover grayscale opacity-75"
              />
              <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center p-6 text-center">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-md">
                  <MapPin className="w-6 h-6 text-sky-600 mx-auto mb-1" />
                  <p className="text-xs font-bold text-slate-900">Beverly Hills Medical Suite</p>
                  <p className="text-[11px] text-slate-500">Valet Parking Available</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
