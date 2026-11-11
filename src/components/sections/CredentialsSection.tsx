"use client";

import { Scene } from "@/components/deck/Scene";
import { SlideLayout } from "@/components/deck/SlideLayout";
import { NeonHeading } from "@/components/ui/NeonHeading";
import { Tile } from "@/components/ui/Tile";
import { credentials } from "@/data/credentials";

const ID = "credentials";

export function CredentialsSection() {
  return (
    <Scene id={ID} bg="skills" label="Education and certifications">
      <SlideLayout
        rail
        bodyOpen
        bodyTop="md:top-[50%]"
        heading={<NeonHeading text="My credentials" />}
        title={<h3 className="neon-solid text-[clamp(22px,2.7vw,48px)] leading-none">Education & certifications</h3>}
        body={
          <ul
            aria-label="Credentials"
            className="grid w-full max-w-[930px] grid-cols-1 gap-[clamp(10px,1.33vw,23px)] sm:grid-cols-2 md:w-[54vw] md:grid-cols-3"
          >
            {credentials.map((c) => (
              <Tile
                key={c.title}
                className="relative min-h-[clamp(70px,13vh,146px)] flex-col gap-1 py-3 text-[clamp(12px,1.15vw,21px)] leading-tight"
              >
                {c.badge && (
                  <span className="absolute -top-2.5 right-3 bg-lavender-300 px-2 py-0.5 font-condensed text-[clamp(10px,0.85vw,14px)] uppercase tracking-wider text-ink-900 shadow-neon-soft">
                    {c.badge}
                  </span>
                )}
                <span className="font-medium">{c.title}</span>
                <span className="font-condensed text-[0.85em] uppercase tracking-wide text-lavender-200/90">
                  {c.issuer ?? (c.kind === "degree" ? "Degree" : "Certification")}
                </span>
              </Tile>
            ))}
          </ul>
        }
      />
    </Scene>
  );
}
