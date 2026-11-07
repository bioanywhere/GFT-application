import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  containerClassName,
  tone = "default",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "elevated";
}) {
  return (
    <section
      id={id}
      data-section={id}
      className={cn(
        "relative scroll-mt-20 py-20 sm:py-28 lg:py-32",
        tone === "elevated" && "bg-background-elevated/60",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="display text-balance text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  );
}
