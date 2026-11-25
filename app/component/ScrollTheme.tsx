"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/* Scroll progress only. The theme stays under the user's control. */
export default function ScrollTheme({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => gsap.set(progressRef.current, { scaleX: self.progress }),
          onRefresh: (self) => gsap.set(progressRef.current, { scaleX: self.progress }),
        });
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], scope: ref }
  );

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground transition-colors duration-300 ease-out">
      <div
        ref={progressRef}
        className="fixed top-0 left-0 z-[60] h-0.5 w-full origin-left scale-x-0 bg-primary"
        aria-hidden
      />
      {children}
    </div>
  );
}
