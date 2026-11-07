"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/components/layout/locale-provider";

export function PrintButton() {
  const { ui } = useContent();
  return (
    <Button variant="gradient" size="sm" onClick={() => window.print()}>
      <Printer /> {ui.summary.print}
    </Button>
  );
}
