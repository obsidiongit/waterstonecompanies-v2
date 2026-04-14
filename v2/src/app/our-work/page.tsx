import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Waterstone Companies",
  description: "Browse completed projects — decks, fences, sunrooms, roofing, and more across East Alabama.",
};

export default function OurWorkPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
            Portfolio
          </p>
          <h1 className="font-serif text-h1 text-foreground">Our Work</h1>
          <p className="mt-4 text-body-lg text-foreground-muted">
            Real projects, real results. Browse our completed work across East Alabama.
          </p>
        </div>
        {/* Project gallery will go here */}
        <div className="text-center text-foreground-muted text-sm py-16 border border-dashed border-border rounded-lg">
          Project gallery — port from existing our-work/index.html
        </div>
      </div>
    </section>
  );
}
