"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, RefreshCw } from "lucide-react";
import { compareModel, compareRoles } from "@/content/compare";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { RoleChip } from "./role-chip";

export function CompareModelSection() {
  const reduce = useReducedMotion();
  const n = compareModel.loop.length;
  return (
    <Section id="cmp-model">
      <Reveal><SectionHeading eyebrow={`05 · ${compareModel.title}`} title="How the Two Roles Would Reinforce Each Other." intro={compareModel.intro} /></Reveal>

      <Reveal delay={0.1} className="mt-12 rounded-3xl card p-6 sm:p-8">
        <ol className="grid gap-3 md:grid-cols-6">
          {compareModel.loop.map((step, i) => {
            const color = step.owner === "ai" ? compareRoles.ai.color : step.owner === "ventures" ? compareRoles.ventures.color2 : "var(--foreground)";
            const label = step.owner === "ai" ? "Head of AI" : step.owner === "ventures" ? "Head of AI Ventures" : "Both";
            return (
              <motion.li key={step.id} initial={reduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl border border-border bg-background-elevated/70 p-4">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color }}>
                  {step.owner === "both" ? <RefreshCw className="size-3" /> : <span className="size-2 rounded-full" style={{ background: color }} />} {label}
                </span>
                <p className="mt-2 text-sm font-medium leading-snug">{step.label}</p>
                {i < n - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-muted md:block" aria-hidden />}
              </motion.li>
            );
          })}
        </ol>
        <div className="relative mt-3 hidden h-6 md:block" aria-hidden>
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="h-full w-full">
            <motion.path d="M 92 0 C 92 9, 8 9, 8 0" fill="none" stroke="var(--border-strong)" strokeWidth="0.3" strokeDasharray="1 1" initial={reduce ? undefined : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.6 }} />
          </svg>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] text-muted">market demand feeds the roadmap</span>
        </div>
      </Reveal>

      <Stagger className="mt-6 grid gap-4 md:grid-cols-3">
        {compareModel.handoffs.map((h) => (
          <StaggerItem key={h.from + h.to} className="rounded-2xl card p-5">
            <p className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-muted">{h.from} <ArrowRight className="size-3" /> {h.to}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-strong">{h.what}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Reveal className="rounded-3xl card p-6"><RoleChip role="ai" short={false} /><p className="mt-4 text-base leading-relaxed">{compareModel.message.ai}</p></Reveal>
        <Reveal delay={0.1} className="rounded-3xl card p-6"><RoleChip role="ventures" short={false} /><p className="mt-4 text-base leading-relaxed">{compareModel.message.ventures}</p></Reveal>
      </div>
      <Reveal className="mt-4 rounded-2xl border border-dashed border-border-strong p-4 text-sm leading-relaxed text-muted">{compareModel.message.caveat}</Reveal>
    </Section>
  );
}
