"use client";

export function PanelClose({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close panel"
      className="nav-label absolute top-2 right-3 z-10 cursor-pointer text-[clamp(14px,1.1vw,20px)] leading-none opacity-80 transition hover:opacity-100 focus-visible:opacity-100"
    >
      Close ✕
    </button>
  );
}
