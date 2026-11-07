import type { Locale } from "./locale";

export const pageMeta: Record<Locale, Record<"ventures" | "ai" | "compare" | "venturesSummary" | "aiSummary", { title: string; description: string }>> = {
  en: {
    ventures: { title: "Head of AI Ventures & Business Innovation · Executive Proposal for GFT Technologies", description: "An independent executive proposal prepared for GFT Technologies: turning artificial intelligence into new business opportunities, and opportunities into revenue." },
    ai: { title: "Head of AI · Executive Proposal for GFT Technologies", description: "An execution-oriented proposal by Andrés García Montoya for a regional Head of AI function at GFT Technologies: AI strategy, engineering, enterprise adoption, governance, and measurable impact." },
    compare: { title: "Head of AI vs. Head of AI Ventures · Strategic Comparison", description: "An interactive executive comparison of two leadership proposals by Andrés García Montoya for GFT Technologies: Head of AI and Head of AI Ventures & Business Innovation." },
    venturesSummary: { title: "Executive Summary · Head of AI Ventures", description: "One-page executive summary of the Head of AI Ventures & Business Innovation proposal for GFT Technologies by Andrés García Montoya." },
    aiSummary: { title: "Executive Summary · Head of AI", description: "One-page executive summary of the Head of AI proposal for GFT Technologies by Andrés García Montoya." },
  },
  es: {
    ventures: { title: "Head of AI Ventures & Business Innovation · Propuesta ejecutiva para GFT Technologies", description: "Propuesta ejecutiva independiente preparada para GFT Technologies: convertir la inteligencia artificial en nuevas oportunidades de negocio, y las oportunidades en ingresos." },
    ai: { title: "Head of AI · Propuesta ejecutiva para GFT Technologies", description: "Propuesta orientada a la ejecución de Andrés García Montoya para una función regional de Head of AI en GFT Technologies: estrategia de IA, ingeniería, adopción empresarial, gobernanza e impacto medible." },
    compare: { title: "Head of AI vs. Head of AI Ventures · Comparación estratégica", description: "Comparación ejecutiva interactiva de dos propuestas de liderazgo de Andrés García Montoya para GFT Technologies: Head of AI y Head of AI Ventures & Business Innovation." },
    venturesSummary: { title: "Resumen ejecutivo · Head of AI Ventures", description: "Resumen ejecutivo de una página de la propuesta Head of AI Ventures & Business Innovation para GFT Technologies, por Andrés García Montoya." },
    aiSummary: { title: "Resumen ejecutivo · Head of AI", description: "Resumen ejecutivo de una página de la propuesta Head of AI para GFT Technologies, por Andrés García Montoya." },
  },
};
