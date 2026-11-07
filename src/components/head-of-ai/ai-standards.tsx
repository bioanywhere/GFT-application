"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { aiStandards } from "@/content/head-of-ai";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";

export function AiStandardsSection() {
  const reduce = useReducedMotion();
  return (
    <Section id="ai-standards">
      <Reveal><SectionHeading eyebrow="07 · Engineering Standards & Responsible AI" title={aiStandards.headline} intro={aiStandards.intro} /></Reveal>
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiStandards.pillars.map((p) => (
          <StaggerItem key={p.id} className="group rounded-3xl card p-6 transition hover:border-border-strong">
            <span className="flex size-11 items-center justify-center rounded-xl bg-foreground/5 text-accent-emerald transition group-hover:bg-accent-emerald/15"><Icon name={p.icon} className="size-5" /></span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            <ul className="mt-4 grid gap-1.5 border-t border-border pt-4">
              {p.practices.map((pr) => <li key={pr} className="flex items-center gap-2 text-xs text-muted-strong"><ChevronRight className="size-3 text-accent-cyan" /> {pr}</li>)}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-8 rounded-3xl card p-6 sm:p-8">
        <p className="eyebrow mb-5">AI governance flow · every solution, every release</p>
        <ol className="grid gap-2 md:grid-cols-6">
          {aiStandards.governanceFlow.map((g, i) => (
            <motion.li key={g} initial={reduce ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative rounded-2xl border border-border bg-background-elevated/70 p-4">
              <span className="font-mono text-[10px] text-accent-cyan">0{i + 1}</span>
              <p className="mt-1 text-sm font-medium leading-snug">{g}</p>
              {i < aiStandards.governanceFlow.length - 1 && <ChevronRight className="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-muted md:block" aria-hidden />}
            </motion.li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
