export type ProposalId = "ventures" | "ai" | "compare";
export interface ProposalTab {
  id: ProposalId;
  path: string;
  label: string;
  short: string;
  title: string;
  tone: "growth" | "execution" | "neutral";
}

export const proposals: ProposalTab[] = [
  { id: "ventures", path: "/", label: "Head of AI Ventures", short: "AI Ventures", title: "Head of AI Ventures & Business Innovation", tone: "growth" },
  { id: "ai", path: "/head-of-ai", label: "Head of AI", short: "Head of AI", title: "Head of AI", tone: "execution" },
  { id: "compare", path: "/compare", label: "Compare Both", short: "Compare", title: "Strategic Comparison", tone: "neutral" },
];

export function proposalForPath(pathname: string): ProposalId {
  const p = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  if (p.startsWith("/head-of-ai")) return "ai";
  if (p.startsWith("/compare")) return "compare";
  return "ventures";
}
