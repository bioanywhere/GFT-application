export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Strip a locale prefix and return the canonical (English) path. */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/es(?=\/|$)/, "") || "/";
}

/** Build a path for the given locale from a canonical (English) path. */
export function localePath(path: string, locale: Locale): string {
  const clean = stripLocale(path);
  if (locale === "en") return clean;
  return clean === "/" ? "/es" : `/es${clean}`;
}

export function localeFromPath(pathname: string): Locale {
  return /^\/es(\/|$)/.test(pathname) ? "es" : "en";
}
