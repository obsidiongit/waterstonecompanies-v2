"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export type PortfolioGalleryItem = {
  name: string;
  categories: string[];
};

const FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fencing", label: "Fencing" },
  { id: "decks", label: "Decks" },
  { id: "sunrooms", label: "Sunrooms & pergolas" },
  { id: "patio-covers", label: "Patio covers" },
  { id: "siding", label: "Siding & gutters" },
  { id: "roofing", label: "Roofing" },
  { id: "interior", label: "Interior accents" },
];

type Props = {
  items: PortfolioGalleryItem[];
};

export function PortfolioGallery({ items }: Props) {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (active === "all") return items;
    return items.filter((it) => it.categories.includes(active));
  }, [active, items]);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close]);

  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-2 mb-8"
        role="group"
        aria-label="Filter portfolio by project type"
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              active === f.id
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border bg-background text-foreground-muted hover:border-foreground-muted hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Thumbs use unoptimized: large /photos archive + next/image Sharp per file spikes Node memory in dev. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
        {visible.map((it) => {
          const src = `/photos/${encodeURIComponent(it.name)}`;
          return (
            <button
              key={it.name}
              type="button"
              onClick={() => setLightbox(it.name)}
              className="relative aspect-square overflow-hidden rounded-md bg-background-tertiary text-left outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <Image
                src={src}
                alt={`Waterstone Companies project photo — ${it.name}`}
                fill
                className="object-cover transition-opacity hover:opacity-95"
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                loading="lazy"
                unoptimized
              />
            </button>
          );
        })}
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged project photo"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20"
          >
            Close
          </button>
          <div
            className="relative h-[min(90vh,900px)] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/photos/${encodeURIComponent(lightbox)}`}
              alt={`Waterstone Companies project photo — ${lightbox}`}
              fill
              className="object-contain"
              sizes="100vw"
              unoptimized
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
