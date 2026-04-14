import type { Metadata } from "next";
import { BlogArticleShell, BlogJsonLd } from "@/components/blog-article-shell";
import { getBlogPostMeta } from "@/data/blog-posts";
import { blogArticleJsonLd } from "@/lib/blog-article-json-ld";

const post = getBlogPostMeta("roof-replacement-signs")!;

export const metadata: Metadata = {
  title: "Signs It May Be Time for a Roof Replacement | Waterstone Companies",
  description:
    "What to look for from the ground—and when to call a pro. Roof replacement signs and what they mean, from Waterstone Companies in East Alabama.",
  openGraph: {
    title: "Signs It May Be Time for a Roof Replacement | Waterstone Companies",
    description:
      "What to look for from the ground—and when to call a pro. Roof replacement signs and what they mean, from Waterstone Companies in East Alabama.",
    images: [{ url: post.thumbSrc, alt: post.thumbAlt }],
  },
};

const PATH = "/blog/roof-replacement-signs/";
const HEADLINE = "Signs It May Be Time for a Roof Replacement";
const DESCRIPTION = "What to look for from the ground and when to call a pro.";

export default function RoofReplacementSignsPage() {
  const jsonLd = blogArticleJsonLd({
    headline: HEADLINE,
    description: DESCRIPTION,
    path: PATH,
  });

  return (
    <>
      <BlogJsonLd data={jsonLd} />
      <BlogArticleShell
        categoryLabel="Roofing"
        title="Signs it may be time for a roof replacement"
        deck="What to look for from the ground — and when patching stops making sense."
        heroImage={{ src: post.thumbSrc, alt: post.thumbAlt }}
        cta={{
          title: "Get a free roof inspection",
          body: "We inspect and replace roofs across East Alabama. No charge to take a look and give you an honest assessment of what you are working with.",
          primary: { href: "/contact", label: "Schedule an Inspection" },
          secondary: { href: "/services/roofing", label: "Roofing services" },
        }}
      >
        <p>
          Most homeowners do not think about their roof until something goes wrong. A leak in the ceiling, a shingle in
          the yard after a storm, or a notice from the insurance company triggers a closer look at something that has been
          quietly working overhead for years. By the time those events happen, the roof may have been showing warning signs
          for a while.
        </p>
        <p>
          You do not need to climb up there to get a useful read on your roof&apos;s condition. Here is what to look for
          from the ground, from inside the attic, and what the numbers say about when it is time to stop patching and start
          planning for replacement.
        </p>

        <h2>How long do roofs last?</h2>
        <p>
          The answer depends almost entirely on material. Standard three-tab asphalt shingles are rated for 20 to 25
          years. Architectural (dimensional) shingles, which are thicker and more durable, are rated for 25 to 30 years.
          Metal roofing — standing seam or metal shingles — can last 40 to 70 years with minimal maintenance. Tile and
          slate push beyond that.
        </p>
        <p>
          In East Alabama, the combination of summer UV exposure, heat cycling, and storm activity tends to put roofs at
          the lower end of their rated lifespan rather than the upper end. If you do not know how old your roof is, your
          real estate closing documents may include it. If not, a roofer can estimate age from the condition and style of
          the shingles.
        </p>

        <h2>What to look for from the ground</h2>

        <h3>Curling or cupping shingles</h3>
        <p>
          Asphalt shingles curl in two ways. Cupping means the edges turn upward, leaving the center depressed. Clawing
          means the edges stay flat but the middle lifts. Both are signs that the shingles have lost flexibility and
          moisture resistance. Curling shingles are vulnerable to wind uplift and cannot seal properly against water. This is
          one of the clearest visible signs that the shingles are past their useful life.
        </p>

        <h3>Missing shingles or bare patches</h3>
        <p>
          A missing shingle is not just a cosmetic issue. The exposed deck and underlayment beneath it are now unprotected
          from rain. One or two missing shingles after a storm can often be patched if the surrounding shingles are in
          good condition. But if the issue is widespread or recurs frequently, it points to a shingle system that is no
          longer bonding and sealing properly — which replacement addresses, not repeated patches.
        </p>

        <h3>Dark streaking or staining</h3>
        <p>
          Dark streaks running vertically down asphalt shingles are usually algae (Gloeocapsa magma), which feeds on the
          limestone filler in shingles. Algae does not cause immediate structural damage but does shorten shingle life over
          time. It can be treated with a zinc sulfate wash. If the staining is severe and the shingles are already aged,
          it may not be worth treating — factor it into the replacement timeline instead.
        </p>

        <h3>Moss and lichen</h3>
        <p>
          Moss holds moisture against the shingle surface and works its way under the edges, accelerating deterioration.
          Lichen is harder to remove and can damage shingle granules in the process. Heavy moss or lichen growth on an aging
          roof is a sign that moisture retention has been a problem and the underlying shingles may be compromised beneath
          the surface.
        </p>

        <h3>Sagging roofline</h3>
        <p>
          A straight roofline is a healthy roofline. Sagging, dipping, or uneven ridgelines suggest structural issues —
          either with the decking (the plywood or OSB beneath the shingles) or with the framing below it. This is a more
          serious finding than worn shingles and warrants prompt attention. Sagging areas can indicate rot, long-term
          moisture intrusion, or decking that has lost its integrity. Do not delay if you see this.
        </p>

        <h2>Granules in the gutters</h2>
        <p>
          Asphalt shingles are coated with granules that protect the asphalt layer from UV degradation. As shingles age,
          they shed granules, especially after hail or heavy rain. Finding granules accumulating in your gutters or
          downspout splash blocks is normal in small quantities on older roofs — but heavy granule loss means the shingles
          are losing their protective coating and will deteriorate more quickly from here.
        </p>
        <p>
          Check your gutters after the first heavy rain of the season. A light dusting is expected. A notable layer of
          granules, or color-matched grit that fills the downspout strainer, is a flag worth acting on.
        </p>

        <h2>Signs from inside the attic</h2>
        <p>
          On a bright day, go into your attic and look up. You should see the underside of the decking and rafters. You
          should not see daylight coming through gaps or holes. If you see light — even pinhole-sized — water can get
          through in the same spots.
        </p>
        <p>Also look for:</p>
        <ul>
          <li>
            <strong>Dark staining on the decking</strong> — indicates past or ongoing moisture intrusion, even if the attic
            is dry today.
          </li>
          <li>
            <strong>Mold or mildew growth</strong> on rafters or insulation — a sign of persistent elevated moisture and
            possible inadequate ventilation.
          </li>
          <li>
            <strong>Soft or spongy decking</strong> when pressed from below — indicates rot and means the decking will need
            to be replaced along with the shingles.
          </li>
        </ul>

        <h2>Repair vs. replace: how to think about it</h2>
        <p>
          Repairs make sense when the damage is isolated, the shingles are relatively young, and the surrounding roof is in
          good condition. A patch on a 10-year-old roof after a storm is a reasonable call. A patch on a 22-year-old roof
          with widespread granule loss, curling shingles, and a history of leaks is money spent delaying an inevitable
          replacement while allowing ongoing moisture damage.
        </p>
        <p>
          The rule of thumb most roofers use: if repairs exceed 25 to 30 percent of replacement cost, or if the roof has
          been repaired repeatedly in the past few years, replacement is the smarter financial decision. Insurance companies
          often reach the same conclusion on roofs past a certain age.
        </p>
        <p>
          It is also worth noting that a replacement roof is a clean slate. New underlayment, new flashing, new ventilation
          if needed — issues that patches cannot address get resolved in a full replacement.
        </p>

        <h2>What a professional inspection tells you</h2>
        <p>
          A roofing inspection from a qualified contractor gives you a condition assessment, an estimate of remaining life,
          and a clear recommendation on repair vs. replacement. We do not charge for initial inspections and do not have
          an incentive to recommend replacement when repair is the honest answer — we want to earn long-term customers, not
          one-time transactions.
        </p>
        <p>
          If your roof is approaching 15 to 20 years old and you have not had it inspected recently, scheduling one before
          storm season is worth the hour it takes. Knowing where you stand lets you plan rather than react.
        </p>
      </BlogArticleShell>
    </>
  );
}
