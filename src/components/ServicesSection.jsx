import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, FileCheck, Shield, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  return (
    <section className="bg-[#f2f2f2] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">OUR SCIENCE & USP</span>
          <h2 className="font-space font-extrabold text-3xl sm:text-5xl text-black">
            The TED Science-Driven Advantage
          </h2>
          <p className="text-neutral-600 text-sm font-sans">
            Proper automotive care begins with fundamental science, purified inputs, and honest craftsmanship.
          </p>
        </div>

        {/* Asymmetrical Framer Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Large Bento Feature Card - 0-4 TDS Water */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative min-h-[380px] rounded-3xl overflow-hidden shadow-xl group bg-neutral-900 flex flex-col justify-end p-8 sm:p-10 border border-black/10"
          >
            <img
              src="/images/scholar_car_decontam.png"
              alt="De-ionized Water Wash"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            <div className="relative z-10 space-y-3 text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="font-mono text-xs text-yellow-400 uppercase tracking-widest font-semibold">TDS Value: 0 to 4</span>
              <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white">De-ionized Zero-TDS Water System</h3>
              <p className="text-neutral-300 text-sm max-w-lg leading-relaxed font-sans">
                We purge dissolved solids, minerals, and calcium down to 0-4 PPM. Water leaves zero spots, preventing clear coat etching and micro-scratching.
              </p>
            </div>
          </motion.div>

          {/* Right Column Stack (Card 2 & 3) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-space font-bold text-xl text-black">pH Balanced Chemistry</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                pH-neutral shampoos safeguard delicate coatings, while targeted acidic or alkaline applicators dissolve road tar, bugs, and iron brake dust safely.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black text-white rounded-3xl p-8 shadow-xl space-y-4 border border-neutral-800"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center font-bold">
                <FileCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-space font-bold text-xl text-white">Koch Chemie & Vonixx Products</h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                We strictly use world-renowned German and Brazilian detailing chemistry to restore and protect vehicle surfaces without cutting corners.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row Cards (Card 4 & 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-space font-bold text-xl text-black">Personalized Vehicle Inspection</h3>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
              Every customer journey starts with assessing paint condition, contamination, and usage patterns to assign the exact detailing package needed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
                <Calculator className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-space font-bold text-xl text-black">No Gimmicks & No Forced Upsells</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                Unlike conventional studios pushing unnecessary PPF or high-margin add-ons, TED recommends only what genuinely preserves your vehicle.
              </p>
            </div>
            <Link to="/inventory" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-black hover:underline pt-2">
              <span>Explore Detailing Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
