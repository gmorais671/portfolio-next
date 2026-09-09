import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-4 py-24 lg:grid-cols-[3fr_2fr] lg:items-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Sobre mim</p>
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">Engenharia com visão de produto.</h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-text-secondary">
          <p>Sou Engenheiro de Controle e Automação e Software Engineer, com mais de 5 anos criando sistemas que conectam pessoas, processos e dados em operações reais.</p>
          <p>Minha trajetória combina pensamento sistêmico, domínio de software e curiosidade por entender o problema antes de escrever a solução. Hoje, concentro meu trabalho em Next.js, APIs robustas e aplicações Flutter.</p>
          <p>Gosto de atuar próximo ao produto, transformando requisitos ambíguos em experiências simples, arquiteturas sustentáveis e entregas que geram resultado.</p>
        </div>
      </div>
      <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-border-subtle bg-surface p-8 shadow-2xl shadow-blue-950/30">
        <div className="absolute inset-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
          <Image
            src="/profile/gabriel-morais.png"
            alt="Gabriel Morais Marcondes"
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}