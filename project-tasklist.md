# Waterstone Companies — Website Build Tasks

> Living task list for the Waterstone Companies static site (`index.html`, `styles.css`, `script.js`).
>
> **Project:** Outdoor living & home improvement — fencing, decks, sunrooms, patio covers, siding & gutters, roofing, interior accents.  
> **Positioning:** Specialty outdoor living contractor — not whole-home renovation.  
> **Last updated:** April 8, 2026

**Legend:** `[x]` done · `[ ]` not done · `~` partial / placeholder in place

---

## Phase 1: Template Adaptation & Design System

### 1.1 Configure Design System in `styles.css`
- [x] Align CSS variables in `:root` with [project-style-guide.md](project-style-guide.md) (warm neutrals, amber accent, DM Sans + DM Serif Display)
- [x] Colors, fonts, spacing scale, radius — carried from Denver Doors template; Waterstone-specific blocks added (walkthrough, gallery filter, lightbox, forms, skip link)
- [x] New utility / component classes for outdoor living (placeholders, nav split layout, blog cards, etc.)

### 1.2 Global Component Refinement
- [x] Navigation — sticky, logo left (`nav-container--split`), links: Home, Services, Our Work, About, Blog, Reviews, Contact
- [x] Primary CTA — **Get a Free Quote** → `contact/index.html`
- [~] Logo — **text lockup** (client has no logo or brand assets yet); swap `<span class="nav-logo-text">` for `<img>` when/if logo is provided
- [x] Footer — four columns (brand, services, company, contact); Waterstone Companies © 2026
- [ ] Privacy Policy & Terms — footer links still `#`; replace with real pages or Termly/Iubenda

### 1.3 Asset Setup
- [~] **Google Drive** — client has no Drive assets yet; using existing project photos (`photos/`) for all galleries and heroes; revisit when client provides photos
- [~] Logo — no brand pack available; text lockup in place site-wide; update when logo delivered
- [ ] Sort project photos by service category (when Drive is organized)
- [ ] `assets/videos/` — only if hero video is used (current hero is CSS/gradient static)
- [x] Favicon — [assets/favicon.svg](assets/favicon.svg) (interim mark; replace when brand pack lands)

---

## Phase 2: Core Pages Implementation

### 2.1 Homepage (`index.html`)
- [x] Hero — gradient/static placeholder, outdoor living headline, primary + secondary CTA
- [x] Services snapshot — 7 cards → service pages
- [x] About / Why Waterstone — placeholder differentiators (swap with client copy)
- [x] Testimonials — 3 sample cards (replace with real quotes + attribution)
- [x] Contact CTA section — button to contact
- [ ] Chat widget — not embedded (Phase 4)

### 2.2 Interactive Home Walkthrough / Tour
- [x] Format — **SVG overhead diagram + hotspot links** (desktop); legend list for mobile clarity
- [x] Hotspots — deck → Decks; fence line → Fencing; roof → Roofing; sunroom bump → Sunrooms & pergolas; interior rect → Interior accents
- [x] Legend also links Patio covers, Siding & gutters (copy paths; not separate SVG zones)
- [x] Mobile — full link list under diagram; diagram remains scrollable/zoomable in browser

### 2.3 Services Hub (`services/index.html`)
- [x] `services/` directory + hub page
- [x] Seven service cards, messaging: specialty outdoor living, not whole-home reno

### 2.4 Individual Service Pages (`services/[slug]/index.html`)
- [x] Page shell for all seven: hero, trust bar, description, 4-step process, placeholder gallery, FAQ accordion, dark CTA
- [~] **Copy** — draft in place; refine with client voice + SEO keywords + service area
- [ ] **Galleries** — replace placeholder tiles with Drive images per `assets/images/<slug>/`
- [ ] **Temo** — confirm co-branding, logos, warranty language on `sunrooms-pergolas/` before launch

| Service | Route | Status |
|:---|:---|:---|
| Fencing | `/services/fencing/` | [x] shell + draft |
| Decks | `/services/decks/` | [x] shell + draft |
| Temo Sunrooms & Pergolas | `/services/sunrooms-pergolas/` | [x] shell + draft |
| Patio Covers, Carports & Cabanas | `/services/patio-covers/` | [x] shell + draft |
| Siding & Gutters | `/services/siding-gutters/` | [x] shell + draft |
| Roofing | `/services/roofing/` | [x] shell + draft |
| Interior Accents | `/services/interior-accents/` | [x] shell + draft |

### 2.5 Portfolio / Work Gallery (`our-work/index.html`)
- [x] `our-work/` + category filter + lightbox (`script.js`)
- [ ] Replace gradient/placeholder tiles with real photos from Drive

### 2.6 Support Pages
- [x] About (`about/index.html`) — hero, values, team placeholder
- [x] Contact (`contact/index.html`) — quote form (`#contactForm`), phone/email placeholders, map placeholder
- [x] FAQ (`faq/index.html`) — accordion + FAQPage schema starter
- [x] Testimonials (`testimonials/index.html`) — review grid (sample quotes; replace with verified)

---

## Phase 3: Blog

### 3.1 Blog Hub (`blog/index.html`)
- [x] Listing layout + category filter (reuses gallery filter pattern)
- [x] Categories: All, Decks, Fencing, Outdoor living, Roofing (adjust as content strategy firms up)

### 3.2 Blog Posts (`blog/[post-slug]/index.html`)
- [x] Stub posts (short body + internal links) for four slugs:
  - `deck-materials-guide/`
  - `fence-styles-privacy/`
  - `sunroom-three-season/`
  - `roof-replacement-signs/`
- [x] Expand each to 800–1,500 words, meta/OG, schema, full nav/footer, internal links, CTA callout box
  - `deck-materials-guide/` — wood vs composite vs PVC, East Alabama climate factors, cost ranges
  - `fence-styles-privacy/` — board-on-board, shadowbox, vinyl, neighbor design tips, height/setback guidance
  - `sunroom-three-season/` — three-season vs four-season vs screened porch vs pergola, Temo systems
  - `roof-replacement-signs/` — granule loss, curling, sagging, attic inspection, repair vs replace framework
- [ ] Hero images per post (pending Drive assets)

---

## Phase 4: Integrations & Advanced Features

### 4.1 Chat Widget
- [ ] Select platform (Tidio, Drift, Intercom, etc.)
- [ ] Configure routing / auto-responses
- [ ] Embed snippet site-wide (before `</body>` on all pages)

### 4.2 Missed Call Text-Back
- [ ] A2P / 10DLC (or toll-free) with client
- [ ] SMS platform (HighLevel, SimpleTexting, Twilio, …)
- [ ] Trigger + message copy
- [ ] End-to-end test

### 4.3 Google Drive Integration
- [ ] Confirm folder structure with client
- [ ] Organize by service (and optional Before/After)
- [ ] Ongoing workflow for new photos
- [ ] Export finalized assets into repo `assets/`

### 4.4 Contact Form Backend
- [ ] Point `contact/index.html` form `action` to Formspree, Netlify Forms, or CRM webhook
- [ ] Test submissions + spam protection if needed

### 4.5 Analytics
- [ ] Add GA4 (or alternative) when measurement ID is available

---

## Phase 5: Optimization & Launch

### 5.1 Mobile Responsiveness
- [ ] Full pass on real devices (phone/tablet)
- [ ] Walkthrough section readability + tap targets
- [ ] Fix any overflow / breakpoint issues found in QA

### 5.2 SEO & Meta
- [x] Unique `<title>` + meta description on main templates (refine when copy/area final)
- [x] [sitemap.xml](sitemap.xml) + [robots.txt](robots.txt) (update domain when production URL is live)
- [ ] Confirm target keywords + **service area / cities** in titles and LocalBusiness schema
- [ ] Add `testimonials/` and any new URLs to sitemap as they stabilize

### 5.3 Performance
- [ ] WebP (or AVIF) for hero and gallery; lazy-load below fold
- [ ] Optional: minify CSS/JS for production

### 5.4 Legal & Policy Pages
- [ ] Privacy Policy + Terms (dedicated pages or third-party embed)
- [ ] Update footer links from `#` to live URLs

### 5.5 Pre-Launch QA
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Link crawl — no 404s
- [ ] Forms + chat + SMS flows verified
- [ ] Final copy + imagery sign-off
- [ ] Deploy to production host; set canonical base URL everywhere

---

## Quick reference — repo entry points

| File / path | Role |
|:---|:---|
| `index.html` | Homepage |
| `styles.css` | Design system + components |
| `script.js` | Nav, reveal, forms, walkthrough helper, gallery filter + lightbox |
| `README.md` | Local preview + handoff checklist |

---

## Changelog (recent)

| Date | Notes |
|:---|:---|
| 2026-04-07 | Bulk renamed Waterstone Homes → Waterstone Companies across all 22 pages and logo markup. Updated asset section: no Drive/logo available, using existing photos. Expanded all 4 blog posts to 900–1,100 words with full nav, footer, schema, and CTA callouts. |
| 2026-04-08 | Task list synced to current build: static site bones, 7 services, our-work, blog stubs, SEO files; marked Drive, legal, integrations, and launch QA as open. |
