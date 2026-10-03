import { getDictionary, type Locale } from "@/data/translations";
export function ArchitectureDiagram({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).architecture;
  return <figure className="architecture" aria-label={t.title}>
    <div className="architecture-landing"><span>{t.landing}</span><strong>Next.js</strong><span aria-hidden="true">↓</span><small>{t.public}</small></div>
    <div className="architecture-clients"><div><span>{t.public}</span><strong>Flutter Web</strong><small>{t.publicNote}</small></div><div><span>{t.erp}</span><strong>Flutter Web</strong><small>{t.erpNote}</small></div></div>
    <div className="architecture-connector" aria-hidden="true">↓</div><div className="architecture-api"><span>{t.api}</span><strong>Python / FastAPI</strong></div><div className="architecture-connector" aria-hidden="true">↓</div><div className="architecture-db"><strong>PostgreSQL</strong><span>{t.db}</span></div><figcaption>{t.hosting}</figcaption><p className="architecture-note">{t.note}</p>
  </figure>;
}
