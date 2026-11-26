import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  Search,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { CARS_DATA, CATEGORY_PRICING, VEHICLE_CATEGORIES } from '../data/cars';
import { PACKAGE_STAGES_MAP } from '../data/detailingOperations.js';
import FinancingCalculator from '../components/FinancingCalculator';
import OperationsModal from '../components/OperationsModal';

export default function CarDetail({ onOpenTestDrive }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const car = CARS_DATA.find((c) => c.slug === slug) || CARS_DATA[0];

  const [activeImage, setActiveImage] = useState(car.image);
  const [selectedCategory, setSelectedCategory] = useState('Luxury vehicle');
  const [selectedMotoSegment, setSelectedMotoSegment] = useState('Normal Bikes / Scooty');
  const [expandedStages, setExpandedStages] = useState({ 'stage-1': true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Applicable Category or Segment Price
  let applicablePrice = car.price;
  if (car.bodyStyle === 'Car Package') {
    applicablePrice = CATEGORY_PRICING[selectedCategory]?.[car.id] || car.price;
  } else if (car.bodyStyle === 'Motorcycle Package') {
    if (car.id === 'freshman-moto-package') {
      applicablePrice = selectedMotoSegment === 'Normal Bikes / Scooty' ? 359 : 459;
    } else if (car.id === 'doctorate-moto-package') {
      applicablePrice = selectedMotoSegment === 'Normal Bikes / Scooty' ? 1299 : 1899;
    }
  }

  // Stages for structured workflow view
  const stages = PACKAGE_STAGES_MAP[car.id] || [];
  const operationsCount = car.operationsCount || car.operations?.length || 0;
  const [showChecklists, setShowChecklists] = useState({});

  const toggleChecklist = (stageId) => {
    setShowChecklists((prev) => ({
      ...prev,
      [stageId]: !prev[stageId]
    }));
  };

  const toggleStage = (stageId) => {
    setExpandedStages((prev) => ({
      ...prev,
      [stageId]: !prev[stageId]
    }));
  };

  const toggleAllStages = () => {
    const allOpen = stages.every((s) => expandedStages[s.id]);
    const newState = {};
    stages.forEach((s) => {
      newState[s.id] = !allOpen;
    });
    setExpandedStages(newState);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Detailing Packages</span>
      </button>

      {/* Main Grid: Gallery & Summary Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[16/10] bg-neutral-900 rounded-3xl overflow-hidden border border-black/10 shadow-lg">
            <img
              src={activeImage}
              alt={car.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          {car.gallery && car.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {car.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-24 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImage === imgUrl
                      ? 'border-black shadow-md scale-105'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Summary Card */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="bg-black text-white px-3 py-1 rounded-full uppercase text-[11px] font-bold">
                {car.badge || car.bodyStyle}
              </span>
              <span className="text-neutral-500 font-semibold">{car.drivetrain}</span>
            </div>
            <h1 className="font-space font-extrabold text-3xl sm:text-4xl text-black">
              {car.name}
            </h1>
            <div className="pt-2 flex items-baseline justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase block">
                  {car.bodyStyle === 'Car Package' ? `${selectedCategory} Price` : 'Starting At'}
                </span>
                <p className="font-space font-extrabold text-3xl sm:text-4xl text-black">
                  ₹{applicablePrice.toLocaleString()}
                </p>
              </div>
              {operationsCount > 0 && (
                <span className="bg-yellow-400 text-black font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
                  {operationsCount} Operations
                </span>
              )}
            </div>
          </div>

          {/* Category Switcher for Car Packages */}
          {car.bodyStyle === 'Car Package' && (
            <div className="bg-neutral-100 p-3.5 rounded-2xl space-y-2">
              <label className="text-[11px] font-mono uppercase text-neutral-600 font-bold block">
                Select Your Vehicle Category:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {VEHICLE_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2 py-1.5 rounded-xl text-[11px] font-semibold transition-all truncate text-center ${
                      selectedCategory === cat
                        ? 'bg-black text-white shadow-sm font-bold'
                        : 'bg-white text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Segment Switcher for Two-Wheeler Packages */}
          {car.bodyStyle === 'Motorcycle Package' && (
            <div className="bg-neutral-100 p-3.5 rounded-2xl space-y-2">
              <label className="text-[11px] font-mono uppercase text-neutral-600 font-bold block">
                Select Two-Wheeler Segment:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Normal Bikes / Scooty', 'Premium Segment'].map((seg) => (
                  <button
                    key={seg}
                    onClick={() => setSelectedMotoSegment(seg)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      selectedMotoSegment === seg
                        ? 'bg-black text-white shadow-sm font-bold'
                        : 'bg-white text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {seg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Package Scope & TED Quality Standards */}
          <div className="p-5 bg-white rounded-2xl border border-black/5 shadow-sm space-y-3">
            <h3 className="font-space font-bold text-xs uppercase tracking-wider text-neutral-500">
              Package Scope & Execution
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-sans">
              {car.description}
            </p>
            <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono text-neutral-700 border-t border-neutral-100 pt-3">
              <div><span className="text-neutral-400 block text-[10px]">WATER PURITY</span> 0–4 TDS Deionized</div>
              <div><span className="text-neutral-400 block text-[10px]">CHEMISTRY</span> pH-Neutral & Safe</div>
              <div><span className="text-neutral-400 block text-[10px]">SOP PROTOCOL</span> {operationsCount} Documented Steps</div>
              <div><span className="text-neutral-400 block text-[10px]">HONEST CARE</span> Zero Forced Upsells</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onOpenTestDrive}
              className="w-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-neutral-800"
            >
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              <span>Book an Inspection & Consult</span>
            </button>
            <Link
              to="/contact"
              className="w-full bg-neutral-100 hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors block text-center"
            >
              Contact Studio Concierge
            </Link>
          </div>
        </div>
      </div>

      {/* SIMPLIFIED, CLEAN WORKFLOW STAGES (ACCORDION SYSTEM) */}
      {stages.length > 0 && (
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-sm space-y-6">
          {/* Clean Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                TREATMENT WORKFLOW & STAGES
              </span>
              <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-black mt-1">
                {operationsCount > 25 ? '5-Stage Detailing Workflow' : 'Included Service Stages'}
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm font-sans mt-0.5">
                All {operationsCount} technical procedures structured into {stages.length} clear, manageable phases.
              </p>
            </div>

            {/* Actions: Toggle All & Search Modal Button */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={toggleAllStages}
                className="text-xs font-mono font-semibold px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
              >
                {stages.every((s) => expandedStages[s.id]) ? 'Collapse All' : 'Expand All'}
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 py-2 rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <Search className="w-3.5 h-3.5 text-yellow-400" />
                <span>Search Step #</span>
              </button>
            </div>
          </div>

          {/* Structured Stage Accordion Cards */}
          <div className="space-y-3">
            {stages.map((stage) => {
              const isOpen = !!expandedStages[stage.id];

              return (
                <div
                  key={stage.id}
                  className="border border-neutral-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs"
                >
                  {/* Stage Header */}
                  <button
                    type="button"
                    onClick={() => toggleStage(stage.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-neutral-50/70 transition-colors"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-space font-bold text-sm sm:text-base text-black">
                          {stage.title}
                        </h3>
                        <span className="font-mono text-[11px] font-bold text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                          {stage.count} Steps
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                        {stage.summary}
                      </p>
                    </div>

                    <div className="p-2 rounded-xl bg-neutral-100 text-neutral-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Stage Content: Rich Narrative Paragraph */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-neutral-100 bg-neutral-50/60 p-4 sm:p-6 space-y-4"
                      >
                        {/* Flowing Narrative Paragraph Box */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/90 shadow-xs space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-black" />
                              Technical Execution & Scope
                            </span>
                            <span className="text-[10px] font-mono text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-full font-semibold">
                              {stage.count} Documented Procedures
                            </span>
                          </div>
                          <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed font-sans pt-1">
                            {stage.narrative || stage.summary}
                          </p>
                        </div>

                        {/* Optional Toggle for Exact Checklist */}
                        <div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleChecklist(stage.id);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-500 hover:text-black transition-colors py-1"
                          >
                            <span>{showChecklists[stage.id] ? 'Hide' : 'View'} raw SOP numbering checklist ({stage.count} steps)</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showChecklists[stage.id] ? 'rotate-180' : ''}`} />
                          </button>

                          {showChecklists[stage.id] && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 pt-3 border-t border-neutral-200">
                              {stage.steps.map((st) => (
                                <div
                                  key={st.step}
                                  className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-neutral-200 text-xs"
                                >
                                  <span className="font-mono text-[10px] font-bold text-black bg-neutral-100 px-1.5 py-0.5 rounded shrink-0">
                                    #{String(st.step).padStart(2, '0')}
                                  </span>
                                  <span className="text-neutral-700 font-sans truncate">{st.title}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Simple Clean Notice */}
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80 flex items-start gap-3 text-xs text-neutral-600 font-sans">
            <Info className="w-4 h-4 text-black shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>SOP Standards:</strong> Inclusions are adjusted for vehicle condition, safe access, and surface materials. Paint correction and heavy contamination removal are quoted separately following technical inspection.
            </p>
          </div>
        </section>
      )}

      {/* INVESTMENT ESTIMATOR */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">
            ESTIMATE YOUR CARE PLAN
          </span>
          <h2 className="font-space font-extrabold text-3xl text-black">
            Loyalty & Maintenance Estimator
          </h2>
        </div>
        <FinancingCalculator initialPrice={applicablePrice} onOpenBooking={onOpenTestDrive} />
      </section>

      {/* Searchable 105 Operations Modal */}
      <OperationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageData={car}
      />
    </div>
  );
}
