"use client";

import { PageShell } from "@/components/layout/page-shell";
import { compareNavigation } from "@/content/compare";
import { compareSections } from "./registry";

export function CompareShell() {
  return <PageShell sections={compareSections} navigation={compareNavigation} brandSub="Strategic Comparison · GFT" summaryHref={null} />;
}
