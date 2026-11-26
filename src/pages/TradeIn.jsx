import React from 'react';
import TradeInForm from '../components/TradeInForm';

export default function TradeIn() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">VEHICLE CARE EVALUATION</span>
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl text-black">Personalized Package Recommendation</h1>
        <p className="text-neutral-600 text-sm max-w-xl mx-auto font-sans">
          Tell us about your vehicle and paint condition. TED recommends only what your car genuinely requires. Zero forced upsells.
        </p>
      </div>

      {/* Trade In Form Component */}
      <TradeInForm />

      {/* Why Choose TED Grid */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm space-y-8">
        <h2 className="font-space font-extrabold text-2xl text-black text-center">Why Vehicle Owners Choose TED</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2 p-4">
            <h3 className="font-space font-bold text-lg text-black">Education Before Sales</h3>
            <p className="text-xs text-neutral-600 font-sans">We clearly explain what every package includes, who it is designed for, and why your vehicle needs it.</p>
          </div>
          <div className="space-y-2 p-4">
            <h3 className="font-space font-bold text-lg text-black">0 - 4 TDS De-ionized Water</h3>
            <p className="text-xs text-neutral-600 font-sans">Purified water wash prevents mineral deposits and paint etching on every single treatment stage.</p>
          </div>
          <div className="space-y-2 p-4">
            <h3 className="font-space font-bold text-lg text-black">Premium Global Chemistry</h3>
            <p className="text-xs text-neutral-600 font-sans">Exclusively relying on Koch Chemie and Vonixx products for proven paint protection and gloss.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
