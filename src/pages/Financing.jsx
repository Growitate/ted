import React from 'react';
import { ShieldCheck, Droplets, Sparkles, Award } from 'lucide-react';
import FinancingCalculator from '../components/FinancingCalculator';
import { FAQS } from '../data/siteContent';

export default function Financing({ onOpenTestDrive }) {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">TECHNICAL USPs</span>
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl text-black">The Science of TED Detailing</h1>
        <p className="text-neutral-600 text-sm max-w-xl mx-auto font-sans">
          Why our 0-4 TDS de-ionized water, pH balanced chemistry, and Koch Chemie & Vonixx products outperform conventional car washes.
        </p>
      </div>

      {/* Embedded Care Estimator */}
      <FinancingCalculator onOpenBooking={onOpenTestDrive} />

      {/* 3 Step Science Detailing Process */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">HONEST & SKILLED</span>
          <h2 className="font-space font-extrabold text-3xl text-black mt-1">Our 3-Step Vehicle Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <span className="w-8 h-8 rounded-full bg-black text-yellow-400 font-mono font-bold text-xs flex items-center justify-center">01</span>
            <h3 className="font-space font-bold text-lg text-black">Detailed Paint Inspection</h3>
            <p className="text-neutral-600 text-xs leading-relaxed font-sans">
              We evaluate paint thickness, contamination levels, and swirl depth to assign the exact detailing package your car needs.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <span className="w-8 h-8 rounded-full bg-black text-yellow-400 font-mono font-bold text-xs flex items-center justify-center">02</span>
            <h3 className="font-space font-bold text-lg text-black">0-4 TDS & pH Decontam</h3>
            <p className="text-neutral-600 text-xs leading-relaxed font-sans">
              Purified zero-TDS water wash combined with pH-neutral shampoo and specialized acidic or alkaline applicators for safe cleaning.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <span className="w-8 h-8 rounded-full bg-black text-yellow-400 font-mono font-bold text-xs flex items-center justify-center">03</span>
            <h3 className="font-space font-bold text-lg text-black">Precision Correction & Seal</h3>
            <p className="text-neutral-600 text-xs leading-relaxed font-sans">
              Multi-stage polishing with Koch Chemie & Vonixx ceramic surface protection, delivering long-term paint preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Detailing FAQs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="font-space font-extrabold text-2xl text-black text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-black/5 space-y-2">
              <h4 className="font-space font-bold text-base text-black flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                {faq.q}
              </h4>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed pl-4 border-l-2 border-neutral-200">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
