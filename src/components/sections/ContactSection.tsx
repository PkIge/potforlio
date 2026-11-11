"use client";

import { Scene } from "@/components/deck/Scene";
import { SlideLayout } from "@/components/deck/SlideLayout";
import { BehanceIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from "@/components/ui/Icons";
import { NeonHeading, headingAssets } from "@/components/ui/NeonHeading";
import { Panel } from "@/components/ui/Panel";
import { socialLinks } from "@/components/ui/SocialRail";
import { profile, type SocialLink } from "@/data/profile";

const ID = "contact";

const icons: Record<SocialLink["id"], typeof GitHubIcon> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
  behance: BehanceIcon,
  mail: MailIcon,
};

export function ContactSection() {
  const links = socialLinks();
  return (
    <Scene id={ID} bg="hero" label="Contact">
      <SlideLayout
        bodyOpen
        heading={<NeonHeading image={headingAssets.contact} />}
        title={<h3 className="neon-solid text-[clamp(22px,2.7vw,48px)] leading-none">Send a message back to Earth</h3>}
        subtitle={
          <p className="nav-label text-[clamp(14px,1.35vw,24px)] leading-tight text-lavender-200/90">
            Open to senior technical product, AI product and FinTech roles
          </p>
        }
        body={
          <Panel
            id="contact-panel"
            role="region"
            className="w-[min(100%,830px)] px-[clamp(20px,3vw,64px)] py-[clamp(22px,3.2vh,40px)] md:w-[48vw]"
          >
            <div className="flex flex-col items-center gap-[clamp(14px,2vh,24px)] text-center font-body text-white">
              <p className="text-[clamp(14px,1.3vw,23px)] leading-[1.35]">
                {profile.name} · {profile.role}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-[clamp(14px,1.6vw,28px)]">
                {links.map((link) => {
                  const Icon = icons[link.id];
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        target={link.id === "mail" ? undefined : "_blank"}
                        rel={link.id === "mail" ? undefined : "noreferrer noopener"}
                        className="group flex flex-col items-center gap-2"
                      >
                        <span className="social-tile group-hover:-translate-y-0.5 group-hover:bg-lavender-200 group-hover:shadow-[0_0_22px_rgba(201,179,255,0.9)]">
                          <Icon size={28} />
                        </span>
                        <span className="font-condensed text-[clamp(14px,1.15vw,20px)] uppercase tracking-wide text-lavender-200 group-hover:text-white">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <p className="font-condensed text-[clamp(12px,1vw,16px)] uppercase tracking-wider text-lavender-300/80">
                © {profile.copyrightYear} {profile.name}
              </p>
            </div>
          </Panel>
        }
      />
    </Scene>
  );
}
