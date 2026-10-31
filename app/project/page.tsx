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
  },
  {
    title: "TaskMaster",
    subtitle: "A task management app, in development",
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
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        });

        gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".project-hero > *, .stagger-item", { opacity: 1, y: 0 });
      });
    },
    { scope: root }
  );

  return (
    <main id="main" ref={root} className="min-h-screen text-foreground">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Header */}
        <div className="project-hero max-w-[54ch]">
          <h1 className="text-5xl font-bold md:text-6xl">Projects</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Selected work where design, performance, and AI come together. Each project links to its
            source on GitHub.
          </p>
        </div>

        {/* Index */}
        <ol className="mt-14 border-t border-foreground/15">
          {projects.map((project, index) => (
            <li key={project.title} className="stagger-item border-b border-foreground/15">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:px-2"
              >
                <div className="font-display text-sm font-bold text-muted-foreground tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-7">
                  <h2 className="flex items-center gap-3 text-2xl font-bold underline-offset-4 md:text-3xl">
                    <span className="group-hover:text-primary group-hover:underline">{project.title}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </h2>
                  <p className="mt-2 max-w-[52ch] text-muted-foreground">{project.subtitle}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>

      </section>
    </main>
  );
}
