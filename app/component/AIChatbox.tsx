"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
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
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{
              type: "spring",
              damping: 22,
              stiffness: 300,
              mass: 0.8
            }}
            className="absolute right-0 bottom-full mb-4 flex h-[480px] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg border border-foreground/15 bg-card shadow-2xl sm:w-96"
            role="dialog"
            aria-label="AI assistant chat"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-foreground/15 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Ask my AI assistant</h3>
                  <p className="text-xs text-muted-foreground">Trained on Gaben&apos;s portfolio</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-md p-2 transition-colors hover:bg-secondary"
                aria-label="Close chat"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-secondary text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isThinking && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-foreground/15 p-3">
              <div className="relative flex items-center">
                <label htmlFor="chat-input" className="sr-only">
                  Ask a question
                </label>
                <input
                  id="chat-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full rounded-md border border-input bg-background py-2.5 pr-12 pl-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isThinking}
                  aria-label="Send message"
                  className="absolute right-1.5 cursor-pointer rounded-md bg-primary p-2 text-primary-foreground transition-transform duration-150 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-13 w-13 cursor-pointer items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg transition-shadow"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.12 }}
            >
              <X className="h-5.5 w-5.5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.12 }}
            >
              <MessageSquare className="h-5.5 w-5.5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
