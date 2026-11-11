"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Hidden astronaut mini-game.
 *
 * A / D walk (spins the globe under the astronaut), W jumps a little,
 * S dives back down faster. Hills sit on the far side of the globe; clear
 * them in the air to score, bump into one on the ground and the run resets.
 *
 * Per-frame values are written to CSS custom properties on <html> so the
 * globe and astronaut layers in every scene animate without React renders.
 */

export const HILLS = [
  { id: "a", angle: 118, width: 44, height: 30 },
  { id: "b", angle: 196, width: 56, height: 36 },
  { id: "c", angle: 268, width: 40, height: 26 },
] as const;

const WALK_SPEED = 26; // degrees per second
const JUMP_VELOCITY = -400; // image px per second (negative = up)
const GRAVITY_UP = 1000;
const GRAVITY_FLOAT = 650; // slow landing
const GRAVITY_DIVE = 2600; // S held
const HIT_ARC = 6.5; // degrees either side of the hill crest
const CLEAR_HEIGHT = 20; // px above ground needed to clear a hill

type GameState = {
  active: boolean;
  hudVisible: boolean;
  score: number;
  best: number;
  bumped: boolean;
  jump: () => void;
};

const GameContext = createContext<GameState | null>(null);

const isTypingTarget = (el: EventTarget | null) =>
  el instanceof HTMLElement && (["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName) || el.isContentEditable);

const normalize = (deg: number) => {
  let d = deg % 360;
  if (d >= 180) d -= 360;
  if (d < -180) d += 360;
  return d;
};

export function GameProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  const [hudVisible, setHudVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [bumped, setBumped] = useState(false);

  const angle = useRef(0);
  const y = useRef(0);
  const vy = useRef(0);
  const facing = useRef(1);
  const keys = useRef(new Set<string>());
  const hills = useRef(HILLS.map(() => ({ hit: false, passed: false })));
  const scoreRef = useRef(0);
  const bestRef = useRef(0);
  const lastInput = useRef(0);
  const hudTimer = useRef<number | null>(null);
  const touchRef = useRef<() => void>(() => {});

  const touch = useCallback(() => {
    lastInput.current = performance.now();
    setActive(true);
    setHudVisible(true);
    if (hudTimer.current) window.clearTimeout(hudTimer.current);
    hudTimer.current = window.setTimeout(() => setHudVisible(false), 4500);
  }, []);
  useEffect(() => {
    touchRef.current = touch;
  }, [touch]);

  const jump = useCallback(() => {
    if (y.current >= 0 && vy.current === 0) {
      vy.current = JUMP_VELOCITY;
      y.current = -0.01;
    }
    touch();
  }, [touch]);

  // Keyboard
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (!"wasd".includes(k) || k.length !== 1) return;
      e.preventDefault();
      if (k === "w") {
        if (!keys.current.has("w")) jump();
      } else {
        keys.current.add(k);
        touch();
      }
      keys.current.add(k);
    };
    const up = (e: KeyboardEvent) => keys.current.delete(e.key.toLowerCase());
    const blur = () => keys.current.clear();
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, [jump, touch]);

  // Simulation loop
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let last = performance.now();
    let bumpTimer: number | null = null;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const left = keys.current.has("a");
      const right = keys.current.has("d");
      const dir = left === right ? 0 : right ? 1 : -1;
      if (dir !== 0) {
        angle.current -= dir * WALK_SPEED * dt;
        facing.current = dir;
        if (now - lastInput.current > 2500) touchRef.current();
      }

      const airborne = y.current < 0 || vy.current !== 0;
      if (airborne) {
        const g = keys.current.has("s") ? GRAVITY_DIVE : vy.current < 0 ? GRAVITY_UP : GRAVITY_FLOAT;
        vy.current += g * dt;
        y.current += vy.current * dt;
        if (y.current >= 0) {
          y.current = 0;
          vy.current = 0;
        }
      }

      // Hills
      HILLS.forEach((hill, i) => {
        const rel = normalize(hill.angle + angle.current);
        const state = hills.current[i];
        if (Math.abs(rel) < HIT_ARC) {
          if (y.current > -CLEAR_HEIGHT) {
            // landing on the far slope of a hill you already cleared is fine
            if (!state.hit && !state.passed) {
              state.hit = true;
              scoreRef.current = 0;
              setScore(0);
              setBumped(true);
              if (bumpTimer) window.clearTimeout(bumpTimer);
              bumpTimer = window.setTimeout(() => setBumped(false), 600);
              // recoil away from the hill and drop the walk keys
              angle.current += (rel >= 0 ? 1 : -1) * 9;
              keys.current.delete("a");
              keys.current.delete("d");
            }
          } else if (!state.passed && !state.hit) {
            state.passed = true;
            scoreRef.current += 1;
            setScore(scoreRef.current);
            if (scoreRef.current > bestRef.current) {
              bestRef.current = scoreRef.current;
              setBest(bestRef.current);
            }
          }
        } else if (Math.abs(rel) > HIT_ARC + 4) {
          state.hit = false;
          state.passed = false;
        }
      });

      root.style.setProperty("--globe-angle", `${angle.current.toFixed(3)}deg`);
      root.style.setProperty("--astro-y", y.current.toFixed(2));
      root.style.setProperty("--astro-face", String(facing.current));
      const moving = dir !== 0 || airborne;
      root.style.setProperty("--astro-active", moving ? "1" : "0");
      root.dataset.astroWalking = dir !== 0 && !airborne ? "1" : "0";
      root.dataset.astroAir = airborne ? "1" : "0";

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (bumpTimer) window.clearTimeout(bumpTimer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.astroBump = bumped ? "1" : "0";
  }, [bumped]);

  const value = useMemo<GameState>(
    () => ({ active, hudVisible, score, best, bumped, jump }),
    [active, hudVisible, score, best, bumped, jump],
  );
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  return useContext(GameContext);
}
