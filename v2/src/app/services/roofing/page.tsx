import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing | Waterstone Companies",
  description: "Full roof replacements and repairs across East Alabama. Quality materials, experienced crew, flat-fee pricing.",
};

export default function RoofingPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Services</p>
        <h1 className="font-serif text-h1 text-foreground">Roofing</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Full roof replacements and repairs — port content from existing services/roofing/index.html.
        </p>
      </div>
    </section>
  );
}
