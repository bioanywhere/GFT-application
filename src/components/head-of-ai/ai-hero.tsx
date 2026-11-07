"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Calendar, Globe2, Languages, Sparkles } from "lucide-react";
import { mailtoLink, site } from "@/content";
import { aiClosing, aiHero } from "@/content/head-of-ai";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AiStack } from "@/components/visuals/ai-stack";

export function AiHeroSection() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section id="ai-proposal" data-section="ai-proposal" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-10 sm:pt-36">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -left-40 top-20 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-3xl" aria-hidden />
      <div className="absolute -right-40 bottom-0 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-emerald)_22%,transparent),transparent_65%)] blur-3xl" aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div>
          <motion.p {...fade(0)} className="eyebrow mb-6 flex items-center gap-2">
            <Sparkles className="size-3.5 text-accent-cyan" /> {aiHero.eyebrow}
          </motion.p>
          <motion.h1 {...fade(0.1)} className="display text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            {aiHero.headlineStart} <span className="gradient-text">{aiHero.headlineAccent}</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-6 text-lg font-medium text-foreground sm:text-xl">{aiHero.supporting}</motion.p>
          <motion.p {...fade(0.3)} className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">{aiHero.description}</motion.p>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button variant="gradient" size="lg" onClick={() => scrollToSection("ai-context")}>Explore the Proposal <ArrowDown /></Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("ai-usecases")}>See AI Use Cases <ArrowRight /></Button>
          </motion.div>
          <motion.div {...fade(0.5)} className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <button onClick={() => scrollToSection("ai-why-andres")} className="text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline">Why Andrés</button>
            <button onClick={() => scrollToSection("ai-roadmap")} className="text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline">First 90 Days</button>
            <a href={mailtoLink(aiClosing.emailSubject)} className="text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline">Schedule a Conversation</a>
          </motion.div>

          <motion.div {...fade(0.6)} className="mt-10 card rounded-2xl p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-base font-semibold">{site.candidate.name}</p>
                <p className="mt-0.5 text-sm text-muted">{site.candidate.headline}</p>
                <p className="mt-0.5 text-xs text-muted">{site.candidate.experienceLine}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="live"><span className="size-1.5 rounded-full bg-accent-emerald" /> {site.candidate.availability}</Badge>
                <Badge><Languages className="size-3" /> {site.candidate.languages}</Badge>
                <Badge><Globe2 className="size-3" /> {site.candidate.location} · {site.candidate.openTo}</Badge>
              </div>
            </div>
            <blockquote className="mt-4 border-l-2 border-accent-cyan/60 pl-4 text-sm italic leading-relaxed text-muted-strong">“{aiHero.valueStatement}”</blockquote>
          </motion.div>
          <motion.p {...fade(0.7)} className="mt-4 text-xs leading-relaxed text-muted">{aiHero.roleFrame}</motion.p>
        </div>

        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <AiStack />
          <p className="mt-2 text-center text-xs text-muted">The AI operating stack this role would own and run.</p>
        </motion.div>
      </div>
      <motion.div {...fade(0.8)} className="mx-auto mt-12 flex w-full max-w-7xl items-center gap-2 px-5 text-xs text-muted sm:px-8 lg:px-12">
        <Calendar className="size-3.5 shrink-0" /> <span>Prepared for {site.addressedTo.name}, {site.addressedTo.title}, {site.addressedTo.company}</span>
      </motion.div>
    </section>
  );
}
