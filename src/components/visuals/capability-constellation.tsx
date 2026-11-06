"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content";
import { cn } from "@/lib/utils";

export function CapabilityConstellation() {
  const reduce = useReducedMotion();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Highlight capability group">
        <button onClick={() => setActiveGroup(null)} aria-pressed={activeGroup === null} className={cn("rounded-full border px-3 py-1.5 text-xs font-medium transition", activeGroup === null ? "border-foreground bg-foreground text-background" : "border-border hover:border-border-strong")}>All</button>
        {profile.capabilityGroups.map((g) => (
          <button
            key={g.id}
            onClick={() => setActiveGroup(activeGroup === g.id ? null : g.id)}
            aria-pressed={activeGroup === g.id}
            className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition", activeGroup === g.id ? "border-foreground/40 bg-foreground/5" : "border-border hover:border-border-strong")}
          >
            <span className="size-2 rounded-full" style={{ background: g.color }} /> {g.label}
          </button>
        ))}
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {profile.capabilities.map((c, i) => {
          const g = profile.capabilityGroups.find((x) => x.id === c.group)!;
          const dim = activeGroup !== null && activeGroup !== c.group;
          return (
            <motion.li
              key={c.name}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              animate={{ opacity: dim ? 0.25 : 1, scale: dim ? 0.97 : 1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-3.5 py-2 text-sm font-medium"
              style={{ boxShadow: dim ? undefined : `inset 0 0 0 1px color-mix(in oklab, ${g.color} 40%, transparent)` }}
            >
              <span className="size-2 rounded-full" style={{ background: g.color }} aria-hidden />
              {c.name}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
