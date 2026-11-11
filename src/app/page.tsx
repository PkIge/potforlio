import { DeckProvider } from "@/components/deck/DeckProvider";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { GameHud } from "@/components/game/GameHud";
import { GameProvider } from "@/components/game/GameProvider";
import { CornerHints } from "@/components/ui/CornerHints";
import { SectionNav } from "@/components/ui/SectionNav";
import { TopNav } from "@/components/ui/TopNav";

const SECTIONS = [
  "hero",
  "projects",
  "skills",
  "experience",
  "credentials",
  "contact",
];

export default function HomePage() {
  return (
    <DeckProvider sectionIds={SECTIONS}>
      <GameProvider>
        <TopNav />
        <main className="h-dvh snap-y snap-proximity overflow-y-auto scroll-smooth scrollbar-neon md:snap-mandatory">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <CredentialsSection />
          <ContactSection />
        </main>
        <SectionNav />
        <CornerHints />
        <GameHud />
      </GameProvider>
    </DeckProvider>
  );
}
