"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const SUPPORT_EMAILS = [
  {
    email: "contact@castilloservice.com",
    labelFr: "Contact Principal",
    labelEn: "Main Contact",
    subjectFr: "Demande d'information",
    subjectEn: "Information request",
  },
  {
    email: "banasupport@castilloservice.com",
    labelFr: "Support BANA",
    labelEn: "BANA Support",
    subjectFr: "Assistance BANA",
    subjectEn: "BANA assistance",
  },
];

const ui = {
  fr: {
    ariaLabel: "Envoyer un e-mail",
    title: "Écrivez-nous",
    subtitle: "Réponse sous 24 à 48 heures",
  },
  en: {
    ariaLabel: "Send an email",
    title: "Write to us",
    subtitle: "Reply within 24 to 48 hours",
  },
};

export default function EmailButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = ui[lang];

  // Fermer le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed bottom-[88px] md:bottom-[96px] right-6 z-[999] flex flex-col items-end gap-3"
    >
      {/* Menu déroulant */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Carte d'en-tête */}
        <div className="bg-surface border border-steel-light/15 rounded-2xl p-4 shadow-2xl shadow-black/30 backdrop-blur-xl mb-1 w-72">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center shrink-0">
              <EmailIcon className="w-5 h-5 text-electric" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-ink text-sm">
                {t.title}
              </h3>
              <p className="text-xs text-steel mt-0.5">{t.subtitle}</p>
            </div>
          </div>
        </div>

        {/* ✅ VRAIS LIENS <a> avec mailto: */}
        {SUPPORT_EMAILS.map((support, i) => {
          const subject = lang === "fr" ? support.subjectFr : support.subjectEn;
          const mailtoHref = `mailto:${support.email}?subject=${encodeURIComponent(subject)}`;

          return (
            <a
              key={support.email}
              href={mailtoHref}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 bg-surface hover:bg-electric/10 border border-steel-light/15 hover:border-electric/40 rounded-2xl px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 w-72 cursor-pointer"
              style={{
                transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              <div className="w-9 h-9 rounded-full bg-electric flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <EmailIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs text-steel group-hover:text-electric transition-colors">
                  {lang === "fr" ? support.labelFr : support.labelEn}
                </p>
                <p className="font-display font-semibold text-ink text-sm truncate">
                  {support.email}
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-steel-light group-hover:text-electric group-hover:translate-x-1 transition-all shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          );
        })}
      </div>

      {/* Bouton flottant principal */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={t.ariaLabel}
        aria-expanded={isOpen}
        className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-electric hover:bg-electric-light shadow-2xl shadow-electric/40 hover:shadow-electric/60 flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {/* Halo pulsant */}
        <span
          className={`absolute inset-0 rounded-full bg-electric transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "animate-ping opacity-30"
          }`}
        />

        {/* Icône Email */}
        <EmailIcon
          className={`w-7 h-7 md:w-8 md:h-8 text-white transition-transform duration-300 absolute ${
            isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />

        {/* Icône X */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`text-white transition-all duration-300 absolute ${
            isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
          aria-hidden="true"
        >
          <path
            d="M6 6l12 12M6 18L18 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-surface border border-steel-light/20 text-ink text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block shadow-lg">
          Email
        </span>
      </button>
    </div>
  );
}

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}