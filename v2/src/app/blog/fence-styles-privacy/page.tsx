import type { Metadata } from "next";
import { BlogArticleShell, BlogJsonLd } from "@/components/blog-article-shell";
import { getBlogPostMeta } from "@/data/blog-posts";
import { blogArticleJsonLd } from "@/lib/blog-article-json-ld";

const post = getBlogPostMeta("fence-styles-privacy")!;

export const metadata: Metadata = {
  title: "Fence Styles That Balance Privacy and Curb Appeal | Waterstone Companies",
  description:
    "Height, materials, and neighbor-friendly design tips for privacy fencing in East Alabama—from Waterstone Companies.",
  openGraph: {
    title: "Fence Styles That Balance Privacy and Curb Appeal | Waterstone Companies",
    description:
      "Height, materials, and neighbor-friendly design tips for privacy fencing in East Alabama—from Waterstone Companies.",
    images: [{ url: post.thumbSrc, alt: post.thumbAlt }],
  },
};

const PATH = "/blog/fence-styles-privacy/";
const HEADLINE = "Fence Styles That Balance Privacy and Curb Appeal";
const DESCRIPTION = "Height, materials, and neighbor-friendly design tips for privacy fencing in East Alabama.";

export default function FenceStylesPrivacyPage() {
  const jsonLd = blogArticleJsonLd({
    headline: HEADLINE,
    description: DESCRIPTION,
    path: PATH,
  });

  return (
    <>
      <BlogJsonLd data={jsonLd} />
      <BlogArticleShell
        categoryLabel="Fencing"
        title="Fence styles that balance privacy and curb appeal"
        deck="Height, materials, and neighbor-friendly design tips so your fence works for your yard — not against it."
        heroImage={{ src: post.thumbSrc, alt: post.thumbAlt }}
        cta={{
          title: "Get a fencing quote",
          body: "We install wood, vinyl, and ornamental fencing across East Alabama. Free quotes, clear estimates, and posts set right the first time.",
          primary: { href: "/contact", label: "Get a Free Quote" },
          secondary: { href: "/services/fencing", label: "Fencing services" },
        }}
      >
        <p>
          A privacy fence does two things at once: it screens your yard from the street and neighbors, and it becomes one
          of the most visible features of your property from the outside. Get the balance right and it adds real value.
          Get it wrong and you end up with something that feels like a wall, clashes with the house, or draws complaints
          from next door.
        </p>
        <p>Here is how to think through the main choices.</p>

        <h2>Start with height</h2>
        <p>
          Privacy fencing is almost always 6 feet tall. That is the standard that blocks sight lines from a standing adult
          at ground level. Eight-foot fences offer more screening and are useful for elevated neighbors or hillside lots,
          but they require heavier posts and are not allowed in all jurisdictions without a variance.
        </p>
        <p>
          Front yards are a different conversation. Most municipalities and HOAs cap front yard fences at 3 to 4 feet —
          enough to define your property edge without blocking street views. Decorative picket styles and split rail work
          well at that height and read as welcoming rather than defensive.
        </p>
        <p>
          <strong>Before you do anything else:</strong> check your local zoning rules and your HOA guidelines if you have
          one. Height limits, setback requirements, and material restrictions vary by city. We can help confirm what
          applies to your address.
        </p>

        <h2>Wood privacy fence styles</h2>

        <h3>Board-on-board</h3>
        <p>
          Board-on-board is one of the most popular privacy styles for good reason. Vertical boards overlap each other
          slightly, alternating front and back. The result is full privacy from most angles, good wind resistance, and —
          importantly — the same clean appearance on both sides. Your neighbor sees a finished fence, not the back side of
          your boards. That matters for relationships and HOA compliance.
        </p>
        <p>
          Wood options include cedar (naturally rot-resistant, holds stain well), pine (more affordable, requires
          sealing), and composite boards in a wood-look finish. A standard 6-foot board-on-board fence in cedar typically
          runs <strong>$20 to $35 per linear foot installed</strong> in our area.
        </p>

        <h3>Shadowbox</h3>
        <p>
          Shadowbox is similar to board-on-board but with a more intentional rhythm. Boards alternate front and back with
          a small gap between each one, creating a pattern that allows light and airflow while still blocking direct sight
          lines. It is slightly less private than a solid board-on-board but looks more open and airy from the street. A
          good choice for larger yards where you want definition without mass.
        </p>

        <h3>Stockade (solid privacy)</h3>
        <p>
          Stockade fencing uses tightly butted boards with pointed tops — the classic privacy fence silhouette. It is the
          most affordable wood privacy option but has one drawback: it presents a plain backside to your neighbor. If
          neighbor relations matter or your HOA requires a finished appearance on both sides, board-on-board is usually the
          better choice.
        </p>

        <h2>Vinyl and composite options</h2>
        <p>
          Vinyl privacy panels have come a long way. Modern vinyl fencing looks clean, requires no painting or sealing, and
          holds up well to moisture and UV. It is a strong option for homeowners who want privacy without the annual
          maintenance that wood requires.
        </p>
        <p>
          The trade-off is rigidity — vinyl panels do not flex much under impact and can crack in hard freezes or if
          struck by falling branches. They also look distinctly manufactured, which suits some aesthetics and not others.
          Cost runs <strong>$25 to $45 per linear foot installed</strong> for standard privacy panels.
        </p>
        <p>
          Composite fence boards made from wood fiber and PVC split the difference: they look more like wood, handle
          moisture better than real wood, and require minimal maintenance. They cost a bit more than vinyl but offer a
          warmer appearance.
        </p>

        <h2>Aluminum and ornamental iron</h2>
        <p>
          These are not privacy fences — they are boundary and decorative fences. Aluminum picket fencing defines property
          edges, contains pets and children, and adds a classic look at a lower price than wrought iron. Ornamental iron
          carries more weight visually and lasts for decades with minimal maintenance beyond occasional paint touch-ups.
        </p>
        <p>
          Both styles work well at the front of a property or along a driveway, often paired with a taller wood or vinyl
          fence along the back and sides.
        </p>

        <h2>Neighbor-friendly design tips</h2>
        <p>
          A fence is a shared visual element whether you like it or not. A few choices make the difference between a
          fence that builds goodwill and one that creates friction:
        </p>
        <ul>
          <li>
            <strong>Finished both sides.</strong> Board-on-board and shadowbox look the same from either direction.
            Stockade and standard picket do not. If your neighbor faces the back of your fence, choose a style that looks
            intentional from their side.
          </li>
          <li>
            <strong>Set the posts inward.</strong> Fence lines should run along your property boundary, but posts and
            footings typically go on your side. Placing the finished face toward the neighbor is a common courtesy that most
            reciprocate.
          </li>
          <li>
            <strong>Match or complement the house.</strong> A fence that clashes in color or style with the home looks like
            an afterthought. Stain color, cap style, and post tops are small details that make a visible difference from the
            street.
          </li>
          <li>
            <strong>Plan for gates early.</strong> Gate placement affects traffic flow, fence post spacing, and hardware
            cost. Think through how the gate interacts with your driveway, side yard, and any future structures before the
            posts go in.
          </li>
        </ul>

        <h2>Materials and climate</h2>
        <p>
          East Alabama humidity is hard on unsealed wood. Cedar holds up better than pine and is worth the premium for
          privacy fencing that you want to last 15 to 20 years with reasonable maintenance. Vinyl and composite panels
          sidestep the moisture issue entirely and are growing in popularity here for that reason.
        </p>
        <p>
          Whatever material you choose, post installation is the hidden variable. Concrete footings below the frost line,
          the right post diameter for the fence height, and proper drainage all affect how long the fence stays plumb and
          solid. We do not cut corners on post installation because it is the part you cannot easily fix later.
        </p>

        <h2>Where to start</h2>
        <p>
          Most fencing projects begin with a simple question: what problem are you solving? Privacy from the street,
          containment for kids or dogs, a property boundary, aesthetics, all of the above? The answer shapes every other
          decision — height, style, material, and gate placement all follow from it.
        </p>
        <p>
          If you are not sure where to start, a site visit is the fastest way to get clarity. We can walk the property, flag
          the boundary, and talk through options that match your goals and budget.
        </p>
      </BlogArticleShell>
    </>
  );
}
