"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    opacity: 0,
    x: 40,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // smooth transition
    },
  },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-screen w-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
