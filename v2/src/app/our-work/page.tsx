import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { readLegacyGalleryCategoryByFilename } from "@/lib/legacy-our-work-gallery";

export const metadata: Metadata = {
  title: "Our Work | Waterstone Companies",
  description:
    "Browse completed projects — decks, fences, sunrooms, roofing, siding, and more across St. Clair and East Jefferson County, Alabama.",
};

function listPhotoFiles(): string[] {
  const dir = path.join(process.cwd(), "public", "photos");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

export default function OurWorkPage() {
  const files = listPhotoFiles();
  const legacyCats = readLegacyGalleryCategoryByFilename();
  const galleryItems = files.map((name) => ({
    name,
    categories: (legacyCats.get(name) ?? "").trim().split(/\s+/).filter(Boolean),
  }));

  return (
    <>
      <section className="relative min-h-[42vh] flex items-center justify-center px-6 py-20 text-primary-foreground">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/photos/6I1A0547.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/20" aria-hidden />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-label uppercase tracking-widest text-accent-on-inverse/90 mb-3">Portfolio</p>
          <h1 className="font-serif text-h1 md:text-display">Our work</h1>
          <p className="mt-4 text-body-lg text-accent-on-inverse">
            Browse our full gallery — real projects across East Alabama. Every photo listed here lives under{" "}
            <code className="text-accent-on-inverse/95">public/photos</code> and is discovered at build time.
          </p>
          {files.length > 0 ? (
            <p className="mt-4 text-sm text-accent-on-inverse/85">{files.length} photos in the archive</p>
          ) : null}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {files.length === 0 ? (
            <p className="text-center text-foreground-muted py-16">
              Project photos will appear here once the <code className="text-foreground">public/photos</code> folder is
              available.
            </p>
          ) : (
            <>
              <p className="gallery-intro text-center text-foreground-muted max-w-2xl mx-auto mb-8 text-body-sm">
                <strong className="text-foreground">{files.length}</strong> images from our projects. Filter by project
                type or browse everything — tap any photo to view larger.
              </p>
              {/*
                TODO: Static `our-work/index.html` also uses an inline “load more” batching script (`showMoreBtn`).
                This page renders the full grid with lazy thumbnails for parity on content; incremental reveal can be
                added later if we need identical UX on very slow connections.
              */}
              <PortfolioGallery items={galleryItems} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
