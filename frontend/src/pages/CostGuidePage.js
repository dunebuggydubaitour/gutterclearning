import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const PricingTable = ({ title, description, headers, rows, note }) => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-10">
    <div className="p-6 md:p-8 border-b border-slate-200">
      <h3 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
        {title}
      </h3>
      {description && <p className="text-sm text-[#475569]">{description}</p>}
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm" data-testid={`pricing-table-${title.toLowerCase().replace(/\s/g, "-")}`}>
        <thead>
          <tr className="bg-[#F8FAFC]">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-6 py-3.5 font-semibold text-[#0F172A] text-xs uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-6 py-4 ${j === 0 ? "font-medium text-[#0F172A]" : "text-[#475569]"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {note && <div className="px-6 py-3 bg-amber-50 border-t border-amber-200 text-xs text-amber-800">{note}</div>}
  </div>
);

export default function CostGuidePage() {
  return (
    <div data-testid="cost-guide-page">
      {/* Header */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">Pricing</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Jacksonville Gutter Cost Guide 2026
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Transparent pricing for all gutter services. No hidden fees. Free estimates on every job.
          </p>
        </div>
      </section>

      {/* Cost Tables */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Content */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-10">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>Understanding Gutter Cleaning Costs in Jacksonville</h2>
            <div className="space-y-4 text-[#475569] leading-relaxed text-sm">
              <p>At <Link to="/" className="text-[#1E3A8A] font-semibold hover:underline">Gutter Cleaning Jacksonville FL</Link>, we believe homeowners should understand exactly what they're paying for. Gutter cleaning is one of the most affordable ways to protect your home, but prices vary depending on property size, height, and gutter condition.</p>
              <p>Because of Florida's rain and storms, gutters fill up faster with leaves, pine needles, and roof debris. That means regular cleaning isn't optional — it's essential home maintenance.</p>
              <p>A proper gutter cleaning is more than just removing leaves. We remove debris by hand and tools, flush <Link to="/services/downspout-services" className="text-[#1E3A8A] font-semibold hover:underline">downspouts</Link>, and check that water drains correctly. We also clean roof-edge buildup and clear elbows where clogs often hide.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-[#475569]"><CheckCircle className="w-4 h-4 text-emerald-500" /> Upfront pricing</div>
              <div className="flex items-center gap-2 text-sm text-[#475569]"><CheckCircle className="w-4 h-4 text-emerald-500" /> No hidden charges</div>
              <div className="flex items-center gap-2 text-sm text-[#475569]"><CheckCircle className="w-4 h-4 text-emerald-500" /> Pay after service</div>
            </div>
          </div>

          <PricingTable
            title="Gutter Cleaning Costs"
            description="Removes leaves, debris, and buildup so rainwater flows freely. Prevents overflow, fascia damage, and foundation issues."
            headers={["Home Type", "Cost Range", "Notes"]}
            rows={[
              ["1-Story Home", "$90 - $150", "Most common range for standard homes"],
              ["2-Story Home", "$150 - $250", "More labor and safety needs"],
              ["3-Story Home", "$250 - $350+", "Taller homes require extra safety"],
              ["Downspout Clearing", "$20 - $40 each", "Includes flushing and blockage removal"],
              ["Heavy Debris Work", "+$50 - $120", "If clogged for long periods"],
              ["Same-Day / Emergency", "+$50 - $100", "Urgent storm-related service"],
            ]}
          />

          <PricingTable
            title="Gutter Repair Costs"
            description="Repair services ensure your existing gutter system functions properly without leaks or separation."
            headers={["Repair Type", "Typical Cost", "Why It Matters"]}
            rows={[
              ["Leak & Seam Repair", "$100 - $250", "Fixes drips and water escaping"],
              ["Sagging Gutter Repair", "$120 - $300", "Restores proper drainage angle"],
              ["Hole / Crack Repair", "$150 - $350", "Seals gaps and prevents leaks"],
              ["Rusted Section Repair", "$180 - $400", "Replaces corroded metal"],
              ["Downspout Repair", "$50 - $120", "Ensures proper water flow"],
              ["Reattachment of Gutters", "$100 - $280", "Secures loose hangers"],
            ]}
          />

          <PricingTable
            title="Gutter Installation Costs"
            description="New gutter system protects from roof water damage, erosion, foundation cracking, and basement flooding."
            headers={["Material / Type", "Price Per Linear Foot", "Best For"]}
            rows={[
              ["Aluminum Gutters", "$6 - $12/ft", "Most common and cost-effective"],
              ["Seamless Aluminum", "$8 - $15/ft", "Few leaks, custom-fit"],
              ["Steel Gutters", "$9 - $16/ft", "Strong for heavy rain"],
              ["Copper Gutters", "$18 - $30+/ft", "Premium look & lifespan"],
              ["Vinyl Gutters", "$3 - $8/ft", "Budget & lighter climates"],
            ]}
          />

          <PricingTable
            title="Gutter Replacement Costs"
            description="Recommended when repairs aren't cost-effective or gutters are severely damaged, rusted, or outdated."
            headers={["System / Material", "Cost Range", ""]}
            rows={[
              ["Standard Aluminum Replacement", "$1,200 - $2,800", ""],
              ["Seamless Aluminum Replacement", "$2,000 - $4,000", ""],
              ["Steel Gutter Replacement", "$2,500 - $4,500", ""],
              ["Copper Gutter Replacement", "$4,000 - $8,000+", ""],
            ]}
            note="Prices are estimates for Jacksonville, FL area. Actual costs may vary based on property specifics."
          />

          {/* What Affects Cost */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              What Affects Gutter Service Costs?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Home height and stories",
                "Total gutter linear footage",
                "Amount and type of debris",
                "Accessibility and safety needs",
                "Gutter material and condition",
                "Emergency or same-day service",
                "Additional repairs needed",
                "Gutter guard presence",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#475569]">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Get Your Free Estimate Today
          </h2>
          <p className="text-slate-300 mb-8">No hidden fees. No surprises. Just honest pricing for quality gutter work.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg" data-testid="cost-cta-quote">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors" data-testid="cost-cta-call">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
