import type { SectionEntry } from "@/components/layout/types";
import { compareNavigation } from "@/content/compare";
import { CompareHeroSection } from "./cmp-hero";
import { CompareTableSection } from "./cmp-table";
import { CompareFocusSection } from "./cmp-focus";
import { CompareImpactSection } from "./cmp-impact";
import { CompareModelSection } from "./cmp-model";
import { CompareFitSection } from "./cmp-fit";
import { CompareGuideSection } from "./cmp-guide";
import { CompareClosingSection } from "./cmp-closing";

const components: Record<(typeof compareNavigation)[number]["id"], React.ComponentType> = {
  "cmp-hero": CompareHeroSection,
  "cmp-table": CompareTableSection,
  "cmp-focus": CompareFocusSection,
  "cmp-impact": CompareImpactSection,
  "cmp-model": CompareModelSection,
  "cmp-fit": CompareFitSection,
  "cmp-guide": CompareGuideSection,
  "cmp-contact": CompareClosingSection,
};

export const compareSections: SectionEntry[] = compareNavigation.map((n) => ({ id: n.id, title: n.label, Component: components[n.id] }));
