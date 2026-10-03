import { getDictionary, type Locale } from "@/data/translations";
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;
  return <section id="inicio" className="hero section-shell">
    <div className="hero-copy"><p className="intro-name">Gabriel Morais Marcondes</p><h1>{t.title}</h1><h2>{t.specialty}</h2><p className="hero-description">{t.description}</p><div className="hero-actions"><a className="button-primary" href="#projetos">{t.cases}</a><a className="text-link" href="#contato">{t.contact}</a></div></div>
    <ul className="hero-capabilities" aria-label={locale === "pt" ? "Áreas de atuação" : "Engineering focus"}><li>Mobile</li><li>Backend</li><li>Product</li><li>Systems</li></ul>
  </section>;
}
