"use client";

import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.badge && (
              <span className="mb-4 inline-flex rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-blue-200">
                {project.badge}
              </span>
            )}
            <h2 id="project-modal-title" className="text-2xl font-semibold text-text-primary sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-accent">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do projeto"
            className="shrink-0 rounded-lg p-2 text-text-secondary transition hover:bg-white/5 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="relative mt-6 aspect-video overflow-hidden rounded-xl bg-slate-800">
          <Image
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>

        {project.role && (
          <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-6 text-text-secondary">
            <span className="font-semibold text-text-primary">Papel assumido:</span> {project.role}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border-subtle px-2.5 py-1 text-xs text-text-secondary">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-sm leading-7 text-text-secondary">
          {project.longDescription.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl || project.linkedinUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2.5 text-sm font-medium text-text-primary transition hover:border-accent/50 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <GithubIcon width={17} height={17} aria-hidden="true" />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <ExternalLink size={17} aria-hidden="true" />
                Live / Demo
              </a>
            )}
            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2.5 text-sm font-medium text-text-primary transition hover:border-accent/50 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <LinkedinIcon width={17} height={17} aria-hidden="true" />
                Ver post no LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
