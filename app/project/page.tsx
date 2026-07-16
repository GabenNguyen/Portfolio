"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "IntelliCheck",
    subtitle: "An AI-powered quiz creation platform",
    url: "https://github.com/GabenNguyen/IntelliCheck",
    stack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Clerk",
      "OpenAI GPT-OSS 20B/120B",
      "Shadcn",
    ],
    accent: "from-blue-500/40 via-indigo-500/40 to-sky-500/40",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Modern portfolio with motion and clean UI",
    url: "https://github.com/GabenNguyen/Portfolio.git",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LFM2.5 1.2B",
      "Gemini 2.5 Flash",
      "Resend",
      "Shadcn",
      "Toastify",
      "Framer Motion",
    ],
    accent: "from-blue-500/40 via-indigo-500/40 to-sky-500/40",
  },
  {
    title: "AI Resume Analyser",
    subtitle: "An AI-powered Resume Analyser with modern UI",
    url: "https://github.com/GabenNguyen/AI-Resume-Analyser",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn",
      "Gemini 2.5 Flash",
    ],
    accent: "from-blue-500/40 via-indigo-500/40 to-sky-500/40",
  },
  {
    title: "TaskMaster (In Development)",
    subtitle: "An task management app",
    url: "https://github.com/GabenNguyen/TaskMaster.git",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn",
      "FastAPI",
      "PostgreSQL",
      "Clerk",
    ],
    accent: "from-blue-500/40 via-indigo-500/40 to-sky-500/40",
  },
];

export default function ProjectPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".project-hero > *", {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
        });

        gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        gsap.to(".orb", {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          duration: "random(8, 14)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: { each: 0.4, from: "random" },
        });

        gsap.to(".project-blob-1", {
          yPercent: -24,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".project-blob-2", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".project-hero > *, .stagger-item", { opacity: 1, y: 0 });
      });
    },
    { scope: root }
  );

  return (
    <main ref={root} className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans">

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="project-blob-1 absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="project-blob-2 absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="project-blob-1 absolute top-[40%] left-[60%] h-[30%] w-[30%] rounded-full bg-sky-600/8 blur-[100px]" />
        <div className="dot-grid absolute inset-0 mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        {[
          "top-[15%] left-[10%]",
          "top-[35%] right-[14%]",
          "top-[60%] left-[18%]",
          "top-[78%] right-[20%]",
        ].map((pos, i) => (
          <div key={i} className={`orb absolute h-20 w-20 rounded-full bg-blue-500/10 blur-xl dark:bg-indigo-500/10 ${pos}`} />
        ))}
      </div>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28">
        <div className="project-hero mb-20 text-center">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase">Selected work</span>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">My Projects</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg font-light text-muted-foreground md:text-xl">
            Some of my selected work where design, performance, and innovation
            come together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="stagger-item group relative">
              <div
                className={`absolute -inset-px rounded-4xl bg-linear-to-r ${project.accent} opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100`}
              />

              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-full flex-col overflow-hidden rounded-4xl border border-black/10 bg-black/3 p-8 shadow-xl backdrop-blur-2xl transition-all hover:-translate-y-1.5 hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-tr from-transparent via-blue-500/5 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-bold text-foreground transition-colors">{project.title}</h2>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/5 transition-colors group-hover:border-blue-400/50 group-hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/5">
                    <ArrowUpRight className="h-5 w-5 text-gray-400 transition-all group-hover:scale-110 group-hover:rotate-12 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  </div>
                </div>

                <p className="relative z-10 mt-4 grow text-base font-light text-muted-foreground">{project.subtitle}</p>

                <div className="relative z-10 mt-8 flex flex-wrap gap-2 text-xs">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 bg-black/40 px-3 py-1.5 font-medium tracking-wide text-foreground shadow-inner dark:border-white/5 dark:bg-black/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-bold text-blue-500 transition-colors group-hover:text-indigo-500 dark:text-blue-400">
                  <span>View project</span>
                  <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
