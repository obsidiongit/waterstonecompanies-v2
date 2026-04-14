# Product Brief

## What is it?
[Client Name] is a [location TBD]-based outdoor living and home improvement contractor specializing in fencing, decks, Temo sunrooms & pergolas, patio covers, carports & cabanas, siding & gutters, roofing, and interior accents (beams, fireplaces & mantles, closets).

This is a full website build designed to establish a strong digital presence, clearly communicate specialty services, and convert visitors into quote requests and consultation bookings.

> **Positioning note:** [Client Name] is a specialty outdoor living contractor — **not** a whole-home renovation company. All copy, page framing, and CTAs should reflect this. Avoid language like "we do it all" or "full-service remodeler."

## Who is it for?
Homeowners who want to upgrade their outdoor living spaces, add curb appeal, or add specialized interior touches — and are searching for a trusted, professional contractor. They know what they want but need confidence that the company is credible, skilled, and easy to work with.

## What's the goal?
Convert visitors into leads by getting them to **request a free quote**. Every page should build trust, showcase real project work, and make it frictionless to take the next step.

## Services to Highlight

| Service | Route |
|:---|:---|
| Fencing | `/services/fencing/` |
| Decks | `/services/decks/` |
| Temo Sunrooms & Pergolas | `/services/sunrooms-pergolas/` |
| Patio Covers, Carports & Cabanas | `/services/patio-covers/` |
| Siding & Gutters | `/services/siding-gutters/` |
| Roofing | `/services/roofing/` |
| Interior Accents (Beams, Fireplaces & Mantles, Closets) | `/services/interior-accents/` |

## Pages Needed

### Global Components
1. Navigation Bar — sticky, logo left, nav links center/right, primary CTA always visible
2. Footer — services list, page links, contact info, social, legal

### Core Pages

| Page | Route | Notes |
|:---|:---|:---|
| Homepage | `/` | Hero, services snapshot, home walkthrough, testimonials, contact CTA |
| Home Walkthrough / Tour | embedded on `/` or `/explore/` | Interactive visual — clickable house zones mapped to services |
| Services Hub | `/services/` | Grid of all 7 services |
| Fencing | `/services/fencing/` | |
| Decks | `/services/decks/` | |
| Temo Sunrooms & Pergolas | `/services/sunrooms-pergolas/` | Include Temo brand info |
| Patio Covers, Carports & Cabanas | `/services/patio-covers/` | |
| Siding & Gutters | `/services/siding-gutters/` | |
| Roofing | `/services/roofing/` | |
| Interior Accents | `/services/interior-accents/` | Beams, fireplaces & mantles, closets — frame as accents, not full reno |
| Portfolio / Our Work | `/our-work/` | Gallery hub — filterable by service category |
| Blog | `/blog/` | SEO content hub |
| Blog Post | `/blog/[post-slug]/` | Individual posts |
| Testimonials | `/testimonials/` | Customer reviews and stories |
| FAQ | `/faq/` | [questions TBD] |
| About | `/about/` | [client background TBD] |
| Contact | `/contact/` | Primary lead conversion page — quote request form |
| Locations Hub | `/locations/` | *If applicable — [service area TBD]* |
| Individual Location Pages | `/locations/[city]/` | *If applicable — [cities TBD]* |

## Special Features & Integrations

### Home Walkthrough / Tour
An interactive visual component on the homepage (or a dedicated `/explore/` page) that lets visitors browse the site's services by clicking zones on a house illustration or photo. Each zone maps to a service page.

- Format TBD: hotspot image map, SVG diagram, scroll-based reveal, etc.
- Zones: Backyard/deck, fence line, roofline, sunroom/addition, interior accents
- Must be mobile-friendly

### Blog
Longtail SEO content hub. Topics should focus on outdoor living — deck building, fencing options, sunroom benefits, patio cover styles, etc. [Topic list TBD]

### Chat Widget
Live chat or chatbot for inquiries and booking. Platform TBD (e.g., Tidio, Drift, Intercom). Configure for lead capture and appointment requests.

### Missed Call Text-Back
Automated SMS response triggered when a call goes unanswered. Requires:
- A2P phone number registration (10DLC or toll-free)
- SMS platform selection [TBD: HighLevel, SimpleTexting, Twilio, etc.]
- Auto-text copy [TBD]

### Google Drive Integration
Client has existing project photos and brand assets organized (or to be organized) in Google Drive. Workflow:
- Organize Drive folder by service category
- Pull finalized assets into site `assets/` directory
- Establish process for adding new photos ongoing

## Additional Requirements
- Fully responsive (mobile-first)
- Fast loading — optimized images (WebP), minimal JS
- SEO-ready: unique meta titles/descriptions per page, semantic HTML, LocalBusiness + Service schema markup
- Internal linking strategy: Blog → Service pages → Contact
- Style: warm professional, craft-forward — real project photography, warm neutrals, strong typography
- Booking/quote integration: [Platform TBD — confirm with client]

## Open Items / TBD
- [ ] Client name, logo, legal name
- [ ] Brand colors confirmed (currently carrying over warm neutrals + amber from previous project)
- [ ] Service area / target locations
- [ ] Primary CTA label ("Get a Free Quote"? "Request a Quote"? "Get Started"?)
- [ ] Client background / About page story
- [ ] FAQ questions and answers
- [ ] Blog topic list
- [ ] Chat widget platform decision
- [ ] SMS/A2P platform decision and auto-text copy
- [ ] Booking/quote platform or form setup
- [ ] Home walkthrough format decision
