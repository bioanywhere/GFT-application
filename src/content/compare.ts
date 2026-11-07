import type { IconName } from "./types";

export const compareRoles = {
  ai: {
    id: "ai",
    name: "Head of AI",
    short: "Head of AI",
    tagline: "Make AI work effectively across the organization.",
    orientation: "Execution-oriented",
    color: "var(--accent-cyan)",
    color2: "var(--accent-emerald)",
    href: "/head-of-ai",
    icon: "Cpu" as IconName,
  },
  ventures: {
    id: "ventures",
    name: "Head of AI Ventures & Business Innovation",
    short: "Head of AI Ventures",
    tagline: "Turn AI into new business opportunities and revenue.",
    orientation: "Growth-oriented",
    color: "var(--accent-violet)",
    color2: "var(--accent-magenta)",
    href: "/",
    icon: "Rocket" as IconName,
  },
};

export const compareHero = {
  eyebrow: "Strategic Comparison · Two Executive Leadership Contributions",
  headline: "Two Ways to Contribute to GFT's AI Future.",
  description:
    "Head of AI makes AI work across the organization: strategy, engineering, adoption, governance, scale. Head of AI Ventures & Business Innovation turns AI into new businesses: opportunities, products, markets, revenue. Both are proposed by the same candidate. They are alternatives, not a package.",
  chain: ["AI Strategy", "AI Capabilities", "Business Innovation", "Commercialization", "Revenue Growth"],
  chainNote: "Head of AI owns the first half of this chain. Head of AI Ventures owns the second. Either role strengthens the whole.",
};

export interface CompareDimension {
  dimension: string;
  ai: string;
  ventures: string;
  highlight?: boolean;
}

export const compareDimensions: CompareDimension[] = [
  { dimension: "Primary Mission", ai: "Lead AI strategy, implementation, and organizational transformation", ventures: "Identify, build, and commercialize new AI-driven business opportunities" },
  { dimension: "Main Focus", ai: "AI capabilities, adoption, engineering, and operational excellence", ventures: "Business innovation, venture creation, commercialization, and growth" },
  { dimension: "Strategic Objective", ai: "Maximize the value and effectiveness of AI across existing operations and solutions", ventures: "Create new business lines, products, markets, and revenue streams" },
  { dimension: "Leadership Focus", ai: "AI engineering teams, technical architecture, governance, and implementation", ventures: "Business development, entrepreneurship, innovation, and strategic partnerships" },
  { dimension: "Key Activities", ai: "AI strategy, development, deployment, governance, and enterprise adoption", ventures: "Opportunity discovery, market validation, venture building, and commercialization" },
  { dimension: "Business Impact", ai: "Operational efficiency, productivity, quality, and customer value", ventures: "Revenue growth, market expansion, innovation, and new business creation" },
  { dimension: "Success Metrics", ai: "AI adoption, productivity gains, deployment success, ROI, and cost optimization", ventures: "Qualified opportunities, commercial pipeline, new products, partnerships, and revenue" },
  { dimension: "Main Stakeholders", ai: "Technology leadership, engineering teams, operations, and business units", ventures: "Executive leadership, business development, innovation teams, and customers" },
  { dimension: "Banking Applications", ai: "Deploy AI agents, optimize banking workflows, improve risk analysis and operations", ventures: "Create new AI-powered financial products, services, and banking business models" },
  { dimension: "Sustainability Applications", ai: "Implement AI platforms for ESG intelligence, reporting, and environmental analytics", ventures: "Identify and commercialize new sustainability and ESG technology solutions" },
  { dimension: "Social Impact Applications", ai: "Develop scalable AI solutions supporting education, inclusion, and impact measurement", ventures: "Create commercially viable ventures addressing social and environmental challenges" },
  { dimension: "Core Value Proposition", ai: "Make AI work effectively across the organization.", ventures: "Turn AI into new business opportunities and revenue.", highlight: true },
];

export type Emphasis = 0 | 1 | 2 | 3;
export const emphasisLabels: Record<Emphasis, string> = { 0: "Not a focus", 1: "Supporting", 2: "Strong", 3: "Primary" };

export const compareFocus = {
  title: "Strategic Focus Visualization",
  intro:
    "Qualitative positioning of each role across five dimensions. Levels are Primary, Strong, and Supporting. They describe where each role concentrates its attention, not a numerical assessment.",
  axes: [
    { axis: "Technology", ai: 3 as Emphasis, ventures: 2 as Emphasis, note: "Head of AI owns architecture and engineering; Ventures uses technology to shape sellable products." },
    { axis: "Strategy", ai: 3 as Emphasis, ventures: 2 as Emphasis, note: "Head of AI sets the AI roadmap; Ventures sets the growth thesis for new businesses." },
    { axis: "Innovation", ai: 2 as Emphasis, ventures: 3 as Emphasis, note: "Head of AI innovates in how AI is built and run; Ventures innovates in what businesses AI makes possible." },
    { axis: "Operations", ai: 3 as Emphasis, ventures: 1 as Emphasis, note: "Head of AI is accountable for production systems and operational transformation." },
    { axis: "Business Development", ai: 1 as Emphasis, ventures: 3 as Emphasis, note: "Ventures lives with customers, partners, and pipeline; Head of AI supports sales with solution design." },
  ],
  spectrum: [
    { left: "Improve how GFT delivers AI", right: "Create new businesses with AI", aiPos: 18, venturesPos: 84 },
    { left: "Internal & client operations", right: "New markets & customers", aiPos: 25, venturesPos: 80 },
    { left: "Engineering & governance depth", right: "Commercial & partnership reach", aiPos: 20, venturesPos: 82 },
  ],
};

export interface ImpactIndustry {
  id: string;
  name: string;
  icon: IconName;
  ai: { headline: string; points: string[] };
  ventures: { headline: string; points: string[] };
}

export const compareImpact = {
  title: "Business Impact Explorer",
  intro: "Select an industry to see how each role would create value in it. Both draw on the same cross-industry experience; they create different kinds of value.",
  industries: [
    {
      id: "banking",
      name: "Banking",
      icon: "Landmark",
      ai: { headline: "Run AI in production across banking operations", points: ["Deploy and govern banking agents for customer journeys", "Automate document-heavy operations and onboarding", "AI-augmented lending and risk analysis with human accountability", "Compliance and risk intelligence assistants"] },
      ventures: { headline: "Create new AI-powered financial businesses", points: ["Productized banking agents sold as recurring offerings", "Next-generation fintech products with bank partners", "AI for financial inclusion in underserved segments", "Intelligent lending products for new customer segments"] },
    },
    {
      id: "sustainability",
      name: "Sustainability",
      icon: "Leaf",
      ai: { headline: "Implement ESG intelligence and reporting platforms", points: ["ESG data consolidation and evidence-backed reporting", "Environmental analytics from satellite and sensor data", "Governed AI drafting of disclosures with audit trails", "Sustainability data models reused across clients"] },
      ventures: { headline: "Commercialize sustainability technology solutions", points: ["AI sustainability intelligence as a subscription platform", "ESG reporting automation sold to listed companies and banks", "Carbon data and traceability platforms", "Sustainable finance intelligence for banks and investors"] },
    },
    {
      id: "fintech",
      name: "Fintech",
      icon: "Sparkles",
      ai: { headline: "Engineer fintech-grade AI capabilities", points: ["Real-time, secure AI services inside fintech products", "Model governance and evaluation for regulated use", "Scalable platforms for high-volume personalization", "Delivery accelerators for fintech clients"] },
      ventures: { headline: "Launch fintech ventures and partnerships", points: ["Embedded finance and personalized products with partners", "Venture partnerships with banks and technology vendors", "Cross-industry adaptation of proven financial solutions", "New revenue models: usage-based and licensing"] },
    },
    {
      id: "social",
      name: "Social Impact",
      icon: "HeartHandshake",
      ai: { headline: "Build scalable solutions for education, inclusion, and measurement", points: ["AI learning assistants for institutions", "Voice-first onboarding for inclusion programs", "Standardized impact measurement platforms", "Public-service automation with accessibility by design"] },
      ventures: { headline: "Create commercially viable impact ventures", points: ["Partnership-funded ventures with development organizations", "Education and impact platforms as subscription businesses", "Public-sector AI services with reusable assets", "Technology solutions for underserved markets"] },
    },
    {
      id: "enterprise",
      name: "Enterprise Operations",
      icon: "Workflow",
      ai: { headline: "Transform operations with agents and automation", points: ["Agentic workflow automation with governance", "Enterprise knowledge assistants with permissions", "Multilingual voice agents for operations", "AI operations and observability practice"] },
      ventures: { headline: "Turn operational solutions into products", points: ["Reusable business solutions licensed to clients", "AI voice agents as a usage-based offering", "Sales and business development AI products", "Industry-specific platforms from repeatable work"] },
    },
  ] satisfies ImpactIndustry[],
};

export const compareModel = {
  title: "Complementary Leadership Model",
  intro:
    "If GFT ever chose to pursue both directions, the two functions would reinforce each other. Head of AI builds and runs the capability base; Head of AI Ventures turns that base into new businesses and feeds market demand back into the roadmap. This is a model of how they relate, not a recommendation to create both positions.",
  loop: [
    { id: "strategy", label: "AI strategy & roadmap", owner: "ai" as const },
    { id: "capabilities", label: "Platforms, engineering, governance", owner: "ai" as const },
    { id: "innovation", label: "Opportunity discovery & validation", owner: "ventures" as const },
    { id: "commercialization", label: "Products, partnerships, go-to-market", owner: "ventures" as const },
    { id: "revenue", label: "Revenue growth & market expansion", owner: "ventures" as const },
    { id: "feedback", label: "Market demand feeds back into the roadmap", owner: "both" as const },
  ],
  handoffs: [
    { from: "Head of AI", to: "Head of AI Ventures", what: "Production-ready capabilities, reference architectures, and delivery capacity that make new offerings credible and fast to build." },
    { from: "Head of AI Ventures", to: "Head of AI", what: "Validated customer problems, pricing signals, and new-market requirements that sharpen the AI roadmap and platform priorities." },
    { from: "Both", to: "GFT leadership", what: "One coherent story: AI that works in production and AI that opens new revenue, measured on a shared scorecard." },
  ],
  message: {
    ai: "Head of AI ensures that AI is strategically adopted, technically executed, effectively governed, and successfully scaled.",
    ventures: "Head of AI Ventures & Business Innovation ensures that AI is continuously leveraged to discover new opportunities, create innovative products, enter new markets, and generate additional business revenue.",
    caveat: "These are two alternative ways the candidate could contribute to GFT's growth, depending on its organizational priorities. The comparison does not suggest that GFT must create both positions.",
  },
};

export const compareFit = {
  title: "My Unique Fit for Either Role",
  intro:
    "The same four strengths support both proposals. What changes is which ones lead. For Head of AI, engineering depth and CTO leadership lead. For Head of AI Ventures, entrepreneurship and cross-industry business development lead.",
  strengths: [
    { id: "engineering", title: "Hands-on AI engineering", icon: "Cpu" as IconName, evidence: "Designed and built production LLM, RAG, agentic, and voice-AI systems at Bioanywhere and SDG Investors.", ai: 3 as Emphasis, ventures: 2 as Emphasis },
    { id: "cto", title: "CTO leadership", icon: "Building2" as IconName, evidence: "Led technology strategy, international engineering teams, and enterprise architecture at Legado; founder-CTO at mindtalks.ai.", ai: 3 as Emphasis, ventures: 2 as Emphasis },
    { id: "entrepreneur", title: "Entrepreneurship", icon: "Rocket" as IconName, evidence: "Founded Forward, mindtalks.ai, and Bioanywhere; co-founded SDG Investors; patented platform reaching 50M+ people in 10 countries.", ai: 2 as Emphasis, ventures: 3 as Emphasis },
    { id: "industries", title: "Cross-industry business experience", icon: "Globe2" as IconName, evidence: "Banking, fintech, a financial regulator, city government, sustainability, social impact, and enterprise technology over 18+ years.", ai: 2 as Emphasis, ventures: 3 as Emphasis },
  ],
  closing: "A candidate who can lead both the engineering of AI and the business of AI can be effective in either role, and can see the other side of the chain clearly from whichever seat GFT chooses.",
};

export const comparePriorities = {
  title: "Which contribution fits GFT's priorities right now?",
  intro: "Select the priorities that matter most to the region today. The guide indicates which proposal is designed for them.",
  options: [
    { id: "adoption", label: "Scale AI adoption across delivery and clients", role: "ai" as const },
    { id: "production", label: "Get more AI solutions reliably into production", role: "ai" as const },
    { id: "governance", label: "Strengthen AI governance and responsible AI", role: "ai" as const },
    { id: "efficiency", label: "Reduce operational cost and raise productivity", role: "ai" as const },
    { id: "revenue", label: "Open new revenue streams and business lines", role: "ventures" as const },
    { id: "markets", label: "Enter new industries and markets", role: "ventures" as const },
    { id: "products", label: "Build productized, recurring-revenue offerings", role: "ventures" as const },
    { id: "partnerships", label: "Create strategic ventures and partnerships", role: "ventures" as const },
  ],
};

export const compareClosing = {
  headline: "One Candidate. Two Ways to Create Value.",
  text:
    "Whichever contribution GFT prioritizes, the goal is the same: connect artificial intelligence, technology leadership, business strategy, and entrepreneurship into measurable results for GFT and its clients.",
  emailSubject: "Head of AI / AI Ventures — GFT Technologies",
};

export const compareNavigation = [
  { id: "cmp-hero", label: "Overview" },
  { id: "cmp-table", label: "Side by Side" },
  { id: "cmp-focus", label: "Strategic Focus" },
  { id: "cmp-impact", label: "Impact Explorer" },
  { id: "cmp-model", label: "Complementary Model" },
  { id: "cmp-fit", label: "My Fit" },
  { id: "cmp-guide", label: "Priority Guide" },
  { id: "cmp-contact", label: "Contact" },
] as const;
