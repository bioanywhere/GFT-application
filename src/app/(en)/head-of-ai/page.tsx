import type { Metadata } from "next";
import { HeadOfAiShell } from "@/components/head-of-ai/shell";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/head-of-ai", "en", pageMeta.en.ai.title, pageMeta.en.ai.description);

export default function HeadOfAiPage() {
  return <HeadOfAiShell locale="en" />;
}
