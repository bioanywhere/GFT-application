import { compareRoles } from "@/content/compare";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export function RoleChip({ role, className, short = true }: { role: "ai" | "ventures"; className?: string; short?: boolean }) {
  const r = compareRoles[role];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white", className)} style={{ background: `linear-gradient(100deg, ${r.color}, ${r.color2})` }}>
      <Icon name={r.icon} className="size-3" /> {short ? r.short : r.name}
    </span>
  );
}

export function EmphasisDots({ level, color, label }: { level: 0 | 1 | 2 | 3; color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5" role="img" aria-label={label}>
      {[1, 2, 3].map((i) => (
        <span key={i} className="size-2 rounded-full" style={{ background: i <= level ? color : "var(--border-strong)" }} />
      ))}
    </span>
  );
}
