"use client";

import { useState, FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "./Icons";

const linkedinUrl = "https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/";
const whatsappUrl = "https://wa.me/5512988921999";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar a mensagem.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar a mensagem.",
      );
    }
  }

  return (
    <section id="contato" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <div className="grid gap-12 rounded-3xl border border-border-subtle bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:p-14">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contato</p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">Vamos construir algo relevante?</h2>
          <p className="mt-5 max-w-md leading-7 text-text-secondary">Se você tem um desafio interessante, uma ideia de produto ou quer conversar sobre tecnologia, me escreva.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a aria-label="Conversar pelo WhatsApp" href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-border-subtle p-3 text-text-secondary transition hover:border-accent/50 hover:text-accent"><MessageCircle size={20} /></a>
            <a aria-label="Conectar no LinkedIn" href={linkedinUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-border-subtle p-3 text-text-secondary transition hover:border-accent/50 hover:text-accent"><LinkedinIcon width={20} height={20} /></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">Nome</label>
            <input id="name" name="name" required className="w-full rounded-lg border border-border-subtle bg-background px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/50 focus:border-accent" placeholder="Como posso te chamar?" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">E-mail</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-border-subtle bg-background px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/50 focus:border-accent" placeholder="voce@empresa.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">Mensagem</label>
            <textarea id="message" name="message" required rows={5} className="w-full resize-none rounded-lg border border-border-subtle bg-background px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/50 focus:border-accent" placeholder="Conte um pouco sobre o projeto..." />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-400">Mensagem enviada! Retorno em breve.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}