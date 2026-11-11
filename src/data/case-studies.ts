import type { Project } from "./projects";

export type CaseStudy = NonNullable<Project["caseStudy"]>;

/**
 * Approved case-study copy, keyed by project slug.
 * Format: Summary → The problem being solved → Features that solve it → What I did.
 */
export const caseStudies: Record<string, CaseStudy> = {
  "the-move": {
    summary: [
      "A two-sided nightlife marketplace for the US and Nigeria: The Move helps people find events, clubs and lounges, buy tickets, reserve tables and order in-venue services; The Move Business (TMB) gives venues and organisers one place to publish events, sell tickets, manage bookings and scan guests in.",
      "I owned product vision and the phased go-to-market as Growth Product Manager at Kenkeputa, and advised on the legal and compliance side of launching in two jurisdictions.",
    ],
    problem: [
      "Going out is fragmented: discovery happens on social media, tickets on one platform, table bookings over DMs, and in-venue orders at a crowded bar.",
      "Venues feel the other side of it: no single view of bookings, guest lists and sales, and no owned channel to reach customers. Launching across the US and Nigeria adds payment, licensing and data-privacy differences that most nightlife apps ignore.",
    ],
    features: [
      { title: "Event and venue discovery", detail: "Browse events, clubs and lounges by what is happening tonight, not by scrolling feeds." },
      { title: "Tickets and table reservations in one flow", detail: "Buy a ticket or hold a table without leaving the app." },
      { title: "In-venue service ordering", detail: "Order from your table so service does not depend on reaching the bar." },
      { title: "TMB publishing and bookings", detail: "Venues publish events, manage reservations and track sales from one dashboard." },
      { title: "Guest entry scanning and promotions", detail: "Faster doors and promotion tools that acquire customers through the consumer app." },
      { title: "Payments and wallets built to pass legal review", detail: "Acceptance criteria written with jurisdiction-specific rules in mind." },
    ],
    role: [
      "Defined the product vision and ran phased launches across the US and Nigeria, measuring adoption and retention per region.",
      "Partnered with engineering on system-design trade-offs for payments and event discovery; authored the product specs.",
      "Reviewed API specs and technical designs for legal and regulatory risk on payment and wallet features, and defined compliant acceptance criteria.",
      "Advised design, marketing and operations on the legal implications of product decisions.",
    ],
  },
  "gaming-case-study": {
    summary: [
      "Game development information is private information, but it will be provided in personal conversations.",
      "Two original titles are in development under Pedestrian Games Limited: a stylised arena brawler built on signature-persona combat, and a narrative time-loop driving simulator set in a fictional Lagos. Full design documents are shared under NDA.",
    ],
    problem: [],
    features: [
      {
        title: "Project One: Afrobeats & Hollywood arena brawler",
        detail: "An arcade arena brawler that collides Afrobeats and Hollywood personas. Identity-driven movesets, crowd and hype momentum, and accessible depth for couch play and competitive players.",
      },
      {
        title: "Project Two: Know Road",
        detail: "A story-driven time-loop driving and dispatch simulator in a fictional Lagos. Progression comes from knowledge, not stat trees; every loop ends at 8:15 PM. Built with Unity and Twine.",
      },
    ],
    labels: { features: "What you can know" },
    reference: {
      title: "What stays private",
      detail: "Rosters, combat algorithms, narrative twists, loop-breaking triggers and systems architecture are withheld and shared only under NDA.",
    },
  },
  sage: {
    summary: [
      "Sage is the admin and operations backend behind Tekkas Store and Azar Payments. I inherited a buggy codebase and rebuilt its structure from scratch, prioritising the modules the business ran on daily and scoping the rest into a roadmap.",
    ],
    problem: [
      "Operations staff had no reliable view of transactions, customers and user activity, and the existing admin tool failed often enough that people worked around it.",
      "A BNPL product cannot run on workarounds: eligibility and repayment decisions need an audited control centre.",
    ],
    features: [
      { title: "Dashboard", detail: "The daily numbers in one screen." },
      { title: "Customer and user management", detail: "Profiles, roles and oversight of who can do what." },
      { title: "Reporting", detail: "Transaction and activity visibility for finance and operations." },
      { title: "Inventory", detail: "Stock visibility tied to orders." },
      { title: "Azar control centre", detail: "Repayment and eligibility flows managed from one place." },
      { title: "Scoped next: payments, communication, fraud detection", detail: "Designed into the structure so they land without another rewrite." },
    ],
    role: [
      "Rebuilt the information architecture and module priorities after inheriting the codebase.",
      "Balanced product needs, operational efficiency and compliance requirements in every scoping decision.",
      "Ran the fraud-detection, user-role and inventory scoping with the operations team.",
    ],
  },
  "tekkas-azar": {
    summary: [
      "Azar is an embedded flexible-payments (BNPL) option inside Tekkas Store that lets verified shoppers split a purchase. I worked on its structure, positioning and integration: eligibility rules, repayment flows, gateway connections and the compliance-friendly way it is explained to customers.",
    ],
    problem: [
      "Shoppers abandon carts they cannot pay in full today; stores lose the sale and lenders stay out of e-commerce because risk, repayment and messaging are hard to get right.",
      "A split-payment product has to be simple at checkout and defensible to a regulator.",
    ],
    features: [
      { title: "Eligibility at checkout", detail: "Verified users see the split option only when they qualify." },
      { title: "Clear repayment schedules", detail: "Plain-language instalments and reminders." },
      { title: "Gateway integration", detail: "Collection runs through the existing payment rails." },
      { title: "Compliance-friendly messaging", detail: "Disclosures and copy written so marketing and legal agree." },
      { title: "Admin oversight through Sage", detail: "Every decision and repayment visible to operations." },
      { title: "Growth metrics", detail: "Take-up, repayment and default tracked from launch." },
    ],
    role: [
      "Owned the product from checkout flow to admin oversight as Growth Product Manager.",
      "Shaped positioning and the messaging that passed compliance review.",
      "Ran user acceptance testing and the partnership conversations around the launch.",
    ],
  },
  enoverlab: {
    summary: [
      "EnoverLab trains the next generation of African product managers, from fundamentals to advanced practice. I built curriculum and taught, and as Program Manager and legal adviser drafted the institute's commercial contracts.",
    ],
    problem: [
      "Africa's product teams are growing faster than the supply of trained PMs; most learning material is written for other markets and does not teach the judgement calls that matter here.",
    ],
    features: [
      { title: "Curriculum for 70+ professionals", detail: "With an emphasis on data-driven growth and strategic planning." },
      { title: "Mentoring", detail: "Technical literacy, defining KPIs, running experiments and prioritising." },
      { title: "Contracts and compliance", detail: "Agreements that keep the institute's partnerships safe." },
    ],
    role: [
      "Built the curriculum and mentored cohorts.",
      "Reviewed and drafted commercial contracts and monitored compliance.",
      "Worked cross-functionally on customer-satisfaction programmes.",
    ],
  },
  tropicmed: {
    summary: [
      "A healthcare platform with separate journeys for patients and doctors, from landing page through sign-in, user-type selection and doctor registration.",
    ],
    problem: [
      "Patients and doctors need different onboarding, verification and trust signals; one generic sign-up serves neither.",
    ],
    features: [
      { title: "User-type selection up front", detail: "Each side gets the right flow from the first screen." },
      { title: "Doctor registration with credential capture", detail: "Doctors register with the details that make them verifiable." },
      { title: "Simple patient sign-in", detail: "Patients get in without friction." },
    ],
    role: ["Product management and business development."],
  },
  simservers: {
    summary: [
      "Simservers.io automates USSD transactions with proprietary technology so businesses and developers can run airtime and data top-ups faster and more reliably, with a companion app for management and real-time monitoring.",
    ],
    problem: [
      "USSD workflows are manual, slow and fail silently; resellers lose money on every retry and have no visibility until a customer complains.",
    ],
    features: [
      { title: "Automated airtime and data top-ups", detail: "Over USSD, without a person at the keypad." },
      { title: "Companion app", detail: "Management on the go." },
      { title: "Real-time monitoring", detail: "Failures are seen immediately." },
    ],
    role: ["Product Manager: roadmap, positioning and the needs of the developer and business audiences."],
  },
  "pmc-sms": {
    summary: [
      "A messaging platform for bulk and personalised communication over SMS, email and WhatsApp, with schedulers, OTP services and AI-powered retargeting; a mobile app for quick sends and a web app for managing everything.",
    ],
    problem: [
      "Small businesses and organisations pay too much to reach customers across three channels and have no way to schedule, personalise or follow up without a developer.",
    ],
    features: [
      { title: "Bulk and personalised sends", detail: "Across SMS, email and WhatsApp." },
      { title: "Birthday and campaign schedulers", detail: "Set it once; it runs." },
      { title: "OTP service", detail: "For businesses that need verification." },
      { title: "AI-powered retargeting", detail: "Follow up the people who did not respond." },
      { title: "Mobile for execution, web for management", detail: "Quick sends on the phone, full control on the desktop." },
    ],
    role: ["Automation, branding, backend and software development oversight."],
  },
  "sme-cloud": {
    summary: [
      "SME Cloud removes the complexity of buying bulk data from multiple ISPs and running VTU transactions: USSD codes plus cloud automation, with monetisation models, sales analysis, auto-retry and downtime notifications.",
    ],
    problem: [
      "Business owners juggle several ISP portals and USSD menus to buy bulk data, then resell with no analytics, and every outage costs them sales they never see.",
    ],
    features: [
      { title: "ISP communication automation", detail: "One place for multiple ISPs." },
      { title: "Bulk data purchases and VTU transactions", detail: "The core workflow, automated end to end." },
      { title: "Service monitoring with downtime notifications", detail: "Know about an outage before customers do." },
      { title: "Auto-retry", detail: "Failed transactions retry without a person." },
      { title: "Sales analysis and monetisation models", detail: "See what sells and price it flexibly." },
    ],
    role: ["Product Manager: product design, branding and logo direction, business development and the mobile application."],
  },
  "dalens-ai": {
    summary: [
      "DalensAI uses artificial intelligence to monitor and optimise the care of farm animals, giving farmers real-time insights, predictive analytics and management tools for healthier livestock and better productivity.",
      "I created the product vision and roadmap and secured early-stage funding.",
    ],
    problem: [
      "Livestock losses are discovered late. Farmers lack the data to act early, and existing tools are built for large commercial farms.",
    ],
    features: [
      { title: "Real-time monitoring", detail: "Of animal health signals." },
      { title: "Predictive analytics", detail: "Flag problems before they become losses." },
      { title: "Management tools", detail: "That fit how smaller farms actually work." },
    ],
    role: [
      "Developed product roadmaps and go-to-market across 5 workstreams, from concept to a $10K funding close.",
      "Ran 4 MVP validation cycles with real users, cutting rework by 25% and launch timelines by 3 weeks.",
      "Turned customer and market research into iterative refinements that lifted engagement and retention.",
    ],
  },
  justpayng: {
    summary: [
      "A payment platform built to simplify transactions. I supervised development and design, oversaw API integrations and kept designers and engineers aligned on an interface people could use without instruction.",
    ],
    problem: ["Payment products fail on integration quality and on interfaces designed by engineers for engineers."],
    features: [
      { title: "Clean API integrations", detail: "For reliable connectivity." },
      { title: "An intuitive interface", detail: "Validated with users." },
      { title: "Cross-functional delivery", detail: "That kept scope and quality honest." },
    ],
    role: ["Technical oversight, project management and the bridge between design and development."],
  },
  kirapay: {
    summary: [
      "A secure digital payment platform for businesses of every size: multiple payment methods, real-time transaction monitoring and simple API integration for SMEs, e-commerce platforms and developers.",
    ],
    problem: ["Small merchants need enterprise-grade payment acceptance without enterprise cost or operational bottlenecks."],
    features: [
      { title: "Multiple payment methods", detail: "Under one integration." },
      { title: "Real-time transaction monitoring", detail: "See every payment as it happens." },
      { title: "Developer-friendly API", detail: "Integrate in days, not months." },
    ],
  },
  "autobiz-smartplan": {
    summary: [
      "A packaged offer that delivers high-quality websites at speed, bundled with branding and basic advertising so a new business launches with a coherent identity. I built the business plan, marketing model and pricing structure, then led designers and engineers to deliver it.",
    ],
    problem: [
      "Small businesses buy a website, a logo and ads from three vendors, on three timelines, and end up with a brand that does not match itself.",
    ],
    features: [
      { title: "Fixed-scope website delivery", detail: "At exceptional speed." },
      { title: "Integrated branding", detail: "For a cohesive identity." },
      { title: "Launch advertising campaigns", detail: "Reach the target audience from day one." },
      { title: "Packaged pricing", detail: "Makes the decision simple." },
    ],
    role: ["Business plan, marketing model, pricing, multidisciplinary team leadership and campaign execution within tight timelines."],
  },
  "autobiz-app": {
    summary: [
      "A dual-purpose platform: an API marketplace that gives developers and business owners predesigned APIs to build digital solutions faster, and an internal operations platform for running a business day to day.",
    ],
    problem: ["Teams rebuild the same integrations and run operations across disconnected tools; both slow down delivery and hide problems."],
    features: [
      { title: "API marketplace", detail: "Predesigned APIs ready to use." },
      { title: "Operations management", detail: "Tools in one platform." },
      { title: "Mobile application", detail: "For on-the-go use." },
    ],
    role: ["Product Manager across both halves of the platform."],
  },
  "naija-tax": {
    summary: [
      "Naija Tax is a guided tax product for Nigerians who are willing to pay their taxes but should never have to understand the law to do it. It turns the tax code into a plain-language interview: it works out which taxes apply to you, registers you, fills the forms from what you already have, and takes the payment.",
      "The user understands \"this is how my tax works\" and gets on with their life. I am building it as a lawyer and product manager who has watched capable, well-informed people get this wrong.",
    ],
    problem: [
      "Most Nigerians who want to be compliant do not know where to start: whether they need a TIN, which taxes apply to a salary earner with a side business, what the thresholds are, when returns are due, or how to pay without a visit to an office. Nigeria's 2025 tax reform laws, in force from January 2026, change the rules again, which makes the knowledge gap wider, not smaller. Government portals such as TaxPro-Max are built for people who already know what to file. The result is that compliance is treated as something you hire an accountant for, and most people simply do not do it.",
      "The motivation is personal. My sister follows tax news closely, can tell you what changed this year, and still has no real idea what actually gets done when a return is filed. She knows about tax; she does not know her tax. That gap, between being informed and being able to act, is the product.",
    ],
    features: [
      { title: "Life-based interview, not a tax form", detail: "\"Do you earn a salary? Freelance? Rent out property? Run a registered business?\" The engine maps answers to the taxes that apply (PAYE/PIT, VAT registration, small-company rules, withholding) and says so in one sentence each." },
      { title: "Guided registration", detail: "TIN registration walked through step by step with the documents you already have (NIN, BVN, CAC details)." },
      { title: "Smart fill from what you have", detail: "Payslips, bank statements and invoices become numbers in the right boxes; the user confirms, they do not calculate." },
      { title: "\"Why we ask\" on every question", detail: "One plain sentence per question, so understanding is a by-product of filing, not a prerequisite." },
      { title: "Running total and progress", detail: "The TurboTax trick: you always see what you owe so far, what is left to answer and what you have saved." },
      { title: "Pay inside the product", detail: "Payment through approved rails with receipts and a record you can show." },
      { title: "Filing calendar and reminders", detail: "Deadlines by tax type, with reminders tied to the user's actual obligations, not a generic list." },
      { title: "Versioned rules engine, lawyer-reviewed", detail: "The tax logic lives in versioned rules so that when the law changes (as it did in 2025) the product changes without a rewrite, and every version is reviewed against the statute." },
      { title: "Audit-ready records", detail: "Every filing, payment and the rule version used is kept, so a query years later has an answer." },
    ],
    reference: {
      title: "The reference: TurboTax (United States)",
      detail:
        "TurboTax is the clearest proof that tax software wins by hiding the tax code, not explaining it. It asks about your life (\"did you get married, buy a house, do freelance work?\") instead of asking about schedules and line items; it imports documents so you type less; it shows progress and a running refund figure so you always know where you stand; it explains every question in one sentence with \"why we ask\"; and it backs the whole thing with accuracy and maximum-refund guarantees. Nigeria has none of this. Naija Tax takes the interview model and rebuilds it for Nigerian income types, registration steps and payment rails.",
    },
    role: [
      "Mapped the Nigerian individual and small-business tax obligations into a decision tree a non-expert can answer.",
      "Designed the interview flow and the rules-engine architecture, with legal review as a release gate.",
      "Defined the metrics that matter: time-to-first-filing, completion rate, and the share of users who file without external help.",
    ],
  },
};
