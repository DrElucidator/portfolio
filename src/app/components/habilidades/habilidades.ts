import { Component, inject } from '@angular/core';
import { Idioma, IdiomaService, TextoLocalizado } from '../../shared/idioma.service';

interface Habilidade {
  imagem: string;
  titulo: TextoLocalizado;
  descricao: TextoLocalizado;
}
const texto = (pt: string, en: string): TextoLocalizado => ({ pt, en });
const skill = (
  icone: string,
  tituloPt: string,
  tituloEn: string,
  descricaoPt: string,
  descricaoEn: string,
): Habilidade => ({
  imagem: `https://skillicons.dev/icons?i=${icone}&theme=dark`,
  titulo: texto(tituloPt, tituloEn),
  descricao: texto(descricaoPt, descricaoEn),
});

@Component({ selector: 'app-habilidades', imports: [], templateUrl: './habilidades.html' })
export class Habilidades {
  public readonly idioma = inject(IdiomaService);
  public readonly textos: Record<Idioma, { titulo: string; introducao: string }> = {
    pt: {
      titulo: 'Habilidades',
      introducao:
        'Aqui estão as principais tecnologias e práticas que aplico no desenvolvimento de aplicações.',
    },
    en: {
      titulo: 'Skills',
      introducao:
        'Here are the main technologies and practices I apply when building applications.',
    },
  };
  public readonly habilidades: Habilidade[] = [
    skill(
      'cs',
      'C#',
      'C#',
      'Desenvolvimento de aplicações orientadas a objetos e regras de negócio.',
      'Building object-oriented applications and business rules.',
    ),
    skill(
      'dotnet',
      '.NET',
      '.NET',
      'Construção de aplicações, APIs e serviços com o ecossistema .NET.',
      'Building applications, APIs, and services with the .NET ecosystem.',
    ),
    skill(
      'dotnet',
      'ASP.NET Core',
      'ASP.NET Core',
      'Desenvolvimento de aplicações MVC e APIs REST para a web.',
      'Developing MVC applications and REST APIs for the web.',
    ),
    skill(
      'html',
      'HTML',
      'HTML',
      'Estruturação semântica e acessível de páginas e aplicações web.',
      'Creating semantic and accessible structures for web pages and applications.',
    ),
    skill(
      'css',
      'CSS e SCSS',
      'CSS and SCSS',
      'Estilos responsivos, organizados e consistentes com a interface.',
      'Responsive, organized styling that stays consistent with the interface.',
    ),
    skill(
      'js',
      'JavaScript',
      'JavaScript',
      'Interações e comportamentos dinâmicos para experiências web.',
      'Dynamic interactions and behavior for web experiences.',
    ),
    skill(
      'ts',
      'TypeScript',
      'TypeScript',
      'Código JavaScript tipado, mais legível e fácil de manter.',
      'Typed JavaScript that is easier to read and maintain.',
    ),
    skill(
      'angular',
      'Angular',
      'Angular',
      'Aplicações web baseadas em componentes, rotas e serviços.',
      'Web applications built around components, routing, and services.',
    ),
    skill(
      'rxjs',
      'RxJS',
      'RxJS',
      'Composição de fluxos assíncronos e eventos reativos.',
      'Composing asynchronous flows and reactive events.',
    ),
    skill(
      'bootstrap',
      'Bootstrap',
      'Bootstrap',
      'Interfaces responsivas com componentes e utilitários de layout.',
      'Responsive interfaces with reusable components and layout utilities.',
    ),
    skill(
      'postgres',
      'PostgreSQL',
      'PostgreSQL',
      'Modelagem e persistência de dados relacionais.',
      'Modeling and persisting relational data.',
    ),
    skill(
      'azure',
      'SQL Server',
      'SQL Server',
      'Banco de dados relacional para aplicações e APIs.',
      'Relational database solutions for applications and APIs.',
    ),
    skill(
      'dotnet',
      'Entity Framework Core',
      'Entity Framework Core',
      'Mapeamento objeto-relacional e acesso a dados com .NET.',
      'Object-relational mapping and data access with .NET.',
    ),
    skill(
      'dotnet',
      'Dapper',
      'Dapper',
      'Acesso enxuto e performático a bancos de dados relacionais.',
      'Lean, high-performance access to relational databases.',
    ),
    skill(
      'rabbitmq',
      'RabbitMQ',
      'RabbitMQ',
      'Mensageria para desacoplar e organizar processamentos assíncronos.',
      'Messaging that decouples and organizes asynchronous processing.',
    ),
    skill(
      'dotnet',
      'MassTransit',
      'MassTransit',
      'Orquestração de mensagens e consumidores em aplicações .NET.',
      'Orchestrating messages and consumers in .NET applications.',
    ),
    skill(
      'cypress',
      'Cypress',
      'Cypress',
      'Automação de testes de ponta a ponta para aplicações web.',
      'End-to-end test automation for web applications.',
    ),
    skill(
      'dotnet',
      'MSTest e Playwright',
      'MSTest and Playwright',
      'Testes unitários e automatizados para validar regras e fluxos.',
      'Unit and automated tests to validate rules and user flows.',
    ),
    skill(
      'git',
      'Git e GitHub',
      'Git and GitHub',
      'Versionamento, colaboração e organização do ciclo de desenvolvimento.',
      'Version control, collaboration, and development workflow organization.',
    ),
    skill(
      'docker',
      'Docker',
      'Docker',
      'Ambientes isolados e reproduzíveis para desenvolvimento e entrega.',
      'Isolated, reproducible environments for development and delivery.',
    ),
    skill(
      'azure',
      'Azure',
      'Azure',
      'Publicação e operação de aplicações e serviços em nuvem.',
      'Deploying and operating applications and cloud services.',
    ),
    skill(
      'figma',
      'Figma',
      'Figma',
      'Criação e refinamento de interfaces antes e durante a implementação.',
      'Creating and refining interfaces before and during implementation.',
    ),
    skill(
      'tensorflow',
      'IA aplicada ao desenvolvimento',
      'AI-assisted development',
      'Uso de modelos de IA para explorar soluções, estruturar tarefas, revisar código e validar resultados com senso crítico.',
      'Using AI models to explore solutions, structure tasks, review code, and validate results critically.',
    ),
    skill(
      'postman',
      'APIs REST e JWT',
      'REST APIs and JWT',
      'Modelagem de endpoints, integração entre serviços e controle de acesso por autenticação.',
      'Designing endpoints, integrating services, and handling authenticated access.',
    ),
    skill(
      'postgres',
      'Modelagem de dados',
      'Data modeling',
      'Estruturação de entidades, relacionamentos e regras para dados consistentes.',
      'Structuring entities, relationships, and rules for consistent data.',
    ),
    skill(
      'dotnet',
      'Arquitetura de software',
      'Software architecture',
      'Organização por camadas e responsabilidades para aplicações sustentáveis.',
      'Organizing layers and responsibilities for sustainable applications.',
    ),
    skill(
      'figma',
      'UX e design de interface',
      'UX and interface design',
      'Decisões de interface guiadas por clareza, contexto e experiência de uso.',
      'Interface decisions guided by clarity, context, and user experience.',
    ),
    skill(
      'vscode',
      'VS Code',
      'VS Code',
      'Ambiente extensível para desenvolvimento web e produtividade.',
      'An extensible environment for web development and productivity.',
    ),
  ];
}
