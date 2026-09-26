"use client";

import { useLang } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      className="text-xs font-semibold text-steel-light border border-steel-light/30 rounded-full px-3 py-1.5 hover:bg-surface hover:text-electric transition-all duration-300"
      aria-label={`Switch to ${t.lang.switch}`}
    >
      {t.lang.switch}
    </button>
  );
}