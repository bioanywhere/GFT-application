import type { CommercialModel, Industry, ValueDriver } from "./types";

export const commercialModels: CommercialModel[] = [
  "SaaS subscription",
  "Enterprise licensing",
  "Implementation & consulting",
  "Managed AI services",
  "Usage-based pricing",
  "Venture partnership",
];

export const valueDrivers: ValueDriver[] = [
  "Revenue growth",
  "Operational efficiency",
  "Market expansion",
  "Competitive differentiation",
  "Recurring revenue",
];

export const explorer = {
  headline: "Where Could GFT's Next AI Business Opportunities Come From?",
  intro:
    "Five industry territories, twenty-five opportunity hypotheses. Each one is a proposal to be validated with customers, not a confirmed GFT initiative or a guaranteed outcome. Select an industry, filter by value driver or commercial model, and open any opportunity to see the full business case outline.",
  hypothesisNote:
    "All opportunities are presented as hypotheses for validation. None represents an existing GFT product, a confirmed customer demand, or a committed initiative.",
};

export const industries: Industry[] = [
  {
    id: "banking",
    name: "Banking & Financial Services",
    short: "Banking",
    icon: "Landmark",
    accent: "blue",
    summary:
      "GFT's home ground. The opportunity is to extend proven banking capabilities into new products, new customer segments, and recurring software revenue.",
    commercialValue: [
      "New financial services offerings",
      "Enterprise automation projects",
      "Recurring software revenue opportunities",
      "Higher-value consulting engagements",
      "Improved customer experiences",
    ],
    opportunities: [
      {
        id: "intelligent-banking-agents",
        industryId: "banking",
        name: "Intelligent Banking Agents",
        tagline:
          "AI-powered agents capable of supporting customer engagement, complex banking workflows, and personalized financial experiences.",
        problem:
          "Banks in Latin America and beyond handle millions of routine and semi-complex interactions through call centres and branches, with long waits, inconsistent quality, and high cost per contact. Digital channels rarely complete multi-step workflows end to end.",
        solution:
          "Multilingual voice and chat agents that authenticate customers, complete workflows such as card replacement, disputes, or product changes, and hand off to humans with full context. Packaged as configurable agent templates per banking journey.",
        customers: ["Retail and universal banks", "Credit unions and cooperatives", "Digital banks and neobanks", "Bank contact-centre operators"],
        commercialModels: ["SaaS subscription", "Usage-based pricing", "Implementation & consulting"],
        businessValue:
          "Lower cost per interaction, higher first-contact resolution, and a productized offering that can be sold repeatedly instead of rebuilt per client.",
        valueDrivers: ["Operational efficiency", "Recurring revenue", "Competitive differentiation"],
        capabilities: ["Real-time voice agents", "LLM orchestration and guardrails", "Core-banking integrations", "Identity verification"],
        validation:
          "Run a scoped pilot on two high-volume journeys with one design-partner bank, measuring containment rate, handle time, and customer satisfaction against the current baseline.",
        gftRelevance:
          "Builds directly on GFT's publicly described banking agent capabilities and core-banking integration experience, extending them toward per-journey, productized agent offerings.",
      },
      {
        id: "ai-financial-operations",
        industryId: "banking",
        name: "AI-Driven Financial Operations",
        tagline: "Automation of document processing, onboarding, compliance workflows, and operational tasks.",
        problem:
          "Back-office operations in banks remain document-heavy and manual: onboarding files, KYC reviews, loan documentation, reconciliations, and regulatory reporting consume large teams and introduce delays and errors.",
        solution:
          "Agentic workflows that read documents, extract and verify data, apply policy rules, route exceptions to humans, and produce audit trails. Delivered as reusable operation modules that can be configured per institution.",
        customers: ["Bank operations divisions", "Compliance and KYC teams", "Lenders and leasing companies", "Business process outsourcers serving banks"],
        commercialModels: ["Managed AI services", "Usage-based pricing", "Implementation & consulting"],
        businessValue:
          "Faster onboarding and processing, reduced operational cost, and a managed-services revenue line with predictable volume-based pricing.",
        valueDrivers: ["Operational efficiency", "Recurring revenue"],
        capabilities: ["Document intelligence", "Workflow orchestration", "Policy and rules engines", "Observability and audit logging"],
        validation:
          "Select one operational process with measurable volume, run a four-to-six-week pilot, and quantify cycle-time and cost reductions before expanding to adjacent processes.",
        gftRelevance:
          "Complements GFT's enterprise modernization and intelligent automation work with a repeatable, operations-focused offering for existing banking clients.",
      },
      {
        id: "intelligent-lending-risk",
        industryId: "banking",
        name: "Intelligent Lending & Risk",
        tagline: "AI-powered tools supporting credit analysis, underwriting workflows, and financial risk assessment.",
        problem:
          "Credit analysts spend most of their time collecting and summarizing information rather than making decisions. Underwriting for small businesses and thin-file customers is slow and expensive, which limits lending growth.",
        solution:
          "Decision-support assistants that assemble borrower profiles from internal and external data, draft credit memos, surface risk signals, and document the rationale for human approval. Designed to support, not replace, credit decisions and model governance.",
        customers: ["Commercial and SME lenders", "Consumer finance companies", "Fintech lenders", "Risk and credit departments"],
        commercialModels: ["Enterprise licensing", "Implementation & consulting", "Managed AI services"],
        businessValue:
          "Higher analyst throughput, faster time to decision, and expansion of lending into segments that are currently uneconomical to serve.",
        valueDrivers: ["Operational efficiency", "Revenue growth", "Market expansion"],
        capabilities: ["Retrieval over structured and unstructured data", "Financial data integrations", "Explainability and model governance", "Secure enterprise deployment"],
        validation:
          "Co-design with one lender's credit team, measuring memo preparation time and decision quality on a controlled sample of real cases.",
        gftRelevance:
          "Aligned with GFT's public work on generative AI credit-risk assistants and its risk and compliance capabilities, offering a path to productize that experience.",
      },
      {
        id: "next-gen-fintech-products",
        industryId: "banking",
        name: "Next-Generation Fintech Products",
        tagline: "New financial products combining AI, open banking, financial data, and customer intelligence.",
        problem:
          "Banks hold rich transaction data but struggle to convert it into new, personalized products. Fintech challengers move faster but lack the regulatory depth and distribution of incumbents.",
        solution:
          "A venture-style product line that combines open-banking data, AI-driven customer intelligence, and GFT's engineering to launch embedded finance, personalized savings, or cash-flow products with bank partners.",
        customers: ["Banks seeking new digital products", "Fintech companies needing enterprise-grade delivery", "Payment and open-banking platforms"],
        commercialModels: ["Venture partnership", "Enterprise licensing", "Implementation & consulting"],
        businessValue:
          "New product revenue shared with partners, deeper client relationships, and a portfolio of reusable fintech components.",
        valueDrivers: ["Revenue growth", "Competitive differentiation", "Market expansion"],
        capabilities: ["Open-banking APIs", "Personalization models", "Product engineering", "Regulatory and security expertise"],
        validation:
          "Identify one bank partner willing to co-develop a product concept, validate with customer research, and define a revenue-sharing model before build.",
        gftRelevance:
          "Leverages GFT's financial-services engineering depth to move up the value chain from delivery partner to product co-creator.",
      },
      {
        id: "ai-financial-inclusion-banking",
        industryId: "banking",
        name: "AI for Financial Inclusion",
        tagline: "Solutions targeting underserved customers and emerging markets.",
        problem:
          "Large populations in Latin America remain underbanked or served through costly manual channels. Traditional onboarding, scoring, and servicing models do not fit low-income, informal, or rural customers.",
        solution:
          "Low-cost, voice-first and mobile-first AI services for onboarding, financial education, and servicing in Spanish and local contexts, combined with alternative-data decision support that helps institutions serve new segments profitably.",
        customers: ["Microfinance institutions", "Cooperatives and savings banks", "Development banks", "Telecom and retail-linked financial services"],
        commercialModels: ["Usage-based pricing", "Managed AI services", "Venture partnership"],
        businessValue:
          "Access to a large, growing customer base for financial institutions and a differentiated, socially relevant offering for GFT in emerging markets.",
        valueDrivers: ["Market expansion", "Revenue growth"],
        capabilities: ["Multilingual voice agents", "Mobile-first design", "Alternative-data analytics", "Low-cost cloud operations"],
        validation:
          "Partner with one inclusion-focused institution to pilot voice-based onboarding or servicing in a defined region and measure reach, completion, and cost per customer.",
        gftRelevance:
          "Extends GFT's banking capabilities into segments and geographies where competitors are less present, with the Andean region as a natural starting point.",
      },
    ],
  },
  {
    id: "sustainability",
    name: "Sustainability & ESG",
    short: "Sustainability",
    icon: "Leaf",
    accent: "emerald",
    summary:
      "Sustainability reporting and decision-making are becoming data problems. AI can turn fragmented environmental and social information into enterprise intelligence.",
    commercialValue: [
      "New sustainability-focused enterprise solutions",
      "ESG data intelligence services",
      "Sustainability reporting platforms",
      "Strategic financial institution partnerships",
      "New recurring revenue opportunities",
    ],
    opportunities: [
      {
        id: "sustainability-intelligence",
        industryId: "sustainability",
        name: "AI Sustainability Intelligence",
        tagline: "Platforms that help organizations collect, interpret, analyze, and act on sustainability information.",
        problem:
          "Sustainability data lives in spreadsheets, supplier emails, utility bills, and PDFs. Organizations cannot see their real position, let alone act on it, without months of manual consolidation.",
        solution:
          "An AI layer that ingests heterogeneous sustainability data, normalizes it, identifies gaps, and provides decision-ready insights and recommendations for operations, procurement, and finance teams.",
        customers: ["Large corporates with sustainability obligations", "Banks assessing client sustainability", "Sustainability consultancies", "Industrial groups"],
        commercialModels: ["SaaS subscription", "Implementation & consulting"],
        businessValue:
          "A new enterprise solution category for GFT with subscription economics and strong cross-sell into existing financial and industrial clients.",
        valueDrivers: ["Revenue growth", "Recurring revenue", "Market expansion"],
        capabilities: ["Document and data extraction", "Data modelling and analytics", "LLM-based summarization", "Enterprise integrations"],
        validation:
          "Validate with three organizations that currently consolidate sustainability data manually, quantify effort saved, and test willingness to pay for a subscription.",
        gftRelevance:
          "Opens a market adjacent to GFT's existing clients, reusing data engineering, cloud, and AI capabilities already in place.",
      },
      {
        id: "esg-reporting-automation",
        industryId: "sustainability",
        name: "ESG Reporting Automation",
        tagline: "AI-powered solutions to assist companies in collecting evidence, preparing reports, and managing ESG information.",
        problem:
          "Reporting frameworks are multiplying and auditors demand evidence. Preparing an ESG report is a repetitive, high-effort, error-prone process repeated every cycle.",
        solution:
          "Assistants that map requirements to evidence, draft disclosures from source data, track changes across periods, and maintain an auditable evidence trail. Offered as a managed reporting service or a licensed platform.",
        customers: ["Listed companies", "Banks and insurers with disclosure obligations", "Audit and advisory firms", "Mid-market companies supplying large buyers"],
        commercialModels: ["SaaS subscription", "Managed AI services", "Implementation & consulting"],
        businessValue:
          "Recurring revenue tied to annual reporting cycles and a defensible position in a compliance-driven market.",
        valueDrivers: ["Recurring revenue", "Operational efficiency"],
        capabilities: ["Regulatory knowledge bases", "Retrieval-augmented drafting", "Evidence management", "Audit trails and controls"],
        validation:
          "Pilot one reporting cycle with a single company, measure preparation time and audit findings, and confirm renewal intent.",
        gftRelevance:
          "Combines GFT's regulatory and compliance experience in financial services with AI document capabilities to enter a new, growing market.",
      },
      {
        id: "environmental-impact-intelligence",
        industryId: "sustainability",
        name: "Environmental Impact Intelligence",
        tagline: "AI solutions for monitoring and understanding environmental indicators.",
        problem:
          "Organizations with land, infrastructure, or supply chains lack timely, trustworthy information about environmental conditions and the impact of their activities.",
        solution:
          "Monitoring and analysis services that combine satellite, sensor, and operational data with AI models to track indicators, detect anomalies, and report impact to stakeholders and financiers.",
        customers: ["Agribusiness and forestry companies", "Infrastructure and energy operators", "Development banks and impact investors", "Public environmental agencies"],
        commercialModels: ["SaaS subscription", "Usage-based pricing", "Venture partnership"],
        businessValue:
          "Entry into environmental data services with recurring monitoring revenue and strong partnership potential with financial institutions.",
        valueDrivers: ["Market expansion", "Recurring revenue", "Competitive differentiation"],
        capabilities: ["Geospatial and sensor data pipelines", "Analytics and anomaly detection", "Dashboards and reporting", "Cloud data platforms"],
        validation:
          "Co-develop a monitoring use case with one operator or financier, starting with existing data sources, and validate the reporting value with their stakeholders.",
        gftRelevance:
          "Extends GFT's data and cloud engineering into a new domain while creating partnership opportunities with its financial-services clients.",
      },
      {
        id: "carbon-data-analytics",
        industryId: "sustainability",
        name: "Carbon Data & Sustainability Analytics",
        tagline: "Systems supporting carbon-related information management, traceability, and decision-making.",
        problem:
          "Carbon accounting, traceability, and credit-related information are fragmented across suppliers, registries, and internal systems, limiting trust and slowing decisions.",
        solution:
          "A data platform with AI-assisted data capture, traceability across the value chain, and analytics that support reduction planning and participation in carbon-related markets.",
        customers: ["Corporates with net-zero commitments", "Carbon project developers", "Banks financing transition projects", "Exchanges and registries"],
        commercialModels: ["Enterprise licensing", "SaaS subscription", "Implementation & consulting"],
        businessValue:
          "Platform revenue plus implementation services in a market where trusted data is the core asset.",
        valueDrivers: ["Revenue growth", "Competitive differentiation"],
        capabilities: ["Data lineage and traceability", "Analytics and forecasting", "Integration with registries and ledgers", "Secure multi-party data sharing"],
        validation:
          "Workshop with two corporates and one financier to map data flows and confirm which traceability gaps they would pay to close first.",
        gftRelevance:
          "Reuses GFT's strengths in data platforms and regulated environments, informed by the candidate's hands-on sustainability-platform experience.",
      },
      {
        id: "sustainable-finance-intelligence",
        industryId: "sustainability",
        name: "Sustainable Finance Intelligence",
        tagline: "AI-powered solutions connecting sustainability information with financial decision-making.",
        problem:
          "Banks and investors must integrate sustainability information into credit, investment, and product decisions, but the data is unstructured, inconsistent, and expensive to assess at scale.",
        solution:
          "AI services that assess client and portfolio sustainability profiles from documents and data, flag risks and opportunities, and feed structured insights into existing credit and investment workflows.",
        customers: ["Commercial and development banks", "Asset managers", "Insurers", "Sustainability-linked lenders"],
        commercialModels: ["Enterprise licensing", "Managed AI services", "Implementation & consulting"],
        businessValue:
          "A natural extension of GFT's banking relationships into a high-value advisory and software offering.",
        valueDrivers: ["Revenue growth", "Competitive differentiation", "Recurring revenue"],
        capabilities: ["Document intelligence", "Risk analytics", "Integration with banking workflows", "Model governance"],
        validation:
          "Pilot portfolio-level assessment with one bank on a sample of clients, comparing AI-assisted results with the current manual process.",
        gftRelevance:
          "Sits at the intersection of GFT's core banking market and the sustainability domain, creating differentiated offerings for existing clients.",
      },
    ],
  },
  {
    id: "social-impact",
    name: "Social Impact & Development",
    short: "Social Impact",
    icon: "HeartHandshake",
    accent: "amber",
    summary:
      "Development organizations, public institutions, and impact-driven enterprises need technology that reaches people and proves outcomes. AI makes both affordable.",
    commercialValue: [
      "Partnerships with enterprises and development organizations",
      "New service offerings for public and private institutions",
      "Impact intelligence platforms",
      "Technology solutions for underserved markets",
    ],
    opportunities: [
      {
        id: "ai-financial-inclusion-social",
        industryId: "social-impact",
        name: "AI for Financial Inclusion",
        tagline: "AI solutions designed to improve access to financial products and services.",
        problem:
          "Development programs that aim to bring people into the financial system struggle with reach, trust, and the cost of human-led onboarding and education.",
        solution:
          "Conversational, voice-first assistants in local languages that guide people through enrolment, financial education, and access to products, deployed with development organizations and partner institutions.",
        customers: ["Multilateral and development agencies", "Foundations and NGOs", "Government inclusion programs", "Partner financial institutions"],
        commercialModels: ["Venture partnership", "Usage-based pricing", "Implementation & consulting"],
        businessValue:
          "New partnership-funded revenue and a pathway to serve large populations at low marginal cost.",
        valueDrivers: ["Market expansion", "Revenue growth"],
        capabilities: ["Multilingual voice agents", "Low-bandwidth mobile delivery", "Program analytics", "Secure data handling"],
        validation:
          "Co-design a pilot with one development partner in a defined community and measure enrolment and completion rates against the current approach.",
        gftRelevance:
          "Combines GFT's financial-services depth with a social mission that resonates in Latin America and opens relationships with development organizations.",
      },
      {
        id: "ai-for-education",
        industryId: "social-impact",
        name: "AI for Education",
        tagline: "Personalized learning solutions, intelligent learning assistants, and educational platforms.",
        problem:
          "Educational institutions and corporate training programs cannot scale personalized support. Learners get generic content and limited feedback, especially in resource-constrained settings.",
        solution:
          "Learning assistants that adapt content, answer questions from institutional material, and give educators insight into progress, offered to universities, training providers, and large employers.",
        customers: ["Universities and education networks", "Corporate learning functions", "Education ministries and agencies", "EdTech companies"],
        commercialModels: ["SaaS subscription", "Enterprise licensing", "Venture partnership"],
        businessValue:
          "Subscription revenue in a large market and a reusable assistant platform that can be adapted to other knowledge-intensive sectors.",
        valueDrivers: ["Market expansion", "Recurring revenue"],
        capabilities: ["Retrieval over curricula and documents", "Conversational AI", "Learning analytics", "Multi-tenant platform architecture"],
        validation:
          "Pilot with one institution on a single course, measuring engagement, learner outcomes, and educator time saved.",
        gftRelevance:
          "Reuses the candidate's experience delivering AI platforms to universities and GFT's platform engineering to enter a new vertical.",
      },
      {
        id: "ai-social-development",
        industryId: "social-impact",
        name: "AI for Social Development",
        tagline: "Tools helping organizations identify and evaluate the outcomes of social development programs.",
        problem:
          "Program managers at foundations, NGOs, and public agencies operate with fragmented field data and slow, expensive evaluations, so decisions lag months behind reality.",
        solution:
          "Assistants and dashboards that consolidate field reports, surveys, and operational data, generate program insights, and support evidence-based resource allocation.",
        customers: ["Foundations and philanthropic organizations", "NGOs and implementing partners", "Public social programs", "Corporate social responsibility units"],
        commercialModels: ["Managed AI services", "SaaS subscription", "Implementation & consulting"],
        businessValue:
          "Recurring service revenue and a strategic position with organizations that fund large technology programs.",
        valueDrivers: ["Operational efficiency", "Market expansion"],
        capabilities: ["Survey and data collection tools", "Natural-language analytics", "Reporting automation", "Secure cloud platforms"],
        validation:
          "Select one program with existing data, deliver a consolidated insights view in weeks, and test whether the organization would fund an ongoing service.",
        gftRelevance:
          "Builds on the candidate's background in large-scale survey technology and social impact platforms, adding GFT's enterprise delivery.",
      },
      {
        id: "impact-measurement",
        industryId: "social-impact",
        name: "AI-Powered Impact Measurement",
        tagline: "Platforms for collecting, interpreting, and reporting social impact indicators.",
        problem:
          "Impact investors, development banks, and corporates must report outcomes to boards and funders, but measurement is manual, inconsistent, and difficult to compare across programs.",
        solution:
          "A measurement platform that standardizes indicators, uses AI to interpret qualitative evidence, and produces comparable, auditable impact reports for funders and regulators.",
        customers: ["Impact investors and development banks", "Corporate foundations", "Large NGOs", "Governments reporting on development goals"],
        commercialModels: ["SaaS subscription", "Enterprise licensing", "Implementation & consulting"],
        businessValue:
          "A platform asset with recurring revenue and strong partnership potential with financial institutions already in GFT's network.",
        valueDrivers: ["Recurring revenue", "Competitive differentiation"],
        capabilities: ["Indicator frameworks and taxonomies", "Qualitative data interpretation with LLMs", "Reporting and visualization", "Data governance"],
        validation:
          "Pilot with one funder across a small portfolio of programs and validate whether standardized AI-assisted reporting changes funding decisions.",
        gftRelevance:
          "Connects GFT's financial-services clients with the growing demand for credible impact reporting, supported by the candidate's experience with sustainability and development-goal platforms.",
      },
      {
        id: "ai-public-services",
        industryId: "social-impact",
        name: "AI for Public Services",
        tagline: "Intelligent automation and citizen engagement solutions.",
        problem:
          "Public institutions face high demand for citizen services with limited staff. Procedures are slow, information is hard to find, and digital channels often fail to complete requests.",
        solution:
          "Citizen-facing assistants and back-office automation that guide people through procedures, pre-fill and validate requests, and reduce manual processing for public servants.",
        customers: ["Municipal and regional governments", "Public agencies and regulators", "State-owned enterprises", "Government technology partners"],
        commercialModels: ["Implementation & consulting", "Managed AI services", "Usage-based pricing"],
        businessValue:
          "Large, multi-year engagements and a reusable set of public-service automation assets.",
        valueDrivers: ["Operational efficiency", "Market expansion"],
        capabilities: ["Process automation", "Conversational AI in Spanish and English", "Integration with legacy systems", "Security and accessibility compliance"],
        validation:
          "Identify one high-volume procedure with a public partner, automate it end to end as a pilot, and measure completion time and citizen satisfaction.",
        gftRelevance:
          "Applies GFT's experience in regulated, legacy-heavy environments to the public sector, supported by the candidate's prior public-administration process automation work in Colombia.",
      },
    ],
  },
  {
    id: "enterprise-ai",
    name: "Enterprise AI & Automation",
    short: "Enterprise AI",
    icon: "Workflow",
    accent: "violet",
    summary:
      "Every enterprise is rebuilding its operations around agents. The opportunity is to package what GFT already does into reusable, licensable enterprise solutions.",
    commercialValue: [
      "Enterprise AI services",
      "Reusable business solutions",
      "Licensing and subscription opportunities",
      "Operational transformation engagements",
    ],
    opportunities: [
      {
        id: "ai-voice-agents",
        industryId: "enterprise-ai",
        name: "AI Voice Agents",
        tagline: "Multilingual AI agents supporting customer service, customer acquisition, operations, and enterprise workflows.",
        problem:
          "Voice remains the dominant channel for customers and employees in many industries, yet it is the most expensive and least automated. Existing IVR systems frustrate users and deflect rather than resolve.",
        solution:
          "Real-time, natural voice agents that understand intent, access enterprise systems through tools, complete tasks, and escalate gracefully, available in multiple languages and deployable over web and telephony.",
        customers: ["Banks and insurers", "Healthcare providers", "Utilities and telecoms", "Retail and logistics operators"],
        commercialModels: ["Usage-based pricing", "SaaS subscription", "Managed AI services"],
        businessValue:
          "Usage-based recurring revenue with high cross-industry reuse and a clear, measurable cost-reduction story for buyers.",
        valueDrivers: ["Operational efficiency", "Recurring revenue", "Competitive differentiation"],
        capabilities: ["Low-latency real-time voice infrastructure", "Speech recognition and synthesis", "Tool execution and enterprise integrations", "Analytics and quality monitoring"],
        validation:
          "Deploy on one inbound use case with a design partner, measure containment, handle time, and satisfaction, and confirm pricing per resolved interaction.",
        gftRelevance:
          "Draws directly on the candidate's hands-on experience building a multilingual, multi-tenant voice-agent platform, and on GFT's enterprise integration capabilities.",
      },
      {
        id: "agentic-bpa",
        industryId: "enterprise-ai",
        name: "Agentic Business Process Automation",
        tagline: "Autonomous and semi-autonomous agents orchestrating complex business processes.",
        problem:
          "Traditional automation breaks on unstructured inputs and exceptions. Processes that span systems, documents, and judgement still require large teams of people coordinating by email.",
        solution:
          "Agent teams that plan, execute, and monitor multi-step processes across enterprise systems, with human approval checkpoints and full observability. Packaged as process accelerators for finance, procurement, and operations.",
        customers: ["Shared-service centres", "Finance and procurement functions", "Insurers and banks", "Manufacturing and logistics companies"],
        commercialModels: ["Implementation & consulting", "Managed AI services", "Enterprise licensing"],
        businessValue:
          "Operational transformation engagements that lead to reusable accelerators and ongoing managed-service revenue.",
        valueDrivers: ["Operational efficiency", "Recurring revenue"],
        capabilities: ["Agent orchestration frameworks", "Process mining and design", "Enterprise system connectors", "Governance and observability"],
        validation:
          "Map one end-to-end process with a client, automate it in a controlled pilot, and quantify throughput, error rates, and staff time released.",
        gftRelevance:
          "Extends GFT's intelligent automation and modernization practice with a venture mindset focused on productizing repeatable processes.",
      },
      {
        id: "enterprise-knowledge",
        industryId: "enterprise-ai",
        name: "Enterprise Knowledge Intelligence",
        tagline: "AI systems capable of interacting with institutional knowledge, documents, and enterprise databases.",
        problem:
          "Decades of institutional knowledge sit in documents, tickets, wikis, and databases that nobody can search effectively. Experts answer the same questions repeatedly and knowledge leaves with people.",
        solution:
          "Secure, governed assistants that answer questions from enterprise knowledge with citations, connect to structured data, and respect permissions, delivered as a platform with domain-specific packs.",
        customers: ["Banks and insurers", "Professional services firms", "Industrial and engineering companies", "Public institutions"],
        commercialModels: ["Enterprise licensing", "SaaS subscription", "Implementation & consulting"],
        businessValue:
          "License revenue with a land-and-expand motion across departments and a strong foundation for other agentic use cases.",
        valueDrivers: ["Operational efficiency", "Recurring revenue"],
        capabilities: ["Retrieval-augmented generation", "Permission-aware search", "Structured data querying", "Evaluation and quality monitoring"],
        validation:
          "Index one high-value knowledge domain for a single department, measure answer accuracy and time saved, and expand based on results.",
        gftRelevance:
          "Reuses the retrieval and knowledge architectures the candidate has built in production and GFT's enterprise security and integration expertise.",
      },
      {
        id: "intelligent-sales",
        industryId: "enterprise-ai",
        name: "Intelligent Sales & Business Development",
        tagline: "AI solutions supporting opportunity discovery, lead qualification, customer intelligence, and sales operations.",
        problem:
          "Sales teams spend most of their time researching accounts, qualifying leads, and preparing proposals instead of selling. Insight about customers is scattered across systems and people.",
        solution:
          "Assistants that research accounts, qualify and prioritize leads, draft proposals from approved content, and surface customer intelligence inside the tools sales teams already use.",
        customers: ["B2B enterprises with large sales organizations", "Financial institutions with relationship managers", "Professional services firms", "Technology vendors"],
        commercialModels: ["SaaS subscription", "Usage-based pricing", "Implementation & consulting"],
        businessValue:
          "Measurable pipeline and productivity gains for buyers, subscription revenue for GFT, and an offering GFT can use internally as a reference case.",
        valueDrivers: ["Revenue growth", "Operational efficiency"],
        capabilities: ["Data enrichment and integrations with CRM", "LLM-based research and drafting", "Scoring models", "Workflow automation"],
        validation:
          "Pilot with one sales team for a quarter and compare qualification speed, proposal cycle time, and conversion against a control group.",
        gftRelevance:
          "A horizontal offering that can start inside GFT's own commercial organization and then be sold to clients with proof from internal use.",
      },
      {
        id: "ai-customer-experiences",
        industryId: "enterprise-ai",
        name: "AI-Powered Customer Experiences",
        tagline: "Personalized intelligent interactions across digital channels.",
        problem:
          "Customers expect consistent, personalized, and immediate interactions across app, web, messaging, and voice. Most enterprises deliver fragmented experiences built channel by channel.",
        solution:
          "An orchestration layer that gives one AI-driven customer experience across channels, with shared context, personalization, and consistent governance, built on top of existing customer platforms.",
        customers: ["Retail and digital banks", "Insurers", "Consumer brands and retailers", "Telecoms and utilities"],
        commercialModels: ["Implementation & consulting", "Enterprise licensing", "Managed AI services"],
        businessValue:
          "Large transformation engagements plus licensed components, with clear impact on retention and cost to serve.",
        valueDrivers: ["Revenue growth", "Competitive differentiation", "Operational efficiency"],
        capabilities: ["Omnichannel conversational platforms", "Personalization and decisioning", "Customer data integration", "Experience analytics"],
        validation:
          "Start with one journey across two channels for a single client, measure completion and satisfaction, and expand the orchestration layer from there.",
        gftRelevance:
          "Builds on GFT's digital transformation and customer experience work in banking, with a productized layer that can travel across industries.",
      },
    ],
  },
  {
    id: "ventures",
    name: "AI Ventures & New Business Models",
    short: "AI Ventures",
    icon: "Rocket",
    accent: "magenta",
    summary:
      "Beyond services: a disciplined way to turn repeatable problems into products, partnerships, and new business lines that carry GFT's brand into adjacent markets.",
    commercialValue: [
      "New business lines",
      "Product-based revenue",
      "Strategic partnerships",
      "Repeatable intellectual property",
      "Expansion into adjacent markets",
    ],
    opportunities: [
      {
        id: "ai-native-saas",
        industryId: "ventures",
        name: "AI-Native SaaS Ventures",
        tagline: "Identify niche enterprise challenges and develop scalable AI-native solutions.",
        problem:
          "Many enterprise problems are too specific for generic software vendors and too repetitive to keep solving as custom projects. They sit in a gap where nobody builds the product.",
        solution:
          "A venture process that selects such problems, validates them with design partners, builds AI-native products with GFT engineering, and operates them as subscription businesses.",
        customers: ["Mid-market and enterprise companies in target niches", "Existing GFT clients with repeatable needs", "Industry associations and ecosystems"],
        commercialModels: ["SaaS subscription", "Venture partnership"],
        businessValue:
          "Product revenue with software margins, valuation upside, and a new growth vector that complements services.",
        valueDrivers: ["Revenue growth", "Recurring revenue", "Competitive differentiation"],
        capabilities: ["Product management and design", "Multi-tenant cloud architecture", "AI engineering", "Go-to-market and customer success"],
        validation:
          "Select two candidate niches from the opportunity pipeline, secure three design partners each, and build only where paid commitments exist.",
        gftRelevance:
          "Applies the candidate's founder experience to GFT's engineering scale, creating product businesses rather than one-off projects.",
      },
      {
        id: "industry-platforms",
        industryId: "ventures",
        name: "Industry-Specific AI Platforms",
        tagline: "Transform repeatable client challenges into standardized commercial products.",
        problem:
          "Services firms solve the same problem for many clients and rebuild it every time. The knowledge accumulates but the economics stay linear.",
        solution:
          "A systematic review of delivered solutions to identify candidates for productization, then standardize, license, and support them as industry platforms with implementation services around them.",
        customers: ["Existing GFT clients", "New clients in the same industries", "Channel and technology partners"],
        commercialModels: ["Enterprise licensing", "Implementation & consulting", "SaaS subscription"],
        businessValue:
          "Higher margins on repeat work, faster delivery, and intellectual property that differentiates GFT in competitive bids.",
        valueDrivers: ["Recurring revenue", "Competitive differentiation", "Operational efficiency"],
        capabilities: ["Solution architecture and productization", "Licensing and packaging", "Platform engineering", "Partner enablement"],
        validation:
          "Audit recent engagements for repeatable patterns, select one candidate with at least three similar deliveries, and test a licensed version with the next client.",
        gftRelevance:
          "Directly increases the return on GFT's existing delivery experience and supports its publicly stated move toward platform-driven growth.",
      },
      {
        id: "venture-partnerships",
        industryId: "ventures",
        name: "AI Venture Partnerships",
        tagline: "Build new ventures through strategic collaboration with enterprises and technology partners.",
        problem:
          "Enterprises want to launch AI businesses but lack the engineering and product capability. Technology vendors have platforms but lack industry access. Both need a builder with credibility.",
        solution:
          "Structured venture partnerships where GFT co-creates a new business with a corporate or technology partner, sharing risk, investment, and upside under clear governance.",
        customers: ["Banks and corporates with innovation mandates", "Cloud and AI platform vendors", "Investors and venture studios"],
        commercialModels: ["Venture partnership", "Implementation & consulting"],
        businessValue:
          "Access to new markets and capital, shared upside beyond fees, and a deeper strategic relationship with partners.",
        valueDrivers: ["Revenue growth", "Market expansion"],
        capabilities: ["Venture structuring and governance", "Business case and financial modelling", "Product and engineering delivery", "Partner management"],
        validation:
          "Identify two partners with stated innovation goals, co-develop a concept with a shared business case, and agree a staged investment model before build.",
        gftRelevance:
          "Leverages GFT's partner ecosystem and client trust to move from vendor to co-founder in selected opportunities.",
      },
      {
        id: "cross-industry-products",
        industryId: "ventures",
        name: "Cross-Industry AI Products",
        tagline: "Identify successful solutions in one industry and adapt them to additional markets.",
        problem:
          "Solutions proven in banking, such as document intelligence, onboarding, or risk assistants, rarely get adapted to insurance, healthcare, or public services, even though the underlying problems are similar.",
        solution:
          "A deliberate adaptation process that takes proven solutions, abstracts the industry-specific layer, and relaunches them in adjacent sectors with targeted go-to-market.",
        customers: ["Insurers", "Healthcare and education providers", "Public institutions", "Industrial companies"],
        commercialModels: ["Enterprise licensing", "SaaS subscription", "Implementation & consulting"],
        businessValue:
          "Faster market expansion at lower cost than building from scratch and greater return on existing intellectual property.",
        valueDrivers: ["Market expansion", "Revenue growth"],
        capabilities: ["Solution abstraction and modular design", "Industry research", "Rapid prototyping", "Sector-specific sales enablement"],
        validation:
          "Pick one proven banking solution, test the adapted version with two prospects in an adjacent sector, and measure sales cycle and fit.",
        gftRelevance:
          "Uses GFT's deep financial-services assets as a launchpad into industries it already serves at smaller scale.",
      },
      {
        id: "commercialization-studio",
        industryId: "ventures",
        name: "AI Commercialization Studios",
        tagline: "Establish a systematic process for discovering and validating commercially promising AI products.",
        problem:
          "Innovation efforts often produce demos that never reach customers. Without a disciplined path from idea to revenue, promising work stalls after the proof of concept.",
        solution:
          "A lightweight studio function inside GFT with a defined pipeline, stage gates, validation playbooks, and commercial sponsorship, running the Discover to Scale framework continuously.",
        customers: ["GFT business units and regions", "Clients seeking co-innovation", "Partners contributing technology or distribution"],
        commercialModels: ["Implementation & consulting", "Venture partnership", "SaaS subscription"],
        businessValue:
          "A repeatable engine that turns GFT's AI capabilities into a portfolio of commercial offerings with measurable pipeline.",
        valueDrivers: ["Revenue growth", "Competitive differentiation", "Recurring revenue"],
        capabilities: ["Venture and product methodology", "Portfolio management", "Customer discovery", "Cross-functional leadership"],
        validation:
          "Operate the pipeline for one quarter with a small number of opportunities, report stage conversion and commercial outcomes, and refine the process before scaling.",
        gftRelevance:
          "This is the operating model proposed in this document, designed to complement GFT's existing AI organization rather than duplicate it.",
      },
    ],
  },
];

export const allOpportunities = industries.flatMap((i) => i.opportunities);

export function getIndustry(id: string) {
  return industries.find((i) => i.id === id);
}
