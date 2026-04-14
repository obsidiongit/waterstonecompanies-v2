/**
 * Rebuilds our-work/index.html with every image in /photos (jpg/png/webp/gif).
 * Categories: merged from (1) photo references on each services category page,
 * (2) light filename heuristics, (3) scripts/photo-categories.json per-file overrides.
 * Run: node scripts/build-our-work-page.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const photosDir = path.join(root, "photos");
const outHtml = path.join(root, "our-work", "index.html");
const overridesPath = path.join(__dirname, "photo-categories.json");

/** services/<folder> → filter slug (matches data-filter on toolbar) */
const SERVICE_FOLDER_TO_CATEGORY = {
  fencing: "fencing",
  decks: "decks",
  "sunrooms-pergolas": "sunrooms",
  "patio-covers": "patio-covers",
  "siding-gutters": "siding",
  roofing: "roofing",
  "interior-accents": "interior",
};

/** Strong sunroom / screened-porch adjacency (merges with HTML scan) */
const SUNROOM_FILES = new Set([
  "6I1A0459.jpg",
  "6I1A0460.jpg",
  "6I1A0462.jpg",
  "6I1A0464.jpg",
  "6I1A0467.jpg",
  "6I1A0472.jpg",
]);

function loadOverrides() {
  if (!fs.existsSync(overridesPath)) return {};
  try {
    const j = JSON.parse(fs.readFileSync(overridesPath, "utf8"));
    return j && typeof j === "object" ? j : {};
  } catch {
    return {};
  }
}

function collectFromServicePages() {
  const map = new Map();
  const servicesRoot = path.join(root, "services");
  if (!fs.existsSync(servicesRoot)) return map;
  for (const ent of fs.readdirSync(servicesRoot, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    const slug = SERVICE_FOLDER_TO_CATEGORY[ent.name];
    if (!slug) continue;
    const idx = path.join(servicesRoot, ent.name, "index.html");
    if (!fs.existsSync(idx)) continue;
    const html = fs.readFileSync(idx, "utf8");
    const re = /photos\/([^"'>\s]+\.(?:jpe?g|png|webp|gif))/gi;
    let m;
    while ((m = re.exec(html))) {
      const name = m[1];
      if (!map.has(name)) map.set(name, new Set());
      map.get(name).add(slug);
    }
  }
  return map;
}

function applyHeuristics(filename, set) {
  if (/^Photo_/i.test(filename)) set.add("fencing");
  if (/^2N4A45/i.test(filename)) set.add("decks");
  /* Same shoot series as deck / porch documentation—keeps deck filter useful */
  if (/^2N4A44/i.test(filename)) set.add("decks");
  if (/^2N4A55/i.test(filename)) set.add("patio-covers");
  if (/^6I1A05/i.test(filename)) set.add("interior");
  if (/^6I1A039/i.test(filename)) set.add("roofing");
  if (/^2N4A43[6789]/i.test(filename)) set.add("interior");
  if (SUNROOM_FILES.has(filename)) set.add("sunrooms");
  /* Screened-porch / outdoor-room progress (0400–0469); 0471 stays siding-only from page refs */
  if (/^6I1A04[0-5][0-9]/i.test(filename)) set.add("sunrooms");
  if (/^6I1A046/i.test(filename)) set.add("sunrooms");
}

function categoriesForFile(filename, serviceMap, overrides) {
  const set = new Set();
  const fromServices = serviceMap.get(filename);
  if (fromServices) fromServices.forEach((c) => set.add(c));
  applyHeuristics(filename, set);
  const o = overrides[filename];
  if (Array.isArray(o)) o.forEach((c) => set.add(c));
  else if (typeof o === "string")
    o.split(/\s+/).filter(Boolean).forEach((c) => set.add(c));
  return Array.from(set).sort();
}

const files = fs
  .readdirSync(photosDir)
  .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const serviceMap = collectFromServicePages();
const overrides = loadOverrides();

const galleryItems = files
  .map((f) => {
    const cats = categoriesForFile(f, serviceMap, overrides);
    const catAttr =
      cats.length > 0 ? ` data-category="${cats.join(" ")}"` : "";
    return `                    <div class="gallery-thumb" data-gallery-item${catAttr} data-lightbox-src="../photos/${f}" data-lightbox-alt="Waterstone Companies custom build project">
                        <img src="../photos/${f}" alt="Waterstone Companies custom home and outdoor project" width="400" height="300" loading="lazy" decoding="async">
                    </div>`;
  })
  .join("\n");

const count = files.length;

const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Work | Waterstone Companies</title>
    <meta name="description"
        content="Full project gallery from Waterstone Companies—custom homes and outdoor living in St. Clair County, Trussville, and East Alabama. ${count} photos from our own work.">
    <link rel="canonical" href="https://waterstonehomes.com/our-work/">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
</head>

<body>
    <a class="skip-link" href="#main">Skip to main content</a>
    <nav class="navbar" id="navbar" aria-label="Main navigation">
        <div class="nav-container nav-container--split">
            <a href="../index.html" class="nav-logo-link" aria-label="Waterstone Companies home">
                <span class="nav-logo-text"><small>Waterstone</small>Companies</span>
            </a>
            <button class="nav-toggle" id="navToggle" type="button" aria-label="Toggle navigation" aria-expanded="false"><span class="hamburger"></span></button>
            <ul class="nav-menu" id="navMenu">
                <li class="mobile-only nav-brand"><span class="nav-logo-text"><small>Waterstone</small>Companies</span></li>
                <li><a href="../index.html" class="nav-link">Home</a></li>
                <li><a href="../about/index.html" class="nav-link">About</a></li>
                <li><a href="../services/index.html" class="nav-link">Services</a></li>
                <li><a href="index.html" class="nav-link active">Our Work</a></li>
                <li><a href="../contact/index.html" class="nav-link">Contact</a></li>
                <li><a href="../blog/index.html" class="nav-link">Blog</a></li>
                <li><a href="../testimonials/index.html" class="nav-link">Reviews</a></li>
                <li class="mobile-only nav-cta-item"><a href="../contact/index.html" class="btn btn-primary btn-full">Contact us</a></li>
            </ul>
            <div class="nav-actions">
                <a href="tel:+12055750176" class="nav-phone">
                    <div class="phone-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    </div>
                    <span>(205) 575-0176</span>
                </a>
                <a href="../contact/index.html" class="btn btn-primary btn-nav-cta">Contact us</a>
            </div>
        </div>
    </nav>

    <main id="main">
        <section class="hero hero-page hero--static" style="min-height: 42vh; background-image: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.18) 100%), url('../photos/6I1A0547.jpg');">
            <div class="hero-content">
                <div class="hero-text text-center">
                    <span class="hero-label">Portfolio</span>
                    <h1 class="hero-title">Our work</h1>
                    <p class="hero-desc">Browse our full gallery—every photo is from our own builds across St. Clair County, Trussville, and the surrounding area.</p>
                </div>
            </div>
        </section>

        <section class="section-padding">
            <div class="container">
                <p class="gallery-intro text-center"><strong>${count}</strong> images from our projects. Filter by project type or browse everything—tap any photo to view larger.</p>

                <div class="gallery-toolbar" role="group" aria-label="Filter portfolio by project type">
                    <button type="button" class="gallery-filter-btn is-active" data-filter="all">All</button>
                    <button type="button" class="gallery-filter-btn" data-filter="fencing">Fencing</button>
                    <button type="button" class="gallery-filter-btn" data-filter="decks">Decks</button>
                    <button type="button" class="gallery-filter-btn" data-filter="sunrooms">Sunrooms &amp; pergolas</button>
                    <button type="button" class="gallery-filter-btn" data-filter="patio-covers">Patio covers</button>
                    <button type="button" class="gallery-filter-btn" data-filter="siding">Siding &amp; gutters</button>
                    <button type="button" class="gallery-filter-btn" data-filter="roofing">Roofing</button>
                    <button type="button" class="gallery-filter-btn" data-filter="interior">Interior accents</button>
                </div>

                <div class="gallery-masonry" id="portfolioGrid">
${galleryItems}
                </div>

                <p class="gallery-footnote text-center">All photography is from Waterstone Companies projects—the level of quality and detail you can expect on your build.</p>
            </div>
        </section>

        <section class="cta-section section-padding" style="background: var(--background-secondary);">
            <div class="container text-center" style="max-width: 560px; margin: 0 auto;">
                <h2 class="section-title">Love what you see?</h2>
                <a href="../contact/index.html" class="btn btn-primary">Get a Free Quote</a>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <span class="nav-logo-text" style="color: var(--primary-foreground);"><small style="color: var(--foreground-subtle);">Waterstone</small>Companies</span>
                    <p class="footer-tagline">Home improvement &amp; outdoor living — St. Clair &amp; East Jefferson County.</p>
                    <p class="section-desc" style="color: var(--foreground-muted); font-size: 0.875rem; margin-top: var(--space-4); max-width: 28rem;">Waterstone Companies, LLC was founded in 2016 and has been serving East Alabama including St. Clair County and Trussville since that time.</p>
                    <p style="margin-top: var(--space-3); font-size: 0.8125rem; color: var(--foreground-muted);">Licensed &amp; Insured — AL #25174</p>
                    <p class="footer-social-wrap" style="margin-top: var(--space-2); display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2);">
                        <a href="https://www.facebook.com/BrianCampCustomHome/" class="footer-social-link" rel="noopener noreferrer" target="_blank" aria-label="Waterstone Companies on Facebook">
                            <img src="../assets/facebook-icon.svg" alt="" width="28" height="28" loading="lazy" decoding="async" />
                        </a>
                        <span style="font-size: 0.8125rem; color: var(--foreground-muted);" aria-hidden="true">·</span>
                        <a href="https://www.briancamp.com" class="link-text" rel="noopener noreferrer" target="_blank">BrianCamp.com</a>
                    </p>
                </div>
                <div class="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="../services/index.html">Services</a></li>
                        <li><a href="../our-work/index.html">Our work</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="../about/index.html">About</a></li>
                        <li><a href="../blog/index.html">Blog</a></li>
                        <li><a href="../contact/index.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Contact</h4>
                    <div class="footer-contact-items">
                        <a href="tel:+12055750176" class="footer-contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path
                                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            <span>(205) 575-0176</span>
                        </a>
                        <a href="mailto:brian@briancamp.com" class="footer-contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>brian@briancamp.com</span>
                        </a>
                        <div class="footer-contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>11520 HWY 411, Odenville, AL 35120</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-inner">
                <p>&copy; 2026 Waterstone Companies, LLC. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="../privacy/index.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>

    <div class="lightbox" id="lightbox" aria-hidden="true" role="dialog" aria-label="Enlarged image">
        <div class="lightbox__inner">
            <button type="button" class="lightbox__close" id="lightboxClose" aria-label="Close">&times;</button>
            <img class="lightbox__img" id="lightboxImg" src="" alt="">
        </div>
    </div>

    <script src="../script.js"></script>
</body>

</html>
`;

fs.writeFileSync(outHtml, html, "utf8");
console.log("Wrote our-work/index.html with", count, "gallery images.");