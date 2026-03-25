"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);

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
        toast.info("Successfully sent your message!");
        form.reset();
      }
    } catch {
      return toast.error("Failed to send your message!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Toastify */}
      <ToastContainer position="top-center" theme="dark" toastClassName="bg-black/80 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl" />

      {/* Abstract Glowing Background matching Landing Page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-pink-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent blur-3xl pointer-events-none z-0"
      />

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-32 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-md" />
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase relative z-10">Contact Me</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg pb-2">
            Get in Touch
          </h1>
          <p className="text-muted-foreground/90 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Whether you have a question, opportunity, or just want to connect —
            feel free to send a message.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={handleFormSubmission}
          className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group/form"
        >
          {/* Subtle reflection overlay inside form container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] to-transparent pointer-events-none" />

          <div className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-black dark:text-white tracking-wide ml-1">
                  Name
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500" />
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="relative w-full rounded-xl border border-black  px-5 py-4 text-sm text-foreground placeholder-gray-500 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-black dark:text-white tracking-wide ml-1">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500" />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="relative w-full rounded-xl border border-black px-5 py-4 text-sm text-foreground placeholder-gray-500 transition-all shadow-inner"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-black dark:text-white tracking-wide ml-1">
                Message
              </label>
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500" />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="relative w-full rounded-xl border border-black px-5 py-4 text-sm text-foreground placeholder-gray-500 resize-none transition-all shadow-inner"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`relative w-full cursor-pointer overflow-hidden rounded-xl py-4 font-bold tracking-wide transition-all active:scale-[0.98] mt-4 flex items-center justify-center group/btn border border-white/10
                ${isSending
                  ? "bg-white/10 text-gray-400 cursor-not-allowed border-transparent"
                  : "text-white bg-blue-600"
                }`}
            >
              <div className="absolute inset-0 hover:bg-white/30 active:translate-y-95 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </span>
            </button>
          </div>
        </motion.form>
      </section>
    </main>
  );
};

export default ContactPage;
