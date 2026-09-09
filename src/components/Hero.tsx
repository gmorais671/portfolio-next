export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-24 pt-24 sm:pb-32 sm:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[min(720px,100%)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
          <span aria-hidden="true">●</span> Disponível para novas oportunidades (Brasil & Remoto Global)
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] text-text-primary sm:text-7xl">
          Full-Stack & Mobile Software <span className="text-accent">Engineer</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-text-secondary">
          Transformo desafios complexos em produtos digitais robustos, escaláveis e fáceis de evoluir — da arquitetura à experiência final.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#projetos" className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">Ver projetos</a>
          <a href="#contato" className="rounded-lg border border-border-subtle bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-white/20 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">Entrar em contato</a>
        </div>
      </div>
    </section>
  );
}
