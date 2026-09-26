// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact — Castillo Services",
  description: "Contactez Castillo Services à Kinshasa, RDC, par e-mail, téléphone ou via notre formulaire.",
};

export default function ContactPage() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <h1 className="font-display text-3xl md:text-4xl text-ink max-w-[22ch]">
        Entrez en Contact
      </h1>
      <p className="mt-4 text-steel max-w-[52ch]">
        Prêt à transformer votre entreprise ? Commençons une conversation.
      </p>

      <div className="mt-14 grid md:grid-cols-[1.1fr_0.9fr] gap-14">
        <div>
          <h2 className="font-sans font-medium text-ink mb-6">Envoyez-nous un Message</h2>
          <ContactForm />
        </div>

        <div className="plate p-8">
          <div className="rivet-bl" /><div className="rivet-br" />
          <h2 className="font-sans font-medium text-ink mb-6">Nos Contacts</h2>
          <p className="text-steel text-sm mb-6 leading-relaxed">
            Vous avez des questions ? Nous sommes là pour vous aider. Contactez-nous via l&apos;un
            de ces canaux.
          </p>

          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-brass font-medium">Email</dt>
              <dd className="mt-1">
                <a href="mailto:contact@castilloservice.com" className="underline-grow text-ink">
                  contact@castilloservice.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-brass font-medium">Téléphone</dt>
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
              <dt className="text-brass font-medium">Siège Social</dt>
              <dd className="mt-1 text-ink leading-relaxed">
                4 Avenue du Port — Rond-Point Forescom — Immeuble Forescom, 7e étage — Commune
                de la Gombe — Kinshasa, République Démocratique du Congo.
              </dd>
            </div>
            <div>
              <dt className="text-brass font-medium">Heures d&apos;Ouverture</dt>
              <dd className="mt-1 text-ink">
                Lundi – Vendredi : 8h30 – 16h30
                <br />
                Samedi – Dimanche : Fermé
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 border-t border-ink/10 pt-16 max-w-[70ch]">
        <h2 className="font-display text-2xl text-ink mb-8">Questions Fréquentes</h2>
        <Faq />
      </div>
    </div>
  );
}
