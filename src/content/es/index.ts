import type { Dictionary } from "../en";
import { commercialModels, valueDrivers } from "../opportunities";
import {
  site, navigation, hero, whyGft, engine, profile, experienceSection, experiences, impact, roadmap, fit, availability, closing, proposals,
} from "./core";
import { explorer, industries } from "./opportunities";
import { ui } from "./ui";
import {
  aiNavigation, aiHero, aiContext, aiMandate, aiLifecycle, aiUseCasesSection, aiDomains, aiProfile, aiStandards, aiImpact, aiRoadmap, aiOperatingModel, aiClosing,
} from "./head-of-ai";
import {
  compareRoles, compareHero, compareDimensions, emphasisLabels, compareFocus, compareImpact, compareModel, compareFit, comparePriorities, compareClosing, compareNavigation,
} from "./compare";

export const es: Dictionary = {
  locale: "es",
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
