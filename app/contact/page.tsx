"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    setIsSending(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        toast.info("Message sent successfully!");
        form.reset();
      }
    } catch {
      return toast.error("Failed to send message!");
    } finally {
      setTimeout(() => {
        setIsSending(false);
        setIsSuccess(false);
      }, 2000);
    }
  };

  const handleDisableWhileSending = () => {
    if (isSending || isSuccess) {
      return true;
    }
    return false;
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden font-mono">
      <ToastContainer position="top-center" theme="dark" toastClassName="bg-black/80 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl font-mono" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-500/8 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-emerald-500/8 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-violet-950/20 to-transparent blur-3xl pointer-events-none z-0"
      />

      <section className="relative z-10 mx-auto max-w-3xl px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-md" />
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase relative z-10 font-mono">
              <span className="text-emerald-400">&lt;</span>Contact<span className="text-emerald-400">/&gt;</span>
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg pb-2 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-400">Get in Touch</span>
          </h1>
          <p className="text-muted-foreground/80 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={handleFormSubmission}
          className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group/form"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.03] via-transparent to-violet-500/[0.03] pointer-events-none" />

          <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <div className="ml-auto text-xs text-white/30 font-mono">contact.tsx</div>
          </div>

          <div className="space-y-6 relative z-10 mt-4">
            <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/30 to-transparent" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-cyan-400 tracking-wide ml-4 font-mono flex items-center gap-2">
                  <span className="text-violet-400">{">"}</span>
                  <span>name</span>
                  <span className="text-emerald-400">:</span>
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur opacity-0 group-focus-within:opacity-50 transition duration-300" />
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="your_name"
                    disabled={isSending}
                    className="relative w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all font-mono focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-cyan-400 tracking-wide ml-4 font-mono flex items-center gap-2">
                  <span className="text-violet-400">{">"}</span>
                  <span>email</span>
                  <span className="text-emerald-400">:</span>
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur opacity-0 group-focus-within:opacity-50 transition duration-300" />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="email@example.com"
                    disabled={isSending}
                    className="relative w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all font-mono focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-cyan-400 tracking-wide ml-4 font-mono flex items-center gap-2">
                <span className="text-violet-400">{">"}</span>
                <span>message</span>
                <span className="text-emerald-400">:</span>
              </label>
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur opacity-0 group-focus-within:opacity-50 transition duration-300" />
                <textarea
                  name="message"
                  rows={5}
                  placeholder={`// Write your message here...`}
                  disabled={isSending}
                  className="relative w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 resize-none transition-all font-mono focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <button
              type="submit"
              ref={buttonRef}
              disabled={handleDisableWhileSending()}
              className={`relative w-full cursor-pointer overflow-hidden rounded-lg py-4 font-bold tracking-wide transition-all mt-2 flex items-center justify-center gap-3 font-mono
                ${isSending
                  ? "bg-white/5 border border-white/10 cursor-not-allowed"
                  : isSuccess
                    ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-400"
                    : "bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 border border-transparent"
                }`}
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-white/60">Sending...</span>
                </>
              ) : isSuccess ? (
                <>
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <span className="text-lg">{">"}</span>
                  <span>Send Message</span>
                  <span className="text-lg">{"->"}</span>
                </>
              )}
            </button>

            <div className="text-center text-xs text-white/30 font-mono">
              <span className="text-cyan-400/60">const</span> responseTime = <span className="text-yellow-400/60">&quot;usually within 24h&quot;</span>
            </div>
          </div>
        </motion.form>
      </section>
    </main>
  );
};

export default ContactPage;