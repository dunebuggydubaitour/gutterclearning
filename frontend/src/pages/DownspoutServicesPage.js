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

export default function DownspoutServicesPage() {
  return (
    <div data-testid="downspout-services-page">
      <Helmet>
        <title>Downspout Services Jacksonville FL | Cleaning, Repair & Installation</title>
        <meta name="description" content="Professional downspout cleaning, repair, and installation in Jacksonville, FL. Clear clogs, reroute drainage, protect your foundation. Licensed & insured. Call +1 (323) 218-8886." />
      </Helmet>
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#475569]">
          <Link to="/" className="hover:text-[#1E3A8A]">Home</Link> / <Link to="/services" className="hover:text-[#1E3A8A]">Services</Link> / <span className="text-[#0F172A] font-medium">Downspout Services</span>
        </div>
      </div>

      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Shield className="w-3 h-3" /> Licensed & Insured</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Downspout Services Jacksonville, FL</h1>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">Complete downspout cleaning, repair, and installation to protect your foundation and direct rainwater safely away from your home.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="downspout-hero-quote">Get a Free Quote <ArrowRight className="w-5 h-5" /></Link>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /> {BUSINESS.phone}</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={IMAGES.downspout} alt="Downspout Services Jacksonville FL" className="rounded-2xl shadow-2xl w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Professional Downspout Services in Jacksonville, FL</h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>Downspouts are a critical part of your home's drainage system. They channel rainwater from your <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">gutters</Link> down and away from your foundation, preventing water damage, soil erosion, and basement flooding. At Gutter Cleaning Jacksonville FL, we provide complete downspout services including cleaning, unclogging, repair, and new installation.</p>
            <p>Jacksonville's heavy rainfall means your downspouts need to handle large volumes of water quickly. Clogged or damaged downspouts cause water to back up into gutters, overflow, and damage your siding, landscaping, and foundation. Our experienced technicians use professional-grade equipment to flush, clear, and restore proper water flow through every downspout.</p>
            <p>Whether you need routine <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">downspout cleaning</Link>, emergency unclogging after a storm, or new downspout installation, our team handles it all with fast turnaround and honest pricing.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Our Downspout Services Include</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Downspout Cleaning & Flushing", "Downspout Unclogging", "Downspout Repair", "New Downspout Installation", "Downspout Extension Installation", "Underground Drain Line Clearing", "Downspout Rerouting", "Elbow & Joint Replacement", "Splash Block Installation"].map((item, i) => (
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
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Why Downspout Maintenance Matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Prevents Foundation Damage", desc: "Properly working downspouts direct water 4-6 feet away from your foundation, preventing cracks and settling." },
              { title: "Stops Basement Flooding", desc: "Clogged downspouts cause water to pool around your foundation, leading to basement moisture and flooding." },
              { title: "Protects Landscaping", desc: "Overflowing gutters from blocked downspouts erode soil and damage plants, mulch, and flower beds." },
              { title: "Prevents Gutter Overflow", desc: "When downspouts are clogged, water backs up into gutters causing overflow and damage to siding and fascia." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">{item.title}</h3>
                <p className="text-xs text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#475569] text-sm mt-6">See our <Link to="/cost-guide" className="text-[#1E3A8A] font-semibold hover:underline">cost guide</Link> for downspout service pricing, or learn about <Link to="/services/gutter-guards" className="text-[#1E3A8A] font-semibold hover:underline">gutter guards</Link> that reduce downspout clogging.</p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Downspout Services FAQs</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How do I know if my downspout is clogged?", a: "Signs include water overflowing from gutters during rain, water pooling around your foundation, or no water coming out of the downspout bottom during rainfall. We can inspect and clear any blockages quickly." },
              { q: "How much does downspout cleaning cost?", a: "Downspout cleaning typically costs $20-$50 per downspout. If underground drain lines need clearing, costs may be higher. Contact us for a free estimate." },
              { q: "How often should downspouts be cleaned?", a: "We recommend cleaning downspouts at least 2-4 times per year in Jacksonville, aligned with regular gutter cleaning. Properties with many trees may need more frequent service." },
              { q: "Can you install additional downspouts?", a: "Yes! If your current system doesn't have enough downspouts for proper drainage, we can add new ones. Installation typically costs $100-$350 per downspout depending on height and placement." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-slate-200 px-6">
                <AccordionTrigger className="text-left text-[#0F172A] font-semibold py-5 hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#475569] leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <RelatedServices current="/services/downspout-services" />

      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Need Downspout Service in Jacksonville?</h2>
              <p className="text-slate-300 mb-6">Get professional downspout cleaning, repair, or installation. Free estimates.</p>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 text-white text-lg font-bold"><Phone className="w-5 h-5" /> {BUSINESS.phone}</a>
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
