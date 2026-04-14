import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

function hasHero0413Mp4(): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "assets", "videos", "0413.mp4"));
}

function hasHeroWebm(): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "assets", "videos", "hero.webm"));
}

const services = [
  {
    href: "/services/roofing",
    title: "Roofing",
    desc: "Roof systems installed right, with manufacturer best practices and no shortcuts.",
    image: "/photos/Photo_6553603_DJI_3_jpg_6088829_0_202633010052_photo_original.jpg.jpg",
  },
  {
    href: "/services/decks",
    title: "Decks",
    desc: "Custom outdoor living platforms built for the way you actually use your yard.",
    image: "/photos/2N4A4525.jpg",
  },
  {
    href: "/services/fencing",
    title: "Fencing",
    desc: "Privacy, security, and curb appeal — quality materials, clean installs.",
    image: "/photos/pexels-nano71-27291299.jpg",
  },
  {
    href: "/services/sunrooms-pergolas",
    title: "Sunrooms & Pergolas",
    desc: "Temo-certified sunrooms and pergolas that feel like part of the house.",
    image: "/photos/6I1A0460.jpg",
  },
  {
    href: "/services/siding-gutters",
    title: "Siding & Gutters",
    desc: "Durable exteriors and proper water management — protecting your investment.",
    image: "/photos/6I1A0471.jpg",
  },
  {
    href: "/services/patio-covers",
    title: "Patio Covers & Carports",
    desc: "Covered outdoor structures — carports, cabanas, and patio covers built to your property.",
    image: "/photos/2N4A5550.jpg",
  },
  {
    href: "/services/interior-accents",
    title: "Interior Accents",
    desc: "Beams, mantels, and closets — the finishing touches that make a house feel like home.",
    image: "/photos/2N4A4445.jpg",
  },
];

const FEATURED_HOME_SERVICE_HREF = "/services/sunrooms-pergolas";
const featuredHomeService = services.find((s) => s.href === FEATURED_HOME_SERVICE_HREF)!;
const homeServicesGrid = services.filter((s) => s.href !== FEATURED_HOME_SERVICE_HREF);

const stats = [
  { value: "30+", label: "Years in the trade" },
  { value: "Flat-fee", label: "Quoted before we start" },
  { value: "One crew", label: "Start to finish" },
  { value: "Local", label: "Alabama owned & operated" },
];

const processSteps = [
  {
    n: "1",
    title: "Call or message",
    body: "Describe your project — we'll ask the right questions about scope, materials, and timeline.",
  },
  {
    n: "2",
    title: "Get your quote",
    body: "Flat-fee pricing, in writing, no surprises. You'll know exactly what it costs before we start.",
  },
  {
    n: "3",
    title: "We build it",
    body: "Licensed crew, clean job site, on schedule. We walk you through the finished work before we leave.",
  },
];

const testimonials = [
  {
    quote: "Professional crew, clean job site, and the deck exceeded our expectations.",
    tag: "Decks",
  },
  {
    quote: "Finally have a fence that actually looks like it belongs with our home.",
    tag: "Fencing",
  },
  {
    quote: "They explained every step. Sunroom feels like part of the house.",
    tag: "Sunrooms",
  },
];

const whyCards = [
  {
    title: "Licensed & insured",
    body: "Alabama license #25174. Full liability and workers' comp coverage on every job — no gaps, no exceptions.",
  },
  {
    title: "Flat-fee pricing",
    body: "Your quote is your price. We don't bill hourly, we don't add change orders. The number we quote is the number you pay.",
  },
  {
    title: "One crew, start to finish",
    body: "No revolving door of subcontractors. The same experienced team handles your project from day one through final walkthrough.",
  },
];

const recentPhotos = [
  { src: "/photos/2N4A4525.jpg", alt: "Custom deck build by Waterstone Companies" },
  { src: "/photos/6I1A0460.jpg", alt: "Sunroom addition by Waterstone Companies" },
  { src: "/photos/2N4A5550.jpg", alt: "Patio cover built by Waterstone Companies" },
  { src: "/photos/2N4A4445.jpg", alt: "Custom fireplace mantel by Waterstone Companies" },
  { src: "/photos/6I1A0405.jpg", alt: "Sunroom interior by Waterstone Companies" },
  { src: "/photos/6I1A0471.jpg", alt: "Siding install by Waterstone Companies" },
];

export default function Home() {
  const hero0413 = hasHero0413Mp4();
  const heroWebm = hasHeroWebm();

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center py-24 px-6 text-primary-foreground overflow-hidden bg-black">
        <div className="absolute inset-0" aria-hidden>
          {hero0413 || heroWebm ? (
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              autoPlay
              muted
              loop
              playsInline
              poster="/photos/2N4A5550.jpg"
            >
              {heroWebm ? <source src="/assets/videos/hero.webm" type="video/webm" /> : null}
              {hero0413 ? <source src="/assets/videos/0413.mp4" type="video/mp4" /> : null}
            </video>
          ) : (
            <Image
              src="/photos/2N4A5550.jpg"
              alt=""
              fill
              className="object-cover opacity-90"
              priority
              sizes="100vw"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" aria-hidden />
        <div className="relative z-10 max-w-3xl mx-auto w-full text-center px-2">
          <h1 className="font-serif text-display text-balance">Your outdoor space, done right.</h1>
          <p className="mt-6 text-body-lg text-accent-on-inverse text-pretty">
            Decks, fences, sunrooms, roofing, siding &amp; more — flat-fee quotes and an experienced crew. East Alabama
            since 2016.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="h-11 px-8 bg-primary-foreground text-foreground text-sm font-semibold rounded-md hover:bg-accent-on-inverse transition-colors inline-flex items-center justify-center w-full max-w-xs sm:w-auto sm:min-w-[12rem]"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/our-work"
              className="text-sm font-medium text-accent-on-inverse underline-offset-4 hover:underline hover:text-primary-foreground transition-colors"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative z-20 border-t border-white/10 bg-zinc-950 text-primary-foreground py-5 px-6"
        aria-label="Credentials, service area, and phone"
      >
        <div className="max-w-5xl mx-auto space-y-3 text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-accent-on-inverse">
            <span>&#10003; Licensed &amp; Insured — AL #25174</span>
            <span>&#10003; Temo Certified Dealer</span>
            <span>&#10003; Flat fees &amp; transparent quotes</span>
          </div>
          <p className="text-xs sm:text-sm text-accent-on-inverse/90 max-w-2xl mx-auto leading-relaxed">
            Serving St. Clair County and East Jefferson County including Trussville (35173), Moody (35004), and
            Odenville (35120).
          </p>
          <p className="text-xs sm:text-sm text-accent-on-inverse/90">
            <a
              href="tel:+12055750176"
              className="font-semibold text-primary-foreground underline-offset-2 hover:underline"
            >
              (205) 575-0176
            </a>
            <span className="text-accent-on-inverse/50" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <span>Free estimates · No spam · Response within 24 hrs</span>
          </p>
        </div>
      </section>

      <section className="py-14 px-6 border-y border-border bg-background-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-h3 font-semibold text-foreground">{s.value}</div>
              <div className="mt-1 text-body-sm text-foreground-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">What we do</p>
            <h2 className="font-serif text-h1 text-foreground">What we build</h2>
            <p className="mt-4 text-body-lg text-foreground-muted">
              From protecting your roof to building the deck you&apos;ve been picturing — every project comes with
              flat-fee pricing and an experienced crew.
            </p>
          </div>
          <div className="space-y-6">
            <Link
              href={featuredHomeService.href}
              className="group relative block min-h-[min(22rem,50vh)] w-full overflow-hidden rounded-[10px] border border-border shadow-sm md:min-h-[20rem]"
            >
              <Image
                src={featuredHomeService.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width:1280px) 100vw, 72rem"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground md:p-8 md:max-w-2xl">
                <h3 className="font-serif text-h2 md:text-h1 font-semibold">{featuredHomeService.title}</h3>
                <p className="mt-3 text-body-lg text-accent-on-inverse line-clamp-3 md:line-clamp-none">
                  {featuredHomeService.desc}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent-on-inverse group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {homeServicesGrid.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative min-h-[220px] overflow-hidden rounded-[10px] border border-border shadow-sm"
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                    <h3 className="text-h4 font-semibold">{s.title}</h3>
                    <p className="mt-2 text-body-sm text-accent-on-inverse line-clamp-2">{s.desc}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-accent-on-inverse group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-10 text-center text-body-sm text-foreground-muted">
            <Link href="/services" className="font-medium text-foreground underline-offset-2 hover:underline">
              View all services
            </Link>{" "}
            — or call us at (205) 575-0176 and we&apos;ll talk through your project.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background-secondary border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Simple process</p>
            <h2 className="font-serif text-h1 text-foreground">How it works</h2>
            <p className="mt-4 text-body-lg text-foreground-muted">
              From first call to finished project — three steps, no runaround.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {processSteps.map((step) => (
              <div key={step.n} className="text-center md:text-left">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-primary-foreground text-sm font-bold">
                  {step.n}
                </span>
                <h3 className="mt-4 text-h4 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-body-sm text-foreground-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label uppercase tracking-widest text-accent-on-inverse/80 mb-3">Client experience</p>
            <h2 className="font-serif text-h1 text-primary-foreground">What neighbors are saying</h2>
            <p className="mt-4 text-body-lg text-accent-on-inverse">
              Word of mouth from families across St. Clair and East Jefferson County.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.quote}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-left"
              >
                <p className="text-body text-accent-on-inverse">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-body-sm">
                  <strong className="text-primary-foreground">— Homeowner</strong>{" "}
                  <span className="text-foreground-subtle">{t.tag}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/testimonials" className="text-sm font-medium text-accent-on-inverse hover:underline">
              Read more reviews
            </Link>
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label uppercase tracking-widest text-accent-on-inverse/80 mb-3">The Waterstone difference</p>
            <h2 className="font-serif text-h1 text-primary-foreground">Why homeowners call us back</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyCards.map((w) => (
              <div key={w.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="text-h4 font-semibold text-primary-foreground">{w.title}</h3>
                <p className="mt-3 text-body-sm text-accent-on-inverse">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Our craftsmanship</p>
            <h2 className="font-serif text-h1 text-foreground">Recent projects</h2>
            <p className="mt-4 text-body-lg text-foreground-muted">
              A look at what we&apos;ve been building for homeowners across East Alabama.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {recentPhotos.map((p) => (
              <Link key={p.src} href="/our-work" className="relative aspect-[4/3] overflow-hidden rounded-md group">
                <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform group-hover:scale-105" sizes="(max-width:768px) 50vw, 33vw" />
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-body-sm text-foreground-muted">
            <Link href="/our-work" className="font-medium text-foreground underline-offset-2 hover:underline">
              Browse all project photos →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background-secondary border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-h1 text-foreground">Ready to get your project started?</h2>
          <p className="mt-4 text-body-lg text-foreground-muted">
            Tell us what you&apos;re thinking — we&apos;ll follow up with a flat-fee quote, usually within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="h-11 px-6 bg-foreground text-primary-foreground text-sm font-semibold rounded-md hover:bg-surface-raised transition-colors inline-flex items-center"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+12055750176"
              className="h-11 px-6 inline-flex items-center text-sm font-semibold rounded-md border border-border text-foreground hover:bg-background transition-colors"
            >
              Call (205) 575-0176
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
