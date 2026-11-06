import type { EngineStage } from "./types";

export const engine = {
  headline: "A Repeatable Framework for Discovering and Building AI Businesses.",
  intro:
    "Most AI initiatives start with a technology and search for a problem. This framework starts with the market. Each stage has an explicit objective, concrete deliverables, and a measurable gate before anything is built, so the output is business outcomes, not experiments.",
  stages: [
    {
      id: "discover",
      label: "Discover",
      icon: "Search",
      summary:
        "Continuously identify business problems, industry inefficiencies, emerging technologies, underserved markets, and unmet customer needs.",
      objective:
        "Build and maintain a living pipeline of AI business opportunities sourced from clients, industries, and emerging technology shifts.",
      activities: [
        "Structured conversations with client executives and GFT account teams.",
        "Industry scanning across banking, sustainability, social impact, and enterprise operations.",
        "Technology watch on agentic AI, voice agents, retrieval systems, and automation platforms.",
        "Capture of repeatable problems seen across multiple engagements.",
      ],
      deliverables: ["Opportunity pipeline", "Opportunity one-pagers", "Market signal briefs"],
      businessValue:
        "A steady flow of qualified ideas that originate from real demand rather than from internal assumptions.",
      kpis: ["Opportunities logged per quarter", "Share sourced from client conversations", "Industries covered"],
    },
    {
      id: "evaluate",
      label: "Evaluate",
      icon: "Scale",
      summary:
        "Assess commercial potential, customer demand, technical feasibility, competition, implementation complexity, and strategic alignment with GFT.",
      objective:
        "Rank opportunities objectively so that time and engineering capacity flow to the ones with the highest expected commercial return.",
      activities: [
        "Scoring against a shared rubric: market size, urgency, willingness to pay, feasibility, fit.",
        "Competitive mapping and differentiation analysis.",
        "Early feasibility review with GFT architects and AI leads.",
        "Portfolio review with regional leadership.",
      ],
      deliverables: ["Scored opportunity portfolio", "Go / no-go recommendations", "Feasibility notes"],
      businessValue:
        "Fewer false starts. Engineering effort concentrates on opportunities that can realistically become revenue.",
      kpis: ["Opportunities evaluated", "Average cycle time to decision", "Portfolio balance across industries"],
    },
    {
      id: "validate",
      label: "Validate",
      icon: "FlaskConical",
      summary:
        "Engage potential customers, develop business cases, evaluate pricing models, and test market demand.",
      objective:
        "Prove, with real customers, that a problem is worth paying to solve before committing a build.",
      activities: [
        "Customer discovery interviews and problem validation sessions.",
        "Business case development with revenue model options.",
        "Pricing and packaging hypotheses tested with buyers.",
        "Letters of intent or paid discovery engagements where appropriate.",
      ],
      deliverables: ["Validated business case", "Pricing hypothesis", "Design-partner shortlist"],
      businessValue:
        "Investment decisions backed by evidence of demand, reducing the risk of building products nobody buys.",
      kpis: ["Customer problems validated", "Design partners engaged", "Business cases approved"],
    },
    {
      id: "build",
      label: "Build",
      icon: "Hammer",
      summary:
        "Collaborate with GFT's technology teams to rapidly develop AI-powered prototypes, MVPs, and enterprise-ready solutions.",
      objective:
        "Turn validated cases into working solutions quickly, using GFT's platforms, engineering teams, and delivery standards.",
      activities: [
        "Scope minimum viable products with clear success criteria.",
        "Coordinate squads drawn from existing GFT engineering and AI teams.",
        "Leverage GFT platforms and accelerators wherever they fit.",
        "Run pilots with design partners and capture outcome data.",
      ],
      deliverables: ["Prototype or MVP", "Pilot results", "Enterprise-readiness assessment"],
      businessValue:
        "Shorter time from idea to a sellable solution, built on infrastructure GFT already operates.",
      kpis: ["Pilots launched", "Time from validation to pilot", "Pilot success rate"],
    },
    {
      id: "commercialize",
      label: "Commercialize",
      icon: "Megaphone",
      summary:
        "Create go-to-market strategies, identify customers, establish partnerships, and develop new revenue opportunities.",
      objective:
        "Convert pilots into commercial offerings with clear positioning, pricing, and a sales motion that GFT's teams can run.",
      activities: [
        "Define the offering, pricing, and packaging.",
        "Enable sales and account teams with playbooks and demos.",
        "Secure first paying customers and reference accounts.",
        "Establish partnerships that accelerate distribution.",
      ],
      deliverables: ["Go-to-market plan", "Sales playbook", "First commercial contracts"],
      businessValue:
        "New revenue lines and higher-value engagements that go beyond time-and-materials delivery.",
      kpis: ["Commercial proposals issued", "Revenue pipeline created", "Partnerships signed"],
    },
    {
      id: "scale",
      label: "Scale",
      icon: "TrendingUp",
      summary:
        "Transform successful solutions into reusable assets, commercial offerings, recurring revenue models, and international business opportunities.",
      objective:
        "Make what works repeatable: productize it, take it to new markets, and hand it to the teams that will run it at scale.",
      activities: [
        "Productize solutions into reusable, licensable assets.",
        "Expand into additional countries and industries.",
        "Transition mature offerings to GFT business units.",
        "Reinvest learnings into the next cycle of discovery.",
      ],
      deliverables: ["Reusable asset catalogue", "Expansion roadmap", "Operating handover"],
      businessValue:
        "Recurring revenue, intellectual property, and a growing portfolio of AI businesses with GFT's name on them.",
      kpis: ["Reusable assets created", "Markets entered", "Recurring revenue share"],
    },
  ] satisfies EngineStage[],
  lifecycle: ["Opportunity", "Validation", "MVP", "Commercialization", "Scale"],
};
