"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { compareFocus, compareRoles, emphasisLabels, type Emphasis } from "@/content/compare";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { EmphasisDots, RoleChip } from "./role-chip";

export function CompareFocusSection() {
  const [axisIdx, setAxisIdx] = useState(0);
  const reduce = useReducedMotion();
  const data = compareFocus.axes.map((a) => ({ axis: a.axis, "Head of AI": a.ai, "Head of AI Ventures": a.ventures }));
  const active = compareFocus.axes[axisIdx];
  return (
    <Section id="cmp-focus">
      <Reveal><SectionHeading eyebrow={`03 · ${compareFocus.title}`} title="Where Each Role Concentrates Its Attention." intro={compareFocus.intro} /></Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-3xl card p-6">
          <div className="h-[380px] w-full" role="img" aria-label="Radar chart comparing qualitative emphasis of Head of AI and Head of AI Ventures across technology, strategy, innovation, operations and business development">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data} outerRadius="72%" margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                <PolarGrid stroke="var(--border-strong)" />
                <PolarAngleAxis dataKey="axis" tick={{ fill: "var(--muted-strong)", fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 3]} tickCount={4} tick={{ fill: "var(--muted)", fontSize: 9 }} tickFormatter={(v: number) => emphasisLabels[v as Emphasis] ?? ""} axisLine={false} />
                <Tooltip cursor={false} contentStyle={{ background: "var(--card-solid)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12, color: "var(--foreground)" }} formatter={(v) => [emphasisLabels[v as Emphasis], "Emphasis"]} />
                <Legend wrapperStyle={{ fontSize: 11, color: "var(--muted)" }} />
                <Radar dataKey="Head of AI" stroke={compareRoles.ai.color} strokeWidth={2} fill={compareRoles.ai.color} fillOpacity={0.25} />
                <Radar dataKey="Head of AI Ventures" stroke={compareRoles.ventures.color2} strokeWidth={2} fill={compareRoles.ventures.color2} fillOpacity={0.2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-[11px] text-muted">Qualitative levels: Supporting · Strong · Primary. Not a numerical score.</p>
        </Reveal>
        <div className="flex flex-col gap-4">
          <Reveal className="rounded-3xl card p-6">
            <p className="eyebrow mb-3">Dimension detail</p>
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Dimensions">
              {compareFocus.axes.map((a, i) => (
                <button key={a.axis} role="tab" aria-selected={i === axisIdx} onClick={() => setAxisIdx(i)} className={cn("rounded-full border px-3 py-1.5 text-xs font-medium transition", i === axisIdx ? "border-foreground bg-foreground text-background" : "border-border hover:border-border-strong")}>{a.axis}</button>
              ))}
            </div>
            <motion.div key={active.axis} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 grid gap-3">
              <div className="flex items-center justify-between rounded-xl border border-border p-3">
                <RoleChip role="ai" />
                <span className="flex items-center gap-3 text-xs text-muted"><EmphasisDots level={active.ai} color={compareRoles.ai.color} label={`Head of AI: ${emphasisLabels[active.ai]}`} /> {emphasisLabels[active.ai]}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border p-3">
                <RoleChip role="ventures" />
                <span className="flex items-center gap-3 text-xs text-muted"><EmphasisDots level={active.ventures} color={compareRoles.ventures.color2} label={`Head of AI Ventures: ${emphasisLabels[active.ventures]}`} /> {emphasisLabels[active.ventures]}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-strong">{active.note}</p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl card p-6">
            <p className="eyebrow mb-4">Orientation spectrum</p>
            <ul className="grid gap-5">
              {compareFocus.spectrum.map((s) => (
                <li key={s.left}>
                  <div className="flex justify-between text-[11px] text-muted"><span>{s.left}</span><span>{s.right}</span></div>
                  <div className="relative mt-2 h-2 rounded-full bg-foreground/10">
                    <motion.span initial={reduce ? false : { left: "50%" }} whileInView={{ left: `${s.aiPos}%` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background" style={{ background: compareRoles.ai.color }} aria-label="Head of AI position" />
                    <motion.span initial={reduce ? false : { left: "50%" }} whileInView={{ left: `${s.venturesPos}%` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background" style={{ background: compareRoles.ventures.color2 }} aria-label="Head of AI Ventures position" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-[11px] text-muted">
              <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full" style={{ background: compareRoles.ai.color }} /> Head of AI</span>
              <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full" style={{ background: compareRoles.ventures.color2 }} /> Head of AI Ventures</span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
