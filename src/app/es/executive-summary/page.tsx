import type { Metadata } from "next";
import { VenturesSummary } from "@/components/summaries/ventures-summary";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/executive-summary", "es", pageMeta.es.venturesSummary.title, pageMeta.es.venturesSummary.description);

export default function ExecutiveSummaryPageEs() {
  return <VenturesSummary locale="es" />;
}
