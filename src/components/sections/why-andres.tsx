"use client";

import { Plus, Equal, GraduationCap, Award } from "lucide-react";
import { profile, site } from "@/content";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Icon } from "@/components/ui/icon";
import { CapabilityRadar } from "@/components/visuals/capability-radar";
import { CapabilityConstellation } from "@/components/visuals/capability-constellation";

export function WhyAndresSection() {
  return (
    <Section id="why-andres">
      <Reveal>
        <SectionHeading eyebrow="05 · Why Andrés" title={profile.headline} />
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold sm:text-base">
        {profile.formula.map((f, i) => (
          <span key={f} className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-background-elevated px-4 py-2">{f}</span>
            {i < profile.formula.length - 1 ? <Plus className="size-4 text-muted" /> : <Equal className="size-4 text-muted" />}
          </span>
        ))}
        <span className="gradient-text rounded-full px-2 py-2">AI Business Innovation Leader</span>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <Reveal className="rounded-3xl card p-7 sm:p-9">
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-magenta))] text-xl font-bold text-white" aria-hidden>
              AG
            </div>
            <div>
              <p className="text-lg font-semibold">{site.candidate.name}</p>
              <p className="text-sm text-muted">{site.candidate.headline}</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-strong">
            {profile.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><GraduationCap className="size-3.5" /> Education</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {profile.education.map((e) => (
                  <li key={e.institution}><span className="font-medium">{e.institution}</span> <span className="text-muted">· {e.program}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Award className="size-3.5" /> Recognition</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {profile.recognitions.slice(0, 4).map((r) => (
                  <li key={r.text} className="text-muted-strong"><span className="font-mono text-xs text-muted">{r.year}</span> {r.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Stagger className="grid gap-4">
            {profile.advantages.map((a) => (
              <StaggerItem key={a.id} className="group rounded-3xl card p-6 transition hover:border-border-strong">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-accent-violet transition group-hover:bg-accent-violet/15">
                    <Icon name={a.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] text-muted">{a.number}</p>
                    <h3 className="mt-0.5 text-lg font-semibold tracking-tight">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.text}</p>
                    <p className="mt-2 text-xs text-accent-blue">{a.evidence}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-3xl card p-6">
          <p className="eyebrow">Capability profile</p>
          <CapabilityRadar />
          <p className="text-center text-[11px] text-muted">{profile.radarNote}</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl card p-6 sm:p-8">
          <p className="eyebrow">Leadership capabilities</p>
          <p className="mt-2 mb-5 text-sm text-muted">Fourteen capabilities across four dimensions. Select a dimension to see how they combine.</p>
          <CapabilityConstellation />
        </Reveal>
      </div>
    </Section>
  );
}
