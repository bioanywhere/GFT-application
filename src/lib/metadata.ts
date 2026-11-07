import type { Metadata } from "next";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/content/locale";

export function pageMetadata(path: string, locale: Locale, title: string, description: string): Metadata {
  const canonical = localePath(path, locale);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: localePath(path, "en"), es: localePath(path, "es"), "x-default": localePath(path, "en") },
    },
    openGraph: { title, description, url: `${site.url}${canonical}`, locale: locale === "es" ? "es_ES" : "en_US" },
  };
}
