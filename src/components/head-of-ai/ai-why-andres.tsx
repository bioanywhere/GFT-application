"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { site } from "@/content";
import { aiProfile } from "@/content/head-of-ai";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";

export function AiWhyAndresSection() {
  return (
    <Section id="ai-why-andres" tone="elevated">
      <Reveal><SectionHeading eyebrow="06 · Why Andrés" title={aiProfile.headline} intro={aiProfile.intro} /></Reveal>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiProfile.pillars.map((p, i) => (
          <StaggerItem key={p.id} className="rounded-3xl card p-6">
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-foreground/5 text-accent-cyan"><Icon name={p.icon} className="size-5" /></span>
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal><p className="eyebrow mb-4">Evidence from the record</p></Reveal>
          <ol className="relative grid gap-3 border-l border-border pl-6">
            {aiProfile.evidence.map((e, i) => (
              <Reveal key={e.org} as="li" delay={i * 0.05} className="relative rounded-2xl card p-5">
                <span className="absolute -left-[31px] top-6 size-2.5 rounded-full bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-emerald))] ring-4 ring-background" aria-hidden />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">{e.org}</h3>
                  <span className="text-xs text-muted">{e.role}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">{e.text}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">{e.tags.map((t) => <span key={t} className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-muted-strong">{t}</span>)}</div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <Reveal className="rounded-3xl card p-6">
            <p className="eyebrow">Capability profile</p>
            <div className="h-[300px] w-full" role="img" aria-label="Radar chart of capability emphasis across AI engineering, technology leadership, enterprise architecture, delivery and operations, business alignment and governance">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={aiProfile.radar} outerRadius="70%" margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                  <defs>
                    <linearGradient id="ai-radar-fill" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="var(--accent-emerald)" stopOpacity={0.4} />
                    </linearGradient>
                  </defs>
                  <PolarGrid stroke="var(--border-strong)" />
                  <PolarAngleAxis dataKey="axis" tick={{ fill: "var(--muted-strong)", fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                  <Tooltip cursor={false} contentStyle={{ background: "var(--card-solid)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12, color: "var(--foreground)" }} formatter={(v) => [`${v} / 100`, "Emphasis"]} />
                  <Radar dataKey="value" stroke="var(--accent-cyan)" strokeWidth={2} fill="url(#ai-radar-fill)" />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-[11px] text-muted">{aiProfile.radarNote}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl card p-6">
            <p className="eyebrow">{aiProfile.technical.title}</p>
            <div className="mt-4 grid gap-4">
              {aiProfile.technical.groups.map((g) => (
                <div key={g.label}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{g.label}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">{g.items.map((it) => <li key={it} className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px]">{it}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">Full professional history: <a href={site.candidate.cvPath} download={site.candidate.cvFileName} className="underline-offset-4 hover:text-foreground hover:underline">download CV</a>.</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
