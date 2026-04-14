import type { Metadata } from "next";
import { BlogArticleShell, BlogJsonLd } from "@/components/blog-article-shell";
import { getBlogPostMeta } from "@/data/blog-posts";
import { blogArticleJsonLd } from "@/lib/blog-article-json-ld";

const post = getBlogPostMeta("deck-materials-guide")!;

export const metadata: Metadata = {
  title: "Choosing Deck Materials for Your Climate | Waterstone Companies",
  description:
    "Wood, composite, or PVC? A practical guide to choosing deck materials based on East Alabama's heat, humidity, and rainfall—from Waterstone Companies.",
  openGraph: {
    title: "Choosing Deck Materials for Your Climate | Waterstone Companies",
    description:
      "Wood, composite, or PVC? A practical guide to choosing deck materials based on East Alabama's heat, humidity, and rainfall—from Waterstone Companies.",
    images: [{ url: post.thumbSrc, alt: post.thumbAlt }],
  },
};

const PATH = "/blog/deck-materials-guide/";
const HEADLINE = "Choosing Deck Materials for Your Climate";
const DESCRIPTION =
  "Wood, composite, or PVC? A practical guide to choosing deck materials based on East Alabama's heat, humidity, and rainfall.";

export default function DeckMaterialsGuidePage() {
  const jsonLd = blogArticleJsonLd({
    headline: HEADLINE,
    description: DESCRIPTION,
    path: PATH,
  });

  return (
    <>
      <BlogJsonLd data={jsonLd} />
      <BlogArticleShell
        categoryLabel="Decks"
        title="Choosing deck materials for your climate"
        deck="Wood vs composite vs PVC — what to weigh for longevity, maintenance, and budget when you live where summers are long and humidity is real."
        heroImage={{ src: post.thumbSrc, alt: post.thumbAlt }}
        cta={{
          title: "Ready to plan your deck?",
          body: "We build custom decks across East Alabama. Get a free quote and we will walk through material options, layout, and what fits your budget.",
          primary: { href: "/contact", label: "Get a Free Quote" },
          secondary: { href: "/services/decks", label: "Deck services" },
        }}
      >
        <p>
          Picking deck boards feels like it should be simple. You want something that looks good, holds up, and does not
          eat your weekends with maintenance. The problem is that material performance varies a lot depending on where
          you live — and in East Alabama, the combination of summer heat, high humidity, and seasonal rain creates
          specific challenges that push some materials ahead of others.
        </p>
        <p>Here is what you need to know before you choose.</p>

        <h2>The three main categories</h2>

        <h3>Pressure-treated wood</h3>
        <p>
          Pressure-treated (PT) lumber is still the most common decking material and for good reason: it is widely
          available, easy to work with, and inexpensive at the outset. A basic PT deck typically runs{" "}
          <strong>$15 to $25 per square foot installed</strong>, depending on size and complexity.
        </p>
        <p>
          The trade-off is maintenance. PT wood needs to be cleaned, sealed, and stained every one to three years to stay
          looking good and resist moisture damage. Skip those steps and you will see splitting, graying, and eventually
          rot — especially in a climate where boards spend months cycling between wet and dry. You also need to watch for
          the right species and treatment rating; boards meant for above-ground use should not be placed in ground
          contact.
        </p>
        <p>
          If you have the budget and prefer natural wood but want something that holds up better than PT, options like
          cedar and tropical hardwoods (ipe, tigerwood) offer longer lifespans with less splitting. They cost more upfront
          — often <strong>$25 to $40 per square foot installed</strong> — but the density and natural oils make them more
          durable in humid climates.
        </p>

        <h3>Composite decking</h3>
        <p>
          Composite boards are made from a mix of wood fiber and recycled plastic. They resist moisture, insects, and
          fading far better than natural wood, and they do not need sealing or staining. Most manufacturers recommend
          nothing more than an occasional wash with soap and water.
        </p>
        <p>
          The upfront cost is higher — typically <strong>$25 to $45 per square foot installed</strong> for mid-grade
          composite, more for capped composites from brands like Trex Transcend or TimberTech AZEK. Capped boards add a
          protective outer layer that resists staining and mold more effectively than uncapped versions, which matters in
          a humid climate.
        </p>
        <p>
          In East Alabama, composite is the most popular upgrade from PT wood among our customers. The heat is worth
          noting: dark composite boards can get uncomfortably hot to walk on barefoot in July. Light colors and premium
          lines with heat-diffusion technology help with this. It is worth asking about surface temperature when comparing
          products.
        </p>

        <h3>PVC decking</h3>
        <p>
          PVC boards contain no wood fiber at all, which makes them the most moisture-resistant option available. They will
          not rot, splinter, or support mold growth, and they handle the wet-dry cycles of our climate well.
        </p>
        <p>
          Cost runs <strong>$30 to $50 per square foot installed</strong> at the high end. The look has improved
          significantly in recent years, though some homeowners still prefer the texture of composite. PVC is a strong
          choice for decks near water features, pools, or areas with limited airflow under the structure.
        </p>

        <h2>What climate factors actually matter</h2>

        <h3>Humidity and moisture cycling</h3>
        <p>
          East Alabama averages around 56 inches of rainfall per year, with hot humid summers that keep moisture levels
          high. This is the single biggest driver of deck degradation. Natural wood expands and contracts with moisture
          changes, leading to cupping, splitting, and nail pops over time. Composite and PVC are far more dimensionally
          stable under these conditions.
        </p>

        <h3>Summer heat</h3>
        <p>
          Surface temperature is worth thinking about, especially if you have kids or pets. On a 95-degree afternoon,
          dark composite boards can reach surface temperatures of 140 degrees or more. Lighter board colors, shade
          structures, and products with lighter pigmentation all help. Pressure-treated wood runs cooler than composite in
          direct sun.
        </p>

        <h3>UV exposure</h3>
        <p>
          Direct sun fades and degrades natural wood faster in the South than in more temperate climates. PT wood without
          regular sealing will gray quickly. Capped composite and PVC boards include UV inhibitors and hold their color for
          15 to 25 years with minimal fade.
        </p>

        <h2>Lifetime cost comparison</h2>
        <p>
          The upfront cost advantage of PT wood shrinks when you factor in maintenance over 20 to 25 years. Annual
          sealing, staining, and eventual board replacement can add up to more than the difference in initial material
          cost. Composite and PVC cost more on day one but require almost no ongoing spend beyond cleaning.
        </p>
        <p>
          A useful rule of thumb: if you plan to stay in your home long-term and want a deck that looks good without
          annual work, composite or PVC pays for itself. If you are managing a tighter budget now and are comfortable with
          maintenance, PT wood is a viable choice — just go in with realistic expectations about what that maintenance
          schedule looks like.
        </p>

        <h2>A note on framing</h2>
        <p>
          Whatever decking surface you choose, the framing underneath it matters just as much. PT lumber is standard for
          joists and beams, but the quality of the connections, flashing where the ledger meets the house, and proper
          spacing for airflow all determine how long the structure holds up. We build with those details in mind regardless
          of which surface material you select.
        </p>

        <h2>Railings and fasteners</h2>
        <p>
          Deck boards are half the picture. Railing systems — aluminum, cable, composite, or glass panel — each have their
          own maintenance profiles and price points. Hidden fastener systems give composite and PVC decks a cleaner look
          without exposed screw heads. Stainless steel or coated fasteners are worth using in any climate, but especially
          in humid regions where standard fasteners can rust and stain the board surface over time.
        </p>

        <h2>What we recommend for East Alabama</h2>
        <p>
          For most homeowners here, capped composite hits the right balance of cost, longevity, and low maintenance. For
          tighter budgets, PT wood with a commitment to annual sealing is a workable second choice. PVC earns its premium
          for applications near water or with limited airflow under the deck.
        </p>
        <p>
          The best answer for your specific project depends on your budget, how you use the deck, your sun exposure, and
          how much maintenance you are realistically willing to do. That conversation is easy to have — we walk through it
          on every quote.
        </p>
      </BlogArticleShell>
    </>
  );
}
