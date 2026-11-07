import type { Metadata, Viewport } from "next";
import { RootHtml } from "@/components/layout/root-html";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";

export const metadata: Metadata = rootMetadata("en");
export const viewport: Viewport = rootViewport;

export default function EnglishLayout({ children }: LayoutProps<"/">) {
  return <RootHtml locale="en">{children}</RootHtml>;
}
