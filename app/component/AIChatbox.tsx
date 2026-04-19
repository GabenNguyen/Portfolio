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
            className="absolute bottom-full right-0 mb-4 w-80 sm:w-96 h-[500px] bg-zinc-950 rounded-2xl shadow-2xl border border-cyan-500/30 flex flex-col overflow-hidden relative"
            style={{
              boxShadow: "0 0 40px rgba(6, 182, 212, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            
            {/* Header */}
            <div className="p-4 border-b border-cyan-500/20 bg-zinc-900/80 backdrop-blur-xl flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                    AI Assistant
                    <span className="text-[10px] px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">ONLINE</span>
                  </h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1">
                    <Cpu className="w-3 h-3" />
                    Ready to assist
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 cursor-pointer hover:bg-zinc-800 rounded-lg transition-all duration-200 group relative z-10"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-sm shadow-lg shadow-cyan-500/20"
                        : "bg-zinc-800/80 text-zinc-100 rounded-tl-sm border border-zinc-700/50 backdrop-blur-sm"
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
            <div className="p-4 border-t border-cyan-500/20 bg-zinc-900/80 backdrop-blur-xl relative">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full px-4 py-3 pr-14 bg-zinc-800/80 border border-zinc-700 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isThinking}
                  className="absolute right-1.5 p-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
              <div className="absolute top-3 left-3 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <div className="absolute top-3 left-6 w-1 h-1 bg-cyan-400/50 rounded-full" />
              <div className="absolute top-6 left-3 w-1 h-1 bg-cyan-400/50 rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
              <div className="absolute bottom-3 right-3 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-3 right-6 w-1 h-1 bg-purple-400/50 rounded-full" />
              <div className="absolute bottom-6 right-3 w-1 h-1 bg-purple-400/50 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 text-white rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center transition-all overflow-hidden"
        style={{
          boxShadow: "0 8px 32px rgba(6, 182, 212, 0.4), 0 0 0 0 rgba(6, 182, 212, 0.5)",
        }}
        aria-label="Toggle chat"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-xl animate-ping bg-cyan-400/30 opacity-75" />
        )}
      </motion.button>
    </div>
  );
}