export function blogArticleJsonLd(input: {
  headline: string;
  description: string;
  /** e.g. `/blog/sunroom-three-season/` */
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    author: { "@type": "Organization", name: "Waterstone Companies" },
    publisher: { "@type": "Organization", name: "Waterstone Companies" },
    url: `https://waterstonehomes.com${input.path}`,
  };
}
