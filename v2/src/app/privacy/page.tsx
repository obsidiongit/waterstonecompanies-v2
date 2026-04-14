import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Waterstone Companies",
  description: "Privacy policy for Waterstone Companies.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="font-serif text-h1 text-foreground">Privacy Policy</h1>
        {/* Port content from existing privacy/index.html */}
        <div className="text-center text-foreground-muted text-sm py-16 border border-dashed border-border rounded-lg">
          Privacy policy content — port from existing privacy/index.html
        </div>
      </div>
    </section>
  );
}
