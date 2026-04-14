export type ListItem = { lead?: string; text: string };

export type ServiceSection =
  | { type: "focusGrid"; heading: string; cards: { title: string; body: string }[] }
  | { type: "h3List"; heading: string; items: ListItem[] }
  | { type: "simpleList"; heading?: string; items: ListItem[] };

export type ServicePageContent = {
  metaDescription: string;
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  trustBar?: string[];
  approachTitle: string;
  leadParagraphs: string[];
  sections: ServiceSection[];
  snapshotLines: { label: string; value: string }[];
  review: { quote: string; author: string };
  trustPills: string[];
  galleryIntro: string;
  galleryImages: { src: string; alt: string }[];
  faqs: { question: string; answer: string }[];
};

export const servicePages = {
  fencing: {
    metaDescription:
      "Professional fencing for privacy, pets, and curb appeal. Waterstone Companies installs quality fence systems—request a free quote.",
    heroLabel: "Exterior",
    heroTitle: "Fencing",
    heroDescription:
      "A well-built fence defines your yard, adds privacy, and boosts curb appeal. We help you choose materials and layouts that match your home and how you use your outdoor space.",
    heroImage: "/photos/Photo_6553601_DJI_1_jpg_5105426_0_202633095958_photo_original.jpg.jpg",
    approachTitle: "How we approach fencing",
    leadParagraphs: [
      "From wood and vinyl to ornamental options, we focus on solid posts, clean lines, and code-aware installations.",
      "We spell out what you're getting before we dig—materials, line posts, gates, and any HOA or setback rules—so there are no surprises mid-job. Homeowners trust us to respect the yard and leave a neat site every day.",
    ],
    sections: [
      {
        type: "focusGrid",
        heading: "Where we focus",
        cards: [
          {
            title: "Posts & line work",
            body: "Proper depth, spacing, and bracing for your soil and slope so the run stays straight and strong through seasons and storms.",
          },
          {
            title: "Gates & hardware",
            body: "Drive and walk gates hung for smooth swing, latches that line up, and hardware sized for daily use—not sagging after a year.",
          },
          {
            title: "HOA & setbacks",
            body: "Height, style, and visibility rules reviewed up front so your install matches neighborhood guidelines and municipal expectations.",
          },
          {
            title: "Hardware & longevity",
            body: "Fasteners, post bases, and details chosen for our humidity and soil so gates stay true and rails do not loosen after a few seasons.",
          },
        ],
      },
      {
        type: "h3List",
        heading: "What to expect",
        items: [
          { lead: "Property walkthrough:", text: "We review grade, utilities, and HOA or municipal requirements before we build." },
          { lead: "Material guidance:", text: "We explain tradeoffs for longevity, maintenance, and budget." },
          { lead: "Clean installation:", text: "Neat job sites, proper setbacks, and gates that swing true." },
        ],
      },
      {
        type: "simpleList",
        heading: "Common projects we take on",
        items: [
          { text: "Back- and side-yard privacy fence runs" },
          { text: "Pet-safe perimeter fencing with secure gates" },
          { text: "Pool and boundary enclosures to code" },
          { text: "HOA-style picket, ornamental, or hybrid designs" },
        ],
      },
    ],
    snapshotLines: [
      { label: "Scope", value: "Wood, vinyl, aluminum, and chain-link fencing" },
      { label: "Timeline", value: "Varies by scope—quoted per job" },
      { label: "Next step", value: "Free quote & site visit" },
      { label: "Typical investment", value: "Options at multiple price points—quoted in writing" },
      { label: "Service area", value: "St. Clair & East Jefferson County, AL" },
      { label: "Licensed", value: "Licensed & Insured — AL #25174" },
    ],
    review: {
      quote:
        "Clear communication from estimate to final walkthrough. Our new fence looks incredible and the crew left the yard neat every day.",
      author: "Jordan P., St. Clair",
    },
    trustPills: [
      "Written line-item estimates",
      "Fence photos from real jobs",
      "Licensed & Insured — AL #25174",
      "Neat job sites, local team",
    ],
    galleryIntro:
      "Fencing and perimeter work that defines yards, adds privacy, and complements homes we serve in the area.",
    galleryImages: [
      { src: "/photos/Photo_6553601_DJI_1_jpg_5105426_0_202633095958_photo_original.jpg.jpg", alt: "Aerial view of property showing landscaping and boundaries" },
      { src: "/photos/Photo_6553605_DJI_5_jpg_7026637_0_202633010134_photo_original.jpg.jpg", alt: "Aerial view of home and surrounding property" },
      { src: "/photos/6I1A0391.jpg", alt: "Custom home exterior with landscaping" },
      { src: "/photos/2N4A5550.jpg", alt: "Home exterior with front yard and curb appeal" },
    ],
    faqs: [
      {
        question: "How do I choose a fence height?",
        answer:
          "It depends on privacy goals, local codes, and HOA rules. We'll recommend compliant options during your quote.",
      },
      {
        question: "Wood or vinyl?",
        answer: "Wood offers classic warmth; vinyl is lower maintenance. We'll help you pick based on exposure and style.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Most residential projects take a few days once materials arrive. Timeline varies with length, terrain, and permits.",
      },
    ],
  } satisfies ServicePageContent,

  roofing: {
    metaDescription:
      "Roof replacement and repair in East Alabama. Manufacturer-aligned installs, ventilation, flashing, and clear written scope.",
    heroLabel: "Roof systems",
    heroTitle: "Roofing",
    heroDescription:
      "A roof isn't just shingles — it's ventilation, flashing, and underlayment working together. We install roof systems with an eye on manufacturer specs and long-term weather performance.",
    heroImage: "/photos/Photo_6553603_DJI_3_jpg_6088829_0_202633010052_photo_original.jpg.jpg",
    approachTitle: "How we approach roofing",
    leadParagraphs: [
      "Whether you're addressing storm damage or age-related wear, we document scope clearly before work begins—so you know what we're replacing, what we're repairing, and how ventilation and flashing tie into long-term performance.",
    ],
    sections: [
      {
        type: "focusGrid",
        heading: "What we prioritize on every roof",
        cards: [
          {
            title: "Assessment & documentation",
            body: "We evaluate decking, penetrations, and attic ventilation, with photos and written notes when you need them for insurance or records.",
          },
          {
            title: "Installation specs",
            body: "Proper underlayment, ice protection, and correct nailing — all installed per manufacturer specs so your roof stays under warranty.",
          },
          {
            title: "Ventilation & flashing cleanup",
            body: "Valleys, walls, and penetrations flashed with care; airflow paths reviewed. Magnet sweeps and debris control keep your yard as tidy as we found it.",
          },
          {
            title: "Options you can compare",
            body: "Written scope, shingle or metal tradeoffs for your pitch and neighborhood, and photo documentation when insurance or resale needs a clear record.",
          },
        ],
      },
      {
        type: "h3List",
        heading: "Common projects",
        items: [
          {
            lead: "Full replacement:",
            text: "Tear-off and re-roof with updated underlayment, edges, and penetrations detailed for your pitch and exposure.",
          },
          {
            lead: "Storm damage & leaks:",
            text: "Targeted repairs and documentation when wind or hail drives urgency.",
          },
          {
            lead: "Metal vs. shingle:",
            text: "We compare longevity, noise, slope limits, and budget on your specific home—no generic default.",
          },
          {
            lead: "Flat & low-slope:",
            text: "Membranes and drainage details for porches, additions, or shallow-pitch planes that asphalt isn't meant to carry alone.",
          },
        ],
      },
    ],
    snapshotLines: [
      { label: "Scope", value: "Metal, shingle, and flat roof systems" },
      { label: "Timeline", value: "Varies by scope—quoted per job" },
      { label: "Site prep", value: "Ground & landscape protection discussed up front" },
      { label: "Documentation", value: "Scope notes & photos when insurance asks" },
      { label: "Next step", value: "Free quote & site visit" },
    ],
    review: {
      quote: "They walked us through roofing options without pressure. Install week went smoothly and cleanup was spotless.",
      author: "Taylor K., Moody",
    },
    trustPills: [
      "Manufacturer-aligned install",
      "Written scope & estimates",
      "Flashing & ventilation focus",
      "Magnet sweep & debris control",
    ],
    galleryIntro:
      "Metal, shingle, and low-slope rooflines from recent work—see the portfolio for more angles and finishes.",
    galleryImages: [
      { src: "/photos/6I1A0391.jpg", alt: "Custom home with standing seam metal roof" },
      { src: "/photos/2N4A5550.jpg", alt: "Home exterior showing metal roofline and covered porch" },
      { src: "/photos/2N4A4525.jpg", alt: "Rear of home showing roofing and covered upper deck" },
      { src: "/photos/Photo_6553601_DJI_1_jpg_5105426_0_202633095958_photo_original.jpg.jpg", alt: "Aerial drone view showing completed rooflines" },
    ],
    faqs: [
      {
        question: "How do I know I need a new roof?",
        answer: "Curling shingles, granule loss, leaks, or age are common signals—we'll inspect and explain.",
      },
      {
        question: "Do you work with insurance?",
        answer: "We can support documentation; confirm preferred process with our team.",
      },
      {
        question: "What warranties apply?",
        answer: "Manufacturer material warranties plus workmanship terms—we'll spell them out in writing.",
      },
    ],
  } satisfies ServicePageContent,

  decks: {
    metaDescription:
      "Custom decks built for East Alabama homes—framing, composite or wood decking, railings, and water management at the ledger.",
    heroLabel: "Outdoor living",
    heroTitle: "Decks",
    heroDescription:
      "Your deck should feel like an extension of your home—safe, spacious, and built to handle weather. We design and build decks that match how you entertain, relax, and move around your yard.",
    heroImage: "/photos/2N4A4525.jpg",
    approachTitle: "How we approach decks",
    leadParagraphs: [
      "We pay attention to structure, fastening, flashing, and railings so your investment holds up for years.",
      "You get straight answers on options and pricing, and work from a licensed builder who stands behind the details—not a rushed subcontractor swap. We treat your deck like part of the home, not a weekend throw-together.",
    ],
    sections: [
      {
        type: "focusGrid",
        heading: "Where we focus",
        cards: [
          {
            title: "Structure & framing",
            body: "Proper footings, solid ledger connection, and support framing that won't settle or shift over time — not just “level enough.”",
          },
          {
            title: "Decking materials",
            body: "Wood, composite, and hybrid systems chosen for sun exposure, traffic, and how much maintenance you want over the years.",
          },
          {
            title: "Railings & transitions",
            body: "Posts, balusters, cable or glass, and stair runs that feel secure and look finished where the deck meets the house and yard.",
          },
          {
            title: "Water management at the house",
            body: "Ledger flashing, drip strategy, and gaps that shed rain—so the deck tie-in does not funnel moisture toward siding or the foundation.",
          },
        ],
      },
      {
        type: "h3List",
        heading: "What to expect",
        items: [
          { lead: "Design & planning:", text: "Layout, traffic flow, and integration with doors and stairs." },
          { lead: "Solid framing:", text: "Built to code and built to last — proper support that keeps your deck safe for years." },
          { lead: "Finishing details:", text: "Railings, stairs, and trim that look intentional—not afterthoughts." },
        ],
      },
      {
        type: "simpleList",
        heading: "Common projects we take on",
        items: [
          { text: "New custom decks and full tear-off replacements" },
          { text: "Multi-level, wraparound, and wide-span entertaining layouts" },
          { text: "Stairs, landings, and transitions to patio or yard grade" },
          { text: "Railing upgrades and integration with patio covers or screened spaces" },
        ],
      },
    ],
    snapshotLines: [
      { label: "Scope", value: "Custom deck design and construction" },
      { label: "Timeline", value: "Varies by scope—quoted per job" },
      { label: "Next step", value: "Free quote & site visit" },
      { label: "Typical investment", value: "Options at multiple price points—quoted in writing" },
      { label: "Service area", value: "St. Clair & East Jefferson County, AL" },
      { label: "Licensed", value: "Licensed & Insured — AL #25174" },
    ],
    review: {
      quote:
        "The deck feels like an outdoor room — we're out there half the year. They listened to how we entertain and built exactly for that.",
      author: "Chris & Mel R., Trussville",
    },
    trustPills: ["Written estimates", "Real project photos", "Licensed AL builder #25174", "Local crew"],
    galleryIntro:
      "A look at custom decks, porches, and outdoor living we've built across St. Clair and East Jefferson County.",
    galleryImages: [
      { src: "/photos/2N4A4525.jpg", alt: "Large covered deck with cable railing on rear of home" },
      { src: "/photos/2N4A5550.jpg", alt: "Front porch and deck with stained wood columns" },
      { src: "/photos/6I1A0391.jpg", alt: "Custom home exterior with front porch" },
      { src: "/photos/Photo_6553605_DJI_5_jpg_7026637_0_202633010134_photo_original.jpg.jpg", alt: "Aerial view of home and outdoor living spaces" },
    ],
    faqs: [
      {
        question: "Composite or wood?",
        answer: "Composite resists splinters and fading; wood offers natural beauty with more maintenance. We'll walk through options.",
      },
      {
        question: "Do I need a permit?",
        answer: "Often yes, depending on height and attachment. We'll clarify local requirements for your project.",
      },
      {
        question: "Can you replace an old deck?",
        answer: "Yes—many projects start with tear-off and upgraded framing or footings.",
      },
    ],
  } satisfies ServicePageContent,

  "sunrooms-pergolas": {
    metaDescription:
      "Temo sunrooms, screened porches, and pergolas in East Alabama—roof ties, glazing, and comfortable outdoor rooms.",
    heroLabel: "Structures",
    heroTitle: "Temo sunrooms & pergolas",
    heroDescription:
      "Sunrooms and pergolas extend your living space into the outdoors. We work with Temo and similar quality systems to deliver comfortable, beautiful additions.",
    heroImage: "/photos/6I1A0460.jpg",
    approachTitle: "How we approach Temo sunrooms and pergolas",
    leadParagraphs: [
      "We pair proven Temo sunroom systems with careful site work and finishing details, so you get consistent quality, proper weather sealing, and a space that feels like part of your home—not an afterthought. From the first measurement through trim and interior touch points, we keep the goal simple: a room you will actually use, not just admire from the driveway.",
      "Pergolas and shade structures get the same attention to structure, scale, and longevity. Whether you want a bright glass retreat, a screened dining area, or defined shade over a patio, we help you choose glazing, screening, and roof options that suit East Alabama sun, humidity, and storms—then coordinate installation so the transition from house to outdoor room feels seamless.",
    ],
    sections: [
      {
        type: "focusGrid",
        heading: "Where we focus",
        cards: [
          {
            title: "Foundation & roof ties",
            body: "We check your foundation, existing roof, and wall connections before we start — so everything ties in cleanly and stays water-tight.",
          },
          {
            title: "Glass & ventilation",
            body: "Glazing packages, operable windows, and airflow strategies so the space stays comfortable across seasons—not a greenhouse you avoid in July.",
          },
          {
            title: "Install coordination",
            body: "Sequencing with roofing, decking, and electrical trades so trims line up, penetrations are sealed, and the walkthrough matches what we promised.",
          },
          {
            title: "Comfort in real use",
            body: "Shading, screens, glazing, and interior touchpoints planned for how you will live in the space—not only how it looks on day one.",
          },
        ],
      },
      {
        type: "h3List",
        heading: "Common projects",
        items: [
          {
            lead: "Temo sunrooms:",
            text: "Three- and four-season glass additions sized for your lot, views, and how you plan to furnish the space.",
          },
          {
            lead: "Screened porches:",
            text: "Dining and living areas that keep bugs out while staying open to breeze and backyard sound.",
          },
          {
            lead: "Pergolas & shade structures:",
            text: "Defined outdoor “rooms” over patios, spas, or seating groups without full enclosure.",
          },
          {
            lead: "Deck & door tie-ins:",
            text: "Steps, landings, and thresholds that connect new space to existing doors and railings cleanly.",
          },
        ],
      },
    ],
    snapshotLines: [
      { label: "Scope", value: "Sunrooms, pergolas & screened porches" },
      { label: "Systems", value: "Temo & compatible quality lines" },
      { label: "Typical goals", value: "Light, comfort, entertaining" },
      { label: "Timeline", value: "Varies by scope—quoted per job" },
      { label: "Start", value: "Site assessment & measurements" },
      { label: "Next step", value: "Free quote & written scope" },
    ],
    review: {
      quote:
        "Our screened space is where we drink coffee and host family dinners now. They helped us pick finishes that won't fight the weather.",
      author: "Pat & Dana H., Jefferson County",
    },
    trustPills: [
      "Temo sunroom systems",
      "Screen & glass packages",
      "Roof & wall tie-ins",
      "Pergolas & shade",
    ],
    galleryIntro:
      "Sunrooms, screened spaces, and pergolas from recent work—places homeowners use for morning coffee, family meals, and relaxed outdoor living.",
    galleryImages: [
      { src: "/photos/6I1A0460.jpg", alt: "Screened porch with outdoor dining and stone tile floor" },
      { src: "/photos/2N4A4525.jpg", alt: "Covered porch and screened area on rear of home" },
      { src: "/photos/2N4A5550.jpg", alt: "Front porch with stained wood columns" },
      { src: "/photos/6I1A0559.jpg", alt: "Interior pendant light fixture detail" },
    ],
    faqs: [
      {
        question: "What is a three-season vs four-season room?",
        answer: "Insulation, glazing, and HVAC integration differ. We'll explain what fits your goals.",
      },
      {
        question: "Will a sunroom add value?",
        answer: "Quality sunrooms can improve usability and appeal; specifics depend on market and execution.",
      },
      {
        question: "How long is installation?",
        answer: "Depends on size, customization, and lead times. We'll provide a schedule with your proposal.",
      },
    ],
  } satisfies ServicePageContent,

  "patio-covers": {
    metaDescription:
      "Patio covers, carports, and cabanas in East Alabama—drainage, structural loads, and trim that matches your home.",
    heroLabel: "Covers & structures",
    heroTitle: "Patio covers, carports & cabanas",
    heroDescription:
      "Covered outdoor spaces let you use your patio, driveway, or pool area in more seasons. We build structures that complement your architecture and stand up to wind and rain.",
    heroImage: "/photos/2N4A5550.jpg",
    approachTitle: "How we approach patio covers, carports and cabanas",
    leadParagraphs: [
      "We build patio covers, carports, and cabanas that complement your architecture and stand up to wind and rain—with clear flashing, drainage, and attachment details so the structure behaves like part of the house, not a bolt-on afterthought.",
      "Every site is different: roof tie-ins, post locations, and finish colors all affect how the project looks and performs. We walk through options with you up front, call out what permits or HOA notes may apply, and keep the estimate aligned with the scope so you are not surprised halfway through the build.",
    ],
    sections: [
      {
        type: "focusGrid",
        heading: "Where we focus",
        cards: [
          {
            title: "Drainage & attachment",
            body: "Gutters, slope, and ledger or post bases planned so water moves away from the home and connections stay dry and secure.",
          },
          {
            title: "Structural loads",
            body: "Posts and beams sized to stand up to local wind and weather — built to last, not just built to look good.",
          },
          {
            title: "Integration with your home",
            body: "Roof lines, fascia, siding, and trim choices that read as intentional so the cover looks like it was always part of the design.",
          },
          {
            title: "Permits, HOA & documentation",
            body: "We handle setback and height rules upfront so your cover meets local codes — no surprises at inspection.",
          },
        ],
      },
      {
        type: "h3List",
        heading: "Common projects",
        items: [
          {
            lead: "Attached solid covers:",
            text: "Patio roofs tied into existing fascia or wall lines with matched pitch and materials.",
          },
          {
            lead: "Freestanding carports:",
            text: "Vehicle shade and weather protection when a garage add-on is not the right fit.",
          },
          {
            lead: "Poolside cabanas:",
            text: "Semi-enclosed lounge or changing areas that handle splash, sun, and traffic.",
          },
          {
            lead: "Lattice & hybrid systems:",
            text: "Mixed shade and open sky for grilling, seating, and seasonal comfort.",
          },
        ],
      },
    ],
    snapshotLines: [
      { label: "Scope", value: "Patio covers, carports & cabanas" },
      { label: "Typical drivers", value: "Shade, rain protection, curb appeal" },
      { label: "Materials", value: "Metal, wood, engineered systems—per plan" },
      { label: "Timeline", value: "Varies by scope—quoted per job" },
      { label: "Start", value: "Site visit & measurements" },
      { label: "Next step", value: "Free quote & written scope" },
    ],
    review: {
      quote:
        "Professional, on time, and the patio cover matches our brick and trim perfectly. No surprises on the invoice.",
      author: "Sam R., Odenville",
    },
    trustPills: [
      "Attached & freestanding",
      "Gutter & drainage planning",
      "Wind-smart connections",
      "Trim & color matching",
    ],
    galleryIntro:
      "Covers, porches, and outdoor structures we have built for homeowners who wanted shade, weather protection, and architecture that fits the existing home.",
    galleryImages: [
      { src: "/photos/2N4A5550.jpg", alt: "Covered front porch with stained wood columns and brick" },
      { src: "/photos/2N4A4525.jpg", alt: "Large covered deck on rear of home" },
      { src: "/photos/6I1A0460.jpg", alt: "Screened outdoor living area with dining" },
      { src: "/photos/Photo_6553601_DJI_1_jpg_5105426_0_202633095958_photo_original.jpg.jpg", alt: "Aerial view of homes and outdoor structures" },
    ],
    faqs: [
      {
        question: "Attached or freestanding?",
        answer: "Attached can tie into the home; freestanding offers flexibility. We'll recommend based on your layout.",
      },
      {
        question: "What about permits?",
        answer: "Many covers require permits. We'll outline what applies in your area.",
      },
      {
        question: "Can you match existing trim?",
        answer: "We aim to align with your home's materials and palette.",
      },
    ],
  } satisfies ServicePageContent,

  "siding-gutters": {
    metaDescription:
      "Siding replacement and seamless gutters in East Alabama—moisture checks, material options, and coordinated trim.",
    heroLabel: "Exterior envelope",
    heroTitle: "Siding & gutters",
    heroDescription:
      "Your siding and gutters are the first line of defense against water intrusion. We install systems that shed water correctly and refresh your home's appearance.",
    heroImage: "/photos/6I1A0471.jpg",
    approachTitle: "How we approach siding and gutters",
    leadParagraphs: [
      "Good siding keeps water out — proper flashing, water barriers, and downspout placement all affect how long the install lasts. We treat siding and gutters as one system, not two add-ons.",
    ],
    sections: [
      {
        type: "focusGrid",
        heading: "Where we focus",
        cards: [
          {
            title: "Moisture & sheathing",
            body: "We look for soft spots, failed flashings, and hidden moisture before new siding covers the problem—repairs called out in the scope, not after the fact.",
          },
          {
            title: "Material selection",
            body: "Fiber cement, vinyl, or other options matched to architecture, exposure, and how much maintenance you want—honest tradeoffs, not a single default.",
          },
          {
            title: "Gutters & drainage",
            body: "Sizing, slope, and downspout routing that reduce overflow, splash-back, and foundation staining—coordinated with roof edges and landscaping.",
          },
          {
            title: "Trim & transitions",
            body: "Corners, windows, doors, and rooflines flashed and trimmed so the envelope reads intentional from the curb and up close.",
          },
        ],
      },
      {
        type: "h3List",
        heading: "Common projects",
        items: [
          {
            lead: "Full siding replacement:",
            text: "We remove old siding, address any water damage, add proper water barriers, then install new cladding and trim for a clean, finished look.",
          },
          {
            lead: "Partial repair & re-side:",
            text: "Targeted rot repair, transitions tied into sound existing siding, color and texture matched where practical.",
          },
          {
            lead: "Seamless gutters & downspouts:",
            text: "Runs and outlets planned to move water away from foundations, walks, and basements.",
          },
          {
            lead: "Soffit, fascia & color coordination:",
            text: "Trim packages that line up with stone, brick, and rooflines so the refresh looks intentional.",
          },
        ],
      },
    ],
    snapshotLines: [
      { label: "Scope", value: "Fiber cement, vinyl, brick, and seamless gutters" },
      { label: "Timeline", value: "Varies by scope—quoted per job" },
      { label: "Prep", value: "Moisture & sheathing check before cover-up" },
      { label: "Detailing", value: "Flashings, corners & penetrations called out" },
      { label: "Next step", value: "Free quote & site visit" },
    ],
    review: {
      quote:
        "New siding and gutters transformed the curb appeal. They coordinated colors with our stone and didn't rush the details.",
      author: "Angela D., Springville area",
    },
    trustPills: [
      "Moisture check before cladding",
      "Material options explained",
      "Gutter sizing & routing",
      "Clean job sites",
    ],
    galleryIntro:
      "Siding, trim, and gutter runs from recent exteriors—pair with the full portfolio for more curb-appeal shots.",
    galleryImages: [
      { src: "/photos/6I1A0471.jpg", alt: "Exterior showing brick siding, gutters, and downspout" },
      { src: "/photos/2N4A5550.jpg", alt: "Home front with board and batten siding and brick" },
      { src: "/photos/6I1A0391.jpg", alt: "Full exterior with siding, gutters, and metal roof" },
      { src: "/photos/Photo_6553601_DJI_1_jpg_5105426_0_202633095958_photo_original.jpg.jpg", alt: "Aerial view of completed home exteriors" },
    ],
    faqs: [
      {
        question: "Do you replace rotten wood?",
        answer: "We address damaged sheathing or trim as needed so new siding isn't installed over problems.",
      },
      {
        question: "Seamless gutters?",
        answer: "Often recommended for fewer leaks; we'll discuss options.",
      },
      {
        question: "How long will siding last?",
        answer:
          "Depends on material and exposure—manufacturer warranties vary; we'll share realistic expectations.",
      },
    ],
  } satisfies ServicePageContent,

  "interior-accents": {
    metaDescription:
      "Beams, mantels, built-ins, and finish carpentry in East Alabama—not whole-home remodels; high-impact interior accents.",
    heroLabel: "Finishing touches",
    heroTitle: "Interior accents",
    heroDescription:
      "We're not a full interior remodeler—we focus on high-impact accent work: beams, fireplace mantels, and closet systems that elevate a room without gutting it.",
    heroImage: "/photos/2N4A4445.jpg",
    approachTitle: "How we approach interior accents",
    leadParagraphs: [
      "Perfect for homeowners who want craftsmanship-forward details paired with outdoor and exterior projects.",
      "We're careful with dust control and finish carpentry so accent work feels intentional, not patched in. You'll see the same attention to detail you expect from our exterior builds—tight joints, level lines, and materials chosen to age well.",
    ],
    sections: [
      {
        type: "focusGrid",
        heading: "Where we focus",
        cards: [
          {
            title: "Beams & ceiling detail",
            body: "Box beams, faux timbers, and ceiling accents laid out for sightlines and lighting—integrated so they read as part of the architecture.",
          },
          {
            title: "Mantels & surrounds",
            body: "Custom profiles, depths, and materials scaled to your fireplace and room, with clean returns and hearth transitions.",
          },
          {
            title: "Built-ins & storage",
            body: "Closets, mudrooms, bars, and shelving built for daily use—layout, adjustable shelving, and hardware that feels solid.",
          },
          {
            title: "Stain, paint & handoff",
            body: "Finish schedules coordinated with your timeline so trim, beams, and built-ins are protected and touch-up ready when we walk the job with you.",
          },
        ],
      },
      {
        type: "h3List",
        heading: "What to expect",
        items: [
          { lead: "Beams:", text: "Faux or structural aesthetics installed with clean joints and ceiling integration." },
          { lead: "Mantels:", text: "Custom profiles and materials sized to your fireplace and room scale." },
          { lead: "Closets:", text: "Layout, shelving, and hardware for daily usability." },
        ],
      },
      {
        type: "simpleList",
        heading: "Common projects we take on",
        items: [
          { text: "Great-room and kitchen ceiling beam packages" },
          { text: "Custom fireplace mantels and surround upgrades" },
          { text: "Walk-in closets, mudrooms, and pantry built-ins" },
          { text: "Accent shelving, bars, and niche trim details" },
        ],
      },
    ],
    snapshotLines: [
      { label: "Scope", value: "Beams, mantels, closets, built-ins" },
      { label: "Timeline", value: "Varies by scope—quoted per job" },
      { label: "Next step", value: "Free quote & site visit" },
      { label: "Typical investment", value: "Options at multiple price points—quoted in writing" },
      { label: "Service area", value: "St. Clair & East Jefferson County, AL" },
      { label: "Licensed", value: "Licensed & Insured — AL #25174" },
    ],
    review: {
      quote:
        "Beams and mantel in the great room look like they've always belonged. Finish carpentry was tighter than we expected.",
      author: "Robert W.",
    },
    trustPills: [
      "Detailed written scopes",
      "Interior & exterior portfolio",
      "Licensed builder #25174",
      "Finish carpentry in-house",
    ],
    galleryIntro: "Beams, mantels, built-ins, and finishing details from recent interior accent projects.",
    galleryImages: [
      { src: "/photos/2N4A4445.jpg", alt: "Kitchen with vaulted ceiling and exposed wood beams" },
      { src: "/photos/2N4A4450.jpg", alt: "Open living area with ceiling beams and stone fireplace" },
      { src: "/photos/6I1A0555.jpg", alt: "Built-in bar with floating wood shelves" },
      { src: "/photos/6I1A0540.jpg", alt: "Custom mudroom with built-in cubbies and bench" },
    ],
    faqs: [
      {
        question: "Do you handle full kitchen or bath remodels?",
        answer: "We focus on accents and select scopes—not whole-room renovations.",
      },
      {
        question: "Can you match existing trim?",
        answer: "We'll sample and align profiles and species where possible.",
      },
      {
        question: "How long do mantel projects take?",
        answer: "Often a short window once materials are on site—timing depends on customization.",
      },
    ],
  } satisfies ServicePageContent,
} as const;

export type ServiceSlug = keyof typeof servicePages;

export function getServiceContent(slug: ServiceSlug): ServicePageContent {
  return servicePages[slug];
}
