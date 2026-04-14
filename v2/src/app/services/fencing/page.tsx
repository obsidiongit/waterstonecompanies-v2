import type { Metadata } from "next";
import { ServicePageShell } from "@/components/service-page-shell";
import { getServiceContent } from "@/content/service-pages";

const data = getServiceContent("fencing");

export const metadata: Metadata = {
  title: "Fencing | Waterstone Companies",
  description: data.metaDescription,
};

export default function FencingPage() {
  return <ServicePageShell data={data} />;
}
