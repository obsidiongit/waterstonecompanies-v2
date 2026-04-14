# [Client Name] — Style Guide

> **Single Source of Truth** for all visual design decisions.
>
> **Direction:** Light mode, craft-forward, professional — **grayscale UI** (white / black / gray only); real photography over illustrations
> **Framework:** Tailwind CSS + Vanilla JS (or lightweight React if needed)
>
> **Last Updated:** April 7, 2026

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Visual Effects](#6-visual-effects)
7. [Animation & Motion](#7-animation--motion)
8. [Imagery & Photography](#8-imagery--photography)
9. [Accessibility](#9-accessibility)
10. [Do's and Don'ts](#10-dos-and-donts)
11. [Changelog](#11-changelog)

---

## 1. Design Philosophy

### Core Aesthetic
**"Warm Professional"** — the confidence of a premium contractor paired with the approachability of a neighbor who does great work. Clean, trustworthy, and rooted in real craftsmanship. Every design decision should say: *we take our work seriously.*

### Design Pillars
- **Authenticity:** Real photography of real work. No stock photos, no abstract art.
- **Clarity:** Homeowners should immediately understand what we do and how to reach us.
- **Trust:** Testimonials, before/afters, and project details build credibility.
- **Restraint:** A monochrome palette keeps attention on photography and typography; color in the experience comes from real project photos, not the UI chrome.

### What We Are
- Professional but not corporate
- Warm and approachable, not casual
- Craft-forward — the work is the hero
- Local and community-rooted

### What We're Not
- Cold, sterile, or clinical
- Overly trendy or flashy
- Generic contractor template site
- Cluttered with low-quality stock imagery
- A whole-home renovation company — we are a specialty outdoor living contractor

### Inspiration Sources

| Brand / Reference | What We Take |
|:---|:---|
| **Havenly / Houzz** | Clean photography-first layouts, warm neutrals |
| **Thompson Traders** | Craft-forward product storytelling, material warmth |
| **Renoworks / Westside Roofing** | Local service credibility, clear CTAs |
| **Notion** | Generous whitespace, clear typographic hierarchy |

---

## 2. Color Palette

### Philosophy
The **interface is strictly grayscale**: white, near-black, and neutral grays only. No chromatic accents in UI components, shadows, or inline SVG (except photography). Warmth and material character come from **real photos**, not from tinted neutrals or brand hues.

Use **`--accent-on-inverse`** (light gray) for eyebrows, icons, and rules on dark surfaces (`--foreground` backgrounds) so they stay legible. **`--accent`** (mid gray) is for links, focus rings, and filled secondary CTAs on light backgrounds.

### Core Colors

| Token | Hex | HSL | Usage |
|:---|:---|:---|:---|
| `--background` | `#FFFFFF` | `0 0% 100%` | Page backgrounds |
| `--background-secondary` | `#F5F5F5` | `0 0% 96%` | Section alternates, cards |
| `--background-tertiary` | `#E5E5E5` | `0 0% 90%` | Subtle fills, hover states |
| `--foreground` | `#0A0A0A` | `0 0% 4%` | Primary text, headings |
| `--foreground-muted` | `#525252` | `0 0% 32%` | Body text, descriptions |
| `--foreground-subtle` | `#A3A3A3` | `0 0% 64%` | Captions, placeholders |

### Brand Colors (Grayscale)

| Token | Hex | Usage |
|:---|:---|:---|
| `--primary` | `#0A0A0A` | Primary buttons, key actions |
| `--primary-foreground` | `#FAFAFA` | Text on primary buttons |
| `--accent` | `#404040` | Links, highlights, filled secondary CTAs on light UI |
| `--accent-light` | `#F0F0F0` | Badge backgrounds, soft fills |
| `--accent-dark` | `#262626` | Pressed states, darker emphasis |
| `--accent-on-inverse` | `#E8E8E8` | Eyebrows, icons, rules on dark (`--foreground`) sections |

### Semantic Colors (Grayscale)

| Token | Hex | Usage |
|:---|:---|:---|
| `--success` | `#525252` | Success toasts/indicators — pair with icon or label copy |
| `--warning` | `#737373` | Warning states — pair with copy; not hue-based |
| `--destructive` | `#171717` | Errors / destructive actions — pair with copy |

### Border Colors

| Token | Hex | Usage |
|:---|:---|:---|
| `--border` | `#E5E5E5` | Default borders |
| `--border-light` | `#F0F0F0` | Subtle dividers |
| `--border-strong` | `#D4D4D4` | Emphasized borders, active inputs |

### CSS Variables (Tailwind Compatible)

```css
:root {
  /* Backgrounds */
  --background: 0 0% 100%;
  --foreground: 0 0% 4%;

  /* Cards & Surfaces */
  --card: 0 0% 96%;
  --card-foreground: 0 0% 4%;

  /* Popovers & Dropdowns */
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 4%;

  /* Primary (Near-black) */
  --primary: 0 0% 4%;
  --primary-foreground: 0 0% 98%;

  /* Secondary (Light gray surfaces) */
  --secondary: 0 0% 90%;
  --secondary-foreground: 0 0% 4%;

  /* Muted */
  --muted: 0 0% 90%;
  --muted-foreground: 0 0% 32%;

  /* Accent (Mid gray) */
  --accent: 0 0% 25%;
  --accent-foreground: 0 0% 100%;

  /* Destructive */
  --destructive: 0 0% 9%;
  --destructive-foreground: 0 0% 98%;

  /* Borders & Rings */
  --border: 0 0% 90%;
  --input: 0 0% 90%;
  --ring: 0 0% 25%;

  /* Border Radius */
  --radius: 0.5rem;
}
```

### Quick Reference (Copy-Paste)

```
Background:            #FFFFFF
Background Alt:        #F5F5F5
Background Hover:      #E5E5E5
Text Primary:          #0A0A0A
Text Secondary:        #525252
Text Muted:            #A3A3A3
Border:                #E5E5E5
Border Light:          #F0F0F0
Accent (UI):           #404040
Accent Light:          #F0F0F0
Accent Dark:           #262626
Accent on dark UI:     #E8E8E8
```

---

## 3. Typography

### Font Stack

```css
--font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-serif: 'DM Serif Display', Georgia, 'Times New Roman', serif;
```

> **Usage split:** DM Serif Display for hero headlines and section titles where craft/warmth should come through. DM Sans for all body copy, nav, buttons, labels, and UI text.

### Type Scale

| Level | Size | Weight | Line Height | Letter Spacing | Font | Usage |
|:---|:---|:---|:---|:---|:---|:---|
| `display` | 64px / 4rem | 400 (Regular) | 1.1 | -0.02em | Serif | Hero headlines |
| `h1` | 48px / 3rem | 400 (Regular) | 1.15 | -0.02em | Serif | Page titles |
| `h2` | 36px / 2.25rem | 600 (Semibold) | 1.25 | -0.01em | Sans | Section headers |
| `h3` | 24px / 1.5rem | 600 (Semibold) | 1.3 | 0 | Sans | Card titles, subsections |
| `h4` | 20px / 1.25rem | 600 (Semibold) | 1.4 | 0 | Sans | Labels, minor headings |
| `body-lg` | 18px / 1.125rem | 400 (Regular) | 1.65 | 0 | Sans | Lead paragraphs |
| `body` | 16px / 1rem | 400 (Regular) | 1.65 | 0 | Sans | Default body text |
| `body-sm` | 14px / 0.875rem | 400 (Regular) | 1.5 | 0 | Sans | Secondary text, captions |
| `label` | 12px / 0.75rem | 600 (Semibold) | 1.4 | 0.08em | Sans | Eyebrow labels, tags, badges |

### Tailwind Config

```js
// tailwind.config.ts
fontFamily: {
  sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
  serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
},
fontSize: {
  'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
  'h1': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '400' }],
  'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
  'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
  'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
  'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],
  'body': ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
  'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
  'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
},
```

### Eyebrow Labels
Short all-caps labels above section headings to set context. Style: `font-label text-accent uppercase tracking-widest`.

```html
<!-- Example -->
<p class="text-label uppercase tracking-widest text-neutral-600">Our Services</p>
<h2 class="font-serif text-4xl text-stone-900 mb-4">Outdoor Living, Built to Last</h2>
```

### Typography Rules

**Do:**
- Use DM Serif Display for hero and major section headings — it brings warmth and craft
- Keep body text at 16px minimum, 18px for lead paragraphs
- Use tight letter-spacing on display/h1 (-0.02em)
- Use eyebrow labels to add structure above h2 headings
- Use `#0A0A0A` for headings — near-black, not pure `#000` unless a specific element needs it

**Don't:**
- Use serif font for body copy, buttons, or UI elements
- Introduce chromatic UI colors (no blues, greens, ambers, etc. in components — photos excepted)
- Go below 14px for any readable text
- Mix more than 2 font families on a single page

---

## 4. Spacing & Layout

### Spacing Scale (4px Base Unit)

| Token | Value | Usage |
|:---|:---|:---|
| `space-1` | 4px | Tight internal spacing |
| `space-2` | 8px | Icon gaps, compact spacing |
| `space-3` | 12px | Button padding, small gaps |
| `space-4` | 16px | Card internal padding |
| `space-6` | 24px | Standard component gaps |
| `space-8` | 32px | Section internal spacing |
| `space-12` | 48px | Component-to-component spacing |
| `space-16` | 64px | Compact section padding |
| `space-24` | 96px | Standard section padding |
| `space-32` | 128px | Hero section padding |

### Section Spacing Guidelines

| Section Type | Top/Bottom Padding | Tailwind Class |
|:---|:---|:---|
| Hero | 128px | `py-32` |
| Standard Section | 96px | `py-24` |
| Compact Section | 64px | `py-16` |
| Card Content | 24px | `p-6` |
| Component Internal | 16px | `p-4` |

### Container Max Widths

| Context | Max Width | Tailwind |
|:---|:---|:---|
| Blog / long-form text | 720px | `max-w-2xl` |
| Content (standard) | 960px | `max-w-5xl` |
| Standard layout | 1152px | `max-w-6xl` |
| Wide / hero | 1280px | `max-w-7xl` |
| Full bleed (image sections) | 100% | `max-w-full` |

### Breakpoints

| Token | Value | Description |
|:---|:---|:---|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Layout Philosophy
Whitespace is trust. Cramped layouts look like budget work. **Give content room to breathe** — especially around photography, which is the primary visual language of this site.

---

## 5. Components

### 5.1 Buttons

| Variant | Background | Text | Border | Hover | Use Case |
|:---|:---|:---|:---|:---|:---|
| **Primary** | `#0A0A0A` | `#FAFAFA` | None | `#262626` bg | Main CTAs (Get a Quote) |
| **Secondary** | `transparent` | `#0A0A0A` | `#E5E5E5` | `#F5F5F5` bg | Supporting actions |
| **Accent** | `#404040` | `#FFFFFF` | None | `#262626` bg | Highlighted CTAs |
| **Ghost** | `transparent` | `#525252` | None | `#F5F5F5` bg | Tertiary/nav actions |
| **Link** | `transparent` | `#404040` | None | Underline | Inline text links |

**Button Specs:**
```css
/* Primary button */
height: 44px;
padding: 0 20px;
border-radius: 6px;
font-size: 14px;
font-weight: 600;
letter-spacing: 0.01em;
transition: background-color 150ms ease-out;
```

**Tailwind Example:**
```html
<!-- Primary -->
<button class="h-11 px-5 bg-stone-900 text-stone-50 text-sm font-semibold rounded-md hover:bg-stone-800 transition-colors">
  Get a Free Quote
</button>

<!-- Accent -->
<button class="h-11 px-5 bg-neutral-700 text-white text-sm font-semibold rounded-md hover:bg-neutral-800 transition-colors">
  View Our Work
</button>

<!-- Secondary -->
<button class="h-11 px-5 bg-transparent text-stone-900 text-sm font-semibold rounded-md border border-stone-200 hover:bg-stone-100 transition-colors">
  Learn More
</button>
```

---

### 5.2 Cards

| Variant | Background | Border | Radius | Shadow | Use Case |
|:---|:---|:---|:---|:---|:---|
| **Default** | `#F5F5F5` | `#E5E5E5` | 10px | Soft | Service summaries, FAQs |
| **Photo Card** | Image fill | None | 12px | Medium | Portfolio grid items |
| **Testimonial** | `#FFFFFF` | `#F0F0F0` | 10px | Soft | Customer quotes |
| **Stat** | `#E5E5E5` | None | 10px | None | Numbers/stats callouts |

```css
/* Default card */
border-radius: 10px;
border: 1px solid #E5E5E5;
background: #F5F5F5;
padding: 24px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);

/* Photo card hover */
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
transition: transform 200ms ease-out, box-shadow 200ms ease-out;
```

---

### 5.3 Navigation Bar

- **Height:** 64px
- **Background:** `#FFFFFF` with `border-bottom: 1px solid #F0F0F0`
- **Sticky:** Yes — stays at top on scroll
- **Scroll behavior:** Add subtle shadow `0 2px 8px rgba(0,0,0,0.08)` when scrolled past 10px
- **Logo:** Left-aligned
- **Nav links:** Centered or right, `font-size: 14px`, `font-weight: 500`, color `#525252`, hover color `#0A0A0A`
- **CTA Button:** Primary or Accent button — **[CTA label TBD]** — always visible in nav

```html
<!-- Nav structure -->
<nav class="sticky top-0 z-50 h-16 bg-white border-b border-stone-100 flex items-center justify-between px-6">
  <a href="/" class="logo"><!-- Logo SVG --></a>
  <ul class="flex gap-8 text-sm font-medium text-stone-500">
    <li><a href="/services" class="hover:text-stone-900 transition-colors">Services</a></li>
    <li><a href="/our-work" class="hover:text-stone-900 transition-colors">Our Work</a></li>
    <li><a href="/about" class="hover:text-stone-900 transition-colors">About</a></li>
    <li><a href="/blog" class="hover:text-stone-900 transition-colors">Blog</a></li>
  </ul>
  <a href="/contact" class="h-10 px-4 bg-stone-900 text-stone-50 text-sm font-semibold rounded-md hover:bg-stone-800 transition-colors flex items-center">
    [CTA Label TBD]
  </a>
</nav>
```

---

### 5.4 Footer

- **Background:** `#0A0A0A` (near-black)
- **Text:** `#A3A3A3` default, `#FAFAFA` for headings and links on hover
- **Columns:** Logo + tagline | Services | Pages | Contact info
- **Bottom bar:** Copyright + legal links, separated by `border-top: 1px solid #262626`
- **Social icons:** Simple SVG icons, no filled backgrounds

---

### 5.5 Section Header Pattern

Consistent structure for all section intros across the site:

```html
<div class="text-center max-w-2xl mx-auto mb-12">
  <!-- Eyebrow label -->
  <p class="text-label uppercase tracking-widest text-neutral-600 mb-3">Our Services</p>
  <!-- Section heading (serif) -->
  <h2 class="font-serif text-4xl text-stone-900 mb-4">Outdoor Living, Built to Last</h2>
  <!-- Optional subtext -->
  <p class="text-body-lg text-stone-500">
    [Tagline / subtext TBD]
  </p>
</div>
```

---

### 5.6 Badges & Tags

```html
<!-- Service tag -->
<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200">
  Decks
</span>

<!-- Location tag -->
<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
  [City, State]
</span>
```

---

### 5.7 Forms & Inputs

```css
/* Input field */
height: 44px;
padding: 0 14px;
border-radius: 6px;
border: 1px solid #E5E5E5;
background: #FFFFFF;
font-size: 15px;
color: #0A0A0A;
transition: border-color 150ms ease-out, box-shadow 150ms ease-out;

/* Focus state */
border-color: #404040;
box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
```

```html
<input
  type="text"
  placeholder="Your name"
  class="w-full h-11 px-3.5 rounded-md border border-stone-200 bg-white text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-neutral-600 focus:ring-2 focus:ring-neutral-600/15 transition"
/>
```

---

## 6. Visual Effects

### 6.1 Shadows

```css
/* Subtle — default card */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);

/* Soft — hovered cards */
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);

/* Elevated — modals, dropdowns */
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);

/* Nav scrolled */
--shadow-nav: 0 2px 8px rgba(0, 0, 0, 0.08);
```

### 6.2 Gradients

Gradients are used sparingly — primarily as photo overlays and subtle background transitions.

```css
/* Photo overlay — for text legibility on hero images */
.photo-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0) 60%
  );
}

/* Section background fade — alt sections */
.section-neutral-fade {
  background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
}

/* Accent underline on headings */
.accent-underline::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: #404040;
  margin-top: 12px;
  border-radius: 2px;
}
```

### 6.3 Border Radius

| Element | Radius | CSS |
|:---|:---|:---|
| Buttons | 6px | `rounded-md` |
| Inputs | 6px | `rounded-md` |
| Cards | 10px | `rounded-[10px]` |
| Photo cards | 12px | `rounded-xl` |
| Badges / tags | 999px | `rounded-full` |
| Gallery images | 8px | `rounded-lg` |

### 6.4 Dividers

```html
<!-- Standard section divider -->
<hr class="border-stone-100 my-0" />

<!-- Neutral accent divider -->
<div class="w-10 h-0.5 bg-neutral-500 rounded-full mx-auto my-6"></div>
```

### 6.5 No-Go Effects

- **NO** neon colors or glowing elements
- **NO** busy background textures or patterns
- **NO** heavy drop shadows that look dated
- **NO** color-shifting or animated gradients
- **NO** parallax effects
- **NO** heavy overlays that obscure photography

---

## 7. Animation & Motion

### Timing Functions

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Duration Scale

| Token | Value | Usage |
|:---|:---|:---|
| `duration-fast` | 150ms | Hover states, button colors |
| `duration-normal` | 250ms | Card transitions, dropdowns |
| `duration-slow` | 400ms | Page reveals, image loads |

### Animation Guidelines

| Element | Duration | Effect | Easing |
|:---|:---|:---|:---|
| Button hover | 150ms | Background color change | ease-out |
| Nav shadow on scroll | 200ms | Shadow fade in | ease-out |
| Card hover | 200ms | translateY(-2px) + shadow | ease-out |
| Scroll-reveal elements | 400ms | Fade in + 12px upward | ease-out |
| Image gallery items | 300ms | Fade in, staggered | ease-out |
| Dropdown menus | 200ms | Fade + slight scale | ease-out |
| Home walkthrough hotspots | 200ms | Pulse / highlight on hover | ease-out |

### Scroll Reveal (CSS)

```css
/* Base state */
.reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

/* Triggered by IntersectionObserver */
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
// IntersectionObserver setup
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### What We Avoid
- Animations longer than 500ms
- Bouncy or springy effects
- Autoplay videos or animations
- Animations that block interaction or scroll
- Heavy parallax or scroll-jacking

---

## 8. Imagery & Photography

### Primary Visual Language: Real Photography

This site lives or dies by photography quality. **Real project photos are the single most important trust signal.** Every key section should feature actual work from actual jobs.

> **Note:** Client has existing project photos in Google Drive. Pull and organize these by service category before building pages. Refer to `project-tasklist.md` Phase 1.3 for Drive integration steps.

### Photography Guidelines

- **Always use real project photos** — no stock photography
- Show finished projects, not in-progress shots (unless in a before/after context)
- **Lighting:** Prefer natural light, warm tones. Avoid cold blue-tinted photos.
- **Composition:** Wide shots to show full scope; close-ups to show craftsmanship and detail
- **Aspect ratios:** Landscape (16:9 or 4:3) for hero/banners; Square (1:1) for gallery grids; Portrait (3:4) for cards
- **Minimum resolution:** 1600px wide for full-bleed sections, 800px for cards

### Image Treatment

```css
/* All project photos */
img {
  object-fit: cover;
  display: block;
}

/* Gallery hover */
.gallery-item img {
  transition: transform 400ms ease-out;
}
.gallery-item:hover img {
  transform: scale(1.03);
}

/* Photo card overlay for text */
.photo-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%);
  border-radius: inherit;
}
```

### Hero Section Image

- Full-width, high-resolution project photo (a dramatic finished deck, sunroom, or outdoor living space)
- Overlay: dark gradient from bottom for text legibility
- Headline and CTA overlaid in white / `#FAFAFA`

### What We Use
- Real project photos (decks, fencing, sunrooms, patio covers, roofing, siding, interior accents)
- Before & after pairs
- Detail/close-up shots showing material quality and finish
- Outdoor living spaces in use — showing lifestyle, not just structure

### What We Don't Use
- Stock photos of generic contractors or power tools
- AI-generated renders
- Abstract textures or geometric patterns as hero backgrounds
- Low-resolution or poorly lit photos

### Performance
- Serve images in **WebP format** with JPEG fallback
- Use `loading="lazy"` on all below-fold images
- Provide responsive `srcset` for hero and large images
- Compress to ≤200KB for cards, ≤500KB for hero images

---

## 9. Accessibility

### Requirements

| Requirement | Standard |
|:---|:---|
| **WCAG Level** | AA minimum |
| **Keyboard Navigation** | Full support |
| **Screen Reader** | Semantic HTML, proper ARIA labels |
| **Color Contrast** | 4.5:1 minimum for body text |

### Color Contrast Checks

| Combination | Contrast Ratio | Pass? |
|:---|:---|:---|
| `#0A0A0A` on `#FFFFFF` | ~19:1 | ✅ AAA |
| `#525252` on `#FFFFFF` | ~7.4:1 | ✅ AAA |
| `#A3A3A3` on `#FFFFFF` | ~2.5:1 | ❌ Decorative only |
| `#404040` on `#FFFFFF` | ~10:1 | ✅ AAA (links, UI emphasis) |
| `#FAFAFA` on `#0A0A0A` | ~18:1 | ✅ AAA |
| `#FFFFFF` on `#404040` | ~11:1 | ✅ AAA |

> **Note:** Semantic tokens (`--success`, `--warning`, `--destructive`) are grayscale; do not rely on hue alone — use text, icons, or layout to convey meaning.

### Focus States

```css
/* Visible focus ring for all interactive elements */
*:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #FFFFFF,
              0 0 0 4px #404040;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML Checklist
- [ ] `<nav>` with `aria-label` for main navigation
- [ ] `<main>` wrapping page content
- [ ] `<h1>` on every page (only one)
- [ ] `alt` text on all images (descriptive, not generic)
- [ ] `aria-label` on icon-only buttons
- [ ] Form `<label>` elements associated with every input
- [ ] Skip-to-content link at top of every page
- [ ] Home walkthrough hotspots are keyboard-navigable with ARIA roles

---

## 10. Do's and Don'ts

### Do ✅

- Use real project photography as the primary visual asset
- Let whitespace breathe — don't cram sections together
- Use DM Serif Display for hero and section headings to convey craft and character
- Use mid-gray accent (`#404040`) sparingly — for CTAs, links, and focus; light gray (`#E8E8E8`) on dark sections
- Keep the primary CTA visible in the nav at all times
- Use eyebrow labels above section headings for structure
- Serve images in WebP, compressed and lazy-loaded
- Add `alt` descriptions that describe the actual project shown
- Use near-black (`#0A0A0A`) for primary type and dark UI surfaces
- Test all pages on mobile before desktop
- Frame services as specialty outdoor living — not whole-home renovation

### Don't ❌

- Use stock photos of generic contractors, tools, or generic outdoor spaces
- Use pure black (`#000000`) for large UI fields unless a specific element needs maximum contrast
- Add chromatic UI accents (stick to the grayscale tokens in §2)
- Add heavy shadows, gradients, or glow effects
- Cram multiple CTAs into the same visual area — pick one per section
- Skip `alt` text or use lazy descriptions like "photo of deck"
- Use the serif font for body copy, buttons, or any UI text
- Use colored backgrounds for main sections — keep them white or light neutral gray
- Add animations longer than 400ms or that block scrolling
- Launch with placeholder or stock imagery — real photos first, always
- Position this as a general contractor or whole-home renovation company

---

## 11. Changelog

> Track all updates to this style guide here. Most recent first.

### v2.1.0 — April 7, 2026
**Grayscale UI palette**
- Locked the interface to white / near-black / neutral gray only (no chromatic brand accent in UI)
- Documented `--accent-on-inverse` for text and icons on dark surfaces; semantic tokens mapped to gray shades
- Aligned shadows, gradients, components, accessibility notes, and quick reference with `styles.css`

### v2.0.0 — April 7, 2026
**Adapted for [Client Name] project**
- Removed Denver Interior & Doors Co. branding
- Updated design philosophy and "What We Are/Aren't" to reflect outdoor living specialty
- Updated photography guidelines to reflect outdoor/exterior project types
- Added home walkthrough hotspot animation spec
- Added Google Drive photography note
- Added explicit "not a whole-home renovation company" positioning note
- Updated example copy and tags to reflect new service categories

### v1.0.0 — February 17, 2026
**Initial Release (Denver Interior & Doors Co.)**
- Established warm professional design philosophy
- Defined color palette with warm neutrals and amber accent
- Set dual font stack (DM Serif Display + DM Sans) and type scale
- Documented spacing, layout, and container guidelines
- Defined component patterns: buttons, cards, nav, footer, forms, badges
- Added visual effects specs (shadows, gradients, radius)
- Created animation and motion guidelines with scroll-reveal pattern
- Added photography guidelines and performance requirements
- Included accessibility requirements and contrast checks
- Added Do's and Don'ts section

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│  [CLIENT NAME] — QUICK REFERENCE                            │
├─────────────────────────────────────────────────────────────┤
│  COLORS                                                     │
│  Background:      #FFFFFF    Text Primary:    #0A0A0A       │
│  Background Alt:  #F5F5F5    Text Secondary:  #525252       │
│  Border:          #E5E5E5    Accent (UI):     #404040       │
│  Accent Light:    #F0F0F0    Accent Dark:     #262626       │
│  On dark UI:      #E8E8E8    (accent-on-inverse)            │
├─────────────────────────────────────────────────────────────┤
│  TYPOGRAPHY                                                 │
│  Serif:  DM Serif Display — Hero, H1, H2 headings          │
│  Sans:   DM Sans — Body, nav, buttons, labels              │
│  Display: 64px/400   H1: 48px/400   H2: 36px/600           │
│  Body: 16px/400      Body-sm: 14px/400                     │
├─────────────────────────────────────────────────────────────┤
│  SPACING                                                    │
│  Hero: py-32 (128px)    Standard: py-24 (96px)             │
│  Compact: py-16 (64px)  Card: p-6 (24px)                   │
├─────────────────────────────────────────────────────────────┤
│  RADIUS                                                     │
│  Buttons/Inputs: 6px   Cards: 10px   Photo cards: 12px     │
│  Badges: 999px         Gallery images: 8px                 │
├─────────────────────────────────────────────────────────────┤
│  ANIMATION                                                  │
│  Fast: 150ms    Normal: 250ms    Slow: 400ms               │
│  Easing: cubic-bezier(0.4, 0, 0.2, 1)                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Related Documents

- `product-brief-v2.md` — Project overview, goals, and page list
- `site-map-v2.md` — Full site architecture and SEO priority tiers
- `project-tasklist.md` — Active development task list

---

*This is a living document. As pages are built and design decisions are refined, update this guide and log changes in the Changelog.*
