"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/components/layout/locale-provider";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { ui } = useContent();
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const isDark = mounted ? resolvedTheme === "dark" : true;
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? ui.common.switchToLight : ui.common.switchToDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
