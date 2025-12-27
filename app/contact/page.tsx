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
    <main className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Toastify */}
      <ToastContainer position="top-center" theme="light" />

      {/* Subtle animated background */}
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-linear-to-br from-blue-200/30 via-purple-200/30 to-pink-200/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-gray-900 blur-3xl"
      />

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-2xl px-6 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto">
            Whether you have a question, opportunity, or just want to connect —
            feel free to send a message.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={handleFormSubmission}
          className="rounded-2xl border border-zinc-500 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 shadow-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Write your message here..."
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Due to no custom domain, this part is for demonstration purposes only! */}
          <button
            type="button"
            className={`w-full cursor-pointer active:scale-95 rounded-lg py-3 font-semibold transition active:scale-[0.98]
              ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
              }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </section>
    </main>
  );
};

export default ContactPage;
