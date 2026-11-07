"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Filter, RotateCcw, Sparkles } from "lucide-react";
import type { CommercialModel, Industry, Opportunity, ValueDriver } from "@/content/types";
import { useContent } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { OpportunityDialog } from "./opportunity-dialog";

const accentText: Record<Industry["accent"], string> = {
  blue: "text-accent-blue",
  emerald: "text-accent-emerald",
  amber: "text-accent-amber",
  violet: "text-accent-violet",
  magenta: "text-accent-magenta",
};
const accentBg: Record<Industry["accent"], string> = {
  blue: "from-accent-blue/20",
  emerald: "from-accent-emerald/20",
  amber: "from-accent-amber/20",
  violet: "from-accent-violet/20",
  magenta: "from-accent-magenta/20",
};
const accentBadge: Record<Industry["accent"], "blue" | "emerald" | "amber" | "violet" | "magenta"> = {
  blue: "blue", emerald: "emerald", amber: "amber", violet: "violet", magenta: "magenta",
};

export function OpportunityExplorerSection() {
  const { commercialModels, explorer, industries, valueDrivers, ui } = useContent();
  const reduce = useReducedMotion();
  const [industryId, setIndustryId] = useState<string>("all");
  const [drivers, setDrivers] = useState<ValueDriver[]>([]);
  const [models, setModels] = useState<CommercialModel[]>([]);
  const [selected, setSelected] = useState<Opportunity | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const pool = industryId === "all" ? industries.flatMap((i) => i.opportunities) : industries.find((i) => i.id === industryId)?.opportunities ?? [];
    return pool.filter(
      (o) =>
        (drivers.length === 0 || drivers.some((d) => o.valueDrivers.includes(d))) &&
        (models.length === 0 || models.some((m) => o.commercialModels.includes(m))),
    );
  }, [industryId, drivers, models, industries]);

  const toggle = <T,>(list: T[], item: T, set: (v: T[]) => void) =>
    set(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);

  const activeIndustry = industries.find((i) => i.id === industryId);
  const hasFilters = drivers.length > 0 || models.length > 0;

  return (
    <Section id="opportunities" tone="elevated">
      <Reveal>
        <SectionHeading eyebrow={ui.explorer.eyebrow} title={explorer.headline} intro={explorer.intro} />
      </Reveal>

      {/* Industry selector */}
      <Reveal delay={0.1} className="mt-10">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          <button
            onClick={() => setIndustryId("all")}
            className={cn(
              "flex flex-col items-start rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)",
              industryId === "all" ? "border-foreground/40 bg-foreground text-background" : "border-border bg-background-elevated hover:border-border-strong",
            )}
            aria-pressed={industryId === "all"}
          >
            <Sparkles className="size-5" />
            <span className="mt-3 text-sm font-semibold">{ui.explorer.allIndustries}</span>
            <span className={cn("mt-0.5 text-xs", industryId === "all" ? "text-background/70" : "text-muted")}>{industries.reduce((n, i) => n + i.opportunities.length, 0)} {ui.explorer.opportunities}</span>
          </button>
          {industries.map((ind) => {
            const active = industryId === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setIndustryId(ind.id)}
                aria-pressed={active}
                className={cn(
                  "relative flex flex-col items-start overflow-hidden rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-(--ring)",
                  active ? "border-foreground/30 bg-gradient-to-br to-transparent " + accentBg[ind.accent] : "border-border bg-background-elevated hover:border-border-strong",
                )}
              >
                <Icon name={ind.icon} className={cn("size-5", accentText[ind.accent])} />
                <span className="mt-3 text-sm font-semibold leading-tight">{ind.short}</span>
                <span className="mt-0.5 text-xs text-muted">{ind.opportunities.length} {ui.explorer.opportunities}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Industry summary + commercial value */}
      <AnimatePresence mode="wait">
        <motion.div
          key={industryId}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 grid gap-4 rounded-3xl card p-6 lg:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <p className="eyebrow">{activeIndustry ? activeIndustry.name : ui.explorer.crossIndustry}</p>
            <p className="mt-2 text-base leading-relaxed text-muted-strong">
              {activeIndustry ? activeIndustry.summary : ui.explorer.crossIndustryText}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{ui.explorer.commercialValue}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {(activeIndustry ? activeIndustry.commercialValue : ui.explorer.crossIndustryValue).map((v) => (
                <li key={v} className="rounded-full border border-border bg-background-elevated px-3 py-1 text-xs">{v}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setFiltersOpen((v) => !v)} aria-expanded={filtersOpen} aria-controls="explorer-filters">
            <Filter /> {ui.common.filters} {hasFilters && <span className="ml-1 rounded-full bg-foreground px-1.5 text-[10px] text-background">{drivers.length + models.length}</span>}
          </Button>
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={() => { setDrivers([]); setModels([]); }}>
              <RotateCcw /> {ui.common.reset}
            </Button>
          )}
        </div>
        <p className="text-sm text-muted" aria-live="polite">{results.length} {results.length === 1 ? ui.explorer.opportunity : ui.explorer.opportunities} {ui.explorer.shown}</p>
      </div>
      <AnimatePresence initial={false}>
        {filtersOpen && (
          <motion.div
            id="explorer-filters"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 grid gap-5 rounded-2xl border border-border p-5 md:grid-cols-2">
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{ui.explorer.businessValueFilter}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {valueDrivers.map((d) => (
                    <button key={d} onClick={() => toggle(drivers, d, setDrivers)} aria-pressed={drivers.includes(d)} className={cn("rounded-full border px-3 py-1.5 text-xs font-medium transition", drivers.includes(d) ? "border-accent-blue bg-accent-blue/15 text-accent-blue" : "border-border hover:border-border-strong")}>{ui.explorer.driverLabels[d]}</button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{ui.explorer.commercialModelFilter}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {commercialModels.map((m) => (
                    <button key={m} onClick={() => toggle(models, m, setModels)} aria-pressed={models.includes(m)} className={cn("rounded-full border px-3 py-1.5 text-xs font-medium transition", models.includes(m) ? "border-accent-violet bg-accent-violet/15 text-accent-violet" : "border-border hover:border-border-strong")}>{ui.explorer.modelLabels[m]}</button>
                  ))}
                </div>
              </fieldset>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards */}
      <motion.ul layout className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((o, i) => {
            const ind = industries.find((x) => x.id === o.industryId)!;
            return (
              <motion.li
                key={o.id}
                layout
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
              >
                <button
                  onClick={() => setSelected(o)}
                  className="group flex h-full w-full flex-col rounded-3xl card p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-(--shadow) focus-visible:outline-2 focus-visible:outline-(--ring)"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant={accentBadge[ind.accent]}><Icon name={ind.icon} className="size-3" /> {ind.short}</Badge>
                    <ArrowUpRight className="size-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{o.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{o.tagline}</p>
                  <div className="mt-auto pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">{ui.explorer.businessProblem}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-strong">{o.problem}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {o.commercialModels.slice(0, 2).map((m) => (
                        <span key={m} className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-muted-strong">{ui.explorer.modelLabels[m]}</span>
                      ))}
                      {o.valueDrivers.slice(0, 1).map((d) => (
                        <span key={d} className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted">{ui.explorer.driverLabels[d]}</span>
                      ))}
                    </div>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
      {results.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-border-strong p-10 text-center text-sm text-muted">
          {ui.explorer.noMatch}
        </div>
      )}

      <p className="mt-8 text-xs leading-relaxed text-muted">{explorer.hypothesisNote}</p>

      <OpportunityDialog opportunity={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
