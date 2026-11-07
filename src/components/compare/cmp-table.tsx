"use client";

import { useState } from "react";
import { useContent } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { RoleChip } from "./role-chip";

type Focus = "both" | "ai" | "ventures";

export function CompareTableSection() {
  const { compare, ui } = useContent();
  const compareDimensions = compare.dimensions;
  const compareRoles = compare.roles;
  const [focus, setFocus] = useState<Focus>("both");
  const dim = (role: "ai" | "ventures") => focus !== "both" && focus !== role;
  return (
    <Section id="cmp-table" tone="elevated">
      <Reveal><SectionHeading eyebrow={ui.cmp.tableEyebrow} title={ui.cmp.tableTitle} intro={ui.cmp.tableIntro} /></Reveal>
      <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{ui.cmp.focus}</span>
        {(["both", "ai", "ventures"] as Focus[]).map((f) => (
          <button key={f} onClick={() => setFocus(f)} aria-pressed={focus === f} className={cn("rounded-full border px-3 py-1.5 text-xs font-medium transition", focus === f ? "border-foreground bg-foreground text-background" : "border-border hover:border-border-strong")}>
            {f === "both" ? ui.cmp.bothRoles : compareRoles[f].short}
          </button>
        ))}
      </Reveal>

      {/* Desktop table */}
      <Reveal delay={0.15} className="mt-6 hidden overflow-hidden rounded-3xl card md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="w-[22%] px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{ui.cmp.dimension}</th>
              <th scope="col" className={cn("w-[39%] px-5 py-4 text-left transition-opacity", dim("ai") && "opacity-30")}><RoleChip role="ai" short={false} /></th>
              <th scope="col" className={cn("w-[39%] px-5 py-4 text-left transition-opacity", dim("ventures") && "opacity-30")}><RoleChip role="ventures" short={false} /></th>
            </tr>
          </thead>
          <tbody>
            {compareDimensions.map((d) => (
              <tr key={d.dimension} className={cn("border-b border-border transition hover:bg-foreground/[0.03]", d.highlight && "bg-foreground/[0.04]")}>
                <th scope="row" className="px-5 py-4 text-left align-top font-semibold">{d.dimension}</th>
                <td className={cn("px-5 py-4 align-top leading-relaxed text-muted-strong transition-opacity", dim("ai") && "opacity-30", d.highlight && "font-semibold text-foreground")}>{d.ai}</td>
                <td className={cn("px-5 py-4 align-top leading-relaxed text-muted-strong transition-opacity", dim("ventures") && "opacity-30", d.highlight && "font-semibold text-foreground")}>{d.ventures}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      {/* Mobile cards */}
      <ul className="mt-6 grid gap-3 md:hidden">
        {compareDimensions.map((d) => (
          <li key={d.dimension} className="rounded-2xl card p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{d.dimension}</p>
            <div className={cn("mt-3 transition-opacity", dim("ai") && "opacity-30")}>
              <RoleChip role="ai" />
              <p className={cn("mt-1.5 text-sm text-muted-strong", d.highlight && "font-semibold text-foreground")}>{d.ai}</p>
            </div>
            <div className={cn("mt-3 transition-opacity", dim("ventures") && "opacity-30")}>
              <RoleChip role="ventures" />
              <p className={cn("mt-1.5 text-sm text-muted-strong", d.highlight && "font-semibold text-foreground")}>{d.ventures}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
