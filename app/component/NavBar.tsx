"use client";
import { useRef } from "react";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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

  useGSAP(
    () => {
      gsap.from(".nav-item", {
        opacity: 0,
        y: -16,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.1,
      });
    },
    { scope: root }
  );

  return (
    <nav
      ref={root}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-2xl border border-black/10 bg-white/70 px-3 py-2 backdrop-blur-xl shadow-sm transition-colors dark:border-white/10 dark:bg-black/50 sm:px-4"
    >
      <div className="mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="nav-item group flex items-center space-x-2">
          <span className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 md:text-xl">
            Gaben<span className="text-blue-500">.</span>NGUYEN
          </span>
        </Link>

        {/* Navigation Links */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-1">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <NavigationMenuItem key={label} className="nav-item">
                  <NavigationMenuLink asChild>
                    <Link
                      href={href}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-300"
                          : "text-muted-foreground hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
                      )}
                    >
                      {label}
                      {isActive && (
                        <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section: Mode Toggle + Download CV button */}
        <div className="nav-item flex items-center gap-2 sm:gap-3">
          <a
            href="/Resume_Ba_Hoa_NGUYEN_New.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-primary px-3 py-2 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 active:scale-95 sm:px-4 cursor-pointer"
          >
            <BsDownload className="h-4 w-4" />
            <span className="hidden text-sm sm:inline">CV</span>
          </a>

          <div className="flex items-center justify-center rounded-full border border-black/10 bg-black/5 p-0.5 transition-colors hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
