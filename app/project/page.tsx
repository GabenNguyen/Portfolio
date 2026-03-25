/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";
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
      "Gemini API",
      "Shadcn",
    ],
    accent: "from-rose-500/40 via-orange-500/40 to-amber-500/40",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Modern portfolio with motion and clean UI",
    url: "https://github.com/GabenNguyen/Portfolio.git",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn",
      "Toastify",
    ],
    accent: "from-rose-500/40 via-orange-500/40 to-amber-500/40",
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
    ],
    accent: "from-rose-500/40 via-orange-500/40 to-amber-500/40",
  },
];

export default function ProjectPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Abstract Glowing Background matching Landing Page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-pink-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Orbs mimicking the original blobs */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          suppressHydrationWarning
          key={index}
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10 + index, delay: index }}
          className="absolute w-20 h-20 rounded-full bg-indigo-500/10 dark:bg-purple-500/10 blur-xl pointer-events-none z-0"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
        />
      ))}

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-28 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg pb-2">
            My Projects
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl text-muted-foreground/90 font-light mx-auto">
            Some of my selected work where design, performance, and innovation
            come together.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* Glow border */}
              <div
                className={`absolute -inset-px rounded-[2rem] bg-gradient-to-r ${project.accent} opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100`}
              />

              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl transition-all hover:bg-white/10 overflow-hidden"
              >
                {/* Overlay gradient slide */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <h2 className="text-2xl font-bold text-foreground drop-shadow-sm transition-colors">{project.title}</h2>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-purple-400/50 group-hover:bg-white/10 transition-colors flex-shrink-0">
                    <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-purple-300 transition-colors group-hover:rotate-12 group-hover:scale-110" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-muted-foreground/90 text-base font-light flex-grow relative z-10">
                  {project.subtitle}
                </p>

                {/* Tech stack */}
                <div className="mt-8 flex flex-wrap gap-2 text-xs relative z-10">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-black/40 border border-white/5 text-white font-medium tracking-wide shadow-inner"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 text-sm font-bold text-purple-400 group-hover:text-pink-400 transition-colors flex items-center gap-2 relative z-10">
                  <span>View project</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
