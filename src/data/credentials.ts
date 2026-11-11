export type Credential = {
  title: string;
  issuer?: string;
  kind: "certification" | "degree";
  badge?: string;
};

/** Ordered newest certification first, then degrees. */
export const credentials: Credential[] = [
  { title: "Technical Product Management Certification", issuer: "EnoverLab", kind: "certification", badge: "Newest" },
  { title: "Certified System Administrator", kind: "certification" },
  { title: "AI Product Management Certification", kind: "certification" },
  {
    title: "Foundations & Applications of Financial Technology Specialization",
    issuer: "University of Pennsylvania",
    kind: "certification",
  },
  { title: "Software Product Management Specialization", issuer: "University of Alberta", kind: "certification" },
  { title: "Google Project Management Certificate", issuer: "Google", kind: "certification" },
  { title: "Introduction to Computer Programming (CS50)", issuer: "Harvard", kind: "certification" },
  { title: "M.Sc. Information Technology & B.Sc. Computer Science", kind: "degree" },
  { title: "Bachelor of Laws (LL.B.)", issuer: "Afe Babalola University", kind: "degree" },
  { title: "Bar Practicing Certificate", issuer: "Nigerian Law School · Council of Legal Education", kind: "degree" },
];
