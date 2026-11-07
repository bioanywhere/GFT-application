import type { ComponentType } from "react";
import type { SectionEntry } from "@/components/layout/types";
import { navigation } from "@/content/site";
import { HeroSection } from "./hero";
import { WhyGftSection } from "./why-gft";
import { OpportunityEngineSection } from "./opportunity-engine";
import { OpportunityExplorerSection } from "@/components/interactive/opportunity-explorer";
import { WhyAndresSection } from "./why-andres";
import { ExperienceSection } from "./experience";
import { BusinessImpactSection } from "./business-impact";
import { RoadmapSection } from "./roadmap";
import { StrategicFitSection } from "./strategic-fit";
import { AvailabilitySection } from "./availability";
import { ClosingSection } from "./closing";

const components: Record<(typeof navigation)[number]["id"], ComponentType> = {
  proposal: HeroSection,
  "why-gft": WhyGftSection,
  engine: OpportunityEngineSection,
  opportunities: OpportunityExplorerSection,
  "why-andres": WhyAndresSection,
  experience: ExperienceSection,
  impact: BusinessImpactSection,
  roadmap: RoadmapSection,
  fit: StrategicFitSection,
  availability: AvailabilitySection,
  contact: ClosingSection,
};

export const sections: SectionEntry[] = navigation.map((n) => ({ id: n.id, title: n.label, Component: components[n.id] }));
