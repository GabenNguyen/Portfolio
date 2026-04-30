"use client";
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
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 transition-all duration-300 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity">
              Gaben NGUYEN
            </span>
          </Link>

          {/* Navigation Links */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-2">
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className={cn(
                          "relative px-4 sm:px-5 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-200",
                          "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10",
                          isActive
                            ? "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-semibold"
                            : "bg-transparent"
                        )}
                      >
                        {label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section: Mode Toggle + Download CV button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Download CV Button */}
              <a
                href="/Resume_Ba_Hoa_NGUYEN_New.pdf"
                download
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold py-2 px-4 sm:py-2.5 sm:px-5 rounded-full transition-colors active:scale-95"
              >
                <BsDownload className="w-4 h-4" />
                <span className="hidden sm:inline text-sm md:text-base">Download CV</span>
                <span className="sm:hidden text-sm">CV</span>
              </a>

              <div className="flex items-center justify-center p-0.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
