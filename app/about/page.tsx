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
    description:
      "Helped high-school students achieve top scores in Engish exams and other proficiency tests such as Cambridge MOVERS, FLYERS, etc",
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
      {/* Animated background */}
      <motion.div
        suppressHydrationWarning
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute inset-0 bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 opacity-20 dark:from-gray-700 dark:via-gray-900 dark:to-gray-800 blur-3xl pointer-events-none"
      />

      {/* Floating shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8 + i, delay: i }}
          className={`absolute w-16 h-16 rounded-full bg-blue-300/20 dark:bg-purple-700/20`}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col items-center gap-12 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-muted-foreground max-w-3xl"
        >
          Hi! I&apos;m{" "}
          <span className="font-semibold text-blue-500">
            Ba Hoa (Gaben) Nguyen
          </span>
          , a sophomore at Adelaide University with a focus on web development
          and software engineering. I enjoy building performant, user-friendly
          applications while exploring new technologies.
        </motion.p>

        {/* soft skills */}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skillIndex * 0.05 }}
                className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold shadow-md hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* technical skills */}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skillIndex * 0.05 }}
                className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold shadow-md hover:scale-105 transition-transform cursor-default"
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
          className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-2xl shadow-md max-w-3xl w-full text-left backdrop-blur-sm border border-gray-200 dark:border-gray-800"
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
          className="max-w-3xl w-full bg-white/80 dark:bg-gray-900/80 p-6 rounded-2xl shadow-md text-left backdrop-blur-sm border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.title}>
                <p className="font-semibold text-lg">
                  {exp.title} U+2013 {exp.company}
                </p>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                <p className="text-base mt-1">{exp.description}</p>
              </li>
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 font-semibold shadow-md hover:scale-105 transition-transform cursor-default"
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
