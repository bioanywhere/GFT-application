import type { Locale } from "./locale";

export const pageMeta: Record<Locale, Record<"ventures" | "ai" | "compare" | "venturesSummary" | "aiSummary", { title: string; description: string }>> = {
  en: {
    ventures: { title: "Chief AI Ventures Officer (CAIVO) · Executive Proposal for GFT Technologies", description: "An independent executive proposal prepared for GFT Technologies: turning artificial intelligence into new business opportunities, and opportunities into revenue." },
    ai: { title: "CAIO — Chief AI Officer · Executive Proposal for GFT Technologies", description: "An execution-oriented proposal by Andrés García Montoya for a regional CAIO function at GFT Technologies: AI strategy, engineering, enterprise adoption, governance, and measurable impact." },
    compare: { title: "CAIO vs. CAIVO · Strategic Comparison", description: "An interactive executive comparison of two leadership proposals by Andrés García Montoya for GFT Technologies: CAIO and Chief AI Ventures Officer (CAIVO)." },
    venturesSummary: { title: "Executive Summary · CAIVO", description: "One-page executive summary of the Chief AI Ventures Officer (CAIVO) proposal for GFT Technologies by Andrés García Montoya." },
    aiSummary: { title: "Executive Summary · CAIO — Chief AI Officer", description: "One-page executive summary of the CAIO proposal for GFT Technologies by Andrés García Montoya." },
  },
  es: {
    ventures: { title: "Chief AI Ventures Officer (CAIVO) · Propuesta ejecutiva para GFT Technologies", description: "Propuesta ejecutiva independiente preparada para GFT Technologies: convertir la inteligencia artificial en nuevas oportunidades de negocio, y las oportunidades en ingresos." },
    ai: { title: "CAIO — Chief AI Officer · Propuesta ejecutiva para GFT Technologies", description: "Propuesta orientada a la ejecución de Andrés García Montoya para una función regional de CAIO en GFT Technologies: estrategia de IA, ingeniería, adopción empresarial, gobernanza e impacto medible." },
    compare: { title: "CAIO vs. CAIVO · Comparación estratégica", description: "Comparación ejecutiva interactiva de dos propuestas de liderazgo de Andrés García Montoya para GFT Technologies: CAIO y Chief AI Ventures Officer (CAIVO)." },
    venturesSummary: { title: "Resumen ejecutivo · CAIVO", description: "Resumen ejecutivo de una página de la propuesta Chief AI Ventures Officer (CAIVO) para GFT Technologies, por Andrés García Montoya." },
    aiSummary: { title: "Resumen ejecutivo · CAIO — Chief AI Officer", description: "Resumen ejecutivo de una página de la propuesta CAIO para GFT Technologies, por Andrés García Montoya." },
  },
};
