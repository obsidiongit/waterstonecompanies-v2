# Waterstone Companies — Website Repositioning Audit & Task List

> **Purpose:** Turn the current site from a "custom home builder / real estate" feel into a **specialty outdoor living contractor** site that homeowners would visit to book a deck, fence, patio cover, or roofing job.
>
> **Origin:** This site was adapted from a **Denver Interior & Doors Co.** template. The template was reskinned with Waterstone branding but never truly repositioned. The photography, copy, and UX patterns still read as "home builder."
>
> **Client feedback:** The site feels more like a page for his home development / real estate business, not a contracting business. He wants customers to come here to book construction-based jobs — new decks, patios, fencing — quick 1–2 day jobs by a highly skilled team.
>
> **Domain note:** The domain is `waterstonehomes.com` — the word "homes" reinforces the builder identity. Worth discussing with client whether a domain like `waterstoneco.com` or `waterstone-companies.com` is an option. Outside scope of this task list but noted for awareness.
>
> **Last updated:** April 13, 2026

**Legend:** `[x]` done · `[ ]` not done · `[~]` partial / in progress

---

## What's Working Well (Don't Break These)

Before changing anything, know what's solid and should be preserved:

- **Site structure / IA** — Clean routing, well-organized pages, proper sitemap
- **SEO fundamentals** — Unique titles, meta descriptions, schema markup, semantic HTML, `sitemap.xml`, `robots.txt`
- **Accessibility** — Skip links, ARIA labels, keyboard nav, focus states, `prefers-reduced-motion`
- **Design system** — Grayscale palette is professional; DM Sans + DM Serif Display typography works well
- **Component patterns** — Cards, nav, footer, forms, dropdowns are all well-built
- **Service page template** — Layout is excellent: hero → trust bar → content + sidebar → process → gallery → FAQ → CTA
- **Responsive CSS** — Thorough breakpoint coverage
- **Contact form** — Well-structured with service interest dropdown
- **Service page process sections** — 4-step Consult → Plan → Build → Walkthrough flow is great

---

## Problem #1: Photography Tells the Wrong Story

> **This is the #1 issue.** The photos across the site are almost exclusively full-house glamour shots — brand-new custom home exteriors, aerial drone shots of residential lots, polished interiors. These are home builder portfolio photos, not contractor service photos.

### Current Hero/Feature Photo Audit

| Location | Current File | What It Shows | Problem | Fix |
|:---|:---|:---|:---|:---|
| **Homepage hero** | `photos/6I1A0391.jpg` | Full front-elevation of a brand-new farmhouse-style custom home on a cleared lot | Reads as "we build custom homes from the ground up" | Replace with a **finished deck/patio/fence** close-up — actual contractor work |
| **Contact hero** | `photos/Photo_6553604_DJI_4_...jpg` | Aerial drone shot of a house on a rural lot | Reads as "we're a land developer / builder" | Replace with **crew at work** or a **finished backyard transformation** |
| **Services hub hero** | `photos/Photo_6553605_DJI_5_...jpg` | Another aerial drone shot of a neighborhood/property | Same developer feel | Replace with a **collage or tight shot** of actual trade work |
| **About page hero** | `photos/2N4A4450.jpg` | Interior living room with beams | Interior / custom home vibe | Replace with **outdoor project photo** or **team/crew** photo |
| **About "Meet the team"** | `photos/Photo_6553601_DJI_1_...jpg` | Aerial of homes in a development | Reads as "we built this neighborhood" | Replace with **Brian and/or crew**, tools, close-up craftsmanship |
| **Decks gallery** | Mix of `2N4A4525`, `2N4A5550`, `6I1A0391`, `DJI_5` | Mostly full-house exteriors, one deck photo | Confusing — home listing or deck page? | Replace with **all deck close-ups**: railing detail, board patterns, hardware, before/after |

### Usable "Contractor-Feel" Photos in Current Library

Among the 224 photos in `photos/`, these have the right feel:

| File | What It Shows | Usable For |
|:---|:---|:---|
| `6I1A0460.jpg` | Sunroom/patio dining area — good lifestyle shot | ✅ Sunrooms, homepage |
| `2N4A5550.jpg` | Covered porch with brick, columns, craftsman detail | ✅ Patio covers, homepage |
| `2N4A4445.jpg` | Fireplace/mantel interior | ✅ Interior accents service page |
| `2N4A4525.jpg` | Large rear deck with cable railing (full house visible) | ⚠️ Usable for decks but still shows full house |
| `pexels-nano71-27291299.jpg` | Fence photo | ⚠️ Stock/Pexels photo — not real project work |
| `pexels-ivan-s-4458196.jpg` | Stock photo | ⚠️ Stock |
| `pexels-ivan-s-4458210.jpg` | Stock photo | ⚠️ Stock |

> **⚠️ Photo gap warning:** The bulk of the library is full-house exteriors, aerial drone shots, and staged interiors — all home builder portfolio content. **The client may need to provide more close-up project photos** (finished decks, fence details, roofing work, patio covers) or a photo shoot of recent work may be needed.

### Photo Tasks

- [ ] **Ask the client** for close-up project photos of individual services (decks, fences, roofing, patio covers, sunrooms) — not full-house shots
- [ ] **Ask for before/after pairs** if any exist — these are the highest-converting images on contractor sites
- [ ] **Ask for crew/team photos** — Brian on a job site, the team working — builds trust for a contractor
- [ ] Replace homepage hero image (`6I1A0391.jpg`) with a finished outdoor project close-up
- [ ] Replace contact page hero (aerial DJI_4) with crew-at-work or finished backyard photo
- [ ] Replace services hub hero (aerial DJI_5) with a service-focused photo or collage
- [ ] Replace about page "Meet the team" aerial (DJI_1) with a real team/crew photo
- [ ] Curate each service page gallery to show **only** photos of that specific service — not full house exteriors
  - [ ] `services/fencing/` — needs real fence project photos
  - [ ] `services/decks/` — needs deck-only close-ups, not full house exteriors
  - [ ] `services/sunrooms-pergolas/` — `6I1A0460.jpg` is good, need more
  - [ ] `services/patio-covers/` — `2N4A5550.jpg` works, need more
  - [ ] `services/siding-gutters/` — needs siding/gutter detail shots
  - [ ] `services/roofing/` — needs roofing work photos (shingle detail, crew on roof, etc.)
  - [ ] `services/interior-accents/` — `2N4A4445.jpg` is good for fireplace, need beam/closet photos
- [ ] Remove or relocate all aerial drone/full-house development shots from service pages (can keep on About page sparingly)

---

## Problem #2: Copy Positioning is Wrong

> The product brief and style guide both say "not a whole-home renovation company" — but the actual live copy contradicts this throughout.

### Copy Issues — Specific Lines to Fix

| Page | File | Current Copy | Problem | Suggested Replacement |
|:---|:---|:---|:---|:---|
| **Homepage hero headline** | `index.html` L106 | *"Waterstone Companies — You bring the Dream and we'll help you with the rest."* | "Dream" = dream home. Too vague, builder territory. | *"Your outdoor space, done right."* or *"Built for how you actually live outside."* or *"New deck by Friday? Let's talk."* |
| **Homepage hero desc** | `index.html` L107 | *"From roofing and siding to custom decks and sunrooms — Waterstone handles it all with honest pricing and no surprises."* | "Handles it all" = general contractor tagline — exactly what the brief says to avoid | Rewrite to focus on specific outdoor living services. E.g. *"Decks, fences, sunrooms, roofing, siding & more — flat-fee pricing, experienced crew, done on schedule."* |
| **Homepage services heading** | `index.html` L197 | *"From the roof to the back deck"* | Implies scope that's too broad | *"What we build"* or *"Our specialties"* |
| **Services hub hero** | `services/index.html` L77 | *"Everything your home needs, from one crew"* | This is literally a general contractor / handyman tagline | *"Decks, fences, roofing & more — one call, one crew"* or *"Outdoor living & home improvement, done right"* |
| **Contact hero desc** | `contact/index.html` L111 | *"Tell us about your lot, plans, or dream home—we'll follow up with questions, timing, and next steps."* | 🚨 A customer wanting a fence doesn't have a "lot" or "plans." Pure home-builder language. | *"Tell us about your project — we'll follow up with a quote and next steps."* |
| **About intro** | `about/index.html` L79 | *"Whatever your home needs, chances are we do it"* | General contractor / "we do everything" framing | Reframe around specific outdoor living + improvement services |
| **About values** | `about/index.html` L90 | *"How we operate on site, in the office, and with your budget — so the home you move into matches the home you planned for."* | "Home you move into" = new construction framing | *"…so the finished project matches what we showed you in the quote."* |
| **About values — Do your job** | `about/index.html` L100 | *"Building is physical work with real deadlines…not a rushed turnover."* | "Turnover" = builder handing over keys on a new home | Rewrite with contractor framing: *"…not a rushed finish."* |
| **About values — Customer service** | `about/index.html` L132 | *"Your home should reflect how you live, not a builder's default."* | Home-building speak. Contractor customers don't think in "builder's default." | *"Your project should match your vision, not a one-size-fits-all approach."* |
| **About values — Communication** | `about/index.html` L148 | *"The best builds run on steady dialogue…turning drawings into a home."* | "Turning drawings into a home" = building a house | *"…turning your ideas into a finished project."* |
| **About values — Transparency** | `about/index.html` L168 | *"We're a true custom builder: if you can describe it and fund it, we'll help you understand what it takes to build it."* | 🚨 Directly calls the company a "custom builder" | Remove or rewrite: *"We're a contractor that works with you — if you can picture it, we'll help you understand what it takes to get it done."* |
| **Footer (all 22 pages)** | All files | *"AL Home Builder License #25174"* | "Home Builder" reinforces builder identity | Change to *"Licensed & Insured — AL #25174"* (matches the hero trust badges already) |

### Copy Tasks

- [x] Rewrite homepage hero headline (L106 in `index.html`)
- [x] Rewrite homepage hero description (L107 in `index.html`)
- [x] Rewrite homepage services section heading (L197 in `index.html`)
- [x] Rewrite services hub hero headline (L77 in `services/index.html`)
- [x] Rewrite contact page hero description (L111 in `contact/index.html`)
- [x] Rewrite about page intro paragraph (L79 in `about/index.html`)
- [x] Rewrite about page core values subheading (L90 in `about/index.html`)
- [x] Rewrite about page "Do your job" value copy (L100 in `about/index.html`)
- [x] Rewrite about page "Customer service" value copy (L132 in `about/index.html`)
- [x] Rewrite about page "Communication" value copy (L148 in `about/index.html`)
- [x] Rewrite about page "Transparency" value copy — remove "custom builder" (L168 in `about/index.html`)
- [x] Update footer license text across **all 22 pages**: *"AL Home Builder License #25174"* → *"Licensed & Insured — AL #25174"*
  - [x] `index.html`
  - [x] `about/index.html`
  - [x] `contact/index.html`
  - [x] `services/index.html`
  - [x] `services/fencing/index.html`
  - [x] `services/decks/index.html`
  - [x] `services/sunrooms-pergolas/index.html`
  - [x] `services/patio-covers/index.html`
  - [x] `services/siding-gutters/index.html`
  - [x] `services/roofing/index.html`
  - [x] `services/interior-accents/index.html`
  - [x] `our-work/index.html`
  - [x] `blog/index.html`
  - [x] `blog/deck-materials-guide/index.html`
  - [x] `blog/fence-styles-privacy/index.html`
  - [x] `blog/sunroom-three-season/index.html`
  - [x] `blog/roof-replacement-signs/index.html`
  - [x] `testimonials/index.html`
  - [x] `faq/index.html`
  - [x] `privacy/index.html`
- [x] Do a final grep for remaining "dream home", "custom builder", "lot, plans", "home you move into" strings across all files to confirm cleanup
- [x] Soften technical/engineering language on all 7 service pages to be more homeowner-friendly
  - [ ] `services/fencing/index.html`
  - [x] `services/decks/index.html`
  - [x] `services/sunrooms-pergolas/index.html`
  - [x] `services/patio-covers/index.html`
  - [x] `services/siding-gutters/index.html`
  - [x] `services/roofing/index.html`
  - [ ] `services/interior-accents/index.html`

---

## Problem #3: Missing "Contractor Energy" — UX Patterns

> The client's value prop: "quick 1–2 day jobs by a highly skilled team." The site has **zero** language or UX around speed, efficiency, or project turnaround. Every successful contractor site has these patterns — this one doesn't.

### What's Missing

| Missing Element | Why It Matters | Where It Goes |
|:---|:---|:---|
| **🚨 Hero lead capture form** | Most contractor sites have an inline quote form right in the hero — name, phone, service, submit. Currently the only form is on the contact page (a separate click away). This is the #1 conversion killer. | Homepage hero section |
| **🚨 Video hero background** | A looping background video of outdoor work (building a deck, installing a fence, roofing crew) instantly communicates "contractor" and brings the hero to life. Current static photo of a full house reads as builder portfolio. | Homepage hero — replace static `background-image` with `<video>` element |
| **🚨 AI chatbot widget** | No live chat or conversational lead capture anywhere on the site. Modern contractor sites use chatbots to qualify leads 24/7. Could use an AI-powered bot (Claude/GPT/Gemini API, or internal Geode software) for real conversational intake. | Floating widget on all pages, optionally embedded in hero alongside the form |
| **"How it Works" 3-step section** on homepage | Contractors make it dead simple: Call → Quote → Done. Highest-converting section on contractor sites. | Homepage — between services grid and testimonials |
| **Speed / turnaround language** | A homeowner wanting a fence wants to know: "How fast?" | Service pages + homepage |
| **Cost range indicators** | Even ballpark ranges (*"Most fence projects: $3k–$8k"*) build confidence and attract the right leads | Service pages (sidebar "Project snapshot" boxes) |
| **Before/After section** on homepage | The most powerful conversion tool for a contractor — completely absent | Homepage — after "How it Works" or before testimonials |
| **Stats/trust bar** on homepage | *"30+ years experience · 200+ projects · 5-star rated · Licensed & insured"* — currently scattered, should be consolidated into a punchy visual bar | Homepage — after hero or before testimonials |
| **"Book a free estimate" flow** | Current "Get a Free Quote" CTA is fine but the flow to get there doesn't feel fast or easy — feels like submitting plans to a builder | Contact form framing (less formal, more "tell us what you need") |

### Missing Section Tasks

- [x] **Add "How it Works" section to homepage** (`index.html`) between services grid and testimonials
  - Step 1: **Call or message** — Describe your project, we'll ask the right questions
  - Step 2: **Get your quote** — Flat-fee pricing, in writing, no surprises
  - Step 3: **We build it** — Licensed crew, clean site, on schedule
  - Style: Use the existing `process-grid` / `process-step` pattern from service pages
- [x] **Add a stats/trust bar to homepage** — consolidate the scattered trust signals
  - E.g.: *"30+ years experience · Licensed & insured · Flat-fee pricing · 5-star reviews"*
  - Could go between hero and services, or between services and testimonials
- [ ] **Add Before/After section to homepage** (contingent on having before/after photos)
  - If no before/after photos available, skip or use side-by-side project photos
  - Consider a simple slider or side-by-side layout
- [ ] **Add estimated timeframe language to service pages** where appropriate
  - Client needs to confirm typical turnaround times per service
  - Examples: *"Most fence installs complete in 1–3 days"*, *"Typical deck build: 3–5 days"*
  - Goes in the sidebar "Project snapshot" boxes
- [ ] **Consider adding cost range indicators** to service page sidebars
  - Client needs to confirm if they want ballpark pricing shown
  - E.g.: *"Typical investment: $3,000–$8,000 depending on materials and scope"*

---

## Problem #4: Blueprint Background in Testimonials

> The testimonials section uses a blueprint/CAD-drawing background pattern (`assets/blueprint-parallax-bg.png`). This is an architectural/engineering aesthetic that screams "home builder."

### Blueprint Tasks

- [x] Replace the blueprint pattern background in the testimonials section with a simple dark background or a subtle texture (wood grain, concrete, etc.)
  - File: `styles.css` — find `.blueprint-section` styles
  - File: `assets/blueprint-parallax-bg.png` — replace or remove
  - Option A: Just use a solid dark color (`#0A0A0A` or `#1a1a1a`)
  - Option B: Use one of the outdoor project photos as a dimmed parallax background
  - Option C: Replace with a subtle wood/concrete texture that fits the contractor aesthetic

---

## Problem #5: About Page is Builder-Focused

> Beyond the copy issues listed above, the About page has structural content problems.

### About Page Structural Issues

| Issue | Detail |
|:---|:---|
| **Brian's background emphasis** | Mechanical engineering degree and real estate license are highlighted prominently — these signal "I build custom homes" not "I'll install your deck." Should be mentioned as background but lead with contracting experience. |
| **Interior photos on About page** | Kitchen island photo (`6I1A0547.jpg`), living room photo (`2N4A4450.jpg`) — this is an outdoor living contractor site, why are we showing interiors on the About page? |
| **"Who are our customers" framing** | Talks about people "building homes" — should reframe around homeowners upgrading/improving their properties |
| **Aerial photo as team photo** | "Meet the team" section uses a drone shot of a housing development instead of actual people |

### About Page Tasks

- [ ] Reframe Brian's background — lead with contracting experience and years of service, mention engineering/real estate as supplemental
- [ ] Replace interior photos (`6I1A0547.jpg` kitchen, `2N4A4450.jpg` living room) with outdoor project photos
- [ ] Rewrite "Who are our customers" section to focus on homeowners upgrading/improving — not building
  - Current: *"They've owned their home for a while and want to invest in it — a new roof before things get serious, a deck they'll actually use, or a sunroom that's been on the wish list for years."* — this line is actually okay, keep
  - Fix the framing around it to be less about "building a home" and more about "improving your property"
- [ ] Replace aerial "Meet the team" photo with actual team/crew photo (requires client to provide)

---

## Problem #6: Service Pages Lean Technical

> The service page *structure* is excellent — the issue is language and photo selection.

### Service Page Language Pattern

**Current (builder-heavy):**
> *"Code-smart framing: Loads, spans, and connections engineered for safety."*

**Better (homeowner-friendly):**
> *"Solid framing that's built to code and built to last."*

The technical depth isn't bad — it just needs to be translated into homeowner language. Keep the expertise, lose the jargon.

### Service Page Tasks

- [x] Review and soften language across all 7 service pages (listed individually under Copy Tasks above)
- [ ] Add timeline estimates to each service page sidebar (requires client input)
- [ ] Ensure all gallery/project photos are service-specific (listed individually under Photo Tasks above)

---

## Problem #7: Minor Technical Items

### Schema Markup

- [x] Review homepage schema — `@type: HomeAndConstructionBusiness` is fine for SEO but the `description` field should be more service-keyword-rich
- [ ] Individual service pages use `@type: Service` — correct, no change needed

### Home Walkthrough / Tour Feature

The project tasklist mentions an interactive SVG house diagram with clickable hotspots. This is a **home builder** feature. A contractor would instead:
- Show a clean services grid (which already exists), or
- Show a **yard/property** diagram if any interactive element is kept

- [ ] Evaluate whether the home walkthrough feature should be included at all — or replaced with a simpler services showcase
- [ ] If kept, change from a "house" diagram to a "yard/property" diagram showing outdoor zones

### Facebook Link

- [ ] The Facebook page URL is `facebook.com/BrianCampCustomHome/` — can't change the URL, but ensure the link text doesn't draw attention to "CustomHome" (currently just shows the FB icon, which is fine)

---

## Problem #8: No Lead Capture Form on Homepage Hero

> **This is a critical conversion gap.** Almost every successful contractor website has an inline quote request form right in the hero section — not just a button that links to a separate Contact page. When a homeowner lands on the site, the path to "I want a quote" should be **zero clicks away**.

### Current State

- The homepage hero has two buttons: "Contact us" and "Our work" — both link to other pages
- The **only** form on the entire site is on `contact/index.html`
- A homeowner has to: see hero → click "Contact us" → land on contact page → scroll to form → fill it out
- That's 3–4 steps where competitors give them **1 step** right in the hero

### What a Contractor Hero Section Looks Like

Typical high-converting contractor hero layout:

```
┌─────────────────────────────────────────────────────────────────────┐
│  [VIDEO BACKGROUND — crew building a deck, looping, muted]        │
│                                                                     │
│  LEFT SIDE:                        RIGHT SIDE:                      │
│  ┌──────────────────────┐         ┌──────────────────────────┐      │
│  │ Headline:            │         │ ╔══════════════════════╗ │      │
│  │ "Your outdoor space,  │         │ ║  Request a Quote     ║ │      │
│  │  done right."        │         │ ║──────────────────────║ │      │
│  │                      │         │ ║  Name: [__________]  ║ │      │
│  │ Subhead:             │         │ ║  Phone: [_________]  ║ │      │
│  │ Decks, fences,       │         │ ║  Service: [▼ Pick ]  ║ │      │
│  │ roofing & more...    │         │ ║  Details: [_______]  ║ │      │
│  │                      │         │ ║                      ║ │      │
│  │ Trust badges:        │         │ ║  [ Get Your Quote → ]║ │      │
│  │ ✓ Licensed ✓ Insured │         │ ╚══════════════════════╝ │      │
│  └──────────────────────┘         └──────────────────────────┘      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Hero Lead Capture Tasks

- [x] **Add an inline quote request form to the homepage hero section** (`index.html`)
  - Split the hero into a two-column layout: copy/headline on the left, form on the right
  - Form fields (keep it short — 4–5 fields max for conversion):
    - Name (required)
    - Phone (required)
    - Service interest (dropdown — reuse the same options from `contact/index.html`)
    - Brief description / "What do you need?" (optional textarea, 2–3 rows)
    - Submit button: *"Get Your Free Quote"* or *"Request a Quote"*
  - On mobile: form stacks below the headline
  - Form `action` should point to the same backend as the contact form (Formspree, Netlify Forms, or CRM webhook — currently `#`)
  - Consider a success state / thank-you message inline
- [x] **Keep the existing contact page form** — the hero form is a supplement, not a replacement
- [x] **Add CSS for the hero form** in `styles.css`
  - Form card: semi-transparent dark or white background with subtle backdrop blur for legibility over the hero image/video
  - Match existing form input styles from `contact/index.html`
  - Compact layout — minimize vertical height so the hero doesn't become overly tall
- [ ] **Wire up form submission** — point `action` to the same endpoint as the contact page form
  - Currently both forms action to `#` (placeholder)
  - When backend is set up (Formspree, Netlify, CRM), update both forms

---

## Problem #9: Static Hero — No Video Background

> The homepage hero is a static image (`background-image` in CSS) of a full custom home. Contractor sites that convert well almost always use a **looping background video** — it immediately communicates activity, craftsmanship, and energy. A static photo of a finished house communicates "real estate listing."

### Video Hero Implementation

**Approach:** Replace the static `background-image` on the homepage hero with a muted, looping `<video>` element. The video plays silently behind the headline + form. Falls back to a static image if the video fails to load or on slow connections.

### Video Source Options

| Option | Pros | Cons |
|:---|:---|:---|  
| **Stock video** (Pexels, Coverr, Pixabay) | Free, available immediately, professional quality | Not real Waterstone work |
| **Client-provided footage** | Authentic, differentiating | May not exist; would need shooting |
| **Mixed approach** | Use stock for now, swap in client footage later | Best of both worlds |

**Recommended stock video subjects** (search on Pexels Video, Coverr, or Pixabay):
- Crew building a wooden deck — overhead or side angle
- Fence installation — posts going in, boards being attached
- Roofing crew working on shingles
- Finished patio/outdoor living space with people enjoying it
- General construction b-roll — sawing, measuring, drilling

### Video Hero Tasks

- [ ] **Source 1–3 stock videos** for the homepage hero background
  - Look for outdoor construction / contractor work footage
  - Ideal: 10–20 seconds, seamless loop, 1080p+ resolution
  - Free sources: Pexels Video, Coverr, Pixabay Video
  - Download in MP4 (H.264) + WebM formats for browser compatibility
- [x] **Implement `<video>` hero** in `index.html`
  - Replace the current `style="background-image: ..."` on the hero `<section>`
  - Structure:
    ```html
    <section class="hero hero--video" id="home">
        <video class="hero-video" autoplay muted loop playsinline poster="photos/fallback.jpg">
            <source src="assets/videos/hero.webm" type="video/webm">
            <source src="assets/videos/hero.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
        <div class="hero-content"> ... </div>
    </section>
    ```
  - `poster` attribute: Use a good static frame as fallback
  - `playsinline`: Required for iOS autoplay
- [x] **Add video hero CSS** in `styles.css`
  - `.hero--video` positioning (relative container)
  - `.hero-video` — `position: absolute; inset: 0; object-fit: cover; width: 100%; height: 100%; z-index: 0;`
  - Ensure the dark gradient overlay still sits on top of the video for text legibility
  - Consider `@media (prefers-reduced-motion: reduce)` — hide video, show poster image instead
- [x] **Performance considerations**
  - Keep video file size under 5–8 MB for reasonable load times
  - Use `loading` attribute or lazy-load the video for mobile
  - Consider lower-resolution version for mobile breakpoints
  - Add `assets/videos/` directory to the project
- [x] **Keep static hero as fallback** — if video fails, the `poster` image still shows
- [x] **Other pages stay static** — video hero is homepage only; service pages, about, contact keep their static hero images

---

## Problem #10: No Chatbot / Conversational Lead Capture

> The original project tasklist (Phase 4.1) listed a chat widget as a future feature with "platform TBD (Tidio, Drift, Intercom)." But the real opportunity here is bigger: an **AI-powered conversational bot** that can qualify leads, answer common questions about services, and collect project details 24/7 — not just a basic live chat widget.

### Why This Matters for a Contractor Site

- Homeowners often browse contractor sites **after hours** (evenings, weekends) — nobody's answering the phone
- A chatbot can ask qualifying questions: *"What service are you interested in? What's your zip code? What's your timeline?"*
- It can answer FAQ-type questions instantly: *"Do you do fencing?"* → *"Yes! We do privacy fencing, board-on-board, vinyl, and more. Want a free quote?"*
- Captured lead info goes directly to the business owner's inbox or CRM

### Implementation Options

| Option | Complexity | Cost | Notes |
|:---|:---|:---|:---|
| **A. Geode (internal software)** | Medium | Free (internal) | If Geode has an embeddable chat widget / JS SDK, this could be the cleanest solution. Would need to confirm API/embed capabilities. |
| **B. Custom widget + AI API** | High | API costs (~$0.01–0.05/conversation) | Build a custom chat UI in JS, call Claude/GPT/Gemini API from a lightweight backend (Vercel edge function, Cloudflare Worker, etc.). Full control over personality, knowledge base, and lead capture flow. |
| **C. Third-party platform (Tidio, Drift, Intercom, Chatbase)** | Low | $0–50/mo for basic tiers | Drop-in widget, some support AI/GPT natively. Fast to set up but less customizable. |
| **D. Hybrid: Third-party chat + AI brain** | Medium | $20–50/mo + API costs | Use Tidio/Chatbase for the widget UI but power it with a custom AI knowledge base trained on Waterstone's services, FAQ, and pricing. |

### Chat Widget Tasks

- [ ] **Decide on implementation approach** — Geode, custom build, or third-party?
  - [ ] If Geode: Confirm embeddable widget / JS SDK is available. What API does it expose?
  - [ ] If custom: Choose AI provider (Claude API, GPT API, Gemini API)
  - [ ] If third-party: Evaluate Tidio, Chatbase, or Drift free tiers
- [ ] **Define the bot's knowledge base / personality**
  - Services offered (all 7 service categories + details)
  - Service area (St. Clair County, East Jefferson County, Trussville, Moody, Odenville)
  - Pricing approach (flat-fee, transparent quotes — no specific dollar amounts unless client approves)
  - Process (Consult → Quote → Build → Walkthrough)
  - Business hours, phone number, email
  - Common FAQ answers (from `faq/index.html`)
  - Personality: Professional but warm, local/neighborly, direct, no corporate speak
- [ ] **Design the chat widget UI**
  - Option A: **Floating bubble** (bottom-right corner) — standard, works on all pages
  - Option B: **Embedded in hero section** alongside/below the lead capture form — more prominent but homepage-only
  - Option C: **Both** — embedded on homepage, floating on all other pages
  - Visual style: Match the site's grayscale design system (dark chat window, white text, `DM Sans` font)
- [ ] **Lead capture flow in the chatbot**
  - Bot should collect: Name, phone/email, service interest, project description, zip code
  - After collecting info: *"Thanks [name]! We'll follow up within 24 hours with a quote. In the meantime, call us at (205) 575-0176 if you'd like to talk now."*
  - Captured leads should be emailed to `brian@briancamp.com` (or sent to CRM)
- [ ] **Embed the widget** — add `<script>` snippet before `</body>` on all pages
  - If using a third-party: Just paste their embed code
  - If custom/Geode: Build the widget component and include it
- [ ] **Test the chatbot** — ensure it handles common questions correctly and captures leads reliably

---

## Global Search-and-Replace Reference

Quick-reference for text that needs to be found and changed across the entire codebase:

| Find (case-insensitive) | Replace With | Files Affected |
|:---|:---|:---|
| `Home Builder License` | `Licensed & Insured` (keep the license number) | All 22 pages (footer) |
| `dream home` | `project` or `outdoor space` | `contact/index.html`, possibly others |
| `custom builder` | `outdoor living contractor` or `your local contractor` | `about/index.html` |
| `lot, plans, or dream home` | `your project` | `contact/index.html` |
| `the home you move into` | `the finished result` or `the finished project` | `about/index.html` |
| `Everything your home needs` | Remove "everything" framing; be specific about services | `services/index.html` |
| `handles it all` | List specific services instead | `index.html` |
| `turning drawings into a home` | `turning your ideas into a finished project` | `about/index.html` |

---

## Execution Priority

Recommended order for maximum impact with minimum effort:

### 🔴 Do First (Biggest Impact — Homepage Conversion)
1. ~~**Add hero lead capture form** to homepage (inline quote form — this is the single biggest conversion gap)~~ ✅
2. ~~Rewrite homepage hero headline + description~~ ✅
3. ~~**Implement video hero background** on homepage~~ ✅ (HTML/CSS done — needs stock video file dropped into `assets/videos/`)
4. ~~Rewrite services hub hero headline~~ ✅
5. ~~Rewrite contact page hero description~~ ✅
6. ~~Add "How it Works" section to homepage~~ ✅
7. ~~Footer license text update across all pages~~ ✅

### 🟡 Do Second (Photography + Visual)
8. Replace homepage hero fallback photo (poster frame for video)
9. Replace contact page hero photo
10. Replace services hub hero photo
11. Curate service page galleries to be service-specific
12. Replace about page photos
13. ~~Replace blueprint background pattern~~ ✅

### 🟢 Do Third (Deeper Content)
14. ~~Rewrite about page copy (values, customer section, team)~~ ✅
15. ~~Soften service page technical language~~ ✅
16. ~~Add stats/trust bar to homepage~~ ✅
17. Add timeline estimates to service pages (requires client input)
18. Add before/after section (requires photos)

### 🔵 Do Fourth (AI Chatbot)
19. **Decide chatbot approach** — Geode, custom build (Claude/GPT/Gemini API), or third-party (Tidio/Chatbase)
20. Define bot knowledge base and personality
21. Build or configure the chat widget
22. Design lead capture flow in the chatbot
23. Embed widget across all pages
24. Test chatbot conversations and lead capture

### ⚪ Discuss with Client
25. Photo shoot for close-up project photos
26. Before/after pairs
27. Team/crew photos
28. Timeline estimates per service
29. Cost range indicators (do they want pricing on the site?)
30. Domain change consideration
31. Home walkthrough feature — keep, modify, or remove?
32. Chatbot platform preference (Geode? Third-party? Custom?)
33. AI chatbot personality / tone approval

---

## File Inventory (Quick Reference)

| File / Path | Role | Needs Changes? |
|:---|:---|:---|
| `index.html` | Homepage | ✅ Hero copy, hero form, video hero, add sections |
| `styles.css` | Design system + components | ✅ Blueprint BG removal, hero form styles, video hero styles, chatbot widget styles |
| `script.js` | Nav, reveal, forms, gallery | ✅ Hero form submission, chatbot widget logic |
| `assets/videos/` | Hero video files | ✅ **NEW** — add directory with hero video (MP4 + WebM) |
| `about/index.html` | About page | ✅ Major copy + photo changes |
| `contact/index.html` | Contact / quote form | ✅ Hero copy + photo |
| `services/index.html` | Services hub | ✅ Hero copy + photo |
| `services/fencing/index.html` | Fencing service | ✅ Gallery curation, language softening |
| `services/decks/index.html` | Decks service | ✅ Gallery curation, language softening |
| `services/sunrooms-pergolas/index.html` | Sunrooms & pergolas | ✅ Gallery curation, language softening |
| `services/patio-covers/index.html` | Patio covers | ✅ Gallery curation, language softening |
| `services/siding-gutters/index.html` | Siding & gutters | ✅ Gallery curation, language softening |
| `services/roofing/index.html` | Roofing | ✅ Gallery curation, language softening |
| `services/interior-accents/index.html` | Interior accents | ✅ Gallery curation, language softening |
| `our-work/index.html` | Portfolio gallery | ✅ Footer only |
| `blog/index.html` | Blog hub | ✅ Footer only |
| `blog/deck-materials-guide/index.html` | Blog post | ✅ Footer only |
| `blog/fence-styles-privacy/index.html` | Blog post | ✅ Footer only |
| `blog/sunroom-three-season/index.html` | Blog post | ✅ Footer only |
| `blog/roof-replacement-signs/index.html` | Blog post | ✅ Footer only |
| `testimonials/index.html` | Reviews page | ✅ Footer only |
| `faq/index.html` | FAQ page | ✅ Footer only |
| `privacy/index.html` | Privacy policy | ✅ Footer only |
| `assets/blueprint-parallax-bg.png` | Blueprint BG image | ✅ Replace or remove |
| `project-style-guide.md` | Design tokens reference | ❌ No changes needed |
| `project-product-brief.md` | Product brief | ❌ Already has correct positioning |
| `project-site-map.md` | IA / SEO reference | ❌ No changes needed |
| `project-tasklist.md` | Original build task list | ❌ Separate from this repositioning work |
