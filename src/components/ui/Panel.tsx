import type { ReactNode } from "react";

/**
 * Translucent framed panel with the offset L-shaped corner brackets from the
 * Figma "open" states.
 */
export function Panel({
  children,
  className = "",
  brackets = true,
  id,
  role,
}: {
  children: ReactNode;
  className?: string;
  brackets?: boolean;
  id?: string;
  role?: string;
}) {
  return (
    <div id={id} role={role} className={`neon-panel ${className}`}>
      {brackets && (
        <>
          <span aria-hidden className="bracket-tl -top-[26px] -left-[26px] max-md:-top-[14px] max-md:-left-[14px] max-md:h-8 max-md:w-10" />
          <span aria-hidden className="bracket-br -right-[26px] -bottom-[26px] max-md:-right-[14px] max-md:-bottom-[14px] max-md:h-8 max-md:w-10" />
        </>
      )}
      {children}
    </div>
  );
}
