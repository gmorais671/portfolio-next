import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/data/translations";

export function PublicExperience({ project, locale }: { project: Project; locale: Locale }) {
  const experience = project.publicExperience;
  if (!experience) return null;
  const pt = locale === "pt";
  const flow = pt ? ["Landing personalizada", "Agendamento público", "API central", "Gestão interna"] : ["Custom landing", "Public booking SPA", "Central API", "Internal management"];
  return <section className="public-experience" aria-labelledby="public-experience-title">
    <div className="public-experience-copy">
      <p className="project-subtitle">{pt ? "Experiência pública personalizada" : "Branded customer acquisition"}</p>
      <h2 id="public-experience-title">{pt ? "Experiência pública" : "Public experience"}</h2>
      <p>{pt ? "A Barbearia Camisa 10 é a primeira landing personalizada ao vivo dessa estratégia. Sua identidade visual apresenta a marca e os serviços, enquanto os CTAs conduzem à SPA Flutter Web de agendamento, no slug da barbearia." : "Barbearia Camisa 10 is the first live branded landing implementing this strategy. Its visual identity introduces the brand and services, while its CTAs lead to the Flutter Web booking SPA at the barbershop's slug."}</p>
    </div>
    <figure>
      <div className="public-experience-image"><Image src={experience.image} alt={(project.imageAlt ?? project.title)[locale]} fill sizes="(max-width: 1000px) 100vw, 1000px" /></div>
      <figcaption>{pt ? "Captura real da landing Camisa 10 · camada pública de marca do produto" : "Real Camisa 10 landing screenshot · the product's public brand layer"}</figcaption>
    </figure>
    <a className="text-link" href={experience.url} target="_blank" rel="noreferrer">{pt ? "Ver landing ao vivo ↗" : "View live implementation ↗"}</a>
    <ol className="product-flow" aria-label={pt ? "Fluxo do produto" : "Product flow"}>{flow.map((label, index) => <li key={label}><span className="flow-number">0{index + 1}</span><span>{label}</span>{index < flow.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}</li>)}</ol>
    <div className="booking-evidence-slot">
      <h3>{pt ? "Agendamento público · Flutter Web" : "Public booking · Flutter Web"}</h3>
      {experience.bookingImage ? <Image src={experience.bookingImage} alt={pt ? "Tela real de agendamento público" : "Real public booking screen"} width={1440} height={900} /> : <p>{pt ? "Captura da SPA de agendamento será adicionada após o redesign da interface." : "A booking SPA screenshot will be added after the interface redesign."}</p>}
    </div>
  </section>;
}
