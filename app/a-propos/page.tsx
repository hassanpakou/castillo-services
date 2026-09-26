"use client";

import { useLang } from "@/context/LanguageContext";

const translations = {
  fr: {
    title: "À Propos de Castillo Services",
    whoWeAre: "Qui Nous Sommes",
    whoWeAreP1: "Castillo Services est né d'une volonté d'excellence. Nous sommes une entreprise hybride, alliant l'expertise intellectuelle du conseil informatique à la précision industrielle de la fabrication.",
    whoWeAreP2: "Notre mission est double : aider les entreprises à prospérer dans un paysage numérique complexe grâce à des stratégies innovantes, tout en fournissant aux particuliers et professionnels des produits manufacturés (plaques, portraits) répondant aux plus hauts standards de qualité de la RDC. Depuis notre création, nous mettons un point d'honneur à garantir sérieux, rapidité et satisfaction client, quelle que soit la nature de votre demande.",
    valuesTitle: "Nos Valeurs Fondamentales",
    valuesSubtitle: "Ces quatre piliers soutiennent chacune de nos actions.",
    values: [
      {
        title: "Excellence & Conformité",
        text: "Nous ne faisons aucun compromis sur la qualité. Qu'il s'agisse de normes réglementaires ou de standards technologiques, nous garantissons des résultats sûrs et durables.",
      },
      {
        title: "Réactivité",
        text: "Le temps est précieux. Notre organisation agile nous permet de traiter vos demandes et de livrer vos commandes dans les délais les plus brefs, sans jamais sacrifier le soin du détail.",
      },
      {
        title: "Engagement Client",
        text: "Plus qu'un fournisseur, nous sommes votre partenaire. Votre réussite commerciale et votre satisfaction sont les seuls indicateurs de notre succès.",
      },
      {
        title: "Performance",
        text: "Grâce à des processus optimisés et une expertise technique pointue, nous transformons vos besoins en résultats concrets et mesurables.",
      },
    ],
    missionTitle: "Notre Mission",
    missionText: "Allier vision stratégique et excellence opérationnelle. Notre vocation est double : propulser les entreprises dans l'ère numérique grâce à des solutions technologiques de pointe, tout en fournissant des produits manufacturés d'une fiabilité absolue. Nous créons de la valeur durable, que ce soit par le conseil ou la fabrication.",
  },
  en: {
    title: "About Castillo Services",
    whoWeAre: "Who We Are",
    whoWeAreP1: "Castillo Services was born from a will to excellence. We are a hybrid company, combining the intellectual expertise of IT consulting with the industrial precision of manufacturing.",
    whoWeAreP2: "Our mission is twofold: to help businesses thrive in a complex digital landscape through innovative strategies, while providing individuals and professionals with manufactured products (plates, portraits) that meet the highest quality standards in the DRC. Since our founding, we have made it a point of honor to guarantee seriousness, speed, and customer satisfaction, regardless of the nature of your request.",
    valuesTitle: "Our Core Values",
    valuesSubtitle: "These four pillars support each of our actions.",
    values: [
      {
        title: "Excellence & Compliance",
        text: "We make no compromises on quality. Whether it's regulatory standards or technological benchmarks, we guarantee safe and sustainable results.",
      },
      {
        title: "Responsiveness",
        text: "Time is precious. Our agile organization allows us to process your requests and deliver your orders in the shortest possible time, without ever sacrificing attention to detail.",
      },
      {
        title: "Customer Commitment",
        text: "More than a supplier, we are your partner. Your commercial success and satisfaction are the only indicators of our success.",
      },
      {
        title: "Performance",
        text: "Through optimized processes and sharp technical expertise, we transform your needs into concrete and measurable results.",
      },
    ],
    missionTitle: "Our Mission",
    missionText: "Combining strategic vision and operational excellence. Our vocation is twofold: to propel businesses into the digital age through cutting-edge technological solutions, while providing manufactured products of absolute reliability. We create lasting value, whether through consulting or manufacturing.",
  },
};

function IconExcellence({ className = "" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className={className}>
      <path d="M13 2 22 6v6c0 6-4 10-9 10s-9-4-9-10V6l9-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 13l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconReactivite({ className = "" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className={className}>
      <path d="M4 20 20 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 4h7v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 13v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function IconEngagement({ className = "" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="13" r="7" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="13" r="7" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

function IconPerformance({ className = "" }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className={className}>
      <path d="M3 20h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      <path d="M5 17V9M12 17V4M19 17v-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = [IconExcellence, IconReactivite, IconEngagement, IconPerformance];

export default function AProposPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <h1 className="font-display text-3xl md:text-4xl text-ink max-w-[24ch]">
        {t.title}
      </h1>

      <div className="mt-14 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <h2 className="font-display text-xl text-ink">{t.whoWeAre}</h2>
        <div className="space-y-5 text-steel leading-relaxed max-w-[68ch]">
          <p>{t.whoWeAreP1}</p>
          <p>{t.whoWeAreP2}</p>
        </div>
      </div>

      <div className="mt-16 border-t border-steel-light/10 pt-16">
        <h2 className="font-display text-2xl text-ink max-w-[26ch]">{t.valuesTitle}</h2>
        <p className="mt-3 text-steel max-w-[52ch]">
          {t.valuesSubtitle}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {t.values.map((value, index) => {
            const Icon = ICONS[index];
            return (
              <div key={value.title} className="border-t border-electric/40 pt-5">
                <Icon className="text-electric" />
                <h3 className="font-sans font-medium text-ink mt-3">{value.title}</h3>
                <p className="mt-2 text-steel text-sm leading-relaxed max-w-[42ch]">{value.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 border-t border-steel-light/10 pt-16 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <h2 className="font-display text-xl text-ink">{t.missionTitle}</h2>
        <p className="text-steel leading-relaxed max-w-[68ch]">
          {t.missionText}
        </p>
      </div>
    </div>
  );
}