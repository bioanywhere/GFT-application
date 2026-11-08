import type { Metadata } from "next";
import { VenturesSummary } from "@/components/summaries/ventures-summary";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/ai-ventures/executive-summary", "en", pageMeta.en.venturesSummary.title, pageMeta.en.venturesSummary.description);

export default function ExecutiveSummaryPage() {
  return <VenturesSummary locale="en" />;
}
