import Image from "next/image";
import { getDictionary, type Locale } from "@/data/translations";
export function AboutSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about;
  return <section id="sobre" className="section-shell section-space about-section"><div><h2>{t.title}</h2><div className="about-text">{t.paragraphs.map((p) => <p key={p}>{p}</p>)}</div></div><div className="profile-image"><Image src="/profile/gabriel-profile-primary.jpg" alt="Gabriel Morais Marcondes" fill sizes="(max-width: 760px) 85vw, 400px" className="object-cover" style={{ objectPosition: "50% 18%" }} /></div></section>;
}
