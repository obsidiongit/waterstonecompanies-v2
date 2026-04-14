import type { Metadata } from "next";
import { BlogArticleShell, BlogJsonLd } from "@/components/blog-article-shell";
import { getBlogPostMeta } from "@/data/blog-posts";
import { blogArticleJsonLd } from "@/lib/blog-article-json-ld";

const post = getBlogPostMeta("sunroom-three-season")!;

export const metadata: Metadata = {
  title: "Is a Three-Season Room Right for You? | Waterstone Companies",
  description:
    "How sunrooms and three-season rooms extend usable space without a full addition—from Waterstone Companies in East Alabama.",
  openGraph: {
    title: "Is a Three-Season Room Right for You? | Waterstone Companies",
    description:
      "How sunrooms and three-season rooms extend usable space without a full addition—from Waterstone Companies in East Alabama.",
    images: [{ url: post.thumbSrc, alt: post.thumbAlt }],
  },
};

const PATH = "/blog/sunroom-three-season/";
const HEADLINE = "Is a Three-Season Room Right for You?";
const DESCRIPTION =
  "How sunrooms and three-season rooms extend usable space without a full addition.";

export default function SunroomThreeSeasonPage() {
  const jsonLd = blogArticleJsonLd({
    headline: HEADLINE,
    description: DESCRIPTION,
    path: PATH,
  });

  return (
    <>
      <BlogJsonLd data={jsonLd} />
      <BlogArticleShell
        categoryLabel="Outdoor living"
        title="Is a three-season room right for you?"
        deck="How sunrooms extend usable space without the cost and complexity of a full home addition — and how to decide which type fits your goals."
        heroImage={{ src: post.thumbSrc, alt: post.thumbAlt }}
        cta={{
          title: "Thinking about a sunroom or enclosure?",
          body: "We install Temo sunroom systems and build custom pergolas across East Alabama. Free quotes, clear scope, and projects built to last.",
          primary: { href: "/contact", label: "Get a Free Quote" },
          secondary: { href: "/services/sunrooms-pergolas", label: "Sunrooms & pergolas" },
        }}
      >
        <p>
          If your screened porch sits empty six months of the year because it is too hot in summer or too cold in the
          shoulder seasons, you are not alone. A three-season room solves that problem for a fraction of the cost of a
          traditional room addition. But it is not the right answer for everyone, and the terminology — three-season,
          four-season, sunroom, patio enclosure — gets used loosely in ways that can create confusion.
        </p>
        <p>Here is a clear breakdown of what each option actually delivers and how to figure out which one makes sense for your home.</p>

        <h2>What is a three-season room?</h2>
        <p>
          A three-season room is an enclosed outdoor living space designed for use in spring, fall, and mild winter
          weather — typically any time the outdoor temperature is above 40 to 50 degrees. It uses glass or screen panels
          with light insulation and is not tied into your home&apos;s HVAC system for heating and cooling.
        </p>
        <p>
          The defining characteristic is that it sits between fully outdoors and fully conditioned interior space. You
          get shelter from rain, insects, and wind. You get natural light from all sides. But you are not going to use
          it on a 15-degree January night or during peak Alabama summer afternoon heat without a supplemental fan or
          space heater.
        </p>
        <p>
          In East Alabama, that limitation matters less than it would in a northern climate. Our winters are mild
          enough that a three-season room is genuinely usable from September through May, which covers the best outdoor
          weather we get. July and August are the real question — and that is where the four-season option earns its
          premium.
        </p>

        <h2>What is a four-season room?</h2>
        <p>
          A four-season room is a fully insulated, climate-controlled addition. It connects to your home&apos;s existing
          HVAC system (or has its own dedicated mini-split) and uses insulated glass and walls to maintain comfortable
          temperatures year-round. It is, for most practical purposes, a room addition that happens to have a lot of
          windows.
        </p>
        <p>
          Four-season rooms cost significantly more than three-season enclosures — often two to three times as much —
          and require more involved permitting, structural work, and mechanical connections. They also add heated square
          footage that counts toward your home&apos;s taxable area and may affect your homeowner&apos;s insurance
          calculations.
        </p>
        <p>
          If year-round use in all weather is the goal, a four-season room is the right answer. If your primary goal is
          extending the enjoyable shoulder seasons and getting out of the sun and bugs, a three-season room does that at
          a much lower cost.
        </p>

        <h2>Screened porch vs. enclosed sunroom</h2>
        <p>
          A screened porch is the simplest version of outdoor enclosure — a covered structure with screen panels instead
          of glass. Screens let in a breeze, keep out insects, and provide partial sun protection. They offer no
          insulation and no weather sealing. A screened porch on a rainy day is wet on the inside if the wind is coming
          the right direction.
        </p>
        <p>
          An enclosed sunroom steps up from there with glass panels or glass-and-screen combination systems. Glass blocks
          rain, wind, and most temperature extremes while still delivering the natural light and connection to the
          outdoors that make these spaces appealing. Many sunroom systems use EZE-Breeze or similar vinyl-track windows
          that slide open for ventilation or close for weather protection, giving you flexibility a screened porch cannot
          offer.
        </p>

        <h2>Temo sunrooms</h2>
        <p>
          We install Temo sunroom systems, which are engineered enclosures built around aluminum framing and tempered
          glass. Temo products are backed by a lifetime transferable warranty on the structure, which is unusual in this
          category and worth noting if you plan to sell the home. The system integrates with existing deck or patio slabs
          and does not require a new foundation in most cases, which keeps the project scope and cost manageable.
        </p>
        <p>
          Temo offers both three-season and four-season configurations, so the decision about which type you want does not
          determine which system you use — it determines how the system is specified and installed.
        </p>

        <h2>What about pergolas?</h2>
        <p>
          Pergolas are open-frame structures that provide partial shade and a defined outdoor room without enclosing the
          space. They are a great middle ground between a bare patio and a full enclosure — perfect for outdoor dining,
          seating areas, and spaces where you want an architectural element without the cost of walls and a roof
          system.
        </p>
        <p>
          Pergolas can be freestanding or attached to the house. They pair well with string lights, ceiling fans, and
          climbing plants. They do not provide protection from rain or insects, so if those are the main problems you are
          trying to solve, a sunroom is a better fit. If you want shade and structure without enclosure, a pergola is often
          the right answer.
        </p>

        <h2>Questions to ask yourself before deciding</h2>
        <ul>
          <li>
            <strong>What months do you want to use this space?</strong> If the answer includes July and August at any
            temperature, plan for a four-season room or at minimum a mini-split. If shoulder seasons are the target,
            three-season is likely enough.
          </li>
          <li>
            <strong>Is this replacing a screened porch or adding new space?</strong> Enclosing an existing screened porch
            is often the most cost-effective path. Starting from a bare patio adds deck or foundation work to the scope.
          </li>
          <li>
            <strong>What will you use it for?</strong> A morning coffee room looks different from a dining room, which
            looks different from a playroom or home office. Think through furniture, traffic flow, and how the space
            connects to the kitchen or living area.
          </li>
          <li>
            <strong>Does your HOA require approval?</strong> Sunroom additions typically need HOA sign-off and a building
            permit. We handle the permit process, but HOA approval is yours to initiate.
          </li>
        </ul>

        <h2>What to expect from the project</h2>
        <p>
          A typical three-season sunroom on an existing patio slab takes two to four weeks from permit to completion,
          depending on scope and weather. Projects that require a new deck, footings, or electrical work take longer. We
          provide a clear timeline in the proposal so you know what to plan around.
        </p>
        <p>
          The finished space adds usable square footage and consistently ranks among the home improvements that
          homeowners say they use more than they expected. The key is designing it around how you actually live — not how
          you imagine you might.
        </p>
      </BlogArticleShell>
    </>
  );
}
