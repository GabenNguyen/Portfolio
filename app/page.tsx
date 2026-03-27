"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MoveUpRight, FolderOpen, FileUser, ExternalLink, Github, Code2, Database, Wrench, Layers, GraduationCap, MapPin } from "lucide-react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { portfolioData } from "@/config/portfolio-data";

/* Animation Variants */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const } },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, delay } },
});

/* Skill category icon map */
const skillCategoryMeta: Record<string, { icon: React.ElementType; label: string; gradient: string; border: string }> = {
  frontend: { icon: Layers, label: "Frontend", gradient: "from-violet-500/20 to-purple-500/10", border: "border-violet-500/30" },
  backend: { icon: Database, label: "Backend", gradient: "from-cyan-500/20 to-blue-500/10", border: "border-cyan-500/30" },
  language: { icon: Code2, label: "Languages", gradient: "from-emerald-500/20 to-teal-500/10", border: "border-emerald-500/30" },
  tools: { icon: Wrench, label: "Tools", gradient: "from-amber-500/20 to-orange-500/10", border: "border-amber-500/30" },
};

/* Stats */
const stats = [
  { value: "2+", label: "Projects Built" },
  { value: "4+", label: "Tech Stacks" },
  { value: "Sopho", label: "Year at Uni" },
  { value: "Open", label: "To Opportunities" },
];

const HomePage = () => {
  const { skills, projects } = portfolioData;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/8 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-blue-600/8 blur-[130px]" />
        <div className="absolute top-[45%] left-[55%] w-[35%] h-[35%] rounded-full bg-pink-600/6 blur-[120px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_60%,transparent_100%)]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        >
          <div className="flex flex-col xl:flex-row items-center justify-between gap-14 xl:gap-20 relative">

            {/* ── Text Content ──────────────────────────────────── */}
            <div className="w-full xl:w-[55%] flex flex-col items-center xl:items-start text-center xl:text-left space-y-7 z-20">

              {/* Status badge */}
              <motion.div {...fadeUp(0.2)} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.12)]">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-sm font-semibold tracking-wide text-emerald-300">Available for Opportunities</span>
              </motion.div>

              {/* Name + role */}
              <div className="space-y-4">
                <motion.h1 {...fadeUp(0.35)} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-foreground/90">Hi, I&apos;m</span>
                  <span className="block mt-1 bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent pb-2">
                    Ba Hoa NGUYEN
                  </span>
                </motion.h1>

                <motion.div {...fadeUp(0.5)} className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium min-h-[44px]">
                  Passionate about{" "}
                  <TypeAnimation
                    sequence={[
                      "IT and Software Engineering",
                      2000,
                      "Web Development",
                      2000,
                      "Building User-Centric Apps",
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    speed={60}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold"
                  />
                </motion.div>
              </div>

              {/* Bio */}
              <motion.p {...fadeUp(0.65)} className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light">
                I&apos;m currently a sophomore at{" "}
                <span className="font-semibold text-foreground">Adelaide University</span>,
                where I&apos;ve built a solid foundation in IT, mastering core concepts like Object-Oriented Programming and Data-Driven Web Technologies. Beyond academics, I love creating performant, user-friendly applications that combine clean design with seamless functionality.
              </motion.p>

              {/* Location + Edu pill */}
              <motion.div {...fadeUp(0.72)} className="flex flex-wrap gap-3 justify-center xl:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground">
                  <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                  Bachelor of IT · Adelaide University
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Para Hills, South Australia
                </span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div {...fadeUp(0.8)} className="flex flex-wrap items-center justify-center xl:justify-start gap-4 pt-2 w-full">
                <Link href="/project" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-13 px-8 text-base font-semibold rounded-2xl bg-white text-black hover:bg-gray-200 hover:-translate-y-1 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] flex items-center gap-2 group cursor-pointer"
                  >
                    View Projects
                    <FolderOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>

                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-13 px-8 text-base font-semibold rounded-2xl bg-white/5 border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 active:scale-95 transition-all text-foreground flex items-center gap-2 group cursor-pointer"
                  >
                    More About Me
                    <FileUser className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-full sm:w-auto h-13 px-6 text-base font-medium rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 hover:-translate-y-1 active:scale-95 transition-all text-muted-foreground hover:text-foreground flex items-center gap-2 group cursor-pointer"
                  >
                    Let&apos;s Connect
                    <MoveUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              {/* Contact strip */}
              <motion.div {...fadeUp(0.95)} className="flex flex-col sm:flex-row flex-wrap items-center justify-center xl:justify-start gap-5 pt-6 border-t border-white/10 w-full">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition-colors">
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <span>(+61) 481 991 586</span>
                </div>

                <BsDot className="hidden sm:block text-white/20 text-2xl" />

                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-pink-400/50 group-hover:bg-pink-500/10 transition-colors">
                    <Mail className="w-4 h-4 text-pink-400" />
                  </div>
                  <span>nguyenbahoa04@gmail.com</span>
                </div>

                <BsDot className="hidden sm:block text-white/20 text-2xl" />

                <div className="flex items-center gap-3">
                  <Link href="https://github.com/GabenNguyen" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-500/40 to-indigo-500/40 blur-md" />
                      <BiLogoGithub className="relative w-6 h-6 text-foreground/80 group-hover:text-white transition-colors" />
                    </motion.div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/bahoanguyen/" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/40 to-cyan-500/40 blur-md" />
                      <BiLogoLinkedin className="relative w-6 h-6 text-foreground/80 group-hover:text-white transition-colors" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Profile Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.1, type: "spring", stiffness: 45 }}
              className="w-full xl:w-[45%] flex justify-center items-center relative mt-12 xl:mt-0 z-10"
            >
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px]">

                {/* Outer conic glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full opacity-70"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(56,189,248,0) 0%, rgba(168,85,247,0.45) 25%, rgba(236,72,153,0.65) 50%, rgba(139,92,246,0.45) 75%, rgba(56,189,248,0) 100%)",
                    filter: "blur(22px)",
                  }}
                />

                {/* Inner dashed ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-[1.5px] border-dashed border-white/25 opacity-50"
                />

                {/* Floating orbs */}
                <motion.div
                  animate={{ x: [0, 28, 0], y: [0, -38, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 right-10 w-24 h-24 rounded-full bg-purple-500/35 blur-2xl"
                />
                <motion.div
                  animate={{ x: [0, -28, 0], y: [0, 38, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 left-10 w-28 h-28 rounded-full bg-blue-500/35 blur-2xl"
                />

                {/* Main Avatar */}
                <motion.div
                  animate={{ y: [-12, 12, -12] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-10 rounded-[2.5rem] bg-black/20 border-2 border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden p-2 group"
                  style={{ boxShadow: "0 25px 50px -12px rgba(139,92,246,0.25), inset 0 0 20px rgba(255,255,255,0.05)" }}
                >
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5">
                    <Image
                      src={profileImg}
                      alt="Profile of Gaben Nguyen"
                      fill
                      priority
                      className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                      quality={100}
                    />
                    <div className="absolute inset-0 shadow-[inset_0_-80px_60px_-20px_rgba(0,0,0,0.6)] pointer-events-none" />
                  </div>
                  {/* Shimmer */}
                  <div className="absolute top-0 left-[-100%] w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none" />
                </motion.div>

                {/* Floating badge — Tech stack */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
                  transition={{ opacity: { delay: 1.4, duration: 0.5 }, scale: { delay: 1.4, duration: 0.5, type: "spring" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 } }}
                  className="absolute top-[18%] -right-4 sm:-right-8 px-4 py-3 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-base">⚡</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 font-medium tracking-widest uppercase">Stack Focus</span>
                    <span className="text-sm text-white font-bold tracking-wide">React &amp; Next.js</span>
                  </div>
                </motion.div>

                {/* Floating badge — Building */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [5, -5, 5] }}
                  transition={{ opacity: { delay: 1.7, duration: 0.5 }, scale: { delay: 1.7, duration: 0.5, type: "spring" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.7 } }}
                  className="absolute bottom-[18%] -left-4 sm:-left-8 px-4 py-3 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-base">💡</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 font-medium tracking-widest uppercase">Building</span>
                    <span className="text-sm text-white font-bold tracking-wide">Web Apps</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-default select-none"
        >
          <span className="text-xs text-muted-foreground/60 tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.4, repeat: Infinity }} className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 — QUICK STATS */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp(0)}
                className="group relative overflow-hidden rounded-2xl bg-white/3 border border-white/10 backdrop-blur-sm p-6 text-center hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — TECH SKILLS */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">What I work with</span>
            <h2 className="text-3xl md:text-4xl font-bold">My Tech Stack</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              A curated set of tools and technologies I use to build full-stack web applications.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {(Object.entries(skills) as [string, string[]][]).map(([category, items]) => {
              const meta = skillCategoryMeta[category] ?? { icon: Code2, label: category, gradient: "from-white/5 to-white/3", border: "border-white/10" };
              const Icon = meta.icon;
              return (
                <motion.div
                  key={category}
                  variants={fadeUp(0)}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${meta.gradient} border ${meta.border} backdrop-blur-sm p-6 hover:scale-[1.02] transition-transform duration-300`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 border ${meta.border} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-foreground/80" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">{meta.label}</span>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium bg-white/8 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/12 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
          >
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">What I&apos;ve built</span>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link href="/project">
              <Button
                variant="outline"
                className="hidden sm:flex items-center gap-2 rounded-full border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 text-sm font-medium cursor-pointer"
              >
                All Projects <MoveUpRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={fadeUp(0)}
                className="group relative overflow-hidden rounded-2xl bg-white/3 border border-white/10 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-400"
              >
                {/* Accent gradient per card */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${index % 2 === 0
                    ? "from-violet-600/8 via-transparent to-transparent"
                    : "from-cyan-600/8 via-transparent to-transparent"
                    }`}
                />

                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-4 relative">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${index % 2 === 0 ? "bg-violet-500/15 border-violet-500/30" : "bg-cyan-500/15 border-cyan-500/30"}`}>
                    <FolderOpen className={`w-5 h-5 ${index % 2 === 0 ? "text-violet-400" : "text-cyan-400"}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <Github className="w-4 h-4 text-foreground/70" />
                      </motion.div>
                    </Link>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <ExternalLink className="w-4 h-4 text-foreground/70" />
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Project info */}
                <h3 className="text-xl font-bold text-foreground mb-2 relative">{project.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 relative mb-5">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 relative">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${index % 2 === 0
                        ? "bg-violet-500/10 border-violet-500/25 text-violet-300"
                        : "bg-cyan-500/10 border-cyan-500/25 text-cyan-300"
                        }`}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile view-all button */}
          <Link href="/project" className="sm:hidden mt-8 block">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 rounded-full border-white/15 bg-white/5 hover:bg-white/10 cursor-pointer">
              View All Projects <MoveUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
           SECTION 5 — CTA BANNER
         ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/30 via-background to-cyan-900/20 backdrop-blur-xl p-10 md:p-16 text-center"
          >
            {/* Decorative glows */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-violet-600/15 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cyan-600/15 blur-[80px] pointer-events-none" />

            <h2 className="relative text-3xl md:text-5xl font-extrabold mb-4">
              Let&apos;s Build Something
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="relative text-muted-foreground max-w-md mx-auto text-base md:text-lg mb-8">
              Open to internships, collaborations, or just a good tech chat. Don&apos;t hesitate to reach out!
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-13 px-9 text-base font-semibold rounded-2xl bg-white text-black hover:bg-gray-100 hover:-translate-y-1 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/bahoanguyen/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-9 text-base font-semibold rounded-2xl bg-white/5 border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <BiLogoLinkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
