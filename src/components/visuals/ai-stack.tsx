"use client";

import { motion, useReducedMotion } from "motion/react";
import { useContent } from "@/components/layout/locale-provider";

export function AiStack() {
  const { ai, ui } = useContent();
  const reduce = useReducedMotion();
  const layers = ai.hero.stack;
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_60%)] blur-2xl" aria-hidden />
      <svg viewBox="0 0 420 420" className="relative h-auto w-full" role="img" aria-label={ui.ai.stackAria}>
        <defs>
          <linearGradient id="st-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="55%" stopColor="var(--accent-cyan)" />
            <stop offset="100%" stopColor="var(--accent-emerald)" />
          </linearGradient>
        </defs>
        {/* vertical flow line */}
        <motion.line
          x1="60" y1="28" x2="60" y2="392"
          stroke="url(#st-grad)" strokeWidth="2" strokeDasharray="4 6"
          initial={reduce ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {!reduce && (
          <circle r="4" fill="var(--accent-cyan)">
            <animateMotion dur="5s" repeatCount="indefinite" path="M 60 28 L 60 392" />
          </circle>
        )}
        {layers.map((l, i) => {
          const y = 40 + i * 60;
          const w = 300 - Math.abs(i - 2.5) * 10;
          return (
            <motion.g
              key={l.id}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <circle cx="60" cy={y + 18} r="7" fill="var(--background-elevated)" stroke="url(#st-grad)" strokeWidth="2" />
              <rect x="86" y={y} width={w} height="40" rx="12" fill="var(--card-solid)" stroke="var(--border-strong)" />
              <rect x="86" y={y} width="4" height="40" rx="2" fill="url(#st-grad)" opacity={0.5 + i * 0.1} />
              <text x="102" y={y + 17} fontSize="13" fontWeight="600" fill="var(--foreground)">{l.label}</text>
              <text x="102" y={y + 32} fontSize="9.5" fill="var(--muted)" letterSpacing="0.3">{l.sub}</text>
              <text x={86 + w - 10} y={y + 25} fontSize="10" fontFamily="monospace" textAnchor="end" fill="var(--muted)">0{i + 1}</text>
            </motion.g>
          );
        })}
        <text x="236" y="412" textAnchor="middle" fontSize="9" letterSpacing="2" fill="var(--muted)">{ui.ai.stackFooter}</text>
      </svg>
    </div>
  );
}
