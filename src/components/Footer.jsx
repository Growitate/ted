import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, Check, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/images/ted_logo_transparent.png"
                  alt="TED - The Educated Detailer Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-space font-extrabold text-lg tracking-tight text-white leading-none">
                    TED
                  </span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-yellow-400 text-black font-bold leading-none">
                    STUDIO
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-semibold leading-tight mt-1">
                  The Educated Detailer
                </span>
              </div>
            </Link>
            <p className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-semibold">
              A House of Pallavion Product
            </p>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed font-sans">
              North-Eastern India's first premium, science-driven automotive care studio. Education before sales, pure craftsmanship over marketing noise.
            </p>
            <form onSubmit={handleSubscribe} className="pt-2 max-w-md">
              <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                Stay Informed with Detailing Updates
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-neutral-900 border border-neutral-800 text-white text-xs px-3.5 py-2.5 rounded-lg flex-1 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-black text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4 text-black" /> : <ArrowRight className="w-4 h-4" />}
                  <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Packages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Detailing Packages</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link to="/inventory" className="hover:text-white transition-colors">All Detailing Packages</Link></li>
              <li><Link to="/inventory/freshman-car-package" className="hover:text-white transition-colors">Freshman (Car Maintenance)</Link></li>
              <li><Link to="/inventory/scholar-car-package" className="hover:text-white transition-colors">Scholar (Decontamination)</Link></li>
              <li><Link to="/inventory/graduate-car-package" className="hover:text-white transition-colors">Graduate (Paint Correction)</Link></li>
              <li><Link to="/inventory/doctorate-car-package" className="hover:text-white transition-colors">Doctorate (Flagship Ceramic)</Link></li>
              <li><Link to="/inventory/freshman-moto-package" className="hover:text-white transition-colors">Freshman Moto (Bikes)</Link></li>
              <li><Link to="/inventory/doctorate-moto-package" className="hover:text-white transition-colors">Doctorate Moto (Bikes)</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About TED & Marli Bagra</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Science & USPs (TDS 0-4)</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Studio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book Vehicle Inspection</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Contact & Legal</h4>
            <div className="space-y-2 text-xs font-mono text-neutral-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <a href="tel:+919181030202" className="hover:text-yellow-400 transition-colors">
                  +91 9181030202
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span>contact@theeducateddetailer.com</span>
              </p>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed text-neutral-300">
                  <span className="font-bold text-white block">HOUSE OF PALLAVION (OPC) PRIVATE LIMITED</span>
                  <span className="text-neutral-400 block mt-0.5">
                    C/O NANDESWAR H/No 11, Nayanpur Road Hastinapur, Dispur, Gmc, Kamrup- 781005, Assam
                  </span>
                </div>
              </div>
            </div>

            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest pt-3">Legal Policies</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link to="/legal/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>

            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://www.instagram.com/the.educated.detailer?igsh=OXVsNmJkY21sZmcy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-300 hover:text-yellow-400 hover:bg-neutral-800 transition-colors border border-neutral-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© 2026 TED - THE EDUCATED DETAILER • A House of Pallavion Product. All Rights Reserved.</p>
          <p>
            built by{' '}
            <a
              href="https://growitate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-yellow-400 transition-colors"
            >
              GROWITATE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
