import { getDictionary, type Locale } from "@/data/translations";
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;
  return <section id="inicio" className="hero section-shell">
    <div className="hero-copy"><p className="intro-name">Gabriel Morais Marcondes</p><h1>{t.title}<span>{t.specialty}</span></h1><p className="hero-description">{t.description}</p><div className="hero-actions"><a className="button-primary" href="#projetos">{t.cases}</a><a className="text-link" href="#contato">{t.contact}</a></div></div>
    <div className="hero-summary"><p>{t.focus}</p><div><span>Web & Mobile</span><span>APIs & Data</span><span>{locale === "pt" ? "Arquitetura & Entrega" : "Architecture & Delivery"}</span></div></div>
  </section>;
}
