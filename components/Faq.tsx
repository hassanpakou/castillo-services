"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

type FaqCategory = {
  id: string;
  labelFr: string;
  labelEn: string;
};

type FaqItem = {
  category: string;
  qFr: string;
  qEn: string;
  aFr: string;
  aEn: string;
};

const CATEGORIES: FaqCategory[] = [
  { id: "all", labelFr: "Toutes les questions", labelEn: "All questions" },
  { id: "agent", labelFr: "Portail Agent DGI", labelEn: "DGI Agent Portal" },
  { id: "usager", labelFr: "Portail Usager", labelEn: "User Portal" },
  { id: "operations", labelFr: "Opérations spécifiques", labelEn: "Specific Operations" },
  { id: "paiement", labelFr: "Paiement & Assurance", labelEn: "Payment & Insurance" },
  { id: "suivi", labelFr: "Suivi & Livraison", labelEn: "Tracking & Delivery" },
  { id: "technique", labelFr: "Problèmes techniques", labelEn: "Technical Issues" },
];

const FAQ_ITEMS: FaqItem[] = [
  // PORTAIL AGENT DGI
  {
    category: "agent",
    qFr: "Quel est l'objectif principal du Portail Agent DGI ?",
    qEn: "What is the main objective of the DGI Agent Portal?",
    aFr: "Le Portail Agent DGI permet aux agents de la Direction Générale des Impôts d'assurer le contrôle de conformité, la vérification de la légalité et le traitement sécurisé des demandes d'immatriculation introduites par les requérants, jusqu'à la production des plaques.",
    aEn: "The DGI Agent Portal allows agents of the General Directorate of Taxes to ensure compliance control, legality verification, and secure processing of registration requests submitted by applicants, up to the production of plates.",
  },
  {
    category: "agent",
    qFr: "Quels sont les différents profils d'utilisateurs de la plateforme ?",
    qEn: "What are the different user profiles on the platform?",
    aFr: "Le système comporte cinq profils principaux : Vérificateur (contrôle initial), Contre-vérificateur (second niveau de contrôle), Validateur (décision finale et génération de la note de perception), Apurateur (traitement après paiement et lancement de la production), et Gestionnaire/Superviseur (supervision, reporting, statistiques, stocks et gestion des litiges).",
    aEn: "The system has five main profiles: Verifier (initial control), Counter-verifier (second level of control), Validator (final decision and generation of the assessment notice), Apurator (processing after payment and launch of production), and Manager/Supervisor (supervision, reporting, statistics, stocks, and dispute management).",
  },
  {
    category: "agent",
    qFr: "Quelle est la mission du Vérificateur ?",
    qEn: "What is the Verifier's mission?",
    aFr: "Le Vérificateur examine la conformité du dossier. Il vérifie notamment que le dossier est complet, que les informations relatives au véhicule sont cohérentes et que les pièces justificatives respectent les exigences administratives. Il peut valider le dossier pour la suite du processus ou le rejeter pour correction.",
    aEn: "The Verifier examines the file's compliance. They check that the file is complete, that vehicle information is consistent, and that supporting documents meet administrative requirements. They can validate the file for the next step or reject it for correction.",
  },
  {
    category: "agent",
    qFr: "Pourquoi le bouton « Valider » ne s'active-t-il pas immédiatement ?",
    qEn: "Why doesn't the \"Validate\" button activate immediately?",
    aFr: "Le bouton de validation devient disponible après consultation, visualisation et approbation individuelle de l'ensemble des documents téléversés par le requérant. Cette étape permet de garantir un contrôle complet du dossier.",
    aEn: "The validation button becomes available after consultation, viewing, and individual approval of all documents uploaded by the applicant. This step ensures a complete review of the file.",
  },
  {
    category: "agent",
    qFr: "Quel est le rôle du Validateur ?",
    qEn: "What is the Validator's role?",
    aFr: "Le Validateur prend la décision finale sur le dossier. Après validation, le système peut générer automatiquement la note de perception, qui est transmise au requérant par e-mail.",
    aEn: "The Validator makes the final decision on the file. After validation, the system can automatically generate the assessment notice, which is sent to the applicant by email.",
  },
  {
    category: "agent",
    qFr: "À quel moment l'Apurateur intervient-il ?",
    qEn: "When does the Apurator intervene?",
    aFr: "L'Apurateur intervient après la confirmation du paiement de la note de perception. Il vérifie la régularité du paiement, procède au traitement permettant la génération du numéro de plaque, peut modifier le site de livraison lorsque cela est nécessaire, et lance la commande de production de la plaque et du certificat d'immatriculation.",
    aEn: "The Apurator intervenes after confirmation of payment of the assessment notice. They verify the regularity of the payment, proceed with the processing allowing the generation of the plate number, can modify the delivery site when necessary, and launch the production order for the plate and registration certificate.",
  },

  // PORTAIL USAGER
  {
    category: "usager",
    qFr: "De quoi ai-je besoin avant de commencer une demande d'immatriculation ?",
    qEn: "What do I need before starting a registration request?",
    aFr: "Vous devez notamment disposer : d'un Numéro d'Identification Fiscale (NIF), d'une adresse e-mail valide, d'un numéro de téléphone, du numéro de châssis du véhicule, et des documents justificatifs requis pour votre opération.",
    aEn: "You need in particular: a Tax Identification Number (NIF), a valid email address, a phone number, the vehicle chassis number, and the required supporting documents for your operation.",
  },
  {
    category: "usager",
    qFr: "Comment commencer une demande d'immatriculation ?",
    qEn: "How to start a registration request?",
    aFr: "Depuis la plateforme SNIV, accédez à « IMMATRICULATION », puis à « ACCUEIL » et cliquez sur « COMMENCER LA PROCÉDURE ».",
    aEn: "From the SNIV platform, access \"REGISTRATION\", then \"HOME\" and click on \"START THE PROCEDURE\".",
  },
  {
    category: "usager",
    qFr: "Comment mon adresse e-mail est-elle vérifiée ?",
    qEn: "How is my email address verified?",
    aFr: "Après avoir saisi votre adresse e-mail, cliquez sur « ENVOYER LE CODE ». Un code OTP à usage unique vous sera envoyé par e-mail. Saisissez ensuite le code reçu et cliquez sur « VÉRIFIER LE CODE » pour poursuivre la procédure.",
    aEn: "After entering your email address, click on \"SEND CODE\". A single-use OTP code will be sent to you by email. Then enter the received code and click on \"VERIFY CODE\" to continue the procedure.",
  },
  {
    category: "usager",
    qFr: "Que faire si je ne reçois pas le code OTP ?",
    qEn: "What to do if I don't receive the OTP code?",
    aFr: "Vérifiez d'abord le dossier « Spam » ou « Courriers indésirables ». Assurez-vous également que l'adresse e-mail saisie est correcte, valide et active. Si le problème persiste, vous pouvez essayer avec une autre adresse e-mail ou contacter le support.",
    aEn: "First check your \"Spam\" or \"Junk\" folder. Also make sure the email address entered is correct, valid, and active. If the problem persists, you can try another email address or contact support.",
  },
  {
    category: "usager",
    qFr: "Quelles informations dois-je renseigner pour commencer la demande ?",
    qEn: "What information do I need to provide to start the request?",
    aFr: "Vous devez renseigner notamment : votre NIF, le numéro de châssis, votre numéro de téléphone, et le type de véhicule. Selon l'opération, le système peut également demander des informations complémentaires.",
    aEn: "You must provide in particular: your NIF, the chassis number, your phone number, and the vehicle type. Depending on the operation, the system may also request additional information.",
  },

  // OPÉRATIONS SPÉCIFIQUES
  {
    category: "operations",
    qFr: "Comment effectuer un changement de plaque ?",
    qEn: "How to make a plate change?",
    aFr: "Après la vérification de votre adresse e-mail par OTP, vous devez renseigner le numéro de la plaque actuelle ainsi que votre NIF afin que le système puisse identifier le véhicule concerné.",
    aEn: "After verification of your email address by OTP, you must enter the current plate number as well as your NIF so that the system can identify the vehicle concerned.",
  },
  {
    category: "operations",
    qFr: "Puis-je modifier le nom du propriétaire lors d'un changement de plaque ?",
    qEn: "Can I change the owner's name during a plate change?",
    aFr: "Non. Les informations liées au NIF, notamment le nom, le post-nom et le prénom ou la raison sociale, sont récupérées automatiquement et ne sont pas modifiables lorsque les champs sont verrouillés. Selon l'opération, le téléphone, l'adresse et le site de retrait peuvent être modifiables.",
    aEn: "No. Information linked to the NIF, including name, post-name, and first name or company name, is automatically retrieved and cannot be modified when fields are locked. Depending on the operation, phone, address, and pickup site may be editable.",
  },
  {
    category: "operations",
    qFr: "À quoi servent les « Inscriptions complémentaires » ?",
    qEn: "What are \"Additional Registrations\" for?",
    aFr: "Cette opération permet de mettre à jour certaines informations concernant un véhicule déjà enregistré dans le système, notamment l'usage du véhicule, la couleur, ou les noms du propriétaire.",
    aEn: "This operation allows updating certain information concerning a vehicle already registered in the system, including vehicle usage, color, or owner's names.",
  },
  {
    category: "operations",
    qFr: "Dois-je contacter mon assureur après une modification de l'usage ou de la couleur ?",
    qEn: "Should I contact my insurer after a usage or color modification?",
    aFr: "Oui. Lorsque la modification concerne l'usage ou la couleur et qu'elle a une incidence sur l'assurance, le requérant doit prendre contact avec son assureur afin de mettre à jour sa couverture avant de poursuivre la procédure.",
    aEn: "Yes. When the modification concerns usage or color and affects insurance, the applicant must contact their insurer to update their coverage before continuing the procedure.",
  },
  {
    category: "operations",
    qFr: "Comment commencer une procédure de mutation (transfert de propriété) ?",
    qEn: "How to start a mutation (ownership transfer) procedure?",
    aFr: "Depuis la plateforme SNIV, sélectionnez « IMMATRICULATION », puis l'opération « MUTATION ». Après la vérification de l'e-mail par OTP, vous pouvez initialiser la demande.",
    aEn: "From the SNIV platform, select \"REGISTRATION\", then the \"MUTATION\" operation. After email verification by OTP, you can initialize the request.",
  },
  {
    category: "operations",
    qFr: "Qu'est-ce qu'un duplicata ?",
    qEn: "What is a duplicate?",
    aFr: "Le duplicata permet de remplacer une plaque ou un certificat d'immatriculation perdu, volé, détérioré ou devenu illisible, tout en conservant les informations et le numéro d'immatriculation du véhicule.",
    aEn: "A duplicate allows replacing a lost, stolen, damaged, or illegible plate or registration certificate, while keeping the vehicle's information and registration number.",
  },
  {
    category: "operations",
    qFr: "Quels sont les types de duplicata disponibles ?",
    qEn: "What types of duplicates are available?",
    aFr: "Trois types de duplicata sont prévus : Duplicata d'une paire de plaques (lorsque les deux plaques sont perdues, volées ou détériorées), Duplicata d'une demi-paire (lorsqu'une seule plaque est perdue ou détériorée), et Duplicata du certificat d'immatriculation (lorsque seule la carte rose doit être remplacée).",
    aEn: "Three types of duplicates are available: Duplicate of a pair of plates (when both plates are lost, stolen, or damaged), Duplicate of a half-pair (when only one plate is lost or damaged), and Duplicate of the registration certificate (when only the pink card needs to be replaced).",
  },
  {
    category: "operations",
    qFr: "À quoi sert la démarche « Changement d'adresse » ?",
    qEn: "What is the \"Address Change\" procedure for?",
    aFr: "Elle permet de mettre à jour l'adresse de résidence du propriétaire ou le siège de son entreprise sans changer le propriétaire ni le numéro de plaque.",
    aEn: "It allows updating the owner's residential address or company headquarters without changing the owner or plate number.",
  },
  {
    category: "operations",
    qFr: "Qu'est-ce qu'une plaque personnalisée ?",
    qEn: "What is a custom plate?",
    aFr: "Il s'agit d'une plaque permettant au propriétaire de choisir un numéro ou une combinaison alphanumérique personnalisée, conformément aux règles applicables.",
    aEn: "It's a plate that allows the owner to choose a custom number or alphanumeric combination, in accordance with applicable rules.",
  },
  {
    category: "operations",
    qFr: "Puis-je demander directement une plaque personnalisée pour un véhicule non immatriculé ?",
    qEn: "Can I directly request a custom plate for an unregistered vehicle?",
    aFr: "Non. Le véhicule doit d'abord faire l'objet d'une demande de nouvelle immatriculation standard. Le numéro attribué servira ensuite de base à la procédure de personnalisation.",
    aEn: "No. The vehicle must first be subject to a new standard registration request. The assigned number will then serve as the basis for the customization procedure.",
  },

  // PAIEMENT & ASSURANCE
  {
    category: "paiement",
    qFr: "Où puis-je payer ma note de perception ?",
    qEn: "Where can I pay my assessment notice?",
    aFr: "Le paiement doit être effectué auprès des banques ou moyens de paiement indiqués sur la note de perception. Il est important de conserver la preuve de paiement.",
    aEn: "Payment must be made at the banks or payment methods indicated on the assessment notice. It is important to keep the proof of payment.",
  },
  {
    category: "paiement",
    qFr: "J'ai payé, mais mon paiement n'est toujours pas validé. Que faire ?",
    qEn: "I paid, but my payment is still not validated. What to do?",
    aFr: "Il peut exister un délai de rapprochement entre le paiement et la plateforme. Contactez le support en transmettant votre numéro SNIV et une preuve de paiement lisible. Une vérification pourra alors être effectuée afin de régulariser le paiement.",
    aEn: "There may be a reconciliation delay between the payment and the platform. Contact support by sending your SNIV number and a readable proof of payment. A verification can then be performed to regularize the payment.",
  },
  {
    category: "paiement",
    qFr: "Quelle durée d'assurance puis-je choisir ?",
    qEn: "What insurance duration can I choose?",
    aFr: "Pour les démarches nécessitant une assurance, la couverture peut être choisie pour une durée de 6 mois ou 12 mois, selon les options proposées par la plateforme.",
    aEn: "For procedures requiring insurance, coverage can be chosen for a duration of 6 months or 12 months, depending on the options offered by the platform.",
  },
  {
    category: "paiement",
    qFr: "Pourquoi le montant de l'assurance ou de la note peut-il changer ?",
    qEn: "Why can the insurance or notice amount change?",
    aFr: "Le montant initial affiché peut être ajusté en fonction des informations définitivement validées par la DGI, notamment la puissance fiscale du véhicule. Le montant définitif est celui indiqué sur la note de perception finale.",
    aEn: "The initial amount displayed may be adjusted based on information definitively validated by the DGI, including the vehicle's fiscal power. The final amount is the one indicated on the final assessment notice.",
  },
  {
    category: "paiement",
    qFr: "Je n'ai pas reçu mon certificat ou ma quittance d'assurance par e-mail. Que faire ?",
    qEn: "I didn't receive my insurance certificate or receipt by email. What to do?",
    aFr: "Vérifiez d'abord votre dossier « Spam » ou « Courriers indésirables ». En cas d'erreur technique lors de la génération ou du téléchargement du document, réessayez ultérieurement. Si le problème persiste, contactez le support avec votre numéro SNIV et votre preuve de paiement afin qu'une vérification soit effectuée.",
    aEn: "First check your \"Spam\" or \"Junk\" folder. In case of a technical error during document generation or download, try again later. If the problem persists, contact support with your SNIV number and proof of payment so that a verification can be performed.",
  },
  {
    category: "paiement",
    qFr: "Pourquoi mon assurance SONAS reste-t-elle en statut « Pending » ?",
    qEn: "Why does my SONAS insurance remain in \"Pending\" status?",
    aFr: "Le statut « Pending » signifie que la souscription n'a pas encore été confirmée par le processus d'intégration avec la SONAS. Une vérification technique peut être nécessaire.",
    aEn: "The \"Pending\" status means that the subscription has not yet been confirmed by the integration process with SONAS. A technical verification may be necessary.",
  },

  // SUIVI & LIVRAISON
  {
    category: "suivi",
    qFr: "Comment suivre l'évolution de ma demande ?",
    qEn: "How to track the progress of my request?",
    aFr: "Après la soumission, un numéro de référence commençant par SNIV est attribué à votre dossier. Utilisez ce numéro dans la rubrique « Vérifier le statut », « Suivi » ou « Mon dossier », selon l'interface disponible, afin de consulter l'évolution de la demande.",
    aEn: "After submission, a reference number starting with SNIV is assigned to your file. Use this number in the \"Check status\", \"Tracking\", or \"My file\" section, depending on the available interface, to check the progress of the request.",
  },
  {
    category: "suivi",
    qFr: "Quels sont les principaux statuts que peut afficher un dossier ?",
    qEn: "What are the main statuses a file can display?",
    aFr: "Selon l'étape du traitement, le dossier peut notamment passer par les statuts suivants : Brouillon, Soumise, En attente de paiement, Payée, Première vérification, Deuxième vérification, Validée, Commandée, En cours d'apurement, Imprimée, Livrée, Prête pour le retrait.",
    aEn: "Depending on the processing stage, the file can go through the following statuses: Draft, Submitted, Pending payment, Paid, First verification, Second verification, Validated, Ordered, In progress of clearing, Printed, Delivered, Ready for pickup.",
  },
  {
    category: "suivi",
    qFr: "Pourquoi mon dossier affiche-t-il toujours « Commandé » alors que ma plaque est déjà produite ou livrée ?",
    qEn: "Why does my file still show \"Ordered\" when my plate is already produced or delivered?",
    aFr: "Le statut affiché sur la plateforme peut présenter un délai de synchronisation avec les informations relatives à la production ou à la livraison. Vérifiez votre adresse e-mail afin de vous assurer qu'aucun message concernant l'expédition ou la livraison ne vous a été envoyé. Si nécessaire, contactez le support avec votre numéro SNIV.",
    aEn: "The status displayed on the platform may have a synchronization delay with production or delivery information. Check your email to make sure no message regarding shipping or delivery has been sent to you. If necessary, contact support with your SNIV number.",
  },
  {
    category: "suivi",
    qFr: "Où puis-je récupérer ma plaque et ma carte rose ?",
    qEn: "Where can I pick up my plate and pink card?",
    aFr: "Le retrait s'effectue sur le site de livraison ou de retrait sélectionné lors de la demande, selon les modalités communiquées par la DGI. Lors du retrait, prévoyez notamment votre pièce d'identité originale et votre numéro de référence SNIV.",
    aEn: "Pickup is made at the delivery or pickup site selected during the request, according to the terms communicated by the DGI. During pickup, bring in particular your original ID and your SNIV reference number.",
  },
  {
    category: "suivi",
    qFr: "Ma plaque a été livrée dans une autre ville ou province. Que dois-je faire ?",
    qEn: "My plate was delivered to another city or province. What should I do?",
    aFr: "Contactez le site DGI concerné ou le support avec votre numéro SNIV afin de vérifier la situation et les possibilités de transfert vers le site approprié.",
    aEn: "Contact the relevant DGI site or support with your SNIV number to verify the situation and transfer possibilities to the appropriate site.",
  },

  // PROBLÈMES TECHNIQUES
  {
    category: "technique",
    qFr: "Que faire lorsqu'un document est rejeté par la DGI ?",
    qEn: "What to do when a document is rejected by the DGI?",
    aFr: "Lorsque le système permet la resoumission, le motif du rejet est affiché dans le dossier. Vous devez téléverser un nouveau document conforme dans le format accepté par la plateforme. Le nouveau fichier remplacera alors le document rejeté selon le mécanisme prévu.",
    aEn: "When the system allows resubmission, the reason for rejection is displayed in the file. You must upload a new compliant document in the format accepted by the platform. The new file will then replace the rejected document according to the provided mechanism.",
  },
  {
    category: "technique",
    qFr: "J'ai annulé ma demande, mais le système indique que le numéro de châssis a déjà été utilisé. Que faire ?",
    qEn: "I canceled my request, but the system indicates that the chassis number has already been used. What to do?",
    aFr: "Une demande annulée peut rester enregistrée comme « Brouillon ». Consultez votre tableau de bord et recherchez la demande associée au numéro de châssis. Selon la situation, vous pouvez reprendre cette demande ou la supprimer avant de recommencer la procédure.",
    aEn: "A canceled request may remain registered as \"Draft\". Check your dashboard and search for the request associated with the chassis number. Depending on the situation, you can resume this request or delete it before restarting the procedure.",
  },
  {
    category: "technique",
    qFr: "Le système affiche « Données invalides » lorsque je valide ma demande. Que dois-je vérifier ?",
    qEn: "The system displays \"Invalid data\" when I validate my request. What should I check?",
    aFr: "Vérifiez notamment : l'exactitude du numéro de châssis, la concordance du châssis avec les documents du véhicule, la puissance fiscale, l'usage sélectionné, et les autres informations techniques demandées.",
    aEn: "Check in particular: the accuracy of the chassis number, the consistency of the chassis with vehicle documents, the fiscal power, the selected usage, and other requested technical information.",
  },
  {
    category: "technique",
    qFr: "Quelles informations dois-je préparer avant de contacter le support ?",
    qEn: "What information should I prepare before contacting support?",
    aFr: "Afin de faciliter le traitement de votre demande, préparez : votre numéro de suivi ou de référence SNIV, votre numéro de plaque (si disponible), votre numéro de châssis, votre preuve de paiement (si le paiement a déjà été effectué), une capture d'écran du message d'erreur (en cas de problème technique), et toute autre information permettant d'identifier rapidement votre dossier.",
    aEn: "To facilitate the processing of your request, prepare: your tracking or SNIV reference number, your plate number (if available), your chassis number, your proof of payment (if payment has already been made), a screenshot of the error message (in case of technical problem), and any other information allowing quick identification of your file.",
  },
  {
    category: "technique",
    qFr: "Pourquoi le téléchargement de mon certificat ou document PDF échoue-t-il ?",
    qEn: "Why does the download of my certificate or PDF document fail?",
    aFr: "Un problème technique peut empêcher la génération ou le téléchargement du document. Si le message « Request failed with status code 502 » apparaît, le problème doit être transmis au support technique.",
    aEn: "A technical problem may prevent the generation or download of the document. If the message \"Request failed with status code 502\" appears, the problem must be transmitted to technical support.",
  },
];

const ui = {
  fr: {
    noQuestions: "Aucune question disponible pour cette catégorie.",
  },
  en: {
    noQuestions: "No questions available for this category.",
  },
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { lang } = useLang();
  const t = ui[lang];

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
                : "bg-white/5 text-steel hover:bg-white/10 hover:text-ink"
            }`}
          >
            {lang === "fr" ? cat.labelFr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Liste des questions */}
      <div className="divide-y divide-white/10 border-t border-b border-white/10">
        {filteredItems.map((item, i) => {
          const isOpen = openIndex === i;
          const question = lang === "fr" ? item.qFr : item.qEn;
          const answer = lang === "fr" ? item.aFr : item.aEn;
          return (
            <div key={question}>
              <button
                className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-sans font-medium text-ink group-hover:text-electric-light transition-colors">
                  {question}
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
                  {answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-steel py-8">
          {t.noQuestions}
        </p>
      )}
    </div>
  );
}