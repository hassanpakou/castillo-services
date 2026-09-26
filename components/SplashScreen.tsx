"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Commencer le fade-out après 2 secondes
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Masquer complètement après l'animation
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-dark transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Halo lumineux en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-electric/20 blur-[120px] animate-pulse-slow" />
      </div>

      {/* Grille technique */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Logo avec animation */}
      <div className="relative animate-float">
        <div className="absolute -inset-8 rounded-3xl bg-electric/30 blur-[60px] animate-pulse-slow" />
        <div className="relative bg-white rounded-3xl p-6 shadow-2xl shadow-electric/50 ring-1 ring-white/20">
          <Image
            src="/castillo.png"
            alt="Castillo Services"
            width={280}
            height={280}
            priority
            className="h-28 w-auto md:h-36"
          />
        </div>
      </div>

      {/* Texte de chargement */}
      <div className="mt-12 flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-white">
          Castillo <span className="text-gradient">Services</span>
        </h1>
        <p className="text-steel text-sm tracking-widest uppercase">
          Conseil & Fabrication
        </p>

        {/* Barre de chargement animée */}
        <div className="mt-6 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>

        {/* Texte de statut */}
        <p className="text-electric-light/60 text-xs tracking-wider mt-2">
          Chargement en cours...
        </p>
      </div>

      {/* Footer du splash */}
      <div className="absolute bottom-8 text-center">
        <p className="text-white/30 text-xs">
          Kinshasa · RDC
        </p>
      </div>
    </div>
  );
}