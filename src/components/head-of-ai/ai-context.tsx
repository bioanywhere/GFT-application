"use client";

import { CheckCircle2, ExternalLink, GitBranch, ShieldCheck } from "lucide-react";
import { whyGft } from "@/content";
import { aiContext } from "@/content/head-of-ai";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

export function AiContextSection() {
  return (
    <Section id="ai-context" tone="elevated">
      <Reveal><SectionHeading eyebrow="02 · Why Now" title={aiContext.headline} intro={aiContext.intro} /></Reveal>

      <Reveal delay={0.1} className="mt-12 gradient-border rounded-3xl card p-6 sm:p-10">
        <p className="eyebrow mb-3">Core message</p>
        <p className="display text-balance text-xl sm:text-2xl lg:text-3xl !leading-snug !font-medium">“{aiContext.coreMessage}”</p>
      </Reveal>

      <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
        {aiContext.pillars.map((p, i) => (
          <StaggerItem key={p.id} className="group relative overflow-hidden rounded-3xl card p-7 transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-foreground/5 text-accent-cyan"><Icon name={p.icon} className="size-5" /></span>
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5"><Badge variant="emerald"><ShieldCheck className="size-3" /> {whyGft.verifiedLabel}</Badge></div>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {whyGft.verifiedFacts.map((f) => (
              <StaggerItem key={f.title} className="card rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-emerald" />
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div className="flex flex-col gap-3">
          <Reveal className="gradient-border rounded-2xl card p-5">
            <p className="flex items-center gap-2 text-sm font-semibold"><GitBranch className="size-4 text-accent-cyan" /> {aiContext.complement.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{aiContext.complement.text}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-dashed border-border-strong p-5">
            <p className="text-sm font-semibold">{aiContext.contrast.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{aiContext.contrast.text}</p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-10 rounded-2xl border border-border p-5 text-xs text-muted">
        <p className="mb-2 font-semibold uppercase tracking-[0.16em]">Sources · official GFT publications</p>
        <ul className="grid gap-1.5 sm:grid-cols-2">
          {whyGft.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1.5 underline-offset-4 hover:text-foreground hover:underline">
                <ExternalLink className="mt-0.5 size-3 shrink-0" /><span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
