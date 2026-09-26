"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "fr" | "en";

type Translations = {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  header: {
    cta: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleGradient: string;
    title2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Array<{ value: string; label: string }>;
    personRole: string;
  };
  pillars: {
    title: string;
    tech: {
      title: string;
      desc: string;
      link: string;
    };
    manufacturing: {
      title: string;
      desc: string;
      link: string;
    };
  };
  services: {
    title: string;
    viewAll: string;
    available: string;
    comingSoon: string;
    plates: string;
    platesDesc: string;
    portraits: string;
    portraitsDesc: string;
    strategy: string;
    strategyDesc: string;
    digital: string;
    digitalDesc: string;
  };
  brand: {
    title1: string;
    titleGradient: string;
    description: string;
  };
  cta: {
    title: string;
    button: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  lang: {
    switch: string;
  };
};

const translations: Record<Lang, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À Propos",
      contact: "Contact",
    },
    header: {
      cta: "Contactez-nous",
    },
    hero: {
      badge: "Kinshasa · RDC — Conseil & Fabrication",
      title1: "L'excellence ",
      titleGradient: "stratégique & technologique",
      title2: " au service de vos ambitions",
      description: "De la transformation numérique de votre entreprise à la fourniture de produits manufacturés de haute qualité. Castillo Services est votre partenaire de confiance en République Démocratique du Congo.",
      ctaPrimary: "Contactez-nous",
      ctaSecondary: "Explorer nos services",
      stats: [
        { value: "24–48 h", label: "Délai de devis" },
        { value: "100 %", label: "Conformité DGI" },
        { value: "2 pôles", label: "Conseil & Fabrication" },
      ],
      personRole: "Castillo Services — Kinshasa, RDC",
    },
    pillars: {
      title: "Deux expertises. Une même exigence.",
      tech: {
        title: "Conseil & Technologie",
        desc: "Nous aidons les entreprises à prospérer dans un paysage numérique complexe grâce à des stratégies innovantes — audit, pilotage et modernisation des processus.",
        link: "Voir nos solutions IT",
      },
      manufacturing: {
        title: "Fabrication & Précision",
        desc: "Nous fournissons aux particuliers et professionnels des produits manufacturés — plaques et portraits — répondant aux plus hauts standards de qualité de la RDC.",
        link: "Découvrir nos produits",
      },
    },
    services: {
      title: "Nos Services",
      viewAll: "Tout voir",
      available: "Disponible",
      comingSoon: "Bientôt disponible",
      plates: "Plaques d'Immatriculation",
      platesDesc: "Conformité totale aux standards réglementaires congolais, matériaux résistants aux intempéries et lisibilité optimale.",
      portraits: "Portraits Funéraires",
      portraitsDesc: "Portraits en céramique personnalisés, inaltérables, pour honorer la mémoire de vos proches avec beauté et respect.",
      strategy: "Conseil en Stratégie",
      strategyDesc: "Audit et pilotage pour naviguer dans l'ère numérique.",
      digital: "Transformation Digitale",
      digitalDesc: "Modernisation de vos processus et outils.",
    },
    brand: {
      title1: "Castillo Services — ",
      titleGradient: "votre partenaire de confiance",
      description: "Sérieux, rapidité et satisfaction client : une seule exigence, du conseil stratégique à la fabrication de précision, au cœur de Kinshasa et partout en RDC.",
    },
    cta: {
      title: "Prêt à transformer votre entreprise ?",
      button: "Commençons une conversation",
    },
    theme: {
      light: "Thème clair",
      dark: "Thème sombre",
    },
    lang: {
      switch: "EN",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    header: {
      cta: "Contact us",
    },
    hero: {
      badge: "Kinshasa · DRC — Consulting & Manufacturing",
      title1: "Strategic & technological ",
      titleGradient: "excellence",
      title2: " at the service of your ambitions",
      description: "From the digital transformation of your business to the supply of high-quality manufactured products. Castillo Services is your trusted partner in the Democratic Republic of Congo.",
      ctaPrimary: "Contact us",
      ctaSecondary: "Explore our services",
      stats: [
        { value: "24–48 h", label: "Quote delay" },
        { value: "100 %", label: "DGI compliance" },
        { value: "2 poles", label: "Consulting & Manufacturing" },
      ],
      personRole: "Castillo Services — Kinshasa, DRC",
    },
    pillars: {
      title: "Two expertises. One standard of excellence.",
      tech: {
        title: "Consulting & Technology",
        desc: "We help businesses thrive in a complex digital landscape through innovative strategies — audit, steering, and process modernization.",
        link: "See our IT solutions",
      },
      manufacturing: {
        title: "Manufacturing & Precision",
        desc: "We supply individuals and professionals with manufactured products — plates and portraits — meeting the highest quality standards in the DRC.",
        link: "Discover our products",
      },
    },
    services: {
      title: "Our Services",
      viewAll: "View all",
      available: "Available",
      comingSoon: "Coming soon",
      plates: "License Plates",
      platesDesc: "Full compliance with Congolese regulatory standards, weather-resistant materials and optimal readability.",
      portraits: "Funeral Portraits",
      portraitsDesc: "Custom ceramic portraits, unfading, to honor the memory of your loved ones with beauty and respect.",
      strategy: "Strategic Consulting",
      strategyDesc: "Audit and steering to navigate the digital era.",
      digital: "Digital Transformation",
      digitalDesc: "Modernization of your processes and tools.",
    },
    brand: {
      title1: "Castillo Services — ",
      titleGradient: "your trusted partner",
      description: "Seriousness, speed, and customer satisfaction: a single standard, from strategic consulting to precision manufacturing, in the heart of Kinshasa and throughout the DRC.",
    },
    cta: {
      title: "Ready to transform your business?",
      button: "Let's start a conversation",
    },
    theme: {
      light: "Light theme",
      dark: "Dark theme",
    },
    lang: {
      switch: "FR",
    },
  },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "fr" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}