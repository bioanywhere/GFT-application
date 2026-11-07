"use client";

import { Clock, Globe2, Languages, MapPin } from "lucide-react";
import { useContent } from "@/components/layout/locale-provider";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { WorldMap } from "@/components/visuals/world-map";

const icons = [Clock, Languages, MapPin, Globe2];

export function AvailabilitySection() {
  const { availability, site, ui } = useContent();
  return (
    <Section id="availability" tone="elevated">
      <Reveal>
        <SectionHeading eyebrow={ui.availability.eyebrow} title={availability.headline} />
      </Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal className="rounded-3xl card p-7">
            <p className="text-2xl font-semibold tracking-tight">{site.candidate.name}</p>
            <p className="mt-1 text-sm text-muted">{site.candidate.headline}</p>
            <Stagger className="mt-6 grid gap-3">
              {availability.facts.map((f, i) => {
                const I = icons[i];
                return (
                  <StaggerItem key={f.label} className="flex items-start gap-3 rounded-2xl border border-border bg-background-elevated/70 p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-accent-blue"><I className="size-4" /></span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{f.label}</p>
                      <p className="mt-0.5 text-sm font-medium">{f.value}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="rounded-3xl card p-4 sm:p-6">
          <WorldMap />
          <p className="mt-3 text-[11px] text-muted">{availability.note}</p>
        </Reveal>
      </div>
    </Section>
  );
}
