"use client";

import { FileDown, Mail, Scale } from "lucide-react";
import Link from "next/link";
import { useContent } from "@/components/layout/locale-provider";
import { mailto } from "@/content/dictionary";
import { localePath } from "@/content/locale";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";

export function AiClosingSection() {
  const d = useContent();
  const { site, ui, ai, locale } = d;
  const aiClosing = ai.closing;
  return (
    <Section id="ai-contact" className="overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_60%)] blur-3xl" aria-hidden />
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-5">{ui.ai.closingEyebrow}</p>
        <h2 className="display text-balance text-4xl sm:text-5xl lg:text-6xl">
          {ui.ai.closingHeadlineStart} <span className="gradient-text">{ui.ai.closingHeadlineAccent}</span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted-strong sm:text-lg">“{aiClosing.supporting}”</p>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl rounded-3xl card p-7 sm:p-9">
        <p className="text-pretty text-lg leading-relaxed sm:text-xl">“{aiClosing.personal}”</p>
        <p className="mt-5 text-sm text-muted">— {site.candidate.name}</p>
      </Reveal>
      <Reveal delay={0.25} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        <Button variant="gradient" size="lg" asChild><a href={mailto(d, aiClosing.emailSubject)}><Mail /> {aiClosing.primaryCta}</a></Button>
        <Button variant="outline" size="lg" asChild><a href={site.candidate.cvPath} download={site.candidate.cvFileName}><FileDown /> {ui.common.downloadCv}</a></Button>
        <Button variant="ghost" size="lg" asChild><a href={site.candidate.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon className="size-4" /> {ui.common.connectLinkedin}</a></Button>
      </Reveal>
      <Reveal delay={0.3} className="mt-6 text-center">
        <Button variant="link" asChild><Link href={localePath("/compare", locale)}><Scale /> {ui.ai.compareLink}</Link></Button>
      </Reveal>
    </Section>
  );
}
