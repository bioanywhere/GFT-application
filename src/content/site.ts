export const site = {
  name: "AI Ventures Proposal · Andrés García Montoya",
  shortName: "AI Ventures Proposal",
  url: "https://gft-ai-ventures.vercel.app",
  description:
    "An independent executive proposal prepared for GFT Technologies: turning artificial intelligence into new business opportunities, and opportunities into revenue.",
  tagline: "From Artificial Intelligence to Business Opportunities. From Opportunities to Revenue.",
  disclaimer:
    "Independent professional proposal prepared for GFT Technologies. This website is not an official GFT corporate website.",
  addressedTo: {
    name: "Rohan Malik",
    title: "Chief Operations Officer, Andean Region",
    company: "GFT Technologies",
  },
  candidate: {
    name: "Andrés García Montoya",
    headline: "Technology Executive | AI Entrepreneur | Business Innovation Leader",
    experienceLine: "18+ Years in Technology, Entrepreneurship & Digital Transformation",
    footerLine: "AI | Entrepreneurship | Technology | Business Innovation",
    email: "andresgarciamontoya@gmail.com",
    linkedin: "https://www.linkedin.com/in/andresgarciamontoya/",
    cvPath: "/documents/Andres-Garcia-Montoya-CV.pdf",
    cvFileName: "Andres-Garcia-Montoya-CV.pdf",
    photo: null as string | null,
    location: "Based in Colombia",
    languages: "English & Spanish",
    availability: "Available Immediately",
    openTo: "Open to Worldwide Opportunities",
  },
  positions: [
    "Head of AI",
    "Head of AI Ventures",
    "Head of AI Ventures & Business Innovation",
  ],
  primaryPosition: "Head of AI Ventures & Business Innovation",
  emailSubject: "AI Ventures & Business Innovation — GFT Technologies",
  emailBody:
    "Hi Andrés,\n\nI reviewed your AI Ventures & Business Innovation proposal for GFT Technologies and would like to schedule a conversation.\n\n",
} as const;

export function mailtoLink(subject = site.emailSubject, body = site.emailBody) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${site.candidate.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export const navigation = [
  { id: "proposal", label: "Proposal" },
  { id: "why-gft", label: "Why GFT" },
  { id: "engine", label: "Framework" },
  { id: "opportunities", label: "Opportunities" },
  { id: "why-andres", label: "Why Andrés" },
  { id: "experience", label: "Experience" },
  { id: "impact", label: "Impact" },
  { id: "roadmap", label: "90 Days" },
  { id: "fit", label: "Strategic Fit" },
  { id: "availability", label: "Availability" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navigation)[number]["id"];
