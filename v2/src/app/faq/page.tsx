import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Waterstone Companies",
  description: "Frequently asked questions about Waterstone Companies services, pricing, and process.",
};

export default function FaqPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
            Support
          </p>
          <h1 className="font-serif text-h1 text-foreground">
            Frequently Asked Questions
          </h1>
        </div>
        {/* FAQ items will go here */}
        <div className="text-center text-foreground-muted text-sm py-16 border border-dashed border-border rounded-lg">
          FAQ accordion — port from existing faq/index.html
        </div>
      </div>
    </section>
  );
}
