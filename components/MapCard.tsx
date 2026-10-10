"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const MAPS_QUERY = "Immeuble Forescom, Avenue du Port, Gombe, Kinshasa";
const EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=16&output=embed`;
const EXTERNAL_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

export default function MapCard() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLang();

  useEffect(() => setMounted(true), []);

  return (
    <div className="plate overflow-hidden p-0">
      <div className="relative w-full h-[400px] md:h-[500px] bg-surface">
        {mounted ? (
          <iframe
            src={EMBED_URL}
            title={lang === "fr" ? "Localisation Castillo Services - Kinshasa" : "Castillo Services location - Kinshasa"}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-steel">
              <div className="w-10 h-10 rounded-full border-2 border-electric border-t-transparent animate-spin" />
              <span className="text-xs">
                {lang === "fr" ? "Chargement de la carte..." : "Loading map..."}
              </span>
            </div>
          </div>
        )}

        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
          <div className="bg-surface/95 backdrop-blur-md border border-steel-light/20 rounded-2xl p-4 shadow-xl max-w-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-electric" aria-hidden="true">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="currentColor"
                    fillOpacity="0.15"
                  />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" fill="white" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-ink text-sm">Castillo Services</h3>
                <p className="text-xs text-steel mt-0.5 leading-snug">
                  {lang === "fr" ? (
                    <>Immeuble Forescom, 7e étage<br />Gombe, Kinshasa</>
                  ) : (
                    <>Forescom Building, 7th floor<br />Gombe, Kinshasa</>
                  )}
                </p>
              </div>
            </div>
            <a
              href={EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-electric text-white px-4 py-2 rounded-full text-xs font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {lang === "fr" ? "Ouvrir dans Google Maps" : "Open in Google Maps"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}