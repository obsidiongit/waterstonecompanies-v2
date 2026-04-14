import Link from "next/link";

const services = [
  {
    href: "/services/roofing",
    title: "Roofing",
    desc: "Full roof replacements and repairs with quality materials and experienced crews.",
  },
  {
    href: "/services/decks",
    title: "Decks",
    desc: "Custom-built decks designed for your space — composite, pressure-treated, and more.",
  },
  {
    href: "/services/fencing",
    title: "Fencing",
    desc: "Privacy, security, and curb appeal. Wood, vinyl, aluminum, and chain-link options.",
  },
  {
    href: "/services/sunrooms-pergolas",
    title: "Sunrooms & Pergolas",
    desc: "Extend your living space with screened porches, sunrooms, and custom pergolas.",
  },
  {
    href: "/services/siding-gutters",
    title: "Siding & Gutters",
    desc: "Protect and refresh your home exterior with durable siding and seamless gutters.",
  },
  {
    href: "/services/patio-covers",
    title: "Patio Covers",
    desc: "Aluminum and insulated patio covers for year-round outdoor comfort.",
  },
];

const stats = [
  { value: "2016", label: "Serving since" },
  { value: "500+", label: "Projects completed" },
  { value: "30+", label: "Years experience" },
  { value: "AL #25174", label: "Licensed & Insured" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-foreground text-primary-foreground py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="font-serif text-display text-primary-foreground">
              Your outdoor space, done right.
            </h1>
            <p className="mt-6 text-body-lg text-accent-on-inverse max-w-xl">
              Decks, fences, sunrooms, roofing, siding &amp; more — flat-fee
              pricing, experienced crew, done on schedule. Your East Alabama
              neighbors since 2016.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-accent-on-inverse">
              <span>&#10003; Licensed &amp; Insured — AL #25174</span>
              <span>&#10003; Temo Certified Dealer</span>
              <span>&#10003; Flat fees &amp; transparent quotes</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="h-11 px-5 bg-primary-foreground text-foreground text-sm font-semibold rounded-md hover:bg-accent-on-inverse transition-colors inline-flex items-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/our-work"
                className="h-11 px-5 bg-transparent text-primary-foreground text-sm font-semibold rounded-md border border-accent-on-inverse/30 hover:bg-surface-raised transition-colors inline-flex items-center"
              >
                View Our Work
              </Link>
            </div>
            <p className="mt-6 text-sm text-foreground-subtle">
              Serving St. Clair County and East Jefferson County including
              Trussville, Moody, and Odenville.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-background-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-background-tertiary"
            >
              <div className="text-h3 font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-body-sm text-foreground-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
              Our Services
            </p>
            <h2 className="font-serif text-h1 text-foreground">
              Outdoor Living, Built to Last
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-6 rounded-[10px] border border-border bg-background-secondary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <h3 className="text-h4 font-semibold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-body-sm text-foreground-muted">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="h-11 px-5 bg-transparent text-foreground text-sm font-semibold rounded-md border border-border hover:bg-background-secondary transition-colors inline-flex items-center"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-h1 text-primary-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-body-lg text-accent-on-inverse">
            Get a free, no-pressure quote. We&apos;ll walk your property, talk
            through your options, and give you a flat-fee price — no surprises.
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
    </>
  );
}
