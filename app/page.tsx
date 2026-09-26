import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "24–48 h", label: "Délai de devis" },
  { value: "100 %", label: "Conformité DGI" },
  { value: "2 pôles", label: "Conseil & Fabrication" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO : texte + photo Castillo Valere + logo ===== */}
      <section className="relative overflow-hidden bg-navy-dark text-white">
        <div className="absolute inset-0 grid-bg-dark" aria-hidden="true" />
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-electric/25 blur-[130px] animate-pulse-slow" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 w-[380px] h-[380px] rounded-full bg-cyan/15 blur-[110px]" aria-hidden="true" />

        <div className="relative max-w-content mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-28 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-electric-light border border-electric/40 bg-electric/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              Kinshasa · RDC — Conseil & Fabrication
            </span>
            <h1
              className="animate-fade-up mt-6 font-display font-bold text-4xl leading-[1.08] md:text-[3.5rem] md:leading-[1.05]"
              style={{ animationDelay: "100ms" }}
            >
              L&apos;excellence <span className="text-gradient">stratégique &amp; technologique</span> au service de vos ambitions
            </h1>
            <p
              className="animate-fade-up mt-6 text-white/70 text-lg max-w-[48ch] leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              De la transformation numérique de votre entreprise à la fourniture de produits
              manufacturés de haute qualité. Castillo Services est votre partenaire de confiance
              en République Démocratique du Congo.
            </p>
            <div className="animate-fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
              <Link
                href="/contact"
                className="bg-electric text-white px-7 py-3.5 rounded-full font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                Contactez-nous
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                Explorer nos services
              </Link>
            </div>
            <dl className="animate-fade-up mt-12 grid grid-cols-3 gap-6 max-w-md" style={{ animationDelay: "400ms" }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-white">{s.value}</dt>
                  <dd className="mt-1 text-xs text-white/50">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo Plaque RDC + avatar Castillo Valere + logo Castillo Services */}
<div className="relative animate-fade-up" style={{ animationDelay: "250ms" }}>
  <div className="absolute -inset-6 rounded-[2rem] bg-electric/20 blur-[80px] animate-pulse-slow" aria-hidden="true" />
  <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl animate-float">
    <Image
      src="/PlaqueRdc.png"
      alt="Plaque d'immatriculation RDC — Castillo Services"
      width={800}
      height={900}
      priority
      className="w-full h-[420px] md:h-[500px] object-cover"
    />
    {/* Dégradé de lisibilité en bas */}
    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" aria-hidden="true" />

    {/* Barre d'information : avatar + nom + logo */}
    <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-navy-dark/60 backdrop-blur-md ring-1 ring-white/10 px-4 py-3">
      {/* Avatar rond de Castillo Valere */}
      <Image
        src="/catillo-valere.png"
        alt="Castillo Valere"
        width={96}
        height={96}
        className="h-12 w-12 rounded-full object-cover ring-2 ring-electric shrink-0"
      />
      {/* Nom + fonction */}
      <div className="min-w-0">
        <p className="text-white font-display font-semibold truncate">Castillo Valere</p>
        <p className="text-white/60 text-xs truncate">Castillo Services — Kinshasa, RDC</p>
      </div>
      {/* Logo Castillo Services à droite */}
      <span className="ml-auto bg-white rounded-xl p-1.5 shadow-glow-sm shrink-0">
        <Image
          src="/castillo.png"
          alt="Logo Castillo Services"
          width={200}
          height={200}
          className="h-8 w-auto md:h-9"
        />
      </span>
    </div>
  </div>
</div>  </div>
      </section>

      {/* ===== Deux piliers ===== */}
      <section className="relative border-y border-white/5 bg-surface">
        <div className="absolute inset-0 grid-bg-dark" aria-hidden="true"/>
        <div className="relative max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink max-w-[24ch]">
              Deux expertises. Une même exigence.
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
                <h3 className="font-display font-semibold text-xl text-ink mt-5">Conseil &amp; Technologie</h3>
                <p className="mt-3 text-steel leading-relaxed">
                  Nous aidons les entreprises à prospérer dans un paysage numérique complexe grâce
                  à des stratégies innovantes — audit, pilotage et modernisation des processus.
                </p>
                <Link href="/services#conseil" className="underline-grow inline-block mt-5 text-sm font-medium text-electric">
                  Voir nos solutions IT
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
                <h3 className="font-display font-semibold text-xl text-ink mt-5">Fabrication &amp; Précision</h3>
                <p className="mt-3 text-steel leading-relaxed">
                  Nous fournissons aux particuliers et professionnels des produits manufacturés —
                  plaques et portraits — répondant aux plus hauts standards de qualité de la RDC.
                </p>
                <Link href="/services#plaques" className="underline-grow inline-block mt-5 text-sm font-medium text-electric">
                  Découvrir nos produits
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Services preview ===== */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Nos Services</h2>
          <Link href="/services" className="underline-grow text-sm text-steel hover:text-ink">
            Tout voir
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <div className="plate p-8 h-full">
              <span className="inline-block text-xs font-medium text-electric bg-electric/10 rounded-full px-3 py-1">Disponible</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">Plaques d&apos;Immatriculation</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                Conformité totale aux standards réglementaires congolais, matériaux résistants
                aux intempéries et lisibilité optimale.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="plate p-8 h-full">
              <span className="inline-block text-xs font-medium text-electric bg-electric/10 rounded-full px-3 py-1">Disponible</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">Portraits Funéraires</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                Portraits en céramique personnalisés, inaltérables, pour honorer la mémoire de
                vos proches avec beauté et respect.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="schema-card p-8 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">Bientôt disponible</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">Conseil en Stratégie</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                Audit et pilotage pour naviguer dans l&apos;ère numérique.
              </p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="schema-card p-8 h-full">
              <span className="inline-block text-xs font-medium text-schema bg-schema/10 rounded-full px-3 py-1">Bientôt disponible</span>
              <h3 className="font-display font-semibold text-xl mt-3 text-ink">Transformation Digitale</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">
                Modernisation de vos processus et outils.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MILIEU : section marque avec le logo Castillo ===== */}
      <section className="relative py-16 md:py-24 overflow-hidden border-y border-white/5 bg-navy-dark">
        <div className="absolute inset-0 grid-bg-dark" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-electric/15 blur-[120px] animate-pulse-slow" aria-hidden="true" />
        <Reveal className="relative flex flex-col items-center text-center px-6">
          <span className="bg-white rounded-2xl p-4 shadow-glow animate-float">
            <Image
              src="/castillo.png"
              alt="Castillo Services"
              width={200}
              height={200}
              className="h-20 w-auto md:h-28"
            />
          </span>
          <h2 className="mt-8 font-display text-3xl md:text-4xl font-bold text-ink">
            Castillo Services — <span className="text-gradient">votre partenaire de confiance</span>
          </h2>
          <p className="mt-4 text-steel max-w-[52ch] leading-relaxed">
            Sérieux, rapidité et satisfaction client : une seule exigence, du conseil stratégique
            à la fabrication de précision, au cœur de Kinshasa et partout en RDC.
          </p>
        </Reveal>
      </section>

      {/* ===== CTA ===== */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#123B7A] to-electric px-8 py-14 md:px-14 text-white">
            <div className="absolute inset-0 grid-bg-dark" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan/30 blur-[90px]" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold max-w-[20ch]">
                Prêt à transformer votre entreprise ?
              </h2>
              <Link
                href="/contact"
                className="bg-white text-navy px-7 py-3.5 rounded-full font-medium hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 shrink-0"
              >
                Commençons une conversation
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}