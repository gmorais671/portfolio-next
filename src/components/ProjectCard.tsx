"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./Icons";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact";
};

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const isCompact = variant === "compact";

  return (
    <article className={`group overflow-hidden rounded-2xl border border-border-subtle bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-blue-950/20 ${isCompact ? "h-full" : ""}`}>
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        {!imageError && (
          <Image
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes={isCompact ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            onError={() => setImageError(true)}
          />
        )}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/15 via-slate-900 to-slate-950 px-8 text-center">
            <span className="text-sm font-medium tracking-wide text-blue-200/80">Imagem em breve</span>
          </div>
        )}
      </div>
      <div className={isCompact ? "p-5" : "p-6"}>
        {project.badge && <span className="mb-4 inline-flex rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-blue-200">{project.badge}</span>}
        <p className="mb-2 text-sm font-medium text-accent">{project.subtitle}</p>
        <h3 className={`${isCompact ? "text-lg" : "text-xl"} font-semibold text-text-primary`}>{project.title}</h3>
        <p className={`${isCompact ? "mt-2 line-clamp-2" : "mt-3 line-clamp-4"} text-sm leading-6 text-text-secondary`}>{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-border-subtle px-2.5 py-1 text-xs text-text-secondary">{tag}</span>)}
        </div>
        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-6 flex items-center gap-4">
            <a href={project.liveUrl ?? project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition hover:text-accent">Ver detalhes <ArrowUpRight size={16} /></a>
            {project.githubUrl && <a aria-label={`GitHub de ${project.title}`} href={project.githubUrl} target="_blank" rel="noreferrer" className="text-text-secondary transition hover:text-text-primary"><GithubIcon width={17} height={17} /></a>}
          </div>
        )}
      </div>
    </article>
  );
}
