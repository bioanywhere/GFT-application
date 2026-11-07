"use client";

import { PageShell } from "@/components/layout/page-shell";
import { aiNavigation } from "@/content/head-of-ai";
import { aiSections } from "./registry";

export function HeadOfAiShell() {
  return <PageShell sections={aiSections} navigation={aiNavigation} brandSub="Head of AI Proposal · GFT" summaryHref="/head-of-ai/executive-summary" className="theme-ai" />;
}
