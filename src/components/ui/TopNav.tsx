import Link from "next/link";
import { ArrowLeftIcon } from "./Icons";

/** Fixed "CONTACT ME" link in the top-right corner, plus an optional back link. */
export function TopNav({ back }: { back?: { href: string; label: string } }) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-start justify-between px-[clamp(16px,3.5vw,60px)] pt-[clamp(14px,3.6vh,48px)]">
      <div className="pointer-events-auto">
        {back ? (
          <Link
            href={back.href}
            className="nav-label inline-flex items-center gap-2 text-[clamp(18px,2.2vw,36px)] leading-none transition hover:text-white focus-visible:text-white"
          >
            <ArrowLeftIcon size={26} />
            {back.label}
          </Link>
        ) : (
          <Link href="/" aria-label="Home" className="nav-label text-[clamp(18px,2.2vw,36px)] leading-none opacity-0 hover:opacity-100 focus-visible:opacity-100">
            PK
          </Link>
        )}
      </div>
      <Link
        href="/#contact"
        className="nav-label pointer-events-auto text-[clamp(20px,2.4vw,40px)] leading-none transition hover:text-white focus-visible:text-white"
      >
        Contact me
      </Link>
    </header>
  );
}
