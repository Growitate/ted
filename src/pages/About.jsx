import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Award, Heart } from 'lucide-react';
import { TEAM, SITE_STATS } from '../data/siteContent';

export default function About() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shadow-lg border border-black/5 mx-auto overflow-hidden">
          <img
            src="/images/ted_logo_transparent.png"
            alt="TED - The Educated Detailer Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold block">
          ABOUT TED - THE EDUCATED DETAILER
        </span>
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl text-black leading-tight">
          Engineered for Excellence
        </h1>
        <p className="text-neutral-600 text-base leading-relaxed font-sans">
          North-Eastern India's first premium, science-driven automotive care studio. Founded by Marli Bagra, built on education, transparency, and scientifically proven practices.
        </p>
      </div>

      {/* Hero Image Banner */}
      <div className="relative aspect-[21/9] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-black/10">
        <img
          src="/images/about_studio_workshop.png"
          alt="TED Detailing Studio Workshop"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-8 sm:p-12 text-white">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs text-yellow-400 uppercase tracking-widest font-bold">A House of Pallavion Product</span>
            <h3 className="font-space font-bold text-2xl sm:text-3xl text-white">Maintenance Care in Its Purest Form</h3>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl p-8 border border-black/5 shadow-sm text-center">
        {SITE_STATS.map((s, idx) => (
          <div key={idx} className="space-y-1">
            <p className="font-space font-extrabold text-3xl sm:text-4xl text-black">{s.value}</p>
            <p className="text-xs font-mono text-neutral-500 uppercase">{s.label}</p>
          </div>
        ))}
      </div>

      {/* BRAND STORY & PHILOSOPHY GRID */}
      <div className="space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">WHO WE ARE</span>
          <h2 className="font-space font-extrabold text-3xl text-black mt-1">Our Story & Promise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-space font-bold text-xl text-black">Who We Are</h3>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
              The Educated Detailer is North-Eastern India's first premium, science-driven automotive care studio. Founded by Marli Bagra, a passionate car enthusiast who saw an entire region being failed by outdated, damaging car wash practices—we exist to set a new standard. We are not a franchise or a coating shop; we are a dedicated maintenance care workshop.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-space font-bold text-xl text-black">The Promise</h3>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
              No gimmicks. No shortcuts. No compromise. Just pure, educated, passionate automotive care delivered with the precision of science and the heart of an enthusiast. Your vehicle finally has a home it deserves.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
              <Heart className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-space font-bold text-xl text-black">What We Believe</h3>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
              We believe your car is more than metal and paint—it is an extension of who you are. We believe in transparency over sales tactics, education over upselling, and long-term relationships over one-time transactions. We will never recommend a service your car does not need.
            </p>
          </div>
        </div>
      </div>

      {/* MISSION & VISION DETAILED SECTION */}
      <div className="bg-black text-white rounded-3xl p-8 sm:p-16 space-y-10 border border-neutral-900 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs text-yellow-400 uppercase tracking-widest font-semibold">MISSION & VISION</span>
          <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-white">The Founder's Journey by Marli Bagra</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
          <div className="space-y-4 bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800">
            <h4 className="font-space font-bold text-lg text-white">The Beginning & Decision</h4>
            <p>
              As a car enthusiast and proud owner of both two and four-wheeled machines, I have always deeply cared for my vehicles. Every scratch and swirl mark told me the same story: the people washing our cars simply did not understand them. I decided to turn my passion into a service built for car owners who refuse to settle for less.
            </p>
          </div>

          <div className="space-y-4 bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800">
            <h4 className="font-space font-bold text-lg text-white">The Problem</h4>
            <p>
              I noticed that nowhere in the Northeast existed a premium, skilled, and knowledgeable car care workshop. Traditional methods—harsh chemicals, abrasive cloths, untrained hands—were doing more damage to our cars than naked eyes could see. Paint was being destroyed under the guise of cleaning.
            </p>
          </div>

          <div className="space-y-4 bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800">
            <h4 className="font-space font-bold text-lg text-white">Our Mission</h4>
            <p>
              To revolutionize automotive care in North-Eastern India by replacing harmful traditional methods with scientifically superior techniques. We exist to give every vehicle the love, respect, and educated attention it deserves—proving that true care requires knowledge, not shortcuts.
            </p>
          </div>

          <div className="space-y-4 bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800">
            <h4 className="font-space font-bold text-lg text-white">Our Vision</h4>
            <p>
              To build a movement, not just a business. We envision a future where educated car care becomes the norm across India, starting from the Northeast. Through our upcoming Affiliate & Partnership Programme, built on love and shared passion, we will empower like-minded enthusiasts to carry this revolution forward.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">STUDIO LEADERSHIP</span>
          <h2 className="font-space font-extrabold text-3xl text-black mt-1">Meet The Craftsmen</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {TEAM.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-1">
                <h4 className="font-space font-bold text-lg text-black">{m.name}</h4>
                <p className="font-mono text-xs text-yellow-600 font-semibold">{m.role}</p>
                <p className="text-xs text-neutral-500 font-sans mt-2">{m.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Corporate Entity & Registration */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-sm max-w-3xl mx-auto space-y-3 text-center">
        <span className="font-mono text-xs text-yellow-600 uppercase tracking-widest font-bold block">
          A HOUSE OF PALLAVION PRODUCT
        </span>
        <h3 className="font-space font-extrabold text-xl sm:text-2xl text-black">
          HOUSE OF PALLAVION (OPC) PRIVATE LIMITED
        </h3>
        <p className="text-neutral-600 text-xs sm:text-sm font-mono max-w-xl mx-auto leading-relaxed">
          Official Registered Address:<br />
          C/O NANDESWAR H/No 11, Nayanpur Road Hastinapur, Dispur, Gmc, Kamrup- 781005, Assam
        </p>
      </div>
    </div>
  );
}
