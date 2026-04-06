import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, CheckCircle, Shield, Star, Home as HomeIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BUSINESS, IMAGES, SUB_SERVICES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const RelatedServices = ({ current }) => (
  <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
        Other Gutter Services in Jacksonville, FL
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SUB_SERVICES.filter(s => s.to !== current).map((s, i) => (
          <Link key={i} to={s.to} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm" data-testid={`related-${s.label.toLowerCase().replace(/\s/g, "-")}`}>
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
        <Link to="/blog" className="text-[#1E3A8A] font-medium hover:underline">Blog</Link>
      </div>
    </div>
  </section>
);

export default function GutterInstallationPage() {
  return (
    <div data-testid="gutter-installation-page">
      <Helmet>
        <title>Gutter Installation Jacksonville FL | Seamless Gutters | Free Estimates</title>
        <meta name="description" content="Professional gutter installation in Jacksonville, FL. Seamless aluminum, copper, and steel gutters. Licensed & insured. Free estimates. Call 877-736-0586." />
      </Helmet>
      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#475569]">
          <Link to="/" className="hover:text-[#1E3A8A]">Home</Link> / <Link to="/services" className="hover:text-[#1E3A8A]">Services</Link> / <span className="text-[#0F172A] font-medium">Gutter Installation</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Shield className="w-3 h-3" /> Licensed & Insured</span>
                <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Star className="w-3 h-3" /> Free Estimates</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Gutter Installation in Jacksonville FL
              </h1>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                Professional gutter installation services for homes and businesses across Jacksonville, Florida. Same-day service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="install-hero-quote">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5" /> {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={IMAGES.installation} alt="Gutter Installation Jacksonville FL" className="rounded-2xl shadow-2xl w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Best Gutter Installation Service in Jacksonville, FL
          </h2>
          <div className="prose prose-slate max-w-none space-y-4 text-[#475569] leading-relaxed">
            <p>When homeowners search for <strong>gutter installation near me</strong>, they want a company that delivers quality, durability, and fast response. At <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">Gutter Cleaning Jacksonville FL</Link>, we provide expert gutter installation services in Jacksonville, Florida for both homes and businesses.</p>
            <p>Whether you need a brand-new system or an upgrade, our professional gutter contractors install systems designed to handle Florida's heavy rain and storm conditions. We specialize in <strong>seamless gutter installation</strong>, custom gutter systems, and downspout installation tailored to your property.</p>
            <p>Customers can choose from high-quality aluminum, copper, or steel gutters, all built for long-term performance and curb appeal. Every installation is carefully measured and fitted to ensure proper drainage and maximum protection.</p>
            <p>As a trusted local <Link to="/services" className="text-[#1E3A8A] font-semibold hover:underline">gutter installation company</Link>, we offer prompt scheduling, including same-day and emergency installation services when needed. From residential to commercial projects, our trained team ensures your gutter system works efficiently to protect your roof, siding, and foundation.</p>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Our Gutter Installation Services Include
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Seamless Gutter Installation", "Custom Gutter Systems", "Aluminum Gutter Installation", "Copper Gutter Installation", "Steel Gutter Installation", "Downspout Installation", "Residential Gutter Installation", "Commercial Gutter Installation", "Half-Round Gutter Installation"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-5 py-4">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-[#0F172A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choosing Right System + Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Choosing the Right Gutter System</h2>
            <p className="text-[#475569] leading-relaxed">Choosing the right gutter system is important for protecting your home from water damage, especially in a rainy climate like Jacksonville, Florida. The right system depends on your roof size, slope, landscaping, and how much rainfall your property receives. Our professional gutter contractors inspect your home and recommend the best solution for long-term performance. If you're searching for a reliable <Link to="/services" className="text-[#1E3A8A] font-semibold hover:underline">gutter installation company near me</Link>, getting expert advice ensures you invest in a system that lasts.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Benefits of Quality Gutters for Your Home</h2>
            <p className="text-[#475569] leading-relaxed mb-4">A good gutter system works quietly in the background to protect your roof, walls, foundation, and landscaping from water damage. When gutters are properly installed, they safely channel rainwater away from your home, preventing costly problems like leaks, mold, soil erosion, and foundation cracks.</p>
            <p className="text-[#475569] leading-relaxed">Modern gutters improve curb appeal and increase property value. For homeowners in Jacksonville, where heavy rain and storms are common, a dependable gutter system means less maintenance, fewer surprises, and better protection year-round. View our <Link to="/cost-guide" className="text-[#1E3A8A] font-semibold hover:underline">cost guide</Link> for pricing details.</p>
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Installation Cost Guide</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50"><th className="text-left px-6 py-3 font-semibold text-xs uppercase tracking-wider text-[#0F172A]">Material</th><th className="text-left px-6 py-3 font-semibold text-xs uppercase tracking-wider text-[#0F172A]">Cost</th><th className="text-left px-6 py-3 font-semibold text-xs uppercase tracking-wider text-[#0F172A]">Notes</th></tr></thead>
              <tbody>
                {[
                  ["Aluminum Gutters", "$6-$10/ft", "Best balance of affordability and durability"],
                  ["Seamless Gutters", "$9-$18/ft", "Fewer leaks, custom fit, long lifespan"],
                  ["Copper Gutters", "$20-$40+/ft", "Premium look with very long durability"],
                  ["Downspout Installation", "$100-$350 each", "Depends on height and placement"],
                  ["Full Home System", "$1,200-$3,500+", "Varies by home size and complexity"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-100"><td className="px-6 py-3 font-medium text-[#0F172A]">{row[0]}</td><td className="px-6 py-3 text-[#475569]">{row[1]}</td><td className="px-6 py-3 text-[#475569]">{row[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#475569] mt-4">See our full <Link to="/cost-guide" className="text-[#1E3A8A] font-semibold hover:underline">Jacksonville Gutter Cost Guide</Link> for all pricing details.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Installation FAQs</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "How much does gutter installation cost in Jacksonville, Florida?", a: "Gutter installation in Jacksonville typically ranges from $6-$18 per linear foot depending on material. A full home system costs $1,200-$3,500+. Contact us for a free, accurate estimate for your specific property." },
              { q: "How long does gutter installation take?", a: "Most residential gutter installations are completed in one day. Larger or more complex projects may take 2-3 days. We offer same-day installation for urgent needs." },
              { q: "What type of gutters last the longest?", a: "Copper gutters can last 50+ years, while aluminum gutters typically last 20-30 years. Seamless aluminum gutters offer the best balance of longevity and cost for Jacksonville homeowners." },
              { q: "Are seamless gutters worth it?", a: "Yes. Seamless gutters have fewer leaks because they don't have joints where sections connect. They're custom-fitted to your home and are the most popular choice among Jacksonville homeowners." },
              { q: "How do I know if I need new gutters or just repairs?", a: "If your gutters have widespread rust, multiple leaks, or are pulling away from the roof in several places, replacement is usually more cost-effective than repeated repairs. Our team provides free inspections to help you decide. Learn more about gutter repair options on our gutter repair page." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#F8FAFC] rounded-xl border border-slate-200 px-6">
                <AccordionTrigger className="text-left text-[#0F172A] font-semibold py-5 hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#475569] leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices current="/services/gutter-installation" />

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Need Gutter Installation in Jacksonville?</h2>
              <p className="text-slate-300 mb-6">Get a free estimate for professional gutter installation. New customers receive 10% off.</p>
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
