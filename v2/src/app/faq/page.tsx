import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Waterstone Companies",
  description:
    "Frequently asked questions about Waterstone Companies — roofing, decks, fencing, sunrooms, estimates, and more. Serving Odenville, St. Clair County, and East Jefferson County, AL.",
};

const faqLdJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide free quotes for projects in our service area after learning about your goals and site.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a whole-home remodeler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waterstone Companies builds custom homes and also offers specialty outdoor and exterior work (fencing, decks, sunrooms, roofing, siding, and more). We are not a full gut-and-remodel interior contractor.",
      },
    },
  ],
};

const categories = [
  {
    title: "General",
    items: [
      {
        q: "Do you offer free estimates?",
        a: "Yes. We provide free quotes for qualifying projects in our service area. we'll ask about your goals, timing, and site so we can give realistic guidance.",
      },
      {
        q: "Are you a whole-home remodeling company?",
        a: "No — we're a home improvement and outdoor living contractor. Roofing, decks, fencing, sunrooms, pergolas, siding, gutters, patio covers, carports, interior accents, and more. We don't do full home builds or whole-home interior gut remodels, but if it involves the exterior of your home or adds to your living space, chances are we do it — with flat fees and no mystery pricing.",
      },
      {
        q: "How quickly will you respond?",
        a: "We aim to respond within one business day. Peak season may add a short delay—we appreciate your patience.",
      },
      {
        q: "Where do you build?",
        a: "We specialize in St. Clair County and East Jefferson County, Alabama—including Trussville (35173), Moody (35004), and Odenville (35120). Our office is at 11520 HWY 411, Odenville, AL 35120.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        q: "Do you handle permits?",
        a: "When permits are required for your build or exterior project, we'll outline what your city or county needs and include permitting in the project plan.",
      },
      {
        q: "What brands or materials do you use?",
        a: "We select materials for durability, warranty support, and how they fit your home and budget—including trusted lines such as Temo where they suit the project.",
      },
      {
        q: "Can I see examples of your work?",
        a: (
          <>
            Yes—see{" "}
            <Link href="/our-work" className="text-foreground font-semibold underline-offset-2 hover:underline">
              Our work
            </Link>{" "}
            for project photos. More photography will be added from your project archive.
          </>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson) }}
      />
      <section className="relative min-h-[38vh] flex items-center justify-center px-6 py-20 text-primary-foreground">
        <div className="absolute inset-0" aria-hidden>
          <Image src="/photos/6I1A0415.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" aria-hidden />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">Help</p>
          <h1 className="font-serif text-h1 md:text-display">Frequently asked questions</h1>
          <p className="mt-4 text-body-lg text-accent-on-inverse">
            Answers about custom builds, our service area, estimates, and how we work with homeowners.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-serif text-h2 text-foreground mb-4 pb-2 border-b-2 border-border inline-block">
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-lg border border-border bg-background-secondary hover:border-accent overflow-hidden"
                  >
                    <summary className="cursor-pointer px-6 py-6 text-[1.1rem] font-semibold text-foreground list-none flex justify-between items-center gap-4 [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span
                        className="shrink-0 text-accent text-2xl leading-none transition-transform group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 -mt-2 text-body-sm text-foreground-muted leading-relaxed">
                      {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center mt-10">
            <Link
              href="/contact"
              className="h-11 px-6 inline-flex items-center rounded-md bg-foreground text-primary-foreground text-sm font-semibold hover:bg-surface-raised transition-colors"
            >
              Still have questions? Contact us
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
