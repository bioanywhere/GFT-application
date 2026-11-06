"use client";

import { motion, useReducedMotion } from "motion/react";
import { availability } from "@/content";

// Stylised dot-matrix world: coarse continent silhouettes as a point grid.
const continents: [number, number, number, number][] = [
  // [x, y, w, h] in percent — approximate blocks for a stylised map
  [8, 18, 18, 22], [12, 40, 8, 10], [20, 44, 12, 20], [24, 64, 8, 14],
  [42, 18, 14, 16], [44, 34, 14, 26], [50, 60, 6, 10],
  [56, 14, 30, 24], [66, 38, 12, 16], [80, 36, 8, 10], [76, 58, 14, 14], [88, 66, 6, 6],
];

function inside(x: number, y: number) {
  return continents.some(([cx, cy, w, h]) => {
    const nx = (x - cx) / w - 0.5;
    const ny = (y - cy) / h - 0.5;
    return nx * nx + ny * ny <= 0.26;
  });
}

const dots: { x: number; y: number }[] = [];
for (let y = 10; y <= 80; y += 2.2) {
  for (let x = 4; x <= 96; x += 1.6) {
    if (inside(x, y)) dots.push({ x, y });
  }
}

export function WorldMap() {
  const reduce = useReducedMotion();
  const home = availability.home;
  return (
    <div className="relative aspect-[2/1] w-full" role="img" aria-label="Stylised world map highlighting collaboration readiness across Latin America, North America, Europe and Asia Pacific from a base in Colombia">
      <svg viewBox="0 0 100 50" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="wm-arc" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-magenta)" />
          </linearGradient>
        </defs>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y / 2} r="0.42" fill="var(--muted)" opacity="0.35" />
        ))}
        {availability.regions.map((r, i) => {
          const x1 = home.x, y1 = home.y / 2, x2 = r.x, y2 = r.y / 2;
          const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.25 - 3;
          const d = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
          return (
            <g key={r.id}>
              <motion.path
                d={d}
                fill="none"
                stroke="url(#wm-arc)"
                strokeWidth="0.35"
                strokeLinecap="round"
                initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.25, duration: 1.2, ease: "easeInOut" }}
              />
              {!reduce && (
                <circle r="0.6" fill="var(--accent-magenta)">
                  <animateMotion dur={`${4 + i}s`} repeatCount="indefinite" begin={`${i * 0.7}s`} path={d} />
                </circle>
              )}
              <circle cx={x2} cy={y2} r="1.1" fill="var(--background-elevated)" stroke="var(--accent-violet)" strokeWidth="0.35" />
              <text x={x2} y={y2 - 2.2} textAnchor="middle" fontSize="2.4" fontWeight="600" fill="var(--foreground)">{r.name}</text>
              <text x={x2} y={y2 + 3.4} textAnchor="middle" fontSize="1.6" fill="var(--muted)">{r.note}</text>
            </g>
          );
        })}
        <motion.circle
          cx={home.x} cy={home.y / 2} r="2.2"
          fill="var(--accent-blue)" opacity="0.25"
          animate={reduce ? undefined : { r: [2, 3.6, 2], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <circle cx={home.x} cy={home.y / 2} r="1.2" fill="var(--accent-blue)" stroke="var(--background-elevated)" strokeWidth="0.3" />
        <text x={home.x} y={home.y / 2 + 4} textAnchor="middle" fontSize="2" fontWeight="700" fill="var(--accent-blue)">Colombia</text>
      </svg>
    </div>
  );
}
