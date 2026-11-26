import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { CATEGORY_PRICING } from '../data/cars';

export default function CarCard({ car, index = 0, selectedCategory, selectedVehicle, onOpenOperationsModal }) {
  // Check if there is a category-specific price for this package
  const categoryPrice = selectedCategory && CATEGORY_PRICING[selectedCategory]?.[car.id];
  const displayPrice = categoryPrice || car.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Badge Overlay */}
        {car.badge && (
          <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm border border-neutral-800">
            {car.badge}
          </div>
        )}

        {/* Dynamic Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-black font-space font-extrabold text-xs sm:text-sm px-3 py-1.5 rounded-xl shadow-md border border-black/5">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase text-neutral-500 block font-normal leading-none mb-0.5">
            {categoryPrice ? (selectedCategory || 'Applicable Price') : 'Starting At'}
          </span>
          ₹{displayPrice.toLocaleString()}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span>{car.bodyStyle}</span>
            <span className="font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md text-[10px]">
              {car.operationsCount ? `${car.operationsCount} SOP Steps` : (categoryPrice ? `${selectedCategory}` : car.drivetrain)}
            </span>
          </div>

          <h3 className="font-space font-bold text-lg sm:text-xl text-black group-hover:text-neutral-700 transition-colors">
            <Link to={`/inventory/${car.slug}`} className="hover:underline flex items-center justify-between w-full">
              <span>{car.name}</span>
              <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity text-black shrink-0 ml-1" />
            </Link>
          </h3>

          {/* Clean, readable narrative paragraph */}
          <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-sans mt-2">
            {car.description}
          </p>
        </div>

        {/* Action Section */}
        <div className="pt-3 border-t border-neutral-100 space-y-2">
          <Link
            to={`/inventory/${car.slug}`}
            className="w-full text-center bg-black hover:bg-neutral-800 text-white font-semibold text-xs py-3 rounded-xl transition-all block shadow-sm active:scale-98 min-h-[42px] flex items-center justify-center gap-1.5 group/btn"
          >
            <span>View Full Breakdown & Inclusions</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>

          {car.operationsCount && onOpenOperationsModal && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onOpenOperationsModal(car);
              }}
              className="w-full text-center text-[11px] font-mono text-neutral-500 hover:text-black transition-colors flex items-center justify-center gap-1 py-0.5"
            >
              <span>Explore all {car.operationsCount} SOP checklist operations</span>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
