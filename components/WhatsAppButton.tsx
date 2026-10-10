"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const SUPPORT_NUMBERS = [
  {
    number: "243803748393",
    display: "+243 803 748 393",
    labelFr: "Support Première ligne",
    labelEn: "First-line support",
  },
  {
    number: "243820113095",
    display: "+243 820 113 095",
    labelFr: "Support 2",
    labelEn: "Two Support",
  },
  {
    number: "243821469174",
    display: "+243 821 469 174",
    labelFr: "Support 3",
    labelEn: "Three Support",
  },
];

const ui = {
  fr: {
    ariaLabel: "Contacter via WhatsApp",
    title: "Besoin d'aide ?",
    subtitle: "Discutons sur WhatsApp",
    defaultMessage: "Bonjour Castillo Services, j'aimerais en savoir plus sur vos services.",
  },
  en: {
    ariaLabel: "Contact via WhatsApp",
    title: "Need help?",
    subtitle: "Let's chat on WhatsApp",
    defaultMessage: "Hello Castillo Services, I would like to know more about your services.",
  },
};

export default function WhatsAppButton() {
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

  const openWhatsApp = (number: string) => {
    const message = encodeURIComponent(t.defaultMessage);
    const url = `https://wa.me/${number}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-[998] flex flex-col items-end gap-3"
    >
      {/* Menu déroulant */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Carte d'en-tête du menu */}
        <div className="bg-surface border border-steel-light/15 rounded-2xl p-4 shadow-2xl shadow-black/30 backdrop-blur-xl mb-1 w-72">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-ink text-sm">
                {t.title}
              </h3>
              <p className="text-xs text-steel mt-0.5">{t.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Liste des numéros */}
        {SUPPORT_NUMBERS.map((support, i) => (
          <button
            key={support.number}
            onClick={() => openWhatsApp(support.number)}
            className="group flex items-center gap-3 bg-surface hover:bg-[#25D366]/10 border border-steel-light/15 hover:border-[#25D366]/40 rounded-2xl px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 w-72"
            style={{
              transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
            }}
          >
            <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs text-steel group-hover:text-[#25D366] transition-colors">
                {lang === "fr" ? support.labelFr : support.labelEn}
              </p>
              <p className="font-display font-semibold text-ink text-sm tabular-nums">
                {support.display}
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-steel-light group-hover:text-[#25D366] group-hover:translate-x-1 transition-all shrink-0"
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
          </button>
        ))}
      </div>

      {/* Bouton flottant principal */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={t.ariaLabel}
        aria-expanded={isOpen}
        className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {/* Halo pulsant en arrière-plan */}
        <span
          className={`absolute inset-0 rounded-full bg-[#25D366] transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "animate-ping opacity-30"
          }`}
        />

        {/* Icône WhatsApp (toujours visible) */}
        <WhatsAppIcon
          className={`w-7 h-7 md:w-8 md:h-8 text-white transition-transform duration-300 absolute ${
            isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />

        {/* Icône X (visible quand menu ouvert) */}
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

        {/* Tooltip (desktop seulement) */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-surface border border-steel-light/20 text-ink text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block shadow-lg">
          WhatsApp
        </span>
      </button>
    </div>
  );
}

// Icône WhatsApp officielle
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}