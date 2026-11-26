import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TradeInForm() {
  const [step, setStep] = useState(1);
  const [vehicleCategory, setVehicleCategory] = useState('Car');
  const [vehicleMake, setVehicleMake] = useState('');
  const [swirlLevel, setSwirlLevel] = useState('Moderate Swirls');
  const [usagePattern, setUsagePattern] = useState('Daily Driven');
  const [recommendedPackage, setRecommendedPackage] = useState(null);

  const evaluateCondition = (e) => {
    e.preventDefault();
    if (vehicleCategory === 'Motorcycle') {
      if (swirlLevel === 'Heavy Swirls & Oxidation') {
        setRecommendedPackage({ name: 'Doctorate Moto Detailing', price: 4999, code: 'doctorate-moto-package' });
      } else {
        setRecommendedPackage({ name: 'Freshman Moto Detailing', price: 1999, code: 'freshman-moto-package' });
      }
    } else {
      if (swirlLevel === 'Heavy Swirls & Oxidation') {
        setRecommendedPackage({ name: 'Doctorate', price: 21999, code: 'doctorate-car-package' });
      } else if (swirlLevel === 'Moderate Swirls') {
        setRecommendedPackage({ name: 'Graduate', price: 12999, code: 'graduate-car-package' });
      } else if (swirlLevel === 'Light Contamination') {
        setRecommendedPackage({ name: 'Scholar', price: 6999, code: 'scholar-car-package' });
      } else {
        setRecommendedPackage({ name: 'Freshman', price: 3499, code: 'freshman-car-package' });
      }
    }
    setStep(2);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xl max-w-3xl mx-auto">
      {step === 1 ? (
        <form onSubmit={evaluateCondition} className="space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">PERSONALIZED JOURNEY</span>
            <h3 className="font-space font-bold text-2xl text-black mt-1">Vehicle Condition Evaluator</h3>
            <p className="text-xs text-neutral-600 mt-1">
              Every process is designed to maximize vehicle longevity with complete honesty. No forced upsells.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Vehicle Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['Car', 'Motorcycle'].map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setVehicleCategory(cat)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      vehicleCategory === cat
                        ? 'bg-black text-white border-black shadow'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Vehicle Make & Model</label>
              <input
                type="text"
                required
                value={vehicleMake}
                onChange={(e) => setVehicleMake(e.target.value)}
                placeholder="e.g. Porsche 911 GT3 / BMW M4"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Paint Condition & Swirl Marks</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['Minor Dust Only', 'Light Contamination', 'Moderate Swirls', 'Heavy Swirls & Oxidation'].map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setSwirlLevel(level)}
                  className={`py-3 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                    swirlLevel === level
                      ? 'bg-black text-white border-black shadow'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Usage Pattern</label>
            <div className="grid grid-cols-3 gap-3">
              {['Weekend Pleasure', 'Daily Driven', 'Track / Enthusiast'].map((u) => (
                <button
                  type="button"
                  key={u}
                  onClick={() => setUsagePattern(u)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                    usagePattern === u
                      ? 'bg-black text-white border-black shadow'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span>Get Personalized Package Recommendation</span>
          </button>
        </form>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
          <div className="w-14 h-14 rounded-full bg-black text-yellow-400 mx-auto flex items-center justify-center border border-neutral-800">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Recommended Treatment</span>
            <h3 className="font-space font-extrabold text-3xl text-black mt-2">
              {recommendedPackage?.name}
            </h3>
            <p className="font-mono font-bold text-lg text-black mt-1">
              Starting At ₹{recommendedPackage?.price.toLocaleString()}
            </p>
            <p className="text-neutral-600 text-xs mt-2 max-w-md mx-auto">
              Tailored for your {vehicleMake || vehicleCategory} based on {swirlLevel} and {usagePattern} usage.
            </p>
          </div>

          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-left text-xs space-y-2 max-w-md mx-auto">
            <p className="font-semibold text-black">Our Promise:</p>
            <p className="text-neutral-600">
              We never recommend services your car does not need. Every process uses 0-4 TDS de-ionized water, pH neutral shampoos, and Koch Chemie & Vonixx chemistry.
            </p>
          </div>

          <div className="flex gap-3 max-w-md mx-auto">
            <button
              onClick={() => setStep(1)}
              className="w-1/2 bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-semibold py-3 rounded-xl transition-colors"
            >
              Re-Evaluate
            </button>
            <a
              href={`https://wa.me/919181030202?text=${encodeURIComponent(
                `*VEHICLE EVALUATION INQUIRY — TED STUDIO*\n\n` +
                `• *Vehicle Category:* ${vehicleCategory}\n` +
                (vehicleMake ? `• *Vehicle Model:* ${vehicleMake}\n` : '') +
                `• *Observed Condition:* ${swirlLevel}\n` +
                `• *Usage Pattern:* ${usagePattern}\n` +
                `• *Recommended Package:* ${recommendedPackage?.name} (Starting At ₹${recommendedPackage?.price?.toLocaleString()})\n\n` +
                `_Sent via theeducateddetailer.com_`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 bg-black hover:bg-neutral-800 text-white text-xs font-semibold py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-1.5 leading-normal"
            >
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
