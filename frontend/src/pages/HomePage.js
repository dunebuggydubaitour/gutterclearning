import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-emerald-700 transition-colors shadow-lg" data-testid="hero-quote-btn">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors" data-testid="hero-call-btn">
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
            Why Choose Jacksonville Gutter Company?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-4">
            When homeowners and property managers in Jacksonville deal with clogged gutters, overflowing rainwater, roof leaks, or storm damage, they need a gutter company that responds fast and delivers quality workmanship. As a locally owned Jacksonville gutter company with <strong>20+ years of experience</strong>, we've earned our reputation as one of the most trusted gutter services in Northeast Florida.
          </p>
          <p className="text-[#475569] leading-relaxed mb-8">
            Don't just take our word for it — we've helped <strong>5,000+ happy customers</strong> across Jacksonville protect their homes from water damage. From routine <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">gutter cleaning</Link> to complete <Link to="/services/gutter-replacement" className="text-[#1E3A8A] font-semibold hover:underline">system replacements</Link>, we handle every project with professionalism and care. View our <Link to="/gallery" className="text-[#1E3A8A] font-semibold hover:underline">before and after gallery</Link> to see real results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: Zap, title: "Over 20 Years Experience", desc: "Decades of hands-on experience with Jacksonville homes and Florida weather" },
              { icon: Shield, title: "Fully Licensed & Insured", desc: "General liability and workers' compensation coverage on every job" },
              { icon: Clock, title: "Same-Day & Emergency Service", desc: "Available 24/7 for emergencies, especially after hurricanes and storms" },
              { icon: Star, title: "Free Estimates & Honest Pricing", desc: "No hidden fees. Written quotes before work begins. New customers get 10% off" },
              { icon: CheckCircle, title: "30-Day Workmanship Warranty", desc: "We stand behind every job. If there's an issue, we'll make it right" },
              { icon: Home, title: "Senior & Military Discounts", desc: "Special pricing for seniors, veterans, and active military families" },
              { icon: Wrench, title: "Before & After Documentation", desc: "We photograph every job so you see exactly what was done" },
              { icon: Droplets, title: "Eco-Friendly Debris Disposal", desc: "All debris bagged and disposed following Jacksonville city guidelines" },
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
        <p className="mt-4 text-[#475569] max-w-2xl mx-auto">Real reviews from Jacksonville homeowners who trust us with their gutter services.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-6" data-testid={`testimonial-${i}`}>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-[#0F172A] text-sm leading-relaxed mb-4">"{t.text}"</p>
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

const JaxTrustedSection = () => (
  <section className="py-20 md:py-28 bg-white" data-testid="jax-trusted-section">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
        Jacksonville's FL Trusted Gutter Cleaning Services
      </h2>
      <div className="prose prose-slate max-w-none space-y-5 text-[#475569] leading-relaxed">
        <p>
          When Jacksonville, Florida homeowners search for <strong>"gutter cleaning near me"</strong>, they want a company that is reliable, experienced, and local. At <strong>Gutter Cleaning Jacksonville Florida</strong>, we are that company. We provide professional <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">gutter cleaning</Link>, <Link to="/services/gutter-repair" className="text-[#1E3A8A] font-semibold hover:underline">repair</Link>, <Link to="/services/gutter-installation" className="text-[#1E3A8A] font-semibold hover:underline">installation</Link>, <Link to="/services/gutter-guards" className="text-[#1E3A8A] font-semibold hover:underline">gutter guards</Link>, <Link to="/services/downspout-services" className="text-[#1E3A8A] font-semibold hover:underline">downspout services</Link>, and <Link to="/services/gutter-replacement" className="text-[#1E3A8A] font-semibold hover:underline">full gutter replacement</Link> throughout Jacksonville and the surrounding areas including <Link to="/service-areas/st-johns-fl" className="text-[#1E3A8A] font-semibold hover:underline">St. Johns</Link>, <Link to="/service-areas/atlantic-beach-fl" className="text-[#1E3A8A] font-semibold hover:underline">Atlantic Beach</Link>, <Link to="/service-areas/orange-park-fl" className="text-[#1E3A8A] font-semibold hover:underline">Orange Park</Link>, <Link to="/service-areas/ponte-vedra-beach-fl" className="text-[#1E3A8A] font-semibold hover:underline">Ponte Vedra Beach</Link>, and <Link to="/service-areas/mandarin-jacksonville" className="text-[#1E3A8A] font-semibold hover:underline">Mandarin</Link>.
        </p>
        <p>
          Jacksonville's humid subtropical climate, with annual rainfall exceeding 50 inches and frequent summer thunderstorms, creates the perfect conditions for gutter clogs, overflows, and water damage. Leaves, pine needles, Spanish moss, and storm debris accumulate quickly in gutter systems, blocking water flow and causing costly problems like roof leaks, fascia rot, foundation erosion, and mold growth. Our licensed and insured technicians understand these local challenges and deliver thorough, reliable gutter services that protect your home year-round.
        </p>
        <p>
          Whether you own a single-family home in <Link to="/service-areas/san-marco-jacksonville" className="text-[#1E3A8A] font-semibold hover:underline">San Marco</Link>, a waterfront property in <Link to="/service-areas/ortega" className="text-[#1E3A8A] font-semibold hover:underline">Ortega</Link>, or a commercial building in <Link to="/service-areas/southside-jacksonville" className="text-[#1E3A8A] font-semibold hover:underline">Southside Jacksonville</Link>, we have the expertise to handle any gutter project. We serve both residential and commercial properties with the same commitment to quality, safety, and customer satisfaction. Our team arrives on time, completes the job efficiently, and leaves your property clean.
        </p>
        <p>
          We pride ourselves on transparent pricing with no hidden fees. Every job includes a free inspection, a written estimate, and our 30-day workmanship warranty. New customers receive <strong>10% off</strong> their first service. Whether you need a one-time cleaning or a recurring maintenance plan, we make it easy to keep your gutters in top shape. <Link to="/cost-guide" className="text-[#1E3A8A] font-semibold hover:underline">View our complete cost guide</Link> to understand pricing for your specific needs.
        </p>
      </div>
    </div>
  </section>
);

const AboutGuttersJaxSection = () => (
  <section className="py-20 md:py-28 bg-[#F8FAFC]" data-testid="about-gutters-jax-section">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
        About Gutters Cleaning Jacksonville, FL
      </h2>
      <div className="prose prose-slate max-w-none space-y-5 text-[#475569] leading-relaxed">
        <p>
          <strong>Gutter Cleaning Jacksonville Florida</strong> is a locally owned and operated gutter service company headquartered at <strong>3937 Spring Park Rd, Jacksonville, FL 32207</strong>. With over <strong>20 years of hands-on experience</strong>, we have built our reputation on quality workmanship, honest pricing, and exceptional customer service. Our team has serviced <strong>5,000+ homes and commercial properties</strong> throughout the greater Jacksonville metropolitan area.
        </p>
        <p>
          We specialize in the full spectrum of gutter services: professional cleaning, seamless gutter installation, leak repair, storm damage restoration, gutter guard installation, downspout clearing and rerouting, and complete gutter system replacement. Every technician on our team is fully trained, licensed, insured, and covered by workers' compensation insurance, giving you complete peace of mind when we're on your property.
        </p>
        <p>
          Our roots in Jacksonville mean we understand the specific challenges Florida homes face: heavy tropical downpours, hurricane season wind damage, salt air corrosion near the coast, and year-round leaf and debris accumulation from oak, pine, and palm trees. We tailor our services to these conditions, recommending the right maintenance schedule and materials for your property's specific needs.
        </p>
        <p>
          We serve a wide geographic area including all of Duval County, St. Johns County, Nassau County, and Clay County. Our primary service areas include <Link to="/service-areas/jacksonville-beach-fl" className="text-[#1E3A8A] font-semibold hover:underline">Jacksonville Beach</Link>, <Link to="/service-areas/neptune-beach-fl" className="text-[#1E3A8A] font-semibold hover:underline">Neptune Beach</Link>, <Link to="/service-areas/fernandina-beach-fl" className="text-[#1E3A8A] font-semibold hover:underline">Fernandina Beach</Link>, <Link to="/service-areas/yulee-fl" className="text-[#1E3A8A] font-semibold hover:underline">Yulee</Link>, <Link to="/service-areas/nocatee-fl" className="text-[#1E3A8A] font-semibold hover:underline">Nocatee</Link>, <Link to="/service-areas/riverside-jacksonville" className="text-[#1E3A8A] font-semibold hover:underline">Riverside</Link>, <Link to="/service-areas/avondale-jacksonville" className="text-[#1E3A8A] font-semibold hover:underline">Avondale</Link>, <Link to="/service-areas/arlington" className="text-[#1E3A8A] font-semibold hover:underline">Arlington</Link>, <Link to="/service-areas/baymeadows" className="text-[#1E3A8A] font-semibold hover:underline">Baymeadows</Link>, <Link to="/service-areas/deerwood" className="text-[#1E3A8A] font-semibold hover:underline">Deerwood</Link>, and <Link to="/service-areas/springfield-fl" className="text-[#1E3A8A] font-semibold hover:underline">Springfield</Link>. Learn more on our <Link to="/about" className="text-[#1E3A8A] font-semibold hover:underline">About page</Link>.
        </p>
      </div>
    </div>
  </section>
);

const WhenToCleanSection = () => (
  <section className="py-20 md:py-28 bg-white" data-testid="when-to-clean-section">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-8" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
        When Should You Clean Your Gutters?
      </h2>
      <div className="prose prose-slate max-w-none space-y-5 text-[#475569] leading-relaxed">
        <p>
          In Jacksonville, Florida, we recommend cleaning your gutters <strong>2 to 4 times per year</strong> depending on your property's tree coverage and proximity to the coast. The most critical times for gutter cleaning in the Jacksonville area are:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          {[
            { season: "Early Spring (March-April)", desc: "Clear winter debris and prepare for spring rain season. Pollen and seed pods can quickly clog systems." },
            { season: "Mid-Summer (June-July)", desc: "Jacksonville's heaviest rainfall months. Ensure gutters can handle tropical downpours and afternoon thunderstorms." },
            { season: "Late Fall (November-December)", desc: "Oak and pine trees shed heavily. Remove leaf accumulation before winter rains begin." },
            { season: "After Major Storms", desc: "Hurricanes and tropical storms deposit massive amounts of debris. Immediate cleaning prevents overflow damage." },
          ].map((item, i) => (
            <div key={i} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5">
              <h4 className="font-bold text-[#0F172A] text-sm mb-2">{item.season}</h4>
              <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p>
          <strong>Warning signs your gutters need cleaning now:</strong> water overflowing during rain, visible plants or weeds growing in gutters, sagging or pulling away from the house, staining on exterior walls, pools of water near your foundation, or pest activity around your roofline. If you notice any of these signs, don't wait — <Link to="/contact" className="text-[#1E3A8A] font-semibold hover:underline">contact us immediately</Link> for a free inspection.
        </p>
        <p>
          Properties with heavy tree coverage, especially homes in areas like <Link to="/service-areas/mandarin-jacksonville" className="text-[#1E3A8A] font-semibold hover:underline">Mandarin</Link>, <Link to="/service-areas/julington-creek-fl" className="text-[#1E3A8A] font-semibold hover:underline">Julington Creek</Link>, and <Link to="/service-areas/callahan-fl" className="text-[#1E3A8A] font-semibold hover:underline">Callahan</Link>, may require more frequent maintenance. We offer <strong>recurring maintenance plans</strong> with priority scheduling and discounted rates. Ask about our seasonal maintenance packages when you call. Consider <Link to="/services/gutter-guards" className="text-[#1E3A8A] font-semibold hover:underline">gutter guards</Link> to reduce how often your gutters need cleaning.
        </p>
      </div>
    </div>
  </section>
);

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
      <Helmet>
        <title>Gutter Cleaning Jacksonville FL | Licensed & Insured | Free Estimates | Call 877-736-0586</title>
        <meta name="description" content="Professional gutter cleaning in Jacksonville, Florida. Licensed & insured with 20+ years experience. Same-day service, free estimates, 10% new customer discount. Call 877-736-0586." />
      </Helmet>
      <HeroSection />
      <TrustBar />
      <JaxTrustedSection />
      <ServicesOverview />
      <WhyChooseUs />
      <DiscountBanner />
      <AboutGuttersJaxSection />
      <ProcessSection />
      <WhenToCleanSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
