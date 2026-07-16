"use client";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ref.current, { opacity: 1, y: 0 });
      });
    },
    { dependencies: [pathname], scope: ref }
  );

  return (
    <div ref={ref} key={pathname} className="min-h-screen w-full">
      {children}
    </div>
  );
};

export default PageTransition;
