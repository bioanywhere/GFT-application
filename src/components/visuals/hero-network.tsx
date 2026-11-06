"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/content";

const R = 150;
const CX = 200;
const CY = 200;

function polar(angle: number, r = R) {
  const a = (angle * Math.PI) / 180;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

export function HeroNetwork() {
  const reduce = useReducedMotion();
  const nodes = hero.networkNodes.map((n) => ({ ...n, ...polar(n.angle) }));

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_60%)] blur-2xl" aria-hidden />
      <svg viewBox="0 0 400 400" className="relative h-full w-full" role="img" aria-label="Artificial intelligence connecting banking, sustainability, social impact, fintech, enterprise automation and emerging markets">
        <defs>
          <linearGradient id="hn-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="60%" stopColor="var(--accent-violet)" />
            <stop offset="100%" stopColor="var(--accent-magenta)" />
          </linearGradient>
          <radialGradient id="hn-core">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent-violet)" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* orbit rings */}
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--border-strong)" strokeDasharray="2 8" />
          <circle cx={CX} cy={CY} r={R + 34} fill="none" stroke="var(--border)" strokeDasharray="1 10" />
        </motion.g>

        {/* edges between industries (opportunities emerge between them) */}
        {nodes.map((a, i) => {
          const b = nodes[(i + 1) % nodes.length];
          const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
          const ctrl = { x: (mid.x + CX) / 2, y: (mid.y + CY) / 2 };
          const d = `M ${a.x} ${a.y} Q ${ctrl.x} ${ctrl.y} ${b.x} ${b.y}`;
          return (
            <g key={`edge-${a.id}`}>
              <path d={d} fill="none" stroke="url(#hn-grad)" strokeOpacity="0.35" strokeWidth="1" />
              {!reduce && (
                <motion.circle
                  r="2.5"
                  fill="var(--accent-magenta)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1.4, 1, 0.6] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.55, ease: "easeInOut" }}
                  cx={ctrl.x}
                  cy={ctrl.y}
                  style={{ transformOrigin: `${ctrl.x}px ${ctrl.y}px` }}
                />
              )}
            </g>
          );
        })}

        {/* spokes from AI core to industries */}
        {nodes.map((n, i) => (
          <g key={`spoke-${n.id}`}>
            <line x1={CX} y1={CY} x2={n.x} y2={n.y} stroke="url(#hn-grad)" strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="4 6" className={reduce ? "" : "animate-dash"} />
            {!reduce && (
              <circle r="3" fill="var(--accent-blue)">
                <animateMotion dur={`${3 + (i % 3)}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} path={`M ${CX} ${CY} L ${n.x} ${n.y}`} />
              </circle>
            )}
          </g>
        ))}

        {/* core */}
        <motion.circle
          cx={CX}
          cy={CY}
          r="46"
          fill="url(#hn-core)"
          animate={reduce ? undefined : { r: [44, 50, 44], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx={CX} cy={CY} r="30" fill="var(--background-elevated)" stroke="url(#hn-grad)" strokeWidth="1.5" />
        <text x={CX} y={CY + 1} textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="700" fill="var(--foreground)" letterSpacing="2">
          AI
        </text>

        {/* industry nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle cx={n.x} cy={n.y} r="22" fill="var(--background-elevated)" stroke="var(--border-strong)" />
            <circle cx={n.x} cy={n.y} r="5" fill="url(#hn-grad)" />
            <text
              x={n.x}
              y={n.y + (n.angle > 0 && n.angle < 180 ? 38 : -30)}
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="600"
              fill="var(--muted-strong)"
              letterSpacing="0.5"
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
