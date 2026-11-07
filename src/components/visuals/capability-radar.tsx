"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { useContent } from "@/components/layout/locale-provider";

export function CapabilityRadar() {
  const { profile, ui } = useContent();
  return (
    <div className="h-[320px] w-full sm:h-[380px]" role="img" aria-label={ui.whyAndres.radarAria}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={profile.radar} outerRadius="72%" margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <defs>
            <linearGradient id="radar-fill" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity={0.7} />
              <stop offset="100%" stopColor="var(--accent-magenta)" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <PolarGrid stroke="var(--border-strong)" />
          <PolarAngleAxis dataKey="axis" tick={{ fill: "var(--muted-strong)", fontSize: 11 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip
            cursor={false}
            contentStyle={{ background: "var(--card-solid)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12, color: "var(--foreground)" }}
            formatter={(v) => [`${v} / 100`, ui.whyAndres.emphasis]}
          />
          <Radar dataKey="value" stroke="var(--accent-blue)" strokeWidth={2} fill="url(#radar-fill)" isAnimationActive />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
