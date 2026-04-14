import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decks | Waterstone Companies",
  description: "Custom-built decks — composite, pressure-treated, and more. Serving East Alabama.",
};

export default function DecksPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Services</p>
        <h1 className="font-serif text-h1 text-foreground">Decks</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Port content from existing services/decks/index.html.
        </p>
      </div>
    </section>
  );
}
