"use client";

import { useCallback, useRef, useState, type PointerEvent } from "react";

const THRESHOLD = 56; // px of horizontal travel that counts as a swipe

/**
 * Horizontal swipe / drag detection that works for fingers (touch) and the
 * mouse. Spread the returned props on the element that should listen.
 * Vertical scrolling is left alone (`touch-action: pan-y`).
 */
export function useSwipe(onSwipe: (dir: "prev" | "next") => void) {
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  const onPointerDown = useCallback((e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
  }, []);

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLElement>) => {
      const s = start.current;
      if (!s || s.id !== e.pointerId) return;
      if (!dragging && Math.abs(e.clientX - s.x) > 8 && Math.abs(e.clientX - s.x) > Math.abs(e.clientY - s.y)) {
        setDragging(true);
      }
    },
    [dragging],
  );

  const finish = useCallback(
    (e: PointerEvent<HTMLElement>) => {
      const s = start.current;
      start.current = null;
      setDragging(false);
      if (!s || s.id !== e.pointerId) return;
      const dx = e.clientX - s.x;
      const dy = e.clientY - s.y;
      if (Math.abs(dx) >= THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.2) {
        onSwipe(dx < 0 ? "next" : "prev");
      }
    },
    [onSwipe],
  );

  const onPointerCancel = useCallback(() => {
    start.current = null;
    setDragging(false);
  }, []);

  return {
    dragging,
    props: {
      onPointerDown,
      onPointerMove,
      onPointerUp: finish,
      onPointerCancel,
      style: { touchAction: "pan-y" as const },
      className: dragging ? "select-none cursor-grabbing" : undefined,
    },
  };
}
