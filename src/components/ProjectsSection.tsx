import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projetos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24">
      <div className="mb-16 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Trabalho selecionado</p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">Projetos que geram impacto</h2>
        </div>
        <a href="https://github.com/gmorais671" target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary sm:flex">Ver GitHub <ArrowUpRight size={16} /></a>
      </div>

      <div>
        <div className="mb-7 max-w-2xl">
          <h3 className="text-2xl font-semibold text-text-primary">Projetos em Destaque</h3>
          <p className="mt-2 text-text-secondary">Produtos e experiências que representam minha atuação em engenharia de software e transformação digital.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} variant="featured" />)}
        </div>
      </div>

      <div className="mt-24">
        <div className="mb-7 max-w-2xl">
          <h3 className="text-2xl font-semibold text-text-primary">Outros Projetos &amp; Soluções Técnicas</h3>
          <p className="mt-2 text-text-secondary">Repertório complementar em aplicações de campo, integrações de baixo nível, logística e automação industrial.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {secondaryProjects.map((project) => <ProjectCard key={project.id} project={project} variant="compact" />)}
        </div>
      </div>
    </section>
  );
}
