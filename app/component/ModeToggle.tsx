"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useI18n } from "./LanguageProvider";

const options = [
  { value: "light", key: "theme.light", icon: Sun },
  { value: "dark", key: "theme.dark", icon: Moon },
  { value: "system", key: "theme.system", icon: Monitor },
] as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  // next-themes reads storage on first client render; keep SSR attributes stable.
  useEffect(() => setMounted(true), []);

  const isActive = (value: string) => mounted && theme === value;

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-input p-0.5" role="group" aria-label={t("theme.label")}>
      {options.map(({ value, key, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-pressed={isActive(value)}
          aria-label={t(key)}
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-sm transition-[background-color,color,transform] duration-150 active:scale-[0.96] sm:h-7 sm:w-7",
            isActive(value)
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </button>
      ))}
    </div>
  );
}
