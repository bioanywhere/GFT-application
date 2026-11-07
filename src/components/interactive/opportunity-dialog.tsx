"use client";

import { AlertCircle, Building2, Coins, Gem, Microscope, Puzzle, Target, Users } from "lucide-react";
import type { Opportunity } from "@/content/types";
import { useContent } from "@/components/layout/locale-provider";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

const blockKeys = ["problem", "solution", "customers", "commercialModels", "businessValue", "capabilities", "validation", "gftRelevance"] as const;
const blockIcons: Record<(typeof blockKeys)[number], React.ComponentType<{ className?: string }>> = {
  problem: AlertCircle, solution: Puzzle, customers: Users, commercialModels: Coins, businessValue: Gem, capabilities: Building2, validation: Microscope, gftRelevance: Target,
};

export function OpportunityDialog({ opportunity, onClose }: { opportunity: Opportunity | null; onClose: () => void }) {
  const { industries, ui } = useContent();
  const ind = opportunity ? industries.find((i) => i.id === opportunity.industryId) : undefined;
  const blocks = blockKeys.map((key, i) => ({ key, title: ui.explorer.blocks[key], icon: blockIcons[key], number: String(i + 1).padStart(2, "0") }));
  return (
    <Dialog open={!!opportunity} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-4xl p-0">
        {opportunity && ind && (
          <div>
            <div className="relative overflow-hidden rounded-t-3xl border-b border-border p-6 sm:p-8">
              <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={ind.accent}><Icon name={ind.icon} className="size-3" /> {ind.name}</Badge>
                  <Badge variant="outline">{ui.explorer.hypothesisBadge}</Badge>
                </div>
                <DialogTitle className="mt-4 pr-10 text-2xl sm:text-3xl">{opportunity.name}</DialogTitle>
                <DialogDescription className="mt-2 max-w-2xl text-base">{opportunity.tagline}</DialogDescription>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {opportunity.valueDrivers.map((d) => (
                    <span key={d} className="rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] font-medium">{ui.explorer.driverLabels[d]}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
              {blocks.map((b) => {
                const raw = opportunity[b.key];
                const value = b.key === "commercialModels" && Array.isArray(raw) ? raw.map((m) => ui.explorer.modelLabels[m as keyof typeof ui.explorer.modelLabels] ?? m) : raw;
                return (
                  <div key={b.key} className={b.key === "gftRelevance" || b.key === "solution" ? "sm:col-span-2" : ""}>
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      <span className="font-mono text-accent-blue">{b.number}</span> <b.icon className="size-3.5" /> {b.title}
                    </p>
                    {Array.isArray(value) ? (
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {value.map((v) => (
                          <li key={v} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs">{v}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm leading-relaxed text-muted-strong">{value}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="border-t border-border px-6 py-4 text-[11px] leading-relaxed text-muted sm:px-8">
              {ui.explorer.dialogFooter}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
