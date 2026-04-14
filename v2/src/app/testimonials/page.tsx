import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Waterstone Companies",
  description:
    "Homeowner reviews of Waterstone Companies — roofing, decks, fencing, sunrooms, siding, and more across St. Clair County and East Jefferson County, Alabama.",
};

const reviews = [
  {
    initials: "JP",
    name: "Jordan P.",
    detail: "Fencing — St. Clair County",
    text: "—Clear communication from estimate to final walkthrough. Our new fence looks incredible and the crew left the yard neat every day.—",
  },
  {
    initials: "CM",
    name: "Chris & Mel R.",
    detail: "Deck — Trussville area",
    text: '"The deck feels like an outdoor room — we\'re out there half the year. They listened to how we entertain and built exactly for that."',
  },
  {
    initials: "SR",
    name: "Sam R.",
    detail: "Patio cover — Odenville",
    text: '"Professional, on time, and the patio cover matches our brick and trim perfectly. No surprises on the invoice."',
  },
  {
    initials: "TK",
    name: "Taylor K.",
    detail: "Roofing — Moody",
    text: '"They walked us through roofing options without pressure. Install week went smoothly and cleanup was spotless."',
  },
  {
    initials: "MT",
    name: "Marcus & Leigh T.",
    detail: "Deck & Patio Cover — St. Clair County",
    text: '"The whole project felt organized — budget talk upfront, regular updates, and crew members who actually answered our questions."',
  },
  {
    initials: "AD",
    name: "Angela D.",
    detail: "Siding & gutters — Springville area",
    text: '"New siding and gutters transformed the curb appeal. They coordinated colors with our stone and didn\'t rush the details."',
  },
  {
    initials: "RW",
    name: "Robert W.",
    detail: "Interior accents — East Alabama",
    text: '"Beams and mantel in the great room look like they\'ve always belonged. Finish carpentry was tighter than we expected."',
  },
  {
    initials: "PH",
    name: "Pat & Dana H.",
    detail: "Sunroom — Jefferson County",
    text: '"Our screened space is where we drink coffee and host family dinners now. They helped us pick finishes that won\'t fight the weather."',
  },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative min-h-[42vh] flex items-center justify-center px-6 py-20 text-primary-foreground">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/photos/6I1A0472.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/35 to-black/20"
          aria-hidden
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">Reviews</p>
          <h1 className="font-serif text-h1 md:text-display text-balance">Trusted by homeowners</h1>
          <p className="mt-4 text-body-lg text-accent-on-inverse">
            We&apos;re grateful when clients take time to share feedback. Many also leave reviews on Google
            {"\u2014"}
            thank you for every star and every note.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" aria-label="Client reviews">
        <div className="max-w-6xl mx-auto">
          <header className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Client feedback</p>
            <h2 className="font-serif text-h1 text-foreground">What people are saying</h2>
            <p className="mt-4 text-body-lg text-foreground-muted">
              We&apos;re grateful when homeowners share how a project went. Ask us for references anytime
              {"\u2014"}
              we&apos;re proud of the relationships we&apos;ve built alongside the work.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {reviews.map((r) => (
              <article
                key={r.name}
                role="listitem"
                className="rounded-lg border border-border bg-background-secondary p-6 shadow-sm flex flex-col"
              >
                <div className="mb-4">
                  <span className="text-foreground tracking-tight" role="img" aria-label="5 out of 5 stars">
                    <span aria-hidden="true">★★★★★</span>
                  </span>
                </div>
                <p className="text-body text-foreground-muted grow">{r.text}</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className="h-11 w-11 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-semibold text-foreground shrink-0"
                    aria-hidden
                  >
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground text-sm">{r.name}</div>
                    <div className="text-body-sm text-foreground-muted">{r.detail}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-background-secondary border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-h2 text-foreground">Planning a project?</h2>
          <p className="mt-4 text-body-lg text-foreground-muted">
            Tell us what you&apos;re picturing
            {"\u2014"}
            we&apos;ll recommend scope, timing, and next steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 px-8 items-center justify-center rounded-md bg-foreground text-primary-foreground text-sm font-semibold hover:bg-surface-raised transition-colors"
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
