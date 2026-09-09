import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const githubUrl = "https://github.com/gmorais671";
const linkedinUrl =
  "https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl">
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
