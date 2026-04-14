import type { Metadata } from "next";
import { ServicePageShell } from "@/components/service-page-shell";
import { getServiceContent } from "@/content/service-pages";

const data = getServiceContent("siding-gutters");

export const metadata: Metadata = {
  title: "Siding & Gutters | Waterstone Companies",
  description: data.metaDescription,
};

export default function SidingGuttersPage() {
  return <ServicePageShell data={data} />;
}
