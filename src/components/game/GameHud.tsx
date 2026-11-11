"use client";

import { useGame } from "./GameProvider";

/** Small score read-out that appears once the hidden mini-game is discovered. */
export function GameHud() {
  const game = useGame();
  if (!game || !game.active) return null;
  const { hudVisible, score, best, bumped } = game;
  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed inset-x-0 bottom-[clamp(14px,3vh,34px)] z-40 flex justify-center transition-opacity duration-500 ${
        hudVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="neon-panel flex items-center gap-x-5 px-5 py-2 font-condensed text-[clamp(13px,1.1vw,19px)] uppercase tracking-wider text-lavender-100">
        <span className={bumped ? "text-accent-pink" : ""}>{bumped ? "Oof! Jump the hills" : `Hills cleared ${score}`}</span>
        <span className="text-lavender-300/70">Best {best}</span>
        <span className="hidden text-lavender-300/70 sm:inline">A / D walk · W jump · S dive</span>
      </div>
    </div>
  );
}
