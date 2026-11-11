export type SocialLink = {
  id: "linkedin" | "x" | "github" | "instagram" | "behance" | "mail";
  label: string;
  href: string;
};

export const profile = {
  name: "Praise Kehinde-Ige",
  shortName: "Praise",
  role: "Senior Technical Product Manager & AI Product Specialist",
  tagline: "A message from Earth",
  /** Large neon greeting at the top of the hero. */
  greeting: "Hi there",
  /** Shown under "I'm Praise". Kept short so it reads at a glance. */
  heroSubtitle: "Technical Product · AI · FinTech · Gamification",
  /**
   * Core positioning statement. Shown in the hero panel and used for metadata.
   */
  positioning:
    "Bridging technical product strategy, AI/LLM evaluation & prompt engineering, full-stack prototyping (Next.js, React, SwiftUI), FinTech architecture, gamification design, and legal/regulatory compliance.",
  bio: [
    "I am Praise Kehinde-Ige, a Senior Technical Product Manager and AI Product Specialist.",
    "I bridge technical product strategy, AI/LLM evaluation and prompt engineering, full-stack prototyping in Next.js, React and SwiftUI, FinTech architecture, and legal and regulatory compliance.",
    "I have led products across payments, BNPL, automation, agritech, nightlife and education, from business model and pricing through launch, operations and growth.",
    "I am also great at gamification: designing loops, progression and reward systems that make products genuinely fun to come back to. There is a small game hidden on this page.",
  ],
  location: "Earth",
  copyrightYear: 2026,
  /**
   * Set this to a public contact address to enable the mail link on the site.
   * Left empty on purpose so no private address ships by accident.
   */
  email: "",
  socials: [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/pkige" },
    { id: "x", label: "X (Twitter)", href: "https://x.com/Pk_ige" },
  ] satisfies SocialLink[],
};

export const siteUrl = "https://praise-kehinde-ige.vercel.app";
