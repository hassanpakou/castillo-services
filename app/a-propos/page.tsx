// app/a-propos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Nous — Castillo Services",
  description:
    "Castillo Services allie l'expertise du conseil informatique à la précision industrielle de la fabrication, en République Démocratique du Congo.",
};

function IconExcellence() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M13 2 22 6v6c0 6-4 10-9 10s-9-4-9-10V6l9-4Z" stroke="#B8834D" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 13l3 3 5-6" stroke="#B8834D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconReactivite() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M4 20 20 4" stroke="#B8834D" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 4h7v7" stroke="#B8834D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 13v1" stroke="#B8834D" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
function IconEngagement() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <circle cx="10" cy="13" r="7" stroke="#B8834D" strokeWidth="1.4" />
      <circle cx="17" cy="13" r="7" stroke="#B8834D" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}
function IconPerformance() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M3 20h20" stroke="#B8834D" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      <path d="M5 17V9M12 17V4M19 17v-6" stroke="#B8834D" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const VALUES = [
  {
    icon: IconExcellence,
    title: "Excellence & Conformité",
    text: "Nous ne faisons aucun compromis sur la qualité. Qu'il s'agisse de normes réglementaires ou de standards technologiques, nous garantissons des résultats sûrs et durables.",
  },
  {
    icon: IconReactivite,
    title: "Réactivité",
    text: "Le temps est précieux. Notre organisation agile nous permet de traiter vos demandes et de livrer vos commandes dans les délais les plus brefs, sans jamais sacrifier le soin du détail.",
  },
  {
    icon: IconEngagement,
    title: "Engagement Client",
    text: "Plus qu'un fournisseur, nous sommes votre partenaire. Votre réussite commerciale et votre satisfaction sont les seuls indicateurs de notre succès.",
  },
  {
    icon: IconPerformance,
    title: "Performance",
    text: "Grâce à des processus optimisés et une expertise technique pointue, nous transformons vos besoins en résultats concrets et mesurables.",
  },
];

export default function AProposPage() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <h1 className="font-display text-3xl md:text-4xl text-ink max-w-[24ch]">
        À Propos de Castillo Services
      </h1>

      <div className="mt-14 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <h2 className="font-display text-xl text-ink">Qui Nous Sommes</h2>
        <div className="space-y-5 text-steel leading-relaxed max-w-[68ch]">
          <p>
            Castillo Services est né d&apos;une volonté d&apos;excellence. Nous sommes une
            entreprise hybride, alliant l&apos;expertise intellectuelle du conseil informatique
            à la précision industrielle de la fabrication.
          </p>
          <p>
            Notre mission est double : aider les entreprises à prospérer dans un paysage
            numérique complexe grâce à des stratégies innovantes, tout en fournissant aux
            particuliers et professionnels des produits manufacturés (plaques, portraits)
            répondant aux plus hauts standards de qualité de la RDC. Depuis notre création,
            nous mettons un point d&apos;honneur à garantir sérieux, rapidité et satisfaction
            client, quelle que soit la nature de votre demande.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-ink/10 pt-16">
        <h2 className="font-display text-2xl text-ink max-w-[26ch]">Nos Valeurs Fondamentales</h2>
        <p className="mt-3 text-steel max-w-[52ch]">
          Ces quatre piliers soutiennent chacune de nos actions.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t border-brass/40 pt-5">
              <Icon />
              <h3 className="font-sans font-medium text-ink mt-3">{title}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed max-w-[42ch]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-ink/10 pt-16 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <h2 className="font-display text-xl text-ink">Notre Mission</h2>
        <p className="text-steel leading-relaxed max-w-[68ch]">
          Allier vision stratégique et excellence opérationnelle. Notre vocation est double :
          propulser les entreprises dans l&apos;ère numérique grâce à des solutions
          technologiques de pointe, tout en fournissant des produits manufacturés d&apos;une
          fiabilité absolue. Nous créons de la valeur durable, que ce soit par le conseil ou la
          fabrication.
        </p>
      </div>
    </div>
  );
}
