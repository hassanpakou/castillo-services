"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";

const translations = {
  fr: {
    nameLabel: "Nom complet",
    emailLabel: "Adresse e-mail",
    subjectLabel: "Sujet",
    messageLabel: "Message",
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
    submitButton: "Send message",
    submittingButton: "Sending...",
    successTitle: "Message sent!",
    successMessage: "Thank you for your interest. Our team will get back to you as soon as possible.",
  },
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
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
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-ink mb-2 tracking-wide">
            {t.nameLabel}
          </label>
          <input
            type="text"
            id="name"
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
          rows={5}
          required
          className="w-full px-4 py-3 bg-porcelain border border-steel-light/20 text-ink text-sm focus:outline-none focus:border-electric transition-colors resize-none rounded-lg"
        />
      </div>

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