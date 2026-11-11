"use client";

import { Scene } from "@/components/deck/Scene";
import { SlideLayout } from "@/components/deck/SlideLayout";
import { NeonHeading, headingAssets } from "@/components/ui/NeonHeading";
import { Tile } from "@/components/ui/Tile";
import { skills } from "@/data/skills";

const ID = "skills";

export function SkillsSection() {
  return (
    <Scene id={ID} bg="skills" label="Skills">
      <SlideLayout
        rail
        bodyOpen
        bodyTop="md:top-[47.5%]"
        heading={<NeonHeading image={headingAssets.skills} />}
        title={<h3 className="neon-solid text-[clamp(22px,2.7vw,48px)] leading-none">Here is a list of some of my skills</h3>}
        body={
          <ul
            aria-label="Skills"
            className="grid w-full max-w-[930px] grid-cols-2 gap-[clamp(10px,1.33vw,23px)] md:w-[54vw] md:grid-cols-4"
          >
            {skills.map((skill) => (
              <Tile key={skill} className="min-h-[clamp(52px,9.2vh,103px)] text-[clamp(12px,1.3vw,24px)] leading-tight">
                {skill}
              </Tile>
            ))}
          </ul>
        }
      />
    </Scene>
  );
}
