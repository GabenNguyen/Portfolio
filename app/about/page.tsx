/* eslint-disable react-hooks/purity */
"use client";
import { motion } from "framer-motion";

const frontEndSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "Tailwind CSS",
];

const backEndSkills = ["Prisma", "PostgreSQL", "MSSQL", "Python", "Neon (database)"];

const operatingSystems = ["Windows", "Linux (Ubuntu)", "MacOS"];

const otherTools = ["Figma", "Adobe Premiere Pro", "CapCut", "Git", "GitHub"]

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
      "Shadcn"
    ],
  }

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
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Abstract Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-pink-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Orbs mimicking the original bg */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          suppressHydrationWarning
          key={i}
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10 + i, delay: i }}
          className="absolute w-20 h-20 rounded-full bg-indigo-500/10 dark:bg-purple-500/10 blur-xl pointer-events-none z-0"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-28 flex flex-col items-center gap-12 relative z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg text-center pb-2 tracking-tight"
        >
          About Me
        </motion.h1>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/5 dark:bg-black/20 p-8 rounded-4xl shadow-2xl max-w-4xl w-full backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-500"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Professional Profile</h2>
          <p className="text-lg leading-relaxed font-light">
            Motivated Information Technology student, currently pursuing the Bachelor of Information Technology at the
            Adelaide University, with hands-on experience building production-grade web applications using Next.js/React,
            TypeScript, Tailwind CSS and AI APIs. Rapidly adapts to new technologies and frameworks, consistently
            delivering scalable, high-performance solutions in fast-paced development environments. Delivers user-focused
            solutions that improve outcomes, combining strong communication and problem-solving to translate complex
            requirements into clear, effective results across both technical and client-facing environments.
          </p>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl w-full text-left"
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skillIndex * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-foreground font-medium shadow-lg hover:scale-105 hover:bg-white/10 hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all cursor-default backdrop-blur-md text-sm md:text-base"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl w-full text-left"
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h2>
          <div className="mb-8">
            <p className="font-semibold mb-4 text-purple-400 tracking-wide uppercase text-sm">
              Frontend
            </p>
            <div className="flex flex-wrap gap-3">
              {frontEndSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-linear-to-br from-white/5 to-white/5 border border-white/10 text-foreground font-medium shadow-md hover:scale-110 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all text-sm md:text-base backdrop-blur-sm cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <p className="font-semibold mb-4 text-pink-400 tracking-wide uppercase text-sm">
              Backend
            </p>
            <div className="flex flex-wrap gap-3">
              {backEndSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-linear-to-br from-white/5 to-white/5 border border-white/10 text-foreground font-medium shadow-md hover:scale-110 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all text-sm md:text-base backdrop-blur-sm cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Operating Systems */}
          <div>
            <p className="font-semibold mt-5 mb-4 text-pink-400 tracking-wide uppercase text-sm">
              Operating System
            </p>
            <div className="flex flex-wrap gap-3">
              {operatingSystems.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-linear-to-br from-white/5 to-white/5 border border-white/10 text-foreground font-medium shadow-md hover:scale-110 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all text-sm md:text-base backdrop-blur-sm cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other tools */}
          <div>
            <p className="font-semibold mt-5 mb-4 text-pink-400 tracking-wide uppercase text-sm">
              Other tools
            </p>
            <div className="flex flex-wrap gap-3">
              {otherTools.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-linear-to-br from-white/5 to-white/5 border border-white/10 text-foreground font-medium shadow-md hover:scale-110 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all text-sm md:text-base backdrop-blur-sm cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/5 dark:bg-black/20 p-8 rounded-4xl shadow-2xl max-w-4xl w-full backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
        >
          {/* Subtle glow highlight on edge */}
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
          <h2 className="text-2xl font-bold mb-6 text-foreground">Education</h2>
          <ul className="space-y-6 text-lg text-muted-foreground font-light">
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full before:shadow-[0_0_10px_rgba(168,85,247,0.8)]">
              <span className="font-semibold text-foreground text-xl">Adelaide University</span> –
              Bachelor of Information Technology
              <br />
              <div className="mt-2" />
              GPA: <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 font-bold ml-1">6.18/7.0</span> |
              Expected Graduation: 2027
              <br />
              <div className="mt-2" />
              <span className="font-medium inline-block bg-white/5 px-3 py-1 rounded-md border border-white/10 mt-1 shadow-sm">
                Recipient of{" "}
                <span className="text-purple-400 font-bold">
                  UniSA International Merit Scholarship
                </span>{" "}
                (15% deduction in tuition fee)
              </span>
            </li>
            <div className="w-full h-px bg-white/10 my-4" />
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-pink-500 before:rounded-full before:shadow-[0_0_10px_rgba(236,72,153,0.8)]">
              <span className="font-semibold text-foreground text-xl">International University</span> –
              Bachelor of Information Technology, Computer Engineering
              <br />
              <div className="mt-2" />
              <span className="font-medium text-gray-300">Cohort: 2022 - 2024</span>
              <br />
              <div className="mt-1" />
              GPA: <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-rose-400 font-bold ml-1">2.97 / 4.0</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl w-full bg-white/5 dark:bg-black/20 p-8 rounded-4xl shadow-2xl text-left backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-50 h-50 bg-blue-500/10 blur-[80px]" />
          <h2 className="text-2xl font-bold mb-6 text-foreground relative z-10">Experience</h2>
          <ul className="space-y-8 relative z-10">
            {experiences.map((exp) => (
              <li key={exp.title}>
                <p className="font-bold text-xl">
                  {exp.title} <span className="text-purple-400">@ {exp.company}</span>
                </p>
                <div className="inline-flex items-center justify-center px-3 py-1 mt-2 text-xs font-semibold tracking-wide bg-white/10 rounded-full border border-white/10">
                  {exp.duration}
                </div>
                <p className="text-lg mt-5 font-semibold">Key responsibilities</p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-base font-light marker:text-purple-500">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p className="text-lg mt-5 font-semibold">Achievements</p>
                <ul className="mt-3 list-none space-y-3 text-base font-light">
                  {exp.achievement.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-pink-400 text-xl leading-5">★</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">Projects Preview</h2>

          <ul className="flex flex-col gap-4">
            {projects.map((project, i) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <a
                  href={project.slug}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all rounded-3xl backdrop-blur-xl shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <div>
                    <p className="text-xl font-bold text-foreground group-hover:text-purple-400 transition-colors">{project.title}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-white/10 dark:bg-black/40 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-purple-400 font-semibold group-hover:text-pink-400 transition-colors">
                    <span>View Project</span>
                    <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="max-w-4xl w-full text-left"
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">Hobbies & Interests</h2>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={hobby}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-foreground font-medium shadow-lg hover:scale-105 hover:bg-white/10 hover:border-pink-400/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all cursor-pointer backdrop-blur-md text-sm md:text-base"
              >
                {hobby}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
