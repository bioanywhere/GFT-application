"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useContent } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";
import { PipelineScenario } from "@/components/visuals/pipeline-scenario";

export function BusinessImpactSection() {
  const { impact, industries, ui } = useContent();
  const allOpportunities = industries.flatMap((i) => i.opportunities);
  const [activeValue, setActiveValue] = useState(impact.valueFramework[0].id);
  const active = impact.valueFramework.find((v) => v.id === activeValue)!;
  const matching = allOpportunities.filter((o) => o.valueDrivers.includes(active.driver));

  return (
    <Section id="impact">
      <Reveal>
        <SectionHeading eyebrow={ui.impact.eyebrow} title={impact.headline} intro={impact.intro} />
      </Reveal>

      {/* Scorecard */}
      <Reveal delay={0.1} className="mt-12 rounded-3xl card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">{ui.impact.scorecard}</p>
          <p className="text-xs text-muted">{ui.impact.reported}</p>
        </div>
        <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {impact.kpis.map((k, i) => (
            <StaggerItem key={k.id} className="group rounded-2xl border border-border bg-background-elevated/70 p-4 transition hover:border-border-strong">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-foreground/5 text-accent-blue transition group-hover:bg-accent-blue/15"><Icon name={k.icon} className="size-4" /></span>
                <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-4 text-sm font-medium leading-snug">{k.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      {/* Value framework */}
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow mb-4">{ui.impact.framework}</p>
          <ul className="grid gap-2" role="tablist" aria-label={ui.impact.valueDrivers}>
            {impact.valueFramework.map((v) => {
              const isActive = v.id === activeValue;
              return (
                <li key={v.id}>
                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveValue(v.id)}
                    className={cn("flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)", isActive ? "border-transparent bg-foreground text-background" : "border-border bg-background-elevated hover:border-border-strong")}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{ background: isActive ? "rgba(255,255,255,0.12)" : `color-mix(in oklab, ${v.color} 15%, transparent)`, color: isActive ? "inherit" : v.color }}>
                      <Icon name={v.icon} className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{v.title}</span>
                      <span className={cn("block text-xs", isActive ? "text-background/70" : "text-muted")}>{v.text}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, ${active.color} 15%, transparent)`, color: active.color }}>
              <Icon name={active.icon} className="size-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{active.title}</h3>
              <p className="text-sm text-muted">{active.text}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{ui.impact.contributing(active.title)}</span>
              <span className="font-mono">{matching.length} / {allOpportunities.length}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-foreground/10">
              <motion.div
                className="h-full rounded-full"
                style={{ background: active.color }}
                initial={{ width: 0 }}
                animate={{ width: `${(matching.length / allOpportunities.length) * 100}%` }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
          <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
            {matching.map((o) => (
              <li key={o.id} className="flex items-start gap-2 text-sm text-muted-strong"><span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: active.color }} /> {o.name}</li>
            ))}
          </ul>
          <p className="mt-5 text-[11px] text-muted">{ui.impact.countsNote}</p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <PipelineScenario />
      </Reveal>
    </Section>
  );
}
