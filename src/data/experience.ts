export type Experience = {
  id: string;
  title: string;
  /** Organisation, product or client. */
  org: string;
  /** Period exactly as recorded in the job history. */
  period?: string;
  /** Short line shown under the title when no period is set. */
  products: string;
  summary: string;
  highlights: string[];
  /** Related project slugs for deep links. */
  projects?: string[];
};

/** Real job history, dates copied as recorded; newest first. */
export const experience: Experience[] = [
  {
    id: "pedestrian-games",
    title: "Founder & Managing Director",
    org: "Pedestrian Games Limited",
    period: "Jul 2026 – Present",
    products: "Game development and digital media",
    summary:
      "Founded and registered a game development and digital media company in Ibadan, directing end-to-end product development, technical architecture and cross-functional design, web and media teams.",
    highlights: [
      "Drafted and executed channel management contracts, intellectual property protections and commercial governance frameworks for digital properties and gaming channels.",
      "Led content strategy, production workflows and operational scaling across gaming media assets.",
    ],
    projects: ["gaming-case-study"],
  },
  {
    id: "kentol",
    title: "Director & Technical Product Lead",
    org: "Kentol Limited",
    period: "2026 – Present",
    products: "Kentol Table Water · Splash Zone Paintball · Ewagbolahan & Co",
    summary:
      "Directed digital transformation, technical architecture and multi-brand web platform development across a group spanning manufacturing, recreation and legal services.",
    highlights: [
      "Led cross-functional teams across data science, full-stack engineering and human resources to align subsidiary operations with group-level commercial goals.",
      "Oversaw corporate governance, regulatory compliance and operational strategy across diverse business units.",
    ],
  },
  {
    id: "ai-platforms",
    title: "AI Data Trainer, Prompt Engineer & Visual Evaluation Specialist",
    org: "Handshake AI · Outlier · Micro1 · MultiMango",
    period: "2026 – Present",
    products: "Enterprise AI model training and evaluation platforms",
    summary:
      "Designed complex multi-step prompts, domain-specific legal and technical reasoning tasks, and visual evaluation benchmarks to train and audit large language models.",
    highlights: [
      "Applied rubric-based quality assurance standards to evaluate model accuracy, safety and instruction adherence across diverse workflows.",
    ],
  },
  {
    id: "kenkeputa",
    title: "Legal & Compliance Officer / Growth Product Manager",
    org: "Kenkeputa",
    period: "Aug 2024 – Present",
    products: "The Move & The Move Business (US and Nigeria)",
    summary:
      "Defined product vision and executed phased go-to-market launches for a B2B SaaS nightlife and events platform across the US and Nigeria, while advising on regulatory, licensing and consumer-protection requirements for each market.",
    highlights: [
      "Partnered with engineering on system-design trade-offs for payments and event discovery; authored product specs balancing feasibility and user value.",
      "Reviewed API specifications and technical design documents to assess legal and regulatory risk on payment and wallet integrations, and defined compliant acceptance criteria.",
      "Drafted and reviewed vendor agreements and platform terms governing event creation, ticketing and venue management.",
      "Monitored adoption and engagement data to flag contractual and compliance risk areas, informing iterative policy updates.",
    ],
    projects: ["the-move"],
  },
  {
    id: "enoverlab",
    title: "Program Manager, Legal Adviser & Tutor",
    org: "EnoverLab Training Institute",
    period: "May 2023 – Present",
    products: "Product management education in Kenya and Nigeria",
    summary:
      "Built product management curricula for 70+ professionals, mentored product managers, and drafted and reviewed the institute's commercial contracts.",
    highlights: [
      "Mentored PMs on technical literacy, defining KPIs, running experiments and prioritising effectively.",
      "Monitored compliance with relevant laws and regulations and collaborated cross-functionally on customer-satisfaction programmes.",
    ],
    projects: ["enoverlab"],
  },
  {
    id: "paam",
    title: "Community Outreach Officer & Digital Product Lead",
    org: "PAAM Literacy & Vocational Organisation",
    period: "Aug 2026 – Sept 2026",
    products: "Community literacy and vocational empowerment, Ekiti State",
    summary:
      "Coordinated field outreach programmes and stakeholder engagement across Ado-Ekiti, Ijero-Ekiti and Ipoti-Ekiti, and built the organisation's official web platform.",
    highlights: [
      "Architected, built and launched the web platform with content management and payment gateway integrations to support donor and programme operations.",
    ],
  },
  {
    id: "cdlp",
    title: "Compliance & Legal Officer / Product Manager",
    org: "Concept Delapaix Hub",
    period: "Apr 2023 – Nov 2024",
    products: "Payment and wallet integrations · Autobiz Smartplan",
    summary:
      "Launched payment solutions for 20+ businesses supporting ₦100M+ in transactions, coordinated a 14-person cross-functional team delivering a B2B SaaS platform, and kept the company compliant with financial and payment regulation.",
    highlights: [
      "Partnered with analytics teams to refine APIs and drove market insights into roadmap decisions.",
      "Designed live-environment testing frameworks to validate new wallet features before scale-up.",
      "Drafted and amended contractual templates, MOUs and confidentiality agreements.",
    ],
    projects: ["autobiz-smartplan"],
  },
  {
    id: "dalens",
    title: "Project / Product Manager",
    org: "Dalens AI",
    period: "Apr 2021 – Mar 2024",
    products: "Agricultural AI for livestock care",
    summary:
      "Developed product roadmaps and go-to-market strategies across 5 project workstreams from concept to funding close, securing $10K in early-stage funding.",
    highlights: [
      "Executed 4 MVP validation cycles and user testing sessions, reducing rework by 25% and cutting launch timelines by 3 weeks.",
      "Translated customer and market research into iterative product refinements, boosting market penetration, engagement and retention.",
    ],
    projects: ["dalens-ai"],
  },
  {
    id: "splash-zone",
    title: "Co-Founder",
    org: "Splash Zone Games and Recreations Arena",
    period: "Sept 2019 – March 2023",
    products: "Pioneer paintball and VR game centre, South-West Nigeria",
    summary:
      "Co-founded the pioneer paintball games arena in South-Western Nigeria, directly responsible for media, construction, legal and import teams.",
    highlights: [
      "Achieved company financial goals by about 50% while maintaining a 30% customer growth rate and steady retention.",
      "Managed day-to-day operations with a 20-person team serving 5,000+ customers, improving customer satisfaction ratings by about 20%.",
    ],
  },
  {
    id: "ewagbolahan",
    title: "Head of Chambers",
    org: "Ewagbolahan & Co Legal Practitioners",
    period: "Apr 2018 – Dec 2019",
    products: "Company law practice",
    summary:
      "Led a team of lawyers and IT professionals, served as Company Secretary for clients, and ensured compliance with legal documentation, obligations and taxation law.",
    highlights: [
      "Led the chambers team in handling complex legal cases, achieving a 95% client satisfaction rate.",
      "Led the data team to implement analytics tools, enabling data-driven decision-making and better client service delivery.",
    ],
  },
  {
    id: "bode-elemide",
    title: "Associate",
    org: "Bode Elemide & Co",
    period: "Nov 2016 – Jul 2018",
    products: "Property and civil litigation",
    summary:
      "Represented clients in 50+ complex scenarios and cases, developing and executing legal strategies from case analysis through courtroom presentation.",
    highlights: [
      "Cultivated strong client relationships through personalised legal advice, maintaining a 90% client satisfaction rate.",
    ],
  },
];
