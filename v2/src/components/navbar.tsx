"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/services/roofing", label: "Roofing" },
  { href: "/services/siding-gutters", label: "Siding & Gutters" },
  { href: "/services/decks", label: "Decks" },
  { href: "/services/fencing", label: "Fencing" },
  { href: "/services/sunrooms-pergolas", label: "Sunrooms & Pergolas" },
  { href: "/services/patio-covers", label: "Patio Covers" },
  { href: "/services/interior-accents", label: "Interior Accents" },
];

const servicesMenuId = "navServicesMenu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 h-16 bg-background border-b border-border-light flex items-center justify-between px-6"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="flex items-baseline gap-0 text-foreground no-underline"
        aria-label="Waterstone Companies home"
      >
        <span className="text-foreground-subtle text-sm font-medium tracking-wide">
          Waterstone
        </span>
        <span className="text-foreground text-lg font-semibold -ml-px">
          Companies
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground-muted">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors duration-150">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-foreground transition-colors duration-150">
            About
          </Link>
        </li>
        <li className="relative">
          <button
            type="button"
            className="flex items-center gap-1 hover:text-foreground transition-colors duration-150"
            aria-expanded={servicesOpen}
            aria-haspopup="true"
            aria-controls={servicesMenuId}
            onClick={() => setServicesOpen(!servicesOpen)}
            onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
          >
            Services
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {servicesOpen && (
            <ul
              id={servicesMenuId}
              className="absolute top-full left-0 mt-2 w-56 bg-background rounded-lg shadow-lg border border-border py-2"
              role="list"
            >
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="block px-4 py-2 text-sm text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-border-light mt-1 pt-1">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm font-semibold text-foreground-muted hover:text-foreground"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/our-work" className="hover:text-foreground transition-colors duration-150">
            Our Work
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-foreground transition-colors duration-150">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-foreground transition-colors duration-150">
            Insights
          </Link>
        </li>
        <li>
          <Link href="/testimonials" className="hover:text-foreground transition-colors duration-150">
            Reviews
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="tel:+12055750176"
          className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          <span className="inline-flex shrink-0" aria-hidden="true">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </span>
          <span>(205) 575-0176</span>
        </a>
        <Link
          href="/contact"
          className="h-10 px-4 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-accent-dark transition-colors flex items-center"
        >
          Contact us
        </Link>
      </div>

      <button
        type="button"
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span
          className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg md:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <ul className="flex flex-col p-6 gap-4 text-sm font-medium text-foreground-muted">
            <li>
              <Link href="/" className="hover:text-foreground" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-foreground" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground-subtle">
                Services
              </span>
              <ul className="mt-2 ml-0 flex flex-col gap-2 border-l border-border-light pl-3" role="list">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-foreground" onClick={() => setMobileOpen(false)}>
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="font-semibold hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    View all services →
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/our-work" className="hover:text-foreground" onClick={() => setMobileOpen(false)}>
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-foreground" onClick={() => setMobileOpen(false)}>
                Insights
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-foreground" onClick={() => setMobileOpen(false)}>
                Reviews
              </Link>
            </li>
            <li className="pt-2 border-t border-border-light">
              <Link
                href="/contact"
                className="inline-flex h-10 px-4 bg-primary text-primary-foreground text-sm font-semibold rounded-md items-center justify-center w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
