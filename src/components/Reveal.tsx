"use client";
import { useEffect, useRef } from "react";
export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.remove("reveal-pending");
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    const targets = root.querySelectorAll(".section-heading, .project-feature, .proof-strip, .supporting-rail-shell, .about-section, .contact-section");
    for (const target of targets) {
      if (target.getBoundingClientRect().top > window.innerHeight) target.classList.add("reveal-pending");
      observer.observe(target);
    }
    return () => { observer.disconnect(); for (const target of targets) target.classList.remove("reveal-pending"); };
  }, []);
  return <div ref={ref}>{children}</div>;
}
