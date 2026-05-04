import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, CheckCircle, Shield, Star, Home as HomeIcon } from "lucide-react";
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
        <Link to="/" className="text-[#1E3A8A] font-medium hover:underline flex items-center gap-1"><HomeIcon className="w-3.5 h-3.5" /> Gutter Cleaning Jacksonville FL</Link>
        <Link to="/services" className="text-[#1E3A8A] font-medium hover:underline">All Services</Link>
        <Link to="/cost-guide" className="text-[#1E3A8A] font-medium hover:underline">Cost Guide</Link>
        <Link to="/gallery" className="text-[#1E3A8A] font-medium hover:underline">Gallery</Link>
      </div>
    </div>
  </section>
);

export default function GutterGuardsPage() {
  return (
    <div data-testid="gutter-guards-page">
      <Helmet>
        <title>Gutter Guards Jacksonville FL | Leaf Protection | Reduce Maintenance</title>
        <meta name="description" content="Professional gutter guard installation in Jacksonville, FL. Micro-mesh, screen, and foam guards. Block leaves and debris. Licensed & insured. Free estimates." />
      </Helmet>
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#475569]">
          <Link to="/" className="hover:text-[#1E3A8A]">Home</Link> / <Link to="/services" className="hover:text-[#1E3A8A]">Services</Link> / <span className="text-[#0F172A] font-medium">Gutter Guards</span>
        </div>
      </div>

      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Shield className="w-3 h-3" /> Licensed & Insured</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Guards Installation Jacksonville, FL</h1>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">High-quality gutter guard installation to reduce debris buildup, minimize maintenance, and keep your gutters flowing freely year-round.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="guards-hero-quote">Get a Free Quote <ArrowRight className="w-5 h-5" /></Link>
                <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /> {BUSINESS.phone}</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={IMAGES.guards} alt="Gutter Guards Jacksonville FL" className="rounded-2xl shadow-2xl w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Professional Gutter Guard Services in Jacksonville, FL</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>Tired of constantly <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">cleaning your gutters</Link>? Gutter guards are the solution. At Gutter Cleaning Jacksonville FL, we install high-quality gutter protection systems that block leaves, pine needles, and debris from clogging your gutters while allowing rainwater to flow freely.</p>
            <p>Jacksonville homeowners deal with heavy rainfall, mature oak trees, and storm debris that fill gutters quickly. Professional gutter guards dramatically reduce the frequency of <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">gutter cleaning</Link> needed and help prevent overflow, water damage, and pest infestations.</p>
            <p>We offer several types of gutter guard systems to fit different budgets, gutter styles, and debris conditions. Our trained technicians assess your property and recommend the best gutter protection for your specific situation.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Our Gutter Guard Services Include</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Mesh Gutter Guard Installation", "Micro-Mesh Gutter Guards", "Reverse Curve Gutter Guards", "Brush Gutter Guards", "Foam Gutter Guard Installation", "Gutter Guard Cleaning & Maintenance", "Gutter Guard Repair & Replacement", "Custom Gutter Guard Fitting", "Gutter Guard Consultation"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-5 py-4">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-[#0F172A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Benefits of Gutter Guards in Jacksonville</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Reduce Gutter Cleaning Frequency", desc: "Guards block most debris, reducing cleanings from 4x to 1-2x per year." },
              { title: "Prevent Water Damage", desc: "Keep gutters flowing to protect your roof, siding, and foundation." },
              { title: "Stop Pest Infestations", desc: "Guards prevent birds, insects, and rodents from nesting in gutters." },
              { title: "Extend Gutter Lifespan", desc: "Less debris and standing water means less rust and corrosion." },
              { title: "Improve Rainwater Flow", desc: "Guards ensure consistent water flow during Jacksonville's heavy storms." },
              { title: "Increase Home Value", desc: "Well-maintained gutters with guards are a selling point for buyers." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">{item.title}</h3>
                <p className="text-xs text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Guards FAQs</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Do gutter guards really work?", a: "Yes. Quality gutter guards significantly reduce debris buildup and the frequency of gutter cleaning. They're especially effective in Jacksonville where trees and storms constantly drop debris into gutters." },
              { q: "How much do gutter guards cost in Jacksonville?", a: "Gutter guard installation typically costs $7-$15 per linear foot depending on the type and material. A full home installation ranges from $900 to $2,500+. Contact us for a free estimate." },
              { q: "Will I still need gutter cleaning with guards installed?", a: "Gutter guards reduce cleaning frequency but don't eliminate it entirely. We recommend an annual inspection and light cleaning to ensure optimal performance." },
              { q: "What type of gutter guard is best for Florida?", a: "Micro-mesh guards are the best option for Jacksonville homes because they block even small debris like pine needles and shingle grit while handling heavy rainfall flow." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-slate-200 px-6">
                <AccordionTrigger className="text-left text-[#0F172A] font-semibold py-5 hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#475569] leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <RelatedServices current="/services/gutter-guards" />

      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Want Gutter Guards Installed?</h2>
              <p className="text-slate-300 mb-6">Stop cleaning gutters constantly. Get professional gutter guard installation today.</p>
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
