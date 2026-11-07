"use client";

import Link from "next/link";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { useContent } from "@/components/layout/locale-provider";
import { mailto } from "@/content/dictionary";
import { localePath } from "@/content/locale";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";

export function CompareClosingSection() {
  const d = useContent();
  const { site, ui, compare, locale } = d;
  const { closing: compareClosing, roles: compareRoles } = compare;
  return (
    <Section id="cmp-contact" className="overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_60%)] blur-3xl" aria-hidden />
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-5">{ui.cmp.closingEyebrow}</p>
        <h2 className="display text-balance text-4xl sm:text-5xl lg:text-6xl">{ui.cmp.closingHeadlineStart} <span className="gradient-text">{ui.cmp.closingHeadlineAccent}</span></h2>
        <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted-strong sm:text-lg">{compareClosing.text}</p>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
        {[compareRoles.ai, compareRoles.ventures].map((r) => (
          <Link key={r.id} href={localePath(r.href, locale)} className="group rounded-3xl card p-6 text-left transition hover:-translate-y-1 hover:border-border-strong">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: r.color }}>{r.orientation}</p>
            <p className="mt-2 text-lg font-semibold tracking-tight">{r.name}</p>
            <p className="mt-1 text-sm text-muted">{r.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">{ui.cmp.readProposal} <ArrowRight className="size-4 transition group-hover:translate-x-0.5" /></span>
          </Link>
        ))}
      </Reveal>
      <Reveal delay={0.25} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        <Button variant="gradient" size="lg" asChild><a href={mailto(d, compareClosing.emailSubject)}><Mail /> {ui.cmp.discussBoth}</a></Button>
        <Button variant="outline" size="lg" asChild><a href={site.candidate.cvPath} download={site.candidate.cvFileName}><FileDown /> {ui.common.downloadCv}</a></Button>
        <Button variant="ghost" size="lg" asChild><a href={site.candidate.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon className="size-4" /> {ui.common.connectLinkedin}</a></Button>
      </Reveal>
    </Section>
  );
}
