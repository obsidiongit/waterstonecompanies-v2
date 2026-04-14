import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Waterstone Companies",
  description:
    "Roofing, decks, fencing, sunrooms, siding, gutters, patio covers, and interior accents — Waterstone Companies serves East Alabama.",
};

const services = [
  { href: "/services/roofing", title: "Roofing", desc: "Full roof replacements and repairs." },
  { href: "/services/siding-gutters", title: "Siding & Gutters", desc: "Durable siding and seamless gutters." },
  { href: "/services/decks", title: "Decks", desc: "Custom-built decks for your space." },
  { href: "/services/fencing", title: "Fencing", desc: "Privacy, security, and curb appeal." },
  { href: "/services/sunrooms-pergolas", title: "Sunrooms & Pergolas", desc: "Extend your living space." },
  { href: "/services/patio-covers", title: "Patio Covers", desc: "Year-round outdoor comfort." },
  { href: "/services/interior-accents", title: "Interior Accents", desc: "Shiplap, wainscoting, and trim work." },
];

export default function ServicesPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
            What We Do
          </p>
          <h1 className="font-serif text-h1 text-foreground">Our Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group p-6 rounded-[10px] border border-border bg-background-secondary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <h2 className="text-h4 font-semibold text-foreground group-hover:text-accent transition-colors">
                {s.title}
              </h2>
              <p className="mt-2 text-body-sm text-foreground-muted">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
