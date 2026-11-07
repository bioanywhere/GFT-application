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
  { id: "ventures", path: "/", label: "Chief AI Ventures Officer", short: "CAIVO", title: "Chief AI Ventures Officer (CAIVO)", tone: "growth" },
  { id: "ai", path: "/head-of-ai", label: "Chief AI Officer", short: "CAIO", title: "CAIO — Chief AI Officer", tone: "execution" },
  { id: "compare", path: "/compare", label: "Compare Both", short: "Compare", title: "Strategic Comparison", tone: "neutral" },
];

export function proposalForPath(pathname: string): ProposalId {
  const p = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  if (p.startsWith("/head-of-ai")) return "ai";
  if (p.startsWith("/compare")) return "compare";
  return "ventures";
}
