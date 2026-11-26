import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Book Vehicle Inspection',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*NEW INQUIRY — TED STUDIO*

• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email || 'Not provided'}
• *Subject:* ${formData.subject}

*Vehicle Details & Message:*
${formData.message}

_Sent via theeducateddetailer.com_`;

    const url = `https://wa.me/919181030202?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);

    // Trigger WhatsApp in a new tab/app
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">STUDIO CONCIERGE</span>
        <h1 className="font-space font-extrabold text-3xl sm:text-5xl text-black">Contact TED Studio</h1>
        <p className="text-neutral-600 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">
          Connect directly with Marli Bagra and our technical care team for vehicle inspection, consultation, or detailing package booking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Contact Details & Studio Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm space-y-6">
            <div className="flex items-center gap-3.5 pb-4 border-b border-neutral-100">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 border border-neutral-200 shadow-xs shrink-0 overflow-hidden">
                <img
                  src="/images/ted_logo_transparent.png"
                  alt="TED Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-space font-bold text-xl text-black leading-tight">North-Eastern India Workshop</h3>
                <p className="font-mono text-[10px] text-yellow-600 uppercase tracking-wider mt-0.5 font-bold">A House of Pallavion Product</p>
              </div>
            </div>
            
            <div className="space-y-4 text-xs font-mono text-neutral-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-black text-sm">Official Studio Address</p>
                  <p className="font-bold text-black text-xs mt-1">HOUSE OF PALLAVION (OPC) PRIVATE LIMITED</p>
                  <p className="text-neutral-600 mt-0.5 leading-relaxed text-xs">
                    C/O NANDESWAR H/No 11, Nayanpur Road Hastinapur, Dispur, Gmc, Kamrup- 781005, Assam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-black text-sm">Direct Phone / WhatsApp</p>
                  <a href="tel:+919181030202" className="text-neutral-500 hover:text-black mt-0.5 block underline font-bold">
                    +91 9181030202
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-black text-sm">Studio Email</p>
                  <a href="mailto:contact@theeducateddetailer.com" className="text-neutral-500 hover:text-black mt-0.5 block underline font-bold">
                    contact@theeducateddetailer.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-black text-sm">Inspection Hours</p>
                  <p className="text-neutral-500 mt-0.5">Monday – Saturday: 9:30 AM – 6:30 PM</p>
                  <p className="text-neutral-500">Sunday: Closed (By Prior Appointment)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xl">
            {submitted ? (
              <div className="py-12 sm:py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-space font-bold text-xl sm:text-2xl text-black">Opening WhatsApp...</h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto font-sans leading-relaxed">
                  Your inquiry message has been compiled for WhatsApp (+91 9181030202). Press <strong>Send</strong> in WhatsApp to connect directly with TED Studio.
                </p>
                {whatsappUrl && (
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Directly</span>
                    </a>
                  </div>
                )}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Book Vehicle Inspection', message: '' });
                    }}
                    className="text-xs font-mono text-neutral-500 hover:text-black underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="font-space font-bold text-xl sm:text-2xl text-black mb-2 sm:mb-4">Send an Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-sm text-black focus:outline-none focus:border-black min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-sm text-black focus:outline-none focus:border-black min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9181030202"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-xs text-black focus:outline-none focus:border-black min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-xs font-semibold text-black focus:outline-none focus:border-black min-h-[44px]"
                    >
                      <option value="Book Vehicle Inspection">Book Vehicle Inspection</option>
                      <option value="Detailing Package Advice">Detailing Package Advice</option>
                      <option value="Loyalty Customer Inquiry">Loyalty Customer Inquiry</option>
                      <option value="Affiliate & Partnership Program">Affiliate & Partnership Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">Vehicle Details & Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your vehicle model, paint condition, and what you expect from TED..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-sm text-black focus:outline-none focus:border-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-neutral-800 min-h-[48px] active:scale-98"
                >
                  <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="text-center">Book an inspection , consult & get the work done</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
