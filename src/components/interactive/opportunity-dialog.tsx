"use client";

import { AlertCircle, Building2, Coins, Gem, Microscope, Puzzle, Target, Users } from "lucide-react";
import { getIndustry, type Opportunity } from "@/content";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

const blocks: { key: keyof Opportunity; title: string; icon: React.ComponentType<{ className?: string }>; number: string }[] = [
  { key: "problem", title: "Business problem", icon: AlertCircle, number: "01" },
  { key: "solution", title: "Proposed AI solution", icon: Puzzle, number: "02" },
  { key: "customers", title: "Potential customer segments", icon: Users, number: "03" },
  { key: "commercialModels", title: "Revenue model", icon: Coins, number: "04" },
  { key: "businessValue", title: "Business value", icon: Gem, number: "05" },
  { key: "capabilities", title: "Technical capabilities required", icon: Building2, number: "06" },
  { key: "validation", title: "Suggested validation approach", icon: Microscope, number: "07" },
  { key: "gftRelevance", title: "Strategic relevance to GFT", icon: Target, number: "08" },
];

export function OpportunityDialog({ opportunity, onClose }: { opportunity: Opportunity | null; onClose: () => void }) {
  const ind = opportunity ? getIndustry(opportunity.industryId) : undefined;
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
                  <Badge variant="outline">Hypothesis · for validation</Badge>
                </div>
                <DialogTitle className="mt-4 pr-10 text-2xl sm:text-3xl">{opportunity.name}</DialogTitle>
                <DialogDescription className="mt-2 max-w-2xl text-base">{opportunity.tagline}</DialogDescription>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {opportunity.valueDrivers.map((d) => (
                    <span key={d} className="rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] font-medium">{d}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
              {blocks.map((b) => {
                const value = opportunity[b.key];
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
              Presented as a proposal and hypothesis. It does not describe an existing GFT product, confirmed customer demand, or a guaranteed outcome.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
