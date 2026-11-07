export const proposals = [
  { id: "ventures", href: "/", label: "Head of AI Ventures", short: "AI Ventures", title: "Head of AI Ventures & Business Innovation", tone: "growth" as const },
  { id: "ai", href: "/head-of-ai", label: "Head of AI", short: "Head of AI", title: "Head of AI", tone: "execution" as const },
  { id: "compare", href: "/compare", label: "Compare Both", short: "Compare", title: "Strategic Comparison", tone: "neutral" as const },
] as const;

export type ProposalId = (typeof proposals)[number]["id"];

export function proposalForPath(pathname: string): ProposalId {
  if (pathname.startsWith("/head-of-ai")) return "ai";
  if (pathname.startsWith("/compare")) return "compare";
  return "ventures";
}
