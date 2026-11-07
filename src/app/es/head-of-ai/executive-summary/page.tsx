import type { Metadata } from "next";
import { AiSummary } from "@/components/summaries/ai-summary";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/head-of-ai/executive-summary", "es", pageMeta.es.aiSummary.title, pageMeta.es.aiSummary.description);

export default function HeadOfAiSummaryPageEs() {
  return <AiSummary locale="es" />;
}
