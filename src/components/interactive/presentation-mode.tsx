"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from "lucide-react";
import type { NavItem, SectionEntry } from "@/components/layout/types";
import { usePresentation } from "./presentation-context";
import { useContent } from "@/components/layout/locale-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PresentationMode({ sections, navigation }: { sections: readonly SectionEntry[]; navigation: readonly NavItem[] }) {
  const { active, index, close, next, prev, goTo, total } = usePresentation();
  const { ui } = useContent();
  const titleOf = (id: string) => navigation.find((n) => n.id === id)?.label ?? id;
  const reduce = useReducedMotion();
  const [dir, setDir] = useState<1 | -1>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const go = useCallback((dir: 1 | -1) => {
    setDir(dir);
    if (dir === 1) next(); else prev();
  }, [next, prev]);

  // keyboard
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(-1); }
      else if (e.key === "Home") { e.preventDefault(); setDir(-1); goTo(0); }
      else if (e.key === "End") { e.preventDefault(); setDir(1); goTo(total - 1); }
      else if (e.key === "Escape") { e.preventDefault(); close(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go, goTo, close, total]);

  // fullscreen lifecycle
  useEffect(() => {
    if (!active) return;
    const el = document.documentElement;
    el.requestFullscreen?.().catch(() => {});
    const onChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement) close();
    };
    document.addEventListener("fullscreenchange", onChange);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.body.style.overflow = "";
      if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    };
  }, [active, close]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  };

  if (!active) return null;
  const current = sections[index];
  const Slide = current.Component;

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-background" role="dialog" aria-modal="true" aria-label={ui.nav.presentationLabel}>
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <span className="truncate text-sm font-semibold">{titleOf(current.id)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggleFullscreen} aria-label={ui.nav.toggleFullscreen} className="hidden sm:inline-flex">
            {isFullscreen ? <Minimize2 /> : <Maximize2 />}
          </Button>
          <Button variant="outline" size="sm" onClick={close}><X /> {ui.common.exit}</Button>
        </div>
      </div>

      <div ref={scrollRef} className="relative flex-1 overflow-y-auto">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current.id}
            custom={dir}
            initial={reduce ? false : { opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full"
          >
            <Slide />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex h-16 shrink-0 items-center justify-between border-t border-border px-4 sm:px-6">
        <Button variant="outline" size="sm" onClick={() => go(-1)} disabled={index === 0} aria-label={ui.nav.previousSection}><ChevronLeft /> {ui.common.previous}</Button>
        <div className="hidden items-center gap-1.5 md:flex" aria-label={ui.nav.slides}>
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setDir(i > index ? 1 : -1); goTo(i); }}
              aria-label={`${ui.nav.goTo} ${titleOf(s.id)}`}
              aria-current={i === index ? "true" : undefined}
              className={cn("h-1.5 rounded-full transition-all", i === index ? "w-8 bg-[linear-gradient(90deg,var(--accent-blue),var(--accent-magenta))]" : "w-3 bg-foreground/20 hover:bg-foreground/40")}
            />
          ))}
        </div>
        <p className="hidden text-[11px] text-muted lg:block">{ui.nav.keyboardHint}</p>
        <Button variant="primary" size="sm" onClick={() => go(1)} disabled={index === total - 1} aria-label={ui.nav.nextSection}>{ui.common.next} <ChevronRight /></Button>
      </div>
    </div>
  );
}
