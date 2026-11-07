import type { Metadata, Viewport } from "next";
import { RootHtml } from "@/components/layout/root-html";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";

export const metadata: Metadata = rootMetadata("es");
export const viewport: Viewport = rootViewport;

export default function SpanishLayout({ children }: LayoutProps<"/es">) {
  return <RootHtml locale="es">{children}</RootHtml>;
}
