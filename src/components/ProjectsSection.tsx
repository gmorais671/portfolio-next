import { projects } from "@/data/projects";
import { getDictionary, type Locale } from "@/data/translations";
import { ProjectCard } from "./ProjectCard";
export function ProjectsSection({ locale, featured = false }: { locale: Locale; featured?: boolean }) {
  const t = getDictionary(locale).work;
  return <section id={featured ? "projetos" : "complementares"} className="section-shell section-space">
    <div className="section-heading"><h2>{featured ? t.title : t.supporting}</h2><p>{featured ? t.intro : t.supportingIntro}</p></div>
    <div className={featured ? "featured-grid" : "supporting-grid"}>{projects.filter((p) => p.featured === featured).map((project, index) => <ProjectCard key={project.id} project={project} locale={locale} lead={featured && index === 0} />)}</div>
  </section>;
}
