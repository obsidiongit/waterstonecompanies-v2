import type { Metadata } from "next";
import { ServicePageShell } from "@/components/service-page-shell";
import { getServiceContent } from "@/content/service-pages";

const data = getServiceContent("interior-accents");

export const metadata: Metadata = {
  title: "Interior Accents | Waterstone Companies",
  description: data.metaDescription,
};

export default function InteriorAccentsPage() {
  return <ServicePageShell data={data} />;
}
