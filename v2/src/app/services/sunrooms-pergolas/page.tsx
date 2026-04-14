import type { Metadata } from "next";
import { ServicePageShell } from "@/components/service-page-shell";
import { getServiceContent } from "@/content/service-pages";

const data = getServiceContent("sunrooms-pergolas");

export const metadata: Metadata = {
  title: "Sunrooms & Pergolas | Waterstone Companies",
  description: data.metaDescription,
};

export default function SunroomsPergolasPage() {
  return <ServicePageShell data={data} />;
}
