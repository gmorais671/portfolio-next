"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact";
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, variant = "featured", onOpen }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const isCompact = variant === "compact";

  return (
    <article
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-border-subtle bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-blue-950/20 ${isCompact ? "h-full" : ""}`}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${project.title}`}
    >
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
        <div className={`relative ${isCompact ? "mt-2 h-14" : "mt-3 h-24"} overflow-hidden`}>
          <p className={`${isCompact ? "line-clamp-2" : "line-clamp-4"} text-sm leading-6 text-text-secondary`}>{project.description}</p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-border-subtle px-2.5 py-1 text-xs text-text-secondary">{tag}</span>)}
        </div>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(project);
          }}
          className="mt-6 inline-flex items-center rounded-lg border border-accent/40 px-4 py-2 text-sm font-medium text-text-primary transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Ver mais detalhes
        </button>
      </div>
    </article>
  );
}
