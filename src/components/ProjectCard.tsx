import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { getDictionary, type Locale } from "@/data/translations";
export function ProjectCard({ project, locale, number }: { project: Project; locale: Locale; number: number }) {
  const t = getDictionary(locale).work;
  return <article className={`project-feature ${number === 1 ? "project-lead" : ""}`}>
    <div className="project-copy"><div className="project-eyebrow"><span aria-hidden="true">{String(number).padStart(2, "0")}</span><p>{project.subtitle[locale]}</p></div><h3>{project.title[locale]}</h3><p className="project-description">{project.description[locale]}</p><ul className="tag-list" aria-label={locale === "pt" ? "Tecnologias" : "Technologies"}>{project.tags.slice(0, 5).map((tag) => <li key={tag}>{tag}</li>)}</ul><p className="project-highlight">{(project.highlight ?? project.status)[locale]}</p><Link className="case-cta" href={`/${locale}/projects/${project.id}`}>{t.read}<span aria-hidden="true">↗</span></Link></div>
    <div className="project-visual">{project.image && <Image src={project.image} alt={(project.imageAlt ?? project.title)[locale]} fill sizes="(max-width: 760px) 100vw, 50vw" className="project-preview-image" />}</div>
  </article>;
}
