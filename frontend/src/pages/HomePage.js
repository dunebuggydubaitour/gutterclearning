import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Star, CheckCircle, Droplets, Home, Wrench, ArrowRight, MapPin, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BUSINESS, IMAGES, SERVICES, PROCESS_STEPS, TESTIMONIALS, FAQ_ITEMS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => (
  <section className="relative min-h-[600px] md:min-h-[700px] flex items-center" data-testid="hero-section">
    <div className="absolute inset-0">
      <img src={IMAGES.hero} alt="Jacksonville Florida home exterior" className="w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
            <Shield className="w-3.5 h-3.5" /> Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/30">
            <Clock className="w-3.5 h-3.5" /> Same-Day Service
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
          Jacksonville's Trusted
          <span className="block text-emerald-400">Gutter Cleaning</span>
          Services
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
          Professional gutter cleaning in Jacksonville, Florida. Free estimates, same-day service, and a 10% new customer discount.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-emerald-700 transition-colors shadow-lg"
            data-testid="hero-quote-btn"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
            data-testid="hero-call-btn"
          >
            <Phone className="w-5 h-5" /> Call {BUSINESS.phone}
          </a>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
          </div>
          <span className="text-sm text-slate-300">5,000+ Happy Customers</span>
        </div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-white border-b border-slate-200 py-6" data-testid="trust-bar">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[
          { icon: Shield, text: "Fully Licensed & Insured" },
          { icon: Clock, text: "Same-Day Service Available" },
          { icon: Star, text: "5-Star Rated Company" },
          { icon: CheckCircle, text: "Free Estimates" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-[#1E3A8A]" />
            </div>
            <span className="text-sm font-medium text-[#0F172A]">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesOverview = () => (
  <section className="py-20 md:py-28 bg-[#F8FAFC]" data-testid="services-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold text-[#1E3A8A] mb-3">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
          Jacksonville's Gutter Services
        </h2>
        <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
          Complete gutter solutions for residential and commercial properties across Jacksonville, FL.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <Link
            to={service.slug === "gutter-cleaning" ? "/" : `/services/${service.slug}`}
            key={i}
            className="service-card bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm group"
            data-testid={`service-card-${service.slug}`}
          >
            <div className="h-48 overflow-hidden">
              <img src={service.image} alt={`${service.title} Jacksonville FL`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1E3A8A] mt-4 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-white" data-testid="why-choose-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest font-semibold text-[#1E3A8A] mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Why Choose Jacksonville Gutter Cleaning?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            When homeowners deal with clogged gutters, overflowing rainwater, or storm damage, they need a reliable company that responds fast. As a locally owned gutter service proudly serving Jacksonville, Florida, we're known for fast response times, honest pricing, and quality workmanship.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Quick Expert Service", desc: "Fast response times for all gutter needs" },
              { icon: Shield, title: "Licensed & Insured", desc: "Full liability and workers' comp coverage" },
              { icon: Clock, title: "24/7 Emergency Service", desc: "Available after storms and hurricanes" },
              { icon: Star, title: "30-Day Warranty", desc: "Workmanship guarantee on all services" },
              { icon: CheckCircle, title: "Free Estimates", desc: "No-obligation quotes before any work" },
              { icon: Home, title: "Local & Trusted", desc: "Serving Jacksonville for 20+ years" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-[#F8FAFC] border border-slate-100">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                  <p className="text-xs text-[#475569] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={IMAGES.worker} alt="Professional gutter cleaning service Jacksonville" className="rounded-2xl shadow-lg w-full object-cover h-[500px]" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">5,000+</div>
                <div className="text-xs text-[#475569]">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DiscountBanner = () => (
  <section className="bg-[#1E3A8A] py-12 md:py-16" data-testid="discount-banner">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-4">
        New Customer Discount
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
        Get <span className="text-amber-400">10% OFF</span> Your First Service
      </h2>
      <p className="text-slate-300 mb-8 max-w-lg mx-auto">
        Mention you're a new customer, and we'll give you 10% off your gutter service.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
          data-testid="discount-quote-btn"
        >
          Get Free Estimate Today
        </Link>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          data-testid="discount-call-btn"
        >
          <Phone className="w-5 h-5" /> {BUSINESS.phone}
        </a>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-[#F8FAFC]" data-testid="process-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold text-[#1E3A8A] mb-3">How We Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
          Our 6-Step Gutter Cleaning Process
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
);

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-white" data-testid="testimonials-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold text-[#1E3A8A] mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
          What Our Customers Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-[#0F172A] leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="font-semibold text-sm text-[#0F172A]">{t.name}</div>
              <div className="text-xs text-[#475569] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3" /> {t.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceAreasPreview = () => null; // Moved to footer

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-white" data-testid="faq-section">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold text-[#1E3A8A] mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-[#F8FAFC] rounded-xl border border-slate-200 px-6 overflow-hidden" data-testid={`faq-item-${i}`}>
            <AccordionTrigger className="text-left text-[#0F172A] font-semibold py-5 hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-[#475569] leading-relaxed pb-5">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="py-20 md:py-28 bg-[#0F172A]" data-testid="cta-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Ready to Protect Your Home?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Don't wait for water damage. Get your gutters cleaned by Jacksonville's most trusted gutter cleaning company. Call today for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
              data-testid="cta-call-btn"
            >
              <Phone className="w-5 h-5" /> Call {BUSINESS.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-colors"
              data-testid="cta-quote-btn"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Get Your Free Quote
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <DiscountBanner />
      <ProcessSection />
      <TestimonialsSection />
      <ServiceAreasPreview />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
