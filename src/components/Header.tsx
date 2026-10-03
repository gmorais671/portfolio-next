"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { getDictionary, type Locale } from "@/data/translations";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = getDictionary(locale).nav;
  const other = locale === "pt" ? "en" : "pt";
  const alternate = pathname.replace(/^\/(pt|en)(?=\/|$)/, `/${other}`);
  const items = [["projetos", t.cases], ["sistemas", t.systems], ["sobre", t.about], ["contato", t.contact]];
  return <>
    <a className="skip-link" href="#main-content">{t.skip}</a>
    <header className="site-header">
      <div className="header-inner">
        <a href={`/${locale}`} className="brand">Gabriel Morais<span>Software Engineer</span></a>
        <nav className="desktop-nav" aria-label={t.menu}>{items.map(([id, title]) => <a key={id} href={`/${locale}#${id}`}>{title}</a>)}</nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={t.language}>
            <span aria-current="true" lang={locale === "pt" ? "pt-BR" : "en"}>{locale === "pt" ? "Português" : "English"}</span>
            <a href={alternate} lang={other === "pt" ? "pt-BR" : "en"} hrefLang={other === "pt" ? "pt-BR" : "en"} onClick={(event) => { event.preventDefault(); window.location.assign(alternate + window.location.search + window.location.hash); }}>{other === "pt" ? "Português" : "English"}</a>
          </nav>
          <button className="mobile-menu-button" aria-label={t.menu} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label={t.menu}>{items.map(([id, title]) => <a key={id} href={`/${locale}#${id}`} onClick={() => setOpen(false)}>{title}</a>)}</nav>}
    </header>
  </>;
}
