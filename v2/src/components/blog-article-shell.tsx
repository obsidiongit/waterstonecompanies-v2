import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function BlogJsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type BlogArticleCta = {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function BlogArticleShell({
  categoryLabel,
  title,
  deck,
  heroImage,
  children,
  cta,
}: {
  categoryLabel: string;
  title: string;
  deck: string;
  heroImage: { src: string; alt: string };
  children: ReactNode;
  cta: BlogArticleCta;
}) {
  return (
    <article className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="mb-6">
          <Link
            href="/blog"
            className="text-body-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            ← Blog
          </Link>
        </p>
        <p className="text-label uppercase tracking-widest text-foreground-muted">{categoryLabel}</p>
        <h1 className="mt-2 font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-4 text-body-lg text-foreground-muted">{deck}</p>
        <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-xl bg-background-tertiary shadow-md ring-1 ring-border/80">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            unoptimized
          />
        </div>
        <div className="blog-content mt-10 md:mt-12">{children}</div>
        <aside className="mt-12 md:mt-14 rounded-xl border border-border bg-gradient-to-br from-background-secondary to-background p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif text-h4 text-foreground">{cta.title}</h2>
          <p className="mt-3 text-body text-foreground-muted leading-relaxed">{cta.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={cta.primary.href}
              className="h-11 px-6 inline-flex items-center text-sm font-semibold rounded-md bg-foreground text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {cta.primary.label}
            </Link>
            {cta.secondary ? (
              <Link
                href={cta.secondary.href}
                className="h-11 px-5 inline-flex items-center text-sm font-semibold rounded-md border border-border text-foreground hover:bg-background transition-colors"
              >
                {cta.secondary.label}
              </Link>
            ) : null}
          </div>
        </aside>
      </div>
    </article>
  );
}
