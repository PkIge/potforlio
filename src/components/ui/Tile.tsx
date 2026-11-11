import type { ReactNode } from "react";

/** Outlined translucent tile from the skills grid. */
export function Tile({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <li
      className={`neon-tile flex items-center justify-center px-3 text-center font-body text-white hover:-translate-y-0.5 hover:bg-[rgba(201,179,255,0.18)] ${className}`}
    >
      {children}
    </li>
  );
}
