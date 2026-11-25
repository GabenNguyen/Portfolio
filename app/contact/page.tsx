"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { toast } from "react-toastify";
import { Send, Check, Loader2 } from "lucide-react";
import { portfolioData } from "@/config/portfolio-data";
import { useI18n } from "@/app/component/LanguageProvider";

const { contact } = portfolioData;

const contactDetails = [
  { key: "contact.email" as const, value: contact.email, href: `mailto:${contact.email}` },
  { key: "contact.phone" as const, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { key: "contact.location" as const, value: contact.location, href: null },
  { label: "GitHub", value: "GabenNguyen", href: contact.github },
  { label: "LinkedIn", value: "bahoanguyen", href: contact.linkedin },
];

const ContactPage = () => {
  const { t } = useI18n();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const root = useRef<HTMLElement>(null);

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    setIsSending(true);
    setIsSuccess(false);

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
        form.reset();
      } else {
        toast.error(t("contact.error"));
      }
    } catch {
      toast.error(t("contact.error"));
    } finally {
      setIsSending(false);
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
    <main id="main" ref={root} data-scroll-theme="light" className="min-h-screen text-foreground">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Header */}
        <div className="contact-hero max-w-[46ch]">
          <h1 className="text-[clamp(2.75rem,5vw_+_1rem,4.5rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
            {t("contact.title")}
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-[1.7] text-muted-foreground md:text-lg">
            {t("contact.lede")}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <form
            onSubmit={handleFormSubmission}
            onChange={() => isSuccess && setIsSuccess(false)}
            className="contact-form lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-semibold">
                  {t("contact.name")}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  placeholder={t("contact.namePlaceholder")}
                  disabled={isSending}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-semibold">
                  {t("contact.email")}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder={t("contact.emailPlaceholder")}
                  disabled={isSending}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-semibold">
                {t("contact.message")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={7}
                required
                placeholder={t("contact.messagePlaceholder")}
                disabled={isSending}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`mt-7 flex h-12 w-full items-center justify-center gap-2.5 rounded-md px-6 text-base font-semibold transition-[color,background-color,border-color,transform] duration-150 sm:w-auto ${
                isSubmitDisabled
                  ? "cursor-not-allowed bg-secondary text-muted-foreground"
                  : "bg-primary text-primary-foreground hover:-translate-y-px active:translate-y-0 active:scale-95"
              }`}
            >
              {isSending ? (
                <>
                  <Loader2 className="h-4.5 w-4.5 animate-spin" aria-hidden />
                  {t("contact.sending")}
                </>
              ) : isSuccess ? (
                <>
                  <Check className="h-4.5 w-4.5" aria-hidden />
                  {t("contact.sent")}
                </>
              ) : (
                <>
                  {t("contact.send")}
                  <Send className="h-4.5 w-4.5" aria-hidden />
                </>
              )}
            </button>

            <p role="status" aria-live="polite" className="mt-4 text-sm text-muted-foreground">
              {isSuccess ? t("contact.sentReply") : t("contact.reply")}
            </p>
          </form>

          {/* Details */}
          <aside className="contact-details lg:col-span-5">
            <dl className="border-t border-foreground/15">
              {contactDetails.map((item) => {
                const key = "key" in item ? item.key : undefined;
                const label = key ? t(key) : item.label;
                const href = item.href;
                return (
                  <div key={label} className="grid grid-cols-3 gap-4 border-b border-foreground/15 py-4">
                    <dt className="text-sm font-semibold">{label}</dt>
                    <dd className="col-span-2 font-mono text-sm tabular-nums text-muted-foreground">
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="break-all underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
