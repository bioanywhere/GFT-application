import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-foreground/5 text-muted-strong",
        outline: "border-border-strong text-foreground",
        blue: "border-transparent bg-accent-blue/15 text-accent-blue",
        violet: "border-transparent bg-accent-violet/15 text-accent-violet",
        magenta: "border-transparent bg-accent-magenta/15 text-accent-magenta",
        emerald: "border-transparent bg-accent-emerald/15 text-accent-emerald",
        amber: "border-transparent bg-accent-amber/15 text-accent-amber",
        live: "border-transparent bg-accent-emerald/15 text-accent-emerald",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
