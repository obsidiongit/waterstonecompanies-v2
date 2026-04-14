import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Waterstone Companies — East Alabama's Home Improvement Contractor",
  description:
    "Meet Brian Camp and the Waterstone team — East Alabama's home improvement and outdoor living contractor since 2016. 30+ years experience, flat fees, transparent quotes.",
};

const coreValues = [
  {
    id: "value-do-job",
    title: "Do your job",
    image: "/photos/6I1A0547.jpg",
    imageAlt: "Custom kitchen with island, natural wood cabinets, and quality finishes",
    reverse: false,
    lede: "Construction is physical work with real deadlines. We show up prepared, sequence the work thoughtfully, and stand behind finishes you'll live with every day — not a rushed finish.",
    bullets: [
      "We respect the schedule and the order of work, and we don't pass problems downstream with careless shortcuts.",
      "Job sites stay organized; we protect work that's already in place and clean up like professionals.",
      "When something isn't right, we fix it — we don't hide it or hope you won't notice.",
    ],
  },
  {
    id: "value-honesty",
    title: "Honesty & integrity",
    image: "/photos/2N4A5550.jpg",
    imageAlt: "Covered porch with brick, columns, and craftsman details",
    reverse: true,
    lede: "Trust comes from steady behavior: straight answers, realistic expectations, and doing what we said we would do — even when it's inconvenient.",
    bullets: [
      "We tell you what we know, what we don't, and what has to happen next, especially when plans or budgets need to adjust.",
      "Selections and changes are documented so you're not surprised by mystery line items at the end.",
      "Our name in East Alabama matters to us; we're building relationships, not chasing a single closing.",
    ],
  },
  {
    id: "value-service",
    title: "Customer service",
    image: "/photos/2N4A4450.jpg",
    imageAlt: "Open living area with ceiling beams and stone fireplace",
    reverse: false,
    lede: "Your project should match your vision, not a one-size-fits-all approach. We listen first, then advise with experience so your priorities drive the work.",
    bullets: [
      <>
        We&apos;re here to build the project <em>you</em> want, with honest guidance on materials, style, and long-term value.
      </>,
      "You have real access to our team and to seasoned trade partners when a decision needs a conversation, not a brochure.",
      "From early planning to the final walkthrough, we're responsive and respectful of your time and your goals.",
    ],
  },
  {
    id: "value-communication",
    title: "Communication",
    image: "/photos/6I1A0460.jpg",
    imageAlt: "Screened outdoor living space with dining area",
    reverse: true,
    lede: "The best projects run on steady dialogue between you, our office, and the crew turning your ideas into a finished result.",
    bullets: [
      "You work directly with trade partners when it helps lock in details; they know their scopes and often suggest savings or upgrades you hadn't considered.",
      "We keep you oriented on phase, budget, and what decisions are coming so you're never lost in the process.",
      "Questions are welcome — we'd rather over-communicate than leave you guessing.",
    ],
  },
  {
    id: "value-transparency",
    title: "Transparency",
    image: "/photos/Photo_6553605_DJI_5_jpg_7026637_0_202633010134_photo_original.jpg.jpg",
    imageAlt: "Aerial view of a property and surrounding land in East Alabama",
    reverse: false,
    lede: "It's your money. You should see where it goes and choose how to spread it across what matters most — from structure to finishes.",
    bullets: [
      "Flat fees and transparent quoting mean fewer hidden markups and more room to invest where you care.",
      "Our owners work with vendors and real numbers on the selections you want — you're not locked into a narrow \"good / better / best\" menu.",
      "We're a contractor that works with you — if you can picture it, we'll help you understand what it takes to get it done.",
    ],
  },
] as const;

const customerBullets = [
  "They've owned their home for a while and want to invest in it — a new roof before things get serious, a deck they'll actually use, or a sunroom that's been on the wish list for years.",
  "They want real pricing upfront — not a lowball estimate followed by a string of change orders.",
  "They like custom details and an outdoor lifestyle — covered patios, quality fencing, and finishes that feel like they belong, not like they came from a catalog.",
  "They value local — they'd rather work with someone rooted in St. Clair County than a national company that sends a different crew every time.",
  "They want guidance, not guesswork — experienced advice on what's worth doing, what'll hold up, and what the honest timeline looks like.",
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[45vh] flex items-center justify-center px-6 py-20 text-primary-foreground">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/photos/2N4A4450.jpg"
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
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">Our team</p>
          <h1 className="font-serif text-h1 md:text-display text-balance">About Waterstone Companies</h1>
          <p className="mt-4 text-body-lg text-accent-on-inverse">
            Founded in 2016 and rooted in East Alabama — serving St. Clair County and Trussville with honest pricing,
            experienced crews, and work we&apos;re proud to put our name on.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-h2 text-foreground text-balance">
            East Alabama&apos;s home improvement &amp; outdoor living contractor
          </h2>
          <p className="mt-6 text-body-lg text-foreground-muted">
            Waterstone Companies, LLC was founded in 2016 and has been serving East Alabama — especially St. Clair County
            and Trussville — ever since. We specialize in roofing, decks, fencing, sunrooms, pergolas, siding, gutters,
            patio covers, carports, and interior accents — with the same flat-fee pricing and straight answers every time.
          </p>
          <p className="mt-6 text-body-lg text-foreground-muted">
            We&apos;re one of the only contractors in East Alabama offering truly transparent quotes — no mystery line
            items, no bait-and-switch. You know what you&apos;re getting and what it costs before we break ground. The
            whole project is a puzzle, and we help you put it together.
          </p>
          <p className="mt-6 text-body-lg text-foreground-muted">
            Brian is a licensed real estate agent (since 1998) and a licensed builder (since 2016), with a mechanical
            engineering background and more than 30 years in East Alabama construction and real estate. He brings real
            technical depth to every project — and he&apos;s been your neighbor the whole time. Learn more at{" "}
            <a
              href="https://www.briancamp.com"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-foreground underline-offset-2 hover:underline"
            >
              BrianCamp.com
            </a>
            .
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-24 px-6 bg-background-secondary border-y border-border"
        aria-labelledby="core-values-heading"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">About us</p>
            <h2 id="core-values-heading" className="font-serif text-h1 text-foreground">
              Core values
            </h2>
            <p className="mt-4 text-body-lg text-foreground-muted">
              How we operate on site, in the office, and with your budget — so the finished project matches what we
              showed you in the quote.
            </p>
          </header>

          <div className="space-y-16 md:space-y-20">
            {coreValues.map((block) => (
              <article
                key={block.id}
                aria-labelledby={block.id}
                className={`flex flex-col gap-8 lg:gap-12 lg:items-center ${
                  block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-sm shrink-0">
                  <Image src={block.image} alt={block.imageAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                </div>
                <div className="lg:w-1/2">
                  <h3 id={block.id} className="font-serif text-h3 text-foreground">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-body-lg text-foreground-muted">{block.lede}</p>
                  <ul className="mt-6 space-y-3 text-body-sm text-foreground-muted list-disc pl-5 marker:text-foreground-subtle">
                    {block.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" aria-labelledby="customers-heading">
        <div className="max-w-6xl mx-auto">
          <article
            className="flex flex-col gap-8 lg:gap-12 lg:items-center lg:flex-row-reverse"
            aria-labelledby="customers-heading"
          >
            <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-sm shrink-0">
              <Image
                src="/photos/2N4A4525.jpg"
                alt="Rear of a property with covered deck and outdoor living space"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 id="customers-heading" className="font-serif text-h2 text-foreground">
                Who are our customers?
              </h2>
              <p className="mt-4 text-body-lg text-foreground-muted">
                East Alabama homeowners who want quality work, straight numbers, and a contractor they can actually
                reach. They&apos;ve dealt with enough runarounds — they want someone they can trust.
              </p>
              <ul className="mt-6 space-y-3 text-body-sm text-foreground-muted list-disc pl-5 marker:text-foreground-subtle">
                {customerBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-background-secondary border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-h1 text-foreground">Meet the team</h2>
          <div className="relative w-full max-w-2xl mx-auto mt-8 aspect-[16/10] rounded-lg overflow-hidden border border-border shadow-sm">
            <Image
              src="/photos/Photo_6553601_DJI_1_jpg_5105426_0_202633095958_photo_original.jpg.jpg"
              alt="Aerial view of homes built by Waterstone Companies"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 42rem"
            />
          </div>
          <div className="mt-8 text-left text-body-lg text-foreground-muted space-y-4">
            <p>
              <strong className="text-foreground">Brian Camp</strong> — Builder &amp; owner. Mechanical engineering, real
              estate, and homebuilding with 30 years of experience.{" "}
              <a
                href="https://www.briancamp.com"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                BrianCamp.com
              </a>
            </p>
            <p>
              <strong className="text-foreground">James Haskins</strong> — Project manager. With Waterstone since 2018
              after building his own home with our team.
            </p>
            <p>
              <strong className="text-foreground">Krista Deason</strong> — Office manager. With Waterstone since 2018;
              contracts, insurance, marketing, and administration.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex h-11 px-6 items-center justify-center rounded-md bg-foreground text-primary-foreground text-sm font-semibold hover:bg-surface-raised transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
