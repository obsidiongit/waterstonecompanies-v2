import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fence Styles for Privacy | Waterstone Companies",
  description: "The best fence styles for privacy and security in East Alabama.",
};

export default function FenceStylesPage() {
  return (
    <article className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Insights</p>
        <h1 className="font-serif text-h1 text-foreground">Fence Styles for Privacy</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Port content from existing blog/fence-styles-privacy/index.html.
        </p>
      </div>
    </article>
  );
}
