"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BsDownload } from "react-icons/bs";

import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

function NavBar() {
  const pathname = usePathname();
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
      "rounded-sm px-1 py-1 text-sm underline-offset-8 transition-colors duration-150",
      isActive
        ? "font-semibold text-foreground underline decoration-primary decoration-2"
        : "text-muted-foreground hover:text-foreground hover:underline"
    );

  return (
    <header ref={root} className="sticky top-0 z-50 border-b border-foreground/15 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <Link href="/" className="nav-item text-lg font-bold tracking-tight md:text-xl" onClick={() => setMenuOpen(false)}>
          Gaben<span className="text-primary">.</span>Nguyen
        </Link>

        {/* Links (desktop) */}
        <nav aria-label="Main" className="nav-item hidden items-center gap-7 md:flex">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link key={label} href={href} aria-current={isActive ? "page" : undefined} className={linkClass(isActive)}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right section */}
        <div className="nav-item flex items-center gap-3">
          <a
            href="/Resume_Ba_Hoa_NGUYEN_New.pdf"
            download
            className="hidden items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:-translate-y-px active:translate-y-0 active:scale-95 sm:flex"
          >
            <BsDownload className="h-4 w-4" aria-hidden />
            CV
          </a>

          <ModeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-foreground/15 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "border-b border-foreground/10 py-3 text-base last:border-b-0",
                    isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="/Resume_Ba_Hoa_NGUYEN_New.pdf"
              download
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground sm:hidden"
            >
              <BsDownload className="h-4 w-4" aria-hidden />
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
