"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useI18n } from "@/app/component/LanguageProvider";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const frontEndSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];
const backEndSkills = ["Prisma", "PostgreSQL", "MSSQL", "Python", "Neon (database)"];
const operatingSystems = ["Windows", "Linux (Ubuntu)", "MacOS"];
const otherTools = ["Figma", "Adobe Premiere Pro", "CapCut", "Git", "GitHub"];

const softSkillKeys = [
  "about.soft.1", "about.soft.2", "about.soft.3", "about.soft.4", "about.soft.5",
  "about.soft.6", "about.soft.7", "about.soft.8", "about.soft.9",
] as const;

const experiences = [
  {
    titleKey: "about.tutor" as const,
    companyKey: "about.selfEmployed" as const,
    duration: "Aug 2022 - Aug 2023",
    descriptionKeys: ["about.exp.1", "about.exp.2", "about.exp.3", "about.exp.4", "about.exp.5"] as const,
    achievementKeys: ["about.ach.1", "about.ach.2"] as const,
  },
];

const projects = [
  {
    title: "AI Quiz Generator",
    slug: "/project",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "TypeScript", "OpenAI GPT-OSS 20B/120B", "Framer Motion"],
  },
  {
    title: "Personal Portfolio",
    slug: "/project",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Gemini 2.5 Flash", "LFM2.5 1.2B", "Framer Motion"],
  },
  {
    title: "AI Resume Analyser",
    slug: "/project",
    tech: ["Next.js", "TypeScript", "Gemini API", "NVIDIA Nemotron Nano 12B V2", "Framer Motion", "Shadcn"],
  },
];

const hobbyKeys = [
  "about.hobby.1", "about.hobby.2", "about.hobby.3",
  "about.hobby.4", "about.hobby.5", "about.hobby.6",
] as const;

const AboutPage = () => {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);

  const skillGroups = [
    { title: t("cat.frontend"), items: frontEndSkills },
    { title: t("cat.backend"), items: backEndSkills },
    { title: t("about.operatingSystems"), items: operatingSystems },
    { title: t("cat.tools"), items: otherTools },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const sections = gsap.utils.toArray<HTMLElement>("article > section");

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-hero > *", {
          opacity: 0,
          y: 16,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.08,
        });

        gsap.set(sections, { opacity: 0, y: 18 });
        ScrollTrigger.batch(sections, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out", overwrite: true }),
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".about-hero > *", { opacity: 1, y: 0 });
        gsap.set(sections, { clearProps: "opacity,transform" });
      });
    },
    { scope: root }
  );

  return (
    <main id="main" ref={root} className="min-h-screen text-foreground">
      <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <header className="about-hero">
          <h1 className="text-[clamp(2.75rem,5vw_+_1rem,4.5rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
            {t("about.title")}
          </h1>
          <div className="mt-8 space-y-4 text-base leading-[1.7] text-muted-foreground md:text-lg">
            <p>{t("about.intro1")}</p>
            <p>{t("about.intro2")}</p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-foreground/15 py-5 sm:grid-cols-4">
            {[
              { label: t("about.program"), value: t("common.degree") },
              { label: t("about.university"), value: "Adelaide University" },
              { label: t("about.gpa"), value: "6.18/7.0" },
              { label: t("about.graduating"), value: "2027" },
            ].map(({ label, value }) => (
              <div key={label}>
                <dt className="mono-meta">{label}</dt>
                <dd className="mt-1 text-sm font-semibold tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("about.softSkills")}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {softSkillKeys.map((key) => (
              <span key={key} className="chip">{t(key)}</span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("about.technical")}</h2>
          <dl className="mt-5 border-t border-foreground/15">
            {skillGroups.map(({ title, items }) => (
              <div key={title} className="grid gap-2 border-b border-foreground/15 py-5 sm:grid-cols-12 sm:gap-6">
                <dt className="text-sm font-semibold sm:col-span-4">{title}</dt>
                <dd className="flex flex-wrap gap-2 sm:col-span-8">
                  {items.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("about.education")}</h2>
          <ol className="mt-5 border-t border-foreground/15">
            <li className="border-b border-foreground/15 py-6">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <span className="text-xl font-semibold">Adelaide University</span>
                <span className="text-sm text-muted-foreground">{t("about.currentStudent")}</span>
              </div>
              <p className="mt-1 text-muted-foreground">{t("common.degree")}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("about.gpa")} <span className="font-semibold text-foreground">6.18/7.0</span> · {t("about.expected")} 2027
              </p>
              <p className="mt-3 inline-block rounded-sm border border-border px-3 py-1.5 text-sm">
                {t("about.scholarship")}
              </p>
            </li>
            <li className="border-b border-foreground/15 py-6">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <span className="text-xl font-semibold">International University</span>
                <span className="text-sm text-muted-foreground">2022 - 2024</span>
              </div>
              <p className="mt-1 text-muted-foreground">Bachelor of Information Technology, Computer Engineering</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("about.gpa")} <span className="font-semibold text-foreground">2.97/4.0</span>
              </p>
            </li>
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("about.experience")}</h2>
          <div className="mt-5 border-t border-foreground/15">
            {experiences.map((exp) => (
              <div key={exp.titleKey} className="py-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <p className="text-xl font-semibold">
                    {t(exp.titleKey)} <span className="text-primary">@ {t(exp.companyKey)}</span>
                  </p>
                  <span className="text-sm text-muted-foreground">{exp.duration}</span>
                </div>

                <h3 className="mt-5 font-semibold">{t("about.keyResponsibilities")}</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                  {exp.descriptionKeys.map((key) => <li key={key}>{t(key)}</li>)}
                </ul>

                <h3 className="mt-5 font-semibold">{t("about.achievements")}</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                  {exp.achievementKeys.map((key) => <li key={key}>{t(key)}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("about.projects")}</h2>
          <ul className="mt-5 border-t border-foreground/15">
            {projects.map((project) => (
              <li key={project.title} className="border-b border-foreground/15">
                <Link
                  href={project.slug}
                  className="group flex flex-col gap-3 py-6 transition-colors hover:bg-secondary/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold underline-offset-4 group-hover:text-primary group-hover:underline">
                      {project.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-[color,transform] duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("about.hobbies")}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {hobbyKeys.map((key) => (
              <span key={key} className="chip">{t(key)}</span>
            ))}
          </div>
        </section>

      </article>
    </main>
  );
};

export default AboutPage;
