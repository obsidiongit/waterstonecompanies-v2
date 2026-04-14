import type { Metadata } from "next";
import { ServicePageShell } from "@/components/service-page-shell";
import { getServiceContent } from "@/content/service-pages";

const data = getServiceContent("decks");

export const metadata: Metadata = {
  title: "Decks | Waterstone Companies",
  description: data.metaDescription,
};

export default function DecksPage() {
  return <ServicePageShell data={data} />;
}
