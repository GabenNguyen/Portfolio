"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/* Section themes only run in "system" mode; an explicit light/dark choice still wins. */
export default function ScrollTheme({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { theme } = useTheme();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => gsap.set(progressRef.current, { scaleX: self.progress }),
          onRefresh: (self) => gsap.set(progressRef.current, { scaleX: self.progress }),
        });
      });

      if (theme === "system") {
        const apply = (mode: string | undefined) => {
          el.classList.toggle("dark", mode === "dark");
          el.classList.toggle("light", mode !== "dark");
        };

        gsap.utils.toArray<HTMLElement>("[data-scroll-theme]", el).forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => apply(section.dataset.scrollTheme),
            onEnterBack: () => apply(section.dataset.scrollTheme),
          });
        });
      } else {
        el.classList.remove("dark", "light");
      }

      return () => mm.revert();
    },
    { dependencies: [pathname, theme], scope: ref }
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
