"use client";

import { FileDown, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { closing, mailtoLink, site } from "@/content";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Button } from "@/components/ui/button";

export function ClosingSection() {
  return (
    <Section id="contact" className="overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_60%)] blur-3xl" aria-hidden />
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-5">11 · Executive Call to Action</p>
        <h2 className="display text-balance text-4xl sm:text-5xl lg:text-6xl">
          Let’s Turn AI Innovation Into <span className="gradient-text">GFT’s Next Growth Opportunities.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted-strong sm:text-lg">“{closing.supporting}”</p>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl rounded-3xl card p-7 sm:p-9">
        <p className="text-pretty text-lg leading-relaxed sm:text-xl">“{closing.personal}”</p>
        <p className="mt-5 text-sm text-muted">— {site.candidate.name}</p>
      </Reveal>
      <Reveal delay={0.25} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button variant="gradient" size="lg" asChild>
          <a href={mailtoLink()}><Mail /> {closing.primaryCta}</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href={site.candidate.cvPath} download={site.candidate.cvFileName}><FileDown /> {closing.secondaryCta}</a>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <a href={site.candidate.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon className="size-4" /> {closing.tertiaryCta}</a>
        </Button>
      </Reveal>
      <p className="mt-6 text-center text-xs text-muted">
        Email opens with the subject “{site.emailSubject}”.
      </p>
    </Section>
  );
}
