import type { AiDomain, MandateArea } from "../head-of-ai";
import { aiNavigation as enAiNavigation } from "../head-of-ai";
import type {
  aiHero as enAiHero, aiContext as enAiContext, aiMandate as enAiMandate, aiLifecycle as enAiLifecycle,
  aiUseCasesSection as enAiUseCasesSection, aiProfile as enAiProfile, aiStandards as enAiStandards,
  aiImpact as enAiImpact, aiOperatingModel as enAiOperatingModel, aiClosing as enAiClosing,
} from "../head-of-ai";
import type { RoadmapData } from "../roadmap";

const navLabels: Record<(typeof enAiNavigation)[number]["id"], string> = {
  "ai-proposal": "Propuesta",
  "ai-context": "Por qué ahora",
  "ai-mandate": "Mandato",
  "ai-lifecycle": "Modelo de entrega",
  "ai-usecases": "Casos de uso",
  "ai-why-andres": "Por qué Andrés",
  "ai-standards": "Estándares",
  "ai-impact": "Impacto",
  "ai-roadmap": "90 días",
  "ai-operating-model": "Modelo operativo",
  "ai-contact": "Contacto",
};
export const aiNavigation = enAiNavigation.map((n) => ({ id: n.id, label: navLabels[n.id] }));

export const aiHero: typeof enAiHero = {
  eyebrow: "Una propuesta estratégica de ejecución para GFT Technologies",
  headlineStart: "Hacer que la IA funcione en toda GFT.",
  headlineAccent: "En producción, a escala.",
  supporting: "Head of AI",
  description:
    "Una propuesta ejecutiva para fortalecer la forma en que GFT y sus clientes adoptan, construyen, gobiernan y escalan la inteligencia artificial: convertir la estrategia en sistemas en producción, y los sistemas en producción en impacto operativo medible.",
  valueStatement:
    "Lidero la IA desde la estrategia hasta la producción: defino dónde crea valor, construyo los equipos y las plataformas que la entregan y me aseguro de que opere de forma confiable, segura y medible.",
  roleFrame:
    "Se propone como una función regional de liderazgo en IA que complementa la organización global de IA y el liderazgo técnico existentes de GFT. No asume que esas responsabilidades estén hoy sin asignar.",
  stack: [
    { id: "strategy", label: "Estrategia de IA", sub: "Prioridades, hojas de ruta, objetivos" },
    { id: "platforms", label: "Plataformas y activos", sub: "Wynxx, aceleradores, componentes reutilizables" },
    { id: "engineering", label: "Ingeniería de IA", sub: "LLM, RAG, agentes, ML, automatización" },
    { id: "adoption", label: "Adopción empresarial", sub: "Flujos, agentes, productividad" },
    { id: "governance", label: "Gobernanza", sub: "IA responsable, seguridad, evaluación" },
    { id: "impact", label: "Impacto medible", sub: "Adopción, eficiencia, ROI" },
  ],
};

export const aiContext: typeof enAiContext = {
  headline: "GFT ya está centrada en la IA. El siguiente paso es escalar la ejecución.",
  intro:
    "GFT ha puesto la IA en el centro de su estrategia, con una plataforma agéntica propia, agentes especializados en banca y una profundidad de entrega reconocida en servicios financieros. La oportunidad ahora es operativa: asegurar que cada región, cada equipo de entrega y cada proyecto con clientes pueda adoptar esa capacidad de forma consistente, segura y con calidad de producción.",
  coreMessage:
    "El valor de la IA se materializa en producción, no en demos. Un Head of AI regional existe para hacer sistemática la adopción: los casos de uso correctos, la arquitectura correcta, los estándares correctos y resultados medibles en las operaciones de GFT y en los negocios de sus clientes.",
  pillars: [
    { id: "adopt", title: "Adoptar", icon: "Users", text: "Acelerar la adopción de IA en los servicios de GFT, sus operaciones internas y las organizaciones de sus clientes, con prioridades y programas claros." },
    { id: "engineer", title: "Construir", icon: "Cpu", text: "Construir soluciones de IA de nivel empresarial sobre las plataformas y los estándares de GFT: escalables, seguras, observables y listas para producción." },
    { id: "govern", title: "Gobernar y escalar", icon: "ShieldCheck", text: "Establecer prácticas de IA responsable, evaluación y operación que permitan escalar con confianza las soluciones exitosas." },
  ],
  contrast: {
    title: "En qué se diferencia de la propuesta de AI Ventures",
    text: "Head of AI Ventures & Business Innovation trata de crecimiento: encontrar y comercializar nuevos negocios con IA. Head of AI trata de ejecución: hacer que la IA funcione con eficacia en lo que GFT ya entrega. Ambas se apoyan en la misma experiencia; responden a prioridades organizacionales distintas.",
  },
  complement: {
    title: "Complementar la organización global de IA de GFT",
    text: "GFT ya cuenta con liderazgo global de IA, equipos de plataforma y prácticas de ingeniería. Esta propuesta es para una función regional que traduzca esas capacidades en adopción, calidad de entrega y resultados para clientes en la Región Andina y los mercados que atiende, en estrecha coordinación con el liderazgo global.",
  },
};

export const aiMandate: typeof enAiMandate = {
  headline: "Seis responsabilidades. Una disciplina operativa.",
  intro:
    "El rol se define por lo que debe hacer realidad: estrategia de IA que se ejecuta, ingeniería que llega a producción, adopción que cambia la forma de trabajar, plataformas que se acumulan, gobernanza que protege e impacto que se mide.",
  areas: [
    {
      id: "strategy", number: "01", title: "Estrategia y liderazgo de IA", icon: "Compass",
      summary: "Definir y ejecutar estrategias de IA alineadas con los objetivos de negocio de GFT, y liderar la transformación con IA en unidades de negocio e industrias.",
      responsibilities: ["Definir y ejecutar estrategias de IA alineadas con los objetivos de negocio de GFT.", "Identificar oportunidades para integrar la IA en los servicios, productos y operaciones internas existentes.", "Liderar iniciativas de transformación con IA en unidades de negocio e industrias.", "Establecer hojas de ruta, prioridades y objetivos medibles de IA."],
      deliverables: ["Estrategia y hoja de ruta regional de IA", "Portafolio priorizado de iniciativas", "Objetivos y revisiones trimestrales"],
      kpis: ["Iniciativas entregadas según la hoja de ruta", "Unidades de negocio con programas activos de IA", "Cumplimiento de objetivos por trimestre"],
      outcome: "La inversión en IA fluye hacia las iniciativas con el valor de negocio más claro, con el liderazgo alineado en prioridades y avance.",
    },
    {
      id: "engineering", number: "02", title: "Ingeniería de IA y excelencia técnica", icon: "Cpu",
      summary: "Liderar equipos multidisciplinarios de ingeniería de IA y la arquitectura de soluciones de nivel empresarial basadas en IA generativa, LLM, RAG, IA agéntica, machine learning y automatización inteligente.",
      responsibilities: ["Liderar equipos multidisciplinarios de ingeniería de IA.", "Supervisar la arquitectura y la implementación de soluciones de IA de nivel empresarial.", "Desarrollar soluciones con IA generativa, LLM, RAG, IA agéntica, machine learning y automatización inteligente.", "Asegurar que las soluciones de IA sean escalables, confiables, seguras y listas para producción.", "Promover estándares de ingeniería, observabilidad de IA, pruebas y mejora continua."],
      deliverables: ["Arquitecturas de referencia", "Estándares y playbooks de ingeniería", "Soluciones listas para producción"],
      kpis: ["Soluciones en producción", "Confiabilidad de releases y tasa de incidentes", "Cobertura de evaluación de los modelos desplegados"],
      outcome: "Los equipos entregan sistemas de IA que se comportan de forma predecible en producción y que otros pueden mantener y extender.",
    },
    {
      id: "adoption", number: "03", title: "Adopción y transformación empresarial con IA", icon: "Users",
      summary: "Acelerar la adopción de IA en GFT y sus clientes optimizando flujos de trabajo, reduciendo costos operativos y mejorando la productividad con automatización inteligente y agentes de IA.",
      responsibilities: ["Acelerar la adopción de IA en GFT y sus clientes.", "Identificar oportunidades para optimizar flujos, reducir costos operativos y mejorar la productividad.", "Implementar automatización inteligente y agentes de IA en procesos empresariales.", "Apoyar la transformación organizacional mediante soluciones habilitadas por IA."],
      deliverables: ["Programas de adopción por unidad de negocio", "Portafolio de automatización de procesos", "Rutas de habilitación y formación"],
      kpis: ["Usuarios activos de herramientas de IA", "Procesos automatizados o aumentados", "Horas liberadas y costo por transacción"],
      outcome: "La IA pasa a formar parte de cómo operan GFT y sus clientes, y no una iniciativa paralela que vive al margen del trabajo real.",
    },
    {
      id: "platforms", number: "04", title: "Desarrollo de productos y plataformas de IA", icon: "Layers",
      summary: "Liderar el desarrollo y la evolución de productos y plataformas impulsados por IA, aprovechando y extendiendo los activos existentes de GFT, incluido Wynxx, cuando sea estratégicamente apropiado.",
      responsibilities: ["Liderar el desarrollo y la evolución de productos y plataformas impulsados por IA.", "Aprovechar y extender las capacidades y activos de IA existentes de GFT, incluido Wynxx, cuando sea estratégicamente apropiado.", "Transformar prototipos de IA en soluciones de producción confiables y escalables.", "Promover arquitecturas, componentes e integraciones empresariales de IA reutilizables."],
      deliverables: ["Catálogo de componentes reutilizables", "Ruta de prototipo a producción", "Plan de adopción de plataformas"],
      kpis: ["Proporción de soluciones construidas sobre componentes compartidos", "Tiempo de prototipo a producción", "Reutilización de plataformas entre proyectos"],
      outcome: "Cada entrega hace más rápida la siguiente, porque las capacidades se capturan como activos en lugar de reconstruirse.",
    },
    {
      id: "governance", number: "05", title: "Gobernanza e IA responsable", icon: "ShieldCheck",
      summary: "Establecer marcos de gobernanza de IA que promuevan la adopción responsable, la seguridad, la privacidad, el cumplimiento regulatorio, la evaluación, el monitoreo y la gestión de riesgos.",
      responsibilities: ["Establecer marcos de gobernanza de IA apropiados.", "Promover la adopción responsable de IA, la seguridad, la privacidad y el cumplimiento regulatorio.", "Definir metodologías de evaluación, estándares de monitoreo y prácticas de gestión de riesgos.", "Asegurar que las iniciativas de IA cumplan los requisitos empresariales y las expectativas de negocio."],
      deliverables: ["Marco de gobernanza de IA", "Estándares de evaluación y monitoreo", "Registro de riesgos y cadencia de revisión"],
      kpis: ["Soluciones con evaluación y monitoreo implantados", "Revisiones de gobernanza completadas", "Incidentes y tiempo de resolución"],
      outcome: "Clientes y reguladores pueden confiar en lo que GFT despliega, y los equipos pueden avanzar rápido dentro de límites claros.",
    },
    {
      id: "impact", number: "06", title: "Alineación con el negocio e impacto medible", icon: "Target",
      summary: "Conectar la estrategia de IA con objetivos concretos de negocio, con KPI de desempeño, adopción, eficiencia de costos y retorno de la inversión, en colaboración con los líderes comerciales y de negocio.",
      responsibilities: ["Conectar la estrategia de IA con objetivos concretos de negocio.", "Mejorar la eficiencia operativa y la experiencia de cliente.", "Acelerar la entrega mediante prácticas de desarrollo asistidas por IA.", "Establecer KPI para evaluar desempeño, adopción, eficiencia de costos y retorno de la inversión de la IA.", "Colaborar con líderes comerciales y de negocio para traducir los requisitos de los clientes en soluciones de IA valiosas."],
      deliverables: ["Cuadro de mando de impacto de IA", "Modelo de ROI por iniciativa", "Fichas de solución para clientes con ventas y entrega"],
      kpis: ["ROI medido por iniciativa", "Aceleración de la entrega por prácticas asistidas por IA", "Satisfacción del cliente en proyectos de IA"],
      outcome: "Cada iniciativa de IA puede responder la pregunta que hará el liderazgo: ¿qué cambió y qué retornó?",
    },
  ] satisfies MandateArea[],
};

export const aiLifecycle: typeof enAiLifecycle = {
  headline: "Del prototipo a la producción. Siempre.",
  intro:
    "La mayor parte del esfuerzo en IA se pierde entre una demo convincente y un sistema en el que la gente confía. Este modelo de entrega cierra esa brecha con compuertas explícitas de evaluación, seguridad y operación antes de que algo llegue a los usuarios.",
  stages: [
    { id: "frame", label: "Enmarcar", icon: "Target", text: "Definir el objetivo de negocio, los usuarios, las restricciones y la métrica que declarará el éxito.", gate: "Responsable claro y métrica de éxito" },
    { id: "design", label: "Diseñar", icon: "Compass", text: "Elegir la arquitectura: modelos, recuperación, agentes, integraciones, flujos de datos y guardrails.", gate: "Revisión de arquitectura y riesgo" },
    { id: "build", label: "Construir", icon: "Hammer", text: "Implementar sobre plataformas y componentes compartidos con estándares de ingeniería desde el primer día.", gate: "Código, pruebas y suite de evaluación" },
    { id: "evaluate", label: "Evaluar", icon: "FlaskConical", text: "Medir calidad, seguridad, costo y latencia frente a la línea base con datos representativos.", gate: "Umbrales de evaluación cumplidos" },
    { id: "deploy", label: "Desplegar", icon: "Rocket", text: "Liberar de forma progresiva con monitoreo, observabilidad y reversión preparados.", gate: "Aprobación de seguridad y operaciones" },
    { id: "operate", label: "Operar y mejorar", icon: "Repeat", text: "Seguir adopción e impacto, gestionar deriva y costo, y alimentar los aprendizajes en el siguiente ciclo.", gate: "Impacto reportado trimestralmente" },
  ],
  principles: [
    { title: "Experimentación con disciplina", text: "Iteración rápida dentro de bucles de evaluación claros, porque los sistemas de IA son probabilísticos y deben medirse, no suponerse." },
    { title: "Pensamiento de plataforma", text: "Componentes compartidos, arquitecturas de referencia y observabilidad para que los equipos avancen más rápido sin reinventar lo básico." },
    { title: "Ingeniería asistida por IA", text: "Prácticas de desarrollo que usan herramientas de IA para acelerar la entrega manteniendo altos los estándares de calidad y revisión." },
    { title: "Producción primero", text: "Seguridad, costo, latencia y operabilidad son insumos de diseño, no añadidos de última hora antes del lanzamiento." },
  ],
};

export const aiUseCasesSection: typeof enAiUseCasesSection = {
  headline: "Dónde la ejecución de IA crea valor primero.",
  intro:
    "Un portafolio orientado a la implementación: dieciséis casos de uso en banca, operaciones empresariales, sostenibilidad e impacto social, y la propia práctica de entrega de GFT. Cada uno está planteado como se ejecutaría, con objetivo, enfoque, ruta de implementación, KPI y gobernanza. Son candidatos para priorizar, no compromisos.",
  note: "Los casos de uso son prioridades ilustrativas para validar con el liderazgo y los clientes de GFT. No describen proyectos existentes de GFT ni resultados garantizados.",
};

export const aiDomains: AiDomain[] = [
  {
    id: "banking", name: "Banca y servicios financieros", short: "Banca", icon: "Landmark", accent: "blue",
    summary: "Desplegar agentes de IA, optimizar flujos bancarios y fortalecer riesgo y operaciones sobre la profundidad de GFT en servicios financieros.",
    useCases: [
      { id: "banking-agents-production", domainId: "banking", name: "Agentes bancarios en producción", tagline: "Llevar los agentes conversacionales y de voz del piloto a una producción confiable y gobernada en journeys de servicio al cliente.",
        objective: "Reducir el costo por interacción y mejorar la resolución en journeys bancarios de alto volumen sin degradar la confianza del cliente.",
        approach: "Agentes específicos por journey con autenticación, acceso por herramientas a los sistemas core, escalamiento con contexto y evaluación continua frente a criterios de calidad y cumplimiento.",
        implementation: ["Seleccionar dos journeys de alto volumen y definir líneas base.", "Construir sobre las capacidades de agentes y la arquitectura de referencia de GFT.", "Ejecutar suites de evaluación de precisión, seguridad y tono.", "Liberar progresivamente con monitoreo y respaldo humano."],
        kpis: ["Tasa de contención", "Tiempo medio de atención", "Satisfacción del cliente", "Calidad del escalamiento"],
        governance: "Registro de conversaciones, manejo de datos personales, versionado de modelos y prompts, y revisión periódica de casos fallidos con cumplimiento.",
        gftFit: "Extiende directamente las capacidades de agentes bancarios descritas públicamente por GFT con una disciplina operativa de producción.",
        capabilities: ["Agentes de voz y chat en tiempo real", "Integraciones con core bancario", "Pipelines de evaluación", "Observabilidad"] },
      { id: "lending-ops", domainId: "banking", name: "Operaciones de crédito aumentadas con IA", tagline: "Asistentes de apoyo a la decisión que aceleran el análisis de crédito y la documentación preservando la responsabilidad humana.",
        objective: "Acortar el tiempo hasta la decisión y aumentar la productividad de los analistas en crédito pyme y de consumo.",
        approach: "Recuperación sobre documentos del deudor y datos internos, redacción estructurada de memorandos, detección de señales de riesgo y trazabilidad completa de las fuentes usadas.",
        implementation: ["Mapear el flujo de crédito actual y sus puntos de decisión.", "Construir asistentes de recuperación y redacción con explicabilidad.", "Validar sobre casos históricos con los equipos de crédito.", "Desplegar en una unidad de crédito con despliegue monitoreado."],
        kpis: ["Tiempo de preparación de memorandos", "Ciclo de decisión", "Productividad del analista", "Tasa de corrección y anulación"],
        governance: "Alineación con la gestión de riesgo de modelos, trazas de auditoría, monitoreo de sesgos y separación clara entre recomendación y decisión.",
        gftFit: "Alineado con el trabajo público de GFT en asistentes de riesgo de crédito con IA generativa y su práctica de riesgo y cumplimiento.",
        capabilities: ["Inteligencia documental", "RAG con citas", "Gobernanza de modelos", "Despliegue seguro"] },
      { id: "back-office-automation", domainId: "banking", name: "Automatización de procesos de back office", tagline: "Automatización agéntica de operaciones intensivas en documentos: vinculación, revisiones KYC, conciliaciones y reportes.",
        objective: "Reducir el costo y el tiempo de ciclo de procesamiento en operaciones, mejorando la precisión y la auditabilidad.",
        approach: "Agentes que leen documentos, extraen y verifican datos, aplican reglas de política, derivan excepciones a personas y registran cada paso.",
        implementation: ["Elegir un proceso con volumen medible.", "Diseñar el flujo del agente con puntos de control humanos.", "Pilotar durante cuatro a seis semanas frente a la línea base.", "Escalar a procesos adyacentes con los mismos componentes."],
        kpis: ["Tasa de procesamiento directo", "Tiempo de ciclo", "Tasa de error", "Costo por caso"],
        governance: "Políticas como código, manejo de excepciones, registros de auditoría y muestreo periódico de precisión con el liderazgo de operaciones.",
        gftFit: "Se apoya en el trabajo de automatización inteligente y modernización de GFT para operaciones bancarias.",
        capabilities: ["Procesamiento de documentos", "Orquestación de flujos", "Motores de reglas", "Registro de auditoría"] },
      { id: "risk-compliance-intel", domainId: "banking", name: "Inteligencia de riesgo y cumplimiento", tagline: "Asistentes de IA que ayudan a los equipos de riesgo y cumplimiento a monitorear, investigar y reportar más rápido.",
        objective: "Reducir el tiempo de investigación y mejorar la consistencia en las operaciones de cumplimiento y riesgo.",
        approach: "Resumen de casos, detección de patrones en transacciones y documentos, recuperación de conocimiento regulatorio y borradores de reportes con citas completas.",
        implementation: ["Identificar los tipos de investigación de mayor esfuerzo.", "Construir una base de conocimiento gobernada de políticas y regulación.", "Desplegar asistentes a un equipo piloto con evaluación.", "Integrar con los sistemas de gestión de casos."],
        kpis: ["Tiempo de investigación", "Casos por analista", "Puntuación de calidad de reportes", "Tiempo de gestión de falsos positivos"],
        governance: "Control de acceso estricto, explicabilidad de los elementos señalados y documentación del comportamiento del modelo lista para el regulador.",
        gftFit: "Complementa las capacidades de cumplimiento y prevención de lavado de activos de GFT con operaciones asistidas por IA.",
        capabilities: ["Recuperación y resumen", "Detección de anomalías", "Integración con sistemas de casos", "Explicabilidad"] },
    ],
  },
  {
    id: "enterprise", name: "Operaciones empresariales", short: "Empresa", icon: "Workflow", accent: "violet",
    summary: "Automatización inteligente, sistemas de conocimiento y agentes de IA que cambian la forma en que se hace el trabajo empresarial.",
    useCases: [
      { id: "knowledge-assistants", domainId: "enterprise", name: "Asistentes de conocimiento empresarial gobernados", tagline: "Asistentes conscientes de permisos sobre documentos, tickets y bases de datos con respuestas citadas.",
        objective: "Reducir el tiempo dedicado a buscar información y las preguntas repetidas a expertos en todas las áreas.",
        approach: "Asistentes con generación aumentada por recuperación, control de acceso, citas, consulta de datos estructurados y monitoreo de calidad por dominio de conocimiento.",
        implementation: ["Empezar con un dominio de conocimiento de alto valor.", "Indexar preservando los permisos.", "Medir la precisión de las respuestas con un conjunto de prueba etiquetado.", "Expandir dominio por dominio según resultados."],
        kpis: ["Precisión de las respuestas", "Tiempo hasta la información", "Adopción por área", "Consultas a expertos evitadas"],
        governance: "Atribución de fuentes, herencia de permisos, políticas de retención y auditorías periódicas de precisión.",
        gftFit: "Aplica las arquitecturas de recuperación que el candidato ha operado en producción a los clientes empresariales de GFT.",
        capabilities: ["RAG", "Búsqueda consciente de permisos", "Consulta de datos estructurados", "Evaluación"] },
      { id: "agentic-workflows", domainId: "enterprise", name: "Automatización agéntica de flujos de trabajo", tagline: "Agentes de varios pasos que planifican y ejecutan procesos entre sistemas con puntos de aprobación humana.",
        objective: "Automatizar procesos que rompen la automatización tradicional porque abarcan sistemas, documentos y criterio.",
        approach: "Agentes orquestados con herramientas para sistemas empresariales, puntos de aprobación explícitos y observabilidad completa de cada acción.",
        implementation: ["Mapear un proceso entre sistemas de extremo a extremo.", "Diseñar el equipo de agentes y los puntos de aprobación.", "Pilotar en un alcance controlado con monitoreo.", "Endurecer y escalar con conectores reutilizables."],
        kpis: ["Rendimiento", "Tasa de error", "Tiempo liberado del personal", "Tasa de excepciones"],
        governance: "Acceso a herramientas con mínimo privilegio, registro de acciones, interruptores de parada y gestión de cambios para prompts y herramientas.",
        gftFit: "Extiende la práctica de automatización inteligente de GFT con patrones agénticos y un modelo operativo de producción.",
        capabilities: ["Orquestación de agentes", "Conectores empresariales", "Observabilidad", "Flujos de aprobación"] },
      { id: "voice-operations", domainId: "enterprise", name: "Agentes de voz multilingües para operaciones", tagline: "Agentes de voz en tiempo real por web y telefonía para servicio, agendamiento y flujos operativos.",
        objective: "Automatizar operaciones intensivas en voz en español e inglés con calidad medible.",
        approach: "Infraestructura de voz de baja latencia, reconocimiento y síntesis de voz, ejecución de herramientas contra sistemas de negocio y monitoreo de calidad por llamada.",
        implementation: ["Seleccionar un caso de uso entrante con datos de volumen.", "Desplegar sobre una arquitectura probada de agentes de voz.", "Evaluar contención y satisfacción semanalmente.", "Expandir a llamadas salientes e idiomas adicionales."],
        kpis: ["Contención", "Tiempo de atención", "Satisfacción", "Costo por llamada"],
        governance: "Consentimiento de grabación, redacción de datos personales, reglas de escalamiento y monitoreo de modos de fallo.",
        gftFit: "Se apoya directamente en la experiencia práctica del candidato construyendo una plataforma multilingüe de agentes de voz en producción.",
        capabilities: ["Voz en tiempo real (WebRTC, telefonía)", "STT y TTS", "Ejecución de herramientas", "Analítica"] },
      { id: "customer-ops-intel", domainId: "enterprise", name: "Inteligencia de operaciones de cliente", tagline: "IA que resume, clasifica y enruta interacciones de clientes y hace aflorar insights operativos.",
        objective: "Mejorar la resolución en el primer contacto y dar a los líderes de operaciones visibilidad en tiempo real de los problemas de los clientes.",
        approach: "Resumen de interacciones, clasificación de intenciones, sugerencias de siguiente mejor acción y tableros alimentados por señales extraídas por IA.",
        implementation: ["Conectar con los canales de interacción y el CRM.", "Entrenar y evaluar la clasificación con datos reales.", "Desplegar funciones de asistencia al agente en un equipo.", "Extender los tableros de insights al liderazgo de operaciones."],
        kpis: ["Resolución en el primer contacto", "Tiempo de trabajo posterior a la llamada", "Precisión del enrutamiento", "Anticipación en la detección de problemas"],
        governance: "Minimización de datos, monitoreo de calidad de las sugerencias y seguimiento de las anulaciones humanas.",
        gftFit: "Complementa los proyectos de experiencia de cliente y transformación digital de GFT con IA operativa.",
        capabilities: ["Clasificación con NLP", "Resumen", "Integraciones con CRM", "Tableros"] },
    ],
  },
  {
    id: "impact", name: "Sostenibilidad e impacto social", short: "Sostenibilidad", icon: "Leaf", accent: "emerald",
    summary: "Plataformas de IA para inteligencia ESG, reporte, analítica ambiental, educación, inclusión y medición de impacto.",
    useCases: [
      { id: "esg-platform", domainId: "impact", name: "Plataforma de inteligencia y reporte ESG", tagline: "Implementar IA que consolide datos de sostenibilidad y automatice reportes respaldados por evidencia.",
        objective: "Reducir el esfuerzo y los errores del reporte ESG y mejorar la calidad de las decisiones de sostenibilidad.",
        approach: "Extracción de documentos y datos, normalización a un modelo de datos de sostenibilidad, mapeo de requisitos a evidencia y divulgaciones redactadas por IA con trazas de auditoría.",
        implementation: ["Modelar las fuentes de datos para un marco de reporte.", "Construir pipelines de extracción y mapeo.", "Ejecutar un ciclo de reporte con un cliente piloto.", "Productizar los componentes para su reutilización."],
        kpis: ["Tiempo de preparación del reporte", "Cobertura de evidencia", "Hallazgos de auditoría", "Actualidad de los datos"],
        governance: "Linaje de evidencia, control de versiones de las divulgaciones y flujos de aprobación por revisores.",
        gftFit: "Extiende la experiencia de GFT en reporte de industrias reguladas hacia la sostenibilidad, con el liderazgo del candidato en plataformas de sostenibilidad.",
        capabilities: ["Inteligencia documental", "Modelado de datos", "Redacción con RAG", "Trazas de auditoría"] },
      { id: "env-analytics", domainId: "impact", name: "Analítica ambiental", tagline: "Monitoreo y analítica sobre datos satelitales, de sensores y operativos para indicadores ambientales.",
        objective: "Dar a operadores y financiadores información ambiental oportuna y confiable.",
        approach: "Pipelines de datos desde fuentes geoespaciales y de sensores, detección de anomalías, tableros de indicadores y resúmenes generados por IA para los grupos de interés.",
        implementation: ["Partir de fuentes de datos existentes con un operador.", "Construir pipelines y modelos de indicadores.", "Validar con expertos del dominio.", "Desplegar tableros y reportes."],
        kpis: ["Cobertura de indicadores", "Anticipación en la detección", "Tiempo de entrega de reportes", "Adopción por grupos de interés"],
        governance: "Procedencia de los datos, validación de modelos con expertos y reporte transparente de la incertidumbre.",
        gftFit: "Reutiliza la ingeniería de datos y nube de GFT en un nuevo dominio con potencial de alianzas entre sus clientes financieros.",
        capabilities: ["Pipelines geoespaciales", "Detección de anomalías", "Tableros", "Plataformas de datos en la nube"] },
      { id: "learning-assistants", domainId: "impact", name: "Asistentes de aprendizaje con IA", tagline: "Asistentes escalables para programas educativos y de formación con visibilidad para los educadores.",
        objective: "Ofrecer apoyo personalizado a los estudiantes a escala y dar a los educadores visibilidad del progreso.",
        approach: "Recuperación sobre planes de estudio, tutoría conversacional con guardrails, analítica de aprendizaje y despliegue multiinquilino para instituciones.",
        implementation: ["Pilotar un curso con una institución.", "Evaluar resultados de aprendizaje y participación.", "Añadir tableros para educadores.", "Escalar entre programas sobre una plataforma compartida."],
        kpis: ["Participación", "Resultados de aprendizaje", "Tiempo ahorrado a educadores", "Costo por estudiante"],
        governance: "Salvaguardas apropiadas por edad, revisión de la precisión del contenido y privacidad desde el diseño para los datos de estudiantes.",
        gftFit: "Se apoya en la experiencia del candidato entregando plataformas de IA a universidades, con la ingeniería de plataformas de GFT.",
        capabilities: ["RAG sobre planes de estudio", "IA conversacional", "Analítica de aprendizaje", "Arquitectura multiinquilino"] },
      { id: "impact-measurement-platform", domainId: "impact", name: "Inclusión y medición de impacto", tagline: "Vinculación asistida por IA para programas de inclusión y medición estandarizada de resultados sociales.",
        objective: "Llegar de forma asequible a poblaciones desatendidas y demostrar los resultados de los programas con datos comparables y auditables.",
        approach: "Asistentes con voz y móvil como primer canal en idiomas locales para inscripción y educación, más una capa de medición que interpreta evidencia cualitativa en indicadores estándar.",
        implementation: ["Co-diseñar con un socio de programa.", "Desplegar asistentes en una comunidad definida.", "Recolectar y estandarizar datos de resultados.", "Reportar a los financiadores con evidencia auditable."],
        kpis: ["Finalización de inscripciones", "Costo por participante", "Cobertura de indicadores", "Tiempo del ciclo de reporte"],
        governance: "Consentimiento informado, protección de datos de grupos vulnerables y metodología transparente para los indicadores.",
        gftFit: "Conecta a los clientes de servicios financieros de GFT y sus mandatos de inclusión con la experiencia del candidato en plataformas de impacto social.",
        capabilities: ["Agentes de voz multilingües", "Entrega móvil", "Interpretación de datos cualitativos", "Reportes"] },
    ],
  },
  {
    id: "delivery", name: "Entrega y operaciones internas de GFT", short: "Entrega GFT", icon: "Building2", accent: "amber",
    summary: "Ingeniería asistida por IA, aceleradores de entrega y productividad interna que hacen a GFT más rápida y consistente.",
    useCases: [
      { id: "ai-assisted-engineering", domainId: "delivery", name: "Entrega de software asistida por IA", tagline: "Estandarizar prácticas de desarrollo asistidas por IA en los equipos de entrega con compuertas de calidad medibles.",
        objective: "Acelerar la entrega y mejorar la consistencia sin reducir la calidad ni la seguridad del código.",
        approach: "Herramientas de desarrollo con IA aprobadas, playbooks de prompts y flujos, revisión y pruebas automatizadas, y métricas de rendimiento y tasa de defectos.",
        implementation: ["Establecer la línea base de métricas de entrega.", "Pilotar prácticas asistidas por IA con dos squads.", "Codificar playbooks y guardrails.", "Desplegar con formación y medición."],
        kpis: ["Tiempo de ciclo", "Tasa de defectos escapados", "Adopción por desarrolladores", "Tiempo de revisión"],
        governance: "Estándares de propiedad y revisión de código, reglas de manejo de propiedad intelectual y datos, y políticas de acceso a herramientas.",
        gftFit: "Apoya la estrategia de entrega centrada en IA de GFT con un modelo regional de habilitación repetible.",
        capabilities: ["Herramientas de codificación con IA", "Integración CI/CD", "Métricas de calidad", "Habilitación"] },
      { id: "delivery-accelerators", domainId: "delivery", name: "Aceleradores de entrega de IA reutilizables", tagline: "Un catálogo de arquitecturas de referencia y componentes para que cada proyecto parta de activos probados.",
        objective: "Reducir el tiempo hasta el primer release en producción en proyectos de IA con clientes.",
        approach: "Arquitecturas de referencia curadas para agentes, RAG y automatización; componentes compartidos con evaluación y observabilidad integradas; proceso de contribución y revisión.",
        implementation: ["Auditar proyectos recientes de IA en busca de patrones repetibles.", "Extraer y endurecer los componentes principales.", "Publicar con documentación y ejemplos.", "Medir la reutilización en nuevos proyectos."],
        kpis: ["Tasa de reutilización de componentes", "Tiempo hasta el primer release", "Defectos en componentes reutilizados", "Contribuciones por trimestre"],
        governance: "Propiedad de los componentes, revisión de seguridad, versionado y políticas de retiro.",
        gftFit: "Complementa los activos de plataforma de GFT, incluido Wynxx cuando corresponda, con aceleradores regionales que retroalimentan las capacidades globales.",
        capabilities: ["Arquitecturas de referencia", "Bibliotecas de componentes", "Documentación", "Arneses de evaluación"] },
      { id: "sales-delivery-assist", domainId: "delivery", name: "Asistentes de propuestas y diseño de soluciones", tagline: "Asistentes de IA que ayudan a ventas y a los equipos de solución a redactar propuestas y arquitecturas a partir de contenido aprobado.",
        objective: "Acortar los ciclos de propuesta y mejorar la consistencia de los diseños de solución.",
        approach: "Recuperación sobre casos de estudio, arquitecturas y guías de precios aprobados; asistentes de redacción; flujos de revisión con arquitectos de solución.",
        implementation: ["Curar el corpus de contenido aprobado.", "Desplegar asistentes de redacción al equipo comercial de una región.", "Medir tiempo de ciclo y calidad.", "Expandir con bucles de retroalimentación."],
        kpis: ["Tiempo de ciclo de propuesta", "Tendencia de la tasa de éxito", "Tiempo de revisión del arquitecto", "Reutilización de contenido"],
        governance: "Controles de confidencialidad, recuperación solo sobre contenido aprobado y aprobación humana de cada propuesta.",
        gftFit: "Permite a GFT demostrar su propia adopción de IA mientras mejora su capacidad de respuesta comercial.",
        capabilities: ["RAG sobre contenido aprobado", "Asistentes de redacción", "Flujos de revisión", "Analítica"] },
      { id: "ai-operations-center", domainId: "delivery", name: "Práctica de operaciones y observabilidad de IA", tagline: "Una práctica compartida para monitorear, evaluar y gestionar el costo de los sistemas de IA en producción.",
        objective: "Mantener los sistemas de IA desplegados confiables, seguros y eficientes en costo en todos los proyectos.",
        approach: "Stack estándar de observabilidad para aplicaciones con LLM, pipelines de evaluación, monitoreo de deriva y costo, playbooks de incidentes y revisiones periódicas de calidad.",
        implementation: ["Definir el estándar de observabilidad y evaluación.", "Instrumentar los sistemas existentes en producción.", "Establecer guardias y cadencias de revisión.", "Reportar confiabilidad y costo mensualmente."],
        kpis: ["Cobertura de sistemas monitoreados", "Tasa de incidentes y MTTR", "Costo por transacción", "Deriva de calidad detectada"],
        governance: "Propiedad clara, SLO para los servicios de IA y rutas de escalamiento para problemas de seguridad.",
        gftFit: "Convierte la entrega de IA en una operación gestionada y repetible en la que los clientes pueden confiar después de la puesta en marcha.",
        capabilities: ["Observabilidad de LLM", "Pipelines de evaluación", "Monitoreo de costos", "Gestión de incidentes"] },
    ],
  },
];

export const aiProfile: typeof enAiProfile = {
  headline: "Liderazgo ejecutivo. Impulso emprendedor. Ingeniería de IA práctica.",
  intro:
    "Liderar la ejecución de IA exige a alguien que haya definido estrategia tecnológica como CTO, construido sistemas de IA con sus propias manos, liderado equipos de ingeniería distribuidos y entendido el negocio al que sirve la tecnología. Andrés reúne las cuatro cosas.",
  pillars: [
    { id: "executive", title: "Liderazgo ejecutivo", icon: "Building2", text: "Liderazgo como CTO y en tecnología de equipos internacionales, arquitectura empresarial y relaciones con socios." },
    { id: "entrepreneur", title: "Experiencia emprendedora", icon: "Rocket", text: "Fundador de empresas tecnológicas llevadas de la idea al mercado, incluida una plataforma que alcanzó a más de 50 millones de personas." },
    { id: "engineer", title: "Ingeniería de IA práctica", icon: "Cpu", text: "Diseñó y construyó personalmente sistemas de LLM, RAG, agentes y voz con IA en producción sobre infraestructura nativa en la nube." },
    { id: "business", title: "Comprensión del negocio", icon: "Target", text: "Banca, fintech, sector público, sostenibilidad y operaciones empresariales, desde la entrega de proyectos hasta la estrategia de producto." },
  ],
  evidence: [
    { org: "Bioanywhere", role: "Fundador y arquitecto de producto · 2024–2026", text: "Desarrollo práctico de una plataforma de IA empresarial: agentes conversacionales y de voz con IA, arquitecturas multiagente, orquestación de LLM, RAG, ejecución de herramientas en miles de aplicaciones y entrega nativa en la nube y multiinquilino.", tags: ["IA agéntica", "RAG", "IA de voz", "Nativa en la nube"] },
    { org: "Legado", role: "Chief Technology Officer · 2024–2025", text: "Liderazgo como CTO de equipos de ingeniería y contratistas internacionales, estrategia tecnológica, arquitectura empresarial, integración blockchain e innovación centrada en sostenibilidad con socios como Deloitte.", tags: ["CTO", "Arquitectura", "Equipos internacionales"] },
    { org: "SDG Investors / sdgtalks.ai", role: "Cofundador y gerente de desarrollo de software · 2020–2024", text: "Liderazgo de plataformas impulsadas por IA para inteligencia de información en sostenibilidad e impacto social: pipelines de contenido con LLM a escala, NLP y chat con IA para universidades de Estados Unidos.", tags: ["Pipelines de LLM", "NLP", "Impacto social"] },
    { org: "mindtalks.ai", role: "Fundador y CTO · 2017–2020", text: "Fundador y CTO de una plataforma tecnológica patentada que alcanzó a más de 50 millones de personas en 10 países, liderando un equipo de siete personas en el desarrollo del producto y la expansión regional.", tags: ["Plataforma patentada", "50M+ de alcance", "10 países"] },
    { org: "Forward", role: "Fundador y gerente de proyectos · 2007–2017", text: "Emprendimiento tecnológico y liderazgo de ingeniería de software en banca, fintech, instituciones públicas y transformación digital empresarial durante una década.", tags: ["Banca", "Fintech", "Transformación"] },
  ],
  technical: {
    title: "Experiencia técnica",
    groups: [
      { label: "IA y ML", items: ["Python", "IA generativa", "IA agéntica", "LangChain", "CrewAI", "LlamaIndex", "RAG y búsqueda vectorial (pgvector, OpenSearch)", "Machine Learning (especialización de Stanford)", "TensorFlow, Scikit-Learn"] },
      { label: "Plataformas y nube", items: ["AWS (EKS, Lambda, Bedrock, Textract)", "Google Cloud Run", "Docker y CI/CD", "PostgreSQL, DynamoDB, S3", "Next.js y TypeScript"] },
      { label: "Tiempo real y voz", items: ["LiveKit (WebRTC)", "Deepgram STT", "Cartesia TTS", "Telefonía SIP"] },
      { label: "Operación y habilitación", items: ["LangFuse, LangSmith, Datadog", "Herramientas de desarrollo asistido por IA", "Integraciones empresariales (Composio, MCP)", "Entrega ágil (SCRUM)"] },
    ],
  },
  radar: [
    { axis: "Ingeniería de IA", value: 95 },
    { axis: "Liderazgo tecnológico", value: 92 },
    { axis: "Arquitectura empresarial", value: 88 },
    { axis: "Entrega y operaciones", value: 86 },
    { axis: "Alineación con el negocio", value: 88 },
    { axis: "Gobernanza", value: 82 },
  ],
  radarNote: "Énfasis relativo autoevaluado por área de capacidad, con fines ilustrativos.",
};

export const aiStandards: typeof enAiStandards = {
  headline: "Estándares de ingeniería e IA responsable, integrados.",
  intro:
    "Escalar la IA con seguridad es una disciplina de ingeniería. Estos son los estándares que la función establecería y exigiría a cada solución de IA, desde el primer prototipo hasta los sistemas de los que los clientes dependen a diario.",
  pillars: [
    { id: "evaluation", title: "Evaluación", icon: "FlaskConical", text: "Conjuntos de prueba representativos, umbrales de calidad y seguridad, y verificaciones de regresión en cada cambio de modelos, prompts o herramientas.", practices: ["Conjuntos de datos de referencia por caso de uso", "Evaluación automatizada en CI", "Revisión humana de casos límite"] },
    { id: "observability", title: "Observabilidad", icon: "BarChart3", text: "Trazabilidad, registro, visibilidad de costo y latencia para cada interacción de IA, para detectar y corregir fallos con rapidez.", practices: ["Trazado y analítica de LLM", "Presupuestos de costo y latencia", "Alertas de deriva y calidad"] },
    { id: "security", title: "Seguridad y privacidad", icon: "ShieldCheck", text: "Acceso a herramientas con mínimo privilegio, minimización de datos, manejo de datos personales y despliegue seguro alineado con los requisitos empresariales y regulatorios.", practices: ["Control de acceso y gestión de secretos", "Redacción de datos personales y reglas de retención", "Modelado de amenazas para agentes"] },
    { id: "responsible", title: "IA responsable", icon: "Scale", text: "Transparencia, supervisión humana, monitoreo de equidad y responsabilidad clara por cada sistema desplegado.", practices: ["Humano en el circuito desde el diseño", "Revisiones de sesgo y equidad", "Documentación de modelos y prompts"] },
    { id: "reliability", title: "Confiabilidad", icon: "Repeat", text: "Liberaciones progresivas, rutas de reversión, SLO y playbooks de incidentes para que los servicios de IA cumplan el mismo estándar que cualquier sistema en producción.", practices: ["Despliegues canary", "SLO y guardias", "Revisiones de incidentes"] },
    { id: "reuse", title: "Reutilización y documentación", icon: "Layers", text: "Arquitecturas de referencia, componentes compartidos y documentación que permiten a los equipos partir de activos probados.", practices: ["Registros de decisiones de arquitectura", "Catálogo de componentes", "Playbooks y formación"] },
  ],
  governanceFlow: ["Ingreso y clasificación de riesgo", "Revisión de diseño", "Compuerta de evaluación", "Revisión de seguridad y privacidad", "Aprobación de despliegue", "Monitoreo y revisión periódica"],
};

export const aiImpact: typeof enAiImpact = {
  headline: "La ejecución se mide. El impacto se reporta.",
  intro:
    "La función de Head of AI reportaría cada trimestre sobre adopción, productividad, desempeño de entrega, eficiencia de costos y retorno de la inversión, con un cuadro de mando acordado con el liderazgo regional y global.",
  kpis: [
    { id: "adoption", label: "Adopción de IA en unidades de negocio y clientes", icon: "Users" },
    { id: "production", label: "Soluciones de IA desplegadas con éxito en producción", icon: "Rocket" },
    { id: "productivity", label: "Mejoras de productividad en procesos aumentados", icon: "TrendingUp" },
    { id: "cost", label: "Optimización de costos operativos", icon: "Scale" },
    { id: "delivery", label: "Aceleración de la entrega por prácticas asistidas por IA", icon: "Workflow" },
    { id: "quality", label: "Métricas de confiabilidad, calidad e incidentes", icon: "ShieldCheck" },
    { id: "reuse", label: "Activos reutilizables y adopción de plataformas", icon: "Layers" },
    { id: "governance", label: "Soluciones bajo gobernanza y monitoreo", icon: "Compass" },
    { id: "cx", label: "Mejoras en la experiencia de cliente", icon: "HeartHandshake" },
    { id: "roi", label: "Retorno de la inversión por iniciativa", icon: "Target" },
  ],
  levers: [
    { id: "efficiency", title: "Eficiencia operativa", text: "Procesos automatizados y aumentados que reducen costo y tiempo de ciclo.", icon: "Workflow", color: "var(--accent-blue)", examples: ["Automatización de back office", "Flujos agénticos", "Inteligencia de riesgo y cumplimiento"] },
    { id: "productivity", title: "Productividad", text: "Las personas dedican su tiempo al criterio, no a buscar y volver a digitar.", icon: "TrendingUp", color: "var(--accent-cyan)", examples: ["Asistentes de conocimiento", "Entrega asistida por IA", "Asistentes de propuestas"] },
    { id: "quality", title: "Calidad y confiabilidad", text: "Resultados consistentes con menos errores y recuperación más rápida.", icon: "ShieldCheck", color: "var(--accent-emerald)", examples: ["Compuertas de evaluación", "Práctica de observabilidad", "Revisiones de gobernanza"] },
    { id: "customer", title: "Valor para el cliente", text: "Servicio más rápido, más personal y más disponible en todos los canales.", icon: "HeartHandshake", color: "var(--accent-amber)", examples: ["Agentes bancarios", "Operaciones por voz", "Inteligencia de operaciones de cliente"] },
    { id: "speed", title: "Velocidad de entrega", text: "Del prototipo a la producción en semanas, sobre activos reutilizables.", icon: "Rocket", color: "var(--accent-violet)", examples: ["Aceleradores de entrega", "Arquitecturas de referencia", "Ruta de prototipo a producción"] },
  ],
  maturity: {
    title: "Trayectoria ilustrativa de adopción",
    disclaimer: "Hipotética y cualitativa. Ilustra cómo suele progresar un programa de adopción a lo largo de cuatro trimestres; no es un pronóstico ni un compromiso de GFT.",
    stages: [
      { quarter: "T1", label: "Evaluar y pilotar", systems: 2, units: 2 },
      { quarter: "T2", label: "Estandarizar", systems: 5, units: 4 },
      { quarter: "T3", label: "Escalar", systems: 9, units: 6 },
      { quarter: "T4", label: "Operar", systems: 14, units: 8 },
    ],
  },
};

export const aiRoadmap: RoadmapData = {
  headline: "Noventa días para una función de IA en operación.",
  intro:
    "El primer trimestre establece los hechos, las prioridades y las prácticas operativas. Termina con soluciones validadas avanzando a producción, gobernanza implantada y un modelo operativo escalable acordado con el liderazgo.",
  caveat:
    "Prioridades propuestas, sujetas a la estrategia interna, los recursos, la alineación con el liderazgo global de IA y las aprobaciones de GFT. El plan no promete resultados específicos en 90 días; establece la base operativa que los produce.",
  phases: [
    { id: "ai-phase-1", range: "Días 1–30", title: "Evaluar y alinear", focus: "Entender el panorama, alinearse con el liderazgo.", actions: ["Evaluar las capacidades, iniciativas y prioridades actuales de IA de GFT.", "Identificar oportunidades de adopción de IA y mejora operativa.", "Involucrar a los grupos de interés clave de tecnología y negocio.", "Definir una hoja de ruta inicial de transformación con IA."], deliverable: "Hoja de ruta regional de transformación con IA" },
    { id: "ai-phase-2", range: "Días 31–60", title: "Priorizar e implementar", focus: "Elegir lo que importa, empezar a construir.", actions: ["Seleccionar iniciativas de IA de alto impacto.", "Establecer prioridades de implementación y métricas de éxito.", "Coordinar equipos técnicos y decisiones de arquitectura.", "Iniciar proyectos piloto y programas de adopción de IA."], deliverable: "Portafolio priorizado de iniciativas de IA con pilotos en marcha" },
    { id: "ai-phase-3", range: "Días 61–90", title: "Desplegar y escalar", focus: "Llegar a producción, medir y fijar el modelo operativo.", actions: ["Avanzar las soluciones de IA validadas hacia producción.", "Establecer prácticas de monitoreo de desempeño y gobernanza.", "Medir adopción, eficiencia e impacto de negocio.", "Definir un modelo operativo de IA escalable y una hoja de ruta de más largo plazo."], deliverable: "Modelo operativo de IA y hoja de ruta de escalamiento" },
  ],
};

export const aiOperatingModel: typeof enAiOperatingModel = {
  headline: "Una función regional de IA que fortalece a la global.",
  intro:
    "El rol operaría dentro de la organización de IA existente de GFT, no al margen de ella: alineado con el liderazgo global de IA y los equipos de plataforma, integrado en la entrega regional y responsable ante el liderazgo de negocio regional por la adopción y el impacto.",
  role: "Head of AI (regional)",
  mission:
    "Asegurar que la IA se adopte estratégicamente, se ejecute técnicamente, se gobierne con eficacia y se escale con éxito en las operaciones regionales y los proyectos con clientes de GFT, en coordinación con la organización global de IA de GFT.",
  responsibilities: ["Estrategia y hoja de ruta de IA", "Liderazgo de ingeniería de IA", "Adopción empresarial de IA", "Desarrollo de productos y plataformas de IA", "Gobernanza e IA responsable", "Estándares de evaluación y observabilidad", "Alineación con el negocio y KPI", "Diseño de soluciones para clientes con ventas", "Desarrollo y habilitación del talento", "Coordinación con el liderazgo global de IA"],
  collaborators: [
    { id: "global-ai", name: "Liderazgo global de IA y equipos de plataforma", icon: "Cpu", how: "Alinear las prioridades regionales con la estrategia global, adoptar y extender activos de plataforma como Wynxx cuando corresponda, y devolver los aprendizajes regionales." },
    { id: "regional", name: "Liderazgo ejecutivo regional", icon: "Building2", how: "Acordar prioridades y el cuadro de mando de impacto, y reportar adopción, eficiencia y ROI cada trimestre." },
    { id: "delivery", name: "Equipos de ingeniería y entrega de software", icon: "Workflow", how: "Integrar arquitectura, estándares y aceleradores de IA en los proyectos, y acompañar a los equipos en la entrega asistida por IA." },
    { id: "banking", name: "Práctica de banca y servicios financieros", icon: "Landmark", how: "Priorizar y entregar los casos de uso de IA con mayor demanda de clientes y preparación regulatoria." },
    { id: "sales", name: "Ventas y desarrollo de negocio", icon: "Megaphone", how: "Traducir los requisitos de los clientes en diseños de solución, apoyar propuestas y asegurar que lo que se vende pueda entregarse." },
    { id: "governance", name: "Seguridad, riesgo y cumplimiento", icon: "ShieldCheck", how: "Co-liderar el marco de gobernanza de IA, las cadencias de revisión y la alineación regulatoria." },
    { id: "clients", name: "Clientes", icon: "Users", how: "Ejecutar programas de adopción y despliegues en producción con los equipos de los clientes, midiendo los resultados en conjunto." },
  ],
  complementNote:
    "Esta es una propuesta de función regional complementaria. No asume que estas responsabilidades estén hoy sin asignar en GFT, y se definiría con el liderazgo global de IA para evitar duplicidades.",
};

export const aiClosing: typeof enAiClosing = {
  headline: "Hagamos que la IA entregue resultados en GFT y en sus clientes.",
  supporting:
    "GFT tiene la estrategia, las plataformas y el talento de ingeniería. Lo que ofrezco es el liderazgo de ejecución para convertirlos en IA adoptada, gobernada y de nivel de producción en toda la región: medida en productividad, confiabilidad, costo y valor para el cliente.",
  personal:
    "Rohan, me encantaría conversar sobre cómo una función regional de Head of AI podría acelerar la adopción y la calidad de entrega para GFT y sus clientes en la Región Andina y más allá.",
  primaryCta: "Conversemos sobre el rol de Head of AI",
  emailSubject: "Head of AI — GFT Technologies",
};
