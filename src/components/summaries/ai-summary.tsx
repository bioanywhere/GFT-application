import Link from "next/link";
import { ArrowLeft, FileDown, Mail } from "lucide-react";
import { getDictionary, mailto } from "@/content/dictionary";
import { localePath, type Locale } from "@/content/locale";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/interactive/print-button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ProposalSwitcher } from "@/components/layout/proposal-tabs";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { LocaleProvider } from "@/components/layout/locale-provider";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";

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

export function AiSummary({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const { site, whyGft, ai, ui } = d;
  const s = ui.summary;
  return (
    <LocaleProvider locale={locale}>
      <div className="theme-ai min-h-dvh bg-background print:bg-white">
        <header className="no-print sticky top-0 z-50 glass">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-5">
            <Button variant="ghost" size="sm" asChild><Link href={localePath("/head-of-ai", locale)}><ArrowLeft /> {s.backToProposal}</Link></Button>
            <ProposalSwitcher className="hidden md:flex" />
            <div className="flex items-center gap-2">
              <PrintButton />
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-5 py-10 print:max-w-none print:px-0 print:py-0">
          <article className="rounded-3xl card-solid p-8 sm:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none">
            <header className="border-b border-border pb-6 print:border-neutral-300">
              <p className="eyebrow print:text-neutral-600">{s.title} · {ai.hero.eyebrow}</p>
              <h1 className="display mt-3 text-3xl sm:text-4xl print:text-3xl">{ai.hero.headlineStart} {ai.hero.headlineAccent}</h1>
              <p className="mt-2 text-lg font-medium text-accent-cyan print:text-teal-800">{ui.ai.summaryRole}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted print:text-neutral-700">
                <p><span className="font-semibold text-foreground print:text-neutral-900">{site.candidate.name}</span> · {site.candidate.headline}</p>
                <p>{ui.common.preparedFor} {site.addressedTo.name}, {site.addressedTo.title}, {site.addressedTo.company}</p>
              </div>
            </header>
            <div className="mt-8 grid gap-8 md:grid-cols-2 print:grid-cols-2 print:gap-6">
              <Block number="01" title={s.blocks.proposal}><p>{ai.hero.description}</p><p className="mt-2 text-xs text-muted print:text-neutral-600">{ai.hero.roleFrame}</p></Block>
              <Block number="02" title={s.blocks.rationale}>
                <p>{ai.context.coreMessage}</p>
                <ul className="mt-2 grid gap-1">{ai.context.pillars.map((p) => <li key={p.id}><span className="font-semibold">{p.title}.</span> {p.text}</li>)}</ul>
                <p className="mt-2 text-xs text-muted print:text-neutral-600">{s.verifiedContext}: {whyGft.verifiedFacts.map((f) => f.title).join(", ")}.</p>
              </Block>
              <Block number="03" title={s.blocks.mandate}>
                <ul className="grid gap-1">{ai.mandate.areas.map((a) => <li key={a.id}><span className="font-semibold">{a.title}.</span> {a.summary}</li>)}</ul>
              </Block>
              <Block number="04" title={s.blocks.whereValue}>
                <ul className="grid gap-1.5">{ai.domains.map((dm) => <li key={dm.id}><span className="font-semibold">{dm.name}.</span> {dm.useCases.map((u) => u.name).join(", ")}.</li>)}</ul>
                <p className="mt-2 text-xs text-muted print:text-neutral-600">{s.candidatesNote}</p>
              </Block>
              <Block number="05" title={s.blocks.strengths}>
                <ul className="grid gap-1">{ai.profile.pillars.map((p) => <li key={p.id}><span className="font-semibold">{p.title}.</span> {p.text}</li>)}</ul>
              </Block>
              <Block number="06" title={s.blocks.first90}>
                <ol className="grid gap-1.5">{ai.roadmap.phases.map((p) => <li key={p.id}><span className="font-mono text-xs text-muted print:text-neutral-600">{p.range}</span> <span className="font-semibold">{p.title}.</span> {s.deliverable}: {p.deliverable}.</li>)}</ol>
                <p className="mt-2 text-xs text-muted print:text-neutral-600">{ai.roadmap.caveat}</p>
              </Block>
              <div className="md:col-span-2 print:col-span-2">
                <Block number="07" title={s.blocks.roleContact}>
                  <p><span className="font-semibold">{ai.operatingModel.role}.</span> {ai.operatingModel.mission}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                    <li className="flex items-center gap-2"><Mail className="size-3.5" /> <a href={mailto(d, ai.closing.emailSubject)} className="underline-offset-4 hover:underline">{site.candidate.email}</a></li>
                    <li className="flex items-center gap-2"><LinkedinIcon className="size-3.5" /> <a href={site.candidate.linkedin} className="underline-offset-4 hover:underline">linkedin.com/in/andresgarciamontoya</a></li>
                    <li className="flex items-center gap-2"><FileDown className="size-3.5" /> <a href={site.candidate.cvPath} download={site.candidate.cvFileName} className="underline-offset-4 hover:underline">{ui.common.downloadCvPdf}</a></li>
                  </ul>
                  <p className="mt-2 text-xs text-muted print:text-neutral-600">{site.candidate.availability} · {site.candidate.languages} · {site.candidate.location} · {site.candidate.openTo}</p>
                </Block>
              </div>
            </div>
            <footer className="mt-10 border-t border-border pt-4 text-xs text-muted print:border-neutral-300 print:text-neutral-600">
              <p className="italic">“{ai.closing.personal}”</p>
              <p className="mt-3">{site.disclaimer}</p>
            </footer>
          </article>
        </main>
      </div>
    </LocaleProvider>
  );
}
