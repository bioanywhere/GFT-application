"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Gauge, Layers, ListChecks, ShieldCheck, Target, Wrench } from "lucide-react";
import { aiDomains, aiUseCasesSection, getAiDomain, type AiDomain, type AiUseCase } from "@/content/head-of-ai";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const accentText: Record<AiDomain["accent"], string> = { blue: "text-accent-blue", emerald: "text-accent-emerald", amber: "text-accent-amber", violet: "text-accent-violet", magenta: "text-accent-magenta" };
const accentBg: Record<AiDomain["accent"], string> = { blue: "from-accent-blue/20", emerald: "from-accent-emerald/20", amber: "from-accent-amber/20", violet: "from-accent-violet/20", magenta: "from-accent-magenta/20" };

export function AiUseCasesSection() {
  const reduce = useReducedMotion();
  const [domainId, setDomainId] = useState<string>("all");
  const [selected, setSelected] = useState<AiUseCase | null>(null);
  const results = useMemo(() => (domainId === "all" ? aiDomains.flatMap((d) => d.useCases) : getAiDomain(domainId)?.useCases ?? []), [domainId]);
  const activeDomain = getAiDomain(domainId);

  return (
    <Section id="ai-usecases">
      <Reveal><SectionHeading eyebrow="05 · AI Use-Case Portfolio" title={aiUseCasesSection.headline} intro={aiUseCasesSection.intro} /></Reveal>

      <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <button onClick={() => setDomainId("all")} aria-pressed={domainId === "all"} className={cn("flex flex-col items-start rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)", domainId === "all" ? "border-foreground/40 bg-foreground text-background" : "border-border bg-background-elevated hover:border-border-strong")}>
          <Layers className="size-5" />
          <span className="mt-3 text-sm font-semibold">All domains</span>
          <span className={cn("mt-0.5 text-xs", domainId === "all" ? "text-background/70" : "text-muted")}>{aiDomains.reduce((n, d) => n + d.useCases.length, 0)} use cases</span>
        </button>
        {aiDomains.map((d) => (
          <button key={d.id} onClick={() => setDomainId(d.id)} aria-pressed={domainId === d.id} className={cn("relative flex flex-col items-start overflow-hidden rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)", domainId === d.id ? "border-foreground/30 bg-gradient-to-br to-transparent " + accentBg[d.accent] : "border-border bg-background-elevated hover:border-border-strong")}>
            <Icon name={d.icon} className={cn("size-5", accentText[d.accent])} />
            <span className="mt-3 text-sm font-semibold leading-tight">{d.short}</span>
            <span className="mt-0.5 text-xs text-muted">{d.useCases.length} use cases</span>
          </button>
        ))}
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.p key={domainId} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduce ? undefined : { opacity: 0 }} className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-strong">
          {activeDomain ? activeDomain.summary : "The portfolio spans client-facing and internal use cases. First priorities would be those with existing demand, available data, and a clear path to production inside GFT's platforms and standards."}
        </motion.p>
      </AnimatePresence>

      <motion.ul layout className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {results.map((u, i) => {
            const d = getAiDomain(u.domainId)!;
            return (
              <motion.li key={u.id} layout initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}>
                <button onClick={() => setSelected(u)} className="group flex h-full w-full flex-col rounded-3xl card p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-(--shadow) focus-visible:outline-2 focus-visible:outline-(--ring)">
                  <div className="flex items-center justify-between">
                    <Badge variant={d.accent}><Icon name={d.icon} className="size-3" /> {d.short}</Badge>
                    <ArrowUpRight className="size-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight">{u.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{u.tagline}</p>
                  <div className="mt-auto pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Primary KPI</p>
                    <p className="mt-1 text-xs font-medium text-muted-strong">{u.kpis[0]}</p>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
      <p className="mt-8 text-xs leading-relaxed text-muted">{aiUseCasesSection.note}</p>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selected && (() => {
            const d = getAiDomain(selected.domainId)!;
            return (
              <div>
                <div className="relative overflow-hidden rounded-t-3xl border-b border-border p-6 sm:p-8">
                  <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={d.accent}><Icon name={d.icon} className="size-3" /> {d.name}</Badge>
                      <Badge variant="outline">Implementation candidate</Badge>
                    </div>
                    <DialogTitle className="mt-4 pr-10 text-2xl sm:text-3xl">{selected.name}</DialogTitle>
                    <DialogDescription className="mt-2 max-w-2xl text-base">{selected.tagline}</DialogDescription>
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
                  <Block n="01" icon={Target} title="Business objective">{selected.objective}</Block>
                  <Block n="02" icon={Wrench} title="AI approach">{selected.approach}</Block>
                  <div className="sm:col-span-2">
                    <Block n="03" icon={ListChecks} title="Implementation path">
                      <ol className="grid gap-1.5 sm:grid-cols-2">
                        {selected.implementation.map((s, i) => <li key={s} className="flex items-start gap-2 text-sm text-muted-strong"><span className="font-mono text-[10px] text-accent-cyan">{i + 1}</span> {s}</li>)}
                      </ol>
                    </Block>
                  </div>
                  <Block n="04" icon={Gauge} title="KPIs"><ul className="flex flex-wrap gap-1.5">{selected.kpis.map((k) => <li key={k} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs">{k}</li>)}</ul></Block>
                  <Block n="05" icon={Layers} title="Capabilities required"><ul className="flex flex-wrap gap-1.5">{selected.capabilities.map((k) => <li key={k} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs">{k}</li>)}</ul></Block>
                  <Block n="06" icon={ShieldCheck} title="Governance considerations">{selected.governance}</Block>
                  <Block n="07" icon={Target} title="Fit with GFT">{selected.gftFit}</Block>
                </div>
                <p className="border-t border-border px-6 py-4 text-[11px] leading-relaxed text-muted sm:px-8">Illustrative implementation candidate for prioritization with GFT leadership and clients. Not an existing GFT engagement or a guaranteed result.</p>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function Block({ n, icon: I, title, children }: { n: string; icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted"><span className="font-mono text-accent-cyan">{n}</span> <I className="size-3.5" /> {title}</p>
      <div className="mt-2 text-sm leading-relaxed text-muted-strong">{children}</div>
    </div>
  );
}
