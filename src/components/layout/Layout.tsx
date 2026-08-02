import type { ReactNode } from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { MessageSquare, Phone } from "lucide-react"
import { motion } from "framer-motion"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <motion.a 
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-13 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 z-50 transition-colors"
        aria-label="WhatsApp Contact"
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      {/* AI Chat Assistant Placeholder */}
      <motion.button 
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-22 right-6 w-13 h-13 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-slate-900/20 z-50 transition-colors border border-slate-700"
        aria-label="AI Concierge"
      >
        <MessageSquare className="w-5 h-5" />
      </motion.button>
    </div>
  )
}
