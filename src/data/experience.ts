export type Experience = {
  id: string;
  title: string;
  /** Organisation, product or client. */
  org: string;
  /**
   * Human readable period, e.g. "Jan 2024 to Aug 2025". The source content
   * does not include employment dates, so this is left empty and the
   * products worked on are shown on that line instead. Fill it in to show dates.
   */
  period?: string;
  /** Short line shown under the title when no period is set. */
  products: string;
  summary: string;
  highlights: string[];
  /** Related project slugs for deep links. */
  projects?: string[];
};

export const experience: Experience[] = [
  {
    id: "senior-tpm",
    title: "Senior Technical Product Manager & AI Product Specialist",
    org: "Current focus",
    products: "AI/LLM products · FinTech · Gamification",
    summary:
      "Bridging technical product strategy, AI/LLM evaluation and prompt engineering, full-stack prototyping (Next.js, React, SwiftUI), FinTech architecture, and legal and regulatory compliance.",
    highlights: [
      "Own product strategy for AI-assisted and LLM-powered features, including evaluation frameworks and prompt engineering.",
      "Prototype end-to-end experiences in Next.js, React and SwiftUI to de-risk roadmap decisions before engineering investment.",
      "Design FinTech architecture with compliance and regulatory constraints built in from the start.",
      "Apply gamification design (loops, progression, rewards) to drive engagement and retention.",
    ],
  },
  {
    id: "tekkas-growth-pm",
    title: "Growth Product Manager",
    org: "Tekkas Store",
    products: "Azar Payments (BNPL) · Sage operations backend",
    summary:
      "Built Azar, an embedded flexible payments (BNPL) solution inside Tekkas Store, and redesigned Sage, the admin and operations backend that powers the store and Azar's repayment and eligibility flows.",
    highlights: [
      "Shaped Azar's structure, positioning and integration: eligibility, repayment flows, gateway connections and compliance-friendly messaging.",
      "Rebuilt Sage from scratch after inheriting a buggy codebase, prioritising dashboard, customer management, user oversight and reporting.",
      "Scoped payments, communication and fraud detection modules, balancing product needs, operational efficiency and compliance.",
    ],
    projects: ["tekkas-azar", "sage"],
  },
  {
    id: "the-move-pm",
    title: "Product Manager",
    org: "The Move & The Move Business",
    products: "Nightlife discovery app · Venue operations platform",
    summary:
      "Led a U.S.-based nightlife and entertainment discovery app and its companion platform for venue owners and organisers, from customer research through launch and operations.",
    highlights: [
      "Consumer app for finding events, buying tickets, reserving tables and ordering in-venue services.",
      "Business platform covering profiles, payments, guest entry scanning, promotions and sales tracking.",
      "Customer research and product launch operations across both sides of the marketplace.",
    ],
    projects: ["the-move"],
  },
  {
    id: "enoverlab",
    title: "Product Manager & Tutor",
    org: "EnoverLab",
    products: "Product management education for Africa",
    summary:
      "Taught and built training programmes at an educational startup nurturing the next generation of product managers, from fundamentals to advanced techniques.",
    highlights: [
      "Designed and delivered product management curriculum.",
      "Mentored learners building and managing impactful products.",
    ],
    projects: ["enoverlab"],
  },
  {
    id: "platform-pm",
    title: "Product Manager",
    org: "Autobiz.app · SME Cloud · Simservers.io · Dalens AI",
    products: "API marketplace · USSD automation · AgriTech AI",
    summary:
      "Managed a portfolio of automation, FinTech and AI platforms: an API marketplace and business management suite, cloud-based USSD and VTU automation, and an AI-driven livestock management startup.",
    highlights: [
      "Autobiz.app: API marketplace and internal operations platform for developers and business owners.",
      "SME Cloud and Simservers.io: USSD automation for bulk data purchases, airtime and data top-ups with monitoring and auto-retry.",
      "Dalens AI: real-time insights and predictive analytics for farm animal care.",
    ],
    projects: ["autobiz-app", "sme-cloud", "simservers", "dalens-ai"],
  },
  {
    id: "cdlp",
    title: "Product & Business Strategy Lead",
    org: "CDLP Hub Limited",
    products: "Autobiz Smartplan",
    summary:
      "Spearheaded the business plan, marketing model and pricing structure for Autobiz Smartplan, a fast website-plus-branding package, and led designers and engineers to deliver it.",
    highlights: [
      "Defined pricing structure and marketing model for the package.",
      "Coordinated multidisciplinary design and engineering delivery within tight timelines.",
      "Conceptualised and ran basic advertising campaigns for client launches.",
    ],
    projects: ["autobiz-smartplan"],
  },
];
