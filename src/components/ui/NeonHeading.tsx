import Image from "next/image";

type HeadingImage = { src: string; width: number; height: number; alt: string };

/** Extracted Figma heading assets (glowing display text). */
export const headingAssets = {
  hello: { src: "/headings/hello-fellow-galaxy-member.png", width: 902, height: 54, alt: "Hello fellow galaxy member" },
  skills: { src: "/headings/my-skills.png", width: 280, height: 54, alt: "My skills" },
  experience: { src: "/headings/my-work-experience.png", width: 619, height: 54, alt: "My work experience" },
  contact: { src: "/headings/contact-me.png", width: 351, height: 54, alt: "Contact me" },
} satisfies Record<string, HeadingImage>;

function Bar({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`neon-bar block ${className}`} />;
}

/**
 * Section heading with glowing lines above and below.
 * `image` renders a Figma asset; `text` renders the same style with the display font.
 * The "hero" variant staggers the bars with the "A MESSAGE FROM EARTH" labels.
 */
export function NeonHeading({
  image,
  text,
  variant = "symmetric",
  label,
  as: Tag = "h2",
  className = "",
  priority = false,
}: {
  image?: HeadingImage;
  text?: string;
  variant?: "symmetric" | "hero";
  label?: string;
  as?: "h1" | "h2";
  className?: string;
  priority?: boolean;
}) {
  const content = image ? (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      alt=""
      priority={priority}
      className="h-[clamp(22px,3.125vw,54px)] w-auto max-w-full select-none"
      draggable={false}
    />
  ) : (
    <span className="neon-outline block text-[clamp(26px,3.3vw,56px)] leading-none">{text}</span>
  );

  const accessibleName = image?.alt ?? text ?? "";

  if (variant === "hero") {
    return (
      <div className={`inline-flex w-full max-w-[52vw] flex-col items-stretch gap-[clamp(10px,1.4vw,24px)] max-md:max-w-[92vw] ${className}`}>
        <div className="flex items-center gap-[clamp(8px,1.1vw,18px)]">
          <Bar className="flex-1" />
          <span className="neon-label shrink-0 text-[clamp(10px,1.05vw,18px)] leading-none">{label}</span>
        </div>
        <Tag className="flex justify-center">
          <span className="sr-only">{accessibleName}</span>
          {content}
        </Tag>
        <div className="flex items-center gap-[clamp(8px,1.1vw,18px)]">
          <span className="neon-label shrink-0 text-[clamp(10px,1.05vw,18px)] leading-none">{label}</span>
          <Bar className="flex-1" />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex max-w-[92vw] flex-col items-stretch gap-[clamp(10px,1.4vw,24px)] ${className}`}>
      <Bar />
      <Tag className="flex justify-center px-[2px]">
        <span className="sr-only">{accessibleName}</span>
        {content}
      </Tag>
      <Bar />
    </div>
  );
}
