"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MoveUpRight, FolderOpen, FileUser } from "lucide-react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/avatar.png";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Dynamic Background with Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-pink-600/10 blur-[100px]" />
        {/* Subtle grid pattern pattern overlaid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <section className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-24 relative">

            {/* Text Content Area */}
            <div className="w-full xl:w-[55%] flex flex-col items-center xl:items-start text-center xl:text-left space-y-8 z-20">

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.1)] mb-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-sm font-medium tracking-wide">Available for Opportunities</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
                >
                  <span className="block text-foreground drop-shadow-sm">Hi! My name is</span>
                  <span className="block mt-2 bg-clip-text  pb-2 drop-shadow-lg">
                    Ba Hoa NGUYEN
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium h-[40px] md:h-[48px]"
                >
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
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold drop-shadow-md"
                  />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl  leading-relaxed max-w-2xl font-light"
              >
                I&apos;m currently a sophomore at{" "}
                <span className="font-bold">Adelaide University</span>,
                where I&apos;ve built a solid foundation in IT, mastering core concepts like Object-Oriented Programming and Data-Driven Web Technologies. Beyond academics, I love creating performant, user-friendly applications that combine clean design with seamless functionality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center xl:justify-start gap-4 pt-4 w-full"
              >
                <Link href="/project" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-lg font-semibold rounded-2xl bg-white text-black hover:bg-gray-200 hover:-translate-y-1 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2 group cursor-pointer"
                  >
                    View Projects
                    <FolderOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>

                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 text-lg font-semibold rounded-2xl bg-white/5 border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 active:scale-95 transition-all text-foreground flex items-center gap-2 group cursor-pointer"
                  >
                    More about me
                    <FileUser className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-full sm:w-auto h-14 px-6 text-lg font-medium rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 hover:-translate-y-1 active:scale-95 transition-all text-muted-foreground hover:text-foreground flex items-center gap-2 group cursor-pointer"
                  >
                    Let&apos;s Connect
                    <MoveUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center xl:justify-start gap-6 pt-8 border-t border-white/10 w-full"
              >
                <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition-colors">
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <span>(+61) 481 991 586</span>
                </div>

                <BsDot className="hidden sm:block text-white/20 text-2xl" />

                <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-pink-400/50 group-hover:bg-pink-500/10 transition-colors">
                    <Mail className="w-4 h-4 text-pink-400" />
                  </div>
                  <span>nguyenbahoa04@gmail.com</span>
                </div>

                <BsDot className="hidden sm:block text-white/20 text-2xl" />

                <div className="flex items-center gap-4">
                  <Link href="https://github.com/GabenNguyen" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-500/40 to-indigo-500/40 blur-md" />
                      <BiLogoGithub className="relative w-6 h-6 text-foreground/80 group-hover:text-white transition-colors" />
                    </motion.div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/bahoanguyen/" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/40 to-cyan-500/40 blur-md" />
                      <BiLogoLinkedin className="relative w-6 h-6 text-foreground/80 group-hover:text-white transition-colors" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Premium Animated Profile Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 50 }}
              className="w-full xl:w-[45%] flex justify-center items-center relative mt-16 xl:mt-0 z-10"
            >
              <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px]">

                {/* Outer rotating intricate glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(56, 189, 248, 0) 0%, rgba(168, 85, 247, 0.4) 25%, rgba(236, 72, 153, 0.6) 50%, rgba(139, 92, 246, 0.4) 75%, rgba(56, 189, 248, 0) 100%)",
                    filter: "blur(25px)",
                  }}
                />

                {/* Subdued rotating dashed technical ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-[1.5px] border-dashed border-white/30 opacity-50 backdrop-blur-3xl"
                />

                {/* Central Floating Orbs */}
                <motion.div
                  animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 right-10 w-24 h-24 rounded-full bg-purple-500/40 blur-2xl flex-shrink-0"
                />
                <motion.div
                  animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 left-10 w-32 h-32 rounded-full bg-blue-500/40 blur-2xl flex-shrink-0"
                />

                {/* Main Avatar Container */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-10 rounded-[2.5rem] bg-black/20 border-2 border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden p-2 group"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5">
                    <Image
                      src={profileImg}
                      alt="Profile of Gaben Nguyen"
                      fill
                      priority
                      className="y-auto object-cover  object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                      quality={100}
                    />

                    {/* Inner glowing overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_-80px_60px_-20px_rgba(0,0,0,0.6)] pointer-events-none" />
                  </div>

                  {/* Glass reflection slit */}
                  <div className="absolute top-0 left-[-100%] w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none" />
                </motion.div>

                {/* Decorative floating widget - Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
                  transition={{
                    opacity: { delay: 1.5, duration: 0.5 },
                    scale: { delay: 1.5, duration: 0.5, type: "spring" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                  }}
                  className="absolute top-[20%] -right-4 sm:-right-8 px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">Stack Focus</span>
                    <span className="text-sm text-white font-bold tracking-wide">React & Next.js</span>
                  </div>
                </motion.div>

                {/* Decorative floating widget - Experience */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [5, -5, 5] }}
                  transition={{
                    opacity: { delay: 1.7, duration: 0.5 },
                    scale: { delay: 1.7, duration: 0.5, type: "spring" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.7 }
                  }}
                  className="absolute bottom-[20%] -left-4 sm:-left-8 px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-lg">💡</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">Building</span>
                    <span className="text-sm text-white font-bold tracking-wide">Web Apps</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;
