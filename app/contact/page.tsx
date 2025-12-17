"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);

  // form submission part
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
        toast.info("Successfully send your message!");
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
      {/* Toastify part */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Animated background blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-linear-to-br from-blue-400 to-purple-400 opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-linear-to-br from-pink-400 to-orange-400 opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-linear-to-br from-green-400 to-emerald-400 opacity-25 blur-3xl"
      />

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Contact Me
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-lg mx-auto">
            Have a project, question, or just want to say hi? Fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
          onSubmit={handleFormSubmission}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
                Name
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows={6}
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`cursor-pointer active:scale-95 mt-6 w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition 
                      ${
                        isSending
                          ? "bg-gray-400"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
          >
            {isSending ? "Sending your message..." : "Send message"}
          </button>
        </motion.form>
      </section>
    </main>
  );
};

export default ContactPage;
