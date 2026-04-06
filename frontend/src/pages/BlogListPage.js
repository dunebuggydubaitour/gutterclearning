import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BUSINESS, IMAGES } from "@/lib/constants";

export default function BlogListPage() {
  const posts = [
    {
      title: "How Long Does it Take to Clean Gutters?",
      excerpt: "In most cases, gutter cleaning takes between 30 minutes to 2 hours for an average home. Learn what factors affect cleaning time and how to plan maintenance.",
      slug: "how-long-does-it-take-to-clean-gutters",
      date: "December 2025",
      readTime: "8 min read",
      image: IMAGES.cleaning,
    },
  ];

  return (
    <div data-testid="blog-list-page">
      <section className="bg-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-emerald-400 mb-3">Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Gutter Cleaning Tips & Guides
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Expert advice on gutter maintenance, cleaning tips, and home protection from Jacksonville's trusted gutter company.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className="block bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300 group" data-testid={`blog-card-${post.slug}`}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-48 md:h-auto overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center gap-4 text-xs text-[#475569] mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1E3A8A] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
                      {post.title}
                    </h2>
                    <p className="text-[#475569] leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#475569] mb-4">Need gutter service? We're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors shadow-md" data-testid="blog-cta-quote">Get a Free Quote</Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-[#0F172A] px-8 py-4 rounded-lg font-semibold hover:border-slate-900 transition-colors">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
