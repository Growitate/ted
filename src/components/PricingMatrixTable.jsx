import React, { useState } from 'react';
import { CATEGORY_PRICING, VEHICLE_CATEGORIES, TWO_WHEELER_PRICING } from '../data/cars';
import { Table, CheckCircle2, Car, Bike, Info, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORY_EXAMPLES = {
  'Hatchback': 'Hyundai i20, Maruti Baleno',
  'Sedan': 'Honda City, Hyundai Verna',
  'Compact SUV': 'Hyundai Creta, Kia Seltos',
  'SUV': 'Toyota Fortuner, Mahindra XUV700',
  'Luxury vehicle': 'Mercedes-Benz E-Class, BMW 5 Series',
  'Lifestyle truck': 'Toyota Hilux, Isuzu D-Max'
};

export default function PricingMatrixTable({ selectedCategory, onSelectCategory }) {
  const [activeTab, setActiveTab] = useState('cars'); // 'cars' | 'bikes'
  const [showRules, setShowRules] = useState(false);

  const carPackages = [
    { id: 'freshman-car-package', name: 'Freshman', subtitle: 'The Fundamentals' },
    { id: 'scholar-car-package', name: 'Scholar', subtitle: 'Enhanced Care' },
    { id: 'graduate-car-package', name: 'Graduate', subtitle: 'Deep Cleaning' },
    { id: 'doctorate-car-package', name: 'Doctorate', subtitle: 'Comprehensive Detailing' },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
      {/* Table Header & Segment Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
        <div>
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Table className="w-3.5 h-3.5 text-black" />
            OFFICIAL DETAILING PRICE CHARTS
          </span>
          <h3 className="font-space font-extrabold text-xl sm:text-2xl text-black mt-1">
            Compare Package Rates Across Categories
          </h3>
          <p className="text-xs text-neutral-500 font-sans mt-0.5">
            Transparent pricing based on vehicle size, complexity, and materials from the official TED price chart.
          </p>
        </div>

        {/* Tab Toggle: Cars vs Two-Wheelers */}
        <div className="flex items-center gap-1.5 bg-neutral-100 p-1.5 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTab('cars')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'cars'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Four-Wheelers (6 Categories)</span>
          </button>
          <button
            onClick={() => setActiveTab('bikes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'bikes'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Bike className="w-3.5 h-3.5" />
            <span>Two-Wheelers (Bikes / Scooty)</span>
          </button>
        </div>
      </div>

      {activeTab === 'cars' ? (
        /* FOUR-WHEELER MATRIX TABLE */
        <div className="space-y-4">
          <div className="overflow-x-auto no-scrollbar rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-2xl">Vehicle Category & Examples</th>
                  {carPackages.map((pkg) => (
                    <th key={pkg.id} className="p-4 text-center">
                      <div className="font-bold text-white text-xs">{pkg.name}</div>
                      <div className="text-[10px] text-neutral-400 font-normal normal-case">{pkg.subtitle}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm font-sans">
                {VEHICLE_CATEGORIES.map((category) => {
                  const isSelected =
                    selectedCategory === category ||
                    (selectedCategory === 'Luxury' && category === 'Luxury vehicle') ||
                    (selectedCategory === 'Lifestyle Trucks' && category === 'Lifestyle truck');
                  const examples = CATEGORY_EXAMPLES[category];

                  return (
                    <tr
                      key={category}
                      onClick={() => onSelectCategory && onSelectCategory(category)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-yellow-400/15 border-l-4 border-l-yellow-500 font-bold'
                          : 'hover:bg-neutral-50'
                      }`}
                    >
                      <td className="p-4 font-space font-bold text-black flex items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />}
                            <span>{category}</span>
                          </div>
                          {examples && (
                            <span className="text-[11px] font-mono text-neutral-500 font-normal block mt-0.5">
                              e.g., {examples}
                            </span>
                          )}
                        </div>
                        {isSelected && (
                          <span className="bg-black text-yellow-400 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase shrink-0">
                            Selected
                          </span>
                        )}
                      </td>
                      {carPackages.map((pkg) => {
                        const price = CATEGORY_PRICING[category]?.[pkg.id];
                        return (
                          <td
                            key={pkg.id}
                            className={`p-4 text-center font-mono font-semibold ${
                              isSelected ? 'text-black font-extrabold text-sm' : 'text-neutral-700'
                            }`}
                          >
                            ₹{price ? price.toLocaleString() : 'N/A'}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Official Footnote from PDF */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-neutral-500 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              All prices in INR (₹). Additional services and exceptional contamination may be quoted separately.
            </span>
            <span className="text-neutral-400">
              Click any row to select your category above
            </span>
          </div>

          {/* Collapsible Standard Operating Rules from Page 7 of PDF */}
          <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-neutral-50/50">
            <button
              type="button"
              onClick={() => setShowRules(!showRules)}
              className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-neutral-100/60 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span className="font-space font-bold text-xs sm:text-sm text-black">
                  TED Standard Operating Rules & Framework Guidelines (Page 7 SOP)
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-neutral-500">
                <span>{showRules ? 'Hide Rules' : 'View Rules'}</span>
                {showRules ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {showRules && (
              <div className="p-4 sm:p-5 border-t border-neutral-200 bg-white space-y-4 text-xs font-sans text-neutral-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <strong className="text-black font-space block">Freshman Wash Standard:</strong>
                    <p className="text-neutral-600">
                      pH-neutral shampoo wash by default, with routine interior and exterior cleaning.
                    </p>
                  </div>
                  <div className="space-y-1 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <strong className="text-black font-space block">Scholar Scope:</strong>
                    <p className="text-neutral-600">
                      Adds tyre and trim dressing plus more detailed cleaning of interior and exterior surfaces.
                    </p>
                  </div>
                  <div className="space-y-1 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <strong className="text-black font-space block">Graduate & Doctorate Pre-Rinse:</strong>
                    <p className="text-neutral-600">
                      Use a suitable touchless pre-rinse product followed by pH-neutral shampoo where compatible, alongside relevant deep-cleaning procedures.
                    </p>
                  </div>
                  <div className="space-y-1 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <strong className="text-black font-space block">Water Quality (0-4 TDS Process):</strong>
                    <p className="text-neutral-600">
                      Use TED's deionized-water process for the final rinse to help minimise mineral deposits and water spotting.
                    </p>
                  </div>
                  <div className="space-y-1 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <strong className="text-black font-space block">Paint Correction Policy:</strong>
                    <p className="text-neutral-600">
                      Quoted separately after technical inspection. It is not automatically included in Doctorate.
                    </p>
                  </div>
                  <div className="space-y-1 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <strong className="text-black font-space block">Performance Air Filters:</strong>
                    <p className="text-neutral-600">
                      Clean only compatible, reusable filters according to manufacturer procedure. Ordinary disposable paper filters are not washed.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/30 text-neutral-800 space-y-1">
                  <strong className="text-black font-space block text-xs">
                    Important Service Notes:
                  </strong>
                  <p className="text-neutral-700 text-[11px] leading-relaxed">
                    Steam cleaning must be selected according to surface and manufacturer guidance. Ozone treatment is performed only in an unoccupied vehicle followed by ventilation. The operation list is a proposed staff framework, not a promise that every operation will be performed on every vehicle.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* TWO-WHEELER MATRIX TABLE */
        <div className="space-y-4">
          <div className="overflow-x-auto no-scrollbar rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-2xl">Package Name</th>
                  <th className="p-4">Scope & Inclusions</th>
                  <th className="p-4 text-center">Normal Bikes / Scooty</th>
                  <th className="p-4 text-center rounded-tr-2xl">Premium Segment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm font-sans">
                {TWO_WHEELER_PRICING.map((item) => (
                  <tr key={item.packageId} className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-space font-bold text-black whitespace-nowrap">
                      <div>{item.name}</div>
                      <span className="text-[10px] font-mono text-yellow-600 bg-yellow-400/10 px-2 py-0.5 rounded font-semibold uppercase">
                        {item.servicesCount} Included Services
                      </span>
                    </td>
                    <td className="p-4 text-neutral-600 max-w-xs text-xs font-sans">
                      {item.scope}
                    </td>
                    <td className="p-4 text-center font-mono font-bold text-black text-sm">
                      ₹{item.normalPrice.toLocaleString()}
                    </td>
                    <td className="p-4 text-center font-mono font-bold text-black text-sm">
                      ₹{item.premiumPrice.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Two-Wheeler Notes from Page 1 & 2 of PDF */}
          <div className="text-[11px] font-mono text-neutral-600 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-black">
              <Info className="w-3.5 h-3.5 text-neutral-700" />
              Two-Wheeler Standard Operating Notes (TED Service SOP):
            </div>
            <p className="text-neutral-600 font-sans">
              • <strong>Freshman scope:</strong> Focuses on accessible surfaces and routine maintenance. Does not include chain cleaning & lubrication, intensive water-mark removal or deep electronic detailing.
            </p>
            <p className="text-neutral-600 font-sans">
              • <strong>CVT Scooters:</strong> For scooters with enclosed CVT transmissions, chain cleaning and lubrication do not apply.
            </p>
            <p className="text-neutral-600 font-sans">
              • <strong>Water-Mark Treatment:</strong> Covers treatable surface deposits; etched marks requiring polishing are quoted separately.
            </p>
            <p className="text-neutral-600 font-sans">
              • <strong>Safety Guidelines:</strong> Avoid directing high-pressure water at electrical connectors, instrument clusters, bearings or sensitive controls. Trim dressing must not be applied to tyre treads, brake discs, pads or control grips.
            </p>
            <p className="text-neutral-600 font-sans">
              • <strong>Custom Quotes:</strong> Unusually large, heavily soiled or complex motorcycles may require a custom quote.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
