import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageSquare, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: "Do you accept new patients and insurance?",
    answer: "Yes, we are always welcoming new patients to our practice. We work with all major PPO insurance plans and handle all claim submissions on your behalf."
  },
  {
    question: "What makes zero-prep ceramic veneers different?",
    answer: "Zero-prep veneers are ultra-thin porcelain shells custom-engineered to bond directly over your teeth with minimal to zero enamel removal, preserving natural tooth integrity."
  },
  {
    question: "How does pain-free laser dentistry work?",
    answer: "Hydrodynamic water-laser energy removes decay and shapes gums without heat, vibration, or noisy drills—often eliminating the need for traditional local anesthesia."
  },
  {
    question: "What financing and payment options do you offer?",
    answer: "We offer flexible 0% APR financing via CareCredit and Sunbit, as well as customized in-house membership plans for comprehensive aesthetic transformations."
  }
]

export function FAQ() {
  return (
    <section className="py-28 bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Asymmetric 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block">
              Clear & Transparent Answers
            </span>
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              Frequently Asked <br />
              <span className="font-serif italic font-normal text-gradient-gold">Questions</span>
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Everything you need to know about our luxury patient care, 3D diagnostics, and appointment booking.
            </p>

            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Have a specific question?</h3>
                  <p className="text-xs text-slate-400 font-light">Our concierge team is online 24/7</p>
                </div>
              </div>
              <Link to="/contact" className="block">
                <Button className="w-full rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs">
                  Ask Concierge Team <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column (8 cols) - Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="apple-card-dark rounded-2xl px-6 py-2 border border-slate-800/80"
                >
                  <AccordionTrigger className="text-lg font-bold text-white hover:text-teal-300 transition-colors text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 leading-relaxed text-sm font-light pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </section>
  )
}
