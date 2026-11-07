import type { MetadataRoute } from "next";
import { site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/executive-summary`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/head-of-ai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/head-of-ai/executive-summary`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/compare`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
