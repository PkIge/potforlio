export type Credential = {
  title: string;
  issuer?: string;
  kind: "certification" | "degree";
  badge?: string;
};

/** Ordered newest certification first, then degrees. */
export const credentials: Credential[] = [
  { title: "Technical Product Management Certification", kind: "certification", badge: "Newest" },
  { title: "Certified System Administrator", kind: "certification" },
  { title: "AI Product Management Certification", kind: "certification" },
  {
    title: "Foundations & Applications of Financial Technology Specialization",
    issuer: "University of Pennsylvania",
    kind: "certification",
  },
  { title: "M.Sc. Information Technology & B.Sc. Computer Science", kind: "degree" },
  { title: "Bachelor of Laws (LL.B.)", kind: "degree" },
];
