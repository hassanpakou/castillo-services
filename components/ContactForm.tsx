"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";

const translations = {
  fr: {
    nameLabel: "Nom complet",
    emailLabel: "Adresse e-mail",
    subjectLabel: "Sujet",
    messageLabel: "Message",
    categoryLabel: "Vous êtes",
    categories: {
      individual: "Particulier",
      company: "Entreprise",
      public: "Administration publique",
      ngo: "ONG / Association",
      other: "Autre",
    },
    submitButton: "Envoyer le message",
    submittingButton: "Envoi en cours...",
    successTitle: "Message envoyé !",
    successMessage: "Merci pour votre intérêt. Notre équipe reviendra vers vous dans les plus brefs délais.",
  },
  en: {
    nameLabel: "Full name",
    emailLabel: "Email address",
    subjectLabel: "Subject",
    messageLabel: "Message",
    categoryLabel: "You are",
    categories: {
      individual: "Individual",
      company: "Company",
      public: "Public administration",
      ngo: "NGO / Association",
      other: "Other",
    },
    submitButton: "Send message",
    submittingButton: "Sending...",
    successTitle: "Message sent!",
    successMessage: "Thank you for your interest. Our team will get back to you as soon as possible.",
  },
};

const CATEGORIES = [
  { value: "individual", icon: "👤" },
  { value: "company", icon: "🏢" },
  { value: "public", icon: "🏛️" },
  { value: "ngo", icon: "🤝" },
  { value: "other", icon: "✨" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedCategory, setSelectedCategory] = useState<string>("individual");
  const { lang } = useLang();
  const t = translations[lang];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="p-6 border border-electric/40 bg-electric/5 rounded-xl">
        <h3 className="font-display text-lg text-ink">{t.successTitle}</h3>
        <p className="text-sm text-steel mt-2 leading-relaxed">
          {t.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Champ catégorie - sélection visuelle */}
      <div>
        <label className="block text-xs font-medium text-ink mb-3 tracking-wide">
          {t.categoryLabel}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            const labelKey = cat.value as keyof typeof t.categories;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all duration-300 ${
                  isSelected
                    ? "bg-electric/15 border-electric text-electric shadow-glow-sm"
                    : "bg-porcelain border-steel-light/20 text-steel hover:border-electric/50 hover:text-ink"
                }`}
              >
                <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                <span className="text-[11px] font-medium leading-tight text-center">
                  {t.categories[labelKey]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-ink mb-2 tracking-wide">
            {t.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-porcelain border border-steel-light/20 text-ink text-sm focus:outline-none focus:border-electric transition-colors rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-ink mb-2 tracking-wide">
            {t.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-porcelain border border-steel-light/20 text-ink text-sm focus:outline-none focus:border-electric transition-colors rounded-lg"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-ink mb-2 tracking-wide">
          {t.subjectLabel}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 bg-porcelain border border-steel-light/20 text-ink text-sm focus:outline-none focus:border-electric transition-colors rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-ink mb-2 tracking-wide">
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-porcelain border border-steel-light/20 text-ink text-sm focus:outline-none focus:border-electric transition-colors resize-none rounded-lg"
        />
      </div>

      {/* Champ caché pour la catégorie */}
      <input type="hidden" name="category" value={selectedCategory} />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center bg-electric text-white px-6 py-3 font-sans text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full"
      >
        {status === "submitting" ? t.submittingButton : t.submitButton}
      </button>
    </form>
  );
}