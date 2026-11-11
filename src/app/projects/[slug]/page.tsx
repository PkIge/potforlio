import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { GlobeIcon } from "@/components/ui/Icons";
import { NeonHeading } from "@/components/ui/NeonHeading";
import { Panel } from "@/components/ui/Panel";
import { TopNav } from "@/components/ui/TopNav";
import { profile } from "@/data/profile";
import { getProject, projectIndex, projects, type ProjectImage } from "@/data/projects";


export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const cover = project.images[0];
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | ${profile.name}`,
      description: project.tagline,
      images: cover ? [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }] : undefined,
    },
  };
}

const isTall = (img: ProjectImage) => img.height / img.width > 1.9;
const isPhone = (img: ProjectImage) => img.width <= 480;

function Gallery({ images }: { images: ProjectImage[] }) {
  if (images.length === 0) return null;
  const phones = images.filter(isPhone);
  const wide = images.filter((i) => !isPhone(i));
  return (
    <section aria-labelledby="gallery-heading" className="flex flex-col gap-[clamp(20px,3vh,36px)]">
      <h2 id="gallery-heading" className="neon-solid text-center text-[clamp(24px,2.6vw,44px)] leading-none">
        Product screens
      </h2>
      {wide.length > 0 && (
        <ul className="grid grid-cols-1 gap-[clamp(16px,2vw,32px)] md:grid-cols-2">
          {wide.map((img, i) => (
            <li key={img.src} className={`neon-tile overflow-hidden ${isTall(img) ? "md:col-span-2" : wide.length % 2 === 1 && i === 0 ? "md:col-span-2" : ""}`}>
              <figure className="flex flex-col">
                <div className={isTall(img) ? "max-h-[78vh] overflow-y-auto scrollbar-neon" : ""}>
                  <Image
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t-2 border-lavender-300/60 bg-space-900/70 px-4 py-2 font-condensed text-[clamp(12px,1vw,16px)] uppercase tracking-wide text-lavender-200">
                  <span>{img.alt}</span>
                  {isTall(img) && <span className="text-lavender-300/70">Scroll inside to explore</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
      {phones.length > 0 && (
        <ul className="flex flex-wrap items-start justify-center gap-[clamp(16px,2vw,32px)]">
          {phones.map((img) => (
            <li key={img.src} className="neon-tile w-[min(100%,300px)] overflow-hidden rounded-[22px]">
              <figure className="flex flex-col">
                <div className={isTall(img) ? "max-h-[70vh] overflow-y-auto scrollbar-neon" : ""}>
                  <Image src={img.src} width={img.width} height={img.height} alt={img.alt} sizes="300px" className="h-auto w-full" />
                </div>
                <figcaption className="border-t-2 border-lavender-300/60 bg-space-900/70 px-4 py-2 text-center font-condensed text-[clamp(12px,1vw,16px)] uppercase tracking-wide text-lavender-200">
                  {img.alt}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

async function ProjectBody({ params }: { params: PageProps<"/projects/[slug]">["params"] }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projectIndex(slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
      <main className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-[clamp(28px,5vh,64px)] px-[clamp(16px,4vw,48px)] pt-[clamp(110px,16vh,180px)] pb-[clamp(60px,10vh,120px)]">
        <header className="flex flex-col items-center gap-[clamp(18px,3vh,36px)] text-center">
          <NeonHeading as="h1" text={project.name} />
          <p className="neon-solid text-[clamp(18px,2.2vw,38px)] leading-tight text-lavender-100">
            Project {i + 1} : {project.tagline}
          </p>
          <dl className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-condensed text-[clamp(14px,1.2vw,20px)] uppercase tracking-wide text-lavender-200">
            {project.role && (
              <div className="flex gap-2">
                <dt className="text-lavender-300/70">Role</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            {project.org && (
              <div className="flex gap-2">
                <dt className="text-lavender-300/70">For</dt>
                <dd>{project.org}</dd>
              </div>
            )}
            {project.url && (
              <div className="flex gap-2">
                <dt className="sr-only">Website</dt>
                <dd>
                  <a href={project.url} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 border-b border-lavender-300/70 transition hover:border-white hover:text-white">
                    <GlobeIcon size={20} />
                    {project.urlLabel ?? project.url}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </header>

        <Panel className="px-[clamp(20px,3.5vw,64px)] py-[clamp(22px,3.5vh,44px)]">
          <h2 className="neon-solid mb-[clamp(12px,2vh,22px)] text-center text-[clamp(22px,2.4vw,40px)] leading-none">Overview</h2>
          <div className="mx-auto flex max-w-[840px] flex-col gap-4 text-center font-body text-[clamp(15px,1.25vw,22px)] leading-[1.45] text-white">
            {project.description.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Panel>

        <section aria-labelledby="scope-heading" className="flex flex-col gap-[clamp(14px,2vh,24px)]">
          <h2 id="scope-heading" className="neon-solid text-center text-[clamp(22px,2.4vw,40px)] leading-none">
            Scope
          </h2>
          <ul className="flex flex-wrap justify-center gap-[clamp(8px,1vw,16px)]">
            {project.categories.map((c) => (
              <li key={c} className="neon-tile px-[clamp(12px,1.4vw,22px)] py-[clamp(8px,1vh,12px)] font-body text-[clamp(12px,1.05vw,18px)] text-white">
                {c}
              </li>
            ))}
          </ul>
        </section>

        {project.gdd && (
          <section aria-labelledby="gdd-heading" className="flex flex-col gap-[clamp(14px,2vh,24px)]">
            <h2 id="gdd-heading" className="neon-solid text-center text-[clamp(22px,2.4vw,40px)] leading-none">
              Game Design Document outline
            </h2>
            <p className="mx-auto max-w-[760px] text-center font-body text-[clamp(14px,1.15vw,20px)] leading-[1.45] text-lavender-100">
              The full document is available on request. Each section below is written up and shared in private
              conversation.
            </p>
            <ol className="grid grid-cols-1 gap-[clamp(10px,1.33vw,22px)] md:grid-cols-2">
              {project.gdd.map((section, n) => (
                <li key={section.title} className="neon-tile flex flex-col gap-2 px-[clamp(16px,2vw,28px)] py-[clamp(14px,2vh,22px)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-condensed text-[clamp(16px,1.4vw,24px)] uppercase tracking-wide text-white">
                      {String(n + 1).padStart(2, "0")} · {section.title}
                    </span>
                    <span className="shrink-0 border border-lavender-300/70 px-2 py-0.5 font-condensed text-[clamp(10px,0.85vw,13px)] uppercase tracking-widest text-lavender-200">
                      On request
                    </span>
                  </div>
                  <p className="font-body text-[clamp(13px,1.05vw,18px)] leading-[1.45] text-lavender-100/90">{section.summary}</p>
                </li>
              ))}
            </ol>
            <div className="flex justify-center pt-2">
              <Link
                href="/#contact"
                className="nav-label inline-flex items-center gap-2 border-2 border-lavender-300/80 px-6 py-3 text-[clamp(16px,1.4vw,24px)] leading-none transition hover:border-white hover:text-white"
              >
                Request a private walkthrough →
              </Link>
            </div>
          </section>
        )}

        <Gallery images={project.images} />

        <nav aria-label="More projects" className="mt-[clamp(10px,2vh,24px)] flex flex-wrap items-center justify-between gap-4 border-t-2 border-lavender-300/40 pt-[clamp(18px,3vh,32px)] font-condensed text-[clamp(16px,1.5vw,26px)] uppercase tracking-wide text-lavender-200">
          <Link href={`/projects/${prev.slug}`} className="transition hover:text-white">
            ← {prev.shortName}
          </Link>
          <Link href="/#projects" className="transition hover:text-white">
            All projects
          </Link>
          <Link href={`/projects/${next.slug}`} className="transition hover:text-white">
            {next.shortName} →
          </Link>
        </nav>
      </main>
  );
}

export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-20 bg-space-900 bg-cover bg-[position:center_bottom] bg-no-repeat" style={{ backgroundImage: "url(/bg/projects.webp)" }} />
      <div aria-hidden className="fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,4,15,0.55)_0%,rgba(7,4,15,0.78)_40%,rgba(7,4,15,0.9)_100%)]" />
      <TopNav back={{ href: "/#projects", label: "All projects" }} />
      <Suspense
        fallback={
          <main className="flex min-h-dvh items-center justify-center">
            <p className="neon-solid text-[clamp(22px,2.4vw,40px)]">Loading…</p>
          </main>
        }
      >
        <ProjectBody params={params} />
      </Suspense>
    </>
  );
}
