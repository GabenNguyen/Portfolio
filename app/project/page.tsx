"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/app/component/LanguageProvider";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "IntelliCheck",
    subtitleKey: "project.sub.1" as const,
    url: "https://github.com/GabenNguyen/IntelliCheck",
    statusKey: "common.shipped" as const,
    stack: [
      "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Framer Motion",
      "Clerk", "OpenAI GPT-OSS 20B/120B", "Shadcn",
    ],
  },
  {
    title: "Personal Portfolio",
    subtitleKey: "project.sub.2" as const,
    url: "https://github.com/GabenNguyen/Portfolio.git",
    statusKey: "common.shipped" as const,
    stack: [
      "Next.js", "TypeScript", "Tailwind CSS", "LFM2.5 1.2B",
      "Gemini 2.5 Flash", "Resend", "Shadcn", "Toastify", "Framer Motion",
    ],
  },
  {
    title: "AI Resume Analyser",
    subtitleKey: "project.sub.3" as const,
    url: "https://github.com/GabenNguyen/AI-Resume-Analyser",
    statusKey: "common.shipped" as const,
    stack: [
      "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
      "Shadcn", "Gemini 2.5 Flash",
    ],
  },
  {
    title: "TaskMaster",
    subtitleKey: "project.sub.4" as const,
    url: "https://github.com/GabenNguyen/TaskMaster.git",
    statusKey: "common.inDevelopment" as const,
    stack: [
      "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
      "Shadcn", "FastAPI", "PostgreSQL", "Clerk",
    ],
  },
];

export default function ProjectPage() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const cards = gsap.utils.toArray<HTMLElement>("ol > li");

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".project-hero > *", {
          opacity: 0,
          y: 16,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.08,
        });

        gsap.set(cards, { opacity: 0, y: 20 });
        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", overwrite: true }),
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".project-hero > *", { opacity: 1, y: 0 });
        gsap.set(cards, { clearProps: "opacity,transform" });
      });
    },
    { scope: root }
  );

  return (
    <main id="main" ref={root} className="min-h-screen text-foreground">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="project-hero max-w-[54ch]">
          <p className="mono-meta">{t("project.indexLabel")}</p>
          <h1 className="mt-3 text-[clamp(2.75rem,5vw_+_1rem,4.5rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
            {t("project.title")}
          </h1>
          <p className="mt-6 text-base leading-[1.7] text-muted-foreground md:text-lg">
            {t("project.lede")}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-y border-foreground/15 py-4">
          <span className="mono-meta">{t("project.count.shipped")}</span>
          <span className="mono-meta">{t("project.count.dev")}</span>
          <span className="mono-meta">{t("project.count.repos")}</span>
        </div>

        <ol className="mt-8 space-y-4">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <li key={project.title}>
                <article className={`panel p-6 lg:p-8 ${isFeatured ? "lg:grid lg:grid-cols-12 lg:gap-10" : ""}`}>
                  <div className={isFeatured ? "lg:col-span-8" : ""}>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="mono-meta tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                      <span className="mono-meta">{t(project.statusKey)}</span>
                    </div>

                    <h2 className={`mt-4 font-semibold tracking-tight ${isFeatured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 underline-offset-4 hover:text-primary hover:underline"
                      >
                        {project.title}
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-[color,transform] duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                      </a>
                    </h2>

                    <p className={`mt-3 max-w-[60ch] text-muted-foreground ${isFeatured ? "text-base leading-[1.7]" : "text-sm md:text-base"}`}>
                      {t(project.subtitleKey)}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {isFeatured && (
                    <div className="mt-6 flex flex-col justify-between gap-6 border-t border-foreground/15 pt-6 lg:col-span-4 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                      <div>
                        <p className="mono-meta">{t("common.repository")}</p>
                        <p className="mt-2 break-all font-mono text-xs text-muted-foreground">
                          github.com/GabenNguyen
                        </p>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start whitespace-nowrap text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {t("common.viewSource")}
                        <ExternalLink className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact">
            <Button size="lg" className="h-12 w-full cursor-pointer px-7 text-base font-semibold sm:w-auto">
              {t("common.getInTouch")}
            </Button>
          </Link>
          <Link href="/" className="px-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
            {t("common.backHome")}
          </Link>
        </div>
      </section>
    </main>
  );
}
