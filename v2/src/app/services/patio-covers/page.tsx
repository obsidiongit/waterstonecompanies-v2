import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patio Covers | Waterstone Companies",
  description: "Aluminum and insulated patio covers for year-round outdoor comfort.",
};

export default function PatioCoversPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Services</p>
        <h1 className="font-serif text-h1 text-foreground">Patio Covers</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Port content from existing services/patio-covers/index.html.
        </p>
      </div>
    </section>
  );
}
