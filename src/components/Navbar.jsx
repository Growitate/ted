import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenTestDrive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About TED', path: '/about' },
    { name: 'OUR SERVICES', path: '/inventory' },
    { name: 'Science & USP', path: '/financing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm border border-neutral-200/80 p-0.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/images/ted_logo_transparent.png"
                alt="TED - The Educated Detailer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-space font-extrabold text-sm sm:text-base tracking-tight text-black leading-none group-hover:text-neutral-700 transition-colors">
                  TED
                </span>
                <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-black text-yellow-400 font-bold leading-none">
                  STUDIO
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-600 font-semibold leading-tight mt-0.5">
                The Educated Detailer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-mono tracking-wider uppercase transition-colors relative py-1 ${
                    isActive ? 'text-black font-bold' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenTestDrive}
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow hover:scale-105 active:scale-95 border border-neutral-800"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
              <span>Book an Inspection</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:bg-black/5 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/50 backdrop-blur-xs z-40 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative z-50 md:hidden bg-white border-b border-black/10 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-2 py-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-mono tracking-wider uppercase py-3 px-4 rounded-xl transition-colors flex items-center justify-between min-h-[44px] ${
                        isActive ? 'bg-black text-white font-bold' : 'text-neutral-800 hover:bg-neutral-100'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-yellow-400" />}
                    </Link>
                  );
                })}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTestDrive();
                  }}
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-black text-white text-xs font-mono uppercase tracking-wider py-4 rounded-xl shadow-md min-h-[48px] active:scale-98 transition-transform border border-neutral-800"
                >
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                  <span>Book an Inspection</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
