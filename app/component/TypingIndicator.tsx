"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start"
    >
      <div className="bg-zinc-800/80 border border-zinc-700/50 p-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center backdrop-blur-sm">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
            animate={{
              y: [0, -4, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: dot * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
        <span className="sr-only">AI is thinking...</span>
      </div>
    </motion.div>
  );
}