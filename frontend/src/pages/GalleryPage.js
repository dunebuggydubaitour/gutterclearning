import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Shield, CheckCircle } from "lucide-react";
import { BUSINESS, IMAGES } from "@/lib/constants";

const galleryItems = [
  { before: IMAGES.repair, after: IMAGES.installation, title: "Gutter System Replacement", location: "Mandarin, Jacksonville", desc: "Removed severely damaged gutters and installed a brand-new seamless aluminum system with proper drainage." },
  { before: IMAGES.cleaning, after: IMAGES.downspout, title: "Full Gutter & Downspout Cleaning", location: "San Marco, Jacksonville", desc: "Cleared years of debris, flushed all downspouts, and restored full water flow throughout the system." },
  { before: IMAGES.repair, after: IMAGES.replacement, title: "Storm Damage Repair", location: "Arlington, Jacksonville", desc: "Repaired sections damaged during hurricane season, reattached loose gutters, and sealed all leaking joints." },
  { before: IMAGES.cleaning, after: IMAGES.guards, title: "Gutter Guard Installation", location: "Ponte Vedra Beach", desc: "After a deep clean, installed micro-mesh gutter guards to reduce future debris buildup and maintenance." },
];

export default function GalleryPage() {
  return (
    <div data-testid="gallery-page">
      {/* Hero */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">Our Work</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Before & After Gallery
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            See the difference professional gutter cleaning makes. Real results from Jacksonville homeowners.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {galleryItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" data-testid={`gallery-item-${i}`}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <img src={item.before} alt={`Before - ${item.title}`} className="w-full h-64 md:h-80 object-cover" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Before</div>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <img src={item.after} alt={`After - ${item.title}`} className="w-full h-64 md:h-80 object-cover" />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">After</div>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>{item.title}</h2>
                  <p className="text-sm text-[#1E3A8A] font-medium mb-3">{item.location}</p>
                  <p className="text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Work Stands Out */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Why Our Work Stands Out
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Thorough 6-Step Process", desc: "Every job follows our proven process: debris removal, downspout clearing, flushing, flow testing, optional exterior clean, and full disposal." },
              { title: "Before & After Documentation", desc: "We photograph our work before and after so you can see the difference and have records for your files." },
              { title: "Professional-Grade Equipment", desc: "We use industry-standard tools and methods to clean gutters safely and effectively without damaging your system." },
              { title: "Trained, Insured Technicians", desc: "Our team is fully trained, licensed, and insured. We treat your property with the same care we'd give our own homes." },
              { title: "Detailed Inspection Included", desc: "After cleaning, we inspect for leaks, loose hangers, proper slope, and potential issues that could cause future problems." },
              { title: "Satisfaction Guaranteed", desc: "We stand behind our work with a 30-day workmanship warranty. If you're not satisfied, we'll make it right." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A] mb-1">{item.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm">
            <Link to="/" className="text-[#1E3A8A] font-medium hover:underline">Home</Link>
            <Link to="/services" className="text-[#1E3A8A] font-medium hover:underline">Services</Link>
            <Link to="/cost-guide" className="text-[#1E3A8A] font-medium hover:underline">Cost Guide</Link>
            <Link to="/about" className="text-[#1E3A8A] font-medium hover:underline">About Us</Link>
            <Link to="/blog" className="text-[#1E3A8A] font-medium hover:underline">Blog</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5,000+", label: "Homes Serviced" },
              { value: "20+", label: "Years Experience" },
              { value: "4.9/5", label: "Customer Rating" },
              { value: "100%", label: "Satisfaction Goal" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>{stat.value}</div>
                <div className="text-xs text-[#475569] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Want Results Like These?
          </h2>
          <p className="text-slate-300 mb-8">Schedule your gutter cleaning today and see the difference. New customers get 10% off.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="gallery-cta-quote">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors" data-testid="gallery-cta-call">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
