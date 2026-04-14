/**
 * Replaces <footer class="footer">…</footer> on every page with the canonical
 * home-page footer (adjusted for relative paths). Run from repo root:
 *   node scripts/sync-global-footer.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const FB_URL = "https://www.facebook.com/BrianCampCustomHome/";

function footerConfig(relPosix) {
  if (relPosix === "index.html") {
    return {
      p: "",
      assetP: "assets/",
      exploreServices: "services/index.html",
      exploreOurWork: "our-work/index.html",
    };
  }
  const parts = relPosix.split("/").filter(Boolean);
  if (
    parts.length === 2 &&
    parts[0] === "services" &&
    parts[1] === "index.html"
  ) {
    return {
      p: "../",
      assetP: "../assets/",
      exploreServices: "index.html",
      exploreOurWork: "../our-work/index.html",
    };
  }
  if (parts.length === 2) {
    return {
      p: "../",
      assetP: "../assets/",
      exploreServices: "../services/index.html",
      exploreOurWork: "../our-work/index.html",
    };
  }
  if (parts.length >= 3) {
    return {
      p: "../../",
      assetP: "../../assets/",
      exploreServices: "../../services/index.html",
      exploreOurWork: "../../our-work/index.html",
    };
  }
  return null;
}

function buildFooter(c) {
  return `\n\n    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <span class="nav-logo-text" style="color: var(--primary-foreground);"><small style="color: var(--foreground-subtle);">Waterstone</small>Companies</span>
                    <p class="footer-tagline">Home improvement &amp; outdoor living — St. Clair &amp; East Jefferson County.</p>
                    <p class="section-desc" style="color: var(--foreground-muted); font-size: 0.875rem; margin-top: var(--space-4); max-width: 28rem;">Waterstone Companies, LLC was founded in 2016 and has been serving East Alabama including St. Clair County and Trussville since that time.</p>
                    <p style="margin-top: var(--space-3); font-size: 0.8125rem; color: var(--foreground-muted);">Licensed &amp; Insured — AL #25174</p>
                    <p class="footer-social-wrap" style="margin-top: var(--space-2); display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2);">
                        <a href="${FB_URL}" class="footer-social-link" rel="noopener noreferrer" target="_blank" aria-label="Waterstone Companies on Facebook">
                            <img src="${c.assetP}facebook-icon.svg" alt="" width="28" height="28" loading="lazy" decoding="async" />
                        </a>
                        <span style="font-size: 0.8125rem; color: var(--foreground-muted);" aria-hidden="true">·</span>
                        <a href="https://www.briancamp.com" class="link-text" rel="noopener noreferrer" target="_blank">BrianCamp.com</a>
                    </p>
                </div>
                <div class="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="${c.exploreServices}">Services</a></li>
                        <li><a href="${c.exploreOurWork}">Our work</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="${c.p}about/index.html">About</a></li>
                        <li><a href="${c.p}blog/index.html">Blog</a></li>
                        <li><a href="${c.p}contact/index.html">Contact</a></li>
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
                    <a href="${c.p}privacy/index.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>`;
}

function walkHtmlFiles(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith(".")) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtmlFiles(full, out);
    else if (ent.name.endsWith(".html")) out.push(full);
  }
  return out;
}

/** Leading newlines + spaces before <footer> must be consumed or indent stacks on each run */
const footerRe = /\n+\s*<footer class="footer">[\s\S]*?<\/footer>/;

function runSync() {
  let updated = 0;
  let skipped = 0;

  for (const abs of walkHtmlFiles(root)) {
    const rel = path.relative(root, abs).replace(/\\/g, "/");
    const cfg = footerConfig(rel);
    if (!cfg) {
      skipped++;
      continue;
    }
    let html = fs.readFileSync(abs, "utf8");
    if (!footerRe.test(html)) {
      skipped++;
      continue;
    }
    const next = html.replace(footerRe, buildFooter(cfg));
    if (next !== html) {
      fs.writeFileSync(abs, next, "utf8");
      updated++;
    }
  }

  console.log("Global footer sync:", updated, "files updated,", skipped, "skipped.");
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) runSync();
