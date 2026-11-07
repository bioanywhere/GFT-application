"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { compareImpact, compareRoles } from "@/content/compare";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";
import { RoleChip } from "./role-chip";

export function CompareImpactSection() {
  const [id, setId] = useState(compareImpact.industries[0].id);
  const reduce = useReducedMotion();
  const ind = compareImpact.industries.find((i) => i.id === id)!;
  return (
    <Section id="cmp-impact" tone="elevated">
      <Reveal><SectionHeading eyebrow={`04 · ${compareImpact.title}`} title="How Each Role Creates Value by Industry." intro={compareImpact.intro} /></Reveal>
      <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {compareImpact.industries.map((i) => (
          <button key={i.id} onClick={() => setId(i.id)} aria-pressed={i.id === id} className={cn("flex flex-col items-start rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)", i.id === id ? "border-foreground/40 bg-foreground text-background" : "border-border bg-background-elevated hover:border-border-strong")}>
            <Icon name={i.icon} className="size-5" />
            <span className="mt-3 text-sm font-semibold">{i.name}</span>
          </button>
        ))}
      </Reveal>
      <AnimatePresence mode="wait">
        <motion.div key={ind.id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: 0.35 }} className="mt-6 grid gap-4 md:grid-cols-2">
          {(["ai", "ventures"] as const).map((role) => {
            const r = compareRoles[role];
            const block = ind[role];
            return (
              <div key={role} className="relative overflow-hidden rounded-3xl card p-6 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${r.color}, ${r.color2})` }} aria-hidden />
                <RoleChip role={role} short={false} />
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{block.headline}</h3>
                <ul className="mt-4 grid gap-2">
                  {block.points.map((p) => <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-muted-strong"><span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: r.color }} /> {p}</li>)}
                </ul>
                <p className="mt-5 text-[11px] text-muted">{role === "ai" ? "Measured in adoption, efficiency, quality, and ROI." : "Measured in pipeline, products, partnerships, and revenue."}</p>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <p className="mt-6 text-xs text-muted">Illustrative applications for discussion. They do not describe existing GFT initiatives or confirmed demand.</p>
    </Section>
  );
}
