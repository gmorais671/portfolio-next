"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Project } from "@/data/projects";
import { getDictionary, type Locale } from "@/data/translations";

export function SupportingProjectRail({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const rail = useRef<HTMLUListElement>(null);
  const drag = useRef<{ x: number; scroll: number; active: boolean } | null>(null);
  const suppressClick = useRef(false);
  const [edges, setEdges] = useState({ start: true, end: false });
  const t = getDictionary(locale).work;
  const pt = locale === "pt";
  const hint = pt
    ? "Deslize ou arraste para explorar. Com a lista em foco, use as setas esquerda e direita, Home ou End."
    : "Scroll or drag to explore. When the list is focused, use the left and right arrows, Home or End.";

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const update = () => setEdges({ start: element.scrollLeft <= 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    update();
    element.addEventListener("scroll", update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    return () => { element.removeEventListener("scroll", update); resize.disconnect(); };
  }, []);

  function navigate(direction: number, edge?: "start" | "end") {
    const element = rail.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? element.clientWidth) + parseFloat(getComputedStyle(element).columnGap || "0");
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    element.scrollTo({ left: edge === "start" ? 0 : edge === "end" ? element.scrollWidth : element.scrollLeft + direction * step, behavior });
  }

  function beginDrag(event: PointerEvent<HTMLUListElement>) {
    suppressClick.current = false;
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft, active: false };
  }

  function moveDrag(event: PointerEvent<HTMLUListElement>) {
    const state = drag.current;
    if (!state) return;
    const distance = event.clientX - state.x;
    if (!state.active && Math.abs(distance) > 8) {
      state.active = true;
      suppressClick.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.classList.add("is-dragging");
    }
    if (state.active) { event.preventDefault(); event.currentTarget.scrollLeft = state.scroll - distance; }
  }

  function endDrag(event: PointerEvent<HTMLUListElement>) {
    drag.current = null;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return <div className="supporting-rail-shell">
    <div className="rail-toolbar">
      <p id="supporting-rail-hint">{pt ? "Integrações, produtos e experimentos de engenharia." : "Integrations, products and engineering explorations."}</p>
      <div className="rail-controls" aria-label={pt ? "Navegar projetos complementares" : "Browse supporting projects"}>
        <button type="button" onClick={() => navigate(-1)} disabled={edges.start} aria-label={pt ? "Projetos anteriores" : "Previous projects"} aria-controls="supporting-project-rail"><ArrowLeft size={18} aria-hidden="true" /></button>
        <button type="button" onClick={() => navigate(1)} disabled={edges.end} aria-label={pt ? "Próximos projetos" : "Next projects"} aria-controls="supporting-project-rail"><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
    </div>
    <p id="supporting-rail-keyboard" className="sr-only">{hint}</p>
    <ul id="supporting-project-rail" className="supporting-project-rail" ref={rail} tabIndex={0} aria-label={t.supporting} aria-describedby="supporting-rail-keyboard"
      onPointerDown={beginDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag}
      onLostPointerCapture={() => { drag.current = null; rail.current?.classList.remove("is-dragging"); }}
      onDragStart={(event) => event.preventDefault()}
      onClickCapture={(event) => { if (suppressClick.current && event.detail !== 0) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }}
      onFocusCapture={(event) => {
        if (event.target === event.currentTarget) return;
        event.target.closest<HTMLElement>(".supporting-project-card")?.scrollIntoView({ block: "nearest", inline: "start", behavior: "instant" });
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        navigate(event.key === "ArrowLeft" ? -1 : 1, event.key === "Home" ? "start" : event.key === "End" ? "end" : undefined);
      }}>
      {projects.map((project) => <li key={project.id} className="supporting-project-card">
        <div className="supporting-project-image">{project.image && <Image src={project.image} alt={project.title[locale]} fill sizes="(max-width: 760px) 85vw, (max-width: 1000px) 45vw, 420px" className="object-contain" draggable={false} />}</div>
        <div className="supporting-project-copy">
          <p className="supporting-project-category">{(project.category ?? project.subtitle)[locale]}</p>
          <h3>{project.title[locale]}</h3>
          <p className="supporting-project-description">{project.description[locale]}</p>
          <ul className="tag-list" aria-label={pt ? "Tecnologias" : "Technologies"}>{project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <p className="supporting-project-highlight">{(project.highlight ?? project.status)[locale]}</p>
          <Link className="case-cta" href={`/${locale}/projects/${project.id}`} aria-label={`${t.details}: ${project.title[locale]}`}>{t.details}<span aria-hidden="true">↗</span></Link>
        </div>
      </li>)}
    </ul>
  </div>;
}
