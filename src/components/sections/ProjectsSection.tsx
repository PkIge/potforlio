"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { useCarousel, useDeck } from "@/components/deck/DeckProvider";
import { Scene } from "@/components/deck/Scene";
import { SlideLayout } from "@/components/deck/SlideLayout";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ClickToOpen } from "@/components/ui/ClickToOpen";
import { GlobeIcon, LinkIcon } from "@/components/ui/Icons";
import { NeonHeading } from "@/components/ui/NeonHeading";
import { Panel } from "@/components/ui/Panel";
import { PanelClose } from "@/components/ui/PanelClose";
import { projects } from "@/data/projects";

const ID = "projects";

export function ProjectsSection() {
  const { isOpen, toggle } = useDeck();
  const open = isOpen(ID);
  const [index, setIndex] = useState(0);
  const count = projects.length;
  const project = projects[index];

  const step = useCallback(
    (dir: "prev" | "next") => setIndex((i) => (dir === "next" ? (i + 1) % count : (i - 1 + count) % count)),
    [count],
  );
  useCarousel(ID, step);

  return (
    <Scene id={ID} bg="projects" label="Projects">
      <SlideLayout
        bodyOpen={open}
        heading={<NeonHeading text="My projects" />}
        arrows={
          <>
            <ArrowButton direction="left" label="Previous project" onClick={() => step("prev")} />
            <ArrowButton direction="right" label="Next project" onClick={() => step("next")} />
          </>
        }
        title={
          <h3 key={project.slug} className="neon-solid animate-slide-in text-[clamp(28px,3.4vw,60px)] leading-none">
            Project {index + 1} : {project.shortName}
            {project.status === "in-development" && (
              <span className="ml-3 align-middle border border-lavender-300/80 px-2 py-0.5 text-[0.4em] tracking-widest text-lavender-200">
                Reserved slot
              </span>
            )}
          </h3>
        }
        subtitle={
          <p key={`${project.slug}-tag`} className="nav-label animate-slide-in text-[clamp(14px,1.5vw,26px)] leading-tight text-lavender-200/90">
            {project.tagline}
            <span className="ml-3 text-lavender-300/70">
              {index + 1} / {count}
            </span>
          </p>
        }
        body={
          open ? (
            <Panel
              key={project.slug}
              id="projects-panel"
              role="region"
              className="animate-panel-in w-[min(100%,830px)] px-[clamp(20px,3vw,64px)] py-[clamp(18px,2.6vh,34px)] md:w-[48vw] md:max-h-[34vh] md:overflow-y-auto md:scrollbar-neon"
            >
              <PanelClose onClick={() => toggle(ID)} />
              <div className="flex flex-col items-center gap-[clamp(10px,1.4vh,18px)] text-center">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-lavender-100">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 font-condensed text-[clamp(14px,1.2vw,20px)] uppercase tracking-wide transition hover:text-white"
                      aria-label={`Open ${project.name} website`}
                    >
                      <GlobeIcon size={28} />
                      {project.urlLabel ?? "Visit"}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-condensed text-[clamp(14px,1.2vw,20px)] uppercase tracking-wide text-lavender-200/70">
                      <LinkIcon size={26} />
                      Private
                    </span>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="nav-label inline-flex items-center gap-2 border-b-2 border-lavender-300/80 pb-0.5 text-[clamp(16px,1.35vw,24px)] leading-none transition hover:border-white hover:text-white"
                  >
                    {project.status === "in-development" ? "View GDD outline →" : "Open case study →"}
                  </Link>
                </div>
                <div className="flex flex-col gap-3 font-body text-[clamp(13px,1.12vw,20px)] leading-[1.4] text-white">
                  {project.description.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-condensed text-[clamp(13px,1.05vw,18px)] uppercase tracking-wide text-lavender-200/90">
                  {project.role && <span>{project.role}</span>}
                  {project.org && <span>{project.org}</span>}
                </p>
              </div>
            </Panel>
          ) : (
            <ClickToOpen onClick={() => toggle(ID)} controls="projects-panel" />
          )
        }
      />
    </Scene>
  );
}
