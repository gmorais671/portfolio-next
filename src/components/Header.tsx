"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const githubUrl = "https://github.com/gmorais671";
const linkedinUrl =
  "https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navigationTimeout.current) return;

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleInternalNavigation = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      setIsVisible(false);
      lastScrollY.current = window.scrollY;
      navigationTimeout.current = setTimeout(() => {
        navigationTimeout.current = null;
        lastScrollY.current = window.scrollY;
      }, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleInternalNavigation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleInternalNavigation);
      if (navigationTimeout.current) clearTimeout(navigationTimeout.current);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#inicio" className="text-lg font-semibold tracking-tight text-text-primary">
          Gabriel<span className="text-accent"> M.</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-text-secondary transition hover:text-text-primary" href="#projetos">Projetos</a>
          <a className="text-sm text-text-secondary transition hover:text-text-primary" href="#sobre">Sobre</a>
          <a className="text-sm text-text-secondary transition hover:text-text-primary" href="#contato">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" className="rounded-full p-2 text-text-secondary transition hover:bg-white/5 hover:text-text-primary" href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon width={18} height={18} /></a>
          <a aria-label="LinkedIn" className="rounded-full p-2 text-text-secondary transition hover:bg-white/5 hover:text-text-primary" href={linkedinUrl} target="_blank" rel="noreferrer"><LinkedinIcon width={18} height={18} /></a>
          <a className="hidden items-center gap-1 text-sm font-medium text-accent sm:flex" href="#contato">Vamos conversar <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </header>
  );
}
