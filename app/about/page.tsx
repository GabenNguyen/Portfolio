"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
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
  "Billingual communicator (Vietnamese and English)",
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
      "Signiﬁcantly improved students’ English skills, with many achieving 9 out of 10 in high school exams.",
      "Supported students to attain top results in the Cambridge FLYERS English proﬁciency test, with many scoring 4 out 5 across all sections.",
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

const AboutPage = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-hero > *", {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
        });

        gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 36,
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

        gsap.to(".about-blob-1", {
          yPercent: -24,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".about-blob-2", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".about-hero > *, .stagger-item", { opacity: 1, y: 0 });
      });
    },
    { scope: root }
  );

  return (
    <main ref={root} className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans">

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="about-blob-1 absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="about-blob-2 absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="about-blob-1 absolute top-[40%] left-[60%] h-[30%] w-[30%] rounded-full bg-sky-600/8 blur-[100px]" />
        <div className="dot-grid absolute inset-0 mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        {[
          "top-[12%] left-[8%]",
          "top-[28%] right-[12%]",
          "top-[55%] left-[15%]",
          "top-[70%] right-[18%]",
          "top-[40%] left-[45%]",
          "top-[85%] left-[30%]",
        ].map((pos, i) => (
          <div
            key={i}
            className={`orb absolute h-20 w-20 rounded-full bg-blue-500/10 blur-xl dark:bg-indigo-500/10 ${pos}`}
          />
        ))}
      </div>

      <section className="relative z-10 mx-auto w-full max-w-4xl px-4 py-28">
        <div className="about-hero mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase">Get to know me</span>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">About Me</h1>
        </div>

        {/* Profile card */}
        <div className="stagger-item rounded-4xl border border-black/10 bg-black/3 p-8 shadow-xl backdrop-blur-xl transition-colors hover:border-blue-500/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/40">
          <h2 className="mb-4 text-3xl font-bold">Professional Profile</h2>
          <p className="text-lg font-light leading-relaxed">
            Motivated Information Technology student, currently pursuing the Bachelor of Information Technology at the
            Adelaide University, with hands-on experience building production-grade web applications using Next.js/React,
            TypeScript, Tailwind CSS and AI APIs. Rapidly adapts to new technologies and frameworks, consistently
            delivering scalable, high-performance solutions in fast-paced development environments. Delivers user-focused
            solutions that improve outcomes, combining strong communication and problem-solving to translate complex
            requirements into clear, effective results across both technical and client-facing environments.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="stagger-item mt-12 text-left">
          <h2 className="mb-6 text-2xl font-bold">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-full border border-black/10 bg-black/3 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/5 md:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="stagger-item mt-12 text-left">
          <h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>

          <SkillGroup title="Frontend" items={frontEndSkills} tint="border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-300" />
          <SkillGroup title="Backend" items={backEndSkills} tint="border-indigo-500/40 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300" />
          <SkillGroup title="Operating System" items={operatingSystems} tint="border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-300" />
          <SkillGroup title="Other tools" items={otherTools} tint="border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300" />
        </div>

        {/* Education */}
        <div className="stagger-item mt-12 rounded-4xl border border-black/10 bg-black/3 p-8 shadow-xl backdrop-blur-xl transition-colors hover:border-blue-500/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/40">
          <div className="absolute left-0 top-0 hidden h-px w-full bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
          <h2 className="mb-6 text-2xl font-bold">Education</h2>
          <ul className="space-y-6 text-lg font-light text-muted-foreground">
            <li className="relative pl-6 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-blue-500 before:shadow-[0_0_10px_rgba(59,130,246,0.8)]">
              <span className="text-xl font-semibold text-foreground">Adelaide University</span> –
              Bachelor of Information Technology
              <br />
              <span className="mt-2 block" />
              GPA: <span className="ml-1 font-bold bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">6.18/7.0</span> |
              Expected Graduation: 2027
              <br />
              <span className="mt-2 block" />
              <span className="mt-1 inline-block rounded-md border border-black/10 bg-black/3 px-3 py-1 font-medium shadow-sm dark:border-white/10 dark:bg-white/5">
                Recipient of{" "}
                <span className="font-bold text-blue-500 dark:text-blue-400">
                  UniSA International Merit Scholarship
                </span>{" "}
                (15% deduction in tuition fee)
              </span>
            </li>
            <div className="my-4 h-px w-full bg-black/10 dark:bg-white/10" />
            <li className="relative pl-6 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-indigo-500 before:shadow-[0_0_10px_rgba(99,102,241,0.8)]">
              <span className="text-xl font-semibold text-foreground">International University</span> –
              Bachelor of Information Technology, Computer Engineering
              <br />
              <span className="mt-2 block" />
              <span className="text-gray-500 dark:text-gray-400">Cohort: 2022 - 2024</span>
              <br />
              <span className="mt-1 block" />
              GPA: <span className="ml-1 font-bold bg-linear-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">2.97 / 4.0</span>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="stagger-item relative mt-12 overflow-hidden rounded-4xl border border-black/10 bg-black/3 p-8 text-left shadow-xl backdrop-blur-xl transition-colors hover:border-blue-500/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/40">
          <div className="pointer-events-none absolute -right-10 -top-10 h-50 w-50 rounded-full bg-blue-500/10 blur-[80px]" />
          <h2 className="relative z-10 mb-6 text-2xl font-bold">Experience</h2>
          <ul className="relative z-10 space-y-8">
            {experiences.map((exp) => (
              <li key={exp.title}>
                <p className="text-xl font-bold">
                  {exp.title} <span className="text-blue-500 dark:text-blue-400">@ {exp.company}</span>
                </p>
                <div className="mt-2 inline-flex items-center justify-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold tracking-wide dark:border-white/10 dark:bg-white/10">
                  {exp.duration}
                </div>
                <p className="mt-5 text-lg font-semibold">Key responsibilities</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base font-light marker:text-blue-500">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p className="mt-5 text-lg font-semibold">Achievements</p>
                <ul className="mt-3 space-y-3 text-base font-light">
                  {exp.achievement.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg leading-5 text-indigo-500">★</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="stagger-item mt-12">
          <h2 className="mb-6 text-2xl font-bold">Projects Preview</h2>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-black/3 p-6 backdrop-blur-xl shadow-lg transition-all hover:border-blue-500/50 hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/50 dark:hover:bg-white/10 md:flex-row md:items-center md:justify-between"
                >
                  <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-500/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <div>
                    <p className="text-xl font-bold text-foreground transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400">{project.title}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold tracking-wide dark:border-white/5 dark:bg-black/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors group-hover:text-indigo-500 dark:text-blue-400 md:mt-0">
                    <span>View Project</span>
                    <ArrowUpRight className="text-lg leading-none transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hobbies */}
        <div className="stagger-item mt-12 text-left">
          <h2 className="mb-6 text-2xl font-bold">Hobbies &amp; Interests</h2>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="cursor-pointer rounded-full border border-black/10 bg-black/3 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-indigo-500/50 hover:bg-indigo-500/10 dark:border-white/10 dark:bg-white/5 md:text-base"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

function SkillGroup({ title, items, tint }: { title: string; items: string[]; tint: string }) {
  return (
    <div className="mb-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-500">{title}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span
            key={skill}
            className={`cursor-default rounded-xl border px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:scale-[1.03] dark:bg-white/5 md:text-base ${tint}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
