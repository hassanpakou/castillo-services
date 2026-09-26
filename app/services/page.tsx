import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Castillo Services",
  description:
    "Immatriculation, changement de plaque, mutation, duplicata, plaques personnalisées et spéciales. Portraits funéraires en céramique et solutions IT.",
};

function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8.5 6.2 12 13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Icône lien externe
function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Les 10 opérations d'immatriculation avec leurs liens officiels
const IMMATRICULATION_OPERATIONS = [
  {
    title: "Immatriculation",
    desc: "Nouvelle immatriculation standard pour véhicules neufs ou importés.",
    icon: "🚗",
    link: "https://immatriculation.gouv.cd/immatriculation/enregistrement",
  },
  {
    title: "Changement de plaque",
    desc: "Remplacement de plaque existante avec conservation du véhicule.",
    icon: "🔄",
    link: "https://immatriculation.gouv.cd/immatriculation/changement",
  },
  {
    title: "Mutation",
    desc: "Transfert de propriété d'un véhicule d'un propriétaire à un autre.",
    icon: "👥",
    link: "https://immatriculation.gouv.cd/immatriculation/mutation",
  },
  {
    title: "Demande de duplicata",
    desc: "Remplacement en cas de perte, vol ou détérioration de plaque ou carte rose.",
    icon: "📋",
    link: "https://immatriculation.gouv.cd/immatriculation/duplicata",
  },
  {
    title: "Changement d'adresse",
    desc: "Mise à jour de l'adresse du propriétaire sans modifier le numéro de plaque.",
    icon: "📍",
    link: "https://immatriculation.gouv.cd/immatriculation/changement_adresse",
  },
  {
    title: "Plaque personnalisée",
    desc: "Numéro ou combinaison alphanumérique personnalisé pour votre véhicule.",
    icon: "⭐",
    link: "https://immatriculation.gouv.cd/immatriculation/plaque_personalise",
  },
  {
    title: "Plaques spéciales",
    desc: "ITPR, Importation Temporaire, anciennes plaques à fond bleu ou vert.",
    icon: "🏛️",
    link: "https://immatriculation.gouv.cd/immatriculation/plaque_speciale",
  },
  {
    title: "Service diplomatique",
    desc: "Immatriculation des véhicules des missions diplomatiques.",
    icon: "🌍",
    link: "https://immatriculation.gouv.cd/immatriculation/diplomatique",
  },
  {
    title: "Services spéciaux",
    desc: "Véhicules bénéficiant d'un régime particulier ou d'autorisation spéciale.",
    icon: "🛡️",
    link: "https://immatriculation.gouv.cd/immatriculation/services_speciaux",
  },
  {
    title: "Inscriptions complémentaires",
    desc: "Mise à jour de l'usage, de la couleur ou des noms du propriétaire.",
    icon: "✏️",
    link: "https://immatriculation.gouv.cd/immatriculation/instructions_complementaires",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <header className="max-w-[54ch]">
        <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-electric-light border border-electric/40 bg-electric/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          Catalogue de services
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mt-6">
          Nos <span className="text-gradient">Services</span>
        </h1>
        <p className="mt-5 text-steel text-lg leading-relaxed">
          De l&apos;impression des plaques d&apos;immatriculation aux portraits funéraires,
          en passant par le conseil stratégique — tout ce dont vous avez besoin.
        </p>
      </header>

      {/* ============ PLAQUES D'IMMATRICULATION ============ */}
      <section id="plaques" className="mt-16 scroll-mt-24">
        <Reveal>
          <div className="plate p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <span className="inline-block text-xs font-medium text-electric bg-electric/10 rounded-full px-3 py-1">
                  Disponible
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mt-3">
                  Plaques d&apos;Immatriculation Certifiées
                </h2>
                <p className="mt-3 text-steel leading-relaxed max-w-[52ch]">
                  Nous imprimons les plaques d&apos;immatriculation pour <strong>10 opérations officielles</strong> —
                  qualité premium, conformité DGI, matériaux résistants.
                </p>
                <p className="mt-2 text-steel/80 text-sm leading-relaxed max-w-[52ch]">
                  Cliquez sur une opération pour accéder directement au portail officiel SNIV et démarrer votre demande.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center text-sm text-steel">
                  <Check className="text-electric shrink-0" />
                  Conformité absolue DGI
                </li>
                <li className="flex gap-2 items-center text-sm text-steel">
                  <Check className="text-electric shrink-0" />
                  Matériaux premium
                </li>
                <li className="flex gap-2 items-center text-sm text-steel">
                  <Check className="text-electric shrink-0" />
                  Résistance aux intempéries
                </li>
              </ul>
            </div>

            {/* Grille des 10 opérations — maintenant des liens cliquables */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {IMMATRICULATION_OPERATIONS.map((op, i) => (
                <Reveal key={op.title} delay={i * 60}>
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
                      {/* Flèche externe — visible au survol */}
                      <ExternalLinkIcon className="text-electric opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                    </div>
                    <h3 className="font-display font-semibold text-ink text-base group-hover:text-electric-light transition-colors">
                      {op.title}
                    </h3>
                    <p className="mt-2 text-steel text-sm leading-relaxed">
                      {op.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Accéder au portail
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
                Disponible
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mt-3">
                Portraits Funéraires en Céramique
              </h2>
              <p className="mt-4 text-steel leading-relaxed">
                Nos portraits funéraires personnalisés sont conçus pour rendre un dernier hommage
                digne et touchant à vos proches disparus. Réalisés avec soin à partir de vos
                photos, nos portraits résistent au temps et trouvent leur place sur pierre
                tombale, plaque commémorative ou mémorial. Parce que chaque vie mérite d&apos;être
                honorée avec beauté et respect.
              </p>
            </div>
            <ul className="space-y-4 self-center">
              <li className="flex gap-3">
                <Check className="mt-1 shrink-0 text-electric" />
                <div>
                  <p className="font-sans font-medium text-ink text-sm">Personnalisation Complète</p>
                  <p className="text-steel text-sm mt-1">Reproduction fidèle et soignée à partir de vos photos.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 shrink-0 text-electric" />
                <div>
                  <p className="font-sans font-medium text-ink text-sm">Inaltérable</p>
                  <p className="text-steel text-sm mt-1">Céramique traitée pour résister aux UV et aux intempéries.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 shrink-0 text-electric" />
                <div>
                  <p className="font-sans font-medium text-ink text-sm">Résistant au temps</p>
                  <p className="text-steel text-sm mt-1">Conçu pour durer des décennies sans altération.</p>
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
              Bientôt disponible
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mt-3">
              Conseil Stratégique et Solutions IT
            </h2>
            <p className="mt-4 text-steel leading-relaxed">
              Préparez votre entreprise pour demain. Nos experts travaillent actuellement au
              développement de solutions technologiques de pointe pour propulser votre croissance.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <div id="conseil" className="schema-card p-7 scroll-mt-24 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">
                Bientôt disponible
              </span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">Conseil en Stratégie</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                Audit et pilotage pour naviguer dans l&apos;ère numérique.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div id="digital" className="schema-card p-7 scroll-mt-24 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">
                Bientôt disponible
              </span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">Transformation Digitale</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                Modernisation de vos processus et outils.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div id="cloud" className="schema-card p-7 scroll-mt-24 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">
                Bientôt disponible
              </span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">Solutions Cloud</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                Flexibilité et sécurité pour vos données.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#123B7A] to-electric px-8 py-12 md:px-14 text-white">
            <div className="absolute inset-0 grid-bg-dark" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan/30 blur-[90px]" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold max-w-[22ch]">
                  Besoin d&apos;une plaque ou d&apos;un portrait ?
                </h2>
                <p className="mt-2 text-white/70">
                  Contactez-nous pour un devis détaillé sous 24 à 48 heures.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-white text-navy px-7 py-3.5 rounded-full font-medium hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 shrink-0"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}