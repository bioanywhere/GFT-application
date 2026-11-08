import type { Metadata } from "next";
import { VenturesShell } from "@/components/sections/shell";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/ai-ventures", "es", pageMeta.es.ventures.title, pageMeta.es.ventures.description);

export default function HomeEs() {
  return <VenturesShell locale="es" />;
}
