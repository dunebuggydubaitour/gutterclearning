# Gutter Cleaning Jacksonville Florida - PRD

## Original Problem Statement
Build a complete, high-converting, SEO-optimized website for "Gutter Cleaning Jacksonville Florida" local service business. Must rank on Google, perform well in AI search, and convert visitors into leads.

## Architecture
- **Backend**: FastAPI + MongoDB (leads management, admin auth)
- **Frontend**: React (CRA + CRACO) + Tailwind CSS + Shadcn UI
- **Database**: MongoDB (leads collection)
- **SEO**: react-helmet-async for per-page meta, JSON-LD schemas, sitemap.xml, robots.txt
- **Deployment**: Vercel (Root Directory: frontend, Build: yarn build)

## What's Been Implemented

### Core Pages
- Homepage (Hero, Trust Bar, Intro section, Services grid, Why Choose Us, Discount Banner, About Gutters Jax, Process, When to Clean, Testimonials slider (10 reviews), FAQ, CTA)
- Services Page, About Page, Contact Page, Cost Guide Page
- Sub-services: Installation, Repair, Replacement, Guards, Downspout
- 22 Service Area Detail Pages at /service-areas/:slug
- Service Areas Hub Page linking all 22 areas
- Gallery Page (Before/After)
- Blog List + Blog Post
- Admin Panel (password-protected)
- **Disclaimer Page** at /disclaimer

### SEO & Technical
- react-helmet-async with unique title/description on all 15+ pages
- JSON-LD schemas: LocalBusiness, Service, FAQ, BreadcrumbList, Review, Organization
- GeoCoordinates in LocalBusiness schema
- sitemap.xml with all 36 URLs
- robots.txt
- Google Search Console verification meta tag
- Keyword-rich alt tags on all images
- Internal linking: all service pages link to homepage with "Gutter Cleaning Jacksonville FL" anchor text
- All pages cross-linked to services, gallery, cost guide

### Business Info
- Phone 1: +1 (323) 218-8886
- Phone 2: +1 (858) 898-5982
- Both numbers displayed in header, footer, hero, CTAs, meta descriptions, schema

## Key Endpoints
- POST /api/leads — Submit lead/quote
- GET /api/admin/leads — Fetch leads (admin auth)
- POST /api/admin/login — Admin login
- GET /api/admin/stats — Lead statistics

## DB Schema
- `leads`: {name, email, phone, service, message, status, created_at}

## Prioritized Backlog
### P1
- Google Analytics integration
- Email notifications for new leads
- More blog posts for content marketing
### P2
- Online booking system
- Google Reviews widget
- Live chat widget
- SMS notifications
- Privacy Policy page
