import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { getDictionary, type Locale } from "@/data/translations";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
export function ProjectCard({ project, locale, lead = false }: { project: Project; locale: Locale; lead?: boolean }) {
  const t = getDictionary(locale).work;
  return <article className={`project-card ${lead ? "project-lead" : ""} ${project.featured ? "" : "project-compact"}`}>
    {lead ? <div className="project-visual"><ArchitectureDiagram locale={locale} compact /></div> : project.image && project.featured ? <div className="project-image"><Image src={project.image} alt={project.title[locale]} fill sizes="(max-width: 760px) 100vw, 50vw" className="object-cover" /></div> : null}
    <div className="project-copy"><p className="project-subtitle">{project.subtitle[locale]}</p><h3><Link href={`/${locale}/projects/${project.id}`}>{project.title[locale]}</Link></h3><p className="project-description">{project.description[locale]}</p><ul className="tag-list" aria-label={locale === "pt" ? "Tecnologias" : "Technologies"}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="project-card-footer"><span className="status-label">{project.status[locale]}</span><Link className="text-link" href={`/${locale}/projects/${project.id}`}>{project.featured ? t.read : t.details}</Link></div></div>
  </article>;
}
