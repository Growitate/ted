import React, { useState } from 'react';
import { CAR_MODELS_DB, VEHICLE_CATEGORIES } from '../data/cars';
import { Car, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function VehicleSelector({ selectedCategory, onSelectCategory, selectedVehicle, onSelectVehicle }) {
  const [selectedMake, setSelectedMake] = useState(selectedVehicle?.make || 'BMW');
  const [selectedModel, setSelectedModel] = useState(selectedVehicle?.model || '5 Series');

  const makes = Object.keys(CAR_MODELS_DB);
  const availableModels = CAR_MODELS_DB[selectedMake] || [];

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    const models = CAR_MODELS_DB[make] || [];
    if (models.length > 0) {
      const firstModel = models[0];
      setSelectedModel(firstModel.model);
      onSelectCategory(firstModel.category);
      onSelectVehicle({ make, model: firstModel.model, category: firstModel.category });
    }
  };

  const handleModelChange = (e) => {
    const modelName = e.target.value;
    setSelectedModel(modelName);
    const item = availableModels.find((m) => m.model === modelName);
    if (item) {
      onSelectCategory(item.category);
      onSelectVehicle({ make: selectedMake, model: modelName, category: item.category });
    }
  };

  return (
    <div className="bg-neutral-900 text-white rounded-3xl p-5 sm:p-8 border border-neutral-800 shadow-2xl space-y-6">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
        <div className="space-y-1">
          <span className="font-mono text-xs text-yellow-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            STEP 1: VEHICLE SELECTION & CATEGORY IDENTIFIER
          </span>
          <h2 className="font-space font-extrabold text-xl sm:text-3xl text-white">
            Identify Your Car Category
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-sans">
            Select your vehicle Make & Model to automatically determine your vehicle category and view applicable package prices.
          </p>
        </div>

        {/* Identified Category Badge */}
        {selectedCategory && (
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-4 flex items-center gap-3 shrink-0">
            <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-yellow-300 tracking-wider block font-semibold">
                Identified Category
              </span>
              <span className="font-space font-extrabold text-lg text-white">
                {selectedCategory}
              </span>
              {selectedVehicle && selectedVehicle.make && (
                <span className="text-[11px] font-mono text-neutral-300 block">
                  ({selectedVehicle.make} {selectedVehicle.model})
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Selector Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Make Select */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-2">
            <Car className="w-4 h-4 text-yellow-400" />
            Select Car Make
          </label>
          <select
            value={selectedMake}
            onChange={handleMakeChange}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-yellow-400 cursor-pointer min-h-[44px]"
          >
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        {/* Model Select */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-yellow-400" />
            Select Car Model
          </label>
          <select
            value={selectedModel}
            onChange={handleModelChange}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-yellow-400 cursor-pointer min-h-[44px]"
          >
            {availableModels.map((item) => (
              <option key={item.model} value={item.model}>
                {item.model} ({item.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Pills Bar (Step 2 Quick Switch) */}
      <div className="pt-2 border-t border-neutral-800 space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
          Or Select Category Directly:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {VEHICLE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  onSelectVehicle({ make: 'Selected Category', model: cat, category: cat });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border min-h-[40px] flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-yellow-400 text-black border-yellow-400 shadow-lg font-bold'
                    : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700'
                }`}
              >
                {isSelected && <span className="w-2 h-2 rounded-full bg-black shrink-0" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
