"use client";

import { useCallback, useRef, type ReactNode } from "react";
import { SceneGame } from "@/components/game/SceneGame";
import { useDeck } from "./DeckProvider";
import { useSwipe } from "./useSwipe";

export type SceneBackground = "hero" | "projects" | "skills" | "experience";

/**
 * One full-viewport slide of the deck. The illustrated background is the
 * cleaned Figma frame; the globe and astronaut are live layers on top of it
 * and the slide's content sits above those.
 */
export function Scene({
  id,
  bg,
  children,
  className = "",
  label,
  onSwipe,
}: {
  id: string;
  bg: SceneBackground;
  children: ReactNode;
  className?: string;
  label: string;
  /** When set, horizontal finger swipes and mouse drags call this. */
  onSwipe?: (dir: "prev" | "next") => void;
}) {
  const { registerSection } = useDeck();
  const hostRef = useRef<HTMLElement | null>(null);
  const swipe = useSwipe(onSwipe ?? (() => {}));
  const ref = useCallback(
    (el: HTMLElement | null) => {
      hostRef.current = el;
      registerSection(id, el);
    },
    [id, registerSection],
  );
  return (
    <section
      id={id}
      ref={ref}
      aria-label={label}
      className={`relative isolate min-h-dvh w-full snap-start overflow-hidden bg-space-900 bg-cover bg-[position:center_bottom] bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(/bg/${bg}.webp)` }}
    >
      <SceneGame scene={bg} hostRef={hostRef} />
      <div
        {...(onSwipe ? swipe.props : {})}
        className={`relative z-10 ${onSwipe ? "cursor-grab" : ""} ${onSwipe ? (swipe.props.className ?? "") : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
