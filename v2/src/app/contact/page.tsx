import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Waterstone Companies",
  description: "Get a free quote from Waterstone Companies. Call (205) 575-0176 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-h1 text-foreground">Contact Us</h1>
          <p className="mt-4 text-body-lg text-foreground-muted">
            Ready to start your project? Get a free, no-pressure quote.
          </p>
        </div>
        {/* Contact form will go here */}
        <div className="text-center text-foreground-muted text-sm py-16 border border-dashed border-border rounded-lg">
          Contact form — port from existing contact/index.html
        </div>
      </div>
    </section>
  );
}
