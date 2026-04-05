import { Link } from "react-router-dom";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreaPage() {
  return (
    <div data-testid="service-area-page">
      {/* Header */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">Where We Serve</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Gutter Cleaning Service Areas in Jacksonville
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            We serve all of Jacksonville, Duval County, and surrounding communities with professional gutter services.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                All of Jacksonville & Duval County
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_AREAS.main.map((area, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-4 py-3" data-testid={`area-${area.replace(/[,\s]/g, "-").toLowerCase()}`}>
                    <MapPin className="w-4 h-4 text-[#1E3A8A] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#0F172A]">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Jacksonville Neighborhoods
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_AREAS.neighborhoods.map((area, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-4 py-3" data-testid={`neighborhood-${area.replace(/[,\s]/g, "-").toLowerCase()}`}>
                    <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-[#0F172A]">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-20 md:py-28 bg-white" data-testid="google-maps-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Find Us in Jacksonville, FL
            </h2>
            <p className="mt-3 text-[#475569]">{BUSINESS.address}</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="Gutter Cleaning Jacksonville Florida Location"
              src="https://maps.google.com/maps?q=3937+Spring+Park+Rd,+Jacksonville,+FL+32207&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-maps-iframe"
            />
          </div>
        </div>
      </section>

      {/* Near Me Section */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-4 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Gutter Cleaning Near Me in Jacksonville
          </h2>
          <p className="text-[#475569] leading-relaxed text-center mb-8">
            When you search for "gutter cleaning near me" in Jacksonville, Florida, you want a company that is reliable, fast, and local. We service every neighborhood in Jacksonville and surrounding areas, providing same-day service for emergencies and flexible scheduling for routine maintenance.
          </p>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Our Service Coverage Includes:
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              {[...SERVICE_AREAS.main, ...SERVICE_AREAS.neighborhoods].join(" | ")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            In Your Area? Let's Get Started
          </h2>
          <p className="text-slate-300 mb-8">We serve all of Jacksonville & surrounding areas. Call for a free estimate today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="areas-cta-quote">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors" data-testid="areas-cta-call">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
