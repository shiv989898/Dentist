import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">L</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Luxe<span className="text-sky-600 font-serif italic">Dent</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
              Pristine cosmetic and restorative dentistry delivered with Apple-grade precision and luxury care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/about" className="hover:text-slate-900 transition-colors">About Practice</Link></li>
              <li><Link to="/services" className="hover:text-slate-900 transition-colors">Specialized Services</Link></li>
              <li><Link to="/doctors" className="hover:text-slate-900 transition-colors">Faculty Doctors</Link></li>
              <li><Link to="/gallery" className="hover:text-slate-900 transition-colors">Smile Transformations</Link></li>
              <li><Link to="/pricing" className="hover:text-slate-900 transition-colors">Membership & Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">Contact Details</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>450 Rodeo Drive, Suite 300<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <span>concierge@luxedent.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">Hours of Care</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-slate-400" /> Mon - Fri</span>
                <span className="text-slate-900 font-medium">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-slate-400" /> Saturday</span>
                <span className="text-slate-900 font-medium">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-slate-400" /> Sunday</span>
                <span className="text-sky-600 font-medium">Emergency Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} LuxeDent Dental Practice. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
