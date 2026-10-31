"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const frontEndSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];

const backEndSkills = ["Prisma", "PostgreSQL", "MSSQL", "Python", "Neon (database)"];

const operatingSystems = ["Windows", "Linux (Ubuntu)", "MacOS"];

const otherTools = ["Figma", "Adobe Premiere Pro", "CapCut", "Git", "GitHub"];

const softSkills = [
  "Communication",
  "Hard-working",
  "Problem Solving",
  "Fast learner",
  "Team player",
  "Resilience",
  "Adaptive",
  "Excellent Time Management",
  "Bilingual communicator (Vietnamese and English)",
];

const experiences = [
  {
    title: "English Tutor",
    company: "Self-employed",
    duration: "Aug 2022 - Aug 2023",
    description: [
      "Structured individualised lesson plans that raised average test scores by 20%.",
      "Consistently drove outstanding academic outcomes, enabling students to achieve top exam scores and measurable proficiency improvements.",
      "Helped students achieve strong exam results and measurable proficiency improvements.",
      "Adapted teaching methods for 10+ diverse learners; resolved learning challenges quickly while maintaining 100% student satisfaction.",
      "Managed 10+ tutoring sessions weekly through disciplined organisation.",
    ],
    achievement: [
      "Significantly improved students' English skills, with many achieving 9 out of 10 in high school exams.",
      "Supported students to attain top results in the Cambridge FLYERS English proficiency test, with many scoring 4 out 5 across all sections.",
    ],
  },
];

const projects = [
  {
    title: "AI Quiz Generator",
    slug: "/project",
    tech: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "TypeScript",
      "OpenAI GPT-OSS 20B/120B",
      "Framer Motion",
    ],
  },
  {
    title: "Personal Portfolio",
    slug: "/project",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Gemini 2.5 Flash", "LFM2.5 1.2B", "Framer Motion"],
  },
  {
    title: "AI Resume Analyser",
    slug: "/project",
    tech: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "NVIDIA Nemotron Nano 12B V2",
      "Framer Motion",
      "Shadcn",
    ],
  },
];

const hobbies = [
  "Gaming",
  "Exploring gaming accessories",
  "Reading Tech Blogs",
  "Traveling",
  "Badminton",
  "Video Editing",
];

const skillGroups = [
  { title: "Frontend", items: frontEndSkills },
  { title: "Backend", items: backEndSkills },
  { title: "Operating Systems", items: operatingSystems },
  { title: "Other tools", items: otherTools },
];

const AboutPage = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-hero > *", {
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
        gsap.set(".about-hero > *, .stagger-item", { opacity: 1, y: 0 });
      });
    },
    { scope: root }
  );

  return (
    <main id="main" ref={root} className="min-h-screen text-foreground">
      <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Header */}
        <header className="about-hero">
          <h1 className="text-5xl font-bold md:text-6xl">About me</h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Motivated Information Technology student, currently pursuing the Bachelor of Information
            Technology at the Adelaide University, with hands-on experience building production-grade
            web applications using Next.js/React, TypeScript, Tailwind CSS and AI APIs. Rapidly adapts
            to new technologies and frameworks, consistently delivering scalable, high-performance
            solutions in fast-paced development environments. Delivers user-focused solutions that
            improve outcomes, combining strong communication and problem-solving to translate complex
            requirements into clear, effective results across both technical and client-facing
            environments.
          </p>
        </header>

        {/* Soft skills */}
        <section className="stagger-item mt-16">
          <h2 className="text-2xl font-bold">Soft skills</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Technical skills */}
        <section className="stagger-item mt-16">
          <h2 className="text-2xl font-bold">Technical skills</h2>
          <dl className="mt-5 border-t border-foreground/15">
            {skillGroups.map(({ title, items }) => (
              <div key={title} className="grid gap-2 border-b border-foreground/15 py-5 sm:grid-cols-12 sm:gap-6">
                <dt className="text-sm font-semibold sm:col-span-4">{title}</dt>
                <dd className="flex flex-wrap gap-2 sm:col-span-8">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education */}
        <section className="stagger-item mt-16">
          <h2 className="text-2xl font-bold">Education</h2>
          <ol className="mt-5 border-t border-foreground/15">
            <li className="border-b border-foreground/15 py-6">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <span className="text-xl font-bold">Adelaide University</span>
                <span className="text-sm text-muted-foreground">Current student</span>
              </div>
              <p className="mt-1 text-muted-foreground">Bachelor of Information Technology</p>
              <p className="mt-2 text-sm text-muted-foreground">
                GPA <span className="font-semibold text-foreground">6.18/7.0</span> · Expected graduation 2027
              </p>
              <p className="mt-3 inline-block rounded-sm border border-border px-3 py-1.5 text-sm">
                Recipient of the{" "}
                <span className="font-semibold text-primary">UniSA International Merit Scholarship</span>{" "}
                (15% deduction in tuition fee)
              </p>
            </li>
            <li className="border-b border-foreground/15 py-6">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <span className="text-xl font-bold">International University</span>
                <span className="text-sm text-muted-foreground">2022 - 2024</span>
              </div>
              <p className="mt-1 text-muted-foreground">
                Bachelor of Information Technology, Computer Engineering
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                GPA <span className="font-semibold text-foreground">2.97/4.0</span>
              </p>
            </li>
          </ol>
        </section>

        {/* Experience */}
        <section className="stagger-item mt-16">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-5 border-t border-foreground/15">
            {experiences.map((exp) => (
              <div key={exp.title} className="py-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <p className="text-xl font-bold">
                    {exp.title} <span className="text-primary">@ {exp.company}</span>
                  </p>
                  <span className="text-sm text-muted-foreground">{exp.duration}</span>
                </div>

                <h3 className="mt-5 font-semibold">Key responsibilities</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <h3 className="mt-5 font-semibold">Achievements</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                  {exp.achievement.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects preview */}
        <section className="stagger-item mt-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          <ul className="mt-5 border-t border-foreground/15">
            {projects.map((project) => (
              <li key={project.title} className="border-b border-foreground/15">
                <Link
                  href={project.slug}
                  className="group flex flex-col gap-3 py-6 transition-colors hover:bg-secondary/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-lg font-bold underline-offset-4 group-hover:text-primary group-hover:underline">
                      {project.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Hobbies */}
        <section className="stagger-item mt-16">
          <h2 className="text-2xl font-bold">Hobbies &amp; interests</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {hobby}
              </span>
            ))}
          </div>
        </section>

      </article>
    </main>
  );
};

export default AboutPage;
