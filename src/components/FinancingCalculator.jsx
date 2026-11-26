import React, { useState, useMemo } from 'react';
import { Calculator, ShieldCheck } from 'lucide-react';

export default function FinancingCalculator({ initialPrice = 12999, onOpenBooking }) {
  const [packageBase, setPackageBase] = useState(initialPrice);
  const [vehicleCount, setVehicleCount] = useState(1);
  const [maintenanceFrequency, setMaintenanceFrequency] = useState(4); // visits per year
  const [loyaltyDiscount, setLoyaltyDiscount] = useState(10); // % loyalty discount

  const annualInvestment = useMemo(() => {
    const rawCost = packageBase * vehicleCount * maintenanceFrequency;
    const discountAmount = rawCost * (loyaltyDiscount / 100);
    return Math.round(rawCost - discountAmount);
  }, [packageBase, vehicleCount, maintenanceFrequency, loyaltyDiscount]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xl max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
        <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center">
          <Calculator className="w-5 h-5 text-yellow-400" />
        </div>
        <div>
          <h3 className="font-space font-bold text-xl text-black">Detailing Investment Estimator</h3>
          <p className="text-xs text-neutral-500 font-mono">Calculate science-backed care for your garage with loyalty benefits</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-5">
          {/* Base Package Selection */}
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
              Select Base Detailing Package
            </label>
            <select
              value={packageBase}
              onChange={(e) => setPackageBase(Number(e.target.value))}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-black focus:outline-none focus:border-black"
            >
              <option value={3499}>Freshman (Starting At ₹3,499)</option>
              <option value={6999}>Scholar (Starting At ₹6,999)</option>
              <option value={12999}>Graduate (Starting At ₹12,999)</option>
              <option value={21999}>Doctorate (Starting At ₹21,999)</option>
              <option value={1999}>Freshman Two-Wheeler (Starting At ₹1,999)</option>
              <option value={4999}>Doctorate Two-Wheeler (Starting At ₹4,999)</option>
            </select>
          </div>

          {/* Vehicle Count */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-neutral-500 uppercase">Number of Garage Vehicles</span>
              <span className="font-bold text-black">{vehicleCount} Vehicle{vehicleCount > 1 ? 's' : ''}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={vehicleCount}
              onChange={(e) => setVehicleCount(Number(e.target.value))}
              className="w-full accent-black cursor-pointer h-1.5 bg-neutral-200 rounded-lg appearance-none"
            />
          </div>

          {/* Maintenance Visits */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-neutral-500 uppercase">Annual Maintenance Sessions</span>
              <span className="font-bold text-black">{maintenanceFrequency} Visits / Year</span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              step="1"
              value={maintenanceFrequency}
              onChange={(e) => setMaintenanceFrequency(Number(e.target.value))}
              className="w-full accent-black cursor-pointer h-1.5 bg-neutral-200 rounded-lg appearance-none"
            />
          </div>

          {/* Loyalty Offer */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-neutral-500 uppercase">Loyalty Customer Advantage</span>
              <span className="font-bold text-black">{loyaltyDiscount}% Tier Discount</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="5"
              value={loyaltyDiscount}
              onChange={(e) => setLoyaltyDiscount(Number(e.target.value))}
              className="w-full accent-black cursor-pointer h-1.5 bg-neutral-200 rounded-lg appearance-none"
            />
          </div>
        </div>

        {/* Right Payment Display Card */}
        <div className="lg:col-span-5 bg-black text-white rounded-2xl p-6 flex flex-col justify-between h-full space-y-6 border border-neutral-800">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">Estimated Annual Investment</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-space text-3xl font-extrabold text-white">₹{annualInvestment.toLocaleString()}</span>
              <span className="text-neutral-400 text-xs font-mono">/ year</span>
            </div>
            <p className="text-[11px] font-mono text-yellow-400 mt-2">
              ★ Includes Loyalty Customer Tier Discount
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-300">
            <div className="flex justify-between">
              <span>Per Session Est:</span>
              <span className="font-bold text-white">₹{Math.round(annualInvestment / (maintenanceFrequency * vehicleCount)).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Water Standard:</span>
              <span className="font-bold text-white">0 - 4 TDS De-ionized</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking ? onOpenBooking : () => window.location.href = '/contact'}
            className="w-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Book Initial Inspection</span>
          </button>
        </div>
      </div>
    </div>
  );
}
