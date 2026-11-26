import React, { useState, useMemo } from 'react';
import { X, Search, CheckCircle2, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { DOCTORATE_ALL_OPERATIONS } from '../data/detailingOperations';

export default function OperationsModal({ isOpen, onClose, packageData }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const operations = packageData?.operations || DOCTORATE_ALL_OPERATIONS;
  const packageName = packageData?.name || 'Doctorate';
  const totalCount = operations.length;

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    operations.forEach((op) => {
      if (op.category && !cats.includes(op.category)) {
        cats.push(op.category);
      }
    });
    return cats;
  }, [operations]);

  const filteredOps = useMemo(() => {
    return operations.filter((op) => {
      const titleMatch = (typeof op === 'string' ? op : op.title)
        .toLowerCase()
        .includes(search.toLowerCase());
      const stepMatch = op.step ? String(op.step).includes(search) : false;
      const catMatch =
        selectedCategory === 'All' || op.category === selectedCategory;
      return (titleMatch || stepMatch) && catMatch;
    });
  }, [operations, search, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="bg-white text-black w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-neutral-100 flex items-start justify-between gap-4 bg-neutral-900 text-white">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-yellow-400 text-black text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                105-Step Framework
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                TED Official Detailing SOP
              </span>
            </div>
            <h3 className="font-space font-extrabold text-xl sm:text-2xl text-white">
              {packageName} — Service Operations
            </h3>
            <p className="text-neutral-400 text-xs font-sans mt-0.5">
              Comprehensive list of all {totalCount} technical detailing operations and quality-control standards.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 bg-neutral-50/80 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search operations by step number or keyword (e.g. 'air-vent', 'badges', 'piano-black', '49')..."
              className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-black"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-black text-white font-bold'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Operations List Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-neutral-100 space-y-1">
          {filteredOps.length === 0 ? (
            <div className="text-center py-12 text-neutral-400 space-y-2">
              <Search className="w-8 h-8 mx-auto opacity-50" />
              <p className="text-sm font-mono">No operations match your search "{search}".</p>
            </div>
          ) : (
            filteredOps.map((op, idx) => {
              const stepNumber = op.step || idx + 1;
              const title = typeof op === 'string' ? op : op.title;
              const category = op.category;

              return (
                <div
                  key={stepNumber}
                  className="py-3 px-3 rounded-xl hover:bg-neutral-50 transition-colors flex items-start gap-3.5 group"
                >
                  <span className="font-mono text-xs font-bold text-neutral-900 bg-neutral-100 group-hover:bg-black group-hover:text-yellow-400 px-2.5 py-1 rounded-md shrink-0 transition-colors">
                    #{String(stepNumber).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs sm:text-sm font-medium text-neutral-900 font-sans leading-snug">
                        {title}
                      </span>
                      {category && (
                        <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                          {category}
                        </span>
                      )}
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-neutral-300 group-hover:text-green-600 shrink-0 mt-0.5 transition-colors" />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer Notes */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
          <span>
            Showing {filteredOps.length} of {totalCount} operations from TED's official framework.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-black text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Close Checklist
          </button>
        </div>
      </div>
    </div>
  );
}
