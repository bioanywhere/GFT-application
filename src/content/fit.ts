import type { IconName } from "./types";

export interface FitData {
  headline: string;
  intro: string;
  role: string;
  mission: string;
  responsibilities: string[];
  collaborators: { id: string; name: string; icon: IconName; how: string }[];
  complementNote: string;
}

export const fit: FitData = {
  headline: "Complementing GFT's AI Leadership. Expanding Its Business Potential.",
  intro:
    "The proposed function does not own platforms, engineering, or delivery. It owns the pipeline of new AI businesses and works through the teams that already make GFT strong.",
  role: "Chief AI Ventures Officer (CAIVO)",
  mission:
    "Identify and transform emerging AI opportunities into commercially viable products, services, and business ventures that strengthen GFT's market position and create sustainable revenue growth.",
  responsibilities: [
    "AI opportunity discovery",
    "Business strategy",
    "New venture development",
    "AI product commercialization",
    "Business case validation",
    "Go-to-market strategy",
    "Strategic partnerships",
    "Industry expansion",
    "Cross-functional collaboration",
    "Revenue opportunity development",
  ],
  collaborators: [
    {
      id: "regional",
      name: "Regional executive leadership",
      icon: "Building2" as const,
      how: "Align the opportunity portfolio with regional growth priorities and report commercial progress quarterly.",
    },
    {
      id: "ai-leadership",
      name: "Existing AI leadership",
      icon: "Cpu" as const,
      how: "Bring market-validated use cases to GFT's AI platforms and teams, and feed product insight back from customers.",
    },
    {
      id: "banking",
      name: "Banking & financial services teams",
      icon: "Landmark" as const,
      how: "Co-develop new offerings for existing clients and extend proven banking solutions into new segments.",
    },
    {
      id: "sales",
      name: "Sales & business development teams",
      icon: "Megaphone" as const,
      how: "Source opportunities from account conversations and equip sales with validated offerings and playbooks.",
    },
    {
      id: "product",
      name: "Product innovation teams",
      icon: "Lightbulb" as const,
      how: "Share discovery and validation evidence, and co-own productization of repeatable solutions.",
    },
    {
      id: "engineering",
      name: "Software engineering & delivery teams",
      icon: "Workflow" as const,
      how: "Scope prototypes and pilots clearly, respect delivery standards, and hand over scaled solutions cleanly.",
    },
    {
      id: "partners",
      name: "Strategic partners",
      icon: "Handshake" as const,
      how: "Structure venture partnerships, technology alliances, and distribution agreements that accelerate growth.",
    },
  ],
  complementNote:
    "The function complements GFT's current AI investments rather than duplicating existing engineering and AI responsibilities. It adds the market-facing, entrepreneurial layer that turns capabilities into businesses.",
};
