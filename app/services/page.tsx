"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLang } from "@/context/LanguageContext";

type Operation = {
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  icon: string;
  link: string;
};

const IMMATRICULATION_OPERATIONS: Operation[] = [
  {
    titleFr: "Immatriculation",
    titleEn: "Registration",
    descFr: "Nouvelle immatriculation standard pour véhicules neufs ou importés.",
    descEn: "Standard new registration for new or imported vehicles.",
    icon: "🚗",
    link: "https://immatriculation.gouv.cd/immatriculation/enregistrement",
  },
  {
    titleFr: "Changement de plaque",
    titleEn: "Plate Change",
    descFr: "Remplacement de plaque existante avec conservation du véhicule.",
    descEn: "Replacement of existing plate while keeping the vehicle.",
    icon: "🔄",
    link: "https://immatriculation.gouv.cd/immatriculation/changement",
  },
  {
    titleFr: "Mutation",
    titleEn: "Ownership Transfer",
    descFr: "Transfert de propriété d'un véhicule d'un propriétaire à un autre.",
    descEn: "Transfer of vehicle ownership from one owner to another.",
    icon: "👥",
    link: "https://immatriculation.gouv.cd/immatriculation/mutation",
  },
  {
    titleFr: "Demande de duplicata",
    titleEn: "Duplicate Request",
    descFr: "Remplacement en cas de perte, vol ou détérioration de plaque ou carte rose.",
    descEn: "Replacement in case of loss, theft, or damage of plate or registration card.",
    icon: "📋",
    link: "https://immatriculation.gouv.cd/immatriculation/duplicata",
  },
  {
    titleFr: "Changement d'adresse",
    titleEn: "Address Change",
    descFr: "Mise à jour de l'adresse du propriétaire sans modifier le numéro de plaque.",
    descEn: "Update owner's address without changing the plate number.",
    icon: "📍",
    link: "https://immatriculation.gouv.cd/immatriculation/changement_adresse",
  },
  {
    titleFr: "Plaque personnalisée",
    titleEn: "Custom Plate",
    descFr: "Numéro ou combinaison alphanumérique personnalisé pour votre véhicule.",
    descEn: "Custom number or alphanumeric combination for your vehicle.",
    icon: "⭐",
    link: "https://immatriculation.gouv.cd/immatriculation/plaque_personalise",
  },
  {
    titleFr: "Plaques spéciales",
    titleEn: "Special Plates",
    descFr: "ITPR, Importation Temporaire, anciennes plaques à fond bleu ou vert.",
    descEn: "ITPR, Temporary Import, old blue or green background plates.",
    icon: "🏛️",
    link: "https://immatriculation.gouv.cd/immatriculation/plaque_speciale",
  },
  {
    titleFr: "Service diplomatique",
    titleEn: "Diplomatic Service",
    descFr: "Immatriculation des véhicules des missions diplomatiques.",
    descEn: "Registration of diplomatic mission vehicles.",
    icon: "🌍",
    link: "https://immatriculation.gouv.cd/immatriculation/diplomatique",
  },
  {
    titleFr: "Services spéciaux",
    titleEn: "Special Services",
    descFr: "Véhicules bénéficiant d'un régime particulier ou d'autorisation spéciale.",
    descEn: "Vehicles with special regime or special authorization.",
    icon: "🛡️",
    link: "https://immatriculation.gouv.cd/immatriculation/services_speciaux",
  },
  {
    titleFr: "Inscriptions complémentaires",
    titleEn: "Additional Registrations",
    descFr: "Mise à jour de l'usage, de la couleur ou des noms du propriétaire.",
    descEn: "Update of usage, color, or owner's names.",
    icon: "✏️",
    link: "https://immatriculation.gouv.cd/immatriculation/instructions_complementaires",
  },
];

const translations = {
  fr: {
    badge: "Catalogue de services",
    title: "Nos",
    titleGradient: "Services",
    subtitle: "De l'impression des plaques d'immatriculation aux portraits funéraires, en passant par le conseil stratégique — tout ce dont vous avez besoin.",
    platesTitle: "Plaques d'Immatriculation Certifiées",
    platesDesc: "Nous imprimons les plaques d'immatriculation pour 10 opérations officielles — qualité premium, conformité DGI, matériaux résistants.",
    platesHint: "Cliquez sur une opération pour accéder directement au portail officiel SNIV et démarrer votre demande.",
    compliance: "Conformité absolue DGI",
    materials: "Matériaux premium",
    weather: "Résistance aux intempéries",
    accessPortal: "Accéder au portail",
    portraitsTitle: "Portraits Funéraires en Céramique",
    portraitsDesc: "Nos portraits funéraires personnalisés sont conçus pour rendre un dernier hommage digne et touchant à vos proches disparus. Réalisés avec soin à partir de vos photos, nos portraits résistent au temps et trouvent leur place sur pierre tombale, plaque commémorative ou mémorial.",
    customization: "Personnalisation Complète",
    customizationDesc: "Reproduction fidèle et soignée à partir de vos photos.",
    unfading: "Inaltérable",
    unfadingDesc: "Céramique traitée pour résister aux UV et aux intempéries.",
    durable: "Résistant au temps",
    durableDesc: "Conçu pour durer des décennies sans altération.",
    itTitle: "Conseil Stratégique et Solutions IT",
    itDesc: "Préparez votre entreprise pour demain. Nos experts travaillent actuellement au développement de solutions technologiques de pointe pour propulser votre croissance.",
    strategy: "Conseil en Stratégie",
    strategyDesc: "Audit et pilotage pour naviguer dans l'ère numérique.",
    digital: "Transformation Digitale",
    digitalDesc: "Modernisation de vos processus et outils.",
    cloud: "Solutions Cloud",
    cloudDesc: "Flexibilité et sécurité pour vos données.",
    ctaTitle: "Besoin d'une plaque ou d'un portrait ?",
    ctaDesc: "Contactez-nous pour un devis détaillé sous 24 à 48 heures.",
    ctaButton: "Demander un devis",
  },
  en: {
    badge: "Service catalog",
    title: "Our",
    titleGradient: "Services",
    subtitle: "From license plate printing to funeral portraits, through strategic consulting — everything you need.",
    platesTitle: "Certified License Plates",
    platesDesc: "We print license plates for 10 official operations — premium quality, DGI compliance, resistant materials.",
    platesHint: "Click on an operation to access the official SNIV portal directly and start your request.",
    compliance: "Absolute DGI compliance",
    materials: "Premium materials",
    weather: "Weather resistance",
    accessPortal: "Access portal",
    portraitsTitle: "Ceramic Funeral Portraits",
    portraitsDesc: "Our custom funeral portraits are designed to pay a dignified and touching last tribute to your deceased loved ones. Carefully crafted from your photos, our portraits resist time and find their place on tombstones, memorial plaques, or memorials.",
    customization: "Full Customization",
    customizationDesc: "Faithful and careful reproduction from your photos.",
    unfading: "Unfading",
    unfadingDesc: "Ceramic treated to resist UV and weather.",
    durable: "Time-resistant",
    durableDesc: "Designed to last for decades without alteration.",
    itTitle: "Strategic Consulting & IT Solutions",
    itDesc: "Prepare your business for tomorrow. Our experts are currently developing cutting-edge technological solutions to propel your growth.",
    strategy: "Strategic Consulting",
    strategyDesc: "Audit and steering to navigate the digital era.",
    digital: "Digital Transformation",
    digitalDesc: "Modernization of your processes and tools.",
    cloud: "Cloud Solutions",
    cloudDesc: "Flexibility and security for your data.",
    ctaTitle: "Need a plate or portrait?",
    ctaDesc: "Contact us for a detailed quote within 24 to 48 hours.",
    ctaButton: "Request a quote",
  },
};

function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8.5 6.2 12 13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <header className="max-w-[54ch]">
        <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-electric-light border border-electric/40 bg-electric/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          {t.badge}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mt-6">
          {t.title} <span className="text-gradient">{t.titleGradient}</span>
        </h1>
        <p className="mt-5 text-steel text-lg leading-relaxed">
          {t.subtitle}
        </p>
      </header>

      {/* ============ PLAQUES D'IMMATRICULATION ============ */}
      <section id="plaques" className="mt-16 scroll-mt-24">
        <Reveal>
          <div className="plate p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <span className="inline-block text-xs font-medium text-electric bg-electric/10 rounded-full px-3 py-1">
                  {lang === "fr" ? "Disponible" : "Available"}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mt-3">
                  {t.platesTitle}
                </h2>
                <p className="mt-3 text-steel leading-relaxed max-w-[52ch]">
                  {t.platesDesc}
                </p>
                <p className="mt-2 text-steel/80 text-sm leading-relaxed max-w-[52ch]">
                  {t.platesHint}
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center text-sm text-steel">
                  <Check className="text-electric shrink-0" />
                  {t.compliance}
                </li>
                <li className="flex gap-2 items-center text-sm text-steel">
                  <Check className="text-electric shrink-0" />
                  {t.materials}
                </li>
                <li className="flex gap-2 items-center text-sm text-steel">
                  <Check className="text-electric shrink-0" />
                  {t.weather}
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {IMMATRICULATION_OPERATIONS.map((op, i) => (
                <Reveal key={op.link} delay={i * 60}>
                  <a
                    href={op.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block bg-surface border border-white/5 rounded-2xl p-5 hover:border-electric/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center text-xl group-hover:bg-electric/20 transition-colors shrink-0">
                        <span aria-hidden="true">{op.icon}</span>
                      </div>
                      <ExternalLinkIcon className="text-electric opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                    </div>
                    <h3 className="font-display font-semibold text-ink text-base group-hover:text-electric-light transition-colors">
                      {lang === "fr" ? op.titleFr : op.titleEn}
                    </h3>
                    <p className="mt-2 text-steel text-sm leading-relaxed">
                      {lang === "fr" ? op.descFr : op.descEn}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t.accessPortal}
                      <ExternalLinkIcon className="w-3 h-3" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ PORTRAITS FUNÉRAIRES ============ */}
      <section id="portraits" className="mt-10 scroll-mt-24">
        <Reveal>
          <div className="plate p-8 md:p-12 grid md:grid-cols-[1fr_1fr] gap-10">
            <div>
              <span className="inline-block text-xs font-medium text-electric bg-electric/10 rounded-full px-3 py-1">
                {lang === "fr" ? "Disponible" : "Available"}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mt-3">
                {t.portraitsTitle}
              </h2>
              <p className="mt-4 text-steel leading-relaxed">
                {t.portraitsDesc}
              </p>
            </div>
            <ul className="space-y-4 self-center">
              <li className="flex gap-3">
                <Check className="mt-1 shrink-0 text-electric" />
                <div>
                  <p className="font-sans font-medium text-ink text-sm">{t.customization}</p>
                  <p className="text-steel text-sm mt-1">{t.customizationDesc}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 shrink-0 text-electric" />
                <div>
                  <p className="font-sans font-medium text-ink text-sm">{t.unfading}</p>
                  <p className="text-steel text-sm mt-1">{t.unfadingDesc}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 shrink-0 text-electric" />
                <div>
                  <p className="font-sans font-medium text-ink text-sm">{t.durable}</p>
                  <p className="text-steel text-sm mt-1">{t.durableDesc}</p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ============ CONSEIL / IT ============ */}
      <section className="mt-20">
        <Reveal>
          <div className="max-w-[58ch]">
            <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">
              {lang === "fr" ? "Bientôt disponible" : "Coming soon"}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mt-3">
              {t.itTitle}
            </h2>
            <p className="mt-4 text-steel leading-relaxed">
              {t.itDesc}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <div id="conseil" className="schema-card p-7 scroll-mt-24 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">
                {lang === "fr" ? "Bientôt disponible" : "Coming soon"}
              </span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">{t.strategy}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                {t.strategyDesc}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div id="digital" className="schema-card p-7 scroll-mt-24 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">
                {lang === "fr" ? "Bientôt disponible" : "Coming soon"}
              </span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">{t.digital}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                {t.digitalDesc}
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div id="cloud" className="schema-card p-7 scroll-mt-24 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">
                {lang === "fr" ? "Bientôt disponible" : "Coming soon"}
              </span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">{t.cloud}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                {t.cloudDesc}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#123B7A] to-electric px-8 py-12 md:px-14 text-white">
            <div className="absolute inset-0 grid-bg" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan/30 blur-[90px]" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold max-w-[22ch]">
                  {t.ctaTitle}
                </h2>
                <p className="mt-2 text-white/70">
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