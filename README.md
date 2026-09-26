# Castillo Services — Site Next.js

Site vitrine pour Castillo Services (Kinshasa, RDC), construit avec Next.js 14 (App Router),
TypeScript et Tailwind CSS.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est alors accessible sur http://localhost:3000

## Structure

- `app/page.tsx` — Accueil
- `app/services/page.tsx` — Services (plaques, portraits, conseil/IT)
- `app/a-propos/page.tsx` — À Propos de Nous
- `app/contact/page.tsx` — Contact + FAQ
- `components/` — Header, Footer, formulaire de contact, FAQ

## À personnaliser avant mise en ligne

- Le formulaire de contact ouvre actuellement le client mail de l'utilisateur (`mailto:`).
  Pour un envoi silencieux, branchez-le sur un service comme Resend, Formspree ou une route
  API Next.js (`app/api/contact/route.ts`) avec votre propre fournisseur SMTP.
- Les liens LinkedIn / Twitter dans le footer pointent vers les pages génériques — à remplacer
  par vos comptes réels.
- Le contenu de la FAQ (page Contact) a été rédigé à titre indicatif et gagnera à être relu et
  ajusté.

## Déploiement

Le moyen le plus simple est [Vercel](https://vercel.com/) (créateur de Next.js) : connectez le
dépôt Git et le déploiement se fait automatiquement à chaque push.
