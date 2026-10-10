"use client";

import Link from "next/link";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { useLang } from "@/context/LanguageContext";

const translations = {
  fr: {
    badge: "Centre d'aide",
    title: "Questions ",
    titleGradient: "Fréquentes",
    subtitle: "Retrouvez toutes les réponses aux questions les plus courantes sur nos services, la plateforme SNIV, le paiement et le suivi de vos dossiers.",
    cantFindTitle: "Vous ne trouvez pas votre réponse ?",
    cantFindDesc: "Notre équipe support est disponible pour vous accompagner.",
    ctaButton: "Nous contacter",
    quickAccess: "Accès rapide",
  },
  en: {
    badge: "Help Center",
    title: "Frequently ",
    titleGradient: "Asked Questions",
    subtitle: "Find all the answers to the most common questions about our services, the SNIV platform, payment and tracking of your files.",
    cantFindTitle: "Can't find your answer?",
    cantFindDesc: "Our support team is available to assist you.",
    ctaButton: "Contact us",
    quickAccess: "Quick access",
  },
};

export default function FaqPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      {/* ===== HERO ===== */}
      <header className="max-w-[60ch]">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-electric-light border border-electric/40 bg-electric/10 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            {t.badge}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink mt-6 leading-[1.05]">
            {t.title}<span className="text-gradient">{t.titleGradient}</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-steel text-lg leading-relaxed max-w-[52ch]">
            {t.subtitle}
          </p>
        </Reveal>
      </header>

      {/* ===== FAQ FILTRABLE ===== */}
      <section className="mt-14 max-w-[70ch]">
        <Reveal>
          <Faq />
        </Reveal>
      </section>

      {/* ===== CTA CONTACT ===== */}
      <section className="mt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#123B7A] to-electric px-8 py-12 md:px-14 text-white">
            <div className="absolute inset-0 grid-bg" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan/30 blur-[90px]" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold max-w-[22ch]">
                  {t.cantFindTitle}
                </h2>
                <p className="mt-2 text-white/70 max-w-md">
                  {t.cantFindDesc}
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-white text-navy px-7 py-3.5 rounded-full font-medium hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 shrink-0"
              >
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}