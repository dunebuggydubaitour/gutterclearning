import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, CheckCircle, Shield, Star, Award, Users, Clock } from "lucide-react";
import { BUSINESS, IMAGES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      <Helmet>
        <title>About Gutter Cleaning Jacksonville FL | 20+ Years Experience</title>
        <meta name="description" content="Learn about Gutter Cleaning Jacksonville Florida. 20+ years experience, 5,000+ happy customers. Licensed, insured, and locally owned. Serving all of Jacksonville, FL." />
      </Helmet>
      {/* Header */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">About Us</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            About Gutter Cleaning Jacksonville, FL
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Locally owned and trusted. Protecting Jacksonville homes from water damage for over 20 years.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Jacksonville's Most Trusted Gutter Company
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  We are a locally trusted <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">gutter cleaning company in Jacksonville, FL</Link> proudly serving homeowners from our base at {BUSINESS.addressShort}. With over 20 years of hands-on experience, we specialize in complete gutter services including <Link to="/services" className="text-[#1E3A8A] font-semibold hover:underline">cleaning, installation, repair, guards, downspouts, and full replacements</Link>.
                </p>
                <p>
                  Our mission is simple &mdash; protect local homes from water damage with dependable, high-quality gutter solutions. Over the years, we've helped 5,000+ happy customers keep their homes safe from roof leaks, foundation issues, and costly water damage.
                </p>
                <p>
                  Our team understands the local climate, heavy rainfall, and storm conditions, so we recommend solutions that truly last. Every project is handled by trained professionals who treat your home like their own.
                </p>
                <p>
                  Most of our new customers come from referrals and repeat clients, which speaks to the trust we've built in the community. When you book with us, you're choosing experience, reliability, and a team that genuinely cares about protecting your home.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={IMAGES.cleaning} alt="Professional gutter cleaning service Jacksonville FL - about our company" className="rounded-2xl shadow-lg w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "5,000+", label: "Happy Customers" },
              { icon: Award, value: "20+", label: "Years Experience" },
              { icon: Star, value: "4.9/5", label: "Average Rating" },
              { icon: Clock, value: "Same Day", label: "Service Available" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>{stat.value}</div>
                <div className="text-sm text-[#475569] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Details */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Why Homeowners Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Over 20 Years of Industry Experience", icon: Award },
              { title: "Fully Licensed & Insured", icon: Shield },
              { title: "General Liability Insurance Coverage", icon: CheckCircle },
              { title: "Workers' Compensation Insurance", icon: CheckCircle },
              { title: "Frequent Cleaning Discounts Available", icon: Star },
              { title: "Seniors & Military Discounts", icon: Star },
              { title: "Credit Cards & Checks Accepted", icon: CheckCircle },
              { title: "30-Day Workmanship Warranty", icon: Shield },
              { title: "New Customer 10% Discount", icon: Star },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-[#0F172A]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Clean */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-8 text-center" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            When Should You Clean Your Gutters?
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Clean Gutters at Least 2&ndash;4 Times Per Year
            </h3>
            <p className="text-[#475569] leading-relaxed mb-4">
              If you live in Florida, gutter cleaning isn't just a once-a-year task &mdash; it's essential for protecting your home from heavy rain, humidity, and storm seasons.
            </p>
            <ul className="space-y-2">
              {[
                "Early spring (before heavy rains start)",
                "Mid-summer (storm and hurricane season)",
                "Fall (when trees shed leaves)",
                "After major storms or hurricanes",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#475569]">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Signs Your Gutters Need Cleaning
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Water spilling over gutter edges",
                "Sagging or pulling gutters",
                "Plants growing inside gutters",
                "Staining on siding or walls",
                "Pests or insects near the roofline",
                "Water pooling around foundation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#475569]">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 mb-8">Call us today for a free, no-obligation estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="about-cta-quote">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors" data-testid="about-cta-call">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
