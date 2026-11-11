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

/**
 * Jump shortcuts on the right edge. Only the current section's marker is
 * visible until the rail is hovered or focused, then every stop appears.
 */
export function SectionNav() {
  const { activeId, sectionIds, scrollToSection } = useDeck();
  return (
    <nav
      aria-label="Jump to section"
      className="group fixed top-1/2 right-[clamp(6px,0.9vw,16px)] z-40 -translate-y-1/2"
    >
      <ul className="flex flex-col items-end gap-[clamp(10px,1.6vh,18px)] py-4 pl-10">
        {sectionIds.map((id, i) => {
          const current = id === activeId;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={current ? "location" : undefined}
                aria-label={`${LABELS[id] ?? id} (section ${i + 1})`}
                className={`flex cursor-pointer items-center gap-3 outline-none transition-opacity duration-300 ${
                  current ? "opacity-100" : "opacity-0 group-hover:opacity-100 focus-visible:opacity-100 group-focus-within:opacity-100"
                }`}
              >
                <span
                  className={`nav-label text-[clamp(12px,1vw,17px)] leading-none transition-opacity duration-300 ${
                    current ? "opacity-70 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                  }`}
                >
                  {LABELS[id] ?? id}
                </span>
                <span
                  aria-hidden
                  className={`block rounded-full border-2 border-lavender-300 transition-all duration-300 ${
                    current
                      ? "h-3.5 w-3.5 bg-lavender-200 shadow-[0_0_12px_rgba(201,179,255,0.95)]"
                      : "h-2.5 w-2.5 bg-transparent group-hover:bg-lavender-300/40"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
