"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Package } from "lucide-react";
import { roadmap } from "@/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";

export function RoadmapSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const phase = roadmap.phases[active];

  return (
    <Section id="roadmap" tone="elevated">
      <Reveal>
        <SectionHeading eyebrow="08 · First 90 Days at GFT" title={roadmap.headline} intro={roadmap.intro} />
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div className="relative rounded-full border border-border bg-background-elevated p-1.5">
          <div className="relative grid grid-cols-3">
            <motion.span
              className="absolute inset-y-0 rounded-full bg-[linear-gradient(90deg,var(--accent-blue),var(--accent-violet))]"
              animate={{ left: `${(active * 100) / 3}%`, width: `${100 / 3}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              aria-hidden
            />
            {roadmap.phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={active === i}
                className={cn("relative z-10 flex flex-col items-center rounded-full px-2 py-3 text-center transition focus-visible:outline-2 focus-visible:outline-(--ring)", active === i ? "text-white" : "text-muted hover:text-foreground")}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">{p.range}</span>
                <span className="mt-0.5 text-sm font-semibold sm:text-base">{p.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-3 flex justify-between px-2 font-mono text-[10px] text-muted" aria-hidden>
          <span>Day 1</span><span>Day 30</span><span>Day 60</span><span>Day 90</span>
        </div>
      </Reveal>

      <div className="mt-8 min-h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 rounded-3xl card p-6 sm:p-8 lg:grid-cols-[1fr_1.3fr]"
          >
            <div>
              <p className="eyebrow">Phase 0{active + 1} · {phase.range}</p>
              <h3 className="display mt-2 text-3xl sm:text-4xl">{phase.title}</h3>
              <p className="mt-3 text-base text-muted-strong">{phase.focus}</p>
              <div className="mt-6 gradient-border rounded-2xl bg-background-elevated p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Package className="size-3.5" /> Deliverable</p>
                <p className="mt-2 text-lg font-semibold tracking-tight">{phase.deliverable}</p>
              </div>
            </div>
            <ol className="grid gap-2.5">
              {phase.actions.map((a, i) => (
                <motion.li
                  key={a}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background-elevated/70 p-3.5 text-sm text-muted-strong"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-emerald" /> {a}
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
      <Reveal className="mt-6 rounded-2xl border border-dashed border-border-strong p-4 text-xs leading-relaxed text-muted">{roadmap.caveat}</Reveal>
    </Section>
  );
}
