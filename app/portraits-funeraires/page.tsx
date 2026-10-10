"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLang } from "@/context/LanguageContext";

const translations = {
  fr: {
    badge: "Hommage & Mémoire",
    title1: "Portraits ",
    titleGradient: "Funéraires",
    title2: " en Céramique",
    subtitle: "Un hommage éternel à vos proches disparus. Portraits personnalisés sur céramique, conçus pour traverser le temps avec dignité et beauté.",
    galleryTitle: "Nos Réalisations",
    gallerySubtitle: "Chaque portrait est une œuvre unique, réalisée avec le plus grand soin à partir de vos photos.",
    viewExample: "Exemple",
    variations: [
      "Format Ovale",
      "Format Rectangulaire",
      "Cadre Doré",
      "Sur Pierre Tombale",
      "Finition Sépia",
      "Portrait Classique",
    ],
    featuresTitle: "Un Portrait d'Exception",
    features: [
      { title: "Céramique Haute Qualité", desc: "Céramique italienne de première qualité, cuite à plus de 900°C pour une résistance inaltérable.", icon: "🏺" },
      { title: "Résistance aux Intempéries", desc: "Traitée pour résister aux UV, à la pluie, au gel et aux variations de température pendant des décennies.", icon: "☀️" },
      { title: "Reproduction Fidèle", desc: "Nos artistes retravaillent chaque photo pour garantir une reproduction respectueuse et détaillée.", icon: "🎨" },
      { title: "Formats Multiples", desc: "Ovale, rectangulaire, carré — nous adaptons le format à vos souhaits et à la pierre tombale.", icon: "📐" },
      { title: "Finition Dorée", desc: "Option de cadre doré ou argenté pour un rendu encore plus noble et précieux.", icon: "✨" },
      { title: "Livraison Soignée", desc: "Emballage protecteur et livraison sécurisée partout en République Démocratique du Congo.", icon: "📦" },
    ],
    processTitle: "Notre Processus",
    process: [
      { step: "01", title: "Envoi de la photo", desc: "Envoyez-nous la photo de votre proche par e-mail ou apportez-la à notre siège à Kinshasa." },
      { step: "02", title: "Validation & Retouche", desc: "Nos artistes retouchent la photo et vous envoient une maquette numérique pour validation." },
      { step: "03", title: "Fabrication", desc: "Impression sur céramique et cuisson à haute température pour une durabilité absolue." },
      { step: "04", title: "Livraison", desc: "Livraison sécurisée à Kinshasa ou expédition dans toute la RDC selon vos besoins." },
    ],
    ctaTitle: "Honorer une mémoire précieuse ?",
    ctaDesc: "Contactez-nous pour recevoir un devis personnalisé et discuter de votre projet en toute confidentialité.",
    ctaButton: "Nous contacter",
  },
  en: {
    badge: "Tribute & Memory",
    title1: "Funeral ",
    titleGradient: "Portraits",
    title2: " on Ceramic",
    subtitle: "An eternal tribute to your departed loved ones. Custom ceramic portraits, designed to stand the test of time with dignity and beauty.",
    galleryTitle: "Our Works",
    gallerySubtitle: "Each portrait is a unique piece, crafted with the utmost care from your photos.",
    viewExample: "Example",
    variations: [
      "Oval Format",
      "Rectangular Format",
      "Golden Frame",
      "On Tombstone",
      "Sepia Finish",
      "Classic Portrait",
    ],
    featuresTitle: "An Exceptional Portrait",
    features: [
      { title: "High Quality Ceramic", desc: "Premium Italian ceramic, fired at over 900°C for unfading resistance.", icon: "🏺" },
      { title: "Weather Resistance", desc: "Treated to resist UV, rain, frost, and temperature variations for decades.", icon: "☀️" },
      { title: "Faithful Reproduction", desc: "Our artists rework each photo to ensure a respectful and detailed reproduction.", icon: "🎨" },
      { title: "Multiple Formats", desc: "Oval, rectangular, square — we adapt the format to your wishes and tombstone.", icon: "📐" },
      { title: "Golden Finish", desc: "Golden or silver frame option for an even more noble and precious rendering.", icon: "✨" },
      { title: "Careful Delivery", desc: "Protective packaging and secure delivery throughout the Democratic Republic of Congo.", icon: "📦" },
    ],
    processTitle: "Our Process",
    process: [
      { step: "01", title: "Photo Submission", desc: "Send us the photo of your loved one by email or bring it to our headquarters in Kinshasa." },
      { step: "02", title: "Validation & Retouching", desc: "Our artists retouch the photo and send you a digital mockup for validation." },
      { step: "03", title: "Manufacturing", desc: "Printing on ceramic and high-temperature firing for absolute durability." },
      { step: "04", title: "Delivery", desc: "Secure delivery in Kinshasa or shipping throughout the DRC according to your needs." },
    ],
    ctaTitle: "Honor a precious memory?",
    ctaDesc: "Contact us to receive a personalized quote and discuss your project in complete confidentiality.",
    ctaButton: "Contact us",
  },
};

// Variations visuelles de la même image Lumumba.png
const GALLERY_VARIANTS = [
  { alt: "Portrait ovale",       scale: "scale-100",  filter: "",                          shape: "rounded-full",      objectPos: "object-[center_30%]" },
  { alt: "Portrait rectangulaire", scale: "scale-110",  filter: "",                          shape: "rounded-xl",        objectPos: "object-[center_25%]" },
  { alt: "Portrait cadre doré",  scale: "scale-105",  filter: "sepia-[0.15] contrast-[1.1]", shape: "rounded-2xl border-4 border-yellow-500/40", objectPos: "object-[center_35%]" },
  { alt: "Portrait sur stèle",   scale: "scale-115",  filter: "brightness-95",              shape: "rounded-lg",        objectPos: "object-[center_20%]" },
  { alt: "Portrait sépia",       scale: "scale-100",  filter: "sepia-[0.7] contrast-[1.1]", shape: "rounded-xl",        objectPos: "object-[center_30%]" },
  { alt: "Portrait classique",   scale: "scale-100",  filter: "grayscale-[0.4]",            shape: "rounded-2xl",       objectPos: "object-[center_25%]" },
];

export default function PortraitsPage() {
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
            {t.title1}<span className="text-gradient">{t.titleGradient}</span>{t.title2}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-steel text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-electric text-white px-7 py-3.5 rounded-full font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.ctaButton}
            </Link>
            <Link
              href="#galerie"
              className="px-7 py-3.5 rounded-full border border-steel-light/30 text-steel hover:bg-surface hover:text-ink transition-all duration-300"
            >
              {lang === "fr" ? "Voir la galerie" : "View gallery"}
            </Link>
          </div>
        </Reveal>
      </header>

      {/* ===== GALERIE AVEC VARIATIONS ===== */}
      <section id="galerie" className="mt-24 scroll-mt-24">
        <Reveal>
          <div className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              {t.galleryTitle}
            </h2>
            <p className="mt-3 text-steel max-w-[52ch]">
              {t.gallerySubtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_VARIANTS.map((variant, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-electric/40 transition-all duration-500">
                {/* Halo au hover */}
                <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/10 transition-colors duration-500 z-10 pointer-events-none" />

                {/* Image Lumumba avec variation */}
                <Image
                  src="/Lumumba.png"
                  alt={variant.alt}
                  fill
                  className={`object-cover transition-all duration-700 ease-out group-hover:scale-110 ${variant.objectPos} ${variant.scale} ${variant.filter}`}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority={i === 0}
                />

                {/* Overlay avec label au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-4">
                  <div>
                    <span className="block text-white text-xs font-medium tracking-wide uppercase">
                      {t.viewExample} {i + 1}
                    </span>
                    <span className="block text-electric-light text-xs mt-1">
                      {t.variations[i]}
                    </span>
                  </div>
                </div>

                {/* Cadre décoratif interne au hover */}
                <div className={`absolute inset-3 border border-white/0 group-hover:border-white/20 ${variant.shape} transition-all duration-500 z-20 pointer-events-none`} />

                {/* Badge permanent en haut à droite */}
                <div className="absolute top-3 right-3 z-30 bg-navy-dark/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  <span className="text-[10px] font-semibold text-electric-light tracking-wide uppercase">
                    {t.variations[i]}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note en bas de la galerie */}
        <Reveal delay={600}>
          <p className="mt-8 text-center text-steel text-sm italic max-w-md mx-auto">
            {lang === "fr"
              ? "Toutes les variantes ci-dessus sont réalisées à partir d'une même photo source — démontrant notre capacité à créer des formats et finitions sur mesure."
              : "All variations above are made from the same source photo — demonstrating our ability to create custom formats and finishes."}
          </p>
        </Reveal>
      </section>

      {/* ===== CARACTÉRISTIQUES ===== */}
      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink max-w-[24ch]">
            {t.featuresTitle}
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="plate p-6 h-full group hover:border-electric/40">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-electric/20 transition-colors">
                  <span aria-hidden="true">{feature.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-steel text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== PROCESSUS ===== */}
      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            {t.processTitle}
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.map((step, i) => (
            <Reveal key={step.step} delay={i * 100}>
              <div className="relative plate p-6 h-full group">
                <span className="font-display text-5xl font-bold text-electric/20 group-hover:text-electric/40 transition-colors">
                  {step.step}
                </span>
                <h3 className="font-display font-semibold text-lg text-ink mt-3">
                  {step.title}
                </h3>
                <p className="mt-2 text-steel text-sm leading-relaxed">
                  {step.desc}
                </p>
                {i < t.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[1px] bg-electric/30" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#123B7A] to-electric px-8 py-14 md:px-14 text-white">
            <div className="absolute inset-0 grid-bg" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan/30 blur-[90px]" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold max-w-[20ch]">
                  {t.ctaTitle}
                </h2>
                <p className="mt-2 text-white/70 max-w-md">
                  {t.ctaDesc}
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