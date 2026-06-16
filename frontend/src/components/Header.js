import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS, SUB_SERVICES } from "@/lib/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <div className="bg-[#1E3A8A] text-white text-center text-sm py-2.5 px-4" data-testid="announcement-bar">
        <span className="font-semibold">New Customer? Get 10% OFF!</span>
        {" "}&mdash; Call{" "}
        <a href={`tel:${BUSINESS.phoneRaw}`} className="underline font-bold hover:text-amber-300 transition-colors" data-testid="announcement-phone">
          {BUSINESS.phone}
        </a>{" "}or{" "}
        <a href={`tel:${BUSINESS.phone2Raw}`} className="underline font-bold hover:text-amber-300 transition-colors" data-testid="announcement-phone2">
          {BUSINESS.phone2}
        </a>{" "}Today
      </div>

      <header
        className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "bg-white/95 shadow-md" : "bg-white/80"
        } border-b border-slate-200`}
        data-testid="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2.5" data-testid="logo-link">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>GC</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-[#0F172A] text-sm leading-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Gutter Cleaning
                </div>
                <div className="text-xs text-[#475569] font-medium">Jacksonville, FL</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
              {NAV_LINKS.map((link) => (
                link.label === "Services" ? (
                  <div key={link.to} className="relative group">
                    <Link
                      to={link.to}
                      data-testid="nav-link-services"
                      className={`text-sm font-medium transition-colors duration-200 ${
                        location.pathname.startsWith("/services")
                          ? "text-[#1E3A8A] font-semibold"
                          : "text-[#475569] hover:text-[#0F172A]"
                      }`}
                    >
                      Services
                    </Link>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl border border-slate-200 shadow-xl py-2 w-56">
                        <Link to="/services" className="block px-4 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors">All Services</Link>
                        <div className="border-t border-slate-100 my-1" />
                        {SUB_SERVICES.map((s, i) => (
                          <Link key={i} to={s.to} className="block px-4 py-2 text-sm text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors" data-testid={`dropdown-${s.label.toLowerCase().replace(/\s/g, "-")}`}>
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.to
                        ? "text-[#1E3A8A] font-semibold"
                        : "text-[#475569] hover:text-[#0F172A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2 bg-[#10B981] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-md"
                  data-testid="header-call-btn"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
                <a
                  href={`tel:${BUSINESS.phone2Raw}`}
                  className="flex items-center gap-2 bg-[#1E3A8A] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-900 transition-colors shadow-md"
                  data-testid="header-call-btn-2"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone2}
                </a>
              </div>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="md:hidden flex items-center justify-center w-10 h-10 bg-[#10B981] text-white rounded-lg"
                data-testid="header-call-btn-mobile"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#0F172A]"
                data-testid="mobile-menu-toggle"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white" data-testid="mobile-menu">
            <nav className="flex flex-col py-4 px-4 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-[#1E3A8A]/10 text-[#1E3A8A]"
                      : "text-[#475569] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="mt-3 flex items-center justify-center gap-2 bg-[#10B981] text-white py-3 rounded-lg font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
