import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { AREA_PAGES } from "@/data/serviceAreas";

export default function ServiceAreaPage() {
  const mainAreas = AREA_PAGES.filter(a => a.slug.endsWith("-fl"));
  const neighborhoods = AREA_PAGES.filter(a => !a.slug.endsWith("-fl"));

  return (
    <div data-testid="service-area-page">
      <Helmet>
        <title>Gutter Cleaning Service Areas Jacksonville FL | All Locations</title>
        <meta name="description" content="Professional gutter cleaning across Jacksonville, FL and surrounding areas. We serve St. Johns, Atlantic Beach, Orange Park, Ponte Vedra, Mandarin, and 15+ more locations. Free estimates." />
      </Helmet>

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
                Jacksonville & Surrounding Cities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mainAreas.map((area, i) => (
                  <Link
                    key={i}
                    to={`/service-areas/${area.slug}`}
                    className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-4 py-3 hover:border-[#1E3A8A] hover:shadow-sm transition-all"
                    data-testid={`area-link-${area.slug}`}
                  >
                    <MapPin className="w-4 h-4 text-[#1E3A8A] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#0F172A]">{area.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 ml-auto" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Jacksonville Neighborhoods
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {neighborhoods.map((area, i) => (
                  <Link
                    key={i}
                    to={`/service-areas/${area.slug}`}
                    className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-4 py-3 hover:border-emerald-500 hover:shadow-sm transition-all"
                    data-testid={`area-link-${area.slug}`}
                  >
                    <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-[#0F172A]">{area.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 ml-auto" />
                  </Link>
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
            <div className="flex flex-wrap gap-2">
              {AREA_PAGES.map((area, i) => (
                <Link key={i} to={`/service-areas/${area.slug}`} className="text-sm text-[#1E3A8A] font-medium hover:underline">
                  {area.name}{i < AREA_PAGES.length - 1 ? "," : ""}
                </Link>
              ))}
            </div>
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
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors" data-testid="areas-cta-call">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
