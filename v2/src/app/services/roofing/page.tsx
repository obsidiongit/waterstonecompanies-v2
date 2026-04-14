import type { Metadata } from "next";
import { ServicePageShell } from "@/components/service-page-shell";
import { getServiceContent } from "@/content/service-pages";

const data = getServiceContent("roofing");

export const metadata: Metadata = {
  title: "Roofing | Waterstone Companies",
  description: data.metaDescription,
};

export default function RoofingPage() {
  return <ServicePageShell data={data} />;
}
