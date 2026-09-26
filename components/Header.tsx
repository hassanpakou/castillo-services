"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  // Hook pour détecter si le site est installable (PWA)
  useEffect(() => {
    const handler = () => setIsInstallable(true);
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/a-propos", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-steel-light/10">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.04]"
          onClick={() => setOpen(false)}
        >
          <span className="bg-white rounded-xl p-1.5 ring-1 ring-steel-light/20 shadow-glow-sm">
            <Image
              src="/castillo.png"
              alt="Castillo Services"
              width={200}
              height={200}
              priority
              className="h-9 w-auto md:h-10"
            />
          </span>

          {/* Badge PWA — visible uniquement si installable */}
          {isInstallable && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide bg-electric/15 text-electric-light px-2 py-0.5 rounded-full border border-electric/30 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              PWA
            </span>
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-1.5 font-sans text-sm">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  active
                    ? "bg-electric text-white shadow-glow-sm"
                    : "text-steel hover:text-ink hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-electric text-white text-sm px-5 py-2.5 rounded-full font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.header.cta}
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-6 bg-ink rounded transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-ink rounded transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-ink rounded transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden animate-menu-in glass border-t border-steel-light/10 px-6 py-4 flex flex-col gap-1 font-sans text-[15px]">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-xl transition-colors ${
                  active ? "bg-electric text-white" : "text-steel hover:bg-surface hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-2 mt-3 px-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-electric text-white text-center px-5 py-2.5 rounded-full font-medium"
          >
            {t.header.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}