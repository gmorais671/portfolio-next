import Image from "next/image";
import { getDictionary, type Locale } from "@/data/translations";
export function AboutSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about;
  return <section id="sobre" className="section-shell section-space about-section"><div><h2>{t.title}</h2><div className="about-text">{t.paragraphs.map((p) => <p key={p}>{p}</p>)}</div><h3 className="history-title">{t.history}</h3><dl className="history-list"><div><dt>{t.consulting}<span>{t.consultingPeriod}</span></dt><dd>{t.consultingBody}</dd></div><div><dt>Sanorte<span>{locale === "pt" ? "Ago 2025 – Mar 2026" : "Aug 2025 – Mar 2026"}</span></dt><dd>{t.sanorteBody}</dd></div><div><dt>Sinapse<span>{locale === "pt" ? "Nov 2022 – Jul 2025" : "Nov 2022 – Jul 2025"}</span></dt><dd>{t.sinapseBody}</dd></div></dl></div><div className="profile-image"><Image src="/profile/gabriel-morais.png" alt="Gabriel Morais Marcondes" fill sizes="(max-width: 760px) 85vw, 360px" className="object-cover" /></div></section>;
}
