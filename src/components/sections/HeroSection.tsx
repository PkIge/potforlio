"use client";

import { useDeck } from "@/components/deck/DeckProvider";
import { Scene } from "@/components/deck/Scene";
import { SlideLayout } from "@/components/deck/SlideLayout";
import { ClickToOpen } from "@/components/ui/ClickToOpen";
import { NeonHeading } from "@/components/ui/NeonHeading";
import { Panel } from "@/components/ui/Panel";
import { PanelClose } from "@/components/ui/PanelClose";
import { profile } from "@/data/profile";

const ID = "hero";

export function HeroSection() {
  const { isOpen, toggle } = useDeck();
  const open = isOpen(ID);

  return (
    <Scene id={ID} bg="hero" label="Introduction">
      <SlideLayout
        rail
        bodyOpen={open}
        heading={<NeonHeading as="h1" variant="hero" text={profile.greeting} label={profile.tagline} />}
        title={
          <p className="neon-outline text-[clamp(32px,3.8vw,66px)] leading-none">
            I&rsquo;m {profile.shortName}
          </p>
        }
        subtitle={
          <p className="neon-solid text-[clamp(20px,2.4vw,42px)] leading-tight text-white">{profile.heroSubtitle}</p>
        }
        body={
          open ? (
            <Panel
              id="hero-panel"
              role="region"
              className="animate-panel-in w-[min(100%,830px)] px-[clamp(20px,3vw,64px)] py-[clamp(22px,3.2vh,40px)] md:w-[48vw] md:max-h-[34vh] md:overflow-y-auto md:scrollbar-neon"
            >
              <PanelClose onClick={() => toggle(ID)} />
              <div className="flex flex-col gap-[clamp(10px,1.4vh,18px)] text-center font-body text-[clamp(14px,1.3vw,23px)] leading-[1.35] text-white">
                {profile.bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Panel>
          ) : (
            <ClickToOpen onClick={() => toggle(ID)} controls="hero-panel" />
          )
        }
      />
    </Scene>
  );
}
