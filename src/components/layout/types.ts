import type { ComponentType } from "react";

export interface NavItem {
  id: string;
  label: string;
}

export interface SectionEntry {
  id: string;
  title: string;
  Component: ComponentType;
}
