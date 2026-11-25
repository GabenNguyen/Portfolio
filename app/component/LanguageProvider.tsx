"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionaries, type Key, type Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: Key) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    if (saved === "en" || saved === "vi") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: (key) => dictionaries[locale][key] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
