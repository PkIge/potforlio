import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number | undefined, props: IconProps) => ({
  width: size ?? 24,
  height: size ?? 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  ...props,
});

export function GitHubIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM8 19H5V9.5h3V19ZM6.5 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3h.1a3.1 3.1 0 0 1 2.8-1.5c3 0 3.5 2 3.5 4.5V19Z" />
    </svg>
  );
}

export function XIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M17.7 3h3l-6.6 7.6L22 21h-6.1l-4.8-6.2L5.6 21h-3l7.1-8.1L2 3h6.2l4.3 5.7L17.7 3Zm-1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
    </svg>
  );
}

export function InstagramIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.1 8.3c-.1-1.5-.4-2.8-1.5-3.9S17.2 3 15.7 2.9C14.2 2.8 9.8 2.8 8.3 2.9 6.8 3 5.5 3.3 4.4 4.4S3 6.8 2.9 8.3c-.1 1.5-.1 5.9 0 7.4.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 5.9.1 7.4 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-5.9 0-7.4Zm-2 9a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.4.4s-4.2.1-5.4-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.4s-.1-4.2.4-5.4a3 3 0 0 1 1.7-1.7c1.2-.5 4-.4 5.4-.4s4.2-.1 5.4.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.4s.1 4.3-.4 5.4Z" />
    </svg>
  );
}

export function BehanceIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M9.3 11.4c.9-.4 1.4-1.1 1.4-2.2 0-2.2-1.6-2.7-3.5-2.7H2v11h5.4c2 0 3.9-1 3.9-3.2 0-1.5-.7-2.6-2-2.9ZM4.4 8.4h2.3c.9 0 1.7.2 1.7 1.3 0 1-.6 1.3-1.5 1.3H4.4V8.4Zm2.6 7.3H4.4v-3.1h2.7c1.1 0 1.8.5 1.8 1.6s-.8 1.5-1.9 1.5ZM15.1 6.9h4.5v1.1h-4.5V6.9ZM22 13.4c0-2.6-1.5-4.6-4.3-4.6-2.7 0-4.5 2-4.5 4.6 0 2.7 1.7 4.6 4.5 4.6 2.1 0 3.5-1 4.1-2.9h-2c-.2.7-1 1.1-2 1.1-1.5 0-2.3-.8-2.3-2.2H22v-.6Zm-6.5-.8c.1-1.2.9-2 2.1-2 1.3 0 1.9.8 2 2h-4.1Z" />
    </svg>
  );
}

export function MailIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.6V17h16V7.6l-8 5.2-8-5.2ZM5.3 7l6.7 4.4L18.7 7H5.3Z" />
    </svg>
  );
}

export function LinkIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.5-1.5" />
    </svg>
  );
}

export function GlobeIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
    </svg>
  );
}

/** Enter / return key, as drawn beside "PRESS" in the Figma frame. */
export function EnterKeyIcon({ size, ...props }: IconProps) {
  return (
    <svg
      {...base(size, props)}
      viewBox="0 0 72 72"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M30 4h34a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H30" />
      <path d="M4 34h26v30a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V34Z" />
      <path d="M52 16v9H26" />
      <path d="M32 19l-6 6 6 6" />
    </svg>
  );
}

/** Circle with an up/down double arrow, as drawn beside "SCROLL". */
export function ScrollIcon({ size, ...props }: IconProps) {
  return (
    <svg
      {...base(size, props)}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="32" cy="32" r="28" />
      <path d="M32 16v32" />
      <path d="M24 24l8-8 8 8M24 40l8 8 8-8" />
    </svg>
  );
}

/** Carousel arrow: outlined triangle with a filled inner triangle. */
export function CarouselArrowIcon({ direction, size, ...props }: IconProps & { direction: "left" | "right" }) {
  const flip = direction === "right" ? "scale(-1,1) translate(-60,0)" : undefined;
  return (
    <svg
      {...base(size, props)}
      viewBox="0 0 60 110"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      <g transform={flip}>
        <path d="M56 4 4 55l52 51V4Z" />
        <path d="M44 32 20 55l24 23V32Z" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function ArrowLeftIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
