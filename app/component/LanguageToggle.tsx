"use client";

import { useI18n } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label={t("common.language")}>
      {(["en", "vi"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={`rounded-sm px-1.5 py-1 text-xs font-semibold uppercase transition-[background-color,color,transform] duration-150 active:scale-[0.96] sm:px-2 ${
            locale === option
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
