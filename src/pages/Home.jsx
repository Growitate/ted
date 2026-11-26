import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, ArrowUpRight } from 'lucide-react';
import CarCard from '../components/CarCard';
import BrandGrid from '../components/BrandGrid';
import ServicesSection from '../components/ServicesSection';
import OperationsModal from '../components/OperationsModal';
import { CARS_DATA } from '../data/cars';
import { SITE_STATS, TESTIMONIALS, TEAM, FAQS } from '../data/siteContent';

export default function Home({ onOpenTestDrive }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [selectedPackageForOps, setSelectedPackageForOps] = useState(null);
  const [isOpsModalOpen, setIsOpsModalOpen] = useState(false);

  const featuredPackages = CARS_DATA.filter((car) => car.bodyStyle === 'Car Package');

  return (
    <div className="space-y-12 sm:space-y-20 bg-[#f2f2f2] pb-16 sm:pb-24">
      {/* HERO SECTION - PERFECT MOBILE FIT & DESKTOP FULL-SCREEN */}
      <section className="w-full p-2 pt-[60px] sm:p-3 sm:pt-[82px] bg-[#f2f2f2] flex flex-col justify-between lg:min-h-screen">
        <div className="relative flex-1 w-full bg-black rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl flex flex-col justify-between p-3.5 sm:p-8 lg:p-12 text-white border border-neutral-900 min-h-[440px] sm:min-h-[520px]">
          {/* Background Supercar Detailing Foam Wash Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero_foam_wash.png"
              alt="TED Professional Foam Wash & Detailing Studio"
              className="w-full h-full object-cover object-center opacity-100 scale-105 transition-transform duration-1000"
              loading="eager"
            />
            {/* Lighter, subtle gradients to make the foam wash scene clear and vibrant */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
          </div>

          {/* Top Hero Bar (Badge & Parent Company Branding) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-3"
          >
            <div className="inline-flex items-center gap-2 glass-card border border-white/20 px-3 py-1 rounded-full max-w-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
              <span className="text-[9px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-200 truncate">
                North-Eastern India's First Science-Driven Studio
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-neutral-300 glass-card border border-white/15 px-3 py-1 rounded-full shadow-lg">
              <span className="text-white font-semibold">A House of Pallavion Product • HOUSE OF PALLAVION (OPC) PRIVATE LIMITED</span>
              <span>•</span>
              <span className="text-yellow-400 font-bold">0 - 4 TDS WATER WASH</span>
            </div>
          </motion.div>

          {/* Center Content & Title */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start my-auto py-2 sm:py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 space-y-4 self-start"
            >
              <div className="space-y-3 glass-card p-3.5 sm:p-6 rounded-2xl border border-white/10 w-fit max-w-full shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white p-0.5 shadow-xl shrink-0 border border-white/40 overflow-hidden">
                    <img
                      src="/images/ted_logo_transparent.png"
                      alt="TED Logo Emblem"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-yellow-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      ENGINEERED FOR EXCELLENCE
                    </span>
                    <span className="text-neutral-200 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider block">
                      North-Eastern India Studio
                    </span>
                  </div>
                </div>

                <h1 className="font-space font-extrabold text-2xl sm:text-4xl lg:text-7xl text-white leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] break-words">
                  TED – THE EDUCATED DETAILER
                </h1>
                <p className="font-space font-bold text-sm sm:text-xl lg:text-2xl text-neutral-100 tracking-wider uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  PREMIUM AUTOMOTIVE CARE
                </p>
                <p className="font-mono text-[10px] sm:text-xs text-yellow-300/90 uppercase tracking-wider pt-0.5 font-semibold">
                  A House of Pallavion Product
                </p>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                <button
                  onClick={onOpenTestDrive}
                  className="bg-white hover:bg-neutral-100 text-black font-mono font-semibold text-[10px] sm:text-xs uppercase tracking-wider px-4 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2 border border-white text-center min-h-[44px]"
                >
                  <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                  <span className="text-center">Book an inspection , consult & get the work done</span>
                </button>
                <Link
                  to="/inventory"
                  className="glass-card hover:bg-white/20 border border-white/20 text-white font-mono font-semibold text-[10px] sm:text-xs uppercase tracking-wider px-4 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 text-center min-h-[44px]"
                >
                  <span>Explore Detailing Packages</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </motion.div>

            {/* Right Stat Overlay Card (Visible on lg screens) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block lg:col-span-4 glass-card border border-white/15 rounded-2xl p-6 space-y-4 shadow-2xl self-start"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-2.5 text-xs font-mono">
                <span className="text-neutral-300 uppercase text-[11px]">Core Technical USP</span>
                <span className="bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded font-bold text-[11px]">TDS 0 - 4</span>
              </div>
              <div>
                <h4 className="font-space font-bold text-lg text-white">Purified De-ionized Water</h4>
                <p className="text-xs text-neutral-300 mt-1 font-sans leading-relaxed">
                  Eliminates mineral deposits, calcium etching, and micro-scratching during wash.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-300 pt-2 border-t border-white/10">
                <div><span>Products:</span> <strong className="text-white">Koch Chemie</strong></div>
                <div><span>Approach:</span> <strong className="text-white">Zero Upsells</strong></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Hero Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-3 sm:pt-6 border-t border-white/15 mt-3 sm:mt-0"
          >
            {SITE_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <p className="font-space font-extrabold text-lg sm:text-3xl text-white">{stat.value}</p>
                <p className="text-[9px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BRAND MARQUEE TICKER */}
      <BrandGrid />

      {/* FEATURED DETAILING PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">OUR DETAILING PACKAGES</span>
            <h2 className="font-space font-extrabold text-2xl sm:text-4xl lg:text-5xl text-black">
              Specially Designed Treatments
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm max-w-xl font-sans">
              4 Car Packages & 2 Motorcycle Packages built with purpose, transparent processes, and Starting At pricing.
            </p>
          </div>
          <Link
            to="/inventory"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition-colors self-start sm:self-auto"
          >
            <span>View All Packages</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((car, idx) => (
            <CarCard
              key={car.id}
              car={car}
              index={idx}
              onOpenOperationsModal={(pkg) => {
                setSelectedPackageForOps(pkg);
                setIsOpsModalOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* ASYMMETRICAL SERVICES BENTO GRID SECTION */}
      <ServicesSection />

      {/* TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-3xl p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest font-semibold">CUSTOMER REVIEWS</span>
              <h2 className="font-space font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Trusted by Discerning Vehicle Owners.
              </h2>
              <div className="flex items-center gap-1.5 text-yellow-400 py-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
                ))}
                <span className="ml-2 font-mono text-xs sm:text-sm text-white font-bold">5.0 Rating</span>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                Real feedback from owners who value long-term vehicle preservation, 0-4 TDS water washes, and transparent care.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-7 flex flex-col justify-between gap-4">
                  <p className="text-neutral-300 text-xs sm:text-sm italic leading-relaxed font-sans">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-space font-bold text-sm sm:text-base text-white">{t.author}</p>
                    <p className="font-mono text-[11px] text-neutral-400 mt-0.5">{t.vehicle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER & CRAFTSMANSHIP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 lg:p-16 border border-black/5 shadow-sm space-y-8 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">WHO WE ARE</span>
            <h2 className="font-space font-extrabold text-2xl sm:text-4xl lg:text-5xl text-black">
              Craftsmanship Over Marketing
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm font-sans">
              Founded by Marli Bagra to replace damaging car wash practices with scientifically superior techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {TEAM.map((m, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 p-5 sm:p-6 flex items-center gap-4 sm:gap-6">
                <img src={m.image} alt={m.name} className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl object-cover shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-space font-bold text-base sm:text-lg text-black">{m.name}</h4>
                  <p className="font-mono text-[11px] sm:text-xs text-yellow-600 font-semibold">{m.role}</p>
                  <p className="text-xs text-neutral-500 font-sans">{m.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center space-y-2 sm:space-y-3">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">TRANSPARENCY & FREQUENT QUESTIONS</span>
          <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-black">Got Questions? We Have Answers.</h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-black/5 shadow-sm space-y-2">
              <h4 className="font-space font-bold text-sm sm:text-base text-black flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0 mt-1.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed pl-4 border-l-2 border-neutral-200">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 105 Operations Modal */}
      <OperationsModal
        isOpen={isOpsModalOpen}
        onClose={() => setIsOpsModalOpen(false)}
        packageData={selectedPackageForOps}
      />
    </div>
  );
}
