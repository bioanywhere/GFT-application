"use client";

import { PageShell } from "@/components/layout/page-shell";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locale";
import { aiSections } from "./registry";

export function HeadOfAiShell({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return <PageShell locale={locale} sections={aiSections} navigation={d.ai.navigation} brandSub={d.ui.ai.brandSub} summaryHref="/executive-summary" className="theme-ai" />;
}
