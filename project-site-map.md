# Site Map & SEO Architecture — [Client Name]
> Site structure for [Client Name] website · April 2026
> Target area: [Service area / city TBD]

---

## Full Site Structure

```
[domain.com]/
│
├── Home (/)
│
├── Services (/services/)                          ← Service hub/landing page
│   ├── Fencing
│   │   └── /services/fencing/
│   ├── Decks
│   │   └── /services/decks/
│   ├── Temo Sunrooms & Pergolas
│   │   └── /services/sunrooms-pergolas/
│   ├── Patio Covers, Carports & Cabanas
│   │   └── /services/patio-covers/
│   ├── Siding & Gutters
│   │   └── /services/siding-gutters/
│   ├── Roofing
│   │   └── /services/roofing/
│   └── Interior Accents (Beams, Fireplaces & Mantles, Closets)
│       └── /services/interior-accents/
│
├── Our Work (/our-work/)                          ← Portfolio/gallery hub
│   ├── Fencing (/our-work/fencing/)
│   ├── Decks (/our-work/decks/)
│   ├── Sunrooms & Pergolas (/our-work/sunrooms-pergolas/)
│   ├── Patio Covers & Carports (/our-work/patio-covers/)
│   ├── Roofing & Siding (/our-work/roofing-siding/)
│   └── Before & After (/our-work/before-after/)
│
├── Locations (/locations/)                        ← Local SEO hub [if applicable]
│   ├── [City 1] (/locations/[city-1]/)
│   ├── [City 2] (/locations/[city-2]/)
│   └── *(Add cities per service area)*
│
├── Blog (/blog/)                                  ← Longtail keyword content hub
│   │
│   ├── — FENCING —
│   ├── [Blog post TBD]
│   │   └── /blog/[post-slug]/
│   │
│   ├── — DECKS —
│   ├── [Blog post TBD]
│   │   └── /blog/[post-slug]/
│   │
│   ├── — SUNROOMS & PERGOLAS —
│   ├── [Blog post TBD]
│   │   └── /blog/[post-slug]/
│   │
│   ├── — PATIO COVERS & OUTDOOR LIVING —
│   ├── [Blog post TBD]
│   │   └── /blog/[post-slug]/
│   │
│   ├── — ROOFING & SIDING —
│   ├── [Blog post TBD]
│   │   └── /blog/[post-slug]/
│   │
│   └── — GENERAL / BUYER'S GUIDES —
│       ├── [Blog post TBD]
│       │   └── /blog/[post-slug]/
│       └── *(Add more as content strategy is defined)*
│
├── Testimonials (/testimonials/)
│
├── FAQ (/faq/)
│
├── About (/about/)
│
└── Contact (/contact/)
```

---

## SEO Priority Tiers

### 🔴 Tier 1 — Highest Priority (Build First)
High-intent, transactional searches closest to a buying decision.

| Page | Target Keyword |
|------|---------------|
| `/services/decks/` | "[decks/deck builder] [city]" |
| `/services/fencing/` | "[fencing contractor] [city]" |
| `/services/sunrooms-pergolas/` | "[sunroom/pergola installer] [city]" |
| `/locations/[primary city]/` | "[outdoor living contractor] [city]" |
| `/blog/[cost post TBD]/` | "how much does [service] cost [city]" |
| `/blog/[hire guide TBD]/` | "how to hire [service] contractor [city]" |

### 🟡 Tier 2 — Secondary Priority
Support pages that build topical authority and capture mid-funnel traffic.

| Page | Target Keyword |
|------|---------------|
| `/services/patio-covers/` | "patio cover [city]" |
| `/services/roofing/` | "roofing contractor [city]" |
| `/services/siding-gutters/` | "siding contractor [city]" |
| `/services/interior-accents/` | "beam installation / fireplace mantle [city]" |
| `/our-work/before-after/` | "[service] before and after [city]" |
| `/blog/[comparison post TBD]/` | "[product A] vs [product B]" |
| `/locations/[secondary cities]/` | "[service] [suburb]" |

### 🟢 Tier 3 — Longtail / Content Authority
Longtail blog posts and remaining location pages. Lower volume, easier to rank.

| Page | Target Keyword |
|------|---------------|
| `/blog/[buying guide TBD]/` | "best [material/style] for [service]" |
| `/blog/[ideas post TBD]/` | "[service] ideas [region/state]" |
| `/locations/[remaining cities]/` | "[service] [suburb]" |

> **Note:** Fill in target keywords once service area and primary city are confirmed with client.

---

## Page Count Summary

| Section | Pages |
|---------|-------|
| Core pages (Home, About, Contact, FAQ, Testimonials) | 5 |
| Service pages | 7 |
| Portfolio/gallery pages | 6 |
| Location pages | [TBD — based on service area] |
| Blog posts | [TBD — based on content strategy] |
| **Confirmed Total** | **18 + TBD** |

---

## Notes for Development

- **Location pages** should each have unique copy referencing the specific city — avoid duplicate content.
- **Service pages** should include: hero, description, process, photo gallery, FAQ accordion, and CTA to contact.
- **Blog posts** should be 800–1,500 words, include internal links to relevant service pages, and target one primary keyword per post.
- **Schema markup** recommended on: Home (LocalBusiness), Service pages (Service), Blog posts (Article), FAQ page (FAQPage).
- **Internal linking** priority: Blog posts → Service pages → Contact.
- **Home walkthrough** hotspots should link directly to relevant service pages.
- **Temo Sunrooms** may have co-branded requirements — confirm with client before publishing.
