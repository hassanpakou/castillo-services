"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-white/5">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-[1.04]"
          onClick={() => setOpen(false)}
        >
          <span className="bg-white rounded-xl p-1.5 ring-1 ring-white/20 shadow-glow-sm">
            <Image
              src="/castillo.png"
              alt="Castillo Services"
              width={200}
              height={200}
              priority
              className="h-9 w-auto md:h-10"
            />
          </span>
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
                    : "text-steel hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs text-steel-light border border-steel-light/30 rounded-full px-2.5 py-1">
            FR
          </span>
          <Link
            href="/contact"
            className="bg-electric text-white text-sm px-5 py-2.5 rounded-full font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            Contactez-nous
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
        <nav className="md:hidden animate-menu-in glass-dark border-t border-white/5 px-6 py-4 flex flex-col gap-1 font-sans text-[15px]">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-xl transition-colors ${
                  active ? "bg-electric text-white" : "text-steel hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-electric text-white text-center px-5 py-2.5 rounded-full font-medium"
          >
            Contactez-nous
          </Link>
        </nav>
      )}
    </header>
  );
}