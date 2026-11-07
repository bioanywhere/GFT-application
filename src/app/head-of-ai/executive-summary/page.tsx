import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileDown, Mail } from "lucide-react";
import { mailtoLink, site, whyGft } from "@/content";
import { aiClosing, aiContext, aiDomains, aiHero, aiMandate, aiOperatingModel, aiProfile, aiRoadmap } from "@/content/head-of-ai";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/interactive/print-button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ProposalSwitcher } from "@/components/layout/proposal-tabs";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";

export const metadata: Metadata = {
  title: "Executive Summary · Head of AI",
  description: `One-page executive summary of the Head of AI proposal for GFT Technologies by ${site.candidate.name}.`,
};

function Block({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="break-inside-avoid">
      <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted print:text-neutral-600">
        <span className="font-mono text-accent-cyan print:text-teal-700">{number}</span> {title}
      </h2>
      <div className="mt-3 text-[14px] leading-relaxed text-foreground print:text-neutral-900">{children}</div>
    </section>
  );
}

export default function HeadOfAiSummaryPage() {
  return (
    <div className="theme-ai min-h-dvh bg-background print:bg-white">
      <header className="no-print sticky top-0 z-50 glass">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          <Button variant="ghost" size="sm" asChild><Link href="/head-of-ai"><ArrowLeft /> Back to proposal</Link></Button>
          <ProposalSwitcher className="hidden md:flex" />
          <div className="flex items-center gap-2"><PrintButton /><ThemeToggle /></div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-10 print:max-w-none print:px-0 print:py-0">
        <article className="rounded-3xl card-solid p-8 sm:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <header className="border-b border-border pb-6 print:border-neutral-300">
            <p className="eyebrow print:text-neutral-600">Executive Summary · {aiHero.eyebrow}</p>
            <h1 className="display mt-3 text-3xl sm:text-4xl print:text-3xl">{aiHero.headlineStart} {aiHero.headlineAccent}</h1>
            <p className="mt-2 text-lg font-medium text-accent-cyan print:text-teal-800">Head of AI (Regional)</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted print:text-neutral-700">
              <p><span className="font-semibold text-foreground print:text-neutral-900">{site.candidate.name}</span> · {site.candidate.headline}</p>
              <p>Prepared for {site.addressedTo.name}, {site.addressedTo.title}, {site.addressedTo.company}</p>
            </div>
          </header>
          <div className="mt-8 grid gap-8 md:grid-cols-2 print:grid-cols-2 print:gap-6">
            <Block number="01" title="The proposal"><p>{aiHero.description}</p><p className="mt-2 text-xs text-muted print:text-neutral-600">{aiHero.roleFrame}</p></Block>
            <Block number="02" title="Strategic rationale">
              <p>{aiContext.coreMessage}</p>
              <ul className="mt-2 grid gap-1">{aiContext.pillars.map((p) => <li key={p.id}><span className="font-semibold">{p.title}.</span> {p.text}</li>)}</ul>
              <p className="mt-2 text-xs text-muted print:text-neutral-600">Verified context: {whyGft.verifiedFacts.map((f) => f.title).join(", ")}.</p>
            </Block>
            <Block number="03" title="The mandate">
              <ul className="grid gap-1">{aiMandate.areas.map((a) => <li key={a.id}><span className="font-semibold">{a.title}.</span> {a.summary}</li>)}</ul>
            </Block>
            <Block number="04" title="Where execution creates value first">
              <ul className="grid gap-1.5">{aiDomains.map((d) => <li key={d.id}><span className="font-semibold">{d.name}.</span> {d.useCases.map((u) => u.name).join(", ")}.</li>)}</ul>
              <p className="mt-2 text-xs text-muted print:text-neutral-600">Illustrative candidates for prioritization, not existing GFT engagements.</p>
            </Block>
            <Block number="05" title="Candidate's unique strengths">
              <ul className="grid gap-1">{aiProfile.pillars.map((p) => <li key={p.id}><span className="font-semibold">{p.title}.</span> {p.text}</li>)}</ul>
            </Block>
            <Block number="06" title="First 90 days">
              <ol className="grid gap-1.5">{aiRoadmap.phases.map((p) => <li key={p.id}><span className="font-mono text-xs text-muted print:text-neutral-600">{p.range}</span> <span className="font-semibold">{p.title}.</span> Deliverable: {p.deliverable}.</li>)}</ol>
              <p className="mt-2 text-xs text-muted print:text-neutral-600">{aiRoadmap.caveat}</p>
            </Block>
            <div className="md:col-span-2 print:col-span-2">
              <Block number="07" title="Proposed role & contact">
                <p><span className="font-semibold">{aiOperatingModel.role}.</span> {aiOperatingModel.mission}</p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  <li className="flex items-center gap-2"><Mail className="size-3.5" /> <a href={mailtoLink(aiClosing.emailSubject)} className="underline-offset-4 hover:underline">{site.candidate.email}</a></li>
                  <li className="flex items-center gap-2"><LinkedinIcon className="size-3.5" /> <a href={site.candidate.linkedin} className="underline-offset-4 hover:underline">linkedin.com/in/andresgarciamontoya</a></li>
                  <li className="flex items-center gap-2"><FileDown className="size-3.5" /> <a href={site.candidate.cvPath} download={site.candidate.cvFileName} className="underline-offset-4 hover:underline">Download CV (PDF)</a></li>
                </ul>
                <p className="mt-2 text-xs text-muted print:text-neutral-600">{site.candidate.availability} · {site.candidate.languages} · {site.candidate.location} · {site.candidate.openTo}</p>
              </Block>
            </div>
          </div>
          <footer className="mt-10 border-t border-border pt-4 text-xs text-muted print:border-neutral-300 print:text-neutral-600">
            <p className="italic">“{aiClosing.personal}”</p>
            <p className="mt-3">{site.disclaimer}</p>
          </footer>
        </article>
      </main>
    </div>
  );
}
