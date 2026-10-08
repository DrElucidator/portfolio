import { Component } from '@angular/core';

interface Habilidade {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
})
export class Habilidades {
  public readonly habilidades: Habilidade[] = [
    {
      imagem: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
      descricao: 'Desenvolvimento de aplicações orientadas a objetos e regras de negócio.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: '.NET',
      descricao: 'Construção de aplicações, APIs e serviços com o ecossistema .NET.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: 'ASP.NET Core',
      descricao: 'Desenvolvimento de aplicações MVC e APIs REST para a web.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
      descricao: 'Estruturação semântica e acessível de páginas e aplicações web.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=css&theme=dark',
      titulo: 'CSS e SCSS',
      descricao: 'Estilos responsivos, organizados e consistentes com a interface.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=js&theme=dark',
      titulo: 'JavaScript',
      descricao: 'Interações e comportamentos dinâmicos para experiências web.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
      descricao: 'Código JavaScript tipado, mais legível e fácil de manter.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
      descricao: 'Aplicações web baseadas em componentes, rotas e serviços.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
      descricao: 'Composição de fluxos assíncronos e eventos reativos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
      titulo: 'Bootstrap',
      descricao: 'Interfaces responsivas com componentes e utilitários de layout.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'PostgreSQL',
      descricao: 'Modelagem e persistência de dados relacionais.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'SQL Server',
      descricao: 'Banco de dados relacional para aplicações e APIs.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: 'Entity Framework Core',
      descricao: 'Mapeamento objeto-relacional e acesso a dados com .NET.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: 'Dapper',
      descricao: 'Acesso enxuto e performático a bancos de dados relacionais.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rabbitmq&theme=dark',
      titulo: 'RabbitMQ',
      descricao: 'Mensageria para desacoplar e organizar processamentos assíncronos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: 'MassTransit',
      descricao: 'Orquestração de mensagens e consumidores em aplicações .NET.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
      descricao: 'Automação de testes de ponta a ponta para aplicações web.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: 'MSTest e Playwright',
      descricao: 'Testes unitários e automatizados para validar regras e fluxos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git e GitHub',
      descricao: 'Versionamento, colaboração e organização do ciclo de desenvolvimento.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
      descricao: 'Ambientes isolados e reproduzíveis para desenvolvimento e entrega.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'Azure',
      descricao: 'Publicação e operação de aplicações e serviços em nuvem.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=figma&theme=dark',
      titulo: 'Figma',
      descricao: 'Criação e refinamento de interfaces antes e durante a implementação.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=tensorflow&theme=dark',
      titulo: 'IA aplicada ao desenvolvimento',
      descricao:
        'Uso de modelos de IA para explorar soluções, estruturar tarefas, revisar código e validar resultados com senso crítico.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postman&theme=dark',
      titulo: 'APIs REST e JWT',
      descricao:
        'Modelagem de endpoints, integração entre serviços e controle de acesso por autenticação.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'Modelagem de dados',
      descricao: 'Estruturação de entidades, relacionamentos e regras para dados consistentes.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet&theme=dark',
      titulo: 'Arquitetura de software',
      descricao: 'Organização por camadas e responsabilidades para aplicações sustentáveis.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=figma&theme=dark',
      titulo: 'UX e design de interface',
      descricao: 'Decisões de interface guiadas por clareza, contexto e experiência de uso.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VS Code',
      descricao: 'Ambiente extensível para desenvolvimento web e produtividade.',
    },
  ];
}
