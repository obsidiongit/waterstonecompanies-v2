import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | Waterstone Companies",
  description: "Tips, guides, and advice on home improvement and outdoor living from Waterstone Companies.",
};

const posts = [
  { href: "/blog/deck-materials-guide", title: "Deck Materials Guide", desc: "Choosing the right material for your new deck." },
  { href: "/blog/fence-styles-privacy", title: "Fence Styles for Privacy", desc: "The best fence styles for privacy and security." },
  { href: "/blog/roof-replacement-signs", title: "Signs You Need a Roof Replacement", desc: "How to tell when it's time for a new roof." },
  { href: "/blog/sunroom-three-season", title: "Three-Season Sunrooms", desc: "Why a three-season sunroom might be right for you." },
];

export default function BlogPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-label uppercase tracking-widest text-foreground-muted mb-3">
            Blog
          </p>
          <h1 className="font-serif text-h1 text-foreground">Insights</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group p-6 rounded-[10px] border border-border bg-background-secondary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <h2 className="text-h4 font-semibold text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-body-sm text-foreground-muted">{post.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
