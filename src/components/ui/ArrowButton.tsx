"use client";

import { CarouselArrowIcon } from "./Icons";

export function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  const side = direction === "left" ? "left-[clamp(8px,3.2vw,56px)]" : "right-[clamp(8px,3.2vw,56px)]";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-10 ${side} -translate-y-1/2 cursor-pointer text-lavender-300 drop-shadow-[0_0_10px_rgba(201,179,255,0.7)] transition hover:scale-110 hover:text-lavender-100 focus-visible:scale-110 focus-visible:text-lavender-100`}
    >
      <CarouselArrowIcon direction={direction} size={0} className="h-[clamp(52px,9.5vh,106px)] w-auto" />
    </button>
  );
}
