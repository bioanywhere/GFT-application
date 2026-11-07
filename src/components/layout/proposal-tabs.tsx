"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Cpu, Rocket, Scale } from "lucide-react";
import { proposalForPath } from "@/content/proposals";
import { localePath } from "@/content/locale";
import { useContent } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";

const icons = { ventures: Rocket, ai: Cpu, compare: Scale } as const;

export function ProposalSwitcher({ className, itemClassName, layoutId = "proposal-tab-pill", onNavigate }: { className?: string; itemClassName?: string; layoutId?: string; onNavigate?: () => void }) {
  const pathname = usePathname();
  const { proposals, locale, ui } = useContent();
  const active = proposalForPath(pathname ?? "/");
  return (
    <nav aria-label={ui.nav.proposalsLabel} className={cn("flex h-9 items-center gap-0.5 rounded-full border border-border bg-foreground/5 p-0.5", className)}>
      {proposals.map((p) => {
        const Icon = icons[p.id];
        const isActive = p.id === active;
        return (
          <Link
            key={p.id}
            href={localePath(p.path, locale)}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative flex h-8 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[12px] font-medium transition focus-visible:outline-2 focus-visible:outline-(--ring)",
              isActive ? "text-background" : "text-muted hover:text-foreground",
              itemClassName,
            )}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className={cn(
                  "absolute inset-0 rounded-full",
                  p.tone === "growth" && "bg-[linear-gradient(100deg,var(--accent-violet),var(--accent-magenta))]",
                  p.tone === "execution" && "bg-[linear-gradient(100deg,var(--accent-blue),var(--accent-emerald))]",
                  p.tone === "neutral" && "bg-foreground",
                )}
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <Icon className="relative size-3.5" />
            <span className="relative lg:hidden">{p.short}</span>
            <span className="relative hidden lg:inline">{p.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
