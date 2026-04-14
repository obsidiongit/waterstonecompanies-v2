import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Waterstone Companies",
  description:
    "Roofing, decks, fencing, sunrooms, siding, gutters, patio covers, and interior accents — Waterstone Companies serves East Alabama with flat-fee pricing.",
};

const catalog = [
  {
    href: "/services/fencing",
    title: "Fencing",
    desc: "Privacy, security, and curb appeal with quality materials.",
    image: "/photos/Photo_6553601_DJI_1_jpg_5105426_0_202633095958_photo_original.jpg.jpg",
    featured: true,
  },
  {
    href: "/services/decks",
    title: "Decks",
    desc: "Custom outdoor platforms designed for your lifestyle.",
    image: "/photos/2N4A4525.jpg",
    featured: false,
  },
  {
    href: "/services/sunrooms-pergolas",
    title: "Temo sunrooms & pergolas",
    desc: "Light-filled spaces and shade structures.",
    image: "/photos/6I1A0460.jpg",
    featured: false,
  },
  {
    href: "/services/patio-covers",
    title: "Patio covers, carports & cabanas",
    desc: "Covered outdoor structures tailored to your property.",
    image: "/photos/2N4A5550.jpg",
    featured: false,
  },
  {
    href: "/services/siding-gutters",
    title: "Siding & gutters",
    desc: "Durable exteriors and water management done right.",
    image: "/photos/6I1A0471.jpg",
    featured: false,
  },
  {
    href: "/services/roofing",
    title: "Roofing",
    desc: "Roof systems installed with manufacturer best practices.",
    image: "/photos/6I1A0391.jpg",
    featured: false,
  },
  {
    href: "/services/interior-accents",
    title: "Interior accents",
    desc: "Beams, mantels, and closets—finishing work, not full reno.",
    image: "/photos/2N4A4445.jpg",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-24 text-primary-foreground">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/photos/Photo_6553605_DJI_5_jpg_7026637_0_202633010134_photo_original.jpg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
          aria-hidden
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">What we do</p>
          <h1 className="font-serif text-h1 md:text-display text-balance">
            Decks, fences, roofing &amp; more — one call, one crew
          </h1>
          <p className="mt-6 text-body-lg text-accent-on-inverse">
            Roofing, decks, fencing, sunrooms, siding, gutters, patio covers, and interior accents — all with flat-fee
            pricing and experienced hands. Explore by service below.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Services by category</p>
            <h2 className="font-serif text-h1 text-foreground">What we do best</h2>
            <p className="mt-4 text-body-lg text-foreground-muted">
              From protecting your roof to finishing your back deck — every service comes with the same flat-fee
              transparency and 30+ years of East Alabama experience behind it. Click any category to learn more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative min-h-[260px] overflow-hidden rounded-[10px] border border-border shadow-sm ${
                  item.featured ? "sm:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[280px]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes={item.featured ? "(max-width:1024px) 100vw, 66vw" : "(max-width:640px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <h3 className="text-h3 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-body-sm text-accent-on-inverse max-w-md">{item.desc}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-accent-on-inverse group-hover:underline">
                    View service →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground text-primary-foreground text-center">
        <p className="text-label uppercase tracking-widest text-accent-on-inverse/80">We&apos;re here to help</p>
        <h2 className="mt-3 font-serif text-h1 text-primary-foreground">Not sure where to start?</h2>
        <p className="mt-4 text-body-lg text-accent-on-inverse max-w-2xl mx-auto">
          Tell us about your property and what you&apos;re picturing—we&apos;ll recommend the right scope, rough
          timeline, and next steps. No pressure, just straight answers.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="h-11 px-6 bg-primary-foreground text-foreground text-sm font-semibold rounded-md hover:bg-accent-on-inverse transition-colors inline-flex items-center"
          >
            Get a free quote
          </Link>
          <a
            href="tel:+12055750176"
            className="h-11 px-6 inline-flex items-center text-sm font-semibold rounded-md border border-accent-on-inverse/40 text-primary-foreground hover:bg-surface-raised transition-colors"
          >
            Call (205) 575-0176
          </a>
        </div>
        <p className="mt-8 text-body-sm text-accent-on-inverse/90">
          Outdoor living and exterior projects across St. Clair County and East Jefferson County.
        </p>
      </section>
    </>
  );
}
