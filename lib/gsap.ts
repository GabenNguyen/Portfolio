"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  // Keep triggers accurate once async assets (fonts, images) settle.
  window.addEventListener("load", () => ScrollTrigger.refresh());

  // Respect users who prefer reduced motion: jump animations to their end state.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  gsap.config({ nullTargetWarn: false });
  if (reduced.matches) {
    gsap.globalTimeline.timeScale(100);
  }
}

export { gsap, ScrollTrigger, useGSAP };
