import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'apple-glass py-3 shadow-sm' 
          : 'bg-white/60 backdrop-blur-md py-4 border-b border-slate-200/50'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Luxe<span className="text-sky-600 font-serif italic">Dent</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/80 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+15551234567" className="text-slate-600 hover:text-slate-900 font-semibold text-xs flex items-center gap-1.5 transition-colors">
            <Phone className="w-3.5 h-3.5 text-sky-600" /> (555) 123-4567
          </a>
          <Link to="/contact">
            <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 h-9 shadow-sm">
              <Calendar className="w-3.5 h-3.5 mr-1.5" /> Book Appointment
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2 text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`py-3.5 border-b border-slate-100 text-lg font-semibold ${
                    location.pathname === link.path ? 'text-sky-600 font-bold' : 'text-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div>
              <Link to="/contact">
                <Button size="lg" className="w-full rounded-full bg-slate-900 text-white font-semibold text-base h-14 shadow-md">
                  Book Online Appointment
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
