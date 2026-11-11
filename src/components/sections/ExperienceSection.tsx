"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { useCarousel, useDeck } from "@/components/deck/DeckProvider";
import { Scene } from "@/components/deck/Scene";
import { SlideLayout } from "@/components/deck/SlideLayout";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ClickToOpen } from "@/components/ui/ClickToOpen";
import { NeonHeading, headingAssets } from "@/components/ui/NeonHeading";
import { Panel } from "@/components/ui/Panel";
import { PanelClose } from "@/components/ui/PanelClose";
import { experience } from "@/data/experience";
import { getProject } from "@/data/projects";

const ID = "experience";

export function ExperienceSection() {
  const { isOpen, toggle } = useDeck();
  const open = isOpen(ID);
  const [index, setIndex] = useState(0);
  const count = experience.length;
  const role = experience[index];

  const step = useCallback(
    (dir: "prev" | "next") => setIndex((i) => (dir === "next" ? (i + 1) % count : (i - 1 + count) % count)),
    [count],
  );
  useCarousel(ID, step);

  const related = (role.projects ?? []).map(getProject).filter((p) => p !== undefined);

  return (
    <Scene id={ID} bg="experience" label="Work experience">
      <SlideLayout
        bodyOpen={open}
        titleTop="md:top-[31.5%]"
        heading={<NeonHeading image={headingAssets.experience} />}
        arrows={
          <>
            <ArrowButton direction="left" label="Previous role" onClick={() => step("prev")} />
            <ArrowButton direction="right" label="Next role" onClick={() => step("next")} />
          </>
        }
        title={
          <h3 key={role.id} className="neon-solid animate-slide-in text-[clamp(26px,3.3vw,58px)] leading-none">
            {role.title}
          </h3>
        }
        subtitle={
          <p key={`${role.id}-sub`} className="neon-solid animate-slide-in text-[clamp(16px,2vw,36px)] leading-none text-lavender-100">
            {role.org}
            <span className="mx-3 text-lavender-300/70">·</span>
            {role.period ?? role.products}
            <span className="ml-3 text-[0.7em] text-lavender-300/70">
              {index + 1} / {count}
            </span>
          </p>
        }
        body={
          open ? (
            <Panel
              key={role.id}
              id="experience-panel"
              role="region"
              className="animate-panel-in w-[min(100%,830px)] px-[clamp(20px,3vw,64px)] py-[clamp(18px,2.6vh,34px)] md:w-[48vw] md:max-h-[34vh] md:overflow-y-auto md:scrollbar-neon"
            >
              <PanelClose onClick={() => toggle(ID)} />
              <div className="flex flex-col gap-[clamp(10px,1.4vh,18px)] font-body text-white">
                <p className="text-center text-[clamp(13px,1.15vw,21px)] leading-[1.4]">{role.summary}</p>
                <ul className="mx-auto flex max-w-[640px] list-disc flex-col gap-1.5 pl-5 text-left text-[clamp(12px,1vw,18px)] leading-[1.4] marker:text-lavender-300">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {related.length > 0 && (
                  <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-condensed text-[clamp(14px,1.15vw,20px)] uppercase tracking-wide text-lavender-200">
                    {related.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="border-b border-lavender-300/70 transition hover:border-white hover:text-white"
                      >
                        {p.shortName} →
                      </Link>
                    ))}
                  </p>
                )}
              </div>
            </Panel>
          ) : (
            <ClickToOpen onClick={() => toggle(ID)} controls="experience-panel" />
          )
        }
      />
    </Scene>
  );
}
