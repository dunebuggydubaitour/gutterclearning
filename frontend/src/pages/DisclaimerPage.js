import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, AlertTriangle, FileText, Users, Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function DisclaimerPage() {
  return (
    <div data-testid="disclaimer-page">
      <Helmet>
        <title>Disclaimer | Gutter Cleaning Jacksonville FL</title>
        <meta name="description" content="Read the disclaimer for Gutter Cleaning Jacksonville Florida. Important information about our free homeowner connection service, contractor independence, licensing, and liability." />
      </Helmet>

      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">Legal</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Disclaimer
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Important information regarding the use of this website and our services.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Important Notice
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  General Information
                </h2>
              </div>
              <div className="space-y-4 text-[#475569] leading-relaxed pl-[52px]">
                <p>
                  The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
                </p>
                <p>
                  Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage, including without limitation indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Independent Contractors
                </h2>
              </div>
              <div className="space-y-4 text-[#475569] leading-relaxed pl-[52px]">
                <p>
                  All service contractors accessible through this website are independent businesses. They are not employees, agents, or representatives of this website. We do not control, supervise, or direct the manner or method by which any contractor performs their work.
                </p>
                <p>
                  This website does not endorse, warrant, or guarantee the quality, safety, legality, or any other aspect of the services provided by any contractor. Each contractor is solely responsible for their own work, business practices, pricing, licensing, insurance, and compliance with all applicable laws and regulations.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Homeowner Responsibility
                </h2>
              </div>
              <div className="space-y-4 text-[#475569] leading-relaxed pl-[52px]">
                <p>
                  It is the sole responsibility of the homeowner or property owner to independently verify that any hired contractor possesses all necessary licenses, permits, insurance coverage (including general liability and workers' compensation), and qualifications required by local, state, and federal law for the work being performed.
                </p>
                <p>
                  Before hiring any contractor, we strongly recommend that homeowners:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Request and verify proof of current licensing",
                    "Confirm general liability and workers' compensation insurance coverage",
                    "Check references and read reviews from previous customers",
                    "Obtain written estimates and contracts before work begins",
                    "Verify that all permits required for the work have been obtained",
                    "Confirm the scope of work, timeline, and payment terms in writing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Media & Image Disclaimer
                </h2>
              </div>
              <div className="space-y-4 text-[#475569] leading-relaxed pl-[52px]">
                <p>
                  All persons depicted in photographs or videos on this website are actors or models used for illustrative purposes only. They are not actual contractors, employees, or service providers listed on or affiliated with this site.
                </p>
                <p>
                  Images of properties, completed projects, and service areas are used for representative and illustrative purposes. Actual results may vary based on the specific conditions of each property and the contractor performing the work.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Limitation of Liability
                </h2>
              </div>
              <div className="space-y-4 text-[#475569] leading-relaxed pl-[52px]">
                <p>
                  To the fullest extent permitted by applicable law, this website and its owners, operators, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Your use of or inability to use this website",
                    "Any services provided by independent contractors connected through this site",
                    "Any conduct or content of any third party on or connected through this website",
                    "Unauthorized access, use, or alteration of your transmissions or content",
                    "Property damage, personal injury, or any other matter relating to contractor services",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  External Links
                </h2>
              </div>
              <p className="text-[#475569] leading-relaxed pl-[52px]">
                This website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies or content. We encourage you to review the terms and conditions of every site you visit.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                  Changes to This Disclaimer
                </h2>
              </div>
              <p className="text-[#475569] leading-relaxed pl-[52px]">
                We reserve the right to update or modify this disclaimer at any time without prior notice. Your continued use of this website after any changes constitutes your acceptance of the updated disclaimer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Have Questions?
          </h2>
          <p className="text-slate-300 mb-8">If you have any questions about this disclaimer, please contact us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="disclaimer-contact-btn">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors" data-testid="disclaimer-call-btn">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
