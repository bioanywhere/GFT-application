import type { Metadata } from "next";
import { VenturesShell } from "@/components/sections/shell";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/ai-ventures", "en", pageMeta.en.ventures.title, pageMeta.en.ventures.description);

export default function Home() {
  return <VenturesShell locale="en" />;
}
