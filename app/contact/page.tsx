"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const root = useRef<HTMLElement>(null);

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

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-hero > *", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
        });
        gsap.from(".contact-form", {
          opacity: 0,
          y: 28,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".contact-hero > *, .contact-form", { opacity: 1, y: 0 });
      });
    },
    { scope: root }
  );

  return (
    <main ref={root} className="relative min-h-screen overflow-hidden bg-background text-foreground font-mono">
      <ToastContainer position="top-center" theme="dark" toastClassName="bg-black/80 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl font-mono" />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-500/8 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] h-[30%] w-[30%] rounded-full bg-sky-500/8 blur-[100px]" />
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-3xl px-6 py-32">
        <div className="contact-hero mb-14 text-center">
          <div className="relative mb-6 inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-2 backdrop-blur-md">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-indigo-500/10 blur-md" />
            <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest text-blue-400">
              <span className="text-emerald-400">&lt;</span>Contact<span className="text-emerald-400">/&gt;</span>
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-6xl lg:text-7xl">
            <span className="bg-linear-to-r from-blue-400 via-white to-indigo-400 bg-clip-text text-transparent">Get in Touch</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-muted-foreground/80 md:text-xl">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </div>

        <form
          onSubmit={handleFormSubmission}
          className="contact-form relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-2xl sm:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-blue-500/[0.03] via-transparent to-indigo-500/[0.03]" />

          <div className="absolute top-0 left-0 right-0 flex h-10 items-center gap-2 bg-white/5 px-4">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
            <div className="ml-auto font-mono text-xs text-white/30">contact.tsx</div>
          </div>

          <div className="relative z-10 mt-4 space-y-6">
            <div className="absolute -left-3 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/30 via-indigo-500/30 to-transparent" />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="ml-4 flex items-center gap-2 font-mono text-sm font-semibold tracking-wide text-blue-400">
                  <span className="text-indigo-400">{">"}</span>
                  <span>name</span>
                  <span className="text-emerald-400">:</span>
                </label>
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-linear-to-r from-blue-500/20 to-indigo-500/20 opacity-0 blur transition duration-300 group-focus-within:opacity-50" />
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="your_name"
                    disabled={isSending}
                    className="relative w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 font-mono transition-all focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="ml-4 flex items-center gap-2 font-mono text-sm font-semibold tracking-wide text-blue-400">
                  <span className="text-indigo-400">{">"}</span>
                  <span>email</span>
                  <span className="text-emerald-400">:</span>
                </label>
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-linear-to-r from-blue-500/20 to-indigo-500/20 opacity-0 blur transition duration-300 group-focus-within:opacity-50" />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="email@example.com"
                    disabled={isSending}
                    className="relative w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 font-mono transition-all focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="ml-4 flex items-center gap-2 font-mono text-sm font-semibold tracking-wide text-blue-400">
                <span className="text-indigo-400">{">"}</span>
                <span>message</span>
                <span className="text-emerald-400">:</span>
              </label>
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-lg bg-linear-to-r from-blue-500/20 to-indigo-500/20 opacity-0 blur transition duration-300 group-focus-within:opacity-50" />
                <textarea
                  name="message"
                  rows={5}
                  placeholder={`// Write your message here...`}
                  disabled={isSending}
                  className="relative w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 font-mono transition-all focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={handleDisableWhileSending()}
              className={`relative mt-2 flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg py-4 font-bold tracking-wide font-mono transition-all
                ${isSending
                  ? "cursor-not-allowed border border-white/10 bg-white/5"
                  : isSuccess
                    ? "border border-emerald-500/50 bg-emerald-500/20 text-emerald-400"
                    : "border border-transparent bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
                }`}
            >
              {isSending ? (
                <>
                  <svg className="h-5 w-5 animate-spin text-white/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

            <div className="text-center font-mono text-xs text-white/30">
              <span className="text-blue-400/60">const</span> responseTime = <span className="text-yellow-400/60">&quot;usually within 24h&quot;</span>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
