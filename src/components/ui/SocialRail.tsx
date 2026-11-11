import { profile, type SocialLink } from "@/data/profile";
import { BehanceIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from "./Icons";

const icons: Record<SocialLink["id"], typeof GitHubIcon> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
  behance: BehanceIcon,
  mail: MailIcon,
};

export function socialLinks(): SocialLink[] {
  const links: SocialLink[] = [...profile.socials];
  if (profile.email) links.push({ id: "mail", label: "Email", href: `mailto:${profile.email}` });
  return links;
}

/**
 * Vertical rail of lavender social tiles on the left edge (desktop) or a
 * horizontal row (mobile).
 */
export function SocialRail({ orientation = "vertical", className = "" }: { orientation?: "vertical" | "horizontal"; className?: string }) {
  const links = socialLinks();
  const layout =
    orientation === "vertical"
      ? "absolute left-[clamp(16px,3.5vw,60px)] top-1/2 hidden -translate-y-1/2 flex-col gap-[clamp(20px,2.3vw,40px)] md:flex"
      : "flex flex-row items-center justify-center gap-5";
  return (
    <nav aria-label="Social links" className={`${layout} ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.id];
        return (
          <a
            key={link.id}
            href={link.href}
            target={link.id === "mail" ? undefined : "_blank"}
            rel={link.id === "mail" ? undefined : "noreferrer noopener"}
            aria-label={link.label}
            title={link.label}
            className="social-tile hover:-translate-y-0.5 hover:bg-lavender-200 hover:shadow-[0_0_22px_rgba(201,179,255,0.9)] focus-visible:bg-lavender-200 max-md:h-12 max-md:w-12"
          >
            <Icon size={28} />
          </a>
        );
      })}
    </nav>
  );
}
