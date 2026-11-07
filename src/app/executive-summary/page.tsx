import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileDown, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { closing, engine, experienceSection, fit, hero, industries, mailtoLink, profile, roadmap, site, whyGft } from "@/content";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/interactive/print-button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ProposalSwitcher } from "@/components/layout/proposal-tabs";

export const metadata: Metadata = {
  title: "Executive Summary",
  description: `One-page executive summary of the ${site.primaryPosition} proposal for GFT Technologies by ${site.candidate.name}.`,
};

function Block({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="break-inside-avoid">
      <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted print:text-neutral-600">
        <span className="font-mono text-accent-blue print:text-blue-700">{number}</span> {title}
      </h2>
      <div className="mt-3 text-[14px] leading-relaxed text-foreground print:text-neutral-900">{children}</div>
    </section>
  );
}

export default function ExecutiveSummaryPage() {
  return (
    <div className="min-h-dvh bg-background print:bg-white">
      <header className="no-print sticky top-0 z-50 glass">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          <Button variant="ghost" size="sm" asChild><Link href="/"><ArrowLeft /> Back to proposal</Link></Button>
          <ProposalSwitcher className="hidden md:flex" />
          <div className="flex items-center gap-2">
            <PrintButton />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 print:max-w-none print:px-0 print:py-0">
        <article className="rounded-3xl card-solid p-8 sm:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <header className="border-b border-border pb-6 print:border-neutral-300">
            <p className="eyebrow print:text-neutral-600">Executive Summary · {hero.eyebrow}</p>
            <h1 className="display mt-3 text-3xl sm:text-4xl print:text-3xl">Turning Artificial Intelligence Into New Business Opportunities.</h1>
            <p className="mt-2 text-lg font-medium text-accent-violet print:text-violet-800">{site.primaryPosition}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted print:text-neutral-700">
              <p><span className="font-semibold text-foreground print:text-neutral-900">{site.candidate.name}</span> · {site.candidate.headline}</p>
              <p>Prepared for {site.addressedTo.name}, {site.addressedTo.title}, {site.addressedTo.company}</p>
            </div>
          </header>

          <div className="mt-8 grid gap-8 md:grid-cols-2 print:grid-cols-2 print:gap-6">
            <Block number="01" title="The proposal">
              <p>{hero.description}</p>
              <p className="mt-2 italic text-muted print:text-neutral-700">“{site.tagline}”</p>
            </Block>
            <Block number="02" title="Strategic rationale">
              <p>{whyGft.coreMessage}</p>
              <ul className="mt-2 grid gap-1">
                {whyGft.pillars.map((p) => (
                  <li key={p.id}><span className="font-semibold">{p.title}.</span> {p.text}</li>
                ))}
              </ul>
            </Block>
            <Block number="03" title="Business opportunities">
              <p>A repeatable framework ({engine.stages.map((s) => s.label).join(" → ")}) applied to five territories:</p>
              <ul className="mt-2 grid gap-1.5">
                {industries.map((i) => (
                  <li key={i.id}><span className="font-semibold">{i.name}.</span> {i.opportunities.map((o) => o.name).join(", ")}.</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted print:text-neutral-600">All opportunities are hypotheses for validation, not existing GFT initiatives.</p>
            </Block>
            <Block number="04" title="Candidate's unique strengths">
              <p>{profile.summary[2]}</p>
              <ul className="mt-2 grid gap-1">
                {profile.advantages.map((a) => (
                  <li key={a.id}><span className="font-semibold">{a.title}.</span> {a.text}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted print:text-neutral-600">
                {experienceSection.highlights.map((h) => `${h.value}${h.suffix} ${h.label.toLowerCase()}`).join(" · ")}
              </p>
            </Block>
            <Block number="05" title="First 90 days">
              <ol className="grid gap-1.5">
                {roadmap.phases.map((p) => (
                  <li key={p.id}><span className="font-mono text-xs text-muted print:text-neutral-600">{p.range}</span> <span className="font-semibold">{p.title}.</span> Deliverable: {p.deliverable}.</li>
                ))}
              </ol>
              <p className="mt-2 text-xs text-muted print:text-neutral-600">Proposed priorities, subject to GFT’s strategy, resources, and approvals.</p>
            </Block>
            <Block number="06" title="Proposed role & contact">
              <p><span className="font-semibold">{fit.role}.</span> {fit.mission}</p>
              <ul className="mt-3 grid gap-1">
                <li className="flex items-center gap-2"><Mail className="size-3.5" /> <a href={mailtoLink()} className="underline-offset-4 hover:underline">{site.candidate.email}</a></li>
                <li className="flex items-center gap-2"><LinkedinIcon className="size-3.5" /> <a href={site.candidate.linkedin} className="underline-offset-4 hover:underline">linkedin.com/in/andresgarciamontoya</a></li>
                <li className="flex items-center gap-2"><FileDown className="size-3.5" /> <a href={site.candidate.cvPath} download={site.candidate.cvFileName} className="underline-offset-4 hover:underline">Download CV (PDF)</a></li>
              </ul>
              <p className="mt-2 text-xs text-muted print:text-neutral-600">{site.candidate.availability} · {site.candidate.languages} · {site.candidate.location} · {site.candidate.openTo}</p>
            </Block>
          </div>

          <footer className="mt-10 border-t border-border pt-4 text-xs text-muted print:border-neutral-300 print:text-neutral-600">
            <p className="italic">“{closing.personal}”</p>
            <p className="mt-3">{site.disclaimer}</p>
          </footer>
        </article>
      </main>
    </div>
  );
}
