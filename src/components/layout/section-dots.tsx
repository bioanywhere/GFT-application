"use client";

import { useMemo } from "react";
import type { NavItem } from "@/components/layout/types";
import { useContent } from "@/components/layout/locale-provider";
import { cn, scrollToSection } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SectionDots({ navigation }: { navigation: readonly NavItem[] }) {
  const { ui } = useContent();
  const ids = useMemo<string[]>(() => navigation.map((n) => n.id), [navigation]);
  const active = useActiveSection(ids);
  return (
    <TooltipProvider delayDuration={100}>
      <nav aria-label={ui.nav.sectionProgress} className="no-print fixed right-5 top-1/2 z-[60] hidden -translate-y-1/2 flex-col items-center gap-2.5 lg:flex">
        {navigation.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-label={`${ui.nav.goTo} ${item.label}`}
                aria-current={active === item.id ? "true" : undefined}
                className="group flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-(--ring)"
              >
                <span
                  className={cn(
                    "block rounded-full bg-muted/50 transition-all duration-300 group-hover:bg-foreground",
                    active === item.id ? "size-2.5 bg-[var(--accent-blue)] shadow-[0_0_12px_var(--glow)]" : "size-1.5",
                  )}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
}
