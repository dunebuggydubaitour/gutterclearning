# Gutter Cleaning Jacksonville Florida - PRD

## Original Problem Statement
Build a complete, high-converting, SEO-optimized website for "Gutter Cleaning Jacksonville Florida" local service business. Must rank on Google, perform well in AI search, and convert visitors into leads.

## Architecture
- **Backend**: FastAPI + MongoDB (leads management, admin auth)
- **Frontend**: React + Tailwind CSS + Shadcn UI (multi-page SPA)
- **Database**: MongoDB (leads collection)
- **SEO**: react-helmet-async for per-page meta, JSON-LD schemas in index.html + dynamic per-page

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
- 10 testimonials for social proof

## What's Been Implemented

### Phase 1 (Dec 2025)
- Homepage: Hero, trust badges, services grid, why choose us, 10% discount, 6-step process, testimonials, FAQ, CTA form
- Services Page, About Page, Service Areas Page, Contact Page, Cost Guide Page
- Admin Panel: Password-protected (/admin), leads management
- Backend API: leads CRUD, admin auth
- Base SEO: LocalBusiness, Service, FAQ, Organization, Review schemas in index.html

### Phase 2 (Dec 2025)
- Sub-service pages: Installation, Repair, Replacement, Guards, Downspout
- Blog List + Blog Post

### Phase 3 (Feb 2026)
- 22 Service Area Detail Pages at /service-areas/:slug
- Gallery Page at /gallery
- 4 homepage SEO text sections
- Footer: 22 area links to detail pages
- Header: Gallery in nav

### Phase 4 (Feb 2026) - CURRENT
- **Fixed:** JaxTrustedSection moved to right after Hero as intro (was misplaced after services)
- **Fixed:** Duplicate "Why Choose" section removed — merged content into single WhyChooseUs
- **Fixed:** Service Areas main page (/service-areas) now links all 22 areas to their detail pages (was static text)
- **Added:** 10 testimonials from different customers/locations (was 3)
- **Added:** react-helmet-async with HelmetProvider — SEO titles & descriptions on ALL 15 pages
- **Added:** JSON-LD Service schema on each service area detail page (dynamic per city)
- All pages now have keyword-rich title tags and meta descriptions

## Key Endpoints
- POST /api/leads — Submit lead/quote
- GET /api/admin/leads — Fetch leads (admin auth)
- POST /api/admin/login — Admin login
- GET /api/admin/stats — Lead statistics

## DB Schema
- `leads`: {name, email, phone, service, message, status, created_at}

## Prioritized Backlog

### P1 (Next)
- Enhanced internal linking strategy (cross-link service pages to each other more deeply)
- Google Analytics integration
- Email notifications for new leads
- Sitemap.xml generation (auto-include all 22 area URLs)

### P2 (Future)
- Online booking/scheduling system
- Customer review integration (Google Reviews widget)
- Live chat widget
- SMS notifications for new leads
- More blog posts for content marketing
