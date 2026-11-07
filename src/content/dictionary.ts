import { en, type Dictionary } from "./en";
import { es } from "./es";
import type { Locale } from "./locale";

export type { Dictionary };
export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function mailto(d: Dictionary, subject: string = d.site.emailSubject, body: string = d.site.emailBody) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${d.site.candidate.email}?${params.toString().replace(/\+/g, "%20")}`;
}
