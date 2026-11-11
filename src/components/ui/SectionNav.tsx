"use client";

import { useDeck } from "@/components/deck/DeckProvider";

const LABELS: Record<string, string> = {
  hero: "Hi there",
  projects: "Projects",
  skills: "Skills",
  experience: "Experience",
  credentials: "Credentials",
  contact: "Contact",
};

/* Tiny line icons, 16 x 16 */
const ICONS: Record<string, React.ReactNode> = {
  hero: <path d="M3 9.5 12 3l9 6.5V21H3z" />,
  projects: <path d="M3 7h6l2 2h10v11H3z" />,
  skills: <path d="m12 3 2.6 5.6L21 9.4l-4.6 4.2 1.3 6.4L12 16.8 6.3 20l1.3-6.4L3 9.4l6.4-.8z" />,
  experience: <path d="M3 8h18v12H3zM9 8V5h6v3M3 13h18" />,
  credentials: <path d="M12 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12zM8 14l-1 7 5-2 5 2-1-7" />,
  contact: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
};

/**
 * Icon-only jump shortcuts on the right edge. The current section's icon is
 * always lit; the rest fade in on hover or keyboard focus. The rail is kept
 * narrow so the carousel arrows next to it stay clickable.
 */
export function SectionNav() {
  const { activeId, sectionIds, scrollToSection } = useDeck();
  return (
    <nav aria-label="Jump to section" className="group fixed top-1/2 right-[clamp(6px,0.8vw,14px)] z-40 -translate-y-1/2">
      <ul className="flex flex-col items-center gap-[clamp(8px,1.4vh,14px)] py-2">
        {sectionIds.map((id, i) => {
          const current = id === activeId;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={current ? "location" : undefined}
                aria-label={`${LABELS[id] ?? id} (section ${i + 1})`}
                title={LABELS[id] ?? id}
                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border transition-all duration-300 outline-none ${
                  current
                    ? "border-lavender-200 bg-lavender-300/25 text-lavender-50 opacity-100 shadow-[0_0_12px_rgba(201,179,255,0.85)]"
                    : "border-lavender-300/60 text-lavender-200 opacity-0 group-hover:opacity-80 focus-visible:opacity-100 group-focus-within:opacity-80 hover:!opacity-100 hover:bg-lavender-300/20"
                }`}
              >
                <svg aria-hidden viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round">
                  {ICONS[id]}
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
