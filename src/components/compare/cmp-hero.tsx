"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { site } from "@/content";
import { compareHero, compareRoles } from "@/content/compare";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export function CompareHeroSection() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const } });
  const roles = [compareRoles.ai, compareRoles.ventures];
  return (
    <section id="cmp-hero" data-section="cmp-hero" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-10 sm:pt-36">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -left-40 top-20 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-cyan)_22%,transparent),transparent_65%)] blur-3xl" aria-hidden />
      <div className="absolute -right-40 bottom-0 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-magenta)_22%,transparent),transparent_65%)] blur-3xl" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.p {...fade(0)} className="eyebrow mb-6 flex items-center gap-2"><Sparkles className="size-3.5 text-accent-blue" /> {compareHero.eyebrow}</motion.p>
        <motion.h1 {...fade(0.1)} className="display max-w-4xl text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
          Two Ways to Contribute to <span className="gradient-text">GFT’s AI Future.</span>
        </motion.h1>
        <motion.p {...fade(0.25)} className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted sm:text-lg">{compareHero.description}</motion.p>

        <motion.div {...fade(0.4)} className="mt-10 grid gap-4 md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.id} className="relative overflow-hidden rounded-3xl card p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${r.color}, ${r.color2})` }} aria-hidden />
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color2})` }}><Icon name={r.icon} className="size-5" /></span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">{r.orientation}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{r.name}</h2>
              <p className="mt-2 text-base font-medium" style={{ color: r.color }}>{r.tagline}</p>
              <Button variant="outline" size="sm" asChild className="mt-5"><Link href={r.href}>Open the full proposal <ArrowRight /></Link></Button>
            </div>
          ))}
        </motion.div>

        <motion.div {...fade(0.55)} className="mt-10 rounded-3xl card p-6 sm:p-8">
          <p className="eyebrow mb-5">The value chain both roles serve</p>
          <ol className="flex flex-col gap-2 md:flex-row md:items-center md:gap-0">
            {compareHero.chain.map((step, i) => {
              const owner = i < 2 ? compareRoles.ai : compareRoles.ventures;
              return (
                <li key={step} className="flex items-center gap-2 md:flex-1">
                  <motion.span initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.12 }} className="flex-1 rounded-2xl border border-border bg-background-elevated px-4 py-3 text-center text-sm font-semibold" style={{ boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${owner.color} 45%, transparent)` }}>
                    {step}
                    <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em]" style={{ color: owner.color }}>{owner.short}</span>
                  </motion.span>
                  {i < compareHero.chain.length - 1 && <ArrowRight className="hidden size-4 shrink-0 text-muted md:block" aria-hidden />}
                  {i < compareHero.chain.length - 1 && <ArrowDown className="mx-auto size-4 shrink-0 text-muted md:hidden" aria-hidden />}
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-xs text-muted">{compareHero.chainNote}</p>
        </motion.div>

        <motion.div {...fade(0.7)} className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="gradient" size="lg" onClick={() => scrollToSection("cmp-table")}>Compare Side by Side <ArrowDown /></Button>
          <Button variant="ghost" size="lg" onClick={() => scrollToSection("cmp-guide")}>Which fits GFT’s priorities?</Button>
          <span className="ml-auto text-xs text-muted">Prepared for {site.addressedTo.name}, {site.addressedTo.title}, {site.addressedTo.company}</span>
        </motion.div>
      </div>
    </section>
  );
}
