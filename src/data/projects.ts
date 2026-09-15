export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role?: string;
  tags: string[];
  image: string;
  featured: boolean;
  badge?: string;
  githubUrl?: string;
  liveUrl?: string;
  linkedinUrl?: string;
}

export const projects: Project[] = [
  {
    id: "gestao-clinica",
    title: "StepCare - Gestão Clínica & Prontuário",
    subtitle: "Plataforma Full-Stack para acompanhamento de pacientes e consultas",
    description:
      "Produto autoral criado para digitalizar o acompanhamento clínico de residentes em um lar de idosos, substituindo registros em papel por uma base estruturada de pacientes, consultas, alergias e comorbidades.",
    longDescription:
      "O StepCare nasceu a partir de um problema real observado em um lar de idosos, onde o acompanhamento de informações clínicas e consultas era realizado em papel. Esse processo criava riscos de perda de dados, dificuldade de consulta ao histórico e falta de centralização das informações.\n\nAlém de investigar uma solução para esse cenário, o projeto foi uma oportunidade de desenvolver um produto completo de forma independente, desde a concepção até o deploy. A aplicação possui autenticação, cadastro de pacientes, registro e histórico de consultas, além do controle de alergias e comorbidades.\n\nO aplicativo foi desenvolvido em Flutter com build para Windows. A camada de API foi construída em Node.js com Next.js, utilizando Prisma como ORM e PostgreSQL como banco de dados. A API e o banco foram publicados na DigitalOcean, representando meu primeiro deploy completo de infraestrutura em nuvem.\n\nO projeto permanece como um MVP funcional e possui potencial para evoluir para um produto SaaS voltado à gestão clínica e ao acompanhamento de pacientes.",
    role: "Desenvolvedor único — concepção do produto, desenvolvimento mobile, API, modelagem de dados e deploy.",
    tags: [
      "Flutter",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "DigitalOcean",
    ],
    image: "/projects/stepcare.png",
    featured: true,
    badge: "MVP Funcional / Full-Stack",
    githubUrl: "https://github.com/gmorais671/Healthcare-Management-Project",
  },
  {
    id: "ola-cliente",
    title: "Olá Cliente",
    subtitle: "Produto Mobile com Múltiplas Jornadas e Recursos em Tempo Real",
    description:
      "Atuação no desenvolvimento de aplicativo para o setor de telecomunicações, envolvendo ordens de serviço, suporte, rastreamento de técnicos, mensageria e integrações em tempo real.",
    longDescription:
      "O Olá Cliente foi desenvolvido na Synapse Informática, empresa que cria soluções para operadoras de internet, telecomunicações e telefonia. Foi meu primeiro trabalho CLT como desenvolvedor e também a experiência em que consolidei minha base prática no desenvolvimento mobile.\n\nEntrei como desenvolvedor júnior e único responsável pelo desenvolvimento em Flutter, em uma equipe composta majoritariamente por profissionais de Kotlin, Java e C#/.NET. O produto estava especificado, mas ainda não havia sido iniciado. Participei da estruturação inicial do projeto, incluindo a criação de protótipos no Figma para apoiar o alinhamento das reuniões e o desenvolvimento das jornadas do aplicativo.\n\nAo longo da evolução do produto, trabalhei com recursos como Google Maps, chatbot, integração com APIs, comunicação por WebSockets e rastreamento de técnicos. Também participei da implementação de uma API responsável pelo cálculo de polylines utilizadas na visualização de trajetos.\n\nAlém do aplicativo principal, dei suporte a outros sistemas da empresa em Kotlin e integrações com APIs em .NET. A arquitetura MVC foi adotada para manter consistência com o padrão já utilizado internamente.",
    role: "Desenvolvedor Flutter — desenvolvimento do aplicativo, integrações em tempo real e suporte a sistemas existentes.",
    tags: [
      "Flutter",
      "Dart",
      "REST APIs",
      "WebSockets",
      "Google Maps",
      "Polylines",
      "MVC",
    ],
    image: "/projects/ola-cliente.png",
    featured: true,
    badge: "Produto Mobile",
  },
  {
    id: "transformacao-operacoes",
    title: "Transformação Digital — Sanorte",
    subtitle: "ERP interno e digitalização de operações de campo para projetos Sabesp",
    description:
      "Atuação em iniciativas de modernização de ERP e digitalização de fluxos operacionais, incluindo aplicativo de campo com assinatura digital, API em PHP, RBAC e integração com sistemas de RH.",
    longDescription:
      "Na Sanorte, empresa de serviços de saneamento que atua em projetos parceiros da Sabesp, trabalhei como desenvolvedor full-stack em iniciativas de digitalização operacional e reconstrução de bases para um ERP interno. O principal desafio era atuar em um contexto com baixa padronização técnica e sem acesso direto ao código legado do ERP, que permanecia sob responsabilidade de outro desenvolvedor.\n\nA partir de reuniões com as equipes internas e empresas parceiras, desenvolvi um aplicativo Flutter para substituir o preenchimento e a assinatura manual de documentos relacionados à adesão a um programa de expansão. A solução permitia o preenchimento de formulários e a captura de assinatura digital pelo celular, apoiada por uma API REST em PHP e banco de dados próprios. O aplicativo chegou à etapa de testes, mas foi descontinuado por decisão interna.\n\nTambém iniciei a estruturação de uma nova base para o ERP em PHP, desenvolvendo autenticação, layout inicial e um modelo de controle de acesso baseado em RBAC. Entre as funcionalidades criadas, está uma visualização de organograma em árvore para consulta da hierarquia organizacional, com interação de arrastar e soltar.\n\nOutra entrega foi a integração da API em PHP com a API da Ponto Mais, plataforma utilizada pela empresa para processos de RH. Mesmo com projetos interrompidos ao longo do período, a experiência foi importante para desenvolver autonomia, levantamento de requisitos e tomada de decisões técnicas em cenários pouco estruturados.",
    role: "Desenvolvedor full-stack — aplicativo Flutter, APIs PHP, integração externa e estruturação de módulos para ERP.",
    tags: [
      "Flutter",
      "PHP",
      "MySQL",
      "REST API",
      "RBAC",
      "Assinatura Digital",
      "Integrações",
    ],
    image: "/projects/sanorte.png",
    featured: true,
    badge: "Impacto & Escala",
  },
  {
    id: "pesquisa-socioeconomica",
    title: "Pesquisa Socioeconômica (URBSocial)",
    subtitle: "Aplicativo de campo offline para coleta e exportação de dados",
    description:
      "Aplicativo Flutter para substituir formulários em papel em pesquisas socioeconômicas realizadas em campo, com persistência local em SQLite e exportação dos dados para Excel.",
    longDescription:
      "A aplicação foi desenvolvida para a URBSocial, empresa que realiza pesquisas socioeconômicas em comunidades e áreas de campo. O objetivo era substituir o uso de formulários em papel, vulneráveis a chuva, extravio e erros de preenchimento, além de reduzir a dependência de conectividade em regiões com sinal instável ou inexistente.\n\nO aplicativo foi construído em Flutter para funcionar sem necessidade de conexão com a internet durante a coleta. Os pesquisadores podem preencher o formulário socioeconômico, registrar sua identificação e manter as respostas salvas localmente no dispositivo.\n\nA persistência foi implementada com SQLite, incluindo a modelagem dos dados das pesquisas. Depois da coleta, o próprio aplicativo gera uma planilha Excel com os dados registrados, permitindo que cada pesquisador compartilhe o arquivo para consolidação posterior pela equipe responsável.\n\nO projeto demonstra a aplicação de uma solução mobile simples e adequada às restrições reais de uma operação de campo: funcionamento offline, armazenamento local confiável e exportação prática dos resultados.",
    role: "Desenvolvedor único — aplicativo Flutter, modelagem local com SQLite e exportação para Excel.",
    tags: [
      "Flutter",
      "SQLite",
      "Offline",
      "Formulários",
      "Exportação Excel",
    ],
    image: "/projects/coleta.png",
    featured: false,
    githubUrl: "https://github.com/gmorais671/socioquest",
  },
  {
    id: "plugin-impressao-termica",
    title: "Plugin Nativo de Impressão Térmica",
    subtitle: "Integração de aplicativos Flutter com impressoras térmicas",
    description:
      "Plugin para conectar aplicações Flutter a impressoras térmicas e gerar comprovantes de cobrança com layout semelhante a boleto, atendendo a uma necessidade específica de operação em campo.",
    longDescription:
      "Este projeto surgiu da necessidade de integrar um aplicativo mobile a uma impressora térmica em uma operação de distribuição. O requisito não era emitir apenas uma nota simples com código de barras, mas gerar um comprovante visualmente organizado, com estrutura semelhante à de um boleto — sem se tratar de um documento bancário oficial.\n\nDesenvolvi um plugin para permitir a comunicação entre aplicativos Flutter e impressoras térmicas, responsável por estruturar os dados e montar o layout de impressão de acordo com a necessidade apresentada pelo cliente.\n\nO projeto envolveu integração com hardware e aplicação prática de princípios de Clean Architecture, buscando manter a solução desacoplada, organizada e mais simples de evoluir. A experiência reforçou minha capacidade de trabalhar com necessidades que ultrapassam interfaces mobile convencionais, conectando software e dispositivos físicos.",
    role: "Desenvolvedor único — arquitetura do plugin e integração entre aplicativo Flutter e hardware de impressão.",
    tags: [
      "Flutter",
      "Impressão Térmica",
      "Bluetooth",
      "Hardware",
      "Clean Architecture",
    ],
    image: "/projects/plugin-impressao.png",
    featured: false,
    githubUrl: "https://github.com/gmorais671/thermal-printer-package",
  },
  {
    id: "gestao-b2b-logistica",
    title: "Gestão Comercial B2B & Logística (VM Tabacos)",
    subtitle: "Controle de estoque, compras, vendas, relatórios e impressão",
    description:
      "Aplicativo Flutter para apoiar a operação de uma distribuidora, reunindo controle de estoque, compras, vendas, históricos, relatórios e emissão de comprovantes em impressora térmica.",
    longDescription:
      "O projeto foi desenvolvido para a VM Tabacos, distribuidora de tabaco e produtos relacionados para bares e outros estabelecimentos. A necessidade era centralizar o controle operacional da empresa em um aplicativo, cobrindo estoque, compras, vendas e geração de relatórios.\n\nDesenvolvi o aplicativo completo em Flutter e integrei a interface ao banco de dados construído por outro desenvolvedor. A solução contempla controle de estoque, registro de vendas e compras, consulta aos históricos dessas operações e relatórios para apoiar o acompanhamento da operação.\n\nTambém implementei a integração do aplicativo com uma impressora térmica. Após uma venda, o sistema gera um comprovante não oficial com o logo da empresa, a lista de produtos adquiridos e um espaço para assinatura do cliente, confirmando o recebimento da compra.\n\nO projeto reuniu controle operacional, geração de relatórios e integração com hardware em uma solução mobile direcionada a uma necessidade concreta de negócio.",
    role: "Desenvolvedor Flutter — aplicativo operacional, relatórios, integração com banco de dados e impressão térmica.",
    tags: [
      "Flutter",
      "Gestão de Estoque",
      "Relatórios",
      "Bluetooth",
      "Impressão Térmica",
      "B2B",
    ],
    image: "/projects/vm-tabacos.png",
    featured: false,
  },
  {
    id: "fuzzy-tcc",
    title: "Controle de Reservatório por Lógica Fuzzy (TCC)",
    subtitle: "Engenharia de Automação, inteligência computacional e software",
    description:
      "Projeto de controle de nível de tanque de água utilizando lógica Fuzzy em C e CLP, acompanhado por uma interface homem-máquina para visualização e operação da planta.",
    longDescription:
      "Este projeto foi desenvolvido como Trabalho de Conclusão de Curso em Engenharia de Controle e Automação, com o objetivo de conectar minha formação em automação à minha atuação em desenvolvimento de software. A proposta foi aplicada à disciplina de Técnicas Avançadas de Controle.\n\nA solução controla o nível de água de um tanque físico. A variável manipulada era a vazão de entrada, controlada por uma bomba, enquanto a saída de água permanecia praticamente constante. Para responder às variações de nível, desenvolvemos um controlador em linguagem C aplicando lógica Fuzzy, uma técnica de inteligência computacional capaz de modelar decisões de controle a partir de regras linguísticas.\n\nTambém foi desenvolvida uma interface homem-máquina na plataforma disponibilizada para o laboratório, permitindo acompanhar e operar a planta. O projeto foi realizado em dupla remota: enquanto meu colega estava na Hungria, eu permaneci no Brasil e atuei diretamente na integração física da solução no laboratório.\n\nMais do que um exercício de automação, o trabalho demonstra a capacidade de desenvolver uma solução de ponta a ponta, combinando controle de processos, programação em baixo nível, integração com hardware e colaboração remota.",
    role: "Desenvolvimento do controlador em C e integração prática da solução no laboratório — projeto realizado em dupla remota.",
    tags: [
      "C",
      "CLP",
      "Lógica Fuzzy",
      "Inteligência Computacional",
      "Controle de Processos",
      "Automação Industrial",
    ],
    image: "/projects/fuzzy-tcc.png",
    featured: false,
  },
];