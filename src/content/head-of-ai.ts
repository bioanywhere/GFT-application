import type { IconName, RoadmapPhase } from "./types";

export type AiSectionId = "ai-proposal" | "ai-context" | "ai-mandate" | "ai-lifecycle" | "ai-usecases" | "ai-why-andres" | "ai-standards" | "ai-impact" | "ai-roadmap" | "ai-operating-model" | "ai-contact";

export const aiNavigation: readonly { id: AiSectionId; label: string }[] = [
  { id: "ai-proposal", label: "Proposal" },
  { id: "ai-context", label: "Why Now" },
  { id: "ai-mandate", label: "Mandate" },
  { id: "ai-lifecycle", label: "Delivery Model" },
  { id: "ai-usecases", label: "Use Cases" },
  { id: "ai-why-andres", label: "Why Andrés" },
  { id: "ai-standards", label: "Standards" },
  { id: "ai-impact", label: "Impact" },
  { id: "ai-roadmap", label: "90 Days" },
  { id: "ai-operating-model", label: "Operating Model" },
  { id: "ai-contact", label: "Contact" },
];

export const aiHero = {
  eyebrow: "A Strategic Execution Proposal for GFT Technologies",
  headlineStart: "Making AI Work Across GFT.",
  headlineAccent: "In Production, At Scale.",
  supporting: "Head of AI",
  description:
    "An executive proposal to strengthen how GFT and its clients adopt, engineer, govern, and scale artificial intelligence: turning strategy into production systems, production systems into measurable operational impact.",
  valueStatement:
    "I lead AI from strategy to production — defining where it creates value, building the teams and platforms that deliver it, and making sure it runs reliably, securely, and measurably.",
  roleFrame:
    "Proposed as a regional AI leadership function that complements GFT's existing global AI organization and technical leadership. It does not assume those responsibilities are unassigned today.",
  stack: [
    { id: "strategy", label: "AI Strategy", sub: "Priorities, roadmaps, objectives" },
    { id: "platforms", label: "Platforms & Assets", sub: "Wynxx, accelerators, reusable components" },
    { id: "engineering", label: "AI Engineering", sub: "LLMs, RAG, agents, ML, automation" },
    { id: "adoption", label: "Enterprise Adoption", sub: "Workflows, agents, productivity" },
    { id: "governance", label: "Governance", sub: "Responsible AI, security, evaluation" },
    { id: "impact", label: "Measurable Impact", sub: "Adoption, efficiency, ROI" },
  ],
};

export const aiContext = {
  headline: "GFT Is Already AI-Centric. The Next Step Is Scaling Execution.",
  intro:
    "GFT has made AI the centre of its strategy, with a proprietary agentic platform, banking-specific agents, and recognized delivery depth in financial services. The opportunity now is operational: making sure every region, every delivery team, and every client engagement can adopt that capability consistently, securely, and at production quality.",
  coreMessage:
    "The value of AI is realized in production, not in demos. A regional Head of AI exists to make adoption systematic: the right use cases, the right architecture, the right standards, and measurable results across GFT's operations and its clients' businesses.",
  pillars: [
    { id: "adopt", title: "Adopt", icon: "Users" as IconName, text: "Accelerate AI adoption across GFT's services, internal operations, and client organizations with clear priorities and programs." },
    { id: "engineer", title: "Engineer", icon: "Cpu" as IconName, text: "Build enterprise-grade AI solutions on GFT's platforms and standards: scalable, secure, observable, and production-ready." },
    { id: "govern", title: "Govern & Scale", icon: "ShieldCheck" as IconName, text: "Establish responsible AI, evaluation, and operating practices that let successful solutions scale with confidence." },
  ],
  contrast: {
    title: "How this differs from the AI Ventures proposal",
    text: "Head of AI Ventures & Business Innovation is about growth: finding and commercializing new AI businesses. Head of AI is about execution: making AI work effectively across what GFT already delivers. Both draw on the same experience; they answer different organizational priorities.",
  },
  complement: {
    title: "Complementing GFT's global AI organization",
    text: "GFT already has global AI leadership, platform teams, and engineering practices. This proposal is for a regional function that translates those capabilities into adoption, delivery quality, and client outcomes in the Andean region and the markets it serves, in close coordination with global leadership.",
  },
};

export interface MandateArea {
  id: string;
  number: string;
  title: string;
  icon: IconName;
  summary: string;
  responsibilities: string[];
  deliverables: string[];
  kpis: string[];
  outcome: string;
}

export const aiMandate = {
  headline: "Six Responsibilities. One Operating Discipline.",
  intro:
    "The role is defined by what it must make happen: AI strategy that is executed, engineering that reaches production, adoption that changes how work gets done, platforms that compound, governance that protects, and impact that is measured.",
  areas: [
    {
      id: "strategy",
      number: "01",
      title: "AI Strategy & Leadership",
      icon: "Compass",
      summary: "Define and execute AI strategies aligned with GFT's business objectives, and lead AI transformation across business units and industries.",
      responsibilities: [
        "Define and execute AI strategies aligned with GFT's business objectives.",
        "Identify opportunities to integrate AI across existing services, products, and internal operations.",
        "Lead AI transformation initiatives across business units and industries.",
        "Establish AI roadmaps, priorities, and measurable objectives.",
      ],
      deliverables: ["Regional AI strategy and roadmap", "Prioritized initiative portfolio", "Quarterly objectives and reviews"],
      kpis: ["Initiatives delivered against roadmap", "Business units with active AI programs", "Objective attainment per quarter"],
      outcome: "AI investment flows to the initiatives with the clearest business value, with leadership aligned on priorities and progress.",
    },
    {
      id: "engineering",
      number: "02",
      title: "AI Engineering & Technical Excellence",
      icon: "Cpu",
      summary: "Lead multidisciplinary AI engineering teams and the architecture of enterprise-grade solutions built on generative AI, LLMs, RAG, agentic AI, machine learning, and intelligent automation.",
      responsibilities: [
        "Lead multidisciplinary AI engineering teams.",
        "Oversee the architecture and implementation of enterprise-grade AI solutions.",
        "Develop solutions using Generative AI, LLMs, RAG, Agentic AI, Machine Learning, and intelligent automation.",
        "Ensure AI solutions are scalable, reliable, secure, and production-ready.",
        "Promote engineering standards, AI observability, testing, and continuous improvement.",
      ],
      deliverables: ["Reference architectures", "Engineering standards and playbooks", "Production-ready solutions"],
      kpis: ["Solutions in production", "Release reliability and incident rate", "Evaluation coverage of deployed models"],
      outcome: "Teams ship AI systems that behave predictably in production and can be maintained and extended by others.",
    },
    {
      id: "adoption",
      number: "03",
      title: "Enterprise AI Adoption & Transformation",
      icon: "Users",
      summary: "Accelerate AI adoption across GFT and its clients by optimizing workflows, reducing operational cost, and improving productivity with intelligent automation and AI agents.",
      responsibilities: [
        "Accelerate AI adoption across GFT and its clients.",
        "Identify opportunities to optimize workflows, reduce operational costs, and improve productivity.",
        "Implement intelligent automation and AI agents in enterprise processes.",
        "Support organizational transformation through AI-enabled solutions.",
      ],
      deliverables: ["Adoption programs per business unit", "Process automation portfolio", "Enablement and training tracks"],
      kpis: ["Active users of AI tools", "Processes automated or augmented", "Hours released and cost per transaction"],
      outcome: "AI becomes part of how GFT and its clients operate, not a parallel initiative that lives beside the real work.",
    },
    {
      id: "platforms",
      number: "04",
      title: "AI Product & Platform Development",
      icon: "Layers",
      summary: "Lead the development and evolution of AI-powered products and platforms, leveraging and extending GFT's existing assets, including Wynxx, where strategically appropriate.",
      responsibilities: [
        "Lead the development and evolution of AI-powered products and platforms.",
        "Leverage and extend GFT's existing AI capabilities and assets, including Wynxx, where strategically appropriate.",
        "Transform AI prototypes into reliable, scalable production solutions.",
        "Promote reusable AI architectures, components, and enterprise integrations.",
      ],
      deliverables: ["Reusable component catalogue", "Prototype-to-production pathway", "Platform adoption plan"],
      kpis: ["Share of solutions built on shared components", "Time from prototype to production", "Platform reuse across engagements"],
      outcome: "Each delivery makes the next one faster, because capabilities are captured as assets rather than rebuilt.",
    },
    {
      id: "governance",
      number: "05",
      title: "AI Governance & Responsible AI",
      icon: "ShieldCheck",
      summary: "Establish AI governance frameworks that promote responsible adoption, security, privacy, regulatory compliance, evaluation, monitoring, and risk management.",
      responsibilities: [
        "Establish appropriate AI governance frameworks.",
        "Promote responsible AI adoption, security, privacy, and regulatory compliance.",
        "Define evaluation methodologies, monitoring standards, and risk management practices.",
        "Ensure AI initiatives meet enterprise requirements and business expectations.",
      ],
      deliverables: ["AI governance framework", "Evaluation and monitoring standards", "Risk register and review cadence"],
      kpis: ["Solutions with evaluation and monitoring in place", "Governance reviews completed", "Incidents and time to resolution"],
      outcome: "Clients and regulators can trust what GFT deploys, and teams can move fast inside clear guardrails.",
    },
    {
      id: "impact",
      number: "06",
      title: "Business Alignment & Measurable Impact",
      icon: "Target",
      summary: "Connect AI strategy to concrete business objectives, with KPIs for performance, adoption, cost efficiency, and return on investment, in collaboration with commercial and business leaders.",
      responsibilities: [
        "Connect AI strategy with concrete business objectives.",
        "Improve operational efficiency and customer experience.",
        "Accelerate delivery through AI-powered development practices.",
        "Establish KPIs to evaluate AI performance, adoption, cost efficiency, and return on investment.",
        "Collaborate with commercial and business leaders to translate client requirements into valuable AI solutions.",
      ],
      deliverables: ["AI impact scorecard", "ROI model per initiative", "Client solution briefs with sales and delivery"],
      kpis: ["Measured ROI per initiative", "Delivery acceleration from AI-assisted practices", "Client satisfaction on AI engagements"],
      outcome: "Every AI initiative can answer the question leadership will ask: what did it change, and what did it return?",
    },
  ] satisfies MandateArea[],
};

export const aiLifecycle = {
  headline: "From Prototype to Production. Every Time.",
  intro:
    "Most AI effort is lost between a convincing demo and a system people rely on. This delivery model closes that gap with explicit gates for evaluation, security, and operations before anything reaches users.",
  stages: [
    { id: "frame", label: "Frame", icon: "Target" as IconName, text: "Define the business objective, users, constraints, and the metric that will declare success.", gate: "Clear owner and success metric" },
    { id: "design", label: "Design", icon: "Compass" as IconName, text: "Choose the architecture: models, retrieval, agents, integrations, data flows, and guardrails.", gate: "Architecture and risk review" },
    { id: "build", label: "Build", icon: "Hammer" as IconName, text: "Implement on shared platforms and components with engineering standards from day one.", gate: "Code, tests, and evaluation suite" },
    { id: "evaluate", label: "Evaluate", icon: "FlaskConical" as IconName, text: "Measure quality, safety, cost, and latency against the baseline with representative data.", gate: "Evaluation thresholds met" },
    { id: "deploy", label: "Deploy", icon: "Rocket" as IconName, text: "Release progressively with monitoring, observability, and rollback in place.", gate: "Security and operations sign-off" },
    { id: "operate", label: "Operate & Improve", icon: "Repeat" as IconName, text: "Track adoption and impact, manage drift and cost, and feed learnings into the next cycle.", gate: "Impact reported quarterly" },
  ],
  principles: [
    { title: "Experimentation with discipline", text: "Fast iteration inside clear evaluation loops, because AI systems are probabilistic and must be measured, not assumed." },
    { title: "Platform thinking", text: "Shared components, reference architectures, and observability so teams move faster without reinventing the basics." },
    { title: "AI-assisted engineering", text: "Development practices that use AI tooling to accelerate delivery while keeping quality and review standards high." },
    { title: "Production first", text: "Security, cost, latency, and operability are design inputs, not afterthoughts added before launch." },
  ],
};

export interface AiUseCase {
  id: string;
  domainId: string;
  name: string;
  tagline: string;
  objective: string;
  approach: string;
  implementation: string[];
  kpis: string[];
  governance: string;
  gftFit: string;
  capabilities: string[];
}

export interface AiDomain {
  id: string;
  name: string;
  short: string;
  icon: IconName;
  accent: "blue" | "emerald" | "amber" | "violet" | "magenta";
  summary: string;
  useCases: AiUseCase[];
}

export const aiUseCasesSection = {
  headline: "Where AI Execution Creates Value First.",
  intro:
    "An implementation-oriented portfolio: sixteen use cases across banking, enterprise operations, sustainability and social impact, and GFT's own delivery practice. Each one is framed as it would be run, with objective, approach, implementation path, KPIs, and governance. They are candidates for prioritization, not commitments.",
  note: "Use cases are illustrative priorities for validation with GFT's leadership and clients. They do not describe existing GFT engagements or guaranteed results.",
};

export const aiDomains: AiDomain[] = [
  {
    id: "banking",
    name: "Banking & Financial Services",
    short: "Banking",
    icon: "Landmark",
    accent: "blue",
    summary: "Deploy AI agents, optimize banking workflows, and strengthen risk and operations on top of GFT's financial-services depth.",
    useCases: [
      {
        id: "banking-agents-production",
        domainId: "banking",
        name: "Banking Agents in Production",
        tagline: "Take conversational and voice agents from pilot to reliable, governed production for customer service journeys.",
        objective: "Reduce cost per interaction and improve resolution on high-volume banking journeys without degrading customer trust.",
        approach: "Journey-specific agents with authentication, tool access to core systems, escalation with context, and continuous evaluation against quality and compliance criteria.",
        implementation: ["Select two high-volume journeys and define baselines.", "Build on GFT's agent capabilities and reference architecture.", "Run evaluation suites for accuracy, safety, and tone.", "Release progressively with monitoring and human fallback."],
        kpis: ["Containment rate", "Average handle time", "Customer satisfaction", "Escalation quality"],
        governance: "Conversation logging, PII handling, model and prompt versioning, and regular review of failure cases with compliance.",
        gftFit: "Directly extends GFT's publicly described banking agent capabilities with a production operating discipline.",
        capabilities: ["Real-time voice and chat agents", "Core-banking integrations", "Evaluation pipelines", "Observability"],
      },
      {
        id: "lending-ops",
        domainId: "banking",
        name: "AI-Augmented Lending Operations",
        tagline: "Decision-support assistants that accelerate credit analysis and documentation while preserving human accountability.",
        objective: "Shorten time to decision and increase analyst throughput on SME and consumer lending.",
        approach: "Retrieval over borrower documents and internal data, structured memo drafting, risk-signal surfacing, and full traceability of sources used.",
        implementation: ["Map the current credit workflow and decision points.", "Build retrieval and drafting assistants with explainability.", "Validate on historical cases with credit teams.", "Deploy to one lending unit with monitored rollout."],
        kpis: ["Memo preparation time", "Decision cycle time", "Analyst throughput", "Override and correction rate"],
        governance: "Model risk management alignment, audit trails, bias monitoring, and clear separation between recommendation and decision.",
        gftFit: "Aligned with GFT's public work on generative AI credit-risk assistants and its risk and compliance practice.",
        capabilities: ["Document intelligence", "RAG with citations", "Model governance", "Secure deployment"],
      },
      {
        id: "back-office-automation",
        domainId: "banking",
        name: "Back-Office Process Automation",
        tagline: "Agentic automation of document-heavy operations: onboarding, KYC reviews, reconciliations, and reporting.",
        objective: "Cut processing cost and cycle time in operations while improving accuracy and auditability.",
        approach: "Agents that read documents, extract and verify data, apply policy rules, route exceptions to people, and record every step.",
        implementation: ["Choose one process with measurable volume.", "Design the agent workflow with human checkpoints.", "Pilot for four to six weeks against the baseline.", "Scale to adjacent processes with the same components."],
        kpis: ["Straight-through processing rate", "Cycle time", "Error rate", "Cost per case"],
        governance: "Policy-as-code, exception handling, audit logs, and periodic accuracy sampling with operations leadership.",
        gftFit: "Builds on GFT's intelligent automation and modernization work for banking operations.",
        capabilities: ["Document processing", "Workflow orchestration", "Rules engines", "Audit logging"],
      },
      {
        id: "risk-compliance-intel",
        domainId: "banking",
        name: "Risk & Compliance Intelligence",
        tagline: "AI assistants that help risk and compliance teams monitor, investigate, and report faster.",
        objective: "Reduce investigation time and improve consistency in compliance and risk operations.",
        approach: "Case summarization, pattern detection over transactions and documents, regulatory knowledge retrieval, and draft reporting with full citations.",
        implementation: ["Identify the highest-effort investigation types.", "Build a governed knowledge base of policies and regulation.", "Deploy assistants to a pilot team with evaluation.", "Integrate with case management systems."],
        kpis: ["Investigation time", "Cases per analyst", "Report quality scores", "False-positive handling time"],
        governance: "Strict access control, explainability of flagged items, and regulator-ready documentation of model behavior.",
        gftFit: "Complements GFT's compliance and anti-money-laundering capabilities with AI-assisted operations.",
        capabilities: ["Retrieval and summarization", "Anomaly detection", "Case-system integration", "Explainability"],
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Operations",
    short: "Enterprise",
    icon: "Workflow",
    accent: "violet",
    summary: "Intelligent automation, knowledge systems, and AI agents that change how enterprise work gets done.",
    useCases: [
      {
        id: "knowledge-assistants",
        domainId: "enterprise",
        name: "Governed Enterprise Knowledge Assistants",
        tagline: "Permission-aware assistants over documents, tickets, and databases with cited answers.",
        objective: "Reduce time spent searching for information and repeated expert questions across departments.",
        approach: "Retrieval-augmented assistants with access control, citations, structured-data querying, and quality monitoring per knowledge domain.",
        implementation: ["Start with one high-value knowledge domain.", "Index with permissions preserved.", "Measure answer accuracy with a labelled test set.", "Expand domain by domain based on results."],
        kpis: ["Answer accuracy", "Time to information", "Adoption per department", "Deflected expert requests"],
        governance: "Source attribution, permission inheritance, retention policies, and periodic accuracy audits.",
        gftFit: "Applies the retrieval architectures the candidate has run in production to GFT's enterprise clients.",
        capabilities: ["RAG", "Permission-aware search", "Structured data querying", "Evaluation"],
      },
      {
        id: "agentic-workflows",
        domainId: "enterprise",
        name: "Agentic Workflow Automation",
        tagline: "Multi-step agents that plan and execute processes across systems with human approval points.",
        objective: "Automate processes that break traditional automation because they span systems, documents, and judgement.",
        approach: "Orchestrated agents with tools for enterprise systems, explicit approval checkpoints, and full observability of every action.",
        implementation: ["Map one cross-system process end to end.", "Design the agent team and approval points.", "Pilot in a controlled scope with monitoring.", "Harden and scale with reusable connectors."],
        kpis: ["Throughput", "Error rate", "Staff time released", "Exception rate"],
        governance: "Least-privilege tool access, action logging, kill switches, and change management for prompts and tools.",
        gftFit: "Extends GFT's intelligent automation practice with agentic patterns and a production operating model.",
        capabilities: ["Agent orchestration", "Enterprise connectors", "Observability", "Approval workflows"],
      },
      {
        id: "voice-operations",
        domainId: "enterprise",
        name: "Multilingual Voice Agents for Operations",
        tagline: "Real-time voice agents over web and telephony for service, scheduling, and operational workflows.",
        objective: "Automate voice-heavy operations in Spanish and English with measurable quality.",
        approach: "Low-latency voice infrastructure, speech recognition and synthesis, tool execution against business systems, and quality monitoring per call.",
        implementation: ["Select one inbound use case with volume data.", "Deploy on a proven voice-agent architecture.", "Evaluate containment and satisfaction weekly.", "Expand to outbound and additional languages."],
        kpis: ["Containment", "Handle time", "Satisfaction", "Cost per call"],
        governance: "Call recording consent, PII redaction, escalation rules, and monitoring of failure modes.",
        gftFit: "Draws directly on the candidate's hands-on experience building a production multilingual voice-agent platform.",
        capabilities: ["Real-time voice (WebRTC, telephony)", "STT and TTS", "Tool execution", "Analytics"],
      },
      {
        id: "customer-ops-intel",
        domainId: "enterprise",
        name: "Customer Operations Intelligence",
        tagline: "AI that summarizes, classifies, and routes customer interactions and surfaces operational insight.",
        objective: "Improve first-contact resolution and give operations leaders real-time visibility into customer issues.",
        approach: "Interaction summarization, intent classification, next-best-action suggestions, and dashboards fed by AI-extracted signals.",
        implementation: ["Connect to interaction channels and CRM.", "Train and evaluate classification on real data.", "Deploy agent-assist features to one team.", "Roll out insights dashboards to operations leadership."],
        kpis: ["First-contact resolution", "After-call work time", "Routing accuracy", "Issue detection lead time"],
        governance: "Data minimization, quality monitoring of suggestions, and human override tracking.",
        gftFit: "Complements GFT's customer experience and digital transformation engagements with operational AI.",
        capabilities: ["NLP classification", "Summarization", "CRM integrations", "Dashboards"],
      },
    ],
  },
  {
    id: "impact",
    name: "Sustainability & Social Impact",
    short: "Sustainability",
    icon: "Leaf",
    accent: "emerald",
    summary: "AI platforms for ESG intelligence, reporting, environmental analytics, education, inclusion, and impact measurement.",
    useCases: [
      {
        id: "esg-platform",
        domainId: "impact",
        name: "ESG Intelligence & Reporting Platform",
        tagline: "Implement AI that consolidates sustainability data and automates evidence-backed reporting.",
        objective: "Reduce the effort and error of ESG reporting while improving the quality of sustainability decisions.",
        approach: "Document and data extraction, normalization into a sustainability data model, requirement-to-evidence mapping, and AI-drafted disclosures with audit trails.",
        implementation: ["Model the data sources for one reporting framework.", "Build extraction and mapping pipelines.", "Run one reporting cycle with a pilot client.", "Productize the components for reuse."],
        kpis: ["Report preparation time", "Evidence coverage", "Audit findings", "Data freshness"],
        governance: "Evidence lineage, version control of disclosures, and reviewer sign-off workflows.",
        gftFit: "Extends GFT's regulated-industry reporting experience into sustainability, informed by the candidate's sustainability-platform leadership.",
        capabilities: ["Document intelligence", "Data modelling", "RAG drafting", "Audit trails"],
      },
      {
        id: "env-analytics",
        domainId: "impact",
        name: "Environmental Analytics",
        tagline: "Monitoring and analytics over satellite, sensor, and operational data for environmental indicators.",
        objective: "Give operators and financiers timely, trustworthy environmental information.",
        approach: "Data pipelines from geospatial and sensor sources, anomaly detection, indicator dashboards, and AI-generated summaries for stakeholders.",
        implementation: ["Start from existing data sources with one operator.", "Build pipelines and indicator models.", "Validate with domain experts.", "Deploy dashboards and reporting."],
        kpis: ["Indicator coverage", "Detection lead time", "Report turnaround", "Stakeholder adoption"],
        governance: "Data provenance, model validation with domain experts, and transparent uncertainty reporting.",
        gftFit: "Reuses GFT's data and cloud engineering in a new domain with partnership potential among financial clients.",
        capabilities: ["Geospatial pipelines", "Anomaly detection", "Dashboards", "Cloud data platforms"],
      },
      {
        id: "learning-assistants",
        domainId: "impact",
        name: "AI Learning Assistants",
        tagline: "Scalable assistants for education and training programs with educator insight.",
        objective: "Deliver personalized support to learners at scale and give educators visibility into progress.",
        approach: "Retrieval over curricula, conversational tutoring with guardrails, learning analytics, and multi-tenant deployment for institutions.",
        implementation: ["Pilot one course with one institution.", "Evaluate learning outcomes and engagement.", "Add educator dashboards.", "Scale across programs on a shared platform."],
        kpis: ["Engagement", "Learning outcomes", "Educator time saved", "Cost per learner"],
        governance: "Age-appropriate safeguards, content accuracy review, and privacy by design for learner data.",
        gftFit: "Builds on the candidate's experience delivering AI platforms to universities, with GFT's platform engineering.",
        capabilities: ["RAG over curricula", "Conversational AI", "Learning analytics", "Multi-tenant architecture"],
      },
      {
        id: "impact-measurement-platform",
        domainId: "impact",
        name: "Inclusion & Impact Measurement",
        tagline: "AI-supported onboarding for inclusion programs and standardized measurement of social outcomes.",
        objective: "Reach underserved populations affordably and prove program outcomes with comparable, auditable data.",
        approach: "Voice-first and mobile-first assistants in local languages for enrolment and education, plus a measurement layer that interprets qualitative evidence into standard indicators.",
        implementation: ["Co-design with one program partner.", "Deploy assistants in a defined community.", "Collect and standardize outcome data.", "Report to funders with auditable evidence."],
        kpis: ["Enrolment completion", "Cost per participant", "Indicator coverage", "Reporting cycle time"],
        governance: "Informed consent, data protection for vulnerable groups, and transparent methodology for indicators.",
        gftFit: "Connects GFT's financial-services clients and inclusion mandates with the candidate's social impact platform experience.",
        capabilities: ["Multilingual voice agents", "Mobile delivery", "Qualitative data interpretation", "Reporting"],
      },
    ],
  },
  {
    id: "delivery",
    name: "GFT Delivery & Internal Operations",
    short: "GFT Delivery",
    icon: "Building2",
    accent: "amber",
    summary: "AI-assisted engineering, delivery accelerators, and internal productivity that make GFT faster and more consistent.",
    useCases: [
      {
        id: "ai-assisted-engineering",
        domainId: "delivery",
        name: "AI-Assisted Software Delivery",
        tagline: "Standardize AI-assisted development practices across delivery teams with measurable quality gates.",
        objective: "Accelerate delivery and improve consistency without lowering code quality or security.",
        approach: "Approved AI development tooling, prompt and workflow playbooks, automated review and testing, and metrics on throughput and defect rates.",
        implementation: ["Baseline current delivery metrics.", "Pilot AI-assisted practices with two squads.", "Codify playbooks and guardrails.", "Roll out with training and measurement."],
        kpis: ["Cycle time", "Defect escape rate", "Developer adoption", "Review turnaround"],
        governance: "Code ownership and review standards, IP and data handling rules, and tool access policies.",
        gftFit: "Supports GFT's AI-centric delivery strategy with a repeatable regional enablement model.",
        capabilities: ["AI coding tools", "CI/CD integration", "Quality metrics", "Enablement"],
      },
      {
        id: "delivery-accelerators",
        domainId: "delivery",
        name: "Reusable AI Delivery Accelerators",
        tagline: "A catalogue of reference architectures and components so every engagement starts from proven assets.",
        objective: "Reduce time to first production release on client AI projects.",
        approach: "Curated reference architectures for agents, RAG, and automation; shared components with evaluation and observability built in; contribution and review process.",
        implementation: ["Audit recent AI engagements for repeatable patterns.", "Extract and harden the top components.", "Publish with documentation and examples.", "Measure reuse across new engagements."],
        kpis: ["Component reuse rate", "Time to first release", "Defects in reused components", "Contributions per quarter"],
        governance: "Component ownership, security review, versioning, and deprecation policies.",
        gftFit: "Complements GFT's platform assets, including Wynxx, where appropriate, with regional accelerators that feed back into global capabilities.",
        capabilities: ["Reference architectures", "Component libraries", "Documentation", "Evaluation harnesses"],
      },
      {
        id: "sales-delivery-assist",
        domainId: "delivery",
        name: "Proposal & Solution Design Assistants",
        tagline: "AI assistants that help sales and solution teams draft proposals and architectures from approved content.",
        objective: "Shorten proposal cycles and improve the consistency of solution designs.",
        approach: "Retrieval over approved case studies, architectures, and pricing guidance; drafting assistants; review workflows with solution architects.",
        implementation: ["Curate the approved content corpus.", "Deploy drafting assistants to one region's sales team.", "Measure cycle time and quality.", "Expand with feedback loops."],
        kpis: ["Proposal cycle time", "Win-rate trend", "Architect review time", "Content reuse"],
        governance: "Confidentiality controls, approved-content-only retrieval, and human sign-off on every proposal.",
        gftFit: "Lets GFT demonstrate its own AI adoption while improving commercial responsiveness.",
        capabilities: ["RAG over approved content", "Drafting assistants", "Review workflows", "Analytics"],
      },
      {
        id: "ai-operations-center",
        domainId: "delivery",
        name: "AI Operations & Observability Practice",
        tagline: "A shared practice for monitoring, evaluating, and cost-managing AI systems in production.",
        objective: "Keep deployed AI systems reliable, safe, and cost-efficient across engagements.",
        approach: "Standard observability stack for LLM applications, evaluation pipelines, drift and cost monitoring, incident playbooks, and regular quality reviews.",
        implementation: ["Define the observability and evaluation standard.", "Instrument existing production systems.", "Establish on-call and review cadences.", "Report reliability and cost monthly."],
        kpis: ["Monitored systems coverage", "Incident rate and MTTR", "Cost per transaction", "Quality drift detected"],
        governance: "Clear ownership, SLOs for AI services, and escalation paths for safety issues.",
        gftFit: "Turns AI delivery into a managed, repeatable operation that clients can rely on after go-live.",
        capabilities: ["LLM observability", "Evaluation pipelines", "Cost monitoring", "Incident management"],
      },
    ],
  },
];

export const aiAllUseCases = aiDomains.flatMap((d) => d.useCases);
export function getAiDomain(id: string) {
  return aiDomains.find((d) => d.id === id);
}

export const aiProfile = {
  headline: "Executive Leadership. Entrepreneurial Drive. Hands-On AI Engineering.",
  intro:
    "Leading AI execution requires someone who has set technology strategy as a CTO, built AI systems with their own hands, led distributed engineering teams, and understood the business the technology serves. Andrés brings all four.",
  pillars: [
    { id: "executive", title: "Executive leadership", icon: "Building2" as IconName, text: "CTO and technology leadership of international teams, enterprise architecture, and partner relationships." },
    { id: "entrepreneur", title: "Entrepreneurial experience", icon: "Rocket" as IconName, text: "Founder of technology ventures taken from idea to market, including a platform that reached more than 50 million people." },
    { id: "engineer", title: "Hands-on AI engineering", icon: "Cpu" as IconName, text: "Personally designed and built production LLM, RAG, agentic, and voice-AI systems on cloud-native infrastructure." },
    { id: "business", title: "Business understanding", icon: "Target" as IconName, text: "Banking, fintech, public sector, sustainability, and enterprise operations, from project delivery to product strategy." },
  ],
  evidence: [
    { org: "Bioanywhere", role: "Founder & Product Architect · 2024–2026", text: "Hands-on development of an enterprise AI platform: conversational and voice AI agents, multi-agent architectures, LLM orchestration, RAG, tool execution across thousands of applications, and cloud-native, multi-tenant delivery.", tags: ["Agentic AI", "RAG", "Voice AI", "Cloud-native"] },
    { org: "Legado", role: "Chief Technology Officer · 2024–2025", text: "CTO leadership of international engineering teams and contractors, technology strategy, enterprise architecture, blockchain integration, and sustainability-focused innovation with partners including Deloitte.", tags: ["CTO", "Architecture", "International teams"] },
    { org: "SDG Investors / sdgtalks.ai", role: "Co-Founder & Software Development Manager · 2020–2024", text: "Leadership of AI-powered platforms for sustainability information intelligence and social impact: LLM content pipelines at scale, NLP, and AI chat for universities across the United States.", tags: ["LLM pipelines", "NLP", "Social impact"] },
    { org: "mindtalks.ai", role: "Founder & CTO · 2017–2020", text: "Founder and CTO of a patented technology platform that reached more than 50 million people across 10 countries, leading a seven-person team through product development and regional expansion.", tags: ["Patented platform", "50M+ reach", "10 countries"] },
    { org: "Forward", role: "Founder & Project Manager · 2007–2017", text: "Technology entrepreneurship and software engineering leadership across banking, fintech, public institutions, and enterprise digital transformation over a decade.", tags: ["Banking", "Fintech", "Transformation"] },
  ],
  technical: {
    title: "Technical expertise",
    groups: [
      { label: "AI & ML", items: ["Python", "Generative AI", "Agentic AI", "LangChain", "CrewAI", "LlamaIndex", "RAG & vector search (pgvector, OpenSearch)", "Machine Learning (Stanford specialization)", "TensorFlow, Scikit-Learn"] },
      { label: "Platforms & cloud", items: ["AWS (EKS, Lambda, Bedrock, Textract)", "Google Cloud Run", "Docker & CI/CD", "PostgreSQL, DynamoDB, S3", "Next.js & TypeScript"] },
      { label: "Real-time & voice", items: ["LiveKit (WebRTC)", "Deepgram STT", "Cartesia TTS", "SIP telephony"] },
      { label: "Operations & enablement", items: ["LangFuse, LangSmith, Datadog", "AI-assisted development tooling", "Enterprise integrations (Composio, MCP)", "Agile delivery (SCRUM)"] },
    ],
  },
  radar: [
    { axis: "AI Engineering", value: 95 },
    { axis: "Technology Leadership", value: 92 },
    { axis: "Enterprise Architecture", value: 88 },
    { axis: "Delivery & Operations", value: 86 },
    { axis: "Business Alignment", value: 88 },
    { axis: "Governance", value: 82 },
  ],
  radarNote: "Self-assessed relative emphasis across capability areas, for illustration.",
};

export const aiStandards = {
  headline: "Engineering Standards and Responsible AI, Built In.",
  intro:
    "Scaling AI safely is an engineering discipline. These are the standards the function would establish and hold every AI solution to, from the first prototype to the systems clients rely on daily.",
  pillars: [
    { id: "evaluation", title: "Evaluation", icon: "FlaskConical" as IconName, text: "Representative test sets, quality and safety thresholds, and regression checks on every change to models, prompts, or tools.", practices: ["Golden datasets per use case", "Automated evaluation in CI", "Human review of edge cases"] },
    { id: "observability", title: "Observability", icon: "BarChart3" as IconName, text: "Tracing, logging, cost, and latency visibility for every AI interaction, so failures are seen and fixed fast.", practices: ["LLM tracing and analytics", "Cost and latency budgets", "Drift and quality alerts"] },
    { id: "security", title: "Security & Privacy", icon: "ShieldCheck" as IconName, text: "Least-privilege tool access, data minimization, PII handling, and secure deployment aligned with enterprise and regulatory requirements.", practices: ["Access control and secrets management", "PII redaction and retention rules", "Threat modelling for agents"] },
    { id: "responsible", title: "Responsible AI", icon: "Scale" as IconName, text: "Transparency, human oversight, fairness monitoring, and clear accountability for every deployed system.", practices: ["Human-in-the-loop by design", "Bias and fairness reviews", "Model and prompt documentation"] },
    { id: "reliability", title: "Reliability", icon: "Repeat" as IconName, text: "Progressive releases, rollback paths, SLOs, and incident playbooks so AI services meet the same bar as any production system.", practices: ["Canary releases", "SLOs and on-call", "Incident reviews"] },
    { id: "reuse", title: "Reuse & Documentation", icon: "Layers" as IconName, text: "Reference architectures, shared components, and documentation that let teams start from proven assets.", practices: ["Architecture decision records", "Component catalogue", "Playbooks and training"] },
  ],
  governanceFlow: ["Intake & risk tiering", "Design review", "Evaluation gate", "Security & privacy review", "Deployment approval", "Monitoring & periodic review"],
};

export const aiImpact = {
  headline: "Execution Is Measured. Impact Is Reported.",
  intro:
    "The Head of AI function would report on adoption, productivity, delivery performance, cost efficiency, and return on investment every quarter, using a scorecard agreed with regional and global leadership.",
  kpis: [
    { id: "adoption", label: "AI adoption across business units and clients", icon: "Users" as IconName },
    { id: "production", label: "AI solutions successfully deployed to production", icon: "Rocket" as IconName },
    { id: "productivity", label: "Productivity gains in augmented processes", icon: "TrendingUp" as IconName },
    { id: "cost", label: "Operational cost optimization", icon: "Scale" as IconName },
    { id: "delivery", label: "Delivery acceleration from AI-assisted practices", icon: "Workflow" as IconName },
    { id: "quality", label: "Reliability, quality, and incident metrics", icon: "ShieldCheck" as IconName },
    { id: "reuse", label: "Reusable assets and platform adoption", icon: "Layers" as IconName },
    { id: "governance", label: "Solutions under governance and monitoring", icon: "Compass" as IconName },
    { id: "cx", label: "Customer experience improvements", icon: "HeartHandshake" as IconName },
    { id: "roi", label: "Return on investment per initiative", icon: "Target" as IconName },
  ],
  levers: [
    { id: "efficiency", title: "Operational Efficiency", text: "Automated and augmented processes that cut cost and cycle time.", icon: "Workflow" as IconName, color: "var(--accent-blue)", examples: ["Back-office automation", "Agentic workflows", "Risk and compliance intelligence"] },
    { id: "productivity", title: "Productivity", text: "People spend time on judgement, not on searching and re-keying.", icon: "TrendingUp" as IconName, color: "var(--accent-cyan)", examples: ["Knowledge assistants", "AI-assisted delivery", "Proposal assistants"] },
    { id: "quality", title: "Quality & Reliability", text: "Consistent outcomes with fewer errors and faster recovery.", icon: "ShieldCheck" as IconName, color: "var(--accent-emerald)", examples: ["Evaluation gates", "Observability practice", "Governance reviews"] },
    { id: "customer", title: "Customer Value", text: "Faster, more personal, more available service across channels.", icon: "HeartHandshake" as IconName, color: "var(--accent-amber)", examples: ["Banking agents", "Voice operations", "Customer operations intelligence"] },
    { id: "speed", title: "Delivery Speed", text: "From prototype to production in weeks, built on reusable assets.", icon: "Rocket" as IconName, color: "var(--accent-violet)", examples: ["Delivery accelerators", "Reference architectures", "Prototype-to-production pathway"] },
  ],
  maturity: {
    title: "Illustrative adoption trajectory",
    disclaimer: "Hypothetical and qualitative. Illustrates how an adoption program typically progresses across four quarters; it is not a forecast or a GFT commitment.",
    stages: [
      { quarter: "Q1", label: "Assess & pilot", systems: 2, units: 2 },
      { quarter: "Q2", label: "Standardize", systems: 5, units: 4 },
      { quarter: "Q3", label: "Scale", systems: 9, units: 6 },
      { quarter: "Q4", label: "Operate", systems: 14, units: 8 },
    ],
  },
};

export const aiRoadmap = {
  headline: "Ninety Days to an Operating AI Function.",
  intro:
    "The first quarter establishes the facts, the priorities, and the operating practices. It ends with validated solutions moving to production, governance in place, and a scalable operating model agreed with leadership.",
  caveat:
    "Proposed priorities, subject to GFT's internal strategy, resources, global AI leadership alignment, and approvals. The plan does not promise specific results within 90 days; it establishes the operating foundation that produces them.",
  phases: [
    {
      id: "ai-phase-1",
      range: "Days 1–30",
      title: "Assess & Align",
      focus: "Understand the landscape, align with leadership.",
      actions: [
        "Evaluate GFT's current AI capabilities, initiatives, and priorities.",
        "Identify opportunities for AI adoption and operational improvement.",
        "Engage key technology and business stakeholders.",
        "Define an initial AI transformation roadmap.",
      ],
      deliverable: "Regional AI Transformation Roadmap",
    },
    {
      id: "ai-phase-2",
      range: "Days 31–60",
      title: "Prioritize & Implement",
      focus: "Choose what matters, start building.",
      actions: [
        "Select high-impact AI initiatives.",
        "Establish implementation priorities and success metrics.",
        "Coordinate technical teams and architecture decisions.",
        "Initiate pilot projects and AI adoption programs.",
      ],
      deliverable: "Prioritized AI Initiative Portfolio with Pilots in Flight",
    },
    {
      id: "ai-phase-3",
      range: "Days 61–90",
      title: "Deploy & Scale",
      focus: "Reach production, measure, and set the operating model.",
      actions: [
        "Advance validated AI solutions toward production.",
        "Establish performance monitoring and governance practices.",
        "Measure adoption, efficiency, and business impact.",
        "Define a scalable AI operating model and longer-term roadmap.",
      ],
      deliverable: "AI Operating Model and Scale-Up Roadmap",
    },
  ] satisfies RoadmapPhase[],
};

export const aiOperatingModel = {
  headline: "A Regional AI Function That Strengthens the Global One.",
  intro:
    "The role would operate inside GFT's existing AI organization, not beside it: aligned with global AI leadership and platform teams, embedded with regional delivery, and accountable to regional business leadership for adoption and impact.",
  role: "Head of AI (Regional)",
  mission:
    "Ensure that AI is strategically adopted, technically executed, effectively governed, and successfully scaled across GFT's regional operations and client engagements, in coordination with GFT's global AI organization.",
  responsibilities: [
    "AI strategy and roadmap",
    "AI engineering leadership",
    "Enterprise AI adoption",
    "AI product and platform development",
    "AI governance and responsible AI",
    "Evaluation and observability standards",
    "Business alignment and KPIs",
    "Client solution design with sales",
    "Talent development and enablement",
    "Coordination with global AI leadership",
  ],
  collaborators: [
    { id: "global-ai", name: "Global AI leadership & platform teams", icon: "Cpu" as IconName, how: "Align regional priorities with global strategy, adopt and extend platform assets such as Wynxx where appropriate, and feed regional learnings back." },
    { id: "regional", name: "Regional executive leadership", icon: "Building2" as IconName, how: "Agree priorities and the impact scorecard, and report adoption, efficiency, and ROI quarterly." },
    { id: "delivery", name: "Software engineering & delivery teams", icon: "Workflow" as IconName, how: "Embed AI architecture, standards, and accelerators into engagements, and coach teams on AI-assisted delivery." },
    { id: "banking", name: "Banking & financial services practice", icon: "Landmark" as IconName, how: "Prioritize and deliver AI use cases with the strongest client demand and regulatory readiness." },
    { id: "sales", name: "Sales & business development", icon: "Megaphone" as IconName, how: "Translate client requirements into solution designs, support proposals, and ensure what is sold can be delivered." },
    { id: "governance", name: "Security, risk & compliance", icon: "ShieldCheck" as IconName, how: "Co-own the AI governance framework, review cadences, and regulatory alignment." },
    { id: "clients", name: "Clients", icon: "Users" as IconName, how: "Run adoption programs and production deployments with client teams, measuring outcomes together." },
  ],
  complementNote:
    "This is a proposal for a complementary regional function. It does not assume these responsibilities are unassigned at GFT today, and it would be shaped with global AI leadership to avoid duplication.",
};

export const aiClosing = {
  headline: "Let's Make AI Deliver Across GFT and Its Clients.",
  supporting:
    "GFT has the strategy, the platforms, and the engineering talent. What I offer is the execution leadership to turn them into adopted, governed, production-grade AI across the region: measured in productivity, reliability, cost, and customer value.",
  personal:
    "Rohan, I would welcome a conversation about how a regional Head of AI function could accelerate adoption and delivery quality for GFT and its clients in the Andean region and beyond.",
  primaryCta: "Let's Discuss the Head of AI Role",
  emailSubject: "Head of AI — GFT Technologies",
};
