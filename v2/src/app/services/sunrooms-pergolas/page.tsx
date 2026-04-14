import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunrooms & Pergolas | Waterstone Companies",
  description: "Screened porches, sunrooms, and custom pergolas for East Alabama homes.",
};

export default function SunroomsPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Services</p>
        <h1 className="font-serif text-h1 text-foreground">Sunrooms &amp; Pergolas</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Port content from existing services/sunrooms-pergolas/index.html.
        </p>
      </div>
    </section>
  );
}
