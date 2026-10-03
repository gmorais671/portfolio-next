import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { getDictionary, isLocale, locales } from "@/data/translations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.id }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) notFound();
  return { title: project.title[locale], description: project.description[locale], alternates: { canonical: `/${locale}/projects/${slug}`, languages: { "pt-BR": `/pt/projects/${slug}`, en: `/en/projects/${slug}` } } };
}
export default async function CaseStudy({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) notFound();
  const t = getDictionary(locale).work;
  const featured = projects.filter((p) => p.featured);
  const next = featured[(featured.findIndex((p) => p.id === slug) + 1) % featured.length];
  return <><Header locale={locale} /><main id="main-content" className="section-shell case-page"><Link className="text-link" href={`/${locale}#${project.featured ? "projetos" : "complementares"}`}>{t.back}</Link><header className="case-header"><p className="project-subtitle">{project.featured ? t.caseLabel : t.supportingLabel}</p><h1>{project.title[locale]}</h1><p>{project.description[locale]}</p><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></header><div className="case-facts"><div><h2>{t.ownership}</h2><p>{project.role[locale]}</p></div><div><h2>{t.delivery}</h2><strong className="status-label">{project.status[locale]}</strong><p>{project.delivery[locale]}</p></div></div>{slug === "barbershop-platform" ? <ArchitectureDiagram locale={locale} /> : project.image && <div className="case-image"><Image src={project.image} alt={project.title[locale]} fill sizes="(max-width: 1000px) 100vw, 1000px" className="object-contain" priority /></div>}<div className="case-body">{project.sections.map((section) => <section key={section.title.en}><h2>{section.title[locale]}</h2><p>{section.body[locale]}</p></section>)}{project.evidence && <section><h2>{t.evidence}</h2>{project.evidence.map((e) => <a className="text-link" key={e.url} href={e.url} target="_blank" rel="noreferrer">{e.label[locale]}</a>)}</section>}</div>{project.featured && <div className="case-next"><p>{t.next}</p><Link href={`/${locale}/projects/${next.id}`}>{next.title[locale]}</Link></div>}</main><Footer locale={locale} /></>;
}
