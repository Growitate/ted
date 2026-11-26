import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpDown, ArrowUpRight, Sparkles, ListOrdered } from 'lucide-react';
import CarCard from '../components/CarCard';
import VehicleSelector from '../components/VehicleSelector';
import PricingMatrixTable from '../components/PricingMatrixTable';
import OperationsModal from '../components/OperationsModal';
import { CARS_DATA, CATEGORY_PRICING } from '../data/cars';

export default function Inventory() {
  const [searchParams] = useSearchParams();
  const initialBody = searchParams.get('bodyStyle') || 'All';

  const [selectedBodyStyle, setSelectedBodyStyle] = useState(initialBody);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Vehicle Category & Selection State
  const [selectedCategory, setSelectedCategory] = useState('Luxury vehicle');
  const [selectedVehicle, setSelectedVehicle] = useState({
    make: 'BMW',
    model: '5 Series',
    category: 'Luxury vehicle'
  });

  // Modal State for 105 Detailing Operations
  const [selectedPackageForOps, setSelectedPackageForOps] = useState(null);
  const [isOpsModalOpen, setIsOpsModalOpen] = useState(false);

  const categories = ['All', 'Car Package', 'Motorcycle Package'];

  const filteredPackages = useMemo(() => {
    return CARS_DATA.filter((car) => {
      const matchCategory =
        selectedBodyStyle === 'All' || car.bodyStyle.toLowerCase() === selectedBodyStyle.toLowerCase();
      const matchQuery =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchQuery;
    }).sort((a, b) => {
      const priceA = selectedCategory && CATEGORY_PRICING[selectedCategory]?.[a.id] ? CATEGORY_PRICING[selectedCategory][a.id] : a.price;
      const priceB = selectedCategory && CATEGORY_PRICING[selectedCategory]?.[b.id] ? CATEGORY_PRICING[selectedCategory][b.id] : b.price;
      if (sortBy === 'price-low') return priceA - priceB;
      if (sortBy === 'price-high') return priceB - priceA;
      return 0;
    });
  }, [selectedBodyStyle, searchQuery, sortBy, selectedCategory]);

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
      {/* Header Title */}
      <div className="space-y-2 sm:space-y-3 border-b border-neutral-200 pb-6 sm:pb-8">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">OUR SERVICES</span>
        <h1 className="font-space font-extrabold text-3xl sm:text-5xl text-black">Detailing Packages</h1>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-2xl font-sans leading-relaxed">
          4 specially designed Car packages (priced by vehicle category) and 2 Two-Wheeler packages. Select your car Make & Model to view exact package pricing and technical SOP operations.
        </p>
      </div>

      {/* STEP 1: Vehicle Make & Model Selector (For Car Packages) */}
      {(selectedBodyStyle === 'All' || selectedBodyStyle === 'Car Package') && (
        <div className="space-y-6">
          <VehicleSelector
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedVehicle={selectedVehicle}
            onSelectVehicle={setSelectedVehicle}
          />

          {/* STEP 2: Pricing Matrix Comparison Table */}
          <PricingMatrixTable
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Direct 105 Operations Banner */}
          <div className="bg-neutral-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-neutral-800 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-mono font-extrabold text-sm shrink-0">
                105
              </div>
              <div>
                <h4 className="font-space font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <span>Want to see all 105 technical detailing operations?</span>
                  <span className="bg-white/10 text-yellow-300 text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase">
                    Official SOP
                  </span>
                </h4>
                <p className="text-xs text-neutral-400 font-sans">
                  From intricate panel gaps (#39) and piano-black trims (#69) to air filters (#93) and the 105-step QC sign-off (#105).
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const docPkg = CARS_DATA.find((c) => c.id === 'doctorate-car-package');
                setSelectedPackageForOps(docPkg);
                setIsOpsModalOpen(true);
              }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-mono font-bold px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center justify-center gap-1.5 shadow-sm"
            >
              <ListOrdered className="w-4 h-4" />
              <span>Explore All 105 Operations</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-black/5 shadow-sm space-y-3 md:space-y-0 md:flex md:items-center md:justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedBodyStyle(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all min-h-[40px] ${
                selectedBodyStyle === cat
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search package or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-100 border-none rounded-xl pl-9 pr-4 py-2 text-xs font-sans placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black min-h-[40px]"
            />
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-neutral-100 border-none rounded-xl pl-4 pr-9 py-2 text-xs font-medium text-neutral-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer min-h-[40px]"
            >
              <option value="featured">Featured Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-neutral-500 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Active Results Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-neutral-500 px-1">
        <span>
          Showing {filteredPackages.length} packages
          {selectedCategory && (selectedBodyStyle === 'All' || selectedBodyStyle === 'Car Package') && (
            <span className="text-black font-semibold"> (Displaying {selectedCategory} category prices)</span>
          )}
        </span>
        {(selectedBodyStyle !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedBodyStyle('All');
              setSearchQuery('');
            }}
            className="text-black underline font-semibold self-start sm:self-auto"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Package Grid */}
      {filteredPackages.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredPackages.map((car, idx) => (
              <CarCard
                key={car.id}
                car={car}
                index={idx}
                selectedCategory={car.bodyStyle === 'Car Package' ? selectedCategory : null}
                selectedVehicle={selectedVehicle}
                onOpenOperationsModal={(pkg) => {
                  setSelectedPackageForOps(pkg);
                  setIsOpsModalOpen(true);
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-neutral-200 space-y-3">
          <h3 className="font-space font-bold text-lg sm:text-xl text-black">No Packages Matched</h3>
          <p className="text-neutral-500 text-xs font-sans">
            Try selecting a different package category or clearing your search query.
          </p>
          <button
            onClick={() => {
              setSelectedBodyStyle('All');
              setSearchQuery('');
            }}
            className="mt-4 bg-black text-white text-xs font-semibold px-6 py-3 rounded-xl min-h-[44px]"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Interactive 105 Operations Modal */}
      <OperationsModal
        isOpen={isOpsModalOpen}
        onClose={() => setIsOpsModalOpen(false)}
        packageData={selectedPackageForOps}
      />
    </div>
  );
}
