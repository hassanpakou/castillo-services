"use client";

import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { useLang } from "@/context/LanguageContext";

const translations = {
  fr: {
    title: "Entrez en Contact",
    subtitle: "Prêt à transformer votre entreprise ? Commençons une conversation.",
    formTitle: "Envoyez-nous un Message",
    contactInfoTitle: "Nos Contacts",
    contactInfoDesc: "Vous avez des questions ? Nous sommes là pour vous aider. Contactez-nous via l'un de ces canaux.",
    email: "Email",
    phone: "Téléphone",
    address: "Siège Social",
    addressValue: "4 Avenue du Port — Rond-Point Forescom — Immeuble Forescom, 7e étage — Commune de la Gombe — Kinshasa, République Démocratique du Congo.",
    hours: "Heures d'Ouverture",
    hoursWeekdays: "Lundi – Vendredi : 8h30 – 16h30",
    hoursWeekend: "Samedi – Dimanche : Fermé",
    faqTitle: "Questions Fréquentes",
  },
  en: {
    title: "Get in Touch",
    subtitle: "Ready to transform your business? Let's start a conversation.",
    formTitle: "Send us a Message",
    contactInfoTitle: "Contact Information",
    contactInfoDesc: "Have questions? We're here to help. Reach out through any of these channels.",
    email: "Email",
    phone: "Phone",
    address: "Headquarters",
    addressValue: "4 Avenue du Port — Forescom Roundabout — Forescom Building, 7th floor — Gombe District — Kinshasa, Democratic Republic of Congo.",
    hours: "Opening Hours",
    hoursWeekdays: "Monday – Friday: 8:30 AM – 4:30 PM",
    hoursWeekend: "Saturday – Sunday: Closed",
    faqTitle: "Frequently Asked Questions",
  },
};

export default function ContactPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <h1 className="font-display text-3xl md:text-4xl text-ink max-w-[22ch]">
        {t.title}
      </h1>
      <p className="mt-4 text-steel max-w-[52ch]">
        {t.subtitle}
      </p>

      <div className="mt-14 grid md:grid-cols-[1.1fr_0.9fr] gap-14">
        <div>
          <h2 className="font-sans font-medium text-ink mb-6">{t.formTitle}</h2>
          <ContactForm />
        </div>

        <div className="plate p-8">
          <h2 className="font-sans font-medium text-ink mb-6">{t.contactInfoTitle}</h2>
          <p className="text-steel text-sm mb-6 leading-relaxed">
            {t.contactInfoDesc}
          </p>

          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-electric font-medium">{t.email}</dt>
              <dd className="mt-1">
                <a href="mailto:contact@castilloservice.com" className="underline-grow text-ink">
                  contact@castilloservice.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-electric font-medium">{t.phone}</dt>
              <dd className="mt-1">
                <a href="tel:+243803748393" className="underline-grow text-ink">
                  +243 803 748 393
                </a>
              </dd>
              <dd className="mt-1">
                <a href="tel:+243820113095" className="underline-grow text-ink">
                  +243 820 113 095
                </a>
              </dd>
              <dd className="mt-1">
                <a href="tel:+243821469174" className="underline-grow text-ink">
                  +243 821 469 174
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-electric font-medium">{t.address}</dt>
              <dd className="mt-1 text-ink leading-relaxed">
                {t.addressValue}
              </dd>
            </div>
            <div>
              <dt className="text-electric font-medium">{t.hours}</dt>
              <dd className="mt-1 text-ink">
                {t.hoursWeekdays}
                <br />
                {t.hoursWeekend}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-20 border-t border-steel-light/10 pt-16 max-w-[70ch]">
        <h2 className="font-display text-2xl text-ink mb-8">{t.faqTitle}</h2>
        <Faq />
      </div>
    </div>
  );
}