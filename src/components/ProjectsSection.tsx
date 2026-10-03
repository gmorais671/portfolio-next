import { projects } from "@/data/projects";
import { getDictionary, type Locale } from "@/data/translations";
import { ProjectCard } from "./ProjectCard";
import { SupportingProjectRail } from "./SupportingProjectRail";
export function ProjectsSection({ locale, featured = false }: { locale: Locale; featured?: boolean }) {
  const t = getDictionary(locale).work;
  return <section id={featured ? "projetos" : "complementares"} className="section-shell section-space">
    <div className="section-heading"><h2>{featured ? t.title : t.supporting}</h2>{featured && <p>{t.intro}</p>}</div>
    {featured ? <div className="featured-list">{projects.filter((p) => p.featured).map((project, index) => <ProjectCard key={project.id} project={project} locale={locale} number={index + 1} />)}</div> : <SupportingProjectRail projects={projects.filter((p) => !p.featured)} locale={locale} />}
  </section>;
}
