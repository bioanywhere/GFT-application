import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { localePath, locales } from "@/content/locale";

const paths = [
  { path: "/", priority: 1 },
  { path: "/head-of-ai", priority: 0.9 },
  { path: "/compare", priority: 0.9 },
  { path: "/executive-summary", priority: 0.7 },
  { path: "/head-of-ai/executive-summary", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap(({ path, priority }) =>
    locales.map((l) => ({
      url: `${site.url}${localePath(path, l)}`,
      changeFrequency: "monthly" as const,
      priority: l === "en" ? priority : priority - 0.1,
      alternates: { languages: { en: `${site.url}${localePath(path, "en")}`, es: `${site.url}${localePath(path, "es")}` } },
    })),
  );
}
