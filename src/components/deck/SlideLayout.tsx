import type { ReactNode } from "react";
import { SocialRail } from "@/components/ui/SocialRail";

/**
 * Positions a slide's parts where they sit in the Figma frame (desktop) and
 * stacks them in a column on small screens.
 *
 * Reference frame 1728 x 1117: heading block at 11.5% from the top, title at
 * ~33%, open panel at 60%, "click to open" at 73%.
 */
export function SlideLayout({
  heading,
  title,
  subtitle,
  body,
  bodyOpen = false,
  rail = false,
  arrows,
  titleTop = "md:top-[33%]",
  bodyTop,
}: {
  heading: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  body: ReactNode;
  bodyOpen?: boolean;
  rail?: boolean;
  arrows?: ReactNode;
  titleTop?: string;
  /** Override the desktop top offset of the body slot, e.g. "md:top-[47.5%]". */
  bodyTop?: string;
}) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full flex-col items-center px-4 pt-[clamp(84px,12vh,140px)] pb-[clamp(28px,6vh,80px)] md:block md:px-0 md:pt-0 md:pb-0">
      <div className="flex w-full justify-center md:absolute md:inset-x-0 md:top-[11.5%]">{heading}</div>

      {(title || subtitle) && (
        <div
          className={`mt-[clamp(20px,5vh,56px)] flex w-full flex-col items-center gap-[clamp(8px,1.6vh,22px)] px-2 text-center md:absolute md:inset-x-0 md:mt-0 ${titleTop}`}
        >
          {title}
          {subtitle}
        </div>
      )}

      {rail && <SocialRail />}
      {arrows}

      <div
        className={`mt-auto flex w-full justify-center pt-[clamp(20px,4vh,40px)] md:absolute md:inset-x-0 md:mt-0 md:pt-0 ${
          bodyTop ?? (bodyOpen ? "md:top-[60%]" : "md:top-[73%]")
        }`}
      >
        {body}
      </div>

      {rail && <SocialRail orientation="horizontal" className="mt-7 md:hidden" />}
    </div>
  );
}
