import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { CARS_DATA } from '../data/cars';

export default function TestDriveModal({ isOpen, onClose }) {
  const [selectedPackage, setSelectedPackage] = useState(CARS_DATA[0].id);
  const [vehicleModel, setVehicleModel] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedPkgObj = CARS_DATA.find((c) => c.id === selectedPackage);
    const packageName = selectedPkgObj?.name || selectedPackage;

    const message = `*NEW INSPECTION BOOKING — TED STUDIO*

• *Package:* ${packageName}
• *Vehicle:* ${vehicleModel}
• *Preferred Date:* ${date}
• *Time Slot:* ${time}

*Customer Details:*
• *Name:* ${name}
• *Phone:* ${phone}
• *Email:* ${email || 'Not provided'}

_Sent via theeducateddetailer.com_`;

    const url = `https://wa.me/919181030202?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);

    // Trigger WhatsApp in a new tab/app directly from the user click gesture
    window.open(url, '_blank');
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-5 sm:p-8 shadow-2xl z-10 border border-neutral-200 overflow-hidden max-h-[92dvh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-black p-2 rounded-full hover:bg-neutral-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 sm:py-10 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space font-bold text-xl sm:text-2xl text-black">Opening WhatsApp...</h3>
              <p className="text-neutral-600 text-xs sm:text-sm max-w-sm font-sans leading-relaxed">
                Your inspection booking details have been prepared for WhatsApp (+91 9181030202). Press <strong>Send</strong> in WhatsApp to connect directly with TED Studio.
              </p>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-98 mt-1"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs font-mono text-neutral-500 hover:text-black underline pt-2"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-3 pb-2.5 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-neutral-200 shadow-xs shrink-0 overflow-hidden">
                  <img
                    src="/images/ted_logo_transparent.png"
                    alt="TED Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest font-semibold block leading-none">
                    TED VEHICLE CARE
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">Official Studio Booking</span>
                </div>
              </div>
              <h3 className="font-space font-bold text-lg sm:text-2xl text-black mb-1 pr-6">
                Book an inspection , consult & get the work done
              </h3>
              <p className="text-xs text-neutral-500 mb-5 font-sans leading-relaxed">
                Personalized vehicle evaluation based on paint condition and TDS 0-4 wash standards.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Select Package */}
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                    Select Target Detailing Package
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-xs font-semibold text-black focus:outline-none focus:border-black transition-colors min-h-[44px]"
                  >
                    {CARS_DATA.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} ({pkg.bodyStyle} - Starting At ₹{pkg.price.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vehicle Model */}
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BMW M3 / Ducati Panigale"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors min-h-[44px]"
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Preferred Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors min-h-[44px]"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors min-h-[44px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9181030202"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 border border-neutral-800 min-h-[48px] active:scale-98"
                >
                  <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="text-center">Book an inspection , consult & get the work done</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
