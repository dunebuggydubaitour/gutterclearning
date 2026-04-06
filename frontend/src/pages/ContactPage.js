import { Phone, MapPin, Mail, Clock, Shield, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { BUSINESS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div data-testid="contact-page">
      <Helmet>
        <title>Contact Gutter Cleaning Jacksonville FL | Free Estimates | Call 877-736-0586</title>
        <meta name="description" content="Contact Gutter Cleaning Jacksonville Florida for a free estimate. Call 877-736-0586 or fill out our online form. Same-day service available. Licensed & insured." />
      </Helmet>
      {/* Header */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">Get in Touch</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Contact Us for a Free Quote
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Ready to protect your home? Fill out the form below or call us directly. We respond within 30 minutes during business hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Request Your Free Estimate
                </h2>
                <p className="text-[#475569] text-sm mb-8">Fill in your details and we'll get back to you promptly.</p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a href={`tel:${BUSINESS.phone}`} className="flex items-start gap-4 group" data-testid="contact-phone">
                      <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E3A8A]/20 transition-colors">
                        <Phone className="w-5 h-5 text-[#1E3A8A]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#475569] mb-0.5">Phone</div>
                        <div className="text-sm font-semibold text-[#0F172A]">{BUSINESS.phone}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-4 group" data-testid="contact-email">
                      <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E3A8A]/20 transition-colors">
                        <Mail className="w-5 h-5 text-[#1E3A8A]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#475569] mb-0.5">Email</div>
                        <div className="text-sm font-semibold text-[#0F172A] break-all">{BUSINESS.email}</div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#475569] mb-0.5">Address</div>
                      <div className="text-sm font-semibold text-[#0F172A]">{BUSINESS.addressShort}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#475569] mb-0.5">Business Hours</div>
                      <div className="text-sm font-semibold text-[#0F172A]">{BUSINESS.hours}</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Urgency Card */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
                <h3 className="text-lg font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Emergency Gutter Service
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  Storm damage? Overflowing gutters? We offer same-day emergency service. Don't wait for water damage to get worse.
                </p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1E40AF] transition-colors shadow-md"
                  data-testid="emergency-call-btn"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "Fully Licensed & Insured" },
                    { icon: Star, text: "5-Star Rated on Google" },
                    { icon: Clock, text: "30-Minute Response Time" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-medium text-[#0F172A]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="Gutter Cleaning Jacksonville Florida Location"
              src="https://maps.google.com/maps?q=3937+Spring+Park+Rd,+Jacksonville,+FL+32207&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="contact-maps-iframe"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
