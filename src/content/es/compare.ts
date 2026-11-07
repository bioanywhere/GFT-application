import type { CompareDimension, Emphasis, ImpactIndustry } from "../compare";
import { compareNavigation as enCompareNavigation } from "../compare";
import type {
  compareRoles as enCompareRoles, compareHero as enCompareHero, compareFocus as enCompareFocus, compareImpact as enCompareImpact,
  compareModel as enCompareModel, compareFit as enCompareFit, comparePriorities as enComparePriorities, compareClosing as enCompareClosing,
} from "../compare";

const navLabels: Record<(typeof enCompareNavigation)[number]["id"], string> = {
  "cmp-hero": "Visión general",
  "cmp-table": "Lado a lado",
  "cmp-focus": "Enfoque estratégico",
  "cmp-impact": "Explorador de impacto",
  "cmp-model": "Modelo complementario",
  "cmp-fit": "Mi encaje",
  "cmp-guide": "Guía de prioridades",
  "cmp-contact": "Contacto",
};
export const compareNavigation = enCompareNavigation.map((n) => ({ id: n.id, label: navLabels[n.id] }));

export const compareRoles: typeof enCompareRoles = {
  ai: { id: "ai", name: "Head of AI", short: "Head of AI", tagline: "Hacer que la IA funcione con eficacia en toda la organización.", orientation: "Orientado a la ejecución", color: "var(--accent-cyan)", color2: "var(--accent-emerald)", href: "/head-of-ai", icon: "Cpu" },
  ventures: { id: "ventures", name: "Head of AI Ventures & Business Innovation", short: "Head of AI Ventures", tagline: "Convertir la IA en nuevas oportunidades de negocio e ingresos.", orientation: "Orientado al crecimiento", color: "var(--accent-violet)", color2: "var(--accent-magenta)", href: "/", icon: "Rocket" },
};

export const compareHero: typeof enCompareHero = {
  eyebrow: "Comparación estratégica · Dos contribuciones de liderazgo ejecutivo",
  headline: "Dos formas de contribuir al futuro de la IA en GFT.",
  description:
    "Head of AI hace que la IA funcione en toda la organización: estrategia, ingeniería, adopción, gobernanza, escala. Head of AI Ventures & Business Innovation convierte la IA en nuevos negocios: oportunidades, productos, mercados, ingresos. Ambas las propone el mismo candidato. Son alternativas, no un paquete.",
  chain: ["Estrategia de IA", "Capacidades de IA", "Innovación de negocio", "Comercialización", "Crecimiento de ingresos"],
  chainNote: "Head of AI es dueño de la primera mitad de esta cadena. Head of AI Ventures, de la segunda. Cualquiera de los dos roles fortalece el conjunto.",
};

export const compareDimensions: CompareDimension[] = [
  { dimension: "Misión principal", ai: "Liderar la estrategia, la implementación y la transformación organizacional con IA", ventures: "Identificar, construir y comercializar nuevas oportunidades de negocio impulsadas por IA" },
  { dimension: "Enfoque principal", ai: "Capacidades de IA, adopción, ingeniería y excelencia operativa", ventures: "Innovación de negocio, creación de ventures, comercialización y crecimiento" },
  { dimension: "Objetivo estratégico", ai: "Maximizar el valor y la eficacia de la IA en las operaciones y soluciones existentes", ventures: "Crear nuevas líneas de negocio, productos, mercados y flujos de ingresos" },
  { dimension: "Enfoque de liderazgo", ai: "Equipos de ingeniería de IA, arquitectura técnica, gobernanza e implementación", ventures: "Desarrollo de negocio, emprendimiento, innovación y alianzas estratégicas" },
  { dimension: "Actividades clave", ai: "Estrategia de IA, desarrollo, despliegue, gobernanza y adopción empresarial", ventures: "Descubrimiento de oportunidades, validación de mercado, creación de ventures y comercialización" },
  { dimension: "Impacto de negocio", ai: "Eficiencia operativa, productividad, calidad y valor para el cliente", ventures: "Crecimiento de ingresos, expansión de mercado, innovación y creación de nuevos negocios" },
  { dimension: "Métricas de éxito", ai: "Adopción de IA, ganancias de productividad, éxito de despliegues, ROI y optimización de costos", ventures: "Oportunidades cualificadas, pipeline comercial, nuevos productos, alianzas e ingresos" },
  { dimension: "Grupos de interés principales", ai: "Liderazgo tecnológico, equipos de ingeniería, operaciones y unidades de negocio", ventures: "Liderazgo ejecutivo, desarrollo de negocio, equipos de innovación y clientes" },
  { dimension: "Aplicaciones en banca", ai: "Desplegar agentes de IA, optimizar flujos bancarios, mejorar el análisis de riesgo y las operaciones", ventures: "Crear nuevos productos, servicios y modelos de negocio bancarios impulsados por IA" },
  { dimension: "Aplicaciones en sostenibilidad", ai: "Implementar plataformas de IA para inteligencia ESG, reporte y analítica ambiental", ventures: "Identificar y comercializar nuevas soluciones tecnológicas de sostenibilidad y ESG" },
  { dimension: "Aplicaciones de impacto social", ai: "Desarrollar soluciones de IA escalables para educación, inclusión y medición de impacto", ventures: "Crear ventures comercialmente viables que aborden retos sociales y ambientales" },
  { dimension: "Propuesta de valor central", ai: "Hacer que la IA funcione con eficacia en toda la organización.", ventures: "Convertir la IA en nuevas oportunidades de negocio e ingresos.", highlight: true },
];

export const emphasisLabels: Record<Emphasis, string> = { 0: "Sin foco", 1: "De apoyo", 2: "Fuerte", 3: "Principal" };

export const compareFocus: typeof enCompareFocus = {
  title: "Visualización del enfoque estratégico",
  intro:
    "Posicionamiento cualitativo de cada rol en cinco dimensiones. Los niveles son Principal, Fuerte y De apoyo. Describen dónde concentra su atención cada rol, no una evaluación numérica.",
  axes: [
    { axis: "Tecnología", ai: 3, ventures: 2, note: "Head of AI es dueño de la arquitectura y la ingeniería; Ventures usa la tecnología para dar forma a productos vendibles." },
    { axis: "Estrategia", ai: 3, ventures: 2, note: "Head of AI define la hoja de ruta de IA; Ventures define la tesis de crecimiento de los nuevos negocios." },
    { axis: "Innovación", ai: 2, ventures: 3, note: "Head of AI innova en cómo se construye y opera la IA; Ventures innova en qué negocios hace posibles la IA." },
    { axis: "Operaciones", ai: 3, ventures: 1, note: "Head of AI es responsable de los sistemas en producción y de la transformación operativa." },
    { axis: "Desarrollo de negocio", ai: 1, ventures: 3, note: "Ventures vive con clientes, socios y pipeline; Head of AI apoya a ventas con el diseño de soluciones." },
  ],
  spectrum: [
    { left: "Mejorar cómo GFT entrega IA", right: "Crear nuevos negocios con IA", aiPos: 18, venturesPos: 84 },
    { left: "Operaciones internas y de clientes", right: "Nuevos mercados y clientes", aiPos: 25, venturesPos: 80 },
    { left: "Profundidad en ingeniería y gobernanza", right: "Alcance comercial y de alianzas", aiPos: 20, venturesPos: 82 },
  ],
};

export const compareImpact: typeof enCompareImpact = {
  title: "Explorador de impacto de negocio",
  intro: "Seleccione una industria para ver cómo crearía valor cada rol. Ambos se apoyan en la misma experiencia multisectorial; crean valor de tipos distintos.",
  industries: [
    { id: "banking", name: "Banca", icon: "Landmark",
      ai: { headline: "Operar IA en producción en las operaciones bancarias", points: ["Desplegar y gobernar agentes bancarios para journeys de clientes", "Automatizar operaciones intensivas en documentos y la vinculación", "Análisis de crédito y riesgo aumentado con IA con responsabilidad humana", "Asistentes de inteligencia de cumplimiento y riesgo"] },
      ventures: { headline: "Crear nuevos negocios financieros impulsados por IA", points: ["Agentes bancarios productizados vendidos como ofertas recurrentes", "Productos fintech de nueva generación con bancos socios", "IA para la inclusión financiera en segmentos desatendidos", "Productos de crédito inteligente para nuevos segmentos de clientes"] } },
    { id: "sustainability", name: "Sostenibilidad", icon: "Leaf",
      ai: { headline: "Implementar plataformas de inteligencia y reporte ESG", points: ["Consolidación de datos ESG y reporte respaldado por evidencia", "Analítica ambiental con datos satelitales y de sensores", "Redacción gobernada de divulgaciones con IA y trazas de auditoría", "Modelos de datos de sostenibilidad reutilizados entre clientes"] },
      ventures: { headline: "Comercializar soluciones tecnológicas de sostenibilidad", points: ["Inteligencia de sostenibilidad con IA como plataforma por suscripción", "Automatización del reporte ESG vendida a cotizadas y bancos", "Plataformas de datos de carbono y trazabilidad", "Inteligencia de finanzas sostenibles para bancos e inversionistas"] } },
    { id: "fintech", name: "Fintech", icon: "Sparkles",
      ai: { headline: "Construir capacidades de IA de nivel fintech", points: ["Servicios de IA seguros y en tiempo real dentro de productos fintech", "Gobernanza y evaluación de modelos para uso regulado", "Plataformas escalables para personalización de alto volumen", "Aceleradores de entrega para clientes fintech"] },
      ventures: { headline: "Lanzar ventures y alianzas fintech", points: ["Finanzas embebidas y productos personalizados con socios", "Alianzas de venture con bancos y proveedores tecnológicos", "Adaptación entre industrias de soluciones financieras probadas", "Nuevos modelos de ingresos: por uso y licenciamiento"] } },
    { id: "social", name: "Impacto social", icon: "HeartHandshake",
      ai: { headline: "Construir soluciones escalables para educación, inclusión y medición", points: ["Asistentes de aprendizaje con IA para instituciones", "Vinculación con voz como primer canal para programas de inclusión", "Plataformas estandarizadas de medición de impacto", "Automatización de servicios públicos con accesibilidad desde el diseño"] },
      ventures: { headline: "Crear ventures de impacto comercialmente viables", points: ["Ventures financiadas por alianzas con organizaciones de desarrollo", "Plataformas de educación e impacto como negocios por suscripción", "Servicios de IA para el sector público con activos reutilizables", "Soluciones tecnológicas para mercados desatendidos"] } },
    { id: "enterprise", name: "Operaciones empresariales", icon: "Workflow",
      ai: { headline: "Transformar las operaciones con agentes y automatización", points: ["Automatización agéntica de flujos con gobernanza", "Asistentes de conocimiento empresarial con permisos", "Agentes de voz multilingües para operaciones", "Práctica de operaciones y observabilidad de IA"] },
      ventures: { headline: "Convertir soluciones operativas en productos", points: ["Soluciones de negocio reutilizables licenciadas a clientes", "Agentes de voz con IA como oferta basada en uso", "Productos de IA para ventas y desarrollo de negocio", "Plataformas sectoriales a partir de trabajo repetible"] } },
  ] satisfies ImpactIndustry[],
};

export const compareModel: typeof enCompareModel = {
  title: "Modelo de liderazgo complementario",
  intro:
    "Si GFT decidiera alguna vez seguir ambas direcciones, las dos funciones se reforzarían mutuamente. Head of AI construye y opera la base de capacidades; Head of AI Ventures convierte esa base en nuevos negocios y devuelve la demanda del mercado a la hoja de ruta. Es un modelo de cómo se relacionan, no una recomendación de crear ambas posiciones.",
  loop: [
    { id: "strategy", label: "Estrategia y hoja de ruta de IA", owner: "ai" },
    { id: "capabilities", label: "Plataformas, ingeniería, gobernanza", owner: "ai" },
    { id: "innovation", label: "Descubrimiento y validación de oportunidades", owner: "ventures" },
    { id: "commercialization", label: "Productos, alianzas, salida al mercado", owner: "ventures" },
    { id: "revenue", label: "Crecimiento de ingresos y expansión de mercado", owner: "ventures" },
    { id: "feedback", label: "La demanda del mercado retroalimenta la hoja de ruta", owner: "both" },
  ],
  handoffs: [
    { from: "Head of AI", to: "Head of AI Ventures", what: "Capacidades listas para producción, arquitecturas de referencia y capacidad de entrega que hacen creíbles y rápidas de construir las nuevas ofertas." },
    { from: "Head of AI Ventures", to: "Head of AI", what: "Problemas de clientes validados, señales de precio y requisitos de nuevos mercados que afinan la hoja de ruta de IA y las prioridades de plataforma." },
    { from: "Ambos", to: "Liderazgo de GFT", what: "Una sola historia coherente: IA que funciona en producción e IA que abre nuevos ingresos, medida en un cuadro de mando compartido." },
  ],
  message: {
    ai: "Head of AI asegura que la IA se adopte estratégicamente, se ejecute técnicamente, se gobierne con eficacia y se escale con éxito.",
    ventures: "Head of AI Ventures & Business Innovation asegura que la IA se aproveche continuamente para descubrir nuevas oportunidades, crear productos innovadores, entrar en nuevos mercados y generar ingresos adicionales.",
    caveat: "Son dos formas alternativas en que el candidato podría contribuir al crecimiento de GFT, según sus prioridades organizacionales. La comparación no sugiere que GFT deba crear ambas posiciones.",
  },
};

export const compareFit: typeof enCompareFit = {
  title: "Mi encaje único para cualquiera de los dos roles",
  intro:
    "Las mismas cuatro fortalezas sustentan ambas propuestas. Lo que cambia es cuáles lideran. Para Head of AI, lideran la profundidad en ingeniería y el liderazgo como CTO. Para Head of AI Ventures, lideran el emprendimiento y el desarrollo de negocio multisectorial.",
  strengths: [
    { id: "engineering", title: "Ingeniería de IA práctica", icon: "Cpu", evidence: "Diseñó y construyó sistemas de LLM, RAG, agentes y voz con IA en producción en Bioanywhere y SDG Investors.", ai: 3, ventures: 2 },
    { id: "cto", title: "Liderazgo como CTO", icon: "Building2", evidence: "Lideró la estrategia tecnológica, equipos internacionales de ingeniería y la arquitectura empresarial en Legado; fundador-CTO en mindtalks.ai.", ai: 3, ventures: 2 },
    { id: "entrepreneur", title: "Emprendimiento", icon: "Rocket", evidence: "Fundó Forward, mindtalks.ai y Bioanywhere; cofundó SDG Investors; plataforma patentada con más de 50 millones de personas alcanzadas en 10 países.", ai: 2, ventures: 3 },
    { id: "industries", title: "Experiencia de negocio multisectorial", icon: "Globe2", evidence: "Banca, fintech, un regulador financiero, la administración de una ciudad, sostenibilidad, impacto social y tecnología empresarial a lo largo de más de 18 años.", ai: 2, ventures: 3 },
  ],
  closing: "Un candidato capaz de liderar tanto la ingeniería de la IA como el negocio de la IA puede ser eficaz en cualquiera de los dos roles, y puede ver con claridad el otro lado de la cadena desde el asiento que GFT elija.",
};

export const comparePriorities: typeof enComparePriorities = {
  title: "¿Qué contribución encaja con las prioridades actuales de GFT?",
  intro: "Seleccione las prioridades que más importan hoy en la región. La guía indica para cuál de las propuestas están diseñadas.",
  options: [
    { id: "adoption", label: "Escalar la adopción de IA en la entrega y en los clientes", role: "ai" },
    { id: "production", label: "Llevar más soluciones de IA a producción de forma confiable", role: "ai" },
    { id: "governance", label: "Fortalecer la gobernanza y la IA responsable", role: "ai" },
    { id: "efficiency", label: "Reducir el costo operativo y aumentar la productividad", role: "ai" },
    { id: "revenue", label: "Abrir nuevos flujos de ingresos y líneas de negocio", role: "ventures" },
    { id: "markets", label: "Entrar en nuevas industrias y mercados", role: "ventures" },
    { id: "products", label: "Construir ofertas productizadas con ingresos recurrentes", role: "ventures" },
    { id: "partnerships", label: "Crear ventures y alianzas estratégicas", role: "ventures" },
  ],
};

export const compareClosing: typeof enCompareClosing = {
  headline: "Un candidato. Dos formas de crear valor.",
  text:
    "Sea cual sea la contribución que GFT priorice, el objetivo es el mismo: conectar la inteligencia artificial, el liderazgo tecnológico, la estrategia de negocio y el emprendimiento en resultados medibles para GFT y sus clientes.",
  emailSubject: "Head of AI / AI Ventures — GFT Technologies",
};
