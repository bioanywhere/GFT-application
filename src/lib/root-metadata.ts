import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { pageMeta } from "@/content/meta";
import type { Locale } from "@/content/locale";

export function rootMetadata(locale: Locale): Metadata {
  const m = pageMeta[locale].ventures;
  return {
    metadataBase: new URL(site.url),
    title: { default: m.title, template: "%s" },
    description: m.description,
    keywords: ["AI Ventures", "Business Innovation", "GFT Technologies", "Chief AI Officer", "CAIO", "Chief AI Ventures Officer", "CAIVO", "Andrés García Montoya", "Agentic AI", "Executive proposal"],
    authors: [{ name: site.candidate.name, url: site.candidate.linkedin }],
    creator: site.candidate.name,
    openGraph: { type: "website", url: site.url, siteName: site.shortName, title: m.title, description: m.description, locale: locale === "es" ? "es_ES" : "en_US" },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
    robots: { index: true, follow: true },
  };
}

export const rootViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070b16" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
  width: "device-width",
  initialScale: 1,
};
