"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fit } from "@/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";

export function StrategicFitSection() {
  const [activeId, setActiveId] = useState(fit.collaborators[0].id);
  const reduce = useReducedMotion();
  const active = fit.collaborators.find((c) => c.id === activeId)!;
  const n = fit.collaborators.length;

  return (
    <Section id="fit">
      <Reveal>
        <SectionHeading eyebrow="09 · Strategic Fit with GFT" title={fit.headline} intro={fit.intro} />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Collaboration orbit */}
        <Reveal className="rounded-3xl card p-6">
          <p className="eyebrow mb-2">How the role collaborates</p>
          <p className="mb-4 text-sm text-muted">Select a team to see how the function works with it.</p>
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
              <circle cx="200" cy="200" r="150" fill="none" stroke="var(--border-strong)" strokeDasharray="3 6" />
              {fit.collaborators.map((c, i) => {
                const a = (i / n) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + 150 * Math.cos(a);
                const y = 200 + 150 * Math.sin(a);
                return (
                  <motion.line
                    key={c.id}
                    x1="200" y1="200" x2={x} y2={y}
                    stroke={c.id === activeId ? "var(--accent-blue)" : "var(--border)"}
                    strokeWidth={c.id === activeId ? 2 : 1}
                    animate={{ opacity: c.id === activeId ? 1 : 0.6 }}
                  />
                );
              })}
            </svg>
            <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-violet))] p-3 text-center text-white shadow-[0_20px_60px_-20px_var(--glow)]">
              <span className="text-[10px] uppercase tracking-[0.14em] opacity-80">Head of</span>
              <span className="text-xs font-semibold leading-tight">AI Ventures & Business Innovation</span>
            </div>
            {fit.collaborators.map((c, i) => {
              const a = (i / n) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + 37.5 * Math.cos(a);
              const y = 50 + 37.5 * Math.sin(a);
              const isActive = c.id === activeId;
              return (
                <motion.button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  aria-pressed={isActive}
                  aria-label={c.name}
                  initial={reduce ? false : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 260, damping: 18 }}
                  className={cn(
                    "absolute flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-(--ring)",
                    isActive ? "border-transparent bg-foreground text-background scale-110 shadow-lg" : "border-border bg-background-elevated text-muted hover:border-border-strong hover:text-foreground",
                  )}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <Icon name={c.icon} className="size-5" />
                </motion.button>
              );
            })}
          </div>
          <div className="mt-4 rounded-2xl bg-foreground/5 p-4">
            <p className="text-sm font-semibold">{active.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{active.how}</p>
          </div>
        </Reveal>

        {/* Role card */}
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="gradient-border rounded-3xl card p-7">
            <p className="eyebrow">Proposed role</p>
            <h3 className="display mt-2 text-2xl sm:text-3xl">{fit.role}</h3>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Mission</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-strong">“{fit.mission}”</p>
          </div>
          <div className="rounded-3xl card p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Primary responsibilities</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {fit.responsibilities.map((r, i) => (
                <li key={r} className="flex items-center gap-2.5 text-sm"><span className="font-mono text-[10px] text-accent-blue">{String(i + 1).padStart(2, "0")}</span> {r}</li>
              ))}
            </ul>
          </div>
          <p className="rounded-2xl border border-dashed border-border-strong p-4 text-sm leading-relaxed text-muted">{fit.complementNote}</p>
        </Reveal>
      </div>
    </Section>
  );
}
