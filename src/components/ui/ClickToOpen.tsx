"use client";

/** The bracketed "CLICK TO OPEN" call to action that sits on the planet. */
export function ClickToOpen({
  onClick,
  controls,
  label = "Click to open",
  className = "",
}: {
  onClick: () => void;
  controls?: string;
  label?: string;
  className?: string;
}) {
  const [first, ...rest] = label.split(" ");
  return (
    <button
      type="button"
      onClick={onClick}
      aria-controls={controls}
      aria-expanded={false}
      className={`group relative inline-flex cursor-pointer flex-col items-center px-[clamp(20px,2.6vw,46px)] py-[clamp(14px,2vw,34px)] outline-none transition-transform hover:scale-[1.03] focus-visible:scale-[1.03] ${className}`}
    >
      <span aria-hidden className="bracket-tl top-0 left-0 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
      <span aria-hidden className="bracket-br right-0 bottom-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
      <span className="neon-outline animate-flicker text-[clamp(20px,1.9vw,34px)] leading-[1.15]">
        {first}
        <br />
        {rest.join(" ")}
      </span>
    </button>
  );
}
