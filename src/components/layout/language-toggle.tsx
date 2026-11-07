"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, locales, type Locale } from "@/content/locale";
import { useContent } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const { locale, ui } = useContent();
  const labels: Record<Locale, string> = { en: "EN", es: "ES" };
  const titles: Record<Locale, string> = { en: ui.common.languageEnglish, es: ui.common.languageSpanish };
  return (
    <div role="group" aria-label={ui.common.language} className={cn("flex h-9 items-center rounded-full border border-border bg-foreground/5 p-0.5", className)}>
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localePath(pathname, l)}
            hrefLang={l}
            lang={l}
            title={titles[l]}
            aria-current={active ? "true" : undefined}
            className={cn(
              "flex h-8 items-center rounded-full px-2.5 font-mono text-[11px] font-semibold tracking-wide transition focus-visible:outline-2 focus-visible:outline-(--ring)",
              active ? "bg-foreground text-background" : "text-muted hover:text-foreground",
            )}
          >
            {labels[l]}
          </Link>
        );
      })}
    </div>
  );
}
