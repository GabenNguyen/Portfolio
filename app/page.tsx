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
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20">
            {/* Text Content */}
            <div className="w-full xl:w-1/2 text-center xl:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-2xl md:text-5xl font-bold mb-6"
              >
                Hi! My name is Ba Hoa (Gavin) NGUYEN
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-2xl text-muted-foreground font-semibold mb-8"
              >
                Passionate about{" "}
                <TypeAnimation
                  sequence={[
                    "IT and Software Engineering",
                    2000,
                    "Web Development",
                    2000,
                    "Building User-Centric Applications",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true} // shows typing cursor for realism
                  repeat={Infinity}
                  speed={60}
                  className="text-blue-500 font-semibold"
                />
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-2xl text-muted-foreground font-semibold mb-8"
              >
                I&apos;m currently a sophomore at{" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400">
                  Adelaide University
                </span>
                , where I&apos;ve built a solid foundation in IT, mastering core
                concepts like Object-Oriented Programming and Data-Driven Web
                Technologies. Beyond academics, I&apos;m deeply passionate about{" "}
                <span className="text-blue-500 font-semibold">
                  Web Development
                </span>
                , and I love creating performant, user-friendly applications
                that combine clean design with seamless functionality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <Link href="/contact">
                    <Button
                      size="default"
                      className="cursor-pointer px-10 py-6 text-xl font-semibold rounded-2xl hover:bg-gray-500 active:scale-95 transition-transform duration-150"
                    >
                      Let&apos;s Connect <MoveUpRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <Link href="/about">
                    <Button
                      size="default"
                      className="cursor-pointer px-10 py-6 text-xl font-semibold rounded-2xl hover:bg-gray-500 active:scale-95 transition-transform duration-150"
                    >
                      More about me <FileUser className="h-4 w-4" />
                    </Button>
                  </Link>

                  <Link href="/project">
                    <Button
                      size="default"
                      className="cursor-pointer px-10 py-6 text-xl font-semibold rounded-2xl hover:bg-gray-500 active:scale-95 transition-transform duration-150 flex items-center gap-2"
                    >
                      View My Projects <FolderOpen className="h-6 w-6" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex items-center gap-2 text-lg font-medium mt-4"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>(+61) 481 991 586</span>
                <BsDot />
                <Mail className="h-5 w-5 text-primary" />
                <span>nguyenbahoa04@gmail.com</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex items-center gap-6 mt-6"
              >
                {/* GitHub */}
                <Link
                  href="https://github.com/GabenNguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center w-12 h-12 rounded-2xl
                              bg-white/5 backdrop-blur-md border border-white/10
                              shadow-lg hover:shadow-xl transition-all"
                  >
                    {/* glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity
                                    bg-linear-to-br from-purple-500/30 to-indigo-500/30 blur-md"
                    />

                    <BiLogoGithub className="relative h-6 w-6 text-foreground/80 group-hover:text-white transition-colors" />
                  </motion.div>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/bahoanguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center w-12 h-12 rounded-2xl
                              bg-white/5 backdrop-blur-md border border-white/10
                              shadow-lg hover:shadow-xl transition-all"
                  >
                    {/* glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity
                                    bg-linear-to-br from-blue-500/30 to-cyan-500/30 blur-md"
                    />

                    <BiLogoLinkedin className="relative h-6 w-6 text-foreground/80 group-hover:text-white transition-colors" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Animated Profile Image */}
            <div className="hidden xl:flex flex-1 relative justify-center items-center">
              <div className="relative w-125 h-125">
                {/* Rotating gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, #8b5cf6 25%, #ec4899 50%, #6366f1 75%, transparent 100%)",
                    filter: "blur(20px)",
                    opacity: 0.6,
                  }}
                />

                {/* Pulsing rings */}
                {[1, 2, 3].map(
                  (
                    ring // repeat for 3 rings
                  ) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: ring * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  )
                )}

                {/* Inner glowing circle */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-12 rounded-full bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl"
                />

                {/* Image container with glassmorphism */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="absolute inset-16 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                  }}
                >
                  <Image
                    src={profileImg}
                    alt="Profile"
                    fill
                    className="object-contain scale-130"
                    quality={100}
                  />
                </motion.div>

                {/* Floating geometric shapes */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-20 h-20 border-2 border-purple-500/30 rounded-lg backdrop-blur-sm"
                />

                <motion.div
                  animate={{
                    rotate: [0, -360],
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-pink-500/30 rounded-full backdrop-blur-sm"
                />

                {/* Spotlight effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.3), transparent 60%)",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;
