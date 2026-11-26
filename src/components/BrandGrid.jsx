import React from 'react';
import { motion } from 'framer-motion';

export default function BrandGrid() {
  const standards = [
    'KOCH CHEMIE (GERMANY)',
    'VONIXX (BRAZIL)',
    '0 - 4 TDS DE-IONIZED WATER',
    'pH NEUTRAL SHAMPOO',
    'pH TARGETED APPLICATORS',
    'NORTH-EAST INDIA FIRST',
    'ZERO GIMMICK UPSELLS',
    'PURE CRAFTSMANSHIP'
  ];

  return (
    <div className="w-full bg-black py-8 overflow-hidden border-y border-neutral-800 my-12">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
          OUR TECHNICAL STANDARDS & GLOBAL DETAILING CHEMISTRY
        </span>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex items-center gap-12 sm:gap-20 shrink-0 font-space font-extrabold text-sm sm:text-base text-neutral-300 tracking-wider uppercase"
        >
          {standards.concat(standards).map((item, idx) => (
            <div key={idx} className="flex items-center gap-12 sm:gap-20">
              <span className="hover:text-yellow-400 transition-colors cursor-default select-none">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
