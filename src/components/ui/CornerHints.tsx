"use client";

import { useDeck } from "@/components/deck/DeckProvider";
import { EnterKeyIcon, ScrollIcon } from "./Icons";

/** Fixed "PRESS ⏎" (bottom-left) and "SCROLL" (bottom-right) hints. */
export function CornerHints() {
  const { activeId, toggle, scrollBy, sectionIds } = useDeck();
  const atEnd = activeId === sectionIds[sectionIds.length - 1];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden items-end justify-between px-[clamp(16px,3.5vw,60px)] pb-[clamp(16px,3.5vh,40px)] md:flex">
      <button
        type="button"
        onClick={() => activeId && toggle(activeId)}
        className="pointer-events-auto flex cursor-pointer flex-col items-start gap-[clamp(6px,1vh,12px)] text-lavender-200 transition hover:text-white focus-visible:text-white"
        aria-label="Open or close the current panel (Enter)"
      >
        <span className="nav-label text-[clamp(20px,2.3vw,38px)] leading-none">Press</span>
        <EnterKeyIcon size={0} className="h-[clamp(42px,6.4vh,72px)] w-auto" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(atEnd ? -1 : 1)}
        className="pointer-events-auto flex cursor-pointer flex-col items-center gap-[clamp(6px,1vh,12px)] text-lavender-200 transition hover:text-white focus-visible:text-white"
        aria-label={atEnd ? "Scroll to previous section" : "Scroll to next section"}
      >
        <span className="nav-label text-[clamp(20px,2.3vw,38px)] leading-none">Scroll</span>
        <ScrollIcon size={0} className="h-[clamp(40px,5.8vh,64px)] w-auto animate-float" />
      </button>
    </div>
  );
}
