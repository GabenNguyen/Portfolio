"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Cpu } from "lucide-react";
import { toast } from "react-toastify";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export default function AIChatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      text: "Hi there! I'm Gaben's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isThinking) return;
    setIsThinking(true);

    try {

      const userMessage: Message = {
        id: crypto.randomUUID(),
        text: inputValue,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");

      const response = await fetch("/api/GenerateAnswer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage.text })
        });

      const answer = await response.json();

      if(!response.ok) {
        const errorMessage: Message = {
        id: crypto.randomUUID(),
        text: answer.outputData || "Something went wrong. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
        setMessages((prev) => [...prev, errorMessage]);
        return;
      }

      const botResponse: Message = {
        id: crypto.randomUUID(),
        text: answer.outputData,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [... prev, botResponse]);

    } catch (err) {
      console.error(err);
      return toast.error("Error generating the answer!")
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              mass: 0.8
            }}
            className="absolute bottom-full right-0 mb-4 flex h-[500px] w-80 flex-col overflow-hidden rounded-2xl border border-blue-500/30 bg-zinc-950 shadow-2xl sm:w-96"
            style={{
              boxShadow: "0 0 40px rgba(37, 99, 235, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-indigo-500/5" />

            {/* Header */}
            <div className="relative flex items-center justify-between overflow-hidden border-b border-blue-500/20 bg-zinc-900/80 px-4 py-4 backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-blue-500/10 to-indigo-500/10" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-green-500 animate-pulse" />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                    AI Assistant
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/20 px-1.5 py-0.5 text-[10px] text-blue-400">ONLINE</span>
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-zinc-400">
                    <Cpu className="h-3 w-3" />
                    Ready to assist
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="group relative z-10 cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-zinc-800"
                aria-label="Close chat"
              >
                <X className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-white" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent p-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                      msg.sender === "user"
                        ? "rounded-tr-sm bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                        : "rounded-tl-sm border border-zinc-700/50 bg-zinc-800/80 text-zinc-100 backdrop-blur-sm"
                      }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isThinking && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="relative border-t border-blue-500/20 bg-zinc-900/80 p-4 backdrop-blur-xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 pr-14 text-sm text-white placeholder-zinc-500 backdrop-blur-sm transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isThinking}
                  className="absolute right-1.5 cursor-pointer rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 p-2.5 text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="pointer-events-none absolute top-0 left-0 h-16 w-16">
              <div className="absolute top-3 left-3 h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              <div className="absolute top-3 left-6 h-1 w-1 rounded-full bg-blue-400/50" />
              <div className="absolute top-6 left-3 h-1 w-1 rounded-full bg-blue-400/50" />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16">
              <div className="absolute bottom-3 right-3 h-2 w-2 animate-pulse rounded-full bg-indigo-500" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-3 right-6 h-1 w-1 rounded-full bg-indigo-400/50" />
              <div className="absolute bottom-6 right-3 h-1 w-1 rounded-full bg-indigo-400/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition-all"
        style={{
          boxShadow: "0 8px 32px rgba(37, 99, 235, 0.4), 0 0 0 0 rgba(37, 99, 235, 0.5)",
        }}
        aria-label="Toggle chat"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 to-transparent" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-xl bg-blue-400/30 opacity-75" />
        )}
      </motion.button>
    </div>
  );
}
