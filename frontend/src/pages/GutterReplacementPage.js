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

export default function GutterReplacementPage() {
  return (
    <div data-testid="gutter-replacement-page">
      <Helmet>
        <title>Gutter Replacement Jacksonville FL | Upgrade Your Gutters | Free Estimates</title>
        <meta name="description" content="Professional gutter replacement in Jacksonville, FL. Upgrade old, damaged gutters with durable seamless systems. Licensed & insured. Free estimates. Call 877-736-0586." />
      </Helmet>
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#475569]">
          <Link to="/" className="hover:text-[#1E3A8A]">Home</Link> / <Link to="/services" className="hover:text-[#1E3A8A]">Services</Link> / <span className="text-[#0F172A] font-medium">Gutter Replacement</span>
        </div>
      </div>

      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Shield className="w-3 h-3" /> Licensed & Insured</span>
                <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Star className="w-3 h-3" /> Free Estimates</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Replacement Jacksonville FL</h1>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">Professional gutter replacement with quality materials. Same-day and emergency service available for storm damage.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="replacement-hero-quote">Get a Free Quote <ArrowRight className="w-5 h-5" /></Link>
                <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /> {BUSINESS.phone}</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={IMAGES.replacement} alt="Gutter Replacement Jacksonville FL" className="rounded-2xl shadow-2xl w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Best Gutter Replacement in Jacksonville FL</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>When your gutters are beyond <Link to="/services/gutter-repair" className="text-[#1E3A8A] font-semibold hover:underline">repair</Link>, fast replacement is the best way to protect your home from water damage. At <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">Gutter Cleaning Jacksonville FL</Link>, we offer professional gutter replacement with quick turnaround times, honest pricing, and quality workmanship.</p>
            <p>We specialize in <strong>seamless gutter replacement</strong>, mobile gutter replacement, and full system upgrades for residential and commercial properties. Whether your old gutters are rusted, pulling away, or constantly clogging, our trained crew can replace them with durable systems built for Florida's heavy rain.</p>
            <p>Many customers ask about gutter replacement cost in Jacksonville FL. Our team inspects your system, provides documentation for insurance claims, and recommends the most cost-effective option. With same-day and emergency availability, we make the process simple and stress-free.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Our Gutter Replacement Services Include</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Seamless Gutter Replacement", "Residential Gutter Replacement", "Commercial Gutter Replacement", "Aluminum Gutter Replacement", "Copper Gutter Replacement", "Steel Gutter Replacement", "Downspout Replacement", "Storm-Damaged Gutter Replacement", "Mobile Gutter Replacement"].map((item, i) => (
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
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>When Do Florida Homeowners Need Gutter Replacement?</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>Florida's climate is tough on gutter systems. In Jacksonville and nearby communities, frequent rainstorms, high humidity, and hurricane-season winds put constant stress on gutters. Over time, this leads to rust, loose fasteners, sagging sections, and failing seams.</p>
            <p>Many homeowners in areas like Arlington, Mandarin, and Riverside start considering gutter replacement after noticing repeated leaks during heavy rain. If you find yourself scheduling <Link to="/services/gutter-repair" className="text-[#1E3A8A] font-semibold hover:underline">repairs</Link> every year, replacement is usually the smarter long-term investment.</p>
            <p>Coastal areas such as Jacksonville Beach and St. Augustine face additional challenges from salt air and strong winds. Homeowners in these locations often upgrade to seamless or more durable materials. View our <Link to="/service-areas" className="text-[#1E3A8A] font-semibold hover:underline">full service area list</Link> to see if we cover your neighborhood.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Replacement FAQs</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How do I know if I need gutter replacement instead of repair?", a: "If your gutters show widespread rust, multiple areas of separation from the roofline, constant clogging, or water pooling around your foundation, replacement is usually more cost-effective than ongoing repairs." },
              { q: "How much does gutter replacement cost in Jacksonville, Florida?", a: "Standard aluminum replacement costs $1,200-$2,800, seamless aluminum $2,000-$4,000, steel $2,500-$4,500, and copper $4,000-$8,000+. See our full cost guide for details." },
              { q: "How long does gutter replacement take?", a: "Most residential gutter replacements are completed in 1-2 days depending on the size and complexity of your home." },
              { q: "Can you replace gutters after storm damage?", a: "Yes! We offer same-day and emergency gutter replacement after storm damage. We can also provide documentation to support insurance claims." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-slate-200 px-6">
                <AccordionTrigger className="text-left text-[#0F172A] font-semibold py-5 hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#475569] leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <RelatedServices current="/services/gutter-replacement" />

      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Need Gutter Replacement in Jacksonville?</h2>
              <p className="text-slate-300 mb-6">Get a free estimate. New customers receive 10% off their first service.</p>
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
