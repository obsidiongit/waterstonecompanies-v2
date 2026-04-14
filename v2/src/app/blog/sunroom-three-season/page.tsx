import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Three-Season Sunrooms | Waterstone Companies",
  description: "Why a three-season sunroom might be right for your East Alabama home.",
};

export default function SunroomThreeSeasonPage() {
  return (
    <article className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Insights</p>
        <h1 className="font-serif text-h1 text-foreground">Three-Season Sunrooms</h1>
        <p className="mt-6 text-body-lg text-foreground-muted">
          Port content from existing blog/sunroom-three-season/index.html.
        </p>
      </div>
    </article>
  );
}
