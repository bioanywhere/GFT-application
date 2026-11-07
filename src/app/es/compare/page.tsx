import type { Metadata } from "next";
import { CompareShell } from "@/components/compare/shell";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/compare", "es", pageMeta.es.compare.title, pageMeta.es.compare.description);

export default function ComparePageEs() {
  return <CompareShell locale="es" />;
}
