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
    accent: "from-indigo-500/40 via-purple-500/40 to-pink-500/40",
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
];

export default function ProjectPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-950 text-zinc-900 dark:text-zinc-100 overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 mx-auto">
            Some of my selected work where design, performance, and innovation
            come together.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Glow border */}
              <div
                className={`absolute -inset-px rounded-3xl bg-linear-to-r ${project.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-80`}
              />

              <Link
                href={project.url}
                className="relative block h-full rounded-3xl border border-zinc-300 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </div>

                {/* Subtitle */}
                <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
                  {project.subtitle}
                </p>

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition">
                  View project →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
