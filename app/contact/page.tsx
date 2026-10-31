"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { toast } from "react-toastify";
import { Send, Check, Loader2 } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";

const { contact } = portfolioData;

const contactDetails = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { label: "Location", value: contact.location, href: null },
  { label: "GitHub", value: "GabenNguyen", href: contact.github },
  { label: "LinkedIn", value: "bahoanguyen", href: contact.linkedin },
];

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
      } else {
        toast.error("Failed to send message!");
      }
    } catch {
      toast.error("Failed to send message!");
    } finally {
      setTimeout(() => {
        setIsSending(false);
        setIsSuccess(false);
      }, 2000);
    }
  };

  const isSubmitDisabled = isSending || isSuccess;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-hero > *", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        });
        gsap.from(".contact-form, .contact-details", {
          opacity: 0,
          y: 24,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".contact-hero > *, .contact-form, .contact-details", { opacity: 1, y: 0 });
      });
    },
    { scope: root }
  );

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <main id="main" ref={root} className="min-h-screen text-foreground">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Header */}
        <div className="contact-hero max-w-[46ch]">
          <h1 className="text-5xl font-bold md:text-6xl">Get in touch</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Have a project in mind, or a role to fill? Send a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <form onSubmit={handleFormSubmission} className="contact-form lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  disabled={isSending}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  disabled={isSending}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={7}
                required
                placeholder="Write your message here..."
                disabled={isSending}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`mt-7 flex w-full items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-base font-semibold transition-all duration-150 sm:w-auto ${
                isSubmitDisabled
                  ? "cursor-not-allowed bg-secondary text-muted-foreground"
                  : "bg-primary text-primary-foreground hover:-translate-y-px active:translate-y-0 active:scale-95"
              }`}
            >
              {isSending ? (
                <>
                  <Loader2 className="h-4.5 w-4.5 animate-spin" aria-hidden />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="h-4.5 w-4.5" aria-hidden />
                  Message sent
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4.5 w-4.5" aria-hidden />
                </>
              )}
            </button>

            <p className="mt-4 text-sm text-muted-foreground">I usually reply within 24 hours.</p>
          </form>

          {/* Details */}
          <aside className="contact-details lg:col-span-5">
            <dl className="border-t border-foreground/15">
              {contactDetails.map(({ label, value, href }) => (
                <div key={label} className="grid grid-cols-3 gap-4 border-b border-foreground/15 py-4">
                  <dt className="text-sm font-semibold">{label}</dt>
                  <dd className="col-span-2 text-sm text-muted-foreground">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="break-all underline-offset-4 transition-colors hover:text-foreground hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
