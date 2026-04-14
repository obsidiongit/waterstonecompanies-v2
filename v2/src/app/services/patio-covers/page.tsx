import type { Metadata } from "next";
import { ServicePageShell } from "@/components/service-page-shell";
import { getServiceContent } from "@/content/service-pages";

const data = getServiceContent("patio-covers");

export const metadata: Metadata = {
  title: "Patio Covers, Carports & Cabanas | Waterstone Companies",
  description: data.metaDescription,
};

export default function PatioCoversPage() {
  return <ServicePageShell data={data} />;
}
