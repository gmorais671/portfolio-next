"use client";
import { useState, type FormEvent } from "react";
import { getDictionary, type Locale } from "@/data/translations";
export function ContactSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading"); setErrorMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), email: data.get("email"), message: data.get("message"), locale }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || t.error);
      setStatus("success"); form.reset();
    } catch (error) { setStatus("error"); setErrorMessage(error instanceof Error ? error.message : t.error); }
  }
  return <section id="contato" className="section-shell section-space contact-section"><div><h2>{t.title}</h2><p>{t.intro}</p><div className="contact-links"><a className="text-link" href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/" target="_blank" rel="noreferrer">{t.linkedin}</a><a className="text-link" href="https://wa.me/5512988921999" target="_blank" rel="noreferrer">{t.whatsapp}</a></div></div><form onSubmit={submit} className="contact-form"><label htmlFor="name">{t.name}<input id="name" name="name" autoComplete="name" placeholder={t.namePlaceholder} required /></label><label htmlFor="email">{t.email}<input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label htmlFor="message">{t.message}<textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={5} required /></label><button type="submit" className="button-primary" disabled={status === "loading"}>{status === "loading" ? t.sending : t.send}</button><div aria-live="polite">{status === "success" && <p className="form-success">{t.success}</p>}{status === "error" && <p className="form-error" role="alert">{errorMessage}</p>}</div></form></section>;
}
