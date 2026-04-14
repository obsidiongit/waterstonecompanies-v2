import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Waterstone Companies",
  description:
    "Learn about Waterstone Companies — serving St. Clair and East Jefferson County with quality home improvement and outdoor living since 2016.",
};

export default function AboutPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
          About Us
        </p>
        <h1 className="font-serif text-h1 text-foreground">
          Built on Trust, Backed by Experience
        </h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          {/* Port content from existing about/index.html */}
          Waterstone Companies, LLC has been serving East Alabama since 2016. We
          handle roofing, decks, fencing, sunrooms, siding, gutters, patio
          covers, and more — with flat-fee pricing and transparent quotes.
        </p>
      </div>
    </section>
  );
}
