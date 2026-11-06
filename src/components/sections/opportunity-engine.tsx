"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle2, Target, Package, Gem, Gauge } from "lucide-react";
import { engine } from "@/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";
import { VentureLifecycle } from "@/components/visuals/venture-lifecycle";

export function OpportunityEngineSection() {
  const [activeId, setActiveId] = useState(engine.stages[0].id);
  const reduce = useReducedMotion();
  const stage = engine.stages.find((s) => s.id === activeId) ?? engine.stages[0];
  const activeIndex = engine.stages.findIndex((s) => s.id === activeId);

  return (
    <Section id="engine">
      <Reveal>
        <SectionHeading eyebrow="03 · The AI Business Opportunity Engine" title={engine.headline} intro={engine.intro} />
      </Reveal>

      {/* Process rail */}
      <Reveal delay={0.1} className="mt-12">
        <div className="relative">
          <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-border lg:block" aria-hidden />
          <motion.div
            className="absolute left-0 top-[34px] hidden h-px bg-[linear-gradient(90deg,var(--accent-blue),var(--accent-violet),var(--accent-magenta))] lg:block"
            animate={{ width: `${(activeIndex / (engine.stages.length - 1)) * 100}%` }}
            transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />
          <div role="tablist" aria-label="Framework stages" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {engine.stages.map((s, i) => {
              const active = s.id === activeId;
              const done = i < activeIndex;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`stage-panel-${s.id}`}
                  id={`stage-tab-${s.id}`}
                  onClick={() => setActiveId(s.id)}
                  className={cn(
                    "group relative flex flex-col items-center rounded-2xl p-3 text-center transition focus-visible:outline-2 focus-visible:outline-(--ring)",
                    active ? "text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 flex size-[68px] items-center justify-center rounded-2xl border transition-all duration-300",
                      active
                        ? "border-transparent bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-violet))] text-white shadow-[0_16px_40px_-14px_var(--glow)] scale-105"
                        : done
                          ? "border-accent-blue/40 bg-background-elevated text-accent-blue"
                          : "border-border bg-background-elevated group-hover:border-border-strong",
                    )}
                  >
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-[0.14em]">{s.label}</span>
                  <span className="mt-1 font-mono text-[10px] text-muted">0{i + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Detail panel */}
      <div className="mt-10 min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            id={`stage-panel-${stage.id}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${stage.id}`}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 rounded-3xl card p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr]"
          >
            <div>
              <p className="eyebrow">Stage 0{activeIndex + 1}</p>
              <h3 className="display mt-2 text-3xl sm:text-4xl">{stage.label}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-strong">{stage.summary}</p>
              <div className="mt-6 rounded-2xl bg-foreground/5 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Target className="size-3.5" /> Strategic objective</p>
                <p className="mt-2 text-sm leading-relaxed">{stage.objective}</p>
              </div>
              <div className="mt-4 rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue"><Gem className="size-3.5" /> Business value</p>
                <p className="mt-2 text-sm leading-relaxed">{stage.businessValue}</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><ArrowRight className="size-3.5" /> Key activities</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {stage.activities.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm leading-relaxed text-muted-strong">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-emerald" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Package className="size-3.5" /> Deliverables</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stage.deliverables.map((d) => (
                    <li key={d} className="rounded-full border border-border bg-background-elevated px-3 py-1 text-xs font-medium">{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Gauge className="size-3.5" /> Relevant KPIs</p>
                <ul className="mt-3 grid gap-1.5">
                  {stage.kpis.map((k) => (
                    <li key={k} className="text-sm text-muted-strong">· {k}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Reveal className="mt-16">
        <p className="eyebrow mb-2 text-center">AI venture lifecycle</p>
        <p className="mx-auto mb-8 max-w-xl text-center text-sm text-muted">Every opportunity moves through the same gates. Only those that survive validation consume engineering capacity.</p>
        <VentureLifecycle />
      </Reveal>
    </Section>
  );
}
