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
  { id: "ai", path: "/", label: "Chief AI Officer", short: "CAIO", title: "CAIO — Chief AI Officer", tone: "execution" },
  { id: "ventures", path: "/ai-ventures", label: "Chief AI Ventures Officer", short: "CAIVO", title: "Chief AI Ventures Officer (CAIVO)", tone: "growth" },
  { id: "compare", path: "/compare", label: "Compare Both", short: "Compare", title: "Strategic Comparison", tone: "neutral" },
];

export function proposalForPath(pathname: string): ProposalId {
  const p = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  if (p.startsWith("/ai-ventures")) return "ventures";
  if (p.startsWith("/compare")) return "compare";
  return "ai";
}
