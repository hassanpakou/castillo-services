"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full border border-steel-light/30 hover:bg-surface transition-colors"
        aria-label="Toggle theme"
      >
        <span className="w-4 h-4 block" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full border border-steel-light/30 hover:bg-surface transition-all duration-300 group"
      aria-label={isDark ? t.theme.light : t.theme.dark}
      title={isDark ? t.theme.light : t.theme.dark}
    >
      {isDark ? (
        // Icône soleil (pour passer en mode clair)
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-steel group-hover:text-electric transition-colors">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : (
        // Icône lune (pour passer en mode sombre)
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-steel group-hover:text-electric transition-colors">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}