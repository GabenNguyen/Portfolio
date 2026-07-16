"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MoveUpRight, FolderOpen, FileUser, ExternalLink, Code2, Database, Wrench, Layers, GraduationCap, MapPin, Zap, Lightbulb } from "lucide-react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { portfolioData } from "@/config/portfolio-data";

/* Skill category icon map — monochrome + blue accent family */
const skillCategoryMeta: Record<string, { icon: React.ElementType; label: string; tint: string }> = {
  frontend: { icon: Layers, label: "Frontend", tint: "text-blue-600 dark:text-blue-400" },
  backend: { icon: Database, label: "Backend", tint: "text-indigo-600 dark:text-indigo-400" },
  language: { icon: Code2, label: "Languages", tint: "text-sky-600 dark:text-sky-400" },
  tools: { icon: Wrench, label: "Tools", tint: "text-cyan-600 dark:text-cyan-400" },
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
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ── Hero entrance timeline ──────────────────────────────
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
          .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
          .from(".hero-role", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5")
          .from(".hero-bio", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-pills", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-contact", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-visual", { opacity: 0, scale: 0.85, duration: 1, ease: "power2.out" }, "-=0.9")
          .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=0.2");

        // ── Continuous motion on the avatar composition ─────────
        gsap.to(".ring-spin", {
          rotate: 360,
          duration: 22,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".ring-spin-rev", {
          rotate: -360,
          duration: 38,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".avatar-float", {
          y: -14,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".orb-a", {
          x: 28,
          y: -38,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".orb-b", {
          x: -28,
          y: 38,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".badge-float-a", {
          y: -8,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".badge-float-b", {
          y: 8,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".hero-scroll-dot", {
          y: 10,
          duration: 1.4,
          repeat: -1,
          ease: "sine.inOut",
        });

        // ── Scroll-reveal for section blocks ────────────────────
        gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 36,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        // ── Parallax on ambient blobs ───────────────────────────
        gsap.to(".blob-1", {
          yPercent: -28,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".blob-2", {
          yPercent: 22,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".blob-3", {
          yPercent: -16,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".hero-badge, .hero-title, .hero-role, .hero-bio, .hero-pills, .hero-cta, .hero-contact, .hero-visual, .hero-scroll, .stagger-item",
          { opacity: 1, y: 0, scale: 1 }
        );
      });
    },
    { scope: root }
  );

  return (
    <main ref={root} className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="blob-1 absolute top-[-15%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-600/12 blur-[140px] dark:bg-blue-600/10" />
        <div className="blob-2 absolute bottom-[-10%] right-[-10%] h-[45%] w-[45%] rounded-full bg-indigo-600/10 blur-[130px] dark:bg-indigo-600/8" />
        <div className="blob-3 absolute top-[45%] left-[55%] h-[35%] w-[35%] rounded-full bg-sky-600/8 blur-[120px] dark:bg-sky-600/6" />
        <div className="dot-grid absolute inset-0 mask-[radial-gradient(ellipse_70%_70%_at_50%_30%,#000_60%,transparent_100%)] opacity-60" />
      </div>

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen items-center justify-center pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative flex flex-col items-center gap-14 xl:flex-row xl:items-center xl:justify-between xl:gap-20">

            {/* ── Text Content ──────────────────────────────────── */}
            <div className="z-20 flex w-full flex-col items-center space-y-7 text-center xl:w-[55%] xl:items-start xl:text-left">

              {/* Status badge */}
              <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-black/5 px-5 py-2.5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 shadow-[0_0_20px_rgba(37,99,235,0.12)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <span className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-300">Available for Opportunities</span>
              </div>

              {/* Name + role */}
              <div className="space-y-4">
                <h1 className="hero-title text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block text-foreground/90">Hi, I&apos;m</span>
                  <span className="mt-1 block bg-linear-to-r from-blue-500 via-indigo-500 to-sky-500 bg-clip-text pb-2 text-transparent">
                    Ba Hoa NGUYEN
                  </span>
                </h1>

                <div className="hero-role text-xl font-medium text-muted-foreground md:text-2xl md:text-3xl">
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
                    className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:to-indigo-400"
                  />
                </div>
              </div>

              {/* Bio */}
              <p className="hero-bio max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                I&apos;m currently a sophomore at{" "}
                <span className="font-semibold text-foreground">Adelaide University</span>,
                where I&apos;ve built a solid foundation in IT, mastering core concepts like Object-Oriented Programming and Data-Driven Web Technologies. Beyond academics, I love creating performant, user-friendly applications that combine clean design with seamless functionality.
              </p>

              {/* Location + Edu pill */}
              <div className="hero-pills flex flex-wrap justify-center gap-3 xl:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs font-medium text-muted-foreground dark:border-white/10 dark:bg-white/5">
                  <GraduationCap className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                  Bachelor of IT · Adelaide University
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs font-medium text-muted-foreground dark:border-white/10 dark:bg-white/5">
                  <MapPin className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
                  Para Hills, South Australia
                </span>
              </div>

              {/* CTA buttons */}
              <div className="hero-cta flex w-full flex-wrap items-center justify-center gap-4 pt-2 xl:justify-start">
                <Link href="/project" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="group flex h-13 w-full items-center gap-2 rounded-2xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-1 hover:opacity-90 hover:shadow-[0_0_35px_rgba(37,99,235,0.4)] active:scale-95 sm:w-auto cursor-pointer"
                  >
                    View Projects
                    <FolderOpen className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </Button>
                </Link>

                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group flex h-13 w-full items-center gap-2 rounded-2xl border-black/20 bg-black/5 px-8 text-base font-semibold text-foreground backdrop-blur-md transition-all hover:-translate-y-1 hover:border-black/40 hover:bg-black/10 dark:border-white/20 dark:bg-white/5 dark:hover:border-white/40 dark:hover:bg-white/10 sm:w-auto cursor-pointer"
                  >
                    More About Me
                    <FileUser className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="group flex h-13 w-full items-center gap-2 rounded-2xl border border-transparent text-muted-foreground transition-all hover:-translate-y-1 hover:border-black/10 hover:bg-black/5 hover:text-foreground dark:hover:border-white/10 dark:hover:bg-white/5 sm:w-auto cursor-pointer"
                  >
                    Let&apos;s Connect
                    <MoveUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Contact strip */}
              <div className="hero-contact flex w-full flex-col items-center justify-center gap-5 border-t border-black/10 pt-6 sm:flex-row xl:justify-start dark:border-white/10">
                <div className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-colors group-hover:border-blue-500/50 group-hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/5">
                    <Phone className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  </div>
                  <span>(+61) 481 991 586</span>
                </div>

                <BsDot className="hidden text-2xl text-black/20 dark:text-white/20 sm:block" />

                <div className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-colors group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 dark:border-white/10 dark:bg-white/5">
                    <Mail className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <span>nguyenbahoa04@gmail.com</span>
                </div>

                <BsDot className="hidden text-2xl text-black/20 dark:text-white/20 sm:block" />

                <div className="flex items-center gap-3">
                  <Link href="https://github.com/GabenNguyen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <div className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-black/5 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:border-blue-500/50 dark:border-white/10 dark:bg-white/5 cursor-pointer">
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/40 to-indigo-500/40 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                      <BiLogoGithub className="relative h-6 w-6 text-foreground/80 transition-colors group-hover:text-foreground" />
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/bahoanguyen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-black/5 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:border-indigo-500/50 dark:border-white/10 dark:bg-white/5 cursor-pointer">
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/40 to-sky-500/40 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                      <BiLogoLinkedin className="relative h-6 w-6 text-foreground/80 transition-colors group-hover:text-foreground" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Visual */}
            <div className="hero-visual relative mt-12 flex w-full items-center justify-center xl:mt-0 xl:w-[45%]">
              <div className="relative h-75 w-75 sm:h-100 sm:w-100 md:h-115 md:w-115">

                {/* Outer conic glow ring */}
                <div
                  className="ring-spin absolute inset-0 rounded-full opacity-70"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(37,99,235,0) 0%, rgba(99,102,241,0.45) 25%, rgba(56,189,248,0.55) 50%, rgba(79,70,229,0.45) 75%, rgba(37,99,235,0) 100%)",
                    filter: "blur(22px)",
                  }}
                />

                {/* Inner dashed ring */}
                <div className="ring-spin-rev absolute inset-2 rounded-full border-[1.5px] border-dashed border-black/15 opacity-50 dark:border-white/25" />

                {/* Floating orbs */}
                <div className="orb-a absolute -right-10 top-4 h-24 w-24 rounded-full bg-blue-500/35 blur-2xl" />
                <div className="orb-b absolute -bottom-4 left-10 h-28 w-28 rounded-full bg-indigo-500/35 blur-2xl" />

                {/* Main Avatar */}
                <div className="avatar-float group absolute inset-10 overflow-hidden rounded-[2.5rem] border-2 border-black/10 bg-white/60 p-2 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/20" style={{ boxShadow: "0 25px 50px -12px rgba(37,99,235,0.25), inset 0 0 20px rgba(37,99,235,0.05)" }}>
                  <div className="relative h-full w-full overflow-hidden rounded-4xl border border-black/5 bg-linear-to-br from-blue-500/10 to-indigo-500/10 dark:border-white/5">
                    <Image
                      src={profileImg}
                      alt="Portrait of Ba Hoa Nguyen"
                      fill
                      priority
                      className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                      quality={100}
                    />
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-80px_60px_-20px_rgba(0,0,0,0.4)]" />
                  </div>
                  <div className="pointer-events-none absolute -left-full top-0 h-[200%] w-[40%] rotate-30 bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ease-in-out group-hover:left-[200%]" />
                </div>

                {/* Floating badge — Tech stack */}
                <div className="badge-float-a absolute -right-4 top-[18%] z-20 flex items-center gap-3 rounded-2xl border border-black/15 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:-right-8 dark:border-white/20 dark:bg-black/50 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-500 shadow-inner">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-medium tracking-widest text-muted-foreground uppercase">Stack Focus</span>
                    <span className="text-sm font-bold tracking-wide text-foreground">React &amp; Next.js</span>
                  </div>
                </div>

                {/* Floating badge — Building */}
                <div className="badge-float-b absolute -left-4 bottom-[18%] z-20 flex items-center gap-3 rounded-2xl border border-black/15 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:-left-8 dark:border-white/20 dark:bg-black/50 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-indigo-500 shadow-inner">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-medium tracking-widest text-muted-foreground uppercase">Building</span>
                    <span className="text-sm font-bold tracking-wide text-foreground">Web Apps</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-default select-none flex-col items-center gap-1.5">
          <span className="text-xs font-medium tracking-widest text-muted-foreground/60 uppercase">Scroll</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-black/20 p-1 dark:border-white/20">
            <div className="hero-scroll-dot h-2 w-1 rounded-full bg-black/40 dark:bg-white/50" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — QUICK STATS */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="stagger-item group relative overflow-hidden rounded-2xl border border-black/10 bg-black/3 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-black/5 dark:border-white/10 dark:bg-white/3 dark:hover:border-blue-400/40 dark:hover:bg-white/5"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-indigo-600/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative text-3xl font-extrabold bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent md:text-4xl">
                  {value}
                </div>
                <div className="relative mt-1 text-sm font-medium text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TECH SKILLS */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="stagger-item mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase">What I work with</span>
            <h2 className="text-3xl font-bold md:text-4xl">My Tech Stack</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground md:text-base">
              A curated set of tools and technologies I use to build full-stack web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.entries(skills) as [string, string[]][]).map(([category, items]) => {
              const meta = skillCategoryMeta[category] ?? { icon: Code2, label: category, tint: "text-foreground" };
              const Icon = meta.icon;
              return (
                <div
                  key={category}
                  className="stagger-item group relative overflow-hidden rounded-2xl border border-black/10 bg-black/3 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-black/5 dark:border-white/10 dark:bg-white/3 dark:hover:border-blue-400/40 dark:hover:bg-white/5"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
                      <Icon className={`h-5 w-5 ${meta.tint}`} />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-foreground/90">{meta.label}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-lg border border-black/10 bg-black/6 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-black/9 hover:text-foreground dark:border-white/10 dark:bg-white/8 dark:hover:bg-white/12"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="stagger-item mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] text-indigo-500 uppercase">What I&apos;ve built</span>
              <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
            </div>
            <Link href="/project">
              <Button
                variant="outline"
                className="hidden items-center gap-2 rounded-full border-black/15 bg-black/5 text-sm font-medium hover:border-black/25 hover:bg-black/10 sm:flex dark:border-white/15 dark:bg-white/5 dark:hover:border-white/25 dark:hover:bg-white/10 cursor-pointer"
              >
                All Projects <MoveUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="stagger-item group relative overflow-hidden rounded-2xl border border-black/10 bg-black/3 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-black/5 dark:border-white/10 dark:bg-white/3 dark:hover:border-blue-400/40 dark:hover:bg-white/5"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${index % 2 === 0
                    ? "from-blue-600/8 via-transparent to-transparent"
                    : "from-indigo-600/8 via-transparent to-transparent"
                    }`}
                />

                <div className="relative mb-4 flex items-start justify-between gap-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${index % 2 === 0 ? "border-blue-500/30 bg-blue-500/15" : "border-indigo-500/30 bg-indigo-500/15"}`}>
                    <FolderOpen className={`h-5 w-5 ${index % 2 === 0 ? "text-blue-500 dark:text-blue-400" : "text-indigo-500 dark:text-indigo-400"}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-all hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10 cursor-pointer">
                        <BiLogoGithub className="h-4 w-4 text-foreground/70" />
                      </div>
                    </Link>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Open project">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-all hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10 cursor-pointer">
                        <ExternalLink className="h-4 w-4 text-foreground/70" />
                      </div>
                    </Link>
                  </div>
                </div>

                <h3 className="relative mb-2 text-xl font-bold text-foreground">{project.name}</h3>
                <p className="relative mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="relative flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className={`rounded-md border px-2.5 py-1 text-xs font-medium ${index % 2 === 0
                        ? "border-blue-500/25 bg-blue-500/10 text-blue-600 dark:text-blue-300"
                        : "border-indigo-500/25 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300"
                        }`}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="rounded-md border border-black/10 bg-black/5 px-2.5 py-1 text-xs font-medium text-muted-foreground dark:border-white/10 dark:bg-white/5">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Link href="/project" className="mt-8 block sm:hidden">
            <Button variant="outline" className="flex w-full items-center justify-center gap-2 rounded-full border-black/15 bg-black/5 dark:border-white/15 dark:bg-white/5 cursor-pointer">
              View All Projects <MoveUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stagger-item relative overflow-hidden rounded-3xl border border-black/10 bg-linear-to-br from-blue-500/10 via-background to-indigo-500/10 p-10 text-center backdrop-blur-xl md:p-16 dark:border-white/10 dark:from-blue-900/30 dark:via-background dark:to-indigo-900/20">
            <div className="pointer-events-none absolute top-0 left-1/4 h-64 w-64 rounded-full bg-blue-600/15 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-indigo-600/15 blur-[80px]" />

            <h2 className="relative mb-4 text-3xl font-extrabold md:text-5xl">
              Let&apos;s Build Something
              <span className="block bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Together
              </span>
            </h2>
            <p className="relative mx-auto mb-8 max-w-md text-base text-muted-foreground md:text-lg">
              Open to internships, collaborations, or just a good tech chat. Don&apos;t hesitate to reach out!
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-13 px-9 text-base font-semibold text-primary-foreground bg-primary rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-1 hover:opacity-90 active:scale-95 cursor-pointer"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/bahoanguyen/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 flex items-center gap-2 rounded-2xl border-black/20 bg-black/5 px-9 text-base font-semibold backdrop-blur-md transition-all hover:-translate-y-1 hover:border-black/40 hover:bg-black/10 dark:border-white/20 dark:bg-white/5 dark:hover:border-white/40 dark:hover:bg-white/10 cursor-pointer"
                >
                  <BiLogoLinkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
