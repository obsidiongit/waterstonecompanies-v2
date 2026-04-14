import Link from "next/link";

const footerLinks = {
  explore: [
    { href: "/services", label: "Services" },
    { href: "/our-work", label: "Our work" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/testimonials", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

const serviceAreas = [
  "St. Clair County",
  "East Jefferson County",
  "Trussville",
  "Moody",
  "Odenville",
  "Springville area",
  "and nearby communities across East Alabama",
];

function FacebookIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-foreground-subtle">
      <div className="h-px bg-accent-dark" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <span className="text-primary-foreground text-lg font-semibold">
              <span className="text-foreground-subtle text-sm font-medium tracking-wide">
                Waterstone
              </span>
              Companies
            </span>
            <p className="mt-3 text-sm text-foreground-subtle max-w-sm">
              Home improvement &amp; outdoor living — St. Clair &amp; East
              Jefferson County.
            </p>
            <p className="mt-4 text-sm text-foreground-muted max-w-md leading-relaxed">
              Waterstone Companies, LLC has been serving East Alabama — including
              St. Clair County and Trussville — with roofing, decks, fencing,
              sunrooms, siding, gutters, patio covers, carports, interior
              accents, and more since 2016.
            </p>
            <p className="mt-3 text-xs text-foreground-muted">
              Licensed &amp; Insured — AL #25174
            </p>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
              <a
                href="https://www.facebook.com/BrianCampCustomHome/"
                className="text-foreground-subtle hover:text-primary-foreground transition-colors inline-flex"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Waterstone Companies on Facebook"
              >
                <FacebookIcon className="w-7 h-7" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.briancamp.com"
                className="text-foreground-subtle hover:text-primary-foreground underline-offset-2 hover:underline transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                BrianCamp.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground text-sm font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-subtle hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground text-sm font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-subtle hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground text-sm font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-subtle hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground text-sm font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+12055750176"
                className="flex items-center gap-2 text-sm text-foreground-subtle hover:text-primary-foreground transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                (205) 575-0176
              </a>
              <a
                href="mailto:brian@briancamp.com"
                className="flex items-center gap-2 text-sm text-foreground-subtle hover:text-primary-foreground transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                brian@briancamp.com
              </a>
              <div className="flex items-start gap-2 text-sm text-foreground-subtle">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                11520 HWY 411, Odenville, AL 35120
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-raised" aria-label="Service area">
          <h4 className="text-primary-foreground text-sm font-semibold mb-2">
            Areas we serve
          </h4>
          <p className="text-sm text-foreground-subtle">
            {serviceAreas.map((area, i) => (
              <span key={area}>
                {area}
                {i < serviceAreas.length - 1 && (
                  <span aria-hidden="true"> · </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="border-t border-surface-raised">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground-subtle">
          <p>&copy; 2026 Waterstone Companies, LLC. All rights reserved.</p>
          <Link
            href="/privacy"
            className="hover:text-primary-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
