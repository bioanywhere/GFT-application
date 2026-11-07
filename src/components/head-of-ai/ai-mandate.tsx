"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Gauge, Package, Sparkles } from "lucide-react";
import { aiMandate } from "@/content/head-of-ai";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";

export function AiMandateSection() {
  const [activeId, setActiveId] = useState(aiMandate.areas[0].id);
  const reduce = useReducedMotion();
  const area = aiMandate.areas.find((a) => a.id === activeId) ?? aiMandate.areas[0];

  return (
    <Section id="ai-mandate">
      <Reveal><SectionHeading eyebrow="03 · The Mandate" title={aiMandate.headline} intro={aiMandate.intro} /></Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Responsibility areas">
            {aiMandate.areas.map((a) => {
              const isActive = a.id === activeId;
              return (
                <li key={a.id}>
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`mandate-${a.id}`}
                    onClick={() => setActiveId(a.id)}
                    className={cn("flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)", isActive ? "border-transparent bg-foreground text-background shadow-lg" : "border-border bg-background-elevated hover:border-border-strong")}
                  >
                    <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", isActive ? "bg-white/15" : "bg-foreground/5 text-accent-cyan")}><Icon name={a.icon} className="size-4.5" /></span>
                    <span>
                      <span className={cn("block font-mono text-[10px]", isActive ? "text-background/70" : "text-muted")}>{a.number}</span>
                      <span className="block text-sm font-semibold leading-tight">{a.title}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <div className="min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={area.id}
              id={`mandate-${area.id}`}
              role="tabpanel"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl card p-6 sm:p-8"
            >
              <p className="eyebrow">Responsibility {area.number}</p>
              <h3 className="display mt-2 text-3xl sm:text-4xl">{area.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-strong">{area.summary}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">What the role is accountable for</p>
                <ul className="mt-3 grid gap-2">
                  {area.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm leading-relaxed text-muted-strong"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-emerald" /> {r}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Package className="size-3.5" /> Deliverables</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {area.deliverables.map((d) => <li key={d} className="rounded-full border border-border bg-background-elevated px-3 py-1 text-xs font-medium">{d}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Gauge className="size-3.5" /> KPIs</p>
                  <ul className="mt-3 grid gap-1.5">
                    {area.kpis.map((k) => <li key={k} className="text-sm text-muted-strong">· {k}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-accent-cyan/30 bg-accent-cyan/5 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan"><Sparkles className="size-3.5" /> Outcome</p>
                <p className="mt-2 text-sm leading-relaxed">{area.outcome}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
