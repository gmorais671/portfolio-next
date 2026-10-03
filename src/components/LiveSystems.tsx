import Link from "next/link";
import { getDictionary, type Locale } from "@/data/translations";
export function LiveSystems({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).systems;
  const entries = [{ title: t.production, body: t.productionBody, links: [{ slug: "barbershop-platform", title: locale === "pt" ? "Plataforma para barbearias" : "Barbershop platform" }] }, { title: t.historical, body: t.historicalBody, links: [{ slug: "vm-tabacos", title: "VM Tabacos" }] }, { title: t.milestone, body: t.milestoneBody, links: [{ slug: "ola-cliente", title: "Olá Cliente" }, { slug: "sanorte", title: "Sanorte" }] }];
  return <section id="sistemas" className="delivery-section"><div className="section-shell section-space"><div className="section-heading"><h2>{t.title}</h2><p>{t.intro}</p></div><div className="delivery-grid">{entries.map((entry) => <article key={entry.title}><h3>{entry.title}</h3><p>{entry.body}</p><div>{entry.links.map((link) => <Link className="text-link" key={link.slug} href={`/${locale}/projects/${link.slug}`} aria-label={`${t.view}: ${link.title}`}>{link.title}</Link>)}</div></article>)}</div></div></section>;
}
