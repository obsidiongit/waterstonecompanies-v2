import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact & Free Quote | Waterstone Companies",
  description:
    "Contact Waterstone Companies in Odenville, AL — roofing, decks, fencing, sunrooms, siding, gutters, and more across St. Clair and East Jefferson County. (205) 575-0176 — brian@briancamp.com",
};

const serviceOptions = [
  { value: "", label: "Select—" },
  { value: "roofing", label: "Roofing" },
  { value: "decks", label: "Decks" },
  { value: "fencing", label: "Fencing" },
  { value: "sunrooms", label: "Sunrooms & pergolas" },
  { value: "siding", label: "Siding & gutters" },
  { value: "patio", label: "Patio covers & carports" },
  { value: "interior", label: "Interior accents" },
  { value: "multiple", label: "Multiple services" },
  { value: "other", label: "Other / not sure" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 py-20 text-primary-foreground">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/photos/Photo_6553604_DJI_4_jpg_5602921_0_202633010114_photo_original.jpg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" aria-hidden />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">Contact</p>
          <h1 className="font-serif text-h1 md:text-display">Get a free quote</h1>
          <p className="mt-4 text-body-lg text-accent-on-inverse">
            Tell us about your project — we&apos;ll follow up with a quote and next steps.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg border border-border bg-background-secondary p-8">
            <h2 className="text-h3 font-semibold text-foreground">Reach us directly</h2>
            <p className="mt-3 text-body-sm text-foreground-muted">
              Prefer phone or email? We&apos;re here during business hours.
            </p>
            <ul className="mt-6 space-y-3 text-body-sm text-foreground-muted list-none p-0">
              <li>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a href="tel:+12055750176" className="text-foreground underline-offset-2 hover:underline">
                  (205) 575-0176
                </a>
              </li>
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:brian@briancamp.com" className="text-foreground underline-offset-2 hover:underline">
                  brian@briancamp.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">Address:</strong> 11520 HWY 411, Odenville, AL 35120
              </li>
              <li>
                <strong className="text-foreground">Hours:</strong> Mon — Fri, 8am — 5pm
              </li>
              <li>
                <strong className="text-foreground">Service area:</strong> St. Clair County and East Jefferson County,
                including Trussville (35173), Moody (35004), and Odenville (35120).
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=11520+US-411+Odenville+AL+35120"
              className="mt-6 h-11 w-full flex items-center justify-center rounded-md border border-border text-sm font-semibold text-foreground hover:bg-background transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              Directions to office
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=St.+Clair+County,+Alabama"
              className="mt-3 h-11 w-full flex items-center justify-center rounded-md border border-border text-sm font-semibold text-foreground hover:bg-background transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open service area in Google Maps
            </a>
            <div className="mt-6 overflow-hidden rounded-lg border border-border bg-background-tertiary">
              <iframe
                title="Map: St. Clair County, Alabama — service area"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full border-0"
                src="https://www.google.com/maps?q=St.+Clair+County%2C+Alabama&z=9&hl=en&output=embed"
              />
            </div>
            <p className="mt-2 text-body-sm text-foreground-muted">
              Overview of St. Clair County and nearby communities we serve. Zoom or drag in the map, or use{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=St.+Clair+County,+Alabama"
                className="underline text-foreground"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Maps
              </a>{" "}
              for satellite view.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-8 shadow-sm">
            <h2 className="text-h3 font-semibold text-foreground">Request a quote</h2>
            <form id="contactForm" className="mt-6 space-y-4" action="#" method="post">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-body-sm text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-body-sm text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-body-sm text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                  Service interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-body-sm text-foreground outline-none focus:ring-2 focus:ring-foreground/20"
                >
                  {serviceOptions.map((o) => (
                    <option key={o.value || "empty"} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your goals, timeline, and address (general area is fine)."
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-body-sm text-foreground outline-none focus:ring-2 focus:ring-foreground/20 resize-y min-h-[120px]"
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-md bg-foreground text-primary-foreground text-sm font-semibold hover:bg-surface-raised transition-colors"
              >
                Submit request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
