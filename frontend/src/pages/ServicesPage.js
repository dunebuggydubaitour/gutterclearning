import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, Droplets, Shield, Wrench, Home } from "lucide-react";
import { BUSINESS, SERVICES, IMAGES, PROCESS_STEPS } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div data-testid="services-page">
      {/* Page Header */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">What We Offer</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Gutter Cleaning Services in Jacksonville, FL
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Complete residential and commercial gutter services. Licensed, insured, and trusted by 5,000+ Jacksonville homeowners.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="service-card bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm" data-testid={`services-detail-${service.slug}`}>
                <div className="h-56 overflow-hidden">
                  <img src={service.image} alt={`${service.title} Jacksonville Florida`} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                    {service.title}
                  </h2>
                  <p className="text-[#475569] leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:gap-2.5 transition-all"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Residential & Commercial Gutter Cleaning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mb-5">
                <Home className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Residential Gutter Cleaning
              </h3>
              <p className="text-[#475569] leading-relaxed mb-4">
                Our residential gutter cleaning service protects your home from Florida's heavy rains. We handle single-story, 2-story, and multi-level homes with safe, professional methods.
              </p>
              <ul className="space-y-2">
                {["Single & multi-story homes", "Downspout cleaning included", "Before & after inspection", "Safe, ladder-free methods available", "Same-day scheduling"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#475569]">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6 text-[#1E3A8A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Commercial Gutter Cleaning
              </h3>
              <p className="text-[#475569] leading-relaxed mb-4">
                Commercial properties in Jacksonville need reliable gutter maintenance to avoid costly water damage. We service offices, retail, warehouses, and multi-unit properties.
              </p>
              <ul className="space-y-2">
                {["Office buildings & retail", "Multi-unit apartment complexes", "Warehouses & industrial", "Scheduled maintenance plans", "Emergency storm response"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#475569]">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#1E3A8A] mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Our Superior 6-Step Cleaning Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                <div className="step-number text-4xl font-extrabold text-[#1E3A8A]/15 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Need Gutter Service in Jacksonville?
          </h2>
          <p className="text-slate-300 mb-8">Call now for a free estimate or schedule online. New customers get 10% off!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="services-cta-quote">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors" data-testid="services-cta-call">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
