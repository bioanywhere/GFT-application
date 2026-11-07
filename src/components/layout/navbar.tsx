"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { FileText, Menu, Presentation } from "lucide-react";
import { navigation as defaultNavigation, site } from "@/content";
import type { NavItem } from "@/components/layout/types";
import { cn, scrollToSection } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { usePresentation } from "@/components/interactive/presentation-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

export interface NavbarProps {
  navigation?: readonly NavItem[];
  brandSub?: string;
  summaryHref?: string | null;
  homeId?: string;
}

export function Navbar({
  navigation = defaultNavigation,
  brandSub = "AI Ventures Proposal · GFT",
  summaryHref = "/executive-summary",
  homeId = "proposal",
}: NavbarProps) {
  const ids = useMemo<string[]>(() => navigation.map((n) => n.id), [navigation]);
  const active = useActiveSection(ids);
  const progress = useScrollProgress();
  const presentation = usePresentation();
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="no-print fixed inset-x-0 top-10 z-[70]">
      <div className="glass border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <button
            onClick={() => go(homeId)}
            className="flex items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-(--ring) rounded-md"
            aria-label="Back to top"
          >
            <span className="relative flex size-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-magenta))] text-xs font-bold text-white">
              AG
            </span>
            <span className="hidden flex-col leading-tight md:flex xl:hidden 2xl:flex">
              <span className="whitespace-nowrap text-sm font-semibold">{site.candidate.name}</span>
              <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-muted">{brandSub}</span>
            </span>
          </button>

          <nav aria-label="Sections" className="hidden items-center gap-0 xl:flex 2xl:gap-0.5">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-medium text-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-(--ring) 2xl:px-3 2xl:text-[12.5px]",
                  active === item.id && "text-foreground",
                )}
                aria-current={active === item.id ? "true" : undefined}
              >
                {active === item.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-foreground/8" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            {summaryHref && (<>
            <Button variant="outline" size="sm" asChild className="hidden md:inline-flex xl:hidden 2xl:inline-flex">
              <Link href={summaryHref}>
                <FileText /> Executive Summary
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="hidden xl:inline-flex 2xl:hidden" aria-label="Executive Summary">
              <Link href={summaryHref} title="Executive Summary">
                <FileText />
              </Link>
            </Button>
            </>)}
            <Button variant="gradient" size="sm" onClick={() => presentation.open(ids.indexOf(active))} className="hidden sm:inline-flex">
              <Presentation /> Presentation Mode
            </Button>
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open navigation">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="text-sm font-semibold">Navigate the proposal</SheetTitle>
                <SheetDescription className="text-xs text-muted">Jump to any section.</SheetDescription>
                <nav className="mt-6 flex flex-col gap-1" aria-label="Sections">
                  {navigation.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => go(item.id)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-muted transition hover:bg-foreground/5 hover:text-foreground",
                        active === item.id && "bg-foreground/8 text-foreground",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                    </button>
                  ))}
                </nav>
                <div className="mt-6 flex flex-col gap-2">
                  <Button variant="gradient" onClick={() => { setOpen(false); presentation.open(ids.indexOf(active)); }}>
                    <Presentation /> Presentation Mode
                  </Button>
                  {summaryHref && (
                  <Button variant="outline" asChild>
                    <Link href={summaryHref}><FileText /> Executive Summary</Link>
                  </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="h-px w-full bg-border">
          <motion.div
            className="h-px origin-left bg-[linear-gradient(90deg,var(--accent-blue),var(--accent-violet),var(--accent-magenta))]"
            style={{ scaleX: progress }}
            aria-hidden
          />
        </div>
      </div>
    </header>
  );
}
