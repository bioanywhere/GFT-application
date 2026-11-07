import type { Metadata } from "next";
import { HeadOfAiShell } from "@/components/head-of-ai/shell";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Head of AI · Executive Proposal for GFT Technologies",
  description: `An execution-oriented proposal by ${site.candidate.name} for a regional Head of AI function at GFT Technologies: AI strategy, engineering, enterprise adoption, governance, and measurable impact.`,
  openGraph: { title: "Head of AI · Executive Proposal for GFT Technologies" },
};

export default function HeadOfAiPage() {
  return <HeadOfAiShell />;
}
