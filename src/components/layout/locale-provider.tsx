"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { getDictionary, type Dictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locale";

const LocaleContext = createContext<Dictionary | null>(null);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return <LocaleContext.Provider value={dict}>{children}</LocaleContext.Provider>;
}

export function useContent(): Dictionary {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useContent must be used within LocaleProvider");
  return ctx;
}
