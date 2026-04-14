import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siding & Gutters | Waterstone Companies",
  description: "Durable siding and seamless gutters for East Alabama homes.",
};

export default function SidingGuttersPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Services</p>
        <h1 className="font-serif text-h1 text-foreground">Siding &amp; Gutters</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Port content from existing services/siding-gutters/index.html.
        </p>
      </div>
    </section>
  );
}
