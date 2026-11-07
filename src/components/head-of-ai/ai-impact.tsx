"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useContent } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";

export function AiImpactSection() {
  const { ai, ui } = useContent();
  const aiImpact = ai.impact;
  const [leverId, setLeverId] = useState(aiImpact.levers[0].id);
  const lever = aiImpact.levers.find((l) => l.id === leverId)!;
  return (
    <Section id="ai-impact" tone="elevated">
      <Reveal><SectionHeading eyebrow={ui.ai.impactEyebrow} title={aiImpact.headline} intro={aiImpact.intro} /></Reveal>

      <Reveal delay={0.1} className="mt-12 rounded-3xl card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">{ui.ai.scorecard}</p>
          <p className="text-xs text-muted">{ui.ai.reported}</p>
        </div>
        <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {aiImpact.kpis.map((k, i) => (
            <StaggerItem key={k.id} className="group rounded-2xl border border-border bg-background-elevated/70 p-4 transition hover:border-border-strong">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-foreground/5 text-accent-cyan transition group-hover:bg-accent-cyan/15"><Icon name={k.icon} className="size-4" /></span>
                <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-4 text-sm font-medium leading-snug">{k.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow mb-4">{ui.ai.valueLevers}</p>
          <ul className="grid gap-2" role="tablist" aria-label={ui.ai.valueLevers}>
            {aiImpact.levers.map((l) => {
              const isActive = l.id === leverId;
              return (
                <li key={l.id}>
                  <button role="tab" aria-selected={isActive} onClick={() => setLeverId(l.id)} className={cn("flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)", isActive ? "border-transparent bg-foreground text-background" : "border-border bg-background-elevated hover:border-border-strong")}>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{ background: isActive ? "rgba(255,255,255,0.12)" : `color-mix(in oklab, ${l.color} 15%, transparent)`, color: isActive ? "inherit" : l.color }}><Icon name={l.icon} className="size-4" /></span>
                    <span>
                      <span className="block text-sm font-semibold">{l.title}</span>
                      <span className={cn("block text-xs", isActive ? "text-background/70" : "text-muted")}>{l.text}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, ${lever.color} 15%, transparent)`, color: lever.color }}><Icon name={lever.icon} className="size-5" /></span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{lever.title}</h3>
              <p className="text-sm text-muted">{lever.text}</p>
            </div>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{ui.ai.leverUseCases}</p>
          <ul className="mt-3 grid gap-2">
            {lever.examples.map((e) => <li key={e} className="flex items-center gap-2 rounded-xl border border-border bg-background-elevated/70 p-3 text-sm"><span className="size-1.5 rounded-full" style={{ background: lever.color }} /> {e}</li>)}
          </ul>
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="eyebrow">{aiImpact.maturity.title}</p>
              <span className="rounded-full border border-accent-amber/50 bg-accent-amber/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-amber">{ui.common.hypothetical}</span>
            </div>
            <div className="mt-4 h-[220px] w-full" role="img" aria-label={ui.ai.maturityAria}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aiImpact.maturity.stages} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="quarter" tick={{ fill: "var(--muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "var(--muted)", fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                  <Tooltip cursor={{ fill: "var(--border)" }} contentStyle={{ background: "var(--card-solid)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12, color: "var(--foreground)" }} />
                  <Legend wrapperStyle={{ fontSize: 11, color: "var(--muted)" }} />
                  <Bar dataKey="systems" name={ui.ai.seriesSystems} fill="var(--accent-cyan)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="units" name={ui.ai.seriesUnits} fill="var(--accent-emerald)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted">{aiImpact.maturity.disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
