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

type Direction = "prev" | "next";
type CarouselHandler = (dir: Direction) => void;

type DeckContextValue = {
  activeId: string | null;
  sectionIds: string[];
  isOpen: (id: string) => boolean;
  toggle: (id: string) => void;
  open: (id: string) => void;
  close: (id: string) => void;
  registerSection: (id: string, el: HTMLElement | null) => void;
  registerCarousel: (id: string, handler: CarouselHandler | null) => void;
  scrollToSection: (id: string) => void;
  scrollBy: (delta: 1 | -1) => void;
};

const DeckContext = createContext<DeckContextValue | null>(null);

const isTypingTarget = (el: EventTarget | null) => {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
};

export function DeckProvider({
  sectionIds,
  initiallyOpen = [],
  children,
}: {
  sectionIds: string[];
  initiallyOpen?: string[];
  children: ReactNode;
}) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(initiallyOpen));
  const sections = useRef(new Map<string, HTMLElement>());
  const carousels = useRef(new Map<string, CarouselHandler>());
  const observer = useRef<IntersectionObserver | null>(null);

  // Track which section is in view.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const ratios = new Map<string, number>();
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.sectionId;
          if (!id) continue;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best && bestRatio > 0) setActiveId(best);
      },
      { threshold: [0.25, 0.5, 0.75] },
    );
    for (const el of sections.current.values()) observer.current.observe(el);
    return () => observer.current?.disconnect();
  }, []);

  const registerSection = useCallback((id: string, el: HTMLElement | null) => {
    const prev = sections.current.get(id);
    if (prev && observer.current) observer.current.unobserve(prev);
    if (el) {
      el.dataset.sectionId = id;
      sections.current.set(id, el);
      observer.current?.observe(el);
    } else {
      sections.current.delete(id);
    }
  }, []);

  const registerCarousel = useCallback((id: string, handler: CarouselHandler | null) => {
    if (handler) carousels.current.set(id, handler);
    else carousels.current.delete(id);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    sections.current.get(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollBy = useCallback(
    (delta: 1 | -1) => {
      const index = activeId ? sectionIds.indexOf(activeId) : 0;
      const target = sectionIds[Math.min(sectionIds.length - 1, Math.max(0, index + delta))];
      if (target) scrollToSection(target);
    },
    [activeId, sectionIds, scrollToSection],
  );

  const open = useCallback((id: string) => setOpenIds((s) => new Set(s).add(id)), []);
  const close = useCallback(
    (id: string) =>
      setOpenIds((s) => {
        const next = new Set(s);
        next.delete(id);
        return next;
      }),
    [],
  );
  const toggle = useCallback(
    (id: string) =>
      setOpenIds((s) => {
        const next = new Set(s);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      }),
    [],
  );
  const isOpen = useCallback((id: string) => openIds.has(id), [openIds]);

  // Keyboard: Enter toggles the active panel, arrows move carousels / sections.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!activeId) return;
      switch (e.key) {
        case "Enter":
          if (e.target instanceof HTMLElement && (e.target.tagName === "A" || e.target.tagName === "BUTTON")) return;
          e.preventDefault();
          toggle(activeId);
          break;
        case "Escape":
          close(activeId);
          break;
        case "ArrowLeft":
          carousels.current.get(activeId)?.("prev");
          break;
        case "ArrowRight":
          carousels.current.get(activeId)?.("next");
          break;
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          scrollBy(1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          scrollBy(-1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, toggle, close, scrollBy]);

  const value = useMemo<DeckContextValue>(
    () => ({
      activeId,
      sectionIds,
      isOpen,
      toggle,
      open,
      close,
      registerSection,
      registerCarousel,
      scrollToSection,
      scrollBy,
    }),
    [activeId, sectionIds, isOpen, toggle, open, close, registerSection, registerCarousel, scrollToSection, scrollBy],
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}

export function useDeck() {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used inside <DeckProvider>");
  return ctx;
}

/** Registers a left/right handler for the section while it is mounted. */
export function useCarousel(id: string, handler: CarouselHandler) {
  const { registerCarousel } = useDeck();
  const ref = useRef(handler);
  useEffect(() => {
    ref.current = handler;
  });
  useEffect(() => {
    registerCarousel(id, (dir) => ref.current(dir));
    return () => registerCarousel(id, null);
  }, [id, registerCarousel]);
}
