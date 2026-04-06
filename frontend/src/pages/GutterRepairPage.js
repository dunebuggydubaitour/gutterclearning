import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle, Shield, Star, AlertTriangle, Home as HomeIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BUSINESS, IMAGES, SUB_SERVICES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const RelatedServices = ({ current }) => (
  <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Other Gutter Services in Jacksonville, FL</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SUB_SERVICES.filter(s => s.to !== current).map((s, i) => (
          <Link key={i} to={s.to} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <img src={s.image} alt={`${s.label} Jacksonville FL`} className="w-full h-28 object-cover rounded-lg mb-3" />
            <span className="text-sm font-semibold text-[#0F172A]">{s.label}</span>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
        <Link to="/" className="text-[#1E3A8A] font-medium hover:underline flex items-center gap-1"><HomeIcon className="w-3.5 h-3.5" /> Home</Link>
        <Link to="/services" className="text-[#1E3A8A] font-medium hover:underline">All Services</Link>
        <Link to="/cost-guide" className="text-[#1E3A8A] font-medium hover:underline">Cost Guide</Link>
        <Link to="/about" className="text-[#1E3A8A] font-medium hover:underline">About Us</Link>
      </div>
    </div>
  </section>
);

export default function GutterRepairPage() {
  return (
    <div data-testid="gutter-repair-page">
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#475569]">
          <Link to="/" className="hover:text-[#1E3A8A]">Home</Link> / <Link to="/services" className="hover:text-[#1E3A8A]">Services</Link> / <span className="text-[#0F172A] font-medium">Gutter Repair</span>
        </div>
      </div>

      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Shield className="w-3 h-3" /> Licensed & Insured</span>
                <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Star className="w-3 h-3" /> Same-Day Service</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Gutter Repair Service Jacksonville, FL
              </h1>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                Fast, reliable gutter repair for leaks, sagging, storm damage, and more. Protect your home from water damage today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="repair-hero-quote">Get a Free Quote <ArrowRight className="w-5 h-5" /></Link>
                <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /> {BUSINESS.phone}</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={IMAGES.repair} alt="Gutter Repair Jacksonville FL" className="rounded-2xl shadow-2xl w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Top Gutter Repair Company in Jacksonville, FL</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>Gutters play a critical role in protecting homes from water damage, especially in a rainy, storm-prone area like Jacksonville, Florida. When gutters start leaking, sagging, or pulling away from the roof, rainwater can overflow and damage your siding, foundation, and landscaping.</p>
            <p>Our professional <Link to="/services" className="text-[#1E3A8A] font-semibold hover:underline">gutter repair services</Link> in Jacksonville, FL are designed to quickly fix problems and restore proper water flow, helping homeowners avoid costly repairs. We handle all types of gutter issues, including leaking joints, clogged or overflowing gutters, rusted sections, improper slope, and storm-damaged systems.</p>
            <p>Homeowners trust our local team because we understand the challenges Florida weather brings. We offer prompt service, honest assessments, and long-lasting repairs. When you need dependable gutter repair done right, our experts are ready to help. If damage is too severe, we also offer <Link to="/services/gutter-replacement" className="text-[#1E3A8A] font-semibold hover:underline">gutter replacement services</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Repair Services Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Gutter Leak Repair", "Sagging Gutter Repair", "Gutter Hole & Crack Repair", "Rusted Gutter Repair", "Clogged Gutter Repair", "Leaking Joint Repair", "Gutter Slope Adjustment", "Gutter Reattachment", "Storm Damage Gutter Repair"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-5 py-4">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-[#0F172A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Signs Your Gutters Need Repair</h2>
          <p className="text-[#475569] leading-relaxed mb-6">We often see small gutter problems turn into expensive home repairs because they were ignored too long. Here are the most common warning signs homeowners should never ignore:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Water overflowing from gutters", "Sagging or pulling away from the roof", "Cracks, holes, or rust spots", "Leaking seams and corners", "Peeling paint or water stains on siding", "Standing water in gutters", "Soil erosion around your home", "Basement or foundation moisture issues"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg px-5 py-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-[#0F172A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Importance */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Importance of Regular Gutter Maintenance</h2>
          <p className="text-[#475569] leading-relaxed mb-4">Regular gutter maintenance and timely repairs protect your home from costly damage. Routine inspections, <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">gutter cleaning</Link>, and minor repairs help catch problems early before they become expensive.</p>
          <p className="text-[#475569] leading-relaxed">Homeowners who invest in preventive gutter care save significantly on long-term repair costs. Don't wait until water damage appears inside your home. Check our <Link to="/cost-guide" className="text-[#1E3A8A] font-semibold hover:underline">cost guide</Link> for repair pricing details.</p>
        </div>
      </section>

      <RelatedServices current="/services/gutter-repair" />

      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Need Gutter Repair in Jacksonville?</h2>
              <p className="text-slate-300 mb-6">Get a free estimate for professional gutter repair. Same-day emergency service available.</p>
              <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 text-white text-lg font-bold"><Phone className="w-5 h-5" /> {BUSINESS.phone}</a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Get Your Free Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
