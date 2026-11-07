import type { ValueDriver } from "./types";

export const impact = {
  headline: "Innovation Is Valuable. Commercial Impact Is Essential.",
  intro:
    "AI leadership should be measured by business outcomes, not by the number of experiments. This scorecard is how the proposed function would report progress to regional leadership every quarter.",
  kpis: [
    { id: "opportunities", label: "Qualified business opportunities identified", icon: "Search" as const },
    { id: "problems", label: "Customer problems validated", icon: "Users" as const },
    { id: "cases", label: "Business cases developed", icon: "BarChart3" as const },
    { id: "pilots", label: "Commercial pilots initiated", icon: "FlaskConical" as const },
    { id: "pipeline", label: "New revenue pipeline generated", icon: "TrendingUp" as const },
    { id: "partnerships", label: "Strategic partnerships established", icon: "Handshake" as const },
    { id: "commercialized", label: "AI solutions commercialized", icon: "Megaphone" as const },
    { id: "assets", label: "Reusable business assets developed", icon: "Layers" as const },
    { id: "markets", label: "Expansion into additional markets", icon: "Globe2" as const },
    { id: "revenue", label: "Revenue generated from AI-powered offerings", icon: "Target" as const },
  ],
  valueFramework: [
    {
      id: "revenue-growth",
      driver: "Revenue growth" as ValueDriver,
      title: "Revenue Growth",
      text: "New services, products, customers, and business models.",
      icon: "TrendingUp" as const,
      color: "var(--accent-blue)",
    },
    {
      id: "efficiency",
      driver: "Operational efficiency" as ValueDriver,
      title: "Operational Efficiency",
      text: "Reduced costs and improved process performance.",
      icon: "Workflow" as const,
      color: "var(--accent-emerald)",
    },
    {
      id: "expansion",
      driver: "Market expansion" as ValueDriver,
      title: "Market Expansion",
      text: "New industries, customer segments, and geographic markets.",
      icon: "Globe2" as const,
      color: "var(--accent-amber)",
    },
    {
      id: "differentiation",
      driver: "Competitive differentiation" as ValueDriver,
      title: "Competitive Differentiation",
      text: "Proprietary solutions, specialized expertise, and innovative offerings.",
      icon: "Sparkles" as const,
      color: "var(--accent-violet)",
    },
    {
      id: "recurring",
      driver: "Recurring revenue" as ValueDriver,
      title: "Recurring Revenue",
      text: "Subscription platforms, licensed assets, managed services, and ongoing enterprise contracts.",
      icon: "Repeat" as const,
      color: "var(--accent-magenta)",
    },
  ],
  scenario: {
    title: "Illustrative pipeline scenario",
    disclaimer:
      "Hypothetical and editable. These values are not forecasts, commitments, or GFT projections. They illustrate how a disciplined funnel converts opportunities into commercial outcomes over four quarters.",
    defaults: {
      opportunitiesPerQuarter: 12,
      validationRate: 40,
      pilotRate: 50,
      commercializationRate: 50,
    },
    quarters: ["Q1", "Q2", "Q3", "Q4"],
  },
};
