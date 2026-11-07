import { site, navigation } from "./site";
import { hero } from "./hero";
import { whyGft } from "./why-gft";
import { engine } from "./engine";
import { explorer, industries, commercialModels, valueDrivers } from "./opportunities";
import { profile } from "./profile";
import { experienceSection, experiences } from "./experience";
import { impact } from "./impact";
import { roadmap } from "./roadmap";
import { fit } from "./fit";
import { availability } from "./availability";
import { closing } from "./closing";
import { proposals } from "./proposals";
import { ui } from "./ui";
import {
  aiNavigation, aiHero, aiContext, aiMandate, aiLifecycle, aiUseCasesSection, aiDomains, aiProfile, aiStandards, aiImpact, aiRoadmap, aiOperatingModel, aiClosing,
} from "./head-of-ai";
import {
  compareRoles, compareHero, compareDimensions, emphasisLabels, compareFocus, compareImpact, compareModel, compareFit, comparePriorities, compareClosing, compareNavigation,
} from "./compare";

export const en = {
  locale: "en" as const,
  site,
  navigation,
  hero,
  whyGft,
  engine,
  explorer,
  industries,
  commercialModels,
  valueDrivers,
  profile,
  experienceSection,
  experiences,
  impact,
  roadmap,
  fit,
  availability,
  closing,
  proposals,
  ui,
  ai: {
    navigation: aiNavigation,
    hero: aiHero,
    context: aiContext,
    mandate: aiMandate,
    lifecycle: aiLifecycle,
    useCasesSection: aiUseCasesSection,
    domains: aiDomains,
    profile: aiProfile,
    standards: aiStandards,
    impact: aiImpact,
    roadmap: aiRoadmap,
    operatingModel: aiOperatingModel,
    closing: aiClosing,
  },
  compare: {
    roles: compareRoles,
    hero: compareHero,
    dimensions: compareDimensions,
    emphasisLabels,
    focus: compareFocus,
    impact: compareImpact,
    model: compareModel,
    fit: compareFit,
    priorities: comparePriorities,
    closing: compareClosing,
    navigation: compareNavigation,
  },
};

export type Dictionary = Omit<typeof en, "locale"> & { locale: "en" | "es" };
