import { getDictionary, type Locale } from "@/data/translations";
export function Footer({ locale }: { locale: Locale }) {
  return <footer className="site-footer section-shell"><p>© {new Date().getFullYear()} Gabriel Morais. {getDictionary(locale).footer}</p><div><a href="https://github.com/gmorais671" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>;
}
