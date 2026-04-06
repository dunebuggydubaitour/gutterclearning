import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, CheckCircle, Shield, Star, MapPin, Home as HomeIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BUSINESS, IMAGES, SUB_SERVICES } from "@/lib/constants";
import { AREA_PAGES, getAreaContent } from "@/data/serviceAreas";
import ContactForm from "@/components/ContactForm";

export default function ServiceAreaDetailPage() {
  const { slug } = useParams();
  const area = AREA_PAGES.find(a => a.slug === slug);

  if (!area) return <Navigate to="/service-areas" replace />;
  const content = getAreaContent(area);
  const otherAreas = AREA_PAGES.filter(a => a.slug !== slug).slice(0, 8);

  return (
    <div data-testid={`area-page-${slug}`}>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDesc} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Gutter Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Gutter Cleaning Jacksonville Florida",
            "telephone": "877-736-0586",
            "address": { "@type": "PostalAddress", "streetAddress": "3937 Spring Park Rd", "addressLocality": "Jacksonville", "addressRegion": "FL", "postalCode": "32207", "addressCountry": "US" }
          },
          "areaServed": { "@type": "City", "name": area.name, "containedInPlace": { "@type": "State", "name": "Florida" } },
          "description": content.metaDesc
        })}</script>
      </Helmet>
      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#475569]">
          <Link to="/" className="hover:text-[#1E3A8A]">Home</Link> / <Link to="/service-areas" className="hover:text-[#1E3A8A]">Service Areas</Link> / <span className="text-[#0F172A] font-medium">{area.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Shield className="w-3 h-3" /> Licensed & Insured</span>
                <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full"><Star className="w-3 h-3" /> Same-Day Service</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Gutter Cleaning Services {area.name}
              </h1>
              <p className="mt-4 text-slate-300 text-base md:text-lg">Professional gutter cleaning, repair, installation & replacement in {area.name}. Free estimates.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="area-hero-quote">Get a Free Quote <ArrowRight className="w-5 h-5" /></Link>
                <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /> {BUSINESS.phone}</a>
              </div>
            </div>
            <div className="hidden lg:block"><img src={IMAGES.cleaning} alt={`Gutter Cleaning ${area.name}`} className="rounded-2xl shadow-2xl w-full h-[380px] object-cover" /></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Gutter Cleaning Company in {area.name}
          </h2>
          <p className="text-[#475569] leading-relaxed mb-4">{content.intro}</p>
          <p className="text-[#475569] leading-relaxed">Whether your gutters need routine <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">cleaning</Link>, minor <Link to="/services/gutter-repair" className="text-[#1E3A8A] font-semibold hover:underline">repairs</Link>, or a complete <Link to="/services/gutter-replacement" className="text-[#1E3A8A] font-semibold hover:underline">replacement</Link>, we make sure water flows safely away from your home. Homeowners choose us for 24/7 availability, including help after storms.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Our {area.name} Gutter Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Gutter Cleaning", to: "/", img: IMAGES.cleaning },
              { label: "Gutter Installation", to: "/services/gutter-installation", img: IMAGES.installation },
              { label: "Gutter Repair", to: "/services/gutter-repair", img: IMAGES.repair },
              { label: "Gutter Guards", to: "/services/gutter-guards", img: IMAGES.guards },
              { label: "Downspout Services", to: "/services/downspout-services", img: IMAGES.downspout },
              { label: "Gutter Replacement", to: "/services/gutter-replacement", img: IMAGES.replacement },
            ].map((s, i) => (
              <Link key={i} to={s.to} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <img src={s.img} alt={`${s.label} ${area.name}`} className="w-full h-32 object-cover" />
                <div className="p-4"><span className="text-sm font-semibold text-[#0F172A]">{s.label}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Why Choose Our Gutter Company for {area.name}?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">{content.whyChoose}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Over 20 Years of Industry Experience", "Fully Licensed & Insured", "General Liability Insurance Coverage", "Workers' Compensation Insurance", "Frequent Cleaning Discounts", "Seniors & Military Discounts", "Credit Cards & Checks Accepted", "30-Day Workmanship Warranty"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-[#0F172A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            About Gutter Cleaning {area.name}
          </h2>
          <p className="text-[#475569] leading-relaxed mb-4">{content.about}</p>
          <p className="text-[#475569] leading-relaxed">Learn more <Link to="/about" className="text-[#1E3A8A] font-semibold hover:underline">about our company</Link>, view our <Link to="/cost-guide" className="text-[#1E3A8A] font-semibold hover:underline">cost guide</Link>, or check out our <Link to="/gallery" className="text-[#1E3A8A] font-semibold hover:underline">before & after gallery</Link>.</p>
        </div>
      </section>

      {/* Discount */}
      <section className="bg-[#1E3A8A] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center bg-amber-500/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-3">New Customer Discount</span>
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Get 10% OFF in {area.name}</h3>
          <p className="text-slate-300 mb-6">Mention you're a new customer and save on your first gutter service.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg">Get Free Estimate <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Gutter Cleaning {area.name} FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: `How often should gutters be cleaned in ${area.name}?`, a: `In ${area.name}, we recommend cleaning your gutters 2-4 times per year — early spring, mid-summer during storm season, fall when trees shed, and after major storms. Properties with heavy tree coverage may need more frequent service.` },
              { q: `How much does gutter cleaning cost in ${area.name}?`, a: `Gutter cleaning in ${area.name} typically costs $90-$160 for a 1-story home, $150-$270 for a 2-story home. Prices vary based on gutter length, debris level, and accessibility. Contact us for a free estimate.` },
              { q: `Do you offer emergency gutter service in ${area.name}?`, a: `Yes! We offer same-day and 24/7 emergency gutter services throughout ${area.name}, especially after heavy storms when gutters often overflow or get damaged.` },
              { q: `Do I need to be home during gutter cleaning?`, a: `No. As long as we have access to your property and gutters, we can complete the work. We'll provide before and after documentation for your peace of mind.` },
              { q: `What gutter services do you offer in ${area.name}?`, a: `We offer complete gutter services including cleaning, installation, repair, gutter guards, downspout services, and full gutter replacement. All services are available throughout ${area.name} and surrounding areas.` },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#F8FAFC] rounded-xl border border-slate-200 px-6">
                <AccordionTrigger className="text-left text-[#0F172A] font-semibold py-5 hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#475569] leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Other Service Areas Near {area.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {otherAreas.map((a, i) => (
              <Link key={i} to={`/service-areas/${a.slug}`} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 hover:border-[#1E3A8A] transition-colors text-sm font-medium text-[#0F172A]">
                <MapPin className="w-3.5 h-3.5 text-[#1E3A8A] flex-shrink-0" /> {a.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
            <Link to="/" className="text-[#1E3A8A] font-medium hover:underline flex items-center gap-1"><HomeIcon className="w-3.5 h-3.5" /> Home</Link>
            <Link to="/services" className="text-[#1E3A8A] font-medium hover:underline">All Services</Link>
            <Link to="/service-areas" className="text-[#1E3A8A] font-medium hover:underline">All Service Areas</Link>
            <Link to="/cost-guide" className="text-[#1E3A8A] font-medium hover:underline">Cost Guide</Link>
            <Link to="/blog" className="text-[#1E3A8A] font-medium hover:underline">Blog</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Need Gutter Service in {area.name}?</h2>
              <p className="text-slate-300 mb-6">Get a free estimate for professional gutter service. New customers receive 10% off.</p>
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
