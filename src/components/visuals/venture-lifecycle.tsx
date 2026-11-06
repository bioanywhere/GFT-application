"use client";

import { motion, useReducedMotion } from "motion/react";
import { engine } from "@/content";

export function VentureLifecycle() {
  const reduce = useReducedMotion();
  const steps = engine.lifecycle;
  const n = steps.length;
  return (
    <div className="relative overflow-hidden rounded-3xl card p-6 sm:p-10">
      <svg viewBox="0 0 1000 170" className="hidden w-full md:block" role="img" aria-label={`Lifecycle: ${steps.join(" to ")}`}>
        <defs>
          <linearGradient id="vl-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="50%" stopColor="var(--accent-violet)" />
            <stop offset="100%" stopColor="var(--accent-magenta)" />
          </linearGradient>
        </defs>
        <line x1="60" y1="70" x2="940" y2="70" stroke="var(--border-strong)" strokeWidth="2" />
        <motion.line
          x1="60" y1="70" x2="940" y2="70"
          stroke="url(#vl-grad)"
          strokeWidth="2.5"
          initial={reduce ? undefined : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {!reduce && (
          <circle r="6" fill="var(--accent-magenta)">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 60 70 L 940 70" />
          </circle>
        )}
        {steps.map((s, i) => {
          const x = 60 + (i * 880) / (n - 1);
          // funnel: bar width shrinks per stage to signal the gating effect
          const w = 150 - i * 22;
          return (
            <g key={s}>
              <motion.rect
                x={x - w / 2} y={100} width={w} height={14} rx={7}
                fill="url(#vl-grad)" opacity={0.25 + i * 0.12}
                initial={reduce ? undefined : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                style={{ transformOrigin: `${x}px 107px` }}
              />
              <motion.circle
                cx={x} cy={70} r={14}
                fill="var(--background-elevated)" stroke="url(#vl-grad)" strokeWidth="2.5"
                initial={reduce ? undefined : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 260, damping: 18 }}
                style={{ transformOrigin: `${x}px 70px` }}
              />
              <text x={x} y={74} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--foreground)">{i + 1}</text>
              <text x={x} y={40} textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--foreground)" letterSpacing="-0.2">{s}</text>
              <text x={x} y={140} textAnchor="middle" fontSize="10" fill="var(--muted)" letterSpacing="1.5">{["PIPELINE", "EVIDENCE", "PILOT", "FIRST REVENUE", "PORTFOLIO"][i]}</text>
            </g>
          );
        })}
      </svg>
      <ol className="grid gap-3 md:hidden">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent-violet/60 text-xs font-bold">{i + 1}</span>
            <span className="font-medium">{s}</span>
            <span className="ml-auto font-mono text-[10px] text-muted">{["PIPELINE", "EVIDENCE", "PILOT", "FIRST REVENUE", "PORTFOLIO"][i]}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
