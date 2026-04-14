/**
 * Replaces <footer class="footer">…</footer> on every site HTML file with the canonical footer,
 * using correct relative paths from each file.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(__dirname, '..');

function rel(fromHtmlFile, toSitePath) {
    const fromDir = path.dirname(path.join(SITE, fromHtmlFile));
    const toAbs = path.join(SITE, toSitePath);
    return path.relative(fromDir, toAbs).replace(/\\/g, '/') || '.';
}

function pathsFor(fromFile) {
    const p = (to) => rel(fromFile, to);
    return {
        services: p('services/index.html'),
        ourWork: p('our-work/index.html'),
        about: p('about/index.html'),
        blog: p('blog/index.html'),
        contact: p('contact/index.html'),
        testimonials: p('testimonials/index.html'),
        faq: p('faq/index.html'),
        privacy: p('privacy/index.html'),
        facebook: p('assets/facebook-icon.svg'),
    };
}

function footerInner(h) {
    return `    <div class="footer-accent-bar" aria-hidden="true"></div>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <span class="nav-logo-text" style="color: var(--primary-foreground);"><small style="color: var(--foreground-subtle);">Waterstone</small>Companies</span>
                <p class="footer-tagline">Home improvement &amp; outdoor living — St. Clair &amp; East Jefferson County.</p>
                <p class="section-desc" style="color: var(--foreground-muted); font-size: 0.875rem; margin-top: var(--space-4); max-width: 28rem;">Waterstone Companies, LLC has been serving East Alabama — including St. Clair County and Trussville — with roofing, decks, fencing, sunrooms, siding, gutters, patio covers, carports, interior accents, and more since 2016.</p>
                <p style="margin-top: var(--space-3); font-size: 0.8125rem; color: var(--foreground-muted);">Licensed &amp; Insured — AL #25174</p>
                <p class="footer-social-wrap" style="margin-top: var(--space-2); display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2);">
                    <a href="https://www.facebook.com/BrianCampCustomHome/" class="footer-social-link" rel="noopener noreferrer" target="_blank" aria-label="Waterstone Companies on Facebook">
                        <img src="${h.facebook}" alt="" width="28" height="28" loading="lazy" decoding="async" />
                    </a>
                    <span style="font-size: 0.8125rem; color: var(--foreground-muted);" aria-hidden="true">·</span>
                    <a href="https://www.briancamp.com" class="link-text" rel="noopener noreferrer" target="_blank">BrianCamp.com</a>
                </p>
            </div>
            <div class="footer-links">
                <h4>Explore</h4>
                <ul>
                    <li><a href="${h.services}">Services</a></li>
                    <li><a href="${h.ourWork}">Our work</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Company</h4>
                <ul>
                    <li><a href="${h.about}">About</a></li>
                    <li><a href="${h.blog}">Blog</a></li>
                    <li><a href="${h.contact}">Contact</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Resources</h4>
                <ul>
                    <li><a href="${h.testimonials}">Reviews</a></li>
                    <li><a href="${h.faq}">FAQ</a></li>
                    <li><a href="${h.privacy}">Privacy Policy</a></li>
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
        <div class="footer-locations" aria-label="Service area">
            <h4>Areas we serve</h4>
            <p class="footer-locations-list">
                St. Clair County <span aria-hidden="true">·</span>
                East Jefferson County <span aria-hidden="true">·</span>
                Trussville <span aria-hidden="true">·</span>
                Moody <span aria-hidden="true">·</span>
                Odenville <span aria-hidden="true">·</span>
                Springville area <span aria-hidden="true">·</span>
                and nearby communities across East Alabama
            </p>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container footer-bottom-inner">
            <p>&copy; 2026 Waterstone Companies, LLC. All rights reserved.</p>
            <div class="footer-legal">
                <a href="${h.privacy}">Privacy Policy</a>
            </div>
        </div>
    </div>`;
}

function walkHtml(dir, out = []) {
    for (const n of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, n.name);
        if (n.isDirectory()) {
            if (n.name === 'node_modules' || n.name === '.git') continue;
            walkHtml(p, out);
        } else if (n.name.endsWith('.html')) out.push(p);
    }
    return out;
}

const footerRe = /<footer class="footer">[\s\S]*?<\/footer>/;

let updated = 0;
for (const abs of walkHtml(SITE)) {
    const relFile = path.relative(SITE, abs).replace(/\\/g, '/');
    let raw = fs.readFileSync(abs, 'utf8');
    if (!raw.includes('<footer class="footer">')) continue;
    const inner = footerInner(pathsFor(relFile));
    const next = raw.replace(footerRe, `<footer class="footer">\n${inner}\n    </footer>`);
    if (next !== raw) {
        fs.writeFileSync(abs, next, 'utf8');
        updated++;
        console.log(relFile);
    }
}
console.log('Updated', updated, 'files');
