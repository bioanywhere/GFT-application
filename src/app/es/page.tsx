import type { Metadata } from "next";
import { HeadOfAiShell } from "@/components/head-of-ai/shell";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/", "es", pageMeta.es.ai.title, pageMeta.es.ai.description);

export default function HeadOfAiPageEs() {
  return <HeadOfAiShell locale="es" />;
}
