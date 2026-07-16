"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  start?: string;
  once?: boolean;
};

/**
 * Scroll-triggered entrance wrapper. Fades + slides its content into view.
 * Automatically honors prefers-reduced-motion by snapping to the final state.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 32,
  x = 0,
  delay = 0,
  duration = 0.8,
  start = "top 85%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(el, {
          opacity: 0,
          y,
          x,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { opacity: 1, y: 0, x: 0 });
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
