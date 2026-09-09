import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return <footer className="border-t border-border-subtle"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-text-secondary sm:flex-row"><p>© {new Date().getFullYear()} Gabriel M. Todos os direitos reservados.</p><div className="flex items-center gap-4"><a aria-label="GitHub" href="https://github.com/gmorais671" target="_blank" rel="noreferrer" className="transition hover:text-text-primary"><GithubIcon width={17} height={17} /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/" target="_blank" rel="noreferrer" className="transition hover:text-text-primary"><LinkedinIcon width={17} height={17} /></a></div></div></footer>;
}
