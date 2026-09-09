export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  badge?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "gestao-clinica",
    title: "StepCare - Gestão Clínica & Prontuário",
    subtitle: "Plataforma Full-Stack para acompanhamento de tratamento e evolução clínica",
    description:
      "Produto autoral desenvolvido de ponta a ponta para validação de regras clínicas, agendamentos e prontuários. Construído com arquitetura moderna, tipagem estrita, banco relacional e deploy em nuvem com dados sintéticos.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Flutter", "DigitalOcean", "CI/CD"],
    image: "/projects/stepcare.png",
    featured: true,
    badge: "MVP Funcional / Full-Stack",
    githubUrl: "https://github.com/gmorais671/Healthcare-Management-Project",
  },
  {
    id: "ola-cliente",
    title: "Olá Cliente",
    subtitle: "Produto Mobile com Múltiplas Jornadas e Tempo Real",
    description:
      "Atuação no desenvolvimento e evolução de aplicativo de grande porte, integrando fluxos de ordens de serviço, suporte, mensageria, rastreamento em tempo real e manutenção escalável em equipe ágil.",
    tags: ["Flutter", "Dart", "WebSockets", "REST APIs", "Firebase", "Real-Time"],
    image: "/projects/ola-cliente.png",
    featured: true,
    badge: "Produto Mobile",
    //githubUrl: "https://github.com/gmorais671",
  },
  {
    id: "transformacao-operacoes",
    title: "Transformação Digital — Sanorte",
    subtitle: "ERP interno, RBAC e operações de campo para projetos Sabesp",
    description:
      "Atuação na digitalização operacional de expansão de rede e modernização de plataforma de gestão (ERP interno). Inclui desenvolvimento de API REST do zero, módulo de governança com RBAC, organograma hierárquico interativo e trilhas de auditoria, além de fluxos de campo com coleta de evidências fotográficas, assinaturas digitais e automação de relatórios.",
    tags: ["Flutter", "PHP", "MySQL", "REST API", "Clean Architecture", "RBAC", "Automação"],
    image: "/projects/sanorte.png",
    featured: true,
    badge: "Impacto & Escala",
    //githubUrl: "https://github.com/gmorais671",
  },
  {
    id: "pesquisa-socioeconomica",
    title: "Pesquisa Socioeconômica (URBSocial)",
    subtitle: "Aplicação de Campo com Arquitetura Offline-First",
    description:
      "Digitalização de formulários em áreas com baixa conectividade, persistência local robusta com SQLite, sincronização com backend e exportação de dados em planilhas.",
    tags: ["Flutter", "SQLite", "Offline-First", "GPS", "Exportação"],
    image: "/projects/coleta.png",
    featured: false,
    githubUrl: "https://github.com/gmorais671/socioquest",
  },
  {
    id: "plugin-impressao-termica",
    title: "Plugin Nativo de Impressão Térmica (Distribuidora de Café)",
    subtitle: "Integração de Baixo Nível & Comunicação com Hardware",
    description:
      "Desenvolvimento de plugin com comunicação nativa (MethodChannel) para formatar e emitir comprovantes de cobrança em impressoras térmicas semelhantes a boletos bancários em campo.",
    tags: ["Flutter", "Android Nativo (Java/Kotlin)", "Hardware", "MethodChannel", "ESC/POS"],
    image: "/projects/plugin-impressao.png",
    featured: false,
    githubUrl: "https://github.com/gmorais671/thermal-printer-package",
  },
  {
    id: "gestao-b2b-logistica",
    title: "Gestão Comercial B2B & Logística (VM Tabacos)",
    subtitle: "Gestão Operacional, Estoque e Faturamento",
    description:
      "Sistema para distribuidora integrando catálogo de vendas, controle de compras, fluxo de caixa e emissão de notas via impressora térmica Bluetooth.",
    tags: ["Flutter", "Firebase", "Firestore", "Bluetooth", "B2B"],
    image: "/projects/vm-tabacos.png",
    featured: false,
    //githubUrl: "https://github.com/gmorais671",
  },
  {
    id: "fuzzy-tcc",
    title: "Controle de Reservatório por Lógica Fuzzy (TCC)",
    subtitle: "Engenharia de Automação & Sistemas Embarcados",
    description:
      "Projeto de controle em tempo real para nível de reservatório industrial utilizando algoritmo de lógica nebulosa (Fuzzy) implementado em C e CLP para garantir estabilidade e resposta suave.",
    tags: ["C", "CLP", "Lógica Fuzzy", "Controle & Automação"],
    image: "/projects/fuzzy-tcc.png",
    featured: false,
    //githubUrl: "https://github.com/gmorais671",
  },
];
