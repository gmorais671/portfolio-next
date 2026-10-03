import Link from "next/link";
import { getDictionary, type Locale } from "@/data/translations";
export function LiveSystems({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).systems;
  const pt = locale === "pt";
  const entries = [
    { slug: "barbershop-platform", title: pt ? "API em produção" : "API in production", name: pt ? "Plataforma para barbearias" : "Barbershop platform", production: true },
    { slug: "sanorte", title: pt ? "MVP em ~3 semanas" : "MVP in ~3 weeks", name: "Sanorte" },
    { slug: "vm-tabacos", title: pt ? "Mais de 2 anos de uso" : "Over 2 years of client use", name: "VM Tabacos" },
    { slug: "thermal-printing", title: pt ? "Validado em hardware" : "Validated on hardware", name: pt ? "Impressão térmica" : "Thermal printing" },
  ];
  return <section id="sistemas" className="delivery-section" aria-labelledby="proof-title"><div className="section-shell proof-strip"><h2 id="proof-title">{pt ? "Entregas reais" : "Real-world delivery"}</h2><ul>{entries.map((entry) => <li key={entry.slug}><Link href={`/${locale}/projects/${entry.slug}`} aria-label={`${t.view}: ${entry.name}`}><strong className={entry.production ? "proof-production" : ""}>{entry.title}</strong><span>{entry.name}</span></Link></li>)}</ul></div></section>;
}
