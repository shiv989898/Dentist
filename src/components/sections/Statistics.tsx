import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 18, suffix: '+', label: 'Years of Clinical Excellence' },
  { value: 12, suffix: 'k+', label: 'Successful Transformations' },
  { value: 99, suffix: '.8%', label: 'Patient Satisfaction Rate' },
  { value: 25, suffix: '+', label: 'International Design Awards' },
]

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return
    
    let startTimestamp: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      setCount(Math.floor(progress * (to - from) + from))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [inView, from, to, duration])

  return <span ref={nodeRef}>{count}</span>
}

export function Statistics() {
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800/80 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center px-4 pt-6 md:pt-0"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 font-serif tracking-tight">
                <Counter to={stat.value} />
                <span className="text-teal-400">{stat.suffix}</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
