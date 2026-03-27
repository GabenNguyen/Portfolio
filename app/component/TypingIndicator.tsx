"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start mb-4"
    >
      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center shadow-sm">
        {/* Dot 1 */}
        <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        {/* Dot 2 */}
        <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        {/* Dot 3 */}
        <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce"></span>
        
        <span className="sr-only">AI is thinking...</span>
      </div>
    </motion.div>
  );
}