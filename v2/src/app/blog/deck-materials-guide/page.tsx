import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deck Materials Guide | Waterstone Companies",
  description: "Choosing the right material for your new deck — pressure-treated, composite, and more.",
};

export default function DeckMaterialsGuidePage() {
  return (
    <article className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Insights</p>
        <h1 className="font-serif text-h1 text-foreground">Deck Materials Guide</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Port content from existing blog/deck-materials-guide/index.html.
        </p>
      </div>
    </article>
  );
}
