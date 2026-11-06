"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface PresentationState {
  active: boolean;
  index: number;
  open: (index?: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  total: number;
}

const PresentationContext = createContext<PresentationState | null>(null);

export function PresentationProvider({ children, total }: { children: ReactNode; total: number }) {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);

  const open = useCallback((i = 0) => {
    setIndex(Math.min(Math.max(0, i), total - 1));
    setActive(true);
  }, [total]);
  const close = useCallback(() => setActive(false), []);
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const goTo = useCallback((i: number) => setIndex(Math.min(Math.max(0, i), total - 1)), [total]);

  const value = useMemo(
    () => ({ active, index, open, close, next, prev, goTo, total }),
    [active, index, open, close, next, prev, goTo, total],
  );
  return <PresentationContext.Provider value={value}>{children}</PresentationContext.Provider>;
}

export function usePresentation() {
  const ctx = useContext(PresentationContext);
  if (!ctx) throw new Error("usePresentation must be used within PresentationProvider");
  return ctx;
}
