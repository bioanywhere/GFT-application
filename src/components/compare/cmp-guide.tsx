"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { comparePriorities, compareRoles } from "@/content/compare";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Button } from "@/components/ui/button";
import { RoleChip } from "./role-chip";

export function CompareGuideSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const aiCount = comparePriorities.options.filter((o) => selected.includes(o.id) && o.role === "ai").length;
  const vCount = comparePriorities.options.filter((o) => selected.includes(o.id) && o.role === "ventures").length;
  const total = aiCount + vCount;
  const aiShare = total ? (aiCount / total) * 100 : 50;
  const lean = total === 0 ? null : aiCount === vCount ? "both" : aiCount > vCount ? "ai" : "ventures";

  return (
    <Section id="cmp-guide">
      <Reveal><SectionHeading eyebrow="07 · Priority Guide" title={comparePriorities.title} intro={comparePriorities.intro} /></Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <ul className="grid gap-2 sm:grid-cols-2">
            {comparePriorities.options.map((o) => {
              const on = selected.includes(o.id);
              return (
                <li key={o.id}>
                  <button onClick={() => toggle(o.id)} aria-pressed={on} className={cn("flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-(--ring)", on ? "border-foreground/40 bg-foreground/5" : "border-border bg-background-elevated hover:border-border-strong")}>
                    <span className={cn("flex size-5 shrink-0 items-center justify-center rounded-md border", on ? "border-transparent bg-foreground text-background" : "border-border-strong")}>{on && <Check className="size-3" />}</span>
                    {o.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl card p-6 sm:p-8">
          <p className="eyebrow">Reading</p>
          <div className="mt-4 flex justify-between text-xs"><RoleChip role="ai" /><RoleChip role="ventures" /></div>
          <div className="relative mt-3 h-3 overflow-hidden rounded-full bg-foreground/10">
            <motion.div className="absolute inset-y-0 left-0 rounded-full" style={{ background: `linear-gradient(90deg, ${compareRoles.ai.color}, ${compareRoles.ai.color2})` }} animate={{ width: `${aiShare}%` }} transition={{ type: "spring", stiffness: 200, damping: 26 }} />
            <motion.div className="absolute inset-y-0 right-0 rounded-full" style={{ background: `linear-gradient(90deg, ${compareRoles.ventures.color}, ${compareRoles.ventures.color2})` }} animate={{ width: `${100 - aiShare}%` }} transition={{ type: "spring", stiffness: 200, damping: 26 }} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[11px] text-muted"><span>{aiCount} selected</span><span>{vCount} selected</span></div>
          <div className="mt-6 min-h-[120px] rounded-2xl bg-foreground/5 p-5">
            {lean === null && <p className="text-sm text-muted">Select one or more priorities to see which proposal is designed for them.</p>}
            {lean === "ai" && <p className="text-sm leading-relaxed"><span className="font-semibold">These priorities point to Head of AI.</span> They are about adoption, production reliability, governance, and efficiency: the execution mandate.</p>}
            {lean === "ventures" && <p className="text-sm leading-relaxed"><span className="font-semibold">These priorities point to Head of AI Ventures & Business Innovation.</span> They are about new revenue, markets, products, and partnerships: the growth mandate.</p>}
            {lean === "both" && <p className="text-sm leading-relaxed"><span className="font-semibold">An even split.</span> GFT’s priorities span execution and growth. Either role would be a strong starting point, and the candidate’s profile covers both.</p>}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant={lean === "ai" ? "gradient" : "outline"} size="sm" asChild><Link href="/head-of-ai">Head of AI proposal <ArrowRight /></Link></Button>
            <Button variant={lean === "ventures" ? "gradient" : "outline"} size="sm" asChild><Link href="/">AI Ventures proposal <ArrowRight /></Link></Button>
          </div>
          <p className="mt-4 text-[11px] text-muted">A reading aid, not a recommendation to create either or both positions.</p>
        </Reveal>
      </div>
    </Section>
  );
}
