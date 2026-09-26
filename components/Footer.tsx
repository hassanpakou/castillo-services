import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-electric via-cyan to-electric" />
      <div
        className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-electric/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl font-semibold">Castillo Services</span>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            Stratégie pour l&apos;avenir. Technologie pour aujourd&apos;hui.
          </p>
          <div className="mt-6 flex flex-col gap-1.5 text-sm text-white/75">
            <a href="mailto:contact@castilloservice.com" className="hover:text-electric-light transition-colors w-fit">
              contact@castilloservice.com
            </a>
            <div className="flex gap-4 mt-2 text-white/50">
              <a href="https://linkedin.com/" className="hover:text-electric-light transition-colors">LinkedIn</a>
              <a href="https://twitter.com/" className="hover:text-electric-light transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-electric-light mb-4">Liens Rapides</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/" className="inline-block hover:text-white hover:translate-x-1 transition-all">Accueil</Link></li>
            <li><Link href="/services" className="inline-block hover:text-white hover:translate-x-1 transition-all">Services</Link></li>
            <li><Link href="/a-propos" className="inline-block hover:text-white hover:translate-x-1 transition-all">À Propos de Nous</Link></li>
            <li><Link href="/contact" className="inline-block hover:text-white hover:translate-x-1 transition-all">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-electric-light mb-4">Nos Services</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/services#plaques" className="inline-block hover:text-white hover:translate-x-1 transition-all">Plaques d&apos;Immatriculation</Link></li>
            <li><Link href="/services#portraits" className="inline-block hover:text-white hover:translate-x-1 transition-all">Portraits Funéraires</Link></li>
            <li><Link href="/services#conseil" className="inline-block hover:text-white hover:translate-x-1 transition-all">Conseil en Stratégie</Link></li>
            <li><Link href="/services#digital" className="inline-block hover:text-white hover:translate-x-1 transition-all">Transformation Digitale</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-electric-light mb-4">Informations Légales</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all">Politique de confidentialité</a></li>
            <li><a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all">Déclaration d&apos;accessibilité</a></li>
            <li><a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all">Conditions générales</a></li>
          </ul>

          {/* NOUVEAU : Liste des 3 partenaires */}
          <h3 className="text-xs tracking-widest uppercase text-electric-light mt-6 mb-3">Nos Partenaires</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a
                  href="https://www.dgda.cd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
              >
                <span className="w-1 h-1 rounded-full bg-electric-light"/>
                Ministère des Finances
              </a>
            </li>
            <li>
              <a
                  href="https://dgi.gouv.cd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
              >
                <span className="w-1 h-1 rounded-full bg-electric"/>
                DGI
              </a>
            </li>
            <li>
              <a
                  href="https://www.sonas.cd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
              >
                <span className="w-1 h-1 rounded-full bg-cyan"/>
                SONAS
              </a>
            </li>
            <li>
              <a
                  href="https://www.dgda.cd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
              >
                <span className="w-1 h-1 rounded-full bg-electric-light"/>
                DGDA
              </a>
            </li>

            <li>
              <a
                  href="https://www.dgda.cd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
              >
                <span className="w-1 h-1 rounded-full bg-electric-light"/>
                RTNC
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div
            className="max-w-content mx-auto px-6 md:px-10 py-6 text-xs text-white/40 flex flex-wrap justify-between gap-2">
          <span>© 2026 Castillo Services. Tous droits réservés.</span>
          <span>Kinshasa — République Démocratique du Congo</span>
        </div>
      </div>
    </footer>
  );
}