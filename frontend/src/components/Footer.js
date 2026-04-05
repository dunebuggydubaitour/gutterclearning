import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, ChevronRight } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

const Footer = () => {
  const serviceLinks = [
    { to: "/services", label: "Gutter Cleaning" },
    { to: "/services", label: "Gutter Installation" },
    { to: "/services", label: "Gutter Repair" },
    { to: "/services", label: "Gutter Guards" },
    { to: "/services", label: "Downspout Services" },
    { to: "/services", label: "Gutter Replacement" },
  ];

  return (
    <footer className="bg-[#0F172A] text-white" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Business Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>GC</span>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Gutter Cleaning
                </div>
                <div className="text-xs text-slate-400">Jacksonville, FL</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Jacksonville's trusted gutter cleaning company. Licensed, insured, and committed to protecting your home from water damage.
            </p>
            <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
              <Shield className="w-4 h-4" />
              Licensed & Insured
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors" data-testid="footer-phone">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm">{BUSINESS.phone}</span>
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

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-3">Service Areas</h4>
          <p className="text-slate-500 text-xs leading-relaxed">
            {[...SERVICE_AREAS.main, ...SERVICE_AREAS.neighborhoods].join(" | ")}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/admin" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
