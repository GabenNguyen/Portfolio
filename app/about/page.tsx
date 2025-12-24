/* eslint-disable react-hooks/purity */
"use client";
import { motion } from "framer-motion";

const technicalSkills = [
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "Prisma",
  "SQL",
  "Git",
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Fast learner",
  "Team player",
  "Resilience",
  "Adaptive",
  "Billingual communicator",
];

const experiences = [
  {
    title: "English Tutor",
    company: "Self-employed",
    duration: "Aug 2022 - Aug 2023",
    description: [
      "Delivered personalised, result-driven lessons tailored to individual learning goals.",
      "Explained complex concepts clearly and confidently in a simple, supportive manner.",
      "Helped students achieve strong exam results and measurable proficiency improvements.",
      "Adapted quickly to diverse student needs while maintaining a positive learning experience.",
      "Maintained accuracy and attention to detail when tracking student progress.",
      "Organised and managed multiple teaching sessions, demonstrating strong time management and reliability.",
    ],
    achievement: [
      "Significantly improved students' English skills, with many achieving top scores (9/10) in high school exams.",
      "Supported students to attain top results in the Cambridge FLYERS English proficiency test, with many scoring 4/5 across all sections.",
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
      "Gemini API",
      "Framer Motion",
    ],
  },
  {
    title: "Personal Portfolio",
    slug: "/project",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
];

const hobbies = [
  "Gaming",
  "Reading Tech Blogs",
  "Traveling",
  "Badminton",
  "Video Editing",
];

const AboutPage = () => {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Background Gradients */}
      <motion.div
        suppressHydrationWarning
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute inset-0 bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 opacity-20 dark:from-gray-700 dark:via-gray-900 dark:to-gray-800 blur-3xl pointer-events-none"
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          suppressHydrationWarning
          key={i}
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10 + i, delay: i }}
          className="absolute w-20 h-20 rounded-full bg-blue-300/20 dark:bg-purple-700/20"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-28 flex flex-col items-center gap-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/70 dark:bg-gray-900/70 p-8 rounded-3xl shadow-2xl max-w-3xl w-full backdrop-blur-xl border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-4">Professional Profile</h2>
          Motivated Information Technology student, currently pursuing the
          Bachelor of Information Technology at the University of South
          Australia. Strong{" "}
          <span className="font-bold text-blue-500">communication skills</span>,
          combined with a{" "}
          <span className="font-bold text-blue-500">solid IT background</span>{" "}
          and experience in digital technologies. Quick to learn and adapt to in
          fast-paced environments and new systems, with proven experience
          delivering client support and clear explanations in face-to-face
          settings. With a{" "}
          <span className="font-bold text-blue-500">
            positive mindset, resilience and commitment to lifelong learning
          </span>
          , I am eager to contribute by delivering professional,
          customer-focused service and client support both in person and in a
          digital environment.
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl w-full text-left"
        >
          <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skillIndex * 0.05 }}
                className="px-5 py-2 rounded-full bg-linear-to-r from-green-200 to-green-300 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-200 font-semibold shadow-lg hover:scale-105 transition-transform cursor-default"
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
          className="max-w-3xl w-full text-left"
        >
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skillIndex * 0.05 }}
                className="px-5 py-2 rounded-full bg-linear-to-r from-blue-200 to-blue-400 dark:from-blue-900 dark:to-blue-700 text-blue-800 dark:text-blue-200 font-semibold shadow-lg hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/70 dark:bg-gray-900/70 p-8 rounded-3xl shadow-2xl max-w-3xl w-full backdrop-blur-xl border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ul className="space-y-3 text-lg">
            <li>
              <span className="font-semibold">Adelaide University</span> –
              Bachelor of Information Technology
              <br />
              GPA: <span className="text-blue-500 font-bold">6.18/7.0</span> |
              Expected Graduation: 2027
              <br />
              <span className="font-semibold">
                Recipient of{" "}
                <span className="text-blue-500 font-bold">
                  UniSA International Merit Scholarship
                </span>{" "}
                (15% deduction in tuition fee)
              </span>
            </li>
            <li>
              <span className="font-semibold">International University</span> –
              Bachelor of Information Technology, Computer Engineering
              <br />
              <span className="font-semibold">Cohort: 2022 - 2024</span>
              <br />
              GPA: <span className="text-blue-500 font-bold">2.18 / 4.0</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-3xl w-full bg-white/70 dark:bg-gray-900/70 p-8 rounded-3xl shadow-2xl text-left backdrop-blur-xl border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.title}>
                <p className="font-semibold text-lg">
                  {exp.title} - {exp.company}
                </p>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                <p className="text-md mt-3 font-bold">Key responsibilities</p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-base">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p className="text-md mt-3 font-bold">Achievements</p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-base">
                  {exp.achievement.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
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
          className="max-w-3xl w-full"
        >
          <h2 className="text-2xl font-bold mb-4">Projects</h2>

          <ul className="divide-y divide-gray-200 dark:divide-gray-800 bg-white/70 dark:bg-gray-900/70 rounded-3xl border border-gray-200 dark:border-gray-800 backdrop-blur-xl">
            {projects.map((project, i) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <a
                  href={project.slug}
                  className="flex items-center justify-between p-5 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-colors rounded-3xl"
                >
                  <div>
                    <p className="text-lg font-semibold">{project.title}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    View →
                  </span>
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
          className="max-w-3xl w-full text-left"
        >
          <h2 className="text-2xl font-bold mb-4">Hobbies & Interests</h2>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={hobby}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2 rounded-full bg-linear-to-r from-pink-200 to-pink-300 dark:from-pink-900 dark:to-pink-700 text-pink-800 dark:text-pink-200 font-semibold shadow-lg hover:scale-105 transition-transform cursor-default"
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
