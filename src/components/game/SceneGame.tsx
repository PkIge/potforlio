"use client";

import { useEffect, useState, type RefObject } from "react";
import layers from "@/data/game-layers.json";
import type { SceneBackground } from "@/components/deck/Scene";
import { HILLS, useGame } from "./GameProvider";

const FRAME_W = 1728;
const FRAME_H = 1117;

type Layer = {
  sprite: { x: number; y: number; w: number; h: number };
  globe: { cx: number; cy: number; r: number; size: number };
};

const LAYERS = layers as Record<SceneBackground, Layer>;

/** Mirrors the CSS `background-size: cover; background-position: center bottom` maths. */
function useCoverMetrics(hostRef: RefObject<HTMLElement | null>) {
  const [m, setM] = useState({ s: 1, ox: 0, oy: 0 });
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      const s = Math.max(width / FRAME_W, height / FRAME_H);
      setM({ s, ox: (width - FRAME_W * s) / 2, oy: height - FRAME_H * s });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [hostRef]);
  return m;
}

function Hills({ r }: { r: number }) {
  const size = r * 2;
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${size} ${size}`}
      className="absolute inset-0 h-full w-full overflow-visible"
      style={{ filter: "drop-shadow(0 0 6px rgba(56,200,255,0.45))" }}
    >
      {HILLS.map((h) => {
        const y0 = 5; // sits just inside the rim
        return (
          <g key={h.id} transform={`rotate(${h.angle} ${r} ${r})`}>
            <path
              d={`M ${r - h.width} ${y0 + 10} Q ${r - h.width * 0.55} ${y0 - h.height * 0.35} ${r} ${y0 - h.height} Q ${r + h.width * 0.55} ${y0 - h.height * 0.35} ${r + h.width} ${y0 + 10} Z`}
              fill="#8aa05a"
              stroke="#5c7638"
              strokeWidth={2.5}
              strokeLinejoin="round"
            />
            <path
              d={`M ${r - h.width * 0.45} ${y0 - h.height * 0.25} Q ${r} ${y0 - h.height * 1.05} ${r + h.width * 0.45} ${y0 - h.height * 0.25}`}
              fill="none"
              stroke="#b9cf7d"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * The spinning globe and the astronaut for one scene, placed exactly where
 * they sit in the Figma frame regardless of viewport size.
 */
export function SceneGame({ scene, hostRef }: { scene: SceneBackground; hostRef: RefObject<HTMLElement | null> }) {
  const { s, ox, oy } = useCoverMetrics(hostRef);
  const game = useGame();
  const { sprite, globe } = LAYERS[scene];
  const live = LAYERS.projects.sprite;

  const gx = ox + (globe.cx - globe.r) * s;
  const gy = oy + (globe.cy - globe.r) * s;
  const gd = globe.r * 2 * s;

  // Both sprites share the idle sprite's foot line (bottom-centre anchor).
  const footX = ox + (sprite.x + sprite.w / 2) * s;
  const footY = oy + (sprite.y + sprite.h) * s;
  const boxW = Math.max(sprite.w, live.w) * s;
  const boxH = Math.max(sprite.h, live.h) * s;

  return (
    <div className="pointer-events-none absolute inset-0 z-0" style={{ "--s": s } as React.CSSProperties}>
      <div
        aria-hidden
        className="absolute rounded-full will-change-transform"
        style={{
          left: gx,
          top: gy,
          width: gd,
          height: gd,
          backgroundImage: `url(/game/globe-${scene}.webp)`,
          backgroundSize: "100% 100%",
          transform: "rotate(var(--globe-angle))",
        }}
      >
        <Hills r={globe.r} />
      </div>

      <button
        type="button"
        aria-label="Make the astronaut jump"
        onClick={() => game?.jump()}
        className="astro pointer-events-auto absolute z-20 cursor-pointer outline-none"
        style={{ left: footX - boxW / 2, top: footY - boxH, width: boxW, height: boxH }}
      >
        <span className="astro-motion absolute inset-0 block">
          <span className="astro-face absolute inset-0 block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/game/astronaut-${scene}.png`}
              alt=""
              draggable={false}
              className="astro-idle absolute bottom-0 left-1/2 max-w-none select-none"
              style={{ width: sprite.w * s, height: sprite.h * s, transform: "translateX(-50%)" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/game/astronaut-projects.png"
              alt=""
              draggable={false}
              className="astro-live absolute bottom-0 left-1/2 max-w-none select-none"
              style={{ width: live.w * s, height: live.h * s, transform: "translateX(-50%)" }}
            />
          </span>
        </span>
      </button>
    </div>
  );
}
