import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you accept new patients?",
    answer: "Yes, we are always welcoming new patients to our practice. We offer a comprehensive new patient examination to understand your dental needs."
  },
  {
    question: "What insurances do you take?",
    answer: "We work with most major PPO insurance plans and will gladly file claims on your behalf to maximize your benefits. We also offer flexible financing options."
  },
  {
    question: "How often should I get a dental checkup?",
    answer: "We recommend visiting the dentist for a professional cleaning and checkup every six months to maintain optimal oral health and catch potential issues early."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening under the supervision of a dentist is highly safe and effective. We use advanced formulas that minimize sensitivity while delivering brilliant results."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">Questions?</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-teal-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
