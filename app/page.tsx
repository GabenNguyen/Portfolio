"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/avatar.png";
import { portfolioData } from "@/config/portfolio-data";
import { useI18n } from "@/app/component/LanguageProvider";

const { skills, projects, contact } = portfolioData;
const [featured, second] = projects;

const HomePage = () => {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const revealItems = gsap.utils.toArray<HTMLElement>(".showcase, dl > div");

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-role", { opacity: 0, y: 14, duration: 0.45 })
          .from(".hero-title", { opacity: 0, y: 22, duration: 0.65 }, "-=0.25")
          .from(".hero-lede", { opacity: 0, y: 14, duration: 0.5 }, "-=0.4")
          .from(".hero-bio", { opacity: 0, y: 14, duration: 0.5 }, "-=0.35")
          .from(".hero-meta", { opacity: 0, y: 14, duration: 0.5 }, "-=0.35")
          .from(".hero-cta", { opacity: 0, y: 14, duration: 0.5 }, "-=0.35")
          .from(".hero-portrait", { opacity: 0, y: 20, duration: 0.7 }, "-=0.65");

        // Slow drift as the portrait leaves the viewport — transform only.
        gsap.to(".hero-portrait", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: ".hero-portrait", start: "top top", end: "bottom top", scrub: 0.6 },
        });

        // One staggered reveal per group of incoming work/stack rows.
        gsap.set(revealItems, { opacity: 0, y: 20 });
        ScrollTrigger.batch(revealItems, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", overwrite: true }),
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".hero-role, .hero-title, .hero-lede, .hero-bio, .hero-meta, .hero-cta, .hero-portrait", {
          opacity: 1,
          y: 0,
        });
        gsap.set(revealItems, { clearProps: "opacity,transform" });
      });
    },
    { scope: root }
  );

  return (
    <main id="main" ref={root} className="min-h-screen text-foreground">
      <div className="border-b border-foreground/15">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <span className="mono-meta">{t("home.portfolioLabel")}</span>
          <span className="mono-meta flex items-center gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
            {t("home.available")}
          </span>
        </div>
      </div>

      {/* Compact intro — the work starts immediately below */}
      <section data-scroll-theme="light" className="mx-auto w-full max-w-6xl px-4 pt-12 pb-14 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <p className="hero-role mono-meta">{t("home.role")}</p>
            <h1 className="hero-title mt-3 text-[clamp(2.75rem,5vw_+_1rem,4.5rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
              Ba Hoa Nguyen<span className="text-primary">.</span>
            </h1>
            <p className="hero-lede mt-5 max-w-[52ch] font-display text-xl leading-snug font-medium sm:text-2xl">
              {t("home.lede")}
            </p>
            <p className="hero-bio mt-4 max-w-[62ch] text-base leading-[1.7] text-muted-foreground">
              {t("home.bio")}
            </p>
            <div className="hero-meta mt-7 flex flex-wrap gap-2">
              <span className="chip">{t("common.degree")}</span>
              <span className="chip">Adelaide University</span>
              <span className="chip">{t("common.location")}</span>
            </div>
            <div className="hero-cta mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/project">
                <Button size="lg" className="group h-12 w-full cursor-pointer gap-2.5 px-7 text-base font-semibold sm:w-auto">
                  {t("common.viewProjects")}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full cursor-pointer gap-2.5 border-foreground/25 bg-transparent px-7 text-base font-semibold hover:border-foreground/50 sm:w-auto"
                >
                  {t("common.getInTouch")}
                  <Mail className="h-4 w-4" aria-hidden />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-portrait lg:col-span-4">
            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[18rem] border border-foreground/15 p-1.5 lg:max-w-none">
              <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-t border-l border-primary" aria-hidden />
              <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-t border-r border-primary" aria-hidden />
              <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-primary" aria-hidden />
              <span className="pointer-events-none absolute -right-px -bottom-px h-3 w-3 border-r border-b border-primary" aria-hidden />
              <div className="relative h-full w-full overflow-hidden bg-secondary">
                <Image
                  src={profileImg}
                  alt="Portrait of Ba Hoa Nguyen"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 28vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <figcaption className="mono-meta mt-2">Ba Hoa Nguyen / Adelaide</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Work — the main event */}
      <section data-scroll-theme="dark" className="border-t border-foreground/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="showcase">
            <p className="mono-meta">{t("home.featured")}</p>
            <div className="mt-3 flex items-end justify-between gap-6">
              <h2 className="text-3xl font-semibold md:text-4xl">{t("home.whatShipped")}</h2>
              <Link
                href="/project"
                className="group hidden items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline sm:flex"
              >
                {t("common.allProjects")}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Featured project: text on one side, real schematic on the other */}
          <article className="panel showcase mt-8 grid overflow-hidden lg:grid-cols-12">
            <div className="border-b border-foreground/15 p-6 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="mono-meta tabular-nums">01 / 02</span>
                <span className="mono-meta">{t("common.shipped")}</span>
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{featured.name}</h3>
              <p className="mt-4 max-w-[58ch] text-base leading-[1.7] text-muted-foreground">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {t("common.viewSource")}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>

            <div className="p-6 lg:col-span-5 lg:p-8">
              <p className="mono-meta">{t("home.schematic")}</p>
              <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <div className="flow-node flex flex-1 flex-col">
                  <span>{t("home.flow.resume")}</span>
                  <span className="mono-meta mt-1">{t("home.flow.zeroLogin")}</span>
                </div>
                <span className="text-center font-mono text-primary sm:text-left" aria-hidden>→</span>
                <div className="flow-node flex flex-1 flex-col">
                  <span>{t("home.flow.analysis")}</span>
                  <span className="mono-meta mt-1">{t("home.flow.under5s")}</span>
                </div>
                <span className="text-center font-mono text-primary sm:text-left" aria-hidden>→</span>
                <div className="flow-node flex flex-1 flex-col">
                  <span>{t("home.flow.feedback")}</span>
                  <span className="mono-meta mt-1">{t("home.flow.strengths")}</span>
                </div>
              </div>
              <p className="mono-meta mt-5">{t("home.flow.caption")}</p>
            </div>
          </article>

          {/* Second shipped project */}
          <article className="panel showcase mt-4 p-6 lg:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-[64ch]">
                <div className="flex items-center gap-3">
                  <span className="mono-meta tabular-nums">02 / 02</span>
                  <span className="mono-meta">{t("common.shipped")}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{second.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {second.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {second.tech.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
              </div>
              <a
                href={second.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {t("common.viewSource")}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </article>

          <Link
            href="/project"
            className="panel showcase mt-4 flex items-center justify-between gap-4 p-6 transition-colors hover:bg-secondary/40 lg:p-8"
          >
            <span>
              <span className="mono-meta">{t("common.index")}</span>
              <span className="mt-1 block font-display text-xl font-semibold">{t("home.allFour")}</span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          </Link>

          <Link
            href="/project"
            className="group mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline sm:hidden"
          >
            {t("common.allProjects")}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Toolkit */}
      <section data-scroll-theme="light" className="border-t border-foreground/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold md:text-4xl">{t("home.toolkit")}</h2>
            <Link
              href="/about"
              className="group hidden items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline sm:flex"
            >
              {t("common.moreAbout")}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
          </div>

          <dl className="border-t border-foreground/15">
            {(Object.entries(skills) as [string, string[]][]).map(([category, items]) => (
              <div key={category} className="grid gap-3 border-b border-foreground/15 py-5 md:grid-cols-12 md:gap-6">
                <dt className="text-sm font-semibold md:col-span-3 lg:col-span-2">
                  {category === "frontend"
                    ? t("cat.frontend")
                    : category === "backend"
                      ? t("cat.backend")
                      : category === "language"
                        ? t("cat.languages")
                        : t("cat.tools")}
                </dt>
                <dd className="flex flex-wrap gap-2 md:col-span-9 lg:col-span-10">
                  {items.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing */}
      <section data-scroll-theme="dark" className="border-t border-foreground/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-[46ch]">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
              {t("home.closingTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("home.closingBody")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 w-full cursor-pointer px-7 text-base font-semibold sm:w-auto">
                  {t("common.getInTouch")}
                </Button>
              </Link>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
