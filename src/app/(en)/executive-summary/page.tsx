import type { Metadata } from "next";
import { AiSummary } from "@/components/summaries/ai-summary";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/executive-summary", "en", pageMeta.en.aiSummary.title, pageMeta.en.aiSummary.description);

export default function HeadOfAiSummaryPage() {
  return <AiSummary locale="en" />;
}
