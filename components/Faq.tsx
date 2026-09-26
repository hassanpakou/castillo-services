"use client";

import { useState } from "react";

type FaqCategory = {
  id: string;
  label: string;
};

type FaqItem = {
  q: string;
  a: string;
  category: string;
};

const CATEGORIES: FaqCategory[] = [
  { id: "all", label: "Toutes les questions" },
  { id: "agent", label: "Portail Agent DGI" },
  { id: "usager", label: "Portail Usager" },
  { id: "operations", label: "Opérations spécifiques" },
  { id: "paiement", label: "Paiement & Assurance" },
  { id: "suivi", label: "Suivi & Livraison" },
  { id: "technique", label: "Problèmes techniques" },
];

const FAQ_ITEMS: FaqItem[] = [
  // PORTAIL AGENT DGI
  {
    category: "agent",
    q: "Quel est l'objectif principal du Portail Agent DGI ?",
    a: "Le Portail Agent DGI permet aux agents de la Direction Générale des Impôts d'assurer le contrôle de conformité, la vérification de la légalité et le traitement sécurisé des demandes d'immatriculation introduites par les requérants, jusqu'à la production des plaques.",
  },
  {
    category: "agent",
    q: "Quels sont les différents profils d'utilisateurs de la plateforme ?",
    a: "Le système comporte cinq profils principaux : Vérificateur (contrôle initial), Contre-vérificateur (second niveau de contrôle), Validateur (décision finale et génération de la note de perception), Apurateur (traitement après paiement et lancement de la production), et Gestionnaire/Superviseur (supervision, reporting, statistiques, stocks et gestion des litiges).",
  },
  {
    category: "agent",
    q: "Quelle est la mission du Vérificateur ?",
    a: "Le Vérificateur examine la conformité du dossier. Il vérifie notamment que le dossier est complet, que les informations relatives au véhicule sont cohérentes et que les pièces justificatives respectent les exigences administratives. Il peut valider le dossier pour la suite du processus ou le rejeter pour correction.",
  },
  {
    category: "agent",
    q: "Pourquoi le bouton « Valider » ne s'active-t-il pas immédiatement ?",
    a: "Le bouton de validation devient disponible après consultation, visualisation et approbation individuelle de l'ensemble des documents téléversés par le requérant. Cette étape permet de garantir un contrôle complet du dossier.",
  },
  {
    category: "agent",
    q: "Quel est le rôle du Validateur ?",
    a: "Le Validateur prend la décision finale sur le dossier. Après validation, le système peut générer automatiquement la note de perception, qui est transmise au requérant par e-mail.",
  },
  {
    category: "agent",
    q: "À quel moment l'Apurateur intervient-il ?",
    a: "L'Apurateur intervient après la confirmation du paiement de la note de perception. Il vérifie la régularité du paiement, procède au traitement permettant la génération du numéro de plaque, peut modifier le site de livraison lorsque cela est nécessaire, et lance la commande de production de la plaque et du certificat d'immatriculation.",
  },

  // PORTAIL USAGER
  {
    category: "usager",
    q: "De quoi ai-je besoin avant de commencer une demande d'immatriculation ?",
    a: "Vous devez notamment disposer : d'un Numéro d'Identification Fiscale (NIF), d'une adresse e-mail valide, d'un numéro de téléphone, du numéro de châssis du véhicule, et des documents justificatifs requis pour votre opération.",
  },
  {
    category: "usager",
    q: "Comment commencer une demande d'immatriculation ?",
    a: "Depuis la plateforme SNIV, accédez à « IMMATRICULATION », puis à « ACCUEIL » et cliquez sur « COMMENCER LA PROCÉDURE ».",
  },
  {
    category: "usager",
    q: "Comment mon adresse e-mail est-elle vérifiée ?",
    a: "Après avoir saisi votre adresse e-mail, cliquez sur « ENVOYER LE CODE ». Un code OTP à usage unique vous sera envoyé par e-mail. Saisissez ensuite le code reçu et cliquez sur « VÉRIFIER LE CODE » pour poursuivre la procédure.",
  },
  {
    category: "usager",
    q: "Que faire si je ne reçois pas le code OTP ?",
    a: "Vérifiez d'abord le dossier « Spam » ou « Courriers indésirables ». Assurez-vous également que l'adresse e-mail saisie est correcte, valide et active. Si le problème persiste, vous pouvez essayer avec une autre adresse e-mail ou contacter le support.",
  },
  {
    category: "usager",
    q: "Quelles informations dois-je renseigner pour commencer la demande ?",
    a: "Vous devez renseigner notamment : votre NIF, le numéro de châssis, votre numéro de téléphone, et le type de véhicule. Selon l'opération, le système peut également demander des informations complémentaires.",
  },

  // OPÉRATIONS SPÉCIFIQUES
  {
    category: "operations",
    q: "Comment effectuer un changement de plaque ?",
    a: "Après la vérification de votre adresse e-mail par OTP, vous devez renseigner le numéro de la plaque actuelle ainsi que votre NIF afin que le système puisse identifier le véhicule concerné.",
  },
  {
    category: "operations",
    q: "Puis-je modifier le nom du propriétaire lors d'un changement de plaque ?",
    a: "Non. Les informations liées au NIF, notamment le nom, le post-nom et le prénom ou la raison sociale, sont récupérées automatiquement et ne sont pas modifiables lorsque les champs sont verrouillés. Selon l'opération, le téléphone, l'adresse et le site de retrait peuvent être modifiables.",
  },
  {
    category: "operations",
    q: "À quoi servent les « Inscriptions complémentaires » ?",
    a: "Cette opération permet de mettre à jour certaines informations concernant un véhicule déjà enregistré dans le système, notamment l'usage du véhicule, la couleur, ou les noms du propriétaire.",
  },
  {
    category: "operations",
    q: "Dois-je contacter mon assureur après une modification de l'usage ou de la couleur ?",
    a: "Oui. Lorsque la modification concerne l'usage ou la couleur et qu'elle a une incidence sur l'assurance, le requérant doit prendre contact avec son assureur afin de mettre à jour sa couverture avant de poursuivre la procédure.",
  },
  {
    category: "operations",
    q: "Comment commencer une procédure de mutation (transfert de propriété) ?",
    a: "Depuis la plateforme SNIV, sélectionnez « IMMATRICULATION », puis l'opération « MUTATION ». Après la vérification de l'e-mail par OTP, vous pouvez initialiser la demande.",
  },
  {
    category: "operations",
    q: "Qu'est-ce qu'un duplicata ?",
    a: "Le duplicata permet de remplacer une plaque ou un certificat d'immatriculation perdu, volé, détérioré ou devenu illisible, tout en conservant les informations et le numéro d'immatriculation du véhicule.",
  },
  {
    category: "operations",
    q: "Quels sont les types de duplicata disponibles ?",
    a: "Trois types de duplicata sont prévus : Duplicata d'une paire de plaques (lorsque les deux plaques sont perdues, volées ou détériorées), Duplicata d'une demi-paire (lorsqu'une seule plaque est perdue ou détériorée), et Duplicata du certificat d'immatriculation (lorsque seule la carte rose doit être remplacée).",
  },
  {
    category: "operations",
    q: "À quoi sert la démarche « Changement d'adresse » ?",
    a: "Elle permet de mettre à jour l'adresse de résidence du propriétaire ou le siège de son entreprise sans changer le propriétaire ni le numéro de plaque.",
  },
  {
    category: "operations",
    q: "Qu'est-ce qu'une plaque personnalisée ?",
    a: "Il s'agit d'une plaque permettant au propriétaire de choisir un numéro ou une combinaison alphanumérique personnalisée, conformément aux règles applicables.",
  },
  {
    category: "operations",
    q: "Puis-je demander directement une plaque personnalisée pour un véhicule non immatriculé ?",
    a: "Non. Le véhicule doit d'abord faire l'objet d'une demande de nouvelle immatriculation standard. Le numéro attribué servira ensuite de base à la procédure de personnalisation.",
  },

  // PAIEMENT & ASSURANCE
  {
    category: "paiement",
    q: "Où puis-je payer ma note de perception ?",
    a: "Le paiement doit être effectué auprès des banques ou moyens de paiement indiqués sur la note de perception. Il est important de conserver la preuve de paiement.",
  },
  {
    category: "paiement",
    q: "J'ai payé, mais mon paiement n'est toujours pas validé. Que faire ?",
    a: "Il peut exister un délai de rapprochement entre le paiement et la plateforme. Contactez le support en transmettant votre numéro SNIV et une preuve de paiement lisible. Une vérification pourra alors être effectuée afin de régulariser le paiement.",
  },
  {
    category: "paiement",
    q: "Quelle durée d'assurance puis-je choisir ?",
    a: "Pour les démarches nécessitant une assurance, la couverture peut être choisie pour une durée de 6 mois ou 12 mois, selon les options proposées par la plateforme.",
  },
  {
    category: "paiement",
    q: "Pourquoi le montant de l'assurance ou de la note peut-il changer ?",
    a: "Le montant initial affiché peut être ajusté en fonction des informations définitivement validées par la DGI, notamment la puissance fiscale du véhicule. Le montant définitif est celui indiqué sur la note de perception finale.",
  },
  {
    category: "paiement",
    q: "Je n'ai pas reçu mon certificat ou ma quittance d'assurance par e-mail. Que faire ?",
    a: "Vérifiez d'abord votre dossier « Spam » ou « Courriers indésirables ». En cas d'erreur technique lors de la génération ou du téléchargement du document, réessayez ultérieurement. Si le problème persiste, contactez le support avec votre numéro SNIV et votre preuve de paiement afin qu'une vérification soit effectuée.",
  },
  {
    category: "paiement",
    q: "Pourquoi mon assurance SONAS reste-t-elle en statut « Pending » ?",
    a: "Le statut « Pending » signifie que la souscription n'a pas encore été confirmée par le processus d'intégration avec la SONAS. Une vérification technique peut être nécessaire.",
  },

  // SUIVI & LIVRAISON
  {
    category: "suivi",
    q: "Comment suivre l'évolution de ma demande ?",
    a: "Après la soumission, un numéro de référence commençant par SNIV est attribué à votre dossier. Utilisez ce numéro dans la rubrique « Vérifier le statut », « Suivi » ou « Mon dossier », selon l'interface disponible, afin de consulter l'évolution de la demande.",
  },
  {
    category: "suivi",
    q: "Quels sont les principaux statuts que peut afficher un dossier ?",
    a: "Selon l'étape du traitement, le dossier peut notamment passer par les statuts suivants : Brouillon, Soumise, En attente de paiement, Payée, Première vérification, Deuxième vérification, Validée, Commandée, En cours d'apurement, Imprimée, Livrée, Prête pour le retrait.",
  },
  {
    category: "suivi",
    q: "Pourquoi mon dossier affiche-t-il toujours « Commandé » alors que ma plaque est déjà produite ou livrée ?",
    a: "Le statut affiché sur la plateforme peut présenter un délai de synchronisation avec les informations relatives à la production ou à la livraison. Vérifiez votre adresse e-mail afin de vous assurer qu'aucun message concernant l'expédition ou la livraison ne vous a été envoyé. Si nécessaire, contactez le support avec votre numéro SNIV.",
  },
  {
    category: "suivi",
    q: "Où puis-je récupérer ma plaque et ma carte rose ?",
    a: "Le retrait s'effectue sur le site de livraison ou de retrait sélectionné lors de la demande, selon les modalités communiquées par la DGI. Lors du retrait, prévoyez notamment votre pièce d'identité originale et votre numéro de référence SNIV.",
  },
  {
    category: "suivi",
    q: "Ma plaque a été livrée dans une autre ville ou province. Que dois-je faire ?",
    a: "Contactez le site DGI concerné ou le support avec votre numéro SNIV afin de vérifier la situation et les possibilités de transfert vers le site approprié.",
  },

  // PROBLÈMES TECHNIQUES
  {
    category: "technique",
    q: "Que faire lorsqu'un document est rejeté par la DGI ?",
    a: "Lorsque le système permet la resoumission, le motif du rejet est affiché dans le dossier. Vous devez téléverser un nouveau document conforme dans le format accepté par la plateforme. Le nouveau fichier remplacera alors le document rejeté selon le mécanisme prévu.",
  },
  {
    category: "technique",
    q: "J'ai annulé ma demande, mais le système indique que le numéro de châssis a déjà été utilisé. Que faire ?",
    a: "Une demande annulée peut rester enregistrée comme « Brouillon ». Consultez votre tableau de bord et recherchez la demande associée au numéro de châssis. Selon la situation, vous pouvez reprendre cette demande ou la supprimer avant de recommencer la procédure.",
  },
  {
    category: "technique",
    q: "Le système affiche « Données invalides » lorsque je valide ma demande. Que dois-je vérifier ?",
    a: "Vérifiez notamment : l'exactitude du numéro de châssis, la concordance du châssis avec les documents du véhicule, la puissance fiscale, l'usage sélectionné, et les autres informations techniques demandées.",
  },
  {
    category: "technique",
    q: "Quelles informations dois-je préparer avant de contacter le support ?",
    a: "Afin de faciliter le traitement de votre demande, préparez : votre numéro de suivi ou de référence SNIV, votre numéro de plaque (si disponible), votre numéro de châssis, votre preuve de paiement (si le paiement a déjà été effectué), une capture d'écran du message d'erreur (en cas de problème technique), et toute autre information permettant d'identifier rapidement votre dossier.",
  },
  {
    category: "technique",
    q: "Pourquoi le téléchargement de mon certificat ou document PDF échoue-t-il ?",
    a: "Un problème technique peut empêcher la génération ou le téléchargement du document. Si le message « Request failed with status code 502 » apparaît, le problème doit être transmis au support technique.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-electric text-white shadow-glow-sm"
                : "bg-white/5 text-steel hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Liste des questions */}
      <div className="divide-y divide-white/10 border-t border-b border-white/10">
        {filteredItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <button
                className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-sans font-medium text-ink group-hover:text-electric-light transition-colors">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 mt-1 text-electric text-lg leading-none transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 pr-10 text-steel text-sm leading-relaxed animate-fade-up">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-steel py-8">
          Aucune question disponible pour cette catégorie.
        </p>
      )}
    </div>
  );
}