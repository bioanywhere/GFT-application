"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, ExternalLink, Code2 } from "lucide-react";
import { experienceSection, experiences } from "@/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/visuals/count-up";

export function ExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(experiences[0].id);
  const reduce = useReducedMotion();
  const minYear = 2007;
  const maxYear = 2026;

  return (
    <Section id="experience" tone="elevated">
      <Reveal>
        <SectionHeading eyebrow="06 · Proven Experience" title={experienceSection.headline} intro={experienceSection.intro} />
      </Reveal>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {experienceSection.highlights.map((h) => (
          <StaggerItem key={h.label} className="rounded-3xl card p-6">
            <p className="display text-4xl sm:text-5xl"><CountUp to={h.value} suffix={h.suffix} /></p>
            <p className="mt-2 text-sm text-muted">{h.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-4 flex flex-wrap gap-2">
        {experienceSection.domains.map((d) => (
          <Badge key={d}>{d}</Badge>
        ))}
      </Reveal>

      {/* Timeline bar */}
      <Reveal className="mt-14 hidden md:block">
        <div className="relative h-20 rounded-2xl border border-border bg-background-elevated/60 px-4">
          {[2007, 2011, 2015, 2019, 2023, 2026].map((y) => (
            <span key={y} className="absolute top-2 -translate-x-1/2 font-mono text-[10px] text-muted" style={{ left: `calc(${((y - minYear) / (maxYear - minYear)) * 100}% )` }}>{y}</span>
          ))}
          {experiences.map((e, i) => {
            const left = ((e.start - minYear) / (maxYear - minYear)) * 100;
            const width = ((e.end - e.start) / (maxYear - minYear)) * 100;
            return (
              <motion.button
                key={e.id}
                onClick={() => setOpenId(e.id)}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={cn("absolute h-6 origin-left rounded-full text-[10px] font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-(--ring)", openId === e.id ? "ring-2 ring-foreground/50" : "")}
                style={{ left: `${left}%`, width: `max(${width}%, 56px)`, top: `${30 + (i % 2) * 24}px`, background: `linear-gradient(90deg, var(--accent-blue), var(--accent-violet))`, opacity: 0.9 - i * 0.08 }}
                aria-label={`${e.organization}, ${e.period}`}
              >
                <span className="truncate px-2">{e.organization}</span>
              </motion.button>
            );
          })}
        </div>
      </Reveal>

      {/* Expandable portfolio */}
      <ul className="mt-8 grid gap-3">
        {experiences.map((e, i) => {
          const open = openId === e.id;
          return (
            <Reveal key={e.id} as="li" delay={i * 0.05} className="rounded-3xl card overflow-hidden">
              <button
                onClick={() => setOpenId(open ? null : e.id)}
                aria-expanded={open}
                aria-controls={`exp-${e.id}`}
                className="flex w-full flex-col gap-3 p-6 text-left sm:flex-row sm:items-center sm:justify-between focus-visible:outline-2 focus-visible:outline-(--ring)"
              >
                <div className="flex items-start gap-4">
                  <span className="hidden font-mono text-xs text-muted sm:block">{e.period}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{e.organization}</h3>
                    <p className="text-sm text-muted">{e.role}</p>
                    <p className="mt-1 font-mono text-xs text-muted sm:hidden">{e.period}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-muted-strong">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <ChevronDown className={cn("size-5 shrink-0 text-muted transition-transform", open && "rotate-180")} />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`exp-${e.id}`}
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 border-t border-border p-6 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <p className="text-[15px] leading-relaxed text-muted-strong">{e.summary}</p>
                        <ul className="mt-4 grid gap-2">
                          {e.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-muted-strong"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-blue" /> {h}</li>
                          ))}
                        </ul>
                        <p className="mt-4 rounded-xl border border-accent-violet/30 bg-accent-violet/5 p-3 text-sm italic text-muted-strong">{e.emphasis}</p>
                      </div>
                      <div className="space-y-4">
                        {e.technical && (
                          <div>
                            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><Code2 className="size-3.5" /> Technical detail</p>
                            <ul className="mt-2 flex flex-wrap gap-1.5">
                              {e.technical.map((t) => (
                                <li key={t} className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px]">{t}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {e.website && (
                          <a href={e.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue underline-offset-4 hover:underline">
                            <ExternalLink className="size-4" /> {e.website.replace("https://", "")}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </ul>
      <p className="mt-6 text-xs text-muted">{experienceSection.verifiedNote}</p>
    </Section>
  );
}
