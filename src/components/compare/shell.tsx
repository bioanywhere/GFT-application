"use client";

import { PageShell } from "@/components/layout/page-shell";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locale";
import { compareSections } from "./registry";

export function CompareShell({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return <PageShell locale={locale} sections={compareSections} navigation={d.compare.navigation} brandSub={d.ui.cmp.brandSub} summaryHref={null} />;
}
