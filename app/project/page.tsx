"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "AI Quiz Generator",
    subtitle: "AI-powered quiz creation platform",
    url: "https://github.com/GabenNguyen/IntelliCheck",
    stack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Clerk",
      "Shadcn",
      "Gemini API",
    ],
    accent: "from-blue-500 to-purple-500",
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A modern portfolio built with NextJS, Tailwind CSS, TypeScript and Framer Motion",
    url: "https://github.com/GabenNguyen/Portfolio.git",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Shadcn"],
    accent: "from-pink-500 to-orange-500",
  },
];

export default function ProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Animated background blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-linear-to-br from-blue-400 to-purple-400 opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-linear-to-br from-pink-400 to-orange-400 opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-linear-to-br from-green-400 to-emerald-400 opacity-25 blur-3xl"
      />

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-6xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A selection of projects where I combine engineering, design, and
            real-world problem solving.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Accent glow */}
              <div
                className={`absolute -inset-px rounded-2xl bg-linear-to-r ${project.accent} opacity-0 blur-lg transition group-hover:opacity-60`}
              />

              <Link
                href={project.url}
                className="relative block h-full rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 transition-transform group-hover:-translate-y-1"
              >
                <h2 className="text-2xl font-medium mb-2">{project.title}</h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition">
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
