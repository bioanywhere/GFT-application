import type { Metadata } from "next";
import { CompareShell } from "@/components/compare/shell";
import { pageMeta } from "@/content/meta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/compare", "en", pageMeta.en.compare.title, pageMeta.en.compare.description);

export default function ComparePage() {
  return <CompareShell locale="en" />;
}
