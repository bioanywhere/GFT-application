import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locale";
import "@/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export function RootHtml({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { ui } = getDictionary(locale);
  return (
    <html lang={locale} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
          {ui.common.skipToContent}
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
