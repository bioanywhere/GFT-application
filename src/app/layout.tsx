import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ProposalTabs } from "@/components/layout/proposal-tabs";
import { site } from "@/content";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.primaryPosition} · Executive Proposal for GFT Technologies`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: ["AI Ventures", "Business Innovation", "GFT Technologies", "Head of AI", "Andrés García Montoya", "Agentic AI", "Executive proposal"],
  authors: [{ name: site.candidate.name, url: site.candidate.linkedin }],
  creator: site.candidate.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.shortName,
    title: `${site.primaryPosition} · Executive Proposal for GFT Technologies`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.primaryPosition} · Executive Proposal for GFT Technologies`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070b16" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
          Skip to content
        </a>
        <ThemeProvider>
          <ProposalTabs />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
