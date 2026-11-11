import Link from "next/link";
import { NeonHeading } from "@/components/ui/NeonHeading";
import { Panel } from "@/components/ui/Panel";
import { TopNav } from "@/components/ui/TopNav";

export default function NotFound() {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-20 bg-space-900 bg-cover bg-[position:center_bottom] bg-no-repeat" style={{ backgroundImage: "url(/bg/experience.webp)" }} />
      <div aria-hidden className="fixed inset-0 -z-10 bg-space-950/60" />
      <TopNav back={{ href: "/", label: "Home" }} />
      <main className="flex min-h-dvh flex-col items-center justify-center gap-10 px-4 text-center">
        <NeonHeading as="h1" text="Lost in space" />
        <Panel className="w-[min(100%,640px)] px-10 py-8">
          <p className="font-body text-[clamp(15px,1.3vw,22px)] text-white">That page drifted out of orbit.</p>
          <Link href="/" className="nav-label mt-4 inline-block border-b-2 border-lavender-300/80 text-[clamp(18px,1.6vw,28px)] transition hover:text-white">
            Return to Earth →
          </Link>
        </Panel>
      </main>
    </>
  );
}
