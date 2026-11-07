import type { SiteContent } from "../site";
import { navigation as enNavigation, site as enSite } from "../site";
import type { hero as enHero } from "../hero";
import type { whyGft as enWhyGft } from "../why-gft";
import type { engine as enEngine } from "../engine";
import type { profile as enProfile } from "../profile";
import type { experienceSection as enExperienceSection, experiences as enExperiences } from "../experience";
import type { impact as enImpact } from "../impact";
import type { RoadmapData } from "../roadmap";
import type { FitData } from "../fit";
import type { availability as enAvailability } from "../availability";
import type { closing as enClosing } from "../closing";
import type { ProposalTab } from "../proposals";

export const site: SiteContent = {
  ...enSite,
  name: "Propuesta AI Ventures · Andrés García Montoya",
  shortName: "Propuesta AI Ventures",
  description:
    "Propuesta ejecutiva independiente preparada para GFT Technologies: convertir la inteligencia artificial en nuevas oportunidades de negocio, y las oportunidades en ingresos.",
  tagline: "De la inteligencia artificial a las oportunidades de negocio. De las oportunidades a los ingresos.",
  disclaimer:
    "Propuesta profesional independiente preparada para GFT Technologies. Este sitio web no es un sitio corporativo oficial de GFT.",
  addressedTo: { name: "Rohan Malik", title: "Chief Operations Officer, Región Andina", company: "GFT Technologies" },
  candidate: {
    ...enSite.candidate,
    headline: "Ejecutivo de tecnología | Emprendedor en IA | Líder de innovación de negocio",
    experienceLine: "18+ años en tecnología, emprendimiento y transformación digital",
    footerLine: "IA | Emprendimiento | Tecnología | Innovación de negocio",
    location: "Con base en Colombia",
    languages: "Inglés y español",
    availability: "Disponible de inmediato",
    openTo: "Abierto a oportunidades en todo el mundo",
  },
  emailSubject: "AI Ventures & Business Innovation — GFT Technologies",
  emailBody:
    "Hola Andrés:\n\nRevisé tu propuesta de AI Ventures & Business Innovation para GFT Technologies y me gustaría agendar una conversación.\n\n",
};

const navLabels: Record<(typeof enNavigation)[number]["id"], string> = {
  proposal: "Propuesta",
  "why-gft": "Por qué GFT",
  engine: "Marco de trabajo",
  opportunities: "Oportunidades",
  "why-andres": "Por qué Andrés",
  experience: "Experiencia",
  impact: "Impacto",
  roadmap: "90 días",
  fit: "Encaje estratégico",
  availability: "Disponibilidad",
  contact: "Contacto",
};
export const navigation = enNavigation.map((n) => ({ id: n.id, label: navLabels[n.id] }));

export const hero: typeof enHero = {
  eyebrow: "Una propuesta estratégica de crecimiento para GFT Technologies",
  headline: "Convertir la inteligencia artificial en nuevas oportunidades de negocio.",
  supporting: "Head of AI Ventures & Business Innovation",
  description:
    "Una propuesta ejecutiva para acelerar el crecimiento de GFT identificando oportunidades de mercado emergentes, construyendo soluciones de negocio impulsadas por IA y transformando la innovación en flujos de ingresos escalables.",
  valueStatement:
    "Conecto la inteligencia artificial, la estrategia de negocio y la ejecución: identifico oportunidades, construyo soluciones y abro nuevos caminos de crecimiento.",
  primaryCtas: [
    { label: "Explorar mi propuesta", target: "why-gft" },
    { label: "Descubrir oportunidades de IA", target: "opportunities" },
  ],
  secondaryCtas: [
    { label: "Ver mi experiencia", target: "experience" },
    { label: "Agendar una conversación", target: "email" },
  ],
  networkNodes: [
    { id: "banking", label: "Banca", angle: -90 },
    { id: "sustainability", label: "Sostenibilidad", angle: -30 },
    { id: "social", label: "Impacto social", angle: 30 },
    { id: "fintech", label: "Fintech", angle: 90 },
    { id: "automation", label: "Automatización", angle: 150 },
    { id: "emerging", label: "Mercados emergentes", angle: 210 },
  ],
};

export const whyGft: typeof enWhyGft = {
  headline: "GFT ya tiene las capacidades de IA. Desbloqueemos más oportunidades de negocio.",
  intro:
    "GFT ha dedicado los últimos dos años a reposicionarse como una compañía centrada en la IA, con una plataforma propietaria de IA agéntica, agentes especializados en banca y profundas capacidades de ingeniería en servicios financieros. Esta propuesta no duplica nada de eso. Propone una función de liderazgo complementaria y orientada al negocio que convierte esas capacidades en nuevos negocios generadores de ingresos.",
  coreMessage:
    "GFT ya ha consolidado capacidades significativas de IA. La siguiente oportunidad es identificar de forma sistemática nuevos mercados, desarrollar casos de uso comerciales y transformar esas capacidades en negocios adicionales que generen ingresos.",
  verifiedLabel: "Verificado en comunicaciones públicas de GFT",
  proposedLabel: "Propuesto por este candidato",
  verifiedFacts: [
    { title: "Plataforma de IA agéntica Wynxx", text: "Plataforma propietaria de IA agéntica de GFT, presentada en 2025 para acelerar proyectos de IA y nube en instituciones financieras. GFT informa que Wynxx es una pieza central de su estrategia de crecimiento y que se ha desplegado en múltiples países y clientes empresariales." },
    { title: "GFT Banking Agent", text: "Asistente bancario multilingüe impulsado por IA que, según GFT, acelera la incorporación de clientes y atiende consultas rutinarias en banca minorista." },
    { title: "Estrategia centrada en la IA", text: "En 2025 GFT anunció una estrategia plurianual para convertirse en una compañía plenamente centrada en la IA, y su comunicado de resultados de 2025 reportó que la estrategia estaba generando crecimiento y mejor rentabilidad." },
    { title: "Liderazgo en banca y servicios financieros", text: "GFT fue posicionada como líder en el SPARK Matrix 2025 de servicios bancarios, reflejo de su larga trayectoria en core bancario, pagos y modernización de servicios financieros." },
    { title: "Modernización empresarial e IA generativa", text: "GFT ejecuta programas de modernización en la nube, IA generativa y automatización inteligente para bancos, aseguradoras y clientes industriales en todo el mundo, con competencias reconocidas por los principales proveedores de nube." },
  ],
  proposedOpportunities: [
    "Una función dedicada a explorar, validar y comercializar nuevas oportunidades de negocio con IA más allá de los proyectos actuales.",
    "Expansión de la oferta de IA hacia mercados adyacentes como sostenibilidad, impacto social y segmentos desatendidos en América Latina.",
    "Un proceso repetible de creación de negocios que convierta problemas recurrentes de los clientes en activos productizados con ingresos recurrentes.",
  ],
  pillars: [
    { id: "discover", title: "Descubrir", icon: "Search", text: "Identificar oportunidades de mercado no exploradas donde la IA puede resolver problemas de negocio relevantes." },
    { id: "commercialize", title: "Comercializar", icon: "Megaphone", text: "Traducir oportunidades validadas en productos, soluciones empresariales, alianzas y modelos de negocio viables." },
    { id: "scale", title: "Escalar", icon: "TrendingUp", text: "Aprovechar la tecnología, la capacidad de ingeniería y la presencia global de GFT para expandir las soluciones exitosas a nuevos mercados." },
  ],
  notDuplicating: {
    title: "Lo que esta propuesta no es",
    text: "No propone reemplazar ni duplicar el liderazgo de IA, las plataformas ni las capacidades de ingeniería existentes de GFT. La función descrita se sitúa entre el mercado y esas capacidades: encuentra dónde está el próximo negocio, demuestra que los clientes pagarán por él e incorpora a los equipos de GFT para construirlo y escalarlo.",
  },
  sources: [
    { label: "La estrategia centrada en IA de GFT da resultados (resultados 2025, marzo de 2026)", url: "https://www.gft.com/be/en/about-us/newsroom/press-and-news/2026/financial-news/gfts-ai-centric-strategy-delivers", note: "Resultados del ejercicio 2025 y crecimiento de la plataforma Wynxx." },
    { label: "GFT confirma su guía anual tras un primer semestre sólido (agosto de 2026)", url: "https://www.gft.com/cn/en/about-us/newsroom/press-and-news/2026/financial-news/gft-technologies-confirms-full-year-guidance-after-a-solid-first-half", note: "Actualización semestral con avances de la plataforma Wynxx." },
    { label: "GFT lidera el SPARK Matrix 2025 de servicios bancarios", url: "https://www.gft.com/ca/en/news/press-and-news/2025/press-releases/gft-tops-2025-spark-matrix-in-banking-services-ca", note: "Liderazgo en servicios bancarios y referencia al GFT Banking Agent." },
    { label: "Soluciones de banca minorista de GFT", url: "https://www.gft.com/uk/en/industries/banking/retail-banking", note: "Descripción del agente bancario multilingüe de GFT." },
    { label: "Sala de prensa de GFT", url: "https://www.gft.com/int/en/about-us/newsroom", note: "Comunicados oficiales y noticias financieras." },
  ],
};

export const engine: typeof enEngine = {
  headline: "Un marco repetible para descubrir y construir negocios con IA.",
  intro:
    "La mayoría de las iniciativas de IA parten de una tecnología y buscan un problema. Este marco parte del mercado. Cada etapa tiene un objetivo explícito, entregables concretos y una compuerta medible antes de construir nada, de modo que el resultado son resultados de negocio, no experimentos.",
  stages: [
    {
      id: "discover", label: "Descubrir", icon: "Search",
      summary: "Identificar de forma continua problemas de negocio, ineficiencias sectoriales, tecnologías emergentes, mercados desatendidos y necesidades no cubiertas de los clientes.",
      objective: "Construir y mantener un pipeline vivo de oportunidades de negocio con IA, originadas en clientes, industrias y cambios tecnológicos.",
      activities: ["Conversaciones estructuradas con ejecutivos de clientes y equipos de cuenta de GFT.", "Exploración sectorial en banca, sostenibilidad, impacto social y operaciones empresariales.", "Vigilancia tecnológica sobre IA agéntica, agentes de voz, sistemas de recuperación y plataformas de automatización.", "Captura de problemas repetibles observados en múltiples proyectos."],
      deliverables: ["Pipeline de oportunidades", "Fichas de una página por oportunidad", "Informes de señales de mercado"],
      businessValue: "Un flujo constante de ideas cualificadas que nacen de demanda real y no de supuestos internos.",
      kpis: ["Oportunidades registradas por trimestre", "Proporción originada en conversaciones con clientes", "Industrias cubiertas"],
    },
    {
      id: "evaluate", label: "Evaluar", icon: "Scale",
      summary: "Valorar el potencial comercial, la demanda, la viabilidad técnica, la competencia, la complejidad de implementación y el encaje estratégico con GFT.",
      objective: "Priorizar las oportunidades con objetividad, para que el tiempo y la capacidad de ingeniería se concentren en las de mayor retorno comercial esperado.",
      activities: ["Puntuación con una rúbrica común: tamaño de mercado, urgencia, disposición a pagar, viabilidad y encaje.", "Mapa competitivo y análisis de diferenciación.", "Revisión temprana de viabilidad con arquitectos y líderes de IA de GFT.", "Revisión de portafolio con el liderazgo regional."],
      deliverables: ["Portafolio de oportunidades puntuado", "Recomendaciones go / no-go", "Notas de viabilidad"],
      businessValue: "Menos falsos arranques. El esfuerzo de ingeniería se concentra en oportunidades que realmente pueden convertirse en ingresos.",
      kpis: ["Oportunidades evaluadas", "Tiempo medio hasta la decisión", "Equilibrio del portafolio entre industrias"],
    },
    {
      id: "validate", label: "Validar", icon: "FlaskConical",
      summary: "Involucrar a clientes potenciales, desarrollar casos de negocio, evaluar modelos de precio y probar la demanda del mercado.",
      objective: "Demostrar, con clientes reales, que un problema merece pagarse por resolverlo antes de comprometer un desarrollo.",
      activities: ["Entrevistas de descubrimiento y sesiones de validación del problema.", "Desarrollo del caso de negocio con opciones de modelo de ingresos.", "Hipótesis de precio y empaquetado probadas con compradores.", "Cartas de intención o compromisos de descubrimiento pagados cuando corresponda."],
      deliverables: ["Caso de negocio validado", "Hipótesis de precio", "Lista corta de design partners"],
      businessValue: "Decisiones de inversión respaldadas por evidencia de demanda, lo que reduce el riesgo de construir productos que nadie compra.",
      kpis: ["Problemas de cliente validados", "Design partners comprometidos", "Casos de negocio aprobados"],
    },
    {
      id: "build", label: "Construir", icon: "Hammer",
      summary: "Colaborar con los equipos tecnológicos de GFT para desarrollar con rapidez prototipos, MVP y soluciones listas para la empresa.",
      objective: "Convertir casos validados en soluciones funcionales con rapidez, usando las plataformas, los equipos de ingeniería y los estándares de entrega de GFT.",
      activities: ["Definir productos mínimos viables con criterios de éxito claros.", "Coordinar squads formados por equipos existentes de ingeniería e IA de GFT.", "Aprovechar plataformas y aceleradores de GFT donde encajen.", "Ejecutar pilotos con design partners y capturar datos de resultados."],
      deliverables: ["Prototipo o MVP", "Resultados del piloto", "Evaluación de preparación empresarial"],
      businessValue: "Menos tiempo de la idea a una solución vendible, construida sobre infraestructura que GFT ya opera.",
      kpis: ["Pilotos lanzados", "Tiempo de validación a piloto", "Tasa de éxito de pilotos"],
    },
    {
      id: "commercialize", label: "Comercializar", icon: "Megaphone",
      summary: "Crear estrategias de salida al mercado, identificar clientes, establecer alianzas y desarrollar nuevas oportunidades de ingresos.",
      objective: "Convertir los pilotos en ofertas comerciales con posicionamiento, precio y un proceso de venta que los equipos de GFT puedan ejecutar.",
      activities: ["Definir la oferta, el precio y el empaquetado.", "Habilitar a ventas y equipos de cuenta con playbooks y demos.", "Conseguir los primeros clientes de pago y cuentas de referencia.", "Establecer alianzas que aceleren la distribución."],
      deliverables: ["Plan de salida al mercado", "Playbook de ventas", "Primeros contratos comerciales"],
      businessValue: "Nuevas líneas de ingresos y proyectos de mayor valor que van más allá de la entrega por tiempo y materiales.",
      kpis: ["Propuestas comerciales emitidas", "Pipeline de ingresos creado", "Alianzas firmadas"],
    },
    {
      id: "scale", label: "Escalar", icon: "TrendingUp",
      summary: "Transformar las soluciones exitosas en activos reutilizables, ofertas comerciales, modelos de ingresos recurrentes y oportunidades de negocio internacionales.",
      objective: "Hacer repetible lo que funciona: productizarlo, llevarlo a nuevos mercados y entregarlo a los equipos que lo operarán a escala.",
      activities: ["Productizar soluciones en activos reutilizables y licenciables.", "Expandirse a países e industrias adicionales.", "Transferir las ofertas maduras a las unidades de negocio de GFT.", "Reinvertir los aprendizajes en el siguiente ciclo de descubrimiento."],
      deliverables: ["Catálogo de activos reutilizables", "Hoja de ruta de expansión", "Traspaso operativo"],
      businessValue: "Ingresos recurrentes, propiedad intelectual y un portafolio creciente de negocios de IA con la marca de GFT.",
      kpis: ["Activos reutilizables creados", "Mercados abiertos", "Proporción de ingresos recurrentes"],
    },
  ],
  lifecycle: ["Oportunidad", "Validación", "MVP", "Comercialización", "Escala"],
};

export const profile: typeof enProfile = {
  headline: "Mentalidad emprendedora. Experiencia de ingeniero. Visión de líder de negocio.",
  formula: ["Emprendimiento", "Inteligencia artificial", "Estrategia de negocio", "Ejecución"],
  summary: [
    "Andrés García Montoya es un emprendedor y ejecutivo tecnológico colombiano con más de 18 años de experiencia construyendo productos tecnológicos, liderando equipos de ingeniería, desarrollando negocios y ejecutando iniciativas de transformación digital.",
    "Su experiencia abarca inteligencia artificial, banca, fintech, sostenibilidad, impacto social y tecnología empresarial.",
    "A diferencia de los líderes centrados exclusivamente en la planeación estratégica o en la implementación técnica, Andrés combina la identificación de oportunidades de negocio con la capacidad práctica de diseñar, construir y lanzar soluciones tecnológicas.",
  ],
  advantages: [
    { id: "vision", number: "01", title: "Visión emprendedora de negocio", icon: "Lightbulb", text: "Experiencia fundando empresas tecnológicas, desarrollando productos, explorando mercados y construyendo modelos de negocio innovadores.", evidence: "Fundador de Forward, mindtalks.ai y Bioanywhere; cofundador de SDG Investors." },
    { id: "ai", number: "02", title: "Experiencia práctica en inteligencia artificial", icon: "Cpu", text: "Experiencia desarrollando agentes de IA, aplicaciones con LLM, arquitecturas RAG, soluciones de automatización inteligente y plataformas nativas en la nube.", evidence: "Diseñó y construyó de principio a fin una plataforma multilingüe de agentes de voz con IA en producción." },
    { id: "industries", number: "03", title: "Conocimiento de negocio multisectorial", icon: "Globe2", text: "Experiencia en banca, tecnología financiera, sostenibilidad, impacto social, instituciones públicas y tecnología empresarial.", evidence: "Proyectos con bancos, un regulador financiero, la administración de una ciudad y plataformas de sostenibilidad." },
  ],
  capabilities: [
    { name: "Estrategia de IA", group: "AI" },
    { name: "Descubrimiento de oportunidades de negocio", group: "Business" },
    { name: "Creación de ventures", group: "Entrepreneurship" },
    { name: "Emprendimiento tecnológico", group: "Entrepreneurship" },
    { name: "Desarrollo de negocio", group: "Business" },
    { name: "Innovación de producto con IA", group: "AI" },
    { name: "IA generativa", group: "AI" },
    { name: "IA agéntica", group: "AI" },
    { name: "Alianzas estratégicas", group: "Business" },
    { name: "Liderazgo tecnológico", group: "Execution" },
    { name: "Gestión de equipos multifuncionales", group: "Execution" },
    { name: "Transformación digital", group: "Execution" },
    { name: "Arquitectura empresarial", group: "Execution" },
    { name: "Gestión de la innovación", group: "Entrepreneurship" },
  ],
  capabilityGroups: [
    { id: "Entrepreneurship", label: "Emprendimiento", color: "var(--accent-magenta)" },
    { id: "AI", label: "Inteligencia artificial", color: "var(--accent-blue)" },
    { id: "Business", label: "Estrategia de negocio", color: "var(--accent-violet)" },
    { id: "Execution", label: "Ejecución", color: "var(--accent-emerald)" },
  ],
  radar: [
    { axis: "IA y tecnología", value: 95 },
    { axis: "Emprendimiento", value: 92 },
    { axis: "Desarrollo de negocio", value: 85 },
    { axis: "Innovación de producto", value: 90 },
    { axis: "Multisectorial", value: 88 },
    { axis: "Liderazgo de equipos", value: 86 },
  ],
  radarNote: "Énfasis relativo autoevaluado por área de capacidad, con fines ilustrativos.",
  education: [
    { institution: "Stanford University", program: "Especialización en Machine Learning", year: "2024" },
    { institution: "Florida State University", program: "Programa ejecutivo para pequeñas empresas", year: "" },
    { institution: "SoftBank", program: "Programa de startups tecnológicas", year: "" },
    { institution: "Universidad EIA", program: "Ingeniería de sistemas", year: "2007" },
  ],
  recognitions: [
    { year: "2019", text: "Visa O-1 para personas con habilidades extraordinarias, Departamento de Seguridad Nacional de EE. UU." },
    { year: "2018", text: "Patente, tecnología de encuestas de mindtalks.ai" },
    { year: "2018", text: "Uno de los cuatro mejores proyectos de nube de América Latina, DatacenterDynamics" },
    { year: "2013", text: "Patente fintech" },
    { year: "2013", text: "Reconocida entre las mejores startups de LATAM, Embajada de Israel" },
  ],
};

export const experienceSection: typeof enExperienceSection = {
  headline: "De las ideas a productos tecnológicos escalables.",
  intro:
    "Dos décadas fundando, construyendo y liderando negocios tecnológicos en banca, fintech, sostenibilidad, impacto social e inteligencia artificial. Cada iniciativa a continuación se llevó del concepto a un producto en funcionamiento en el mercado.",
  highlights: [
    { value: 18, suffix: "+", label: "Años de experiencia en tecnología" },
    { value: 50, suffix: "M+", label: "Personas alcanzadas con mindtalks.ai" },
    { value: 10, suffix: "", label: "Países alcanzados" },
    { value: 4, suffix: "", label: "Empresas tecnológicas fundadas o cofundadas" },
  ],
  domains: ["Banca", "Fintech", "Inteligencia artificial", "Sostenibilidad", "Impacto social", "Sector público", "Tecnología empresarial"],
  verifiedNote:
    "Todas las cifras reflejan la trayectoria profesional documentada del candidato. No se reclaman ingresos, inversiones ni cifras de clientes más allá de las documentadas.",
};

export const experiences: typeof enExperiences = [
  {
    id: "bioanywhere", organization: "Bioanywhere", role: "Fundador y arquitecto de producto",
    tags: ["Desarrollo de producto con IA", "Agentes de IA", "Automatización empresarial"], period: "2024–2026", start: 2024, end: 2026, website: "https://bioanywhere.com",
    summary: "Diseñó y desarrolló de forma independiente una plataforma impulsada por IA que convierte tecnologías sofisticadas en un producto práctico y vendible: agentes de voz conversacionales en tiempo real para empresas, disponibles en más de 40 idiomas, con capacidades multiinquilino y de marca blanca.",
    highlights: ["Agentes de voz conversacionales en tiempo real por web y telefonía.", "Modelos de lenguaje con generación aumentada por recuperación para conocimiento de dominio.", "Orquestación de herramientas de IA que conecta agentes con miles de aplicaciones empresariales.", "Arquitectura nativa en la nube, multiinquilino y de marca blanca con autenticación segura y analítica.", "Interacciones multilingües de IA para casos de servicio al cliente y operaciones."],
    technical: ["Python", "TypeScript", "Next.js", "LiveKit (WebRTC)", "PostgreSQL + pgvector", "LlamaIndex", "Drizzle ORM", "Deepgram y Cartesia", "Composio y servidores MCP", "Google Cloud Run", "Docker y CI/CD", "Telefonía SIP"],
    emphasis: "Demuestra la capacidad de transformar tecnologías avanzadas de IA en productos prácticos que las empresas pueden desplegar.",
  },
  {
    id: "legado", organization: "Legado", role: "Chief Technology Officer",
    tags: ["Sostenibilidad", "Innovación tecnológica", "Estrategia de plataforma"], period: "2024–2025", start: 2024, end: 2025, website: "https://legado.green",
    summary: "Lideró la estrategia y el desarrollo tecnológico de una plataforma global de sostenibilidad centrada en impacto ambiental y social, coordinando equipos multidisciplinarios y contratistas internacionales.",
    highlights: ["Evolucionó la arquitectura de la plataforma y lideró la ejecución de ingeniería en varios países.", "Fue el enlace técnico principal con socios internacionales, incluido Deloitte.", "Lideró la estrategia de tokenización del ecosistema y las decisiones de arquitectura blockchain.", "Alineó objetivos de negocio, metas de sostenibilidad y ejecución tecnológica."],
    technical: ["Arquitectura de plataforma", "Blockchain (contratos inteligentes en Polygon)", "Infraestructura en la nube", "Funcionalidades impulsadas por IA"],
    emphasis: "Liderazgo ejecutivo en la intersección de sostenibilidad, tecnología y alianzas internacionales.",
  },
  {
    id: "sdg", organization: "SDG Investors / sdgtalks.ai", role: "Cofundador y gerente de desarrollo de software",
    tags: ["IA", "Sostenibilidad", "Innovación de impacto"], period: "2020–2024", start: 2020, end: 2024, website: "https://sdgtalks.ai",
    summary: "Cofundó SDG Investors y lideró el desarrollo de iniciativas impulsadas por IA que conectan la tecnología con la sostenibilidad y el impacto social, incluida una plataforma de información con IA que analiza y publica contenido alineado con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.",
    highlights: ["Diseñó la arquitectura central para el análisis y la generación de contenido con LLM a escala.", "Entregó contenido personalizado y orientado a propósito a usuarios de universidades de Estados Unidos.", "Lideró la integración de capacidades de chat con IA para explorar temas de los ODS.", "Diseñó agentes de voz multilingües con IA para casos de impacto social dentro de la iniciativa Social Impact Movement."],
    technical: ["Python", "PHP", "MySQL", "AWS", "Pipelines de NLP", "Generación de contenido con LLM"],
    emphasis: "Aplicación temprana y a escala de producción de la IA generativa a una misión de sostenibilidad e impacto social.",
  },
  {
    id: "mindtalks", organization: "mindtalks.ai", role: "Fundador y CTO",
    tags: ["Emprendimiento tecnológico", "Tecnología patentada", "Expansión de mercado"], period: "2017–2020", start: 2017, end: 2020,
    summary: "Fundó y desarrolló una plataforma patentada de tecnología de encuestas digitales que alcanzó a más de 50 millones de personas en 10 países, liderando el desarrollo tecnológico y la expansión del negocio en América Latina con un equipo de siete personas.",
    highlights: ["Tecnología de encuestas patentada, reconocida entre los mejores proyectos de nube de América Latina.", "Alcanzó a más de 50 millones de personas en 10 países.", "Lideró un equipo de siete personas en el desarrollo del producto y la expansión regional."],
    technical: ["JavaScript", "Plataformas en la nube", "Recolección de datos a gran escala"],
    emphasis: "Ejecución emprendedora, innovación y experiencia llevando un producto tecnológico a escala en varios mercados.",
  },
  {
    id: "forward", organization: "Forward", role: "Fundador y gerente de proyectos",
    tags: ["Tecnología", "Innovación financiera", "Banca"], period: "2007–2017", start: 2007, end: 2017,
    summary: "Fundó y dirigió durante diez años una empresa de tecnología que entregó soluciones en diversas industrias, incluidos servicios financieros y banca. El trabajo incluyó iniciativas fintech, diseño de procesos digitales y transformación de negocio.",
    highlights: ["Iniciativas tecnológicas para bancos e instituciones financieras, incluida una patente fintech.", "Gestión de proyectos y diseño de procesos con Grupo SURA, la Superintendencia Financiera de Colombia, la Alcaldía de Bogotá y el Ministerio de Relaciones Exteriores.", "Automatización de trámites digitales para la administración pública y clientes empresariales."],
    technical: ["Gestión de proyectos y portafolios (OPM3)", "Automatización de procesos", "Sistemas empresariales"],
    emphasis: "Comprensión profunda de los servicios financieros, la tecnología empresarial y las operaciones de negocio en entornos regulados.",
  },
];

export const impact: typeof enImpact = {
  headline: "La innovación es valiosa. El impacto comercial es esencial.",
  intro:
    "El liderazgo en IA debe medirse por resultados de negocio, no por el número de experimentos. Este cuadro de mando es la forma en que la función propuesta reportaría su avance al liderazgo regional cada trimestre.",
  kpis: [
    { id: "opportunities", label: "Oportunidades de negocio cualificadas identificadas", icon: "Search" },
    { id: "problems", label: "Problemas de clientes validados", icon: "Users" },
    { id: "cases", label: "Casos de negocio desarrollados", icon: "BarChart3" },
    { id: "pilots", label: "Pilotos comerciales iniciados", icon: "FlaskConical" },
    { id: "pipeline", label: "Nuevo pipeline de ingresos generado", icon: "TrendingUp" },
    { id: "partnerships", label: "Alianzas estratégicas establecidas", icon: "Handshake" },
    { id: "commercialized", label: "Soluciones de IA comercializadas", icon: "Megaphone" },
    { id: "assets", label: "Activos de negocio reutilizables desarrollados", icon: "Layers" },
    { id: "markets", label: "Expansión a mercados adicionales", icon: "Globe2" },
    { id: "revenue", label: "Ingresos generados por ofertas impulsadas por IA", icon: "Target" },
  ],
  valueFramework: [
    { id: "revenue-growth", driver: "Revenue growth", title: "Crecimiento de ingresos", text: "Nuevos servicios, productos, clientes y modelos de negocio.", icon: "TrendingUp", color: "var(--accent-blue)" },
    { id: "efficiency", driver: "Operational efficiency", title: "Eficiencia operativa", text: "Menores costos y mejor desempeño de procesos.", icon: "Workflow", color: "var(--accent-emerald)" },
    { id: "expansion", driver: "Market expansion", title: "Expansión de mercado", text: "Nuevas industrias, segmentos de clientes y mercados geográficos.", icon: "Globe2", color: "var(--accent-amber)" },
    { id: "differentiation", driver: "Competitive differentiation", title: "Diferenciación competitiva", text: "Soluciones propias, experiencia especializada y ofertas innovadoras.", icon: "Sparkles", color: "var(--accent-violet)" },
    { id: "recurring", driver: "Recurring revenue", title: "Ingresos recurrentes", text: "Plataformas por suscripción, activos licenciados, servicios gestionados y contratos empresariales continuos.", icon: "Repeat", color: "var(--accent-magenta)" },
  ],
  scenario: {
    title: "Escenario ilustrativo de pipeline",
    disclaimer:
      "Hipotético y editable. Estos valores no son pronósticos, compromisos ni proyecciones de GFT. Ilustran cómo un embudo disciplinado convierte oportunidades en resultados comerciales a lo largo de cuatro trimestres.",
    defaults: { opportunitiesPerQuarter: 12, validationRate: 40, pilotRate: 50, commercializationRate: 50 },
    quarters: ["T1", "T2", "T3", "T4"],
  },
};

export const roadmap: RoadmapData = {
  headline: "Un plan práctico para empezar a crear valor.",
  intro:
    "Noventa días bastan para entender el panorama de IA de GFT, construir un portafolio priorizado de oportunidades, validar los casos más sólidos con clientes reales y poner en marcha las primeras iniciativas comerciales.",
  caveat:
    "Se trata de prioridades propuestas, sujetas a la estrategia interna, los recursos y las aprobaciones de GFT. El plan no promete ingresos en 90 días; establece el pipeline, la evidencia y la activación comercial que conducen a ellos.",
  phases: [
    { id: "phase-1", range: "Días 1–30", title: "Descubrir y priorizar", focus: "Aprender rápido, construir el pipeline.", actions: ["Entender los productos de IA y las prioridades estratégicas actuales de GFT.", "Reunirse con los líderes regionales de negocio y tecnología.", "Revisar las oportunidades comerciales existentes.", "Identificar industrias y mercados desatendidos.", "Explorar oportunidades en banca, sostenibilidad y automatización empresarial.", "Construir un pipeline inicial priorizado de oportunidades."], deliverable: "Portafolio de oportunidades de negocio con IA" },
    { id: "phase-2", range: "Días 31–60", title: "Validar y diseñar", focus: "Probar la demanda antes de construir.", actions: ["Seleccionar las oportunidades de mayor potencial.", "Validar la demanda de los clientes.", "Desarrollar casos de negocio.", "Identificar socios comerciales potenciales.", "Definir posibles modelos de ingresos.", "Coordinar evaluaciones de viabilidad técnica con los equipos existentes de GFT."], deliverable: "Casos de negocio validados de AI Ventures" },
    { id: "phase-3", range: "Días 61–90", title: "Activar y comercializar", focus: "Poner las primeras oportunidades en el mercado.", actions: ["Presentar propuestas comerciales a clientes potenciales.", "Lanzar las iniciativas de prueba de concepto seleccionadas, cuando se aprueben.", "Desarrollar planes de salida al mercado.", "Establecer un pipeline de oportunidades medible.", "Preparar una hoja de ruta de expansión regional e internacional."], deliverable: "Plan de activación comercial de AI Ventures" },
  ],
};

export const fit: FitData = {
  headline: "Complementar el liderazgo de IA de GFT. Expandir su potencial de negocio.",
  intro:
    "La función propuesta no es dueña de plataformas, ingeniería ni entrega. Es dueña del pipeline de nuevos negocios con IA y trabaja a través de los equipos que ya hacen fuerte a GFT.",
  role: "Head of AI Ventures & Business Innovation",
  mission:
    "Identificar y transformar oportunidades emergentes de IA en productos, servicios y negocios comercialmente viables que fortalezcan la posición de mercado de GFT y generen un crecimiento sostenible de ingresos.",
  responsibilities: ["Descubrimiento de oportunidades de IA", "Estrategia de negocio", "Desarrollo de nuevos negocios", "Comercialización de productos de IA", "Validación de casos de negocio", "Estrategia de salida al mercado", "Alianzas estratégicas", "Expansión sectorial", "Colaboración multifuncional", "Desarrollo de oportunidades de ingresos"],
  collaborators: [
    { id: "regional", name: "Liderazgo ejecutivo regional", icon: "Building2", how: "Alinear el portafolio de oportunidades con las prioridades regionales de crecimiento y reportar el avance comercial cada trimestre." },
    { id: "ai-leadership", name: "Liderazgo de IA existente", icon: "Cpu", how: "Llevar casos de uso validados por el mercado a las plataformas y equipos de IA de GFT, y devolver aprendizajes de producto desde los clientes." },
    { id: "banking", name: "Equipos de banca y servicios financieros", icon: "Landmark", how: "Co-desarrollar nuevas ofertas para clientes existentes y extender soluciones bancarias probadas a nuevos segmentos." },
    { id: "sales", name: "Equipos de ventas y desarrollo de negocio", icon: "Megaphone", how: "Originar oportunidades en las conversaciones con cuentas y equipar a ventas con ofertas validadas y playbooks." },
    { id: "product", name: "Equipos de innovación de producto", icon: "Lightbulb", how: "Compartir evidencia de descubrimiento y validación, y coliderar la productización de soluciones repetibles." },
    { id: "engineering", name: "Equipos de ingeniería y entrega de software", icon: "Workflow", how: "Definir prototipos y pilotos con claridad, respetar los estándares de entrega y traspasar limpiamente las soluciones escaladas." },
    { id: "partners", name: "Socios estratégicos", icon: "Handshake", how: "Estructurar alianzas de venture, alianzas tecnológicas y acuerdos de distribución que aceleren el crecimiento." },
  ],
  complementNote:
    "La función complementa las inversiones actuales de GFT en IA en lugar de duplicar las responsabilidades existentes de ingeniería e IA. Añade la capa emprendedora y orientada al mercado que convierte capacidades en negocios.",
};

export const availability: typeof enAvailability = {
  headline: "Listo para construir la próxima oportunidad de negocio con IA.",
  facts: [
    { label: "Disponibilidad", value: "Disponible de inmediato" },
    { label: "Idiomas", value: "Inglés y español fluidos" },
    { label: "Ubicación", value: "Con base en Colombia" },
    { label: "Modalidad", value: "Abierto a oportunidades internacionales, trabajo remoto, esquemas híbridos y reubicación" },
  ],
  regions: [
    { id: "latam", name: "América Latina", x: 36, y: 74, note: "Región base; husos horarios andinos" },
    { id: "northam", name: "Norteamérica", x: 22, y: 36, note: "Ventana de colaboración el mismo día" },
    { id: "europe", name: "Europa", x: 50, y: 32, note: "Solape matutino desde Colombia" },
    { id: "apac", name: "Asia-Pacífico", x: 78, y: 48, note: "Colaboración asíncrona" },
  ],
  home: { x: 27, y: 55 },
  note: "Ilustra la disposición a colaborar entre regiones. No implica experiencia previa de trabajo en todas las regiones mostradas.",
};

export const closing: typeof enClosing = {
  headline: "Convirtamos la innovación en IA en las próximas oportunidades de crecimiento de GFT.",
  supporting:
    "Las capacidades de IA de GFT constituyen una base sólida para la innovación. Creo que mi combinación de liderazgo tecnológico, emprendimiento y experiencia multisectorial puede ayudar a identificar y desarrollar nuevas oportunidades comerciales que expandan esa base hacia mercados y negocios adicionales.",
  personal:
    "Rohan, me encantaría tener la oportunidad de conversar sobre cómo podría contribuir a la estrategia de crecimiento de GFT conectando la inteligencia artificial con el desarrollo de nuevos negocios, la innovación y la comercialización.",
  primaryCta: "Conversemos sobre la oportunidad",
  secondaryCta: "Descargar mi CV",
  tertiaryCta: "Conectar en LinkedIn",
};

export const proposals: ProposalTab[] = [
  { id: "ventures", path: "/", label: "Head of AI Ventures", short: "AI Ventures", title: "Head of AI Ventures & Business Innovation", tone: "growth" },
  { id: "ai", path: "/head-of-ai", label: "Head of AI", short: "Head of AI", title: "Head of AI", tone: "execution" },
  { id: "compare", path: "/compare", label: "Comparar ambas", short: "Comparar", title: "Comparación estratégica", tone: "neutral" },
];
