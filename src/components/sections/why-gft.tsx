"use client";

import { CheckCircle2, ExternalLink, Lightbulb, ShieldCheck } from "lucide-react";
import { whyGft, site } from "@/content";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

export function WhyGftSection() {
  return (
    <Section id="why-gft" tone="elevated">
      <Reveal>
        <SectionHeading eyebrow="02 · Why GFT, Why Now" title={whyGft.headline} intro={whyGft.intro} />
      </Reveal>

      <Reveal delay={0.1} className="mt-12 gradient-border rounded-3xl card p-6 sm:p-10">
        <p className="eyebrow mb-3">Core message</p>
        <p className="display text-balance text-xl sm:text-2xl lg:text-3xl !leading-snug !font-medium">“{whyGft.coreMessage}”</p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <Badge variant="emerald"><ShieldCheck className="size-3" /> {whyGft.verifiedLabel}</Badge>
          </div>
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
        <div>
          <div className="mb-5 flex items-center gap-2">
            <Badge variant="violet"><Lightbulb className="size-3" /> {whyGft.proposedLabel}</Badge>
          </div>
          <Stagger className="grid gap-3">
            {whyGft.proposedOpportunities.map((p, i) => (
              <StaggerItem key={p} className="gradient-border card rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent-violet">0{i + 1}</span>
                  <p className="text-sm leading-relaxed text-muted-strong">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-3 rounded-2xl border border-dashed border-border-strong p-5">
            <p className="text-sm font-semibold">{whyGft.notDuplicating.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{whyGft.notDuplicating.text}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16">
        <Reveal><p className="eyebrow mb-6 text-center">Three strategic pillars</p></Reveal>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {whyGft.pillars.map((p, i) => (
            <StaggerItem key={p.id} className="group relative overflow-hidden rounded-3xl card p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-foreground/5 text-accent-blue">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal className="mt-14 rounded-2xl border border-border p-5 text-xs text-muted">
        <p className="mb-2 font-semibold uppercase tracking-[0.16em]">Sources · official GFT publications</p>
        <ul className="grid gap-1.5 sm:grid-cols-2">
          {whyGft.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1.5 underline-offset-4 hover:text-foreground hover:underline">
                <ExternalLink className="mt-0.5 size-3 shrink-0" />
                <span>{s.label} <span className="text-muted/70">— {s.note}</span></span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Verified facts are taken from GFT’s public communications as of the date of this proposal. Everything else on this site is an independent proposal by {site.candidate.name} and does not represent GFT’s internal plans.
        </p>
      </Reveal>
    </Section>
  );
}
