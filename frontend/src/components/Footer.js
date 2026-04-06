import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, ChevronRight } from "lucide-react";
import { BUSINESS, SUB_SERVICES } from "@/lib/constants";
import { AREA_PAGES } from "@/data/serviceAreas";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white" data-testid="site-footer">
      {/* Service Areas Bar */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                Serving All of Jacksonville & Surrounding Areas
              </h3>
              <p className="text-sm text-slate-400 mt-1">Licensed & insured gutter services across Duval County and beyond</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                New Customer? 10% OFF!
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {AREA_PAGES.map((area, i) => (
              <Link key={i} to={`/service-areas/${area.slug}`} className="text-xs text-slate-500 hover:text-slate-300 transition-colors" data-testid={`footer-area-${area.slug}`}>
                {area.name}{i < AREA_PAGES.length - 1 ? " |" : ""}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>GC</span>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Gutter Cleaning</div>
                <div className="text-xs text-slate-400">Jacksonville, FL</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Jacksonville's trusted gutter company with 20+ years of experience. Protecting homes from water damage with professional gutter cleaning, installation, repair, and replacement services.
            </p>
            <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
              <Shield className="w-4 h-4" /> Licensed & Insured
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Gutter Cleaning</Link></li>
              {SUB_SERVICES.map((s, i) => (
                <li key={i}><Link to={s.to} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "All Services" },
                { to: "/cost-guide", label: "Cost Guide" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/service-areas", label: "Service Areas" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact Us" },
              ].map((link, i) => (
                <li key={i}><Link to={link.to} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors" data-testid="footer-phone">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm font-semibold">{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors" data-testid="footer-email">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm break-all">{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                <span className="text-sm">{BUSINESS.addressShort}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                <span className="text-sm">{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <Link to="/admin" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Admin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
