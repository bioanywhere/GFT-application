"use client";

import { PageShell } from "@/components/layout/page-shell";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locale";
import { sections } from "./registry";

export function VenturesShell({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return <PageShell locale={locale} sections={sections} navigation={d.navigation} brandSub={d.ui.nav.brandVentures} summaryHref="/ai-ventures/executive-summary" />;
}
