import Link from "next/link";
import { RootHtml } from "@/components/layout/root-html";

export default function NotFound() {
  return (
    <RootHtml locale="en">
      <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="eyebrow">404</p>
        <h1 className="display text-3xl">This page does not exist.</h1>
        <Link href="/" className="text-sm text-accent underline-offset-4 hover:underline">Back to the proposal</Link>
      </main>
    </RootHtml>
  );
}
