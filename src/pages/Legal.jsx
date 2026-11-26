import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Legal() {
  const { type = 'privacy' } = useParams();

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer Policy',
    refund: 'Refund & Cancellation Policy'
  };

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="space-y-3 border-b border-neutral-200 pb-8">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">TED LEGAL DOCUMENTATION</span>
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl text-black">
          {titles[type] || 'Privacy Policy'}
        </h1>
        <p className="text-xs font-mono text-neutral-400">
          TED - THE EDUCATED DETAILER • A House of Pallavion Product<br />
          HOUSE OF PALLAVION (OPC) PRIVATE LIMITED • Effective Date: January 1, 2026
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'privacy', label: 'Privacy Policy' },
          { key: 'terms', label: 'Terms & Conditions' },
          { key: 'disclaimer', label: 'Disclaimer' },
          { key: 'refund', label: 'Refund Policy' }
        ].map((item) => (
          <Link
            key={item.key}
            to={`/legal/${item.key}`}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              type === item.key
                ? 'bg-black text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Content Container */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm space-y-6 text-sm text-neutral-700 leading-relaxed font-sans">
        {type === 'privacy' && (
          <>
            <h3 className="font-space font-bold text-xl text-black">1. Overview & Commitment to Transparency</h3>
            <p>
              At TED - THE EDUCATED DETAILER ("PREMIUM AUTOMOTIVE CARE"), we respect your privacy and value client trust. This Privacy Policy details how we collect, use, and protect your personal information when booking vehicle inspections, consulting on detailing packages, or interacting with our digital platform.
            </p>

            <h3 className="font-space font-bold text-xl text-black">2. Information We Collect</h3>
            <p>
              We collect details required to assign the appropriate detailing package (Freshman, Scholar, Graduate, Doctorate), including vehicle make/model, paint condition notes, owner contact details (Name, Phone/WhatsApp number, Email), and appointment schedule preferences.
            </p>

            <h3 className="font-space font-bold text-xl text-black">3. Data Usage & Zero Third-Party Selling</h3>
            <p>
              Your contact information is strictly utilized to coordinate vehicle inspections, deliver service notifications, and communicate loyalty benefits. We never sell, rent, or trade client information to third-party telemarketers or external advertisers.
            </p>

            <h3 className="font-space font-bold text-xl text-black">4. Corporate Entity & Compliance Desk</h3>
            <p>
              TED is operated by <span className="font-bold text-black">HOUSE OF PALLAVION (OPC) PRIVATE LIMITED</span>.<br />
              <span className="font-semibold text-black">Registered Address:</span> <span className="font-mono text-xs">C/O NANDESWAR H/No 11, Nayanpur Road Hastinapur, Dispur, Gmc, Kamrup- 781005, Assam</span>.<br />
              For questions regarding our terms or privacy practices, contact us directly at <span className="font-mono font-bold text-black">contact@theeducateddetailer.com</span> or call/WhatsApp <span className="font-mono font-bold text-black">+91 9181030202</span>.
            </p>
          </>
        )}

        {type === 'terms' && (
          <>
            <h3 className="font-space font-bold text-xl text-black">1. Acceptance of Terms</h3>
            <p>
              By accessing the website of TED - THE EDUCATED DETAILER or booking a vehicle inspection, you agree to comply with these Terms & Conditions. Our detailing services are governed by scientifically backed standards, including 0-4 TDS de-ionized water washing and pH neutral chemical applications.
            </p>

            <h3 className="font-space font-bold text-xl text-black">2. Inspection & Service Assignment</h3>
            <p>
              Every vehicle undergoes a detailed initial paint inspection before service execution. Package recommendations are based on actual paint condition, contamination depth, and owner goals. TED reserves the right to decline applying abrasive correction on paint coats with unsafe thickness readings.
            </p>

            <h3 className="font-space font-bold text-xl text-black">3. Client Responsibilities</h3>
            <p>
              Vehicle owners are responsible for declaring pre-existing paint defects, previous low-quality clear coat repaints, or structural damage prior to detailing treatment.
            </p>
          </>
        )}

        {type === 'disclaimer' && (
          <>
            <h3 className="font-space font-bold text-xl text-black">1. Technical Care Disclaimer</h3>
            <p>
              TED - THE EDUCATED DETAILER operates on scientific principles of automotive care. While multi-stage paint correction dramatically improves paint clarity (removes up to 90%+ of swirl marks), deep scratches extending past the clear coat into the primer or metal base cannot be safely removed through polishing alone.
            </p>

            <h3 className="font-space font-bold text-xl text-black">2. No Unnecessary Gimmicks</h3>
            <p>
              Unlike conventional detailing studios pushing high-margin add-ons, TED recommends only services that genuinely benefit your vehicle. Results depend on vehicle age, paint hardness, and maintenance history.
            </p>
          </>
        )}

        {type === 'refund' && (
          <>
            <h3 className="font-space font-bold text-xl text-black">1. Refund & Cancellation Policy</h3>
            <p>
              We strive for complete client satisfaction through craftsmanship and honest communication. If you need to reschedule or cancel your booked vehicle inspection appointment, please notify us at least 24 hours in advance via WhatsApp or phone at <span className="font-mono font-bold text-black">+91 9181030202</span>.
            </p>

            <h3 className="font-space font-bold text-xl text-black">2. Service Quality Assurance</h3>
            <p>
              Upon completion of any detailing package, a joint inspection is performed with the vehicle owner. Any surface concerns brought to our attention during key handoff will be addressed immediately to ensure our technical standards are fulfilled.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
