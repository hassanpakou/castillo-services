import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-24 text-center">
      <div className="w-24 h-24 mx-auto rounded-2xl bg-electric/10 flex items-center justify-center mb-6">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-electric">
          <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.58 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
        Vous êtes hors ligne
      </h1>
      <p className="text-steel text-lg mb-8 max-w-md mx-auto">
        Vérifiez votre connexion internet et réessayez.
      </p>
      <Link
        href="/"
        className="inline-block bg-electric text-white px-6 py-3 rounded-full font-medium hover:shadow-glow transition-all duration-300"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}