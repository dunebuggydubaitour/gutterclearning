# Gutter Cleaning Jacksonville Florida - PRD

## Original Problem Statement
Build a complete, high-converting, SEO-optimized website for "Gutter Cleaning Jacksonville Florida" local service business. Must rank on Google, perform well in AI search, and convert visitors into leads.

## Architecture
- **Backend**: FastAPI + MongoDB (leads management, admin auth)
- **Frontend**: React + Tailwind CSS + Shadcn UI (multi-page SPA)
- **Database**: MongoDB (leads collection)

## User Personas
- Homeowners in Jacksonville, FL needing gutter services
- Property managers maintaining commercial buildings
- Admin/business owner viewing incoming leads

## Core Requirements
- SEO-optimized content with proper meta tags and schema markup
- Contact/quote form storing leads in MongoDB
- Admin panel to view/manage leads
- Google Maps embed for location
- Mobile-responsive design
- 22 dynamic service area pages for local SEO
- Before/After gallery for conversion proof
- Long-form homepage content for SEO authority

## What's Been Implemented

### Phase 1 (Dec 2025)
- Homepage: Hero with CTA, trust badges, services grid (6 services), why choose us, 10% discount banner, 6-step process, testimonials, FAQ accordion, CTA with inline form
- Services Page: Detailed services, residential vs commercial comparison, 6-step process
- About Page: Company story, stats, when to clean gutters, warning signs
- Service Areas Page: Jacksonville areas grid, neighborhoods, Google Maps embed, near-me SEO content
- Contact Page: Contact form, business info, emergency service card, Google Maps
- Cost Guide Page: 4 pricing tables (cleaning, repair, installation, replacement)
- Admin Panel: Password-protected (/admin), leads table with status toggle, stats cards, delete/refresh
- SEO: Schema markup (LocalBusiness, Service, FAQ), meta tags, heading hierarchy
- Backend API: POST /api/leads, GET /api/admin/leads, admin login/stats/delete/status-update

### Phase 2 (Dec 2025)
- Sub-service pages: Gutter Installation, Repair, Replacement, Guards, Downspout Services
- Blog List Page and Blog Post (How Long to Clean Gutters)

### Phase 3 (Feb 2026) - CURRENT
- 22 Dynamic Service Area Detail Pages at /service-areas/:slug (St Johns, Atlantic Beach, Orange Park, Jacksonville Beach, Neptune Beach, Baldwin, Fernandina Beach, Yulee, Callahan, Nocatee, Ponte Vedra Beach, Arlington, Southside, Mandarin, Riverside, Avondale, San Marco, Baymeadows, Deerwood, Springfield, Ortega, Julington Creek)
- Gallery Page (/gallery) with before/after project cards, stats, and CTA
- 4 new homepage long-form SEO sections: Jacksonville's Trusted Services, About Gutters Cleaning Jax, When to Clean, Why Choose Jax Gutter Company
- Footer updated with 22 service area links pointing to individual detail pages
- Header nav updated with Gallery link
- Heavy internal linking across all new content (service pages, area pages, gallery, cost guide)

## Key Endpoints
- POST /api/leads - Submit lead/quote request
- GET /api/admin/leads - Fetch leads (admin auth required)
- POST /api/admin/login - Admin login
- GET /api/admin/stats - Lead statistics

## DB Schema
- `leads`: {name, email, phone, service, message, status, created_at}

## Prioritized Backlog

### P1 (Next)
- Comprehensive SEO & Schema Markup Update (meta titles/descriptions for all pages, LocalBusiness/FAQ/Service schemas on new pages)
- Enhanced internal linking strategy (cross-link service pages to each other)
- Google Analytics integration
- Email notifications for new leads

### P2 (Future)
- Online booking/scheduling system
- Customer review integration (Google Reviews widget)
- Live chat widget
- SMS notifications for new leads
- Sitemap.xml generation
- More blog posts for content marketing
