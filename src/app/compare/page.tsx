import type { Metadata } from "next";
import { CompareShell } from "@/components/compare/shell";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Head of AI vs. Head of AI Ventures · Strategic Comparison",
  description: `An interactive executive comparison of two leadership proposals by ${site.candidate.name} for GFT Technologies: Head of AI and Head of AI Ventures & Business Innovation.`,
  openGraph: { title: "Head of AI vs. Head of AI Ventures · Strategic Comparison" },
};

export default function ComparePage() {
  return <CompareShell />;
}
