"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Ne pas afficher si déjà installé ou précédemment refusé
    const wasDismissed = localStorage.getItem("install-dismissed");
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Attendre 3 secondes avant de proposer l'installation
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem("install-dismissed", "true");
  };

  if (!showPrompt || dismissed || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-[calc(100%-2rem)] animate-fade-up">
      <div className="relative bg-surface border border-electric/30 rounded-2xl p-5 shadow-2xl shadow-electric/20 backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-electric">
              <path d="M12 2v10m0 0l4-4m-4 4l-4-4M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-ink text-base">
              Installer Castillo Services
            </h3>
            <p className="text-sm text-steel mt-1 leading-relaxed">
              Accédez à l'application directement depuis votre écran d'accueil, même hors ligne.
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleInstall}
                className="bg-electric text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                Installer
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 rounded-full text-sm font-medium text-steel hover:text-ink hover:bg-surface transition-all duration-300"
              >
                Plus tard
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-steel-light hover:text-ink transition-colors shrink-0"
            aria-label="Fermer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}