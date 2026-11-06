import type { RoadmapPhase } from "./types";

export const roadmap = {
  headline: "A Practical Plan to Start Creating Value.",
  intro:
    "Ninety days is enough to understand GFT's AI landscape, build a prioritized opportunity portfolio, validate the strongest cases with real customers, and put the first commercial initiatives in motion.",
  caveat:
    "These are proposed priorities, subject to GFT's internal strategy, resources, and approvals. The plan does not promise revenue within 90 days; it establishes the pipeline, evidence, and commercial activation that lead to it.",
  phases: [
    {
      id: "phase-1",
      range: "Days 1–30",
      title: "Discover & Prioritize",
      focus: "Learn fast, build the pipeline.",
      actions: [
        "Understand GFT's current AI products and strategic priorities.",
        "Meet regional business and technology leaders.",
        "Review existing commercial opportunities.",
        "Identify underserved industries and markets.",
        "Explore opportunities in banking, sustainability, and enterprise automation.",
        "Build an initial prioritized opportunity pipeline.",
      ],
      deliverable: "AI Business Opportunity Portfolio",
    },
    {
      id: "phase-2",
      range: "Days 31–60",
      title: "Validate & Design",
      focus: "Prove demand before building.",
      actions: [
        "Select the highest-potential opportunities.",
        "Validate customer demand.",
        "Develop business cases.",
        "Identify potential commercial partners.",
        "Define possible revenue models.",
        "Coordinate technical feasibility assessments with existing GFT teams.",
      ],
      deliverable: "Validated AI Venture Business Cases",
    },
    {
      id: "phase-3",
      range: "Days 61–90",
      title: "Activate & Commercialize",
      focus: "Put the first opportunities in market.",
      actions: [
        "Present commercial proposals to potential customers.",
        "Launch selected proof-of-concept initiatives where approved.",
        "Develop go-to-market plans.",
        "Establish a measurable opportunity pipeline.",
        "Prepare a roadmap for regional and international expansion.",
      ],
      deliverable: "AI Ventures Commercial Activation Plan",
    },
  ] satisfies RoadmapPhase[],
};
