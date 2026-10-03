import type { Locale } from "./translations";
type Localized = Record<Locale, string>;
const c = (pt: string, en: string): Localized => ({ pt, en });
export interface Project {
  id: string; title: Localized; subtitle: Localized; description: Localized;
  role: Localized; tags: string[]; image?: string; featured: boolean;
  status: Localized; delivery: Localized;
  highlight?: Localized;
  category?: Localized;
  imageAlt?: Localized;
  publicExperience?: { url: string; image: string; bookingImage?: string };
  introduction?: Localized;
  sections: { id?: string; title: Localized; body: Localized }[];
  evidence?: { label: Localized; url: string }[];
  source: string[];
}

// Facts: workspace-root/gabriel_morais_master_brag_document_v2.md.
// Featured placement is independent of delivery status. Unknown URLs and metrics are omitted.
export const projects: Project[] = [
  {
    id: "barbershop-platform",
    title: c("Gestão e Agendamento para Barbearias", "Barbershop Management & Booking Platform"),
    subtitle: c("Produto full-stack multi-tenant", "Multi-tenant full-stack product"),
    description: c("Uma plataforma que conecta a gestão da barbearia ao agendamento público de clientes, da concepção à entrega do backend em produção.", "A platform connecting barbershop management with public customer booking, from product definition to a production backend."),
    highlight: c("API em produção", "API in production"),
    introduction: c("Um produto multi-tenant com três superfícies conectadas a uma API central: gestão interna, reserva pública e landing comercial. O desafio reúne isolamento de dados, regras de disponibilidade e operação em fusos horários diferentes.", "A multi-tenant product with three surfaces connected to a central API: internal management, public booking and a commercial landing. The challenge combines data isolation, availability rules and operation across timezones."),
    role: c("Produto, arquitetura, interfaces Flutter Web, integração da landing Next.js, backend, banco de dados e deploy.", "Product, architecture, Flutter Web interfaces, Next.js landing integration, backend, database and deployment."),
    tags: ["FastAPI", "PostgreSQL", "Flutter Web", "Next.js", "Docker"], featured: true,
    image: "/projects/barbershop-camisa-10.jpg",
    imageAlt: c("Landing real da Barbearia Camisa 10: primeira experiência pública personalizada", "Real Camisa 10 landing: first branded public experience"),
    publicExperience: { url: "https://barbearia-camisa-10.gabrielmoraisdev.com.br/", image: "/projects/barbershop-camisa-10.jpg" },
    status: c("API em produção", "API in production"),
    delivery: c("API colocada em produção na semana de 3 de outubro de 2026. Camisa 10 é a primeira landing personalizada ao vivo; a disponibilidade de todas as interfaces e a adoção do produto não estão estabelecidas.", "API put into production in the week of October 3, 2026. Camisa 10 is the first live branded landing; availability of all interfaces and product adoption are not established."),
    source: ["PROJ-002", "4.0", "16"],
    sections: [
      { title: c("Contexto e solução", "Context and solution"), body: c("Plataforma para operação de barbearias e agendamento de clientes. O ERP Flutter Web reúne equipe, serviços, horários e agendamentos; uma SPA pública Flutter Web resolve a barbearia por slug e permite reservar sem login. A landing Next.js direciona o visitante para esse fluxo.", "A platform for barbershop operations and customer booking. The Flutter Web ERP covers teams, services, working hours and appointments; a public Flutter Web SPA resolves the shop by slug and accepts bookings without login. The Next.js landing directs visitors into that flow.") },
      { title: c("Visão de produto", "Product vision"), body: c("A proposta conecta operação e aquisição de clientes: cada barbearia pode ter uma experiência pública com identidade própria, conduzindo visitantes ao agendamento online. Camisa 10 é a primeira implementação ao vivo dessa camada de marca.", "The product strategy connects operations and customer acquisition: each barbershop can have a public experience with its own identity, directing visitors to online booking. Camisa 10 is the first live implementation of this branded layer.") },
      { title: c("Experiência de gestão interna", "Internal management experience"), body: c("O ERP Flutter Web organiza equipe, serviços, horários e reservas por funcionalidades, com Riverpod, go_router e Dio. A gestão e o agendamento público compartilham a API central; os fluxos internos são protegidos por JWT.", "The Flutter Web ERP organizes teams, services, working hours and appointments by feature, using Riverpod, go_router and Dio. Management and public booking share the central API; internal flows are protected by JWT.") },
      { id: "architecture", title: c("Arquitetura", "Architecture"), body: c("Monólito modular Python/FastAPI, contratos Pydantic, persistência SQLAlchemy/psycopg e migrações Alembic. A landing Next.js, a SPA pública Flutter Web e o ERP Flutter Web compõem superfícies distintas do mesmo produto.", "A modular Python/FastAPI monolith, Pydantic contracts, SQLAlchemy/psycopg persistence and Alembic migrations. The Next.js landing, public Flutter Web SPA and Flutter Web ERP are distinct surfaces of the same product.") },
      { title: c("Multi-tenancy e autorização", "Multi-tenancy and authorization"), body: c("Tabelas PostgreSQL compartilhadas usam isolamento lógico por tenant_id. Papel e tenant vêm do usuário persistido nos fluxos internos. Na entrada pública, a barbearia é resolvida por slug e as associações entre tenant, serviço e profissional são validadas.", "Shared PostgreSQL tables use logical tenant_id isolation. Internal flows derive role and tenant from the persisted user. Public entry resolves the shop by slug and validates tenant, service and barber associations.") },
      { title: c("Agendamento e fusos horários", "Scheduling and timezones"), body: c("A disponibilidade considera horários de trabalho, intervalos, duração do serviço e reservas existentes. Cada tenant tem um fuso IANA: apresentação no horário local e persistência/comparação em UTC. No ERP, Riverpod, go_router e Dio apoiam a organização por funcionalidades.", "Availability considers working hours, breaks, service duration and existing appointments. Each tenant has an IANA timezone: display in local time and persistence/comparison in UTC. Riverpod, go_router and Dio support a feature-oriented ERP structure.") },
      { title: c("Entrega e resultado", "Delivery and outcome"), body: c("API e PostgreSQL em Docker Compose em VPS DigitalOcean, com Nginx e migrações versionadas. O produto combina gestão interna com agendamento público e um modelo reutilizável de tenants. O backend foi colocado em produção.", "API and PostgreSQL deployed with Docker Compose on a DigitalOcean VPS, with Nginx and versioned migrations. The product combines internal management with public booking and a reusable tenant model. The backend was put into production.") },
      { title: c("Restrições e trade-offs", "Constraints and trade-offs"), body: c("O monólito modular evita complexidade prematura de microsserviços. O isolamento por tenant_id depende de aplicação consistente das regras de acesso. O cálculo de disponibilidade não substitui uma garantia transacional: a checagem seguida de inserção ainda pode permitir disputa entre reservas simultâneas.", "The modular monolith avoids premature microservice complexity. Tenant_id isolation depends on consistent access-rule enforcement. Availability calculation does not replace a transactional safeguard: a check followed by an insert can still race under simultaneous booking requests.") },
      { title: c("Qualidade e próximos passos", "Quality and next steps"), body: c("Existem testes backend para isolamento e agendamentos, além de testes Flutter. Os testes backend usam SQLite em memória e não provam comportamento específico do PostgreSQL. Garantias transacionais contra reservas concorrentes, testes PostgreSQL, revisão de autorização, validação de horários no servidor, observabilidade e CI/CD são próximos passos, ainda não concluídos.", "Backend tests cover isolation and appointments, alongside Flutter tests. Backend tests use in-memory SQLite and do not prove PostgreSQL-specific behavior. Transactional safeguards against concurrent bookings, PostgreSQL tests, authorization review, server-side slot validation, observability and CI/CD are next steps, not completed capabilities.") },
    ],
  },
  {
    id: "ola-cliente", title: c("Olá Cliente", "Olá Cliente"),
    subtitle: c("Ownership mobile do início à entrega", "Mobile ownership from inception to delivery"),
    description: c("Aplicativo de telecom desenvolvido do zero como principal desenvolvedor Flutter: suporte, localização em tempo real, mapas e integrações relacionadas a pagamentos.", "Telecom application built from scratch as the principal Flutter developer: support, real-time location, maps and payment-related integrations."),
    highlight: c("Do zero à entrega e suporte", "Built from scratch through delivery and support"),
    introduction: c("A principal iniciativa Flutter da Sinapse, desenvolvida entre novembro de 2022 e julho de 2025. Uma experiência de ownership mobile contínuo, com requisitos alinhados diretamente com o Product Owner e integração aos sistemas existentes.", "Sinapse's principal Flutter initiative, developed between November 2022 and July 2025. A sustained mobile ownership role, with requirements aligned directly with the Product Owner and integration into existing systems."),
    role: c("Principal desenvolvedor Flutter na Sinapse, colaboração direta com o Product Owner e suporte em Kotlin e ASP.NET.", "Principal Flutter developer at Sinapse, working directly with the Product Owner and supporting Kotlin and ASP.NET systems."),
    tags: ["Flutter", "REST APIs", "WebSockets", "Google Maps", "Firebase"], image: "/projects/ola-cliente.png", featured: true,
    status: c("Entrega e suporte do produto", "Product delivery and support"),
    delivery: c("Desenvolvido de novembro de 2022 a julho de 2025, com preparação para produção e suporte continuado. Disponibilidade atual não registrada.", "Developed from November 2022 to July 2025, including production readiness and continued support. Current availability is not recorded."), source: ["PROJ-005", "EXP-005"],
    sections: [
      { title: c("Contexto", "Context"), body: c("A Sinapse precisava de um produto mobile completo para provedores e clientes de telecomunicações, reunindo atendimento, serviço e funcionalidades relacionadas à conta e a pagamentos.", "Sinapse needed a complete mobile product for telecom providers and customers, bringing together support, service, account and payment-related flows.") },
      { title: c("Minha contribuição", "My contribution"), body: c("Construí o aplicativo do zero e assumi a implementação e evolução das funcionalidades Flutter. Trabalhei diretamente com o Product Owner para alinhar requisitos e entregas. Também apoiei um aplicativo Android legado em Kotlin e APIs ASP.NET quando necessário.", "I built the application from scratch and owned the implementation and evolution of Flutter features. I worked directly with the Product Owner to align requirements and delivery. I also supported a legacy Kotlin Android application and ASP.NET APIs when needed.") },
      { title: c("Decisões e integrações", "Decisions and integrations"), body: c("Flutter/Dart com Provider/Notifiers, GetIt e separação de responsabilidades. REST e WebSockets conectam serviço, chat, localização em tempo real e rastreamento de técnicos. Google Maps/polylines, Firebase, integrações de pagamento e práticas de CI/CD fazem parte do trabalho.", "Flutter/Dart with Provider/Notifiers, GetIt and separation of responsibilities. REST and WebSockets connect service, chat, real-time location and technician tracking. Google Maps/polylines, Firebase, payment-related integrations and CI/CD practices are part of the work.") },
      { title: c("Entrega e resultado", "Delivery and outcome"), body: c("O Olá Cliente tornou-se o primeiro produto Flutter/mobile completo da Sinapse e ampliou sua capacidade de oferecer uma experiência mobile a clientes B2B de telecom. Minha atuação incluiu preparação para produção e suporte continuado.", "Olá Cliente became Sinapse's first complete Flutter/mobile product and expanded its ability to offer a mobile experience to B2B telecom customers. My work included production readiness and continued support.") },
    ],
  },
  {
    id: "sanorte", title: c("Sanorte — Transformação Digital", "Sanorte — Digital Transformation"),
    subtitle: c("Legado, autorização e operação offline", "Legacy systems, authorization and offline operations"),
    description: c("Uma suíte de iniciativas: modernização PHP, autorização hierárquica no Atlasware e aplicativo de campo offline-first com API REST.", "A suite of initiatives: PHP modernization, hierarchical authorization in Atlasware and an offline-first field application with a REST API."),
    highlight: c("MVP de campo em aproximadamente três semanas", "Field MVP delivered in approximately three weeks"),
    introduction: c("Entre agosto de 2025 e março de 2026, atuei em um ambiente empresarial com legado de longa duração e processos de campo manuais. Este caso reúne três frentes relacionadas, preservando o escopo e o resultado de cada iniciativa.", "Between August 2025 and March 2026, I worked in an enterprise environment with long-lived legacy software and manual field processes. This case brings together three related workstreams while preserving each initiative's scope and outcome."),
    role: c("Desenvolvedor full-stack, agosto de 2025 a março de 2026: modernização, APIs, autorização e aplicação Flutter.", "Full-stack developer, August 2025 to March 2026: modernization, APIs, authorization and Flutter application."),
    tags: ["PHP 8", "Flutter", "MySQL", "SQLite", "RBAC"], image: "/projects/sanorte.png", featured: true,
    status: c("MVP de campo entregue", "Field MVP delivered"),
    delivery: c("MVP de campo entregue em aproximadamente três semanas. Isso não estabelece que toda a suíte esteja atualmente em produção.", "Field MVP delivered in approximately three weeks. This does not establish that the entire suite is currently in production."), source: ["EXP-006", "PROJ-003", "PROJ-004"],
    evidence: [{ label: c("Discussão técnica sobre Atlasware/RBAC", "Atlasware/RBAC technical discussion"), url: "https://pt.linkedin.com/posts/gabriel-morais-marcondes_atlasware-softwarearchitecture-php8-activity-7434978183109836800-8nzm" }],
    sections: [
      { title: c("Modernização do legado", "Legacy modernization"), body: c("Participei da evolução de um ambiente com cerca de 14 anos de história, de código da era PHP 5 em direção ao PHP 8. O trabalho combinou modernização com novas APIs e fluxos operacionais no contexto do sistema existente.", "I contributed to evolving an environment with roughly 14 years of history, moving PHP 5-era code toward PHP 8. The work combined modernization with new APIs and operational workflows within the existing system's context.") },
      { title: c("Atlasware: autorização como domínio", "Atlasware: authorization as a domain"), body: c("Desenvolvi RBAC customizado com papéis, hierarquia e delegação: usuários não podem conceder permissões que não possuem. O modelo organiza acesso por módulos, equipes e cargos, com rastreabilidade de mudanças. A intenção foi centralizar governança em vez de depender de permissões individuais dispersas.", "I developed custom RBAC with roles, hierarchy and delegation: users cannot grant permissions they do not possess. The model organizes access by modules, teams and positions, with change traceability. The goal was centralized governance rather than scattered per-user permissions.") },
      { title: c("Aplicação de campo offline-first", "Offline-first field application"), body: c("Flutter com SQLite, API REST PHP/MySQL e sincronização quando a conexão está disponível. Os fluxos incluem GPS, fotos, assinatura digital, documentos/PDF e integrações com sistemas empresariais e de RH. JWT e RBAC apoiam o acesso protegido.", "Flutter with SQLite, a PHP/MySQL REST API and synchronization when connectivity is available. Flows include GPS, photos, digital signatures, documents/PDFs and enterprise and HR integrations. JWT and RBAC support protected access.") },
      { title: c("Entrega e resultado", "Delivery and outcome"), body: c("O MVP foi entregue em aproximadamente três semanas, digitalizando execução e reduzindo dependência de papel em conectividade limitada. A autorização criou uma base mais estruturada para governança.", "The MVP was delivered in approximately three weeks, digitizing execution and reducing reliance on paper under limited connectivity. Authorization established a more structured governance foundation.") },
    ],
  },
  {
    id: "thermal-printing", title: c("Pacote de Impressão Térmica", "Thermal Printing Package"), subtitle: c("Flutter, código nativo e hardware", "Flutter, native code and hardware"),
    category: c("Integração nativa", "Native integration"),
    description: c("Pacote isolado com Flutter, Kotlin e ZXing para imprimir códigos de barras legíveis em hardware térmico.", "An isolated Flutter, Kotlin and ZXing package for readable barcodes on thermal hardware."),
    role: c("Arquitetura do pacote, investigação técnica e integração nativa validada em hardware.", "Package architecture, technical investigation and hardware-validated native integration."),
    tags: ["Flutter", "Kotlin", "ZXing", "MethodChannels", "Bluetooth"], image: "/projects/plugin-impressao.png", featured: false,
    status: c("Validado em hardware", "Hardware validated"), delivery: c("Saída física validada com aplicação de teste isolada.", "Physical output validated with an isolated test application."), source: ["PROJ-007"],
    evidence: [{ label: c("Discussão técnica da integração", "Integration technical discussion"), url: "https://pt.linkedin.com/posts/gabriel-morais-marcondes-flutter-fullstack_flutter-dart-kotlin-activity-7465058883447783426-uvGh" }],
    sections: [
      { title: c("Problema e restrições", "Problem and constraints"), body: c("Um documento de pagamento precisava de código de barras opticamente legível. Sem acesso ao repositório principal, a integração precisava evoluir sem bloquear a equipe do produto.", "A payment document needed an optically readable barcode. Without access to the main repository, the integration had to evolve without blocking the product team.") },
      { title: c("Decisão técnica e resultado", "Technical decision and outcome"), body: c("Após abordagens Dart/ESC-POS e funções nativas que não atenderam à leitura óptica, usei ZXing em Kotlin para gerar a imagem com densidade adequada. MethodChannels conecta Flutter ao nativo; Dart envia o conteúdo rasterizado por Bluetooth. A API pequena isola a complexidade e a saída foi validada em hardware.", "After Dart/ESC-POS approaches and native functions failed optical-reading requirements, I used ZXing in Kotlin to generate imagery at the required density. MethodChannels connects Flutter to native code; Dart sends rasterized content over Bluetooth. A small API isolates complexity and the output was validated on hardware.") },
    ],
  },
  {
    id: "field-research", title: c("URBSocial — Pesquisa de Campo", "URBSocial — Field Research"), subtitle: c("Coleta offline e entrega em sete dias", "Offline collection delivered in seven days"),
    category: c("Operação de campo", "Field operations"),
    description: c("Coleta socioeconômica com SQLite, GPS e exportação Excel/CSV diretamente do dispositivo.", "Socioeconomic collection with SQLite, GPS and on-device Excel/CSV export."),
    role: c("Flutter, modelagem local, formulários, validação e exportação.", "Flutter, local modeling, forms, validation and export."), tags: ["Flutter", "SQLite", "GPS", "Excel/CSV"], image: "/projects/coleta.png", featured: false,
    status: c("Entregue em cerca de sete dias", "Delivered in about seven days"), delivery: c("Entrega em dezembro de 2025, em aproximadamente sete dias; uso atual não registrado.", "Delivered in December 2025, in approximately seven days; current use is not recorded."), source: ["PROJ-006"],
    sections: [
      { title: c("Contexto e solução", "Context and solution"), body: c("Pesquisas em papel dificultavam coleta e consolidação em conectividade limitada. Desenvolvi Flutter offline-first com formulários estruturados, validação, SQLite e GPS. Excel/CSV é exportado no dispositivo; sincronização backend é uma possibilidade futura, não uma funcionalidade entregue.", "Paper surveys complicated collection and consolidation under limited connectivity. I developed offline-first Flutter with structured forms, validation, SQLite and GPS. Excel/CSV is exported on-device; backend synchronization is a future possibility, not a delivered feature.") },
      { title: c("Entrega e resultado", "Delivery and outcome"), body: c("Entregue em aproximadamente sete dias, a solução substituiu coleta em papel e reduziu transcrição e consolidação manual.", "Delivered in approximately seven days, the solution replaced paper collection and reduced manual transcription and consolidation.") },
    ],
  },
  {
    id: "vm-tabacos", title: c("VM Tabacos — Gestão Comercial", "VM Tabacos — Business Management"), subtitle: c("Uso real por mais de dois anos", "Real use for over two years"),
    category: c("Sistema comercial", "Business systems"),
    description: c("Estoque, compras, vendas, fluxo de caixa e relatórios em Flutter, com impressão térmica.", "Inventory, purchases, sales, cash flow and reports in Flutter, with thermal printing."),
    role: c("Aplicativo Flutter e integrações, com parceiro responsável pelo backend/Firebase Functions.", "Flutter application and integrations, partnering with the backend/Firebase Functions developer."), tags: ["Flutter", "Firestore", "Firebase Functions", "Bluetooth"], image: "/projects/vm-tabacos.png", featured: false,
    status: c("Uso real por mais de dois anos", "Real use for over two years"), delivery: c("Desenvolvido de setembro de 2021 a maio de 2022, com mais de dois anos de uso ativo confirmado. Disponibilidade atual não registrada.", "Developed September 2021 to May 2022, with over two years of confirmed active use. Current availability is not recorded."), source: ["PROJ-008"],
    sections: [
      { title: c("Solução e colaboração", "Solution and collaboration"), body: c("Desenvolvi Flutter para gestão comercial de uma distribuidora, com parceiro responsável por backend/Firebase Functions. Catálogo, estoque, compras, vendas, caixa, históricos e relatórios são acompanhados por impressão térmica de comprovantes.", "I developed Flutter business management for a distributor, with a partner responsible for backend/Firebase Functions. Catalog, inventory, purchases, sales, cash flow, history and reports are complemented by thermal receipt printing.") },
      { title: c("Resultado", "Outcome"), body: c("Uso ativo por mais de dois anos, centralizando processos comerciais e financeiros e permitindo impressão em operação móvel.", "Active use for over two years, centralizing commercial and financial processes and enabling printing during mobile operations.") },
    ],
  },
  {
    id: "stepcare", title: c("StepCare — Gestão Clínica", "StepCare — Patient Management"), subtitle: c("Ownership full-stack complementar", "Supporting full-stack ownership"),
    category: c("Plataforma clínica", "Healthcare platform"),
    description: c("API compartilhada, PostgreSQL e clientes Flutter Android/Windows, da descoberta à infraestrutura.", "Shared API, PostgreSQL and Flutter Android/Windows clients, from discovery through infrastructure."),
    role: c("Descoberta, requisitos, arquitetura, dados, API, autenticação, clientes e infraestrutura.", "Discovery, requirements, architecture, data, API, authentication, clients and infrastructure."), tags: ["Flutter", "Node.js", "TypeScript", "Prisma", "PostgreSQL"], image: "/projects/stepcare.png", featured: false,
    status: c("Backend hospedado em nuvem", "Cloud-hosted backend"), delivery: c("Projeto independente desde dezembro de 2025, com infraestrutura em nuvem. Adoção e uso atual não registrados.", "Independent project since December 2025, with cloud infrastructure. Adoption and current use are not recorded."), source: ["PROJ-001"],
    highlight: c("Backend compartilhado entre Android e Windows", "Shared backend for Android/Windows"),
    sections: [
      { title: c("Contexto e ownership", "Context and ownership"), body: c("Um ambiente de cuidado dependia de registros clínicos manuais. Assumi descoberta, definição funcional, arquitetura, dados, API, autenticação, Flutter e infraestrutura.", "A care environment depended on manual clinical records. I owned discovery, functional definition, architecture, data, API, authentication, Flutter and infrastructure.") },
      { title: c("Arquitetura e resultado", "Architecture and outcome"), body: c("API REST Node.js/TypeScript, Next.js e Prisma centraliza regras sobre PostgreSQL. Android e Windows consomem o mesmo backend DigitalOcean. Pacientes, consultas, alergias, comorbidades e acompanhamento clínico ficam estruturados, reduzindo duplicação entre clientes.", "A Node.js/TypeScript, Next.js and Prisma REST API centralizes rules over PostgreSQL. Android and Windows consume the same DigitalOcean backend. Patients, consultations, allergies, comorbidities and follow-up are structured, reducing duplication between clients.") },
    ],
  },
  {
    id: "reservoir-controller", title: c("Controle de Reservatório por Lógica Fuzzy", "Fuzzy Logic Reservoir Controller"), subtitle: c("Software, automação e validação física", "Software, automation and physical validation"),
    category: c("Automação e controle", "Automation and control"),
    description: c("Controlador C integrado a CLP e planta de laboratório, como TCC de Engenharia de Controle e Automação.", "C controller integrated with a PLC and laboratory plant, as a Control and Automation Engineering thesis."),
    role: c("Projeto, C, integração física, testes e ajuste, em colaboração remota.", "Design, C, physical integration, testing and tuning, with remote collaboration."), tags: ["C", "PLC", "Fuzzy Logic"], image: "/projects/fuzzy-tcc.png", featured: false,
    status: c("Validado em laboratório", "Laboratory validated"), delivery: c("TCC com implementação física, agosto de 2024 a maio de 2025. Projeto acadêmico, distinto de sistema comercial em produção.", "Physically implemented thesis, August 2024 to May 2025. An academic project, distinct from a commercial production system."), source: ["PROJ-009", "9"],
    sections: [
      { title: c("Implementação e resultado", "Implementation and outcome"), body: c("Projetei e implementei um controlador Fuzzy em C para um reservatório real, integrando CLP, monitoramento, testes e ajuste. Colaborei com um colega na Hungria enquanto fazia integração física no Brasil. O resultado foi uma implementação completa com comportamento estável e validação prática.", "I designed and implemented a Fuzzy controller in C for a real reservoir, integrating PLC, monitoring, testing and tuning. I collaborated with a teammate in Hungary while performing physical integration in Brazil. The result was a complete implementation with stable behavior and practical validation.") },
    ],
  },
];
export const getProject = (id: string) => projects.find((project) => project.id === id);
