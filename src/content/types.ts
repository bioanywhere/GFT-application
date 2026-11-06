export type IconName =
  | "Landmark"
  | "Leaf"
  | "HeartHandshake"
  | "Workflow"
  | "Rocket"
  | "Search"
  | "Scale"
  | "FlaskConical"
  | "Hammer"
  | "Megaphone"
  | "TrendingUp"
  | "Lightbulb"
  | "Cpu"
  | "Globe2"
  | "Target"
  | "Handshake"
  | "Users"
  | "BarChart3"
  | "Layers"
  | "Compass"
  | "Sparkles"
  | "Building2"
  | "ShieldCheck"
  | "Repeat";

export type CommercialModel =
  | "SaaS subscription"
  | "Enterprise licensing"
  | "Implementation & consulting"
  | "Managed AI services"
  | "Usage-based pricing"
  | "Venture partnership";

export type ValueDriver =
  | "Revenue growth"
  | "Operational efficiency"
  | "Market expansion"
  | "Competitive differentiation"
  | "Recurring revenue";

export interface Opportunity {
  id: string;
  industryId: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  customers: string[];
  commercialModels: CommercialModel[];
  businessValue: string;
  valueDrivers: ValueDriver[];
  capabilities: string[];
  validation: string;
  gftRelevance: string;
}

export interface Industry {
  id: string;
  name: string;
  short: string;
  icon: IconName;
  accent: "blue" | "emerald" | "amber" | "violet" | "magenta";
  summary: string;
  commercialValue: string[];
  opportunities: Opportunity[];
}

export interface EngineStage {
  id: string;
  label: string;
  icon: IconName;
  summary: string;
  objective: string;
  activities: string[];
  deliverables: string[];
  businessValue: string;
  kpis: string[];
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  tags: string[];
  period: string;
  start: number;
  end: number;
  website?: string;
  summary: string;
  highlights: string[];
  technical?: string[];
  emphasis: string;
}

export interface RoadmapPhase {
  id: string;
  range: string;
  title: string;
  focus: string;
  actions: string[];
  deliverable: string;
}

export interface Source {
  label: string;
  url: string;
  note: string;
}
