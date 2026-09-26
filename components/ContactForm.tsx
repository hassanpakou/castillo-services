// components/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulation d'un appel API (à remplacer par ta vraie logique ex: fetch('/api/contact'))
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="p-6 border border-brass/40 bg-brass/5 text-ink">
        <h3 className="font-display text-lg">Message envoyé !</h3>
        <p className="text-sm text-steel mt-2 leading-relaxed">
          Merci pour votre intérêt. Notre équipe reviendra vers vous dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-ink mb-2 tracking-wide">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 bg-porcelain border border-ink/15 text-ink text-sm focus:outline-none focus:border-brass transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-ink mb-2 tracking-wide">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-porcelain border border-ink/15 text-ink text-sm focus:outline-none focus:border-brass transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-ink mb-2 tracking-wide">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          required
          className="w-full px-4 py-3 bg-porcelain border border-ink/15 text-ink text-sm focus:outline-none focus:border-brass transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-ink mb-2 tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-porcelain border border-ink/15 text-ink text-sm focus:outline-none focus:border-brass transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center bg-ink text-porcelain px-6 py-3 font-sans text-sm hover:bg-brass hover:text-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}