import Image from "next/image";
import Link from "next/link";
import type { ServicePageContent } from "@/content/service-pages";

const PROCESS = [
  { n: "1", title: "Consult", body: "We learn your goals, budget, and timeline—and answer your questions." },
  { n: "2", title: "Plan & propose", body: "Clear scope, options, and pricing so you can decide with confidence." },
  { n: "3", title: "Build", body: "Professional installation, steady communication, and a clean job site." },
  { n: "4", title: "Walkthrough", body: "Final review together—we're not done until you're satisfied." },
] as const;

function ListItemLine({ lead, text }: { lead?: string; text: string }) {
  return (
    <li className="text-body text-foreground-muted pl-1">
      {lead ? (
        <>
          <strong className="text-foreground">{lead}</strong> {text}
        </>
      ) : (
        text
      )}
    </li>
  );
}

export function ServicePageShell({ data }: { data: ServicePageContent }) {
  const heroBg = `linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.18) 100%), url(${data.heroImage})`;

  return (
    <>
      <section
        className="relative min-h-[45vh] flex items-center justify-center px-6 py-24 bg-cover bg-center text-primary-foreground"
        style={{ backgroundImage: heroBg }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">
            {data.heroLabel}
          </p>
          <h1 className="font-serif text-h1 md:text-display text-balance">{data.heroTitle}</h1>
          <p className="mt-6 text-body-lg text-accent-on-inverse max-w-2xl mx-auto">
            {data.heroDescription}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="h-11 px-6 bg-primary-foreground text-foreground text-sm font-semibold rounded-md hover:bg-accent-on-inverse transition-colors inline-flex items-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground-muted">
          {(data.trustBar ?? ["Bonded & insured", "Clear estimates", "Quality materials"]).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
            <div className="space-y-8">
              <h2 className="font-serif text-h2 text-foreground">{data.approachTitle}</h2>
              {data.leadParagraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-body-lg text-foreground-muted">
                  {p}
                </p>
              ))}
              {data.sections.map((section, i) => {
                if (section.type === "focusGrid") {
                  return (
                    <div key={i} className="space-y-4">
                      <h3 className="font-serif text-h3 text-foreground">{section.heading}</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {section.cards.map((c) => (
                          <div
                            key={c.title}
                            className="rounded-lg border border-border bg-background-secondary p-5"
                          >
                            <h4 className="text-h4 font-semibold text-foreground">{c.title}</h4>
                            <p className="mt-2 text-body-sm text-foreground-muted">{c.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                if (section.type === "h3List") {
                  return (
                    <div key={i} className="space-y-3">
                      <h3 className="font-serif text-h3 text-foreground">{section.heading}</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {section.items.map((item, j) => (
                          <ListItemLine key={j} lead={item.lead} text={item.text} />
                        ))}
                      </ul>
                    </div>
                  );
                }
                if (section.type === "simpleList") {
                  return (
                    <div key={i} className="space-y-3">
                      {section.heading ? (
                        <h3 className="font-serif text-h3 text-foreground">{section.heading}</h3>
                      ) : null}
                      <ul className="list-disc pl-5 space-y-2">
                        {section.items.map((item, j) => (
                          <ListItemLine key={j} lead={item.lead} text={item.text} />
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <aside className="space-y-6 lg:pt-2">
              <div className="rounded-lg border border-border bg-background-secondary p-6">
                <h3 className="text-h4 font-semibold text-foreground">Project snapshot</h3>
                <ul className="mt-4 space-y-3 text-body-sm text-foreground-muted">
                  {data.snapshotLines.map((line) => (
                    <li key={line.label}>
                      <strong className="text-foreground">{line.label}:</strong> {line.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-background-tertiary/50 p-6">
                <p className="text-amber-700 text-sm tracking-wide" aria-hidden="true">
                  ★★★★★
                </p>
                <p className="mt-3 text-body-sm text-foreground-muted italic">&ldquo;{data.review.quote}&rdquo;</p>
                <p className="mt-3 text-body-sm font-medium text-foreground">{data.review.author}</p>
              </div>
            </aside>
          </div>

          <div className="mt-12 rounded-lg border border-border bg-foreground text-primary-foreground p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-h4 font-semibold">Request a quote</h4>
              <p className="mt-1 text-body-sm text-accent-on-inverse">
                Tell us about your goals—we&apos;ll follow up quickly.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 h-11 px-6 bg-primary-foreground text-foreground text-sm font-semibold rounded-md hover:bg-accent-on-inverse transition-colors inline-flex items-center justify-center"
            >
              Contact us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {data.trustPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-border bg-background-secondary px-4 py-2 text-body-sm text-foreground-muted"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background-secondary border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-label uppercase tracking-widest text-foreground-muted text-center mb-2">
            Process
          </p>
          <h2 className="font-serif text-h2 text-foreground text-center mb-12">
            From first call to finished work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step) => (
              <div key={step.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-primary-foreground text-sm font-bold">
                  {step.n}
                </div>
                <h4 className="mt-4 text-h4 font-semibold text-foreground">{step.title}</h4>
                <p className="mt-2 text-body-sm text-foreground-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-label uppercase tracking-widest text-foreground-muted text-center mb-2">
            Our work
          </p>
          <h2 className="font-serif text-h2 text-foreground text-center">Project photos</h2>
          <p className="mt-4 text-body-lg text-foreground-muted text-center max-w-2xl mx-auto">
            {data.galleryIntro}
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-md bg-background-tertiary"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/our-work"
              className="h-11 px-5 inline-flex items-center text-sm font-semibold rounded-md border border-border hover:bg-background-secondary transition-colors"
            >
              Full portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background-secondary">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-h2 text-foreground text-center mb-8">FAQ</h2>
          <div className="space-y-2">
            {data.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-background px-4 py-3 open:bg-background"
              >
                <summary className="cursor-pointer text-sm font-semibold text-foreground list-none flex justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-foreground-subtle group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-body-sm text-foreground-muted pb-1">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground text-primary-foreground text-center">
        <p className="text-label uppercase tracking-widest text-accent-on-inverse/80">Next step</p>
        <h2 className="mt-3 font-serif text-h1 text-primary-foreground">Ready to talk about your project?</h2>
        <p className="mt-4 text-body-lg text-accent-on-inverse max-w-xl mx-auto">
          Get a free quote—no pressure, just honest guidance.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="h-11 px-6 bg-primary-foreground text-foreground text-sm font-semibold rounded-md hover:bg-accent-on-inverse transition-colors inline-flex items-center"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+12055750176"
            className="h-11 px-6 inline-flex items-center text-sm font-semibold rounded-md border border-accent-on-inverse/40 text-primary-foreground hover:bg-surface-raised transition-colors"
          >
            Call (205) 575-0176
          </a>
        </div>
      </section>
    </>
  );
}
