"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLang } from "@/context/LanguageContext";

// Plaque RDC reproduite en SVG — Armoiries.png réduites & répétées en fond
// Plaque RDC reproduite en SVG — IDs préfixés pour pouvoir l'afficher plusieurs fois
function FictionalPlate({ idPrefix = "hero" }: { idPrefix?: string }) {
  const id = (name: string) => `${idPrefix}-${name}`;
  const url = (name: string) => `url(#${idPrefix}-${name})`;

  return (
    <svg viewBox="0 0 560 170" className="w-full h-auto drop-shadow-2xl" aria-hidden="true">
      <defs>
        {/* Fond blanc métallisé */}
        <linearGradient id={id("plateBase")} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDFEFE" />
          <stop offset="55%" stopColor="#EEF1F4" />
          <stop offset="100%" stopColor="#DDE2E8" />
        </linearGradient>

        {/* Filtre : convertit les armoiries en gris */}
        <filter id={id("grayscaleFilter")}>
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />
        </filter>

        {/* Armoiries réduites & répétées en gris (quinconce) */}
        <pattern id={id("armoiriesPattern")} width="90" height="90" patternUnits="userSpaceOnUse">
          <image href="/Armoiries.png" x="6" y="6" width="38" height="38" opacity="0.22" filter={url("grayscaleFilter")} />
          <image href="/Armoiries.png" x="51" y="51" width="38" height="38" opacity="0.22" filter={url("grayscaleFilter")} />
        </pattern>

        {/* Filigrane AUTHENTIC diagonal */}
        <pattern
          id={id("authenticPattern")}
          width="70"
          height="26"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-50)"
        >
          <text x="0" y="9" fontFamily="Arial, Helvetica, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#FDFEFE" fillOpacity="0.92">
            AUTHENTIC
          </text>
          <text x="35" y="22" fontFamily="Arial, Helvetica, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#FDFEFE" fillOpacity="0.92">
            AUTHENTIC
          </text>
        </pattern>

        {/* Reflet lumineux */}
        <linearGradient id={id("plateShine")} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.65" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Barre séparatrice grise */}
        <linearGradient id={id("sepGray")} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9D1DA" />
          <stop offset="50%" stopColor="#E8ECF1" />
          <stop offset="100%" stopColor="#C9D1DA" />
        </linearGradient>

        {/* Découpes */}
        <clipPath id={id("plateClip")}>
          <rect x="5" y="5" width="550" height="160" rx="12" />
        </clipPath>
        <clipPath id={id("flagClip")}>
          <rect x="22" y="20" width="70" height="48" rx="4" />
        </clipPath>
      </defs>

      {/* BORDURE NOIRE */}
      <rect x="0" y="0" width="560" height="170" rx="16" fill="#0B0B0B" />

      {/* FOND blanc métallisé */}
      <rect x="5" y="5" width="550" height="160" rx="12" fill={url("plateBase")} />

      {/* FOND : armoiries grises répétées */}
      <rect x="5" y="5" width="550" height="160" rx="12" fill={url("armoiriesPattern")} />

      {/* ZONE GAUCHE : drapeau + série + COD + DataMatrix */}
      <g clipPath={url("flagClip")}>
        <rect x="22" y="20" width="70" height="48" fill="#007FFF" />
        <line x1="22" y1="68" x2="92" y2="20" stroke="#F7D618" strokeWidth="16" />
        <line x1="22" y1="68" x2="92" y2="20" stroke="#CE1126" strokeWidth="9" />
        <polygon
          points="38,25 40.2,30.9 46.6,31.2 41.6,35.2 43.3,41.3 38,37.8 32.7,41.3 34.4,35.2 29.4,31.2 35.8,30.9"
          fill="#F7D618"
        />
      </g>

      <text x="22" y="86" fontFamily="var(--font-space-grotesk), Arial, sans-serif" fontSize="11" fontWeight="600" fill="#101418" letterSpacing="1.5">
        0014717
      </text>

      <text x="22" y="106" fontFamily="var(--font-space-grotesk), Arial, sans-serif" fontSize="19" fontWeight="800" fill="#101418" letterSpacing="2">
        COD
      </text>

      <g fill="#101418" transform="translate(22, 112)">
        <rect x="0" y="0" width="6" height="6" />
        <rect x="0" y="8" width="6" height="6" />
        <rect x="0" y="16" width="6" height="6" />
        <rect x="0" y="24" width="6" height="6" />
        <rect x="8" y="24" width="6" height="6" />
        <rect x="16" y="24" width="6" height="6" />
        <rect x="24" y="24" width="6" height="6" />
        <rect x="32" y="24" width="6" height="6" />
        <rect x="8" y="0" width="6" height="6" />
        <rect x="24" y="0" width="6" height="6" />
        <rect x="16" y="8" width="6" height="6" />
        <rect x="32" y="8" width="6" height="6" />
        <rect x="8" y="16" width="6" height="6" />
        <rect x="24" y="16" width="6" height="6" />
      </g>

      {/* NUMÉRO PRINCIPAL : noir + filigrane AUTHENTIC */}
      <text x="125" y="118" fontFamily="var(--font-space-grotesk), Arial, sans-serif" fontSize="82" fontWeight="800" fill="#101418" letterSpacing="2">
        0000BI
      </text>
      <text x="125" y="118" fontFamily="var(--font-space-grotesk), Arial, sans-serif" fontSize="82" fontWeight="800" fill={url("authenticPattern")} letterSpacing="2">
        0000BI
      </text>

      {/* Barre séparatrice */}
      <rect x="425" y="35" width="12" height="100" rx="6" fill={url("sepGray")} />

      {/* ANNÉE : noir + filigrane AUTHENTIC */}
      <text x="450" y="118" fontFamily="var(--font-space-grotesk), Arial, sans-serif" fontSize="82" fontWeight="800" fill="#101418" letterSpacing="2">
        00
      </text>
      <text x="450" y="118" fontFamily="var(--font-space-grotesk), Arial, sans-serif" fontSize="82" fontWeight="800" fill={url("authenticPattern")} letterSpacing="2">
        00
      </text>

      {/* REFLET ANIMÉ */}
      <g clipPath={url("plateClip")}>
        <g className="animate-plate-shine">
          <rect x="0" y="0" width="130" height="170" fill={url("plateShine")} />
        </g>
      </g>
    </svg>
  );
}

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* ===== HERO IMMERSIF ===== */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Image de fond pleine largeur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/PlaqueRdc.png"
            alt=""
            fill
            priority
            className="object-cover scale-110"
            quality={90}
          />
          {/* Overlay sombre pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy-dark/85 to-navy-dark/70" />
        </div>

        {/* Dégradé animé qui pulse par-dessus */}
        <div
          className="absolute inset-0 z-[1] opacity-60 animate-gradient-shift"
          style={{
            background:
              "linear-gradient(120deg, rgba(37, 99, 235, 0.35) 0%, rgba(6, 182, 212, 0.25) 25%, rgba(18, 59, 122, 0.3) 50%, rgba(34, 211, 238, 0.2) 75%, rgba(59, 130, 246, 0.35) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Grille technique subtile */}
        <div className="absolute inset-0 z-[2] grid-bg opacity-40" aria-hidden="true" />

        {/* Orbes flottantes en orbite */}
        <div className="absolute top-1/4 left-1/2 z-[2]" aria-hidden="true">
          <div className="relative w-0 h-0">
            <div className="absolute animate-orbit">
              <div className="w-3 h-3 rounded-full bg-electric blur-sm" />
            </div>
            <div className="absolute animate-orbit" style={{ animationDelay: "-7s", animationDuration: "25s" }}>
              <div className="w-2 h-2 rounded-full bg-cyan blur-sm" />
            </div>
            <div className="absolute animate-orbit" style={{ animationDelay: "-14s", animationDuration: "30s" }}>
              <div className="w-4 h-4 rounded-full bg-electric-light blur-sm" />
            </div>
          </div>
        </div>

        {/* Halos lumineux */}
        <div className="absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full bg-electric/30 blur-[150px] z-[1] animate-pulse-slow" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 w-[500px] h-[500px] rounded-full bg-cyan/20 blur-[130px] z-[1]" aria-hidden="true" />

        {/* Contenu principal */}
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pt-20 pb-24 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full">
          {/* Colonne gauche : texte */}
          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-electric-light border border-electric/40 bg-electric/10 backdrop-blur-sm rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              {/* {t.hero.badge} */}
            </span>
            <h1
              className="animate-fade-up mt-6 font-display font-bold text-4xl leading-[1.05] md:text-[3.8rem] md:leading-[1.02] text-white"
              style={{ animationDelay: "100ms" }}
            >
              {t.hero.title1}
              <span className="text-gradient">{t.hero.titleGradient}</span>
              {t.hero.title2}
            </h1>
            <p
              className="animate-fade-up mt-6 text-white/80 text-lg max-w-[48ch] leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              {t.hero.description}
            </p>
            <div className="animate-fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
              <Link
                href="/contact"
                className="bg-electric text-white px-7 py-3.5 rounded-full font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full border border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white hover:border-white/60 transition-all duration-300"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
            <dl className="animate-fade-up mt-12 grid grid-cols-3 gap-6 max-w-md" style={{ animationDelay: "400ms" }}>
              {t.hero.stats.map((s) => (
                <div key={s.label} className="border-l-2 border-electric pl-3">
                  <dt className="font-display text-2xl font-bold text-white">{s.value}</dt>
                  <dd className="mt-1 text-xs text-white/60 uppercase tracking-wide">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Colonne droite : plaque fictive flottante */}
          <div className="relative animate-fade-up" style={{ animationDelay: "250ms", perspective: "1000px" }}>
            {/* Halo derrière la plaque */}
            <div className="absolute inset-0 bg-electric/30 blur-[100px] rounded-full animate-pulse-slow" aria-hidden="true" />

            {/* Plaque fictive avec animation 3D */}
            <div className="relative animate-float-3d">
              <div className="relative rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md ring-1 ring-white/20 shadow-2xl">
                <FictionalPlate />
              </div>

              {/* Carte flottante en dessous de la plaque */}
              <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-navy-dark/80 backdrop-blur-xl ring-1 ring-white/15 px-4 py-3 shadow-2xl">
                <Image
                  src="/catillo-valere.png"
                  alt="Castillo Valere"
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-electric shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-white font-display font-semibold text-sm truncate">Castillo Valere</p>
                  <p className="text-white/60 text-xs truncate">{t.hero.personRole}</p>
                </div>
                <span className="bg-white rounded-xl p-1.5 shadow-glow-sm shrink-0">
                  <Image
                    src="/castillo.png"
                    alt="Logo Castillo Services"
                    width={200}
                    height={200}
                    className="h-7 w-auto"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Flèche de scroll en bas */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50" aria-hidden="true">
            <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ===== DEUX PILIERS ===== */}
      <section className="relative border-y border-steel-light/10 bg-surface">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="relative max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink max-w-[24ch]">
              {t.pillars.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <div className="plate p-8 h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric to-cyan flex items-center justify-center text-white shadow-glow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M2 17h20M8 21h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-xl text-ink mt-5">{t.pillars.tech.title}</h3>
                <p className="mt-3 text-steel leading-relaxed">{t.pillars.tech.desc}</p>
                <Link href="/services#conseil" className="underline-grow inline-block mt-5 text-sm font-medium text-electric">
                  {t.pillars.tech.link}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="plate p-8 h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy to-electric flex items-center justify-center text-white shadow-glow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3 3 8l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M3 12l9 5 9-5M3 16l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-xl text-ink mt-5">{t.pillars.manufacturing.title}</h3>
                <p className="mt-3 text-steel leading-relaxed">{t.pillars.manufacturing.desc}</p>
                <Link href="/services#plaques" className="underline-grow inline-block mt-5 text-sm font-medium text-electric">
                  {t.pillars.manufacturing.link}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{t.services.title}</h2>
          <Link href="/services" className="underline-grow text-sm text-steel hover:text-ink">
            {t.services.viewAll}
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <div className="plate p-8 h-full">
              <span className="inline-block text-xs font-medium text-electric bg-electric/10 rounded-full px-3 py-1">{t.services.available}</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">{t.services.plates}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">{t.services.platesDesc}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="plate p-8 h-full">
              <span className="inline-block text-xs font-medium text-electric bg-electric/10 rounded-full px-3 py-1">{t.services.available}</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">{t.services.portraits}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">{t.services.portraitsDesc}</p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="schema-card p-8 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">{t.services.comingSoon}</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">{t.services.strategy}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">{t.services.strategyDesc}</p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="schema-card p-8 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">{t.services.comingSoon}</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">{t.services.digital}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">{t.services.digitalDesc}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MARQUE ===== */}
<section className="relative py-16 md:py-24 overflow-hidden border-y border-steel-light/10 bg-navy-dark">
  <div className="absolute inset-0 grid-bg" aria-hidden="true" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-electric/15 blur-[120px] animate-pulse-slow" aria-hidden="true" />

  <Reveal className="relative flex flex-col items-center text-center px-6">
    {/* ===== PLAQUE RDC FLOTTANTE ===== */}
    <div className="relative w-full max-w-sm md:max-w-md" style={{ perspective: "1000px" }}>
      {/* Halo lumineux derrière la plaque */}
      <div className="absolute -inset-10 bg-electric/25 blur-[90px] rounded-full animate-pulse-slow" aria-hidden="true" />

      {/* Plaque avec animation 3D */}
      <div className="relative animate-float-3d">
        <div className="rounded-2xl p-4 md:p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md ring-1 ring-white/20 shadow-2xl">
          <FictionalPlate idPrefix="brand" />
        </div>
      </div>
    </div>

    <h2 className="mt-12 font-display text-3xl md:text-4xl font-bold text-white">
      {t.brand.title1}<span className="text-gradient">{t.brand.titleGradient}</span>
    </h2>
    <p className="mt-4 text-white/70 max-w-[52ch] leading-relaxed">{t.brand.description}</p>
  </Reveal>
</section>
      {/* ===== CTA ===== */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#123B7A] to-electric px-8 py-14 md:px-14 text-white">
            <div className="absolute inset-0 grid-bg" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan/30 blur-[90px]" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold max-w-[20ch]">
                {t.cta.title}
              </h2>
              <Link
                href="/contact"
                className="bg-white text-navy px-7 py-3.5 rounded-full font-medium hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 shrink-0"
              >
                {t.cta.button}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}