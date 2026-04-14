import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Insights | Waterstone Companies",
  description: "Tips, guides, and advice on home improvement and outdoor living from Waterstone Companies.",
};

export default function BlogPage() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">Blog</p>
          <h1 className="font-serif text-h1 text-foreground">Insights</h1>
          <p className="mt-4 text-body-lg text-foreground-muted">
            Practical guides on decks, fencing, roofs, and outdoor living — written for East Alabama homeowners.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative aspect-[2.4/1] w-full shrink-0 overflow-hidden bg-background-tertiary">
                <Image
                  src={post.thumbSrc}
                  alt={post.thumbAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width:640px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-label uppercase tracking-widest text-foreground-muted">{post.category}</span>
                <h2 className="mt-2 text-h4 font-semibold font-sans tracking-tight text-foreground group-hover:text-accent-dark transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-body text-foreground-muted leading-relaxed">{post.desc}</p>
                <span className="mt-5 text-body-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                  Read article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
