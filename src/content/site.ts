export interface SiteContent {
  name: string;
  shortName: string;
  url: string;
  description: string;
  tagline: string;
  disclaimer: string;
  addressedTo: { name: string; title: string; company: string };
  candidate: {
    name: string; headline: string; experienceLine: string; footerLine: string; email: string; linkedin: string;
    cvPath: string; cvFileName: string; photo: string | null; location: string; languages: string; availability: string; openTo: string;
  };
  positions: string[];
  primaryPosition: string;
  emailSubject: string;
  emailBody: string;
}

export const site: SiteContent = {
  name: "Executive Proposals · Andrés García Montoya",
  shortName: "Executive Proposals",
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
    photo: null,
    location: "Based in Colombia",
    languages: "English & Spanish",
    availability: "Available Immediately",
    openTo: "Open to Worldwide Opportunities",
  },
  positions: ["CAIO — Chief AI Officer", "Chief AI Ventures Officer (CAIVO)"],
  primaryPosition: "Chief AI Ventures Officer (CAIVO)",
  emailSubject: "Chief AI Ventures Officer (CAIVO) — GFT Technologies",
  emailBody:
    "Hi Andrés,\n\nI reviewed your Chief AI Ventures Officer (CAIVO) proposal for GFT Technologies and would like to schedule a conversation.\n\n",
};

export function mailtoLink(subject: string = site.emailSubject, body: string = site.emailBody) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${site.candidate.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export type SectionId = "proposal" | "why-gft" | "engine" | "opportunities" | "why-andres" | "experience" | "impact" | "roadmap" | "fit" | "availability" | "contact";

export const navigation: readonly { id: SectionId; label: string }[] = [
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
]; 
