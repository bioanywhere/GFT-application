"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Cpu, Rocket, Scale } from "lucide-react";
import { proposalForPath, proposals } from "@/content/proposals";
import { cn } from "@/lib/utils";

const icons = { ventures: Rocket, ai: Cpu, compare: Scale } as const;

export function ProposalTabs() {
  const pathname = usePathname();
  const active = proposalForPath(pathname ?? "/");
  return (
    <div className="no-print fixed inset-x-0 top-0 z-[72] h-10 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav aria-label="Proposals" className="mx-auto flex h-full max-w-7xl items-center justify-center px-3 sm:justify-between sm:px-8 lg:px-12">
        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:block">Executive proposals · GFT Technologies</span>
        <div className="flex h-8 items-center gap-0.5 rounded-full border border-border bg-foreground/5 p-0.5">
          {proposals.map((p) => {
            const Icon = icons[p.id];
            const isActive = p.id === active;
            return (
              <Link
                key={p.id}
                href={p.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[12px] font-medium transition focus-visible:outline-2 focus-visible:outline-(--ring)",
                  isActive ? "text-background" : "text-muted hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="proposal-tab-pill"
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
                <span className="relative sm:hidden">{p.short}</span>
                <span className="relative hidden sm:inline">{p.label}</span>
              </Link>
            );
          })}
        </div>
        <span className="hidden text-[10px] text-muted sm:block">Andrés García Montoya</span>
      </nav>
    </div>
  );
}
