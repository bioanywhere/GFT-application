"use client";

import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { RotateCcw } from "lucide-react";
import { impact } from "@/content";
import { Button } from "@/components/ui/button";

type Params = typeof impact.scenario.defaults;

const sliders: { key: keyof Params; label: string; min: number; max: number; step: number; unit: string }[] = [
  { key: "opportunitiesPerQuarter", label: "Opportunities discovered per quarter", min: 4, max: 30, step: 1, unit: "" },
  { key: "validationRate", label: "Validated with customers", min: 10, max: 80, step: 5, unit: "%" },
  { key: "pilotRate", label: "Validated cases that become pilots", min: 10, max: 100, step: 5, unit: "%" },
  { key: "commercializationRate", label: "Pilots that commercialize", min: 10, max: 100, step: 5, unit: "%" },
];

export function PipelineScenario() {
  const [params, setParams] = useState<Params>(impact.scenario.defaults);

  const data = useMemo(() => {
    // validation lags discovery by one quarter, pilots by two, commercialization by three
    const perQuarter = impact.scenario.quarters.map((q, i) => {
      const validated = i >= 1 ? params.opportunitiesPerQuarter * (params.validationRate / 100) : 0;
      const pilots = i >= 2 ? validated * (params.pilotRate / 100) : 0;
      const commercial = i >= 3 ? pilots * (params.commercializationRate / 100) : 0;
      return { quarter: q, discovered: params.opportunitiesPerQuarter, validated, pilots, commercial };
    });
    const cumulative = perQuarter.reduce<{ rows: { quarter: string; Discovered: number; Validated: number; Pilots: number; Commercialized: number }[]; acc: number[] }>(
      ({ rows, acc }, r) => {
        const next = [acc[0] + r.discovered, acc[1] + r.validated, acc[2] + r.pilots, acc[3] + r.commercial];
        return {
          rows: [...rows, { quarter: r.quarter, Discovered: Math.round(next[0]), Validated: Math.round(next[1]), Pilots: Math.round(next[2]), Commercialized: Math.round(next[3]) }],
          acc: next,
        };
      },
      { rows: [], acc: [0, 0, 0, 0] },
    );
    return cumulative.rows;
  }, [params]);

  const totals = data[data.length - 1];

  return (
    <div className="rounded-3xl card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{impact.scenario.title}</p>
          <p className="mt-1 text-sm text-muted">Cumulative funnel over four quarters. Adjust the assumptions to explore the shape of the pipeline.</p>
        </div>
        <span className="rounded-full border border-accent-amber/50 bg-accent-amber/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-amber">Hypothetical · editable</span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {sliders.map((s) => (
            <div key={s.key}>
              <div className="flex items-center justify-between text-sm">
                <label htmlFor={`sl-${s.key}`} className="text-muted-strong">{s.label}</label>
                <span className="font-mono text-xs">{params[s.key]}{s.unit}</span>
              </div>
              <input
                id={`sl-${s.key}`}
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={params[s.key]}
                onChange={(e) => setParams((p) => ({ ...p, [s.key]: Number(e.target.value) }))}
                className="mt-2 w-full accent-[var(--accent-blue)]"
              />
            </div>
          ))}
          <Button variant="ghost" size="sm" onClick={() => setParams(impact.scenario.defaults)}><RotateCcw /> Reset assumptions</Button>
        </div>
        <div>
          <div className="h-[260px] w-full" role="img" aria-label="Area chart of cumulative opportunities discovered, validated, piloted and commercialized across four quarters under the current assumptions">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  {[["d", "var(--accent-blue)"], ["v", "var(--accent-violet)"], ["p", "var(--accent-magenta)"], ["c", "var(--accent-emerald)"]].map(([id, c]) => (
                    <linearGradient key={id} id={`ps-${id}`} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor={c} stopOpacity={0.5} />
                      <stop offset="100%" stopColor={c} stopOpacity={0.02} />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis dataKey="quarter" tick={{ fill: "var(--muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "var(--muted)", fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip contentStyle={{ background: "var(--card-solid)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12, color: "var(--foreground)" }} />
                <Area type="monotone" dataKey="Discovered" stroke="var(--accent-blue)" fill="url(#ps-d)" strokeWidth={2} />
                <Area type="monotone" dataKey="Validated" stroke="var(--accent-violet)" fill="url(#ps-v)" strokeWidth={2} />
                <Area type="monotone" dataKey="Pilots" stroke="var(--accent-magenta)" fill="url(#ps-p)" strokeWidth={2} />
                <Area type="monotone" dataKey="Commercialized" stroke="var(--accent-emerald)" fill="url(#ps-c)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Discovered", totals.Discovered, "var(--accent-blue)"],
              ["Validated", totals.Validated, "var(--accent-violet)"],
              ["Pilots", totals.Pilots, "var(--accent-magenta)"],
              ["Commercialized", totals.Commercialized, "var(--accent-emerald)"],
            ].map(([label, val, color]) => (
              <div key={label as string} className="rounded-xl border border-border p-3">
                <dt className="flex items-center gap-1.5 text-[11px] text-muted"><span className="size-2 rounded-full" style={{ background: color as string }} /> {label}</dt>
                <dd className="mt-1 text-xl font-semibold">{val}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="mt-5 text-[11px] leading-relaxed text-muted">{impact.scenario.disclaimer}</p>
    </div>
  );
}
