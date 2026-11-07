"use client";

import { useContent } from "@/components/layout/locale-provider";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";
import { EmphasisDots, RoleChip } from "./role-chip";

export function CompareFitSection() {
  const { compare, ui } = useContent();
  const { fit: compareFit, roles: compareRoles, emphasisLabels } = compare;
  return (
    <Section id="cmp-fit" tone="elevated">
      <Reveal><SectionHeading eyebrow={ui.cmp.fitEyebrow} title={ui.cmp.fitTitle} intro={compareFit.intro} /></Reveal>
      <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
        {compareFit.strengths.map((s) => (
          <StaggerItem key={s.id} className="rounded-3xl card p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-accent-blue"><Icon name={s.icon} className="size-5" /></span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.evidence}</p>
                <div className="mt-4 grid gap-2 border-t border-border pt-4">
                  <div className="flex items-center justify-between"><RoleChip role="ai" /><span className="flex items-center gap-2 text-xs text-muted"><EmphasisDots level={s.ai} color={compareRoles.ai.color} label={`${compareRoles.ai.short}: ${emphasisLabels[s.ai]}`} /> {emphasisLabels[s.ai]}</span></div>
                  <div className="flex items-center justify-between"><RoleChip role="ventures" /><span className="flex items-center gap-2 text-xs text-muted"><EmphasisDots level={s.ventures} color={compareRoles.ventures.color2} label={`${compareRoles.ventures.short}: ${emphasisLabels[s.ventures]}`} /> {emphasisLabels[s.ventures]}</span></div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-8 gradient-border rounded-3xl card p-6 sm:p-8">
        <p className="display text-balance text-xl sm:text-2xl !leading-snug !font-medium">“{compareFit.closing}”</p>
      </Reveal>
    </Section>
  );
}
