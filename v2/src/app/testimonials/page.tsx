import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Waterstone Companies",
  description: "Read what our customers say about Waterstone Companies.",
};

export default function TestimonialsPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
            Testimonials
          </p>
          <h1 className="font-serif text-h1 text-foreground">Reviews</h1>
          <p className="mt-4 text-body-lg text-foreground-muted">
            Hear from our customers across East Alabama.
          </p>
        </div>
        {/* Testimonials will go here */}
        <div className="text-center text-foreground-muted text-sm py-16 border border-dashed border-border rounded-lg">
          Testimonials — port from existing testimonials/index.html
        </div>
      </div>
    </section>
  );
}
