import type { Experience } from "./types";

export const experienceSection = {
  headline: "From Ideas to Scalable Technology Products.",
  intro:
    "Two decades of founding, building, and leading technology businesses across banking, fintech, sustainability, social impact, and artificial intelligence. Every initiative below was taken from concept to a working product in the market.",
  highlights: [
    { value: 18, suffix: "+", label: "Years of technology experience" },
    { value: 50, suffix: "M+", label: "People reached through mindtalks.ai" },
    { value: 10, suffix: "", label: "Countries reached" },
    { value: 4, suffix: "", label: "Technology ventures founded or co-founded" },
  ],
  domains: ["Banking", "Fintech", "Artificial Intelligence", "Sustainability", "Social Impact", "Public Sector", "Enterprise Technology"],
  verifiedNote:
    "All figures reflect the candidate's documented professional history. No revenue, investment, or customer figures are claimed beyond those documented.",
};

export const experiences: Experience[] = [
  {
    id: "bioanywhere",
    organization: "Bioanywhere",
    role: "Founder & Product Architect",
    tags: ["AI Product Development", "AI Agents", "Enterprise Automation"],
    period: "2024–2026",
    start: 2024,
    end: 2026,
    website: "https://bioanywhere.com",
    summary:
      "Independently designed and developed an AI-powered platform that turns sophisticated AI technologies into a practical, sellable product: real-time conversational voice agents for enterprises, available in more than 40 languages, with multi-tenant and white-label capabilities.",
    highlights: [
      "Real-time conversational voice agents over web and telephony.",
      "Large language models with retrieval-augmented generation for domain knowledge.",
      "AI tool orchestration connecting agents to thousands of enterprise applications.",
      "Cloud-native, multi-tenant, white-label architecture with secure authentication and analytics.",
      "Multilingual AI interactions supporting customer service and operations use cases.",
    ],
    technical: [
      "Python", "TypeScript", "Next.js", "LiveKit (WebRTC)", "PostgreSQL + pgvector", "LlamaIndex", "Drizzle ORM",
      "Deepgram & Cartesia", "Composio & MCP servers", "Google Cloud Run", "Docker & CI/CD", "SIP telephony",
    ],
    emphasis: "Demonstrates the ability to transform advanced AI technologies into practical products that enterprises can deploy.",
  },
  {
    id: "legado",
    organization: "Legado",
    role: "Chief Technology Officer",
    tags: ["Sustainability", "Technology Innovation", "Platform Strategy"],
    period: "2024–2025",
    start: 2024,
    end: 2025,
    website: "https://legado.green",
    summary:
      "Led technology strategy and development for a global sustainability platform focused on environmental and social impact, coordinating multidisciplinary teams and international contractors.",
    highlights: [
      "Evolved the platform architecture and led engineering execution across countries.",
      "Served as primary technical liaison with international partners, including Deloitte.",
      "Led the ecosystem's tokenization strategy and blockchain architecture decisions.",
      "Aligned business objectives, sustainability goals, and technology execution.",
    ],
    technical: ["Platform architecture", "Blockchain (Polygon smart contracts)", "Cloud infrastructure", "AI-powered features"],
    emphasis: "Executive leadership at the intersection of sustainability, technology, and international partnerships.",
  },
  {
    id: "sdg",
    organization: "SDG Investors / sdgtalks.ai",
    role: "Co-Founder & Software Development Manager",
    tags: ["AI", "Sustainability", "Impact Innovation"],
    period: "2020–2024",
    start: 2020,
    end: 2024,
    website: "https://sdgtalks.ai",
    summary:
      "Co-founded SDG Investors and led the development of AI-powered initiatives connecting technology with sustainability and social impact, including an AI-driven information platform that analyzes and publishes content aligned with the United Nations Sustainable Development Goals.",
    highlights: [
      "Designed the core architecture for LLM-powered content analysis and generation at scale.",
      "Delivered personalized, mission-driven content to users across universities in the United States.",
      "Led integration of AI chat capabilities for interactive exploration of SDG topics.",
      "Designed multilingual AI voice agents for social impact use cases within the related Social Impact Movement initiative.",
    ],
    technical: ["Python", "PHP", "MySQL", "AWS", "NLP pipelines", "LLM content generation"],
    emphasis: "Early, production-scale application of generative AI to a sustainability and social impact mission.",
  },
  {
    id: "mindtalks",
    organization: "mindtalks.ai",
    role: "Founder & CTO",
    tags: ["Technology Entrepreneurship", "Patented Technology", "Market Expansion"],
    period: "2017–2020",
    start: 2017,
    end: 2020,
    summary:
      "Founded and developed a patented digital survey technology platform that reached more than 50 million people across 10 countries, leading technological development and business expansion across Latin America with a seven-person team.",
    highlights: [
      "Patented survey technology recognized among the best cloud projects in Latin America.",
      "Reached more than 50 million people in 10 countries.",
      "Led a seven-person team through product development and regional expansion.",
    ],
    technical: ["JavaScript", "Cloud platforms", "Large-scale data collection"],
    emphasis: "Entrepreneurial execution, innovation, and experience bringing a technology product to scale across markets.",
  },
  {
    id: "forward",
    organization: "Forward",
    role: "Founder & Project Manager",
    tags: ["Technology", "Financial Innovation", "Banking"],
    period: "2007–2017",
    start: 2007,
    end: 2017,
    summary:
      "Founded and managed a technology company delivering solutions across industries, including financial services and banking, over a ten-year period. Work included fintech initiatives, digital process design, and business transformation.",
    highlights: [
      "Technology initiatives for banking and financial institutions, including a fintech patent.",
      "Project management and process design engagements with Grupo SURA, the Financial Superintendence of Colombia, the Mayor's Office of Bogotá, and the Ministry of Foreign Affairs.",
      "Digital procedure automation for public administration and enterprise clients.",
    ],
    technical: ["Project and portfolio management (OPM3)", "Process automation", "Enterprise systems"],
    emphasis: "Deep understanding of financial services, enterprise technology, and business operations in regulated environments.",
  },
];
