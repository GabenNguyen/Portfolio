"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

import { ModeToggle } from "./ModeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "./LanguageProvider";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.projects", href: "/project" },
  { key: "nav.contact", href: "/contact" },
] as const;

function NavBar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = String(Math.max(1, navItems.findIndex((item) => item.href === pathname) + 1)).padStart(2, "0");

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useGSAP(
    () => {
      gsap.from(".nav-item", {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.05,
        delay: 0.05,
      });
    },
    { scope: root }
  );

  const linkClass = (isActive: boolean) =>
    cn(
      "inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-1 py-1 text-sm underline-offset-8 transition-colors duration-150",
      isActive
        ? "font-semibold text-foreground underline decoration-primary decoration-2"
        : "text-muted-foreground hover:text-foreground hover:underline"
    );

  const itemIndex = (index: number, isActive: boolean) => (
    <span
      className={cn(
        "font-mono text-[10px] leading-none tabular-nums",
        isActive ? "text-primary" : "text-muted-foreground/60"
      )}
      aria-hidden
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );

  return (
    <header ref={root} className="sticky top-0 z-50 border-b border-foreground/15 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        {/* Wordmark with live route index */}
        <div className="nav-item flex items-center gap-3 md:gap-5">
          <span className="mono-meta hidden tabular-nums md:inline" aria-hidden>
            {activeIndex}<span className="text-primary"> /</span>
          </span>
          <Link
            href="/"
            className="font-display text-base font-semibold tracking-tight sm:text-lg md:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Gaben<span className="text-primary">.</span>Nguyen
          </Link>
        </div>

        {/* Desktop index */}
        <nav aria-label={t("nav.main")} className="nav-item hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map(({ key, href }, index) => {
            const isActive = pathname === href;
            return (
              <Link key={key} href={href} aria-current={isActive ? "page" : undefined} className={linkClass(isActive)}>
                {itemIndex(index, isActive)}
                {t(key)}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="nav-item flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center rounded-md border border-border px-1 py-0.5 sm:flex">
            <LanguageToggle />
          </div>
          <ModeToggle />
          <a
            href="/Resume_Ba_Hoa_NGUYEN_New.pdf"
            download
            className="hidden items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-[background-color,transform] duration-150 hover:bg-primary/90 active:scale-[0.96] sm:flex"
          >
            <Download className="h-4 w-4" aria-hidden />
            CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-[background-color,transform] duration-150 hover:bg-secondary active:scale-[0.96] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile disclosure */}
      {menuOpen && (
        <nav id="mobile-nav" aria-label={t("nav.main")} className="border-t border-foreground/15 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navItems.map(({ key, href }, index) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center gap-3 border-b border-foreground/10 text-base last:border-b-0",
                    isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {itemIndex(index, isActive)}
                  {t(key)}
                </Link>
              );
            })}
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-foreground/15 pt-3">
              <span className="mono-meta">{t("common.language")}</span>
              <LanguageToggle />
            </div>
            <a
              href="/Resume_Ba_Hoa_NGUYEN_New.pdf"
              download
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-3.5 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-[background-color,transform] duration-150 hover:bg-primary/90 active:scale-[0.96]"
            >
              <Download className="h-4 w-4" aria-hidden />
              {t("nav.downloadCv")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
