/**
 * Blog listing + in-article hero images. Thumbnails use distinct `/photos/...` files from the
 * project archive (served via `public/photos`, often symlinked from the repo `photos/` folder).
 * To swap in dedicated crops, add files under `public/assets/images/blog/` and update `thumbSrc`.
 */
export type BlogPostMeta = {
  slug: string;
  href: string;
  title: string;
  desc: string;
  category: string;
  thumbSrc: string;
  thumbAlt: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "deck-materials-guide",
    href: "/blog/deck-materials-guide",
    title: "Choosing deck materials for your climate",
    desc: "Wood vs composite — longevity, maintenance, and budget in East Alabama.",
    category: "Decks",
    thumbSrc: "/photos/2N4A4403.jpg",
    thumbAlt: "Custom deck and outdoor living space",
  },
  {
    slug: "fence-styles-privacy",
    href: "/blog/fence-styles-privacy",
    title: "Fence styles that balance privacy and curb appeal",
    desc: "Height, materials, and neighbor-friendly design tips.",
    category: "Fencing",
    thumbSrc: "/photos/pexels-nano71-27291299.jpg",
    thumbAlt: "Privacy fencing along a residential lot",
  },
  {
    slug: "sunroom-three-season",
    href: "/blog/sunroom-three-season",
    title: "Is a three-season room right for you?",
    desc: "Sunrooms vs four-season rooms, screened porches, Temo, and pergolas.",
    category: "Outdoor living",
    thumbSrc: "/photos/6I1A0405.jpg",
    thumbAlt: "Sunroom and bright indoor-outdoor living space",
  },
  {
    slug: "roof-replacement-signs",
    href: "/blog/roof-replacement-signs",
    title: "Signs it may be time for a roof replacement",
    desc: "What to look for from the ground — and when patching stops making sense.",
    category: "Roofing",
    thumbSrc: "/photos/6I1A0394.jpg",
    thumbAlt: "Roof and exterior detail on a custom home",
  },
];

export function getBlogPostMeta(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
