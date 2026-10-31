"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { MoveUpRight, FolderOpen, FileUser, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/avatar.png";
import { portfolioData } from "@/config/portfolio-data";

/* Honest facts drawn from the site's own content (about page + projects) */
const facts = [
  { value: "6.18/7.0", label: "GPA, Bachelor of IT" },
  { value: "2", label: "AI products shipped" },
  { value: "2027", label: "Expected graduation" },
  { value: "Open", label: "To internships & grad roles" },
];

const HomePage = () => {
  const { skills, projects } = portfolioData;
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // One orchestrated entrance for the hero
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-greeting", { opacity: 0, y: 16, duration: 0.5 })
          .from(".hero-title", { opacity: 0, y: 24, duration: 0.7 }, "-=0.25")
          .from(".hero-role", { opacity: 0, y: 16, duration: 0.5 }, "-=0.4")
          .from(".hero-bio", { opacity: 0, y: 16, duration: 0.5 }, "-=0.35")
          .from(".hero-meta", { opacity: 0, y: 16, duration: 0.5 }, "-=0.35")
          .from(".hero-cta", { opacity: 0, y: 16, duration: 0.5 }, "-=0.35")
          .from(".hero-portrait", { opacity: 0, y: 24, duration: 0.8 }, "-=0.7");

        // Scroll reveals for the sections below
        gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".hero-greeting, .hero-title, .hero-role, .hero-bio, .hero-meta, .hero-cta, .hero-portrait, .stagger-item",
          { opacity: 1, y: 0 }
        );
      });
    },
    { scope: root }
  );

  return (
    <main id="main" ref={root} className="min-h-screen text-foreground">

      {/* HERO — the letter opening */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="hero-greeting text-base font-medium text-muted-foreground">Hi, I&apos;m</p>

            <h1 className="hero-title mt-2 text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-[4.5rem]">
              Ba Hoa Nguyen
            </h1>

            <p className="hero-role mt-5 text-xl text-muted-foreground sm:text-2xl">
              IT student building <span className="font-semibold text-foreground">web and AI applications</span>.
            </p>

            <p className="hero-bio mt-6 max-w-[62ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m a sophomore at{" "}
              <span className="font-semibold text-foreground">Adelaide University</span>, with a grounding in
              object-oriented programming and data-driven web applications. Outside class I build performant,
              user-friendly products with Next.js, React and AI APIs.
            </p>

            <ul className="hero-meta mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <li>Bachelor of IT, Adelaide University</li>
              <li aria-hidden className="hidden sm:block">·</li>
              <li>Para Hills, South Australia</li>
              <li aria-hidden className="hidden sm:block">·</li>
              <li className="text-foreground">Available for internships and graduate roles</li>
            </ul>

            <div className="hero-cta mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/project">
                <Button
                  size="lg"
                  className="group h-12 w-full cursor-pointer gap-2.5 px-7 text-base font-semibold sm:w-auto"
                >
                  View projects
                  <FolderOpen className="h-4.5 w-4.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-12 w-full cursor-pointer gap-2.5 border-foreground/25 bg-transparent px-7 text-base font-semibold hover:border-foreground/50 sm:w-auto"
                >
                  About me
                  <FileUser className="h-4.5 w-4.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="hero-portrait lg:col-span-5">
            <figure className="relative mx-auto aspect-4/5 w-full max-w-sm border border-foreground/15 p-1.5 lg:max-w-none">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={profileImg}
                  alt="Portrait of Ba Hoa Nguyen"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 34vw"
                  className="object-cover object-[center_20%]"
                  quality={90}
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* FACTS BAND */}
      <section className="border-y border-foreground/15">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {facts.map(({ value, label }, i) => (
            <div
              key={label}
              className={`stagger-item py-8 pr-4 ${i % 2 === 1 ? "border-l border-foreground/15 pl-4" : ""} ${
                i >= 2 ? "border-t border-foreground/15 md:border-t-0" : ""
              } ${i === 2 ? "md:border-l md:pl-4" : ""}`}
            >
              <div className="font-display text-3xl font-bold tracking-tight md:text-4xl">{value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="stagger-item mb-10 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold md:text-4xl">Selected work</h2>
          <Link
            href="/project"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline sm:flex"
          >
            All projects
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="border-t border-foreground/15">
          {projects.map((project) => (
            <article
              key={project.name}
              className="stagger-item group border-b border-foreground/15 py-8 transition-colors hover:bg-secondary/40"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
                <div className="max-w-[64ch]">
                  <h3 className="text-2xl font-bold">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {project.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-foreground/20 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground"
                  >
                    Repository
                    <MoveUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/project"
          className="group mt-8 flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline sm:hidden"
        >
          All projects
          <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </section>

      {/* TOOLKIT */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="stagger-item mb-10 text-3xl font-bold md:text-4xl">Toolkit</h2>

          <dl className="border-t border-foreground/15">
            {(Object.entries(skills) as [string, string[]][]).map(([category, items]) => (
              <div
                key={category}
                className="stagger-item grid gap-3 border-b border-foreground/15 py-6 md:grid-cols-12 md:gap-6"
              >
                <dt className="text-sm font-semibold md:col-span-3 lg:col-span-2">
                  {category === "frontend"
                    ? "Frontend"
                    : category === "backend"
                      ? "Backend"
                      : category === "language"
                        ? "Languages"
                        : "Tools"}
                </dt>
                <dd className="flex flex-wrap gap-2 md:col-span-9 lg:col-span-10">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="stagger-item max-w-[46ch]">
            <h2 className="text-4xl font-bold md:text-5xl">Let&apos;s build something together.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Open to internships, collaborations, or a good tech chat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 w-full cursor-pointer px-7 text-base font-semibold sm:w-auto">
                  Get in touch
                </Button>
              </Link>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full cursor-pointer border-foreground/25 bg-transparent px-7 text-base font-semibold hover:border-foreground/50 sm:w-auto"
                >
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
