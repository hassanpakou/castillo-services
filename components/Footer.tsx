"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const translations = {
  fr: {
    brand: "Castillo Services",
    tagline: "Stratégie pour l'avenir. Technologie pour aujourd'hui.",
    quickLinks: "Liens Rapides",
    services: "Nos Services",
    legal: "Informations Légales",
    partners: "Nos Partenaires",
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À Propos",
      contact: "Contact",
    },
    serviceLinks: {
      plates: "Plaques d'Immatriculation",
      portraits: "Portraits Funéraires",
      strategy: "Conseil en Stratégie",
      digital: "Transformation Digitale",
    },
    legalLinks: {
      privacy: "Politique de confidentialité",
      accessibility: "Déclaration d'accessibilité",
      terms: "Conditions générales",
    },
    partnerNames: {
      finance: "Ministère des Finances",
      dgi: "DGI",
      sonas: "SONAS",
      dgda: "DGDA",
      rtnc: "RTNC",
    },
    rights: "Tous droits réservés.",
    location: "Kinshasa — République Démocratique du Congo",
  },
  en: {
    brand: "Castillo Services",
    tagline: "Strategy for tomorrow. Technology for today.",
    quickLinks: "Quick Links",
    services: "Our Services",
    legal: "Legal Information",
    partners: "Our Partners",
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    serviceLinks: {
      plates: "License Plates",
      portraits: "Funeral Portraits",
      strategy: "Strategic Consulting",
      digital: "Digital Transformation",
    },
    legalLinks: {
      privacy: "Privacy Policy",
      accessibility: "Accessibility Statement",
      terms: "Terms & Conditions",
    },
    partnerNames: {
      finance: "Ministry of Finance",
      dgi: "DGI",
      sonas: "SONAS",
      dgda: "DGDA",
      rtnc: "RTNC",
    },
    rights: "All rights reserved.",
    location: "Kinshasa — Democratic Republic of Congo",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-electric via-cyan to-electric" />
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-electric/15 blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-content mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl font-semibold">{t.brand}</span>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            {t.tagline}
          </p>
          <div className="mt-6 flex flex-col gap-1.5 text-sm text-white/75">
            <a href="mailto:contact@castilloservice.com" className="hover:text-electric-light transition-colors w-fit">
              contact@castilloservice.com
            </a>
            <div className="flex gap-4 mt-2 text-white/50">
              <a href="https://linkedin.com/" className="hover:text-electric-light transition-colors">LinkedIn</a>
              <a href="https://twitter.com/" className="hover:text-electric-light transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-electric-light mb-4">{t.quickLinks}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.nav.home}</Link></li>
            <li><Link href="/services" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.nav.services}</Link></li>
            <li><Link href="/a-propos" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.nav.about}</Link></li>
            <li><Link href="/contact" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-electric-light mb-4">{t.services}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/services#plaques" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.serviceLinks.plates}</Link></li>
            <li><Link href="/services#portraits" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.serviceLinks.portraits}</Link></li>
            <li><Link href="/services#conseil" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.serviceLinks.strategy}</Link></li>
            <li><Link href="/services#digital" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.serviceLinks.digital}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-electric-light mb-4">{t.legal}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.legalLinks.privacy}</a></li>
            <li><a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.legalLinks.accessibility}</a></li>
            <li><a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all">{t.legalLinks.terms}</a></li>
          </ul>

          <h3 className="text-xs tracking-widest uppercase text-electric-light mt-6 mb-3">{t.partners}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="https://www.finances.gouv.cd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all">
                <span className="w-1 h-1 rounded-full bg-electric-light" />{t.partnerNames.finance}
              </a>
            </li>
            <li>
              <a href="https://dgi.gouv.cd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all">
                <span className="w-1 h-1 rounded-full bg-electric" />{t.partnerNames.dgi}
              </a>
            </li>
            <li>
              <a href="https://www.sonas.cd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all">
                <span className="w-1 h-1 rounded-full bg-cyan" />{t.partnerNames.sonas}
              </a>
            </li>
            <li>
              <a href="https://www.dgda.cd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all">
                <span className="w-1 h-1 rounded-full bg-electric-light" />{t.partnerNames.dgda}
              </a>
            </li>
            <li>
              <a href="https://www.rtnc.cd/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all">
                <span className="w-1 h-1 rounded-full bg-electric-light" />{t.partnerNames.rtnc}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-10 py-6 text-xs text-white/40 flex flex-wrap justify-between gap-2">
          <span>© 2026 Castillo Services. {t.rights}</span>
          <span>{t.location}</span>
        </div>
      </div>
    </footer>
  );
}