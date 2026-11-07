"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Lock } from "lucide-react";
import { aiLifecycle } from "@/content/head-of-ai";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";

export function AiLifecycleSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const stages = aiLifecycle.stages;
  const stage = stages[active];

  return (
    <Section id="ai-lifecycle" tone="elevated">
      <Reveal><SectionHeading eyebrow="04 · Delivery Model" title={aiLifecycle.headline} intro={aiLifecycle.intro} /></Reveal>

      <Reveal delay={0.1} className="mt-12 rounded-3xl card p-6 sm:p-8">
        <div className="relative">
          <div className="absolute left-[34px] right-[34px] top-[34px] hidden h-px bg-border md:block" aria-hidden />
          <motion.div
            className="absolute left-[34px] top-[34px] hidden h-px bg-[linear-gradient(90deg,var(--accent-blue),var(--accent-cyan),var(--accent-emerald))] md:block"
            animate={{ width: `calc(${(active / (stages.length - 1)) * 100}% - ${(active / (stages.length - 1)) * 68}px)` }}
            transition={{ duration: reduce ? 0 : 0.5 }}
            aria-hidden
          />
          <div role="tablist" aria-label="Delivery stages" className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {stages.map((s, i) => {
              const isActive = i === active;
              const done = i < active;
              return (
                <button key={s.id} role="tab" aria-selected={isActive} onClick={() => setActive(i)} className={cn("group flex flex-col items-center rounded-2xl p-2 text-center transition focus-visible:outline-2 focus-visible:outline-(--ring)", isActive ? "text-foreground" : "text-muted hover:text-foreground")}>
                  <span className={cn("relative z-10 flex size-[68px] items-center justify-center rounded-2xl border transition-all duration-300", isActive ? "border-transparent bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-cyan))] text-white shadow-[0_16px_40px_-14px_var(--glow)] scale-105" : done ? "border-accent-cyan/40 bg-background-elevated text-accent-cyan" : "border-border bg-background-elevated group-hover:border-border-strong")}>
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em]">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <motion.div key={stage.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl bg-foreground/5 p-5">
            <p className="eyebrow">Stage 0{active + 1} · {stage.label}</p>
            <p className="mt-2 text-base leading-relaxed text-muted-strong">{stage.text}</p>
          </div>
          <div className="rounded-2xl border border-accent-emerald/30 bg-accent-emerald/5 p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-emerald"><Lock className="size-3.5" /> Gate to pass</p>
            <p className="mt-2 text-base font-semibold">{stage.gate}</p>
            <p className="mt-1 text-xs text-muted">Nothing advances without it.</p>
          </div>
        </motion.div>
      </Reveal>

      <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiLifecycle.principles.map((p, i) => (
          <StaggerItem key={p.title} className="rounded-2xl card p-5">
            <p className="font-mono text-[10px] text-accent-cyan">PRINCIPLE 0{i + 1}</p>
            <p className="mt-2 font-semibold">{p.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
