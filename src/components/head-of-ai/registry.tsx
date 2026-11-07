import type { SectionEntry } from "@/components/layout/types";
import { aiNavigation } from "@/content/head-of-ai";
import { useContent } from "@/components/layout/locale-provider";
import { AiHeroSection } from "./ai-hero";
import { AiContextSection } from "./ai-context";
import { AiMandateSection } from "./ai-mandate";
import { AiLifecycleSection } from "./ai-lifecycle";
import { AiUseCasesSection } from "./ai-usecases";
import { AiWhyAndresSection } from "./ai-why-andres";
import { AiStandardsSection } from "./ai-standards";
import { AiImpactSection } from "./ai-impact";
import { AiClosingSection } from "./ai-closing";
import { RoadmapSection } from "@/components/sections/roadmap";
import { StrategicFitSection } from "@/components/sections/strategic-fit";

function AiRoadmapSection() {
  const { ai, ui } = useContent();
  return <RoadmapSection id="ai-roadmap" eyebrow={ui.ai.roadmapEyebrow} data={ai.roadmap} tone="default" />;
}
function AiOperatingModelSection() {
  const { ai, ui } = useContent();
  return <StrategicFitSection id="ai-operating-model" eyebrow={ui.ai.operatingModelEyebrow} data={ai.operatingModel} tone="elevated" centerLabel={{ top: ui.ai.centerTop, main: ui.ai.centerMain }} />;
}

const components: Record<(typeof aiNavigation)[number]["id"], React.ComponentType> = {
  "ai-proposal": AiHeroSection,
  "ai-context": AiContextSection,
  "ai-mandate": AiMandateSection,
  "ai-lifecycle": AiLifecycleSection,
  "ai-usecases": AiUseCasesSection,
  "ai-why-andres": AiWhyAndresSection,
  "ai-standards": AiStandardsSection,
  "ai-impact": AiImpactSection,
  "ai-roadmap": AiRoadmapSection,
  "ai-operating-model": AiOperatingModelSection,
  "ai-contact": AiClosingSection,
};

export const aiSections: SectionEntry[] = aiNavigation.map((n) => ({ id: n.id, title: n.label, Component: components[n.id] }));
