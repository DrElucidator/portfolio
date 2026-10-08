import { TextoLocalizado } from '../../shared/idioma.service';

export interface Habilidade {
  imagem: string;
  titulo: TextoLocalizado;
  descricao: TextoLocalizado;
}

export const textosHabilidades = {
  pt: {
    titulo: 'Habilidades',
    introducao:
      'Aqui estão as principais tecnologias e práticas que aplico no desenvolvimento de aplicações.',
  },
  en: {
    titulo: 'Skills',
    introducao: 'Here are the main technologies and practices I apply when building applications.',
  },
};

export const habilidades: Habilidade[] = [
  {
    imagem: 'https://skillicons.dev/icons?i=cs&theme=dark',
    titulo: { pt: 'C#', en: 'C#' },
    descricao: {
      pt: 'Desenvolvimento de aplicações orientadas a objetos e regras de negócio.',
      en: 'Building object-oriented applications and business rules.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
    titulo: { pt: '.NET', en: '.NET' },
    descricao: {
      pt: 'Construção de aplicações, APIs e serviços com o ecossistema .NET.',
      en: 'Building applications, APIs, and services with the .NET ecosystem.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
    titulo: { pt: 'ASP.NET Core', en: 'ASP.NET Core' },
    descricao: {
      pt: 'Desenvolvimento de aplicações MVC e APIs REST para a web.',
      en: 'Developing MVC applications and REST APIs for the web.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=html&theme=dark',
    titulo: { pt: 'HTML', en: 'HTML' },
    descricao: {
      pt: 'Estruturação semântica e acessível de páginas e aplicações web.',
      en: 'Creating semantic and accessible structures for web pages and applications.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=css&theme=dark',
    titulo: { pt: 'CSS e SCSS', en: 'CSS and SCSS' },
    descricao: {
      pt: 'Estilos responsivos, organizados e consistentes com a interface.',
      en: 'Responsive, organized styling that stays consistent with the interface.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=js&theme=dark',
    titulo: { pt: 'JavaScript', en: 'JavaScript' },
    descricao: {
      pt: 'Interações e comportamentos dinâmicos para experiências web.',
      en: 'Dynamic interactions and behavior for web experiences.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=ts&theme=dark',
    titulo: { pt: 'TypeScript', en: 'TypeScript' },
    descricao: {
      pt: 'Código JavaScript tipado, mais legível e fácil de manter.',
      en: 'Typed JavaScript that is easier to read and maintain.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
    titulo: { pt: 'Angular', en: 'Angular' },
    descricao: {
      pt: 'Aplicações web baseadas em componentes, rotas e serviços.',
      en: 'Web applications built around components, routing, and services.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
    titulo: { pt: 'RxJS', en: 'RxJS' },
    descricao: {
      pt: 'Composição de fluxos assíncronos e eventos reativos.',
      en: 'Composing asynchronous flows and reactive events.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
    titulo: { pt: 'Bootstrap', en: 'Bootstrap' },
    descricao: {
      pt: 'Interfaces responsivas com componentes e utilitários de layout.',
      en: 'Responsive interfaces with reusable components and layout utilities.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
    titulo: { pt: 'PostgreSQL', en: 'PostgreSQL' },
    descricao: {
      pt: 'Modelagem e persistência de dados relacionais.',
      en: 'Modeling and persisting relational data.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
    titulo: { pt: 'SQL Server', en: 'SQL Server' },
    descricao: {
      pt: 'Banco de dados relacional para aplicações e APIs.',
      en: 'Relational database solutions for applications and APIs.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
    titulo: { pt: 'Entity Framework Core', en: 'Entity Framework Core' },
    descricao: {
      pt: 'Mapeamento objeto-relacional e acesso a dados com .NET.',
      en: 'Object-relational mapping and data access with .NET.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
    titulo: { pt: 'Dapper', en: 'Dapper' },
    descricao: {
      pt: 'Acesso enxuto e performático a bancos de dados relacionais.',
      en: 'Lean, high-performance access to relational databases.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=rabbitmq&theme=dark',
    titulo: { pt: 'RabbitMQ', en: 'RabbitMQ' },
    descricao: {
      pt: 'Mensageria para desacoplar e organizar processamentos assíncronos.',
      en: 'Messaging that decouples and organizes asynchronous processing.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
    titulo: { pt: 'MassTransit', en: 'MassTransit' },
    descricao: {
      pt: 'Orquestração de mensagens e consumidores em aplicações .NET.',
      en: 'Orchestrating messages and consumers in .NET applications.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=cypress&theme=dark',
    titulo: { pt: 'Cypress', en: 'Cypress' },
    descricao: {
      pt: 'Automação de testes de ponta a ponta para aplicações web.',
      en: 'End-to-end test automation for web applications.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
    titulo: { pt: 'MSTest e Playwright', en: 'MSTest and Playwright' },
    descricao: {
      pt: 'Testes unitários e automatizados para validar regras e fluxos.',
      en: 'Unit and automated tests to validate rules and user flows.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
    titulo: { pt: 'Git e GitHub', en: 'Git and GitHub' },
    descricao: {
      pt: 'Versionamento, colaboração e organização do ciclo de desenvolvimento.',
      en: 'Version control, collaboration, and development workflow organization.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
    titulo: { pt: 'Docker', en: 'Docker' },
    descricao: {
      pt: 'Ambientes isolados e reproduzíveis para desenvolvimento e entrega.',
      en: 'Isolated, reproducible environments for development and delivery.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
    titulo: { pt: 'Azure', en: 'Azure' },
    descricao: {
      pt: 'Publicação e operação de aplicações e serviços em nuvem.',
      en: 'Deploying and operating applications and cloud services.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=figma&theme=dark',
    titulo: { pt: 'Figma', en: 'Figma' },
    descricao: {
      pt: 'Criação e refinamento de interfaces antes e durante a implementação.',
      en: 'Creating and refining interfaces before and during implementation.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=tensorflow&theme=dark',
    titulo: { pt: 'IA aplicada ao desenvolvimento', en: 'AI-assisted development' },
    descricao: {
      pt: 'Uso de modelos de IA para explorar soluções, estruturar tarefas, revisar código e validar resultados com senso crítico.',
      en: 'Using AI models to explore solutions, structure tasks, review code, and validate results critically.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=postman&theme=dark',
    titulo: { pt: 'APIs REST e JWT', en: 'REST APIs and JWT' },
    descricao: {
      pt: 'Modelagem de endpoints, integração entre serviços e controle de acesso por autenticação.',
      en: 'Designing endpoints, integrating services, and handling authenticated access.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
    titulo: { pt: 'Modelagem de dados', en: 'Data modeling' },
    descricao: {
      pt: 'Estruturação de entidades, relacionamentos e regras para dados consistentes.',
      en: 'Structuring entities, relationships, and rules for consistent data.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
    titulo: { pt: 'Arquitetura de software', en: 'Software architecture' },
    descricao: {
      pt: 'Organização por camadas e responsabilidades para aplicações sustentáveis.',
      en: 'Organizing layers and responsibilities for sustainable applications.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=figma&theme=dark',
    titulo: { pt: 'UX e design de interface', en: 'UX and interface design' },
    descricao: {
      pt: 'Decisões de interface guiadas por clareza, contexto e experiência de uso.',
      en: 'Interface decisions guided by clarity, context, and user experience.',
    },
  },
  {
    imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
    titulo: { pt: 'VS Code', en: 'VS Code' },
    descricao: {
      pt: 'Ambiente extensível para desenvolvimento web e produtividade.',
      en: 'An extensible environment for web development and productivity.',
    },
  },
];
