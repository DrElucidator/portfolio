import { Component, signal } from '@angular/core';
import { ModalProjeto } from './modal-projeto/modal-projeto';

interface Projeto {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [ModalProjeto],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})
export class Projetos {
  public readonly projetoSelecionado = signal<Projeto | undefined>(undefined);

  public readonly projetos: Projeto[] = [
    {
      titulo: 'OCR Bancário',
      descricao:
        'Protótipo voltado à leitura e à estruturação de informações bancárias a partir de documentos digitalizados, explorando automação e tratamento de dados.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/OCRBancario',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Gerador de Certificados Online',
      descricao:
        'A aplicação permite cadastrar cursos e alunos, gerar certificados em lote de forma assíncrona e acompanhar o processamento dos certificados. O projeto utiliza autenticação JWT, persistência relacional e mensageria para organizar o fluxo de geração e download dos arquivos.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/gerador-de-certificados',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'SQL Server',
        'JWT',
      ],
    },
    {
      titulo: 'Delivery App',
      descricao:
        'A API REST gerencia clientes, estabelecimentos e cardápios de uma plataforma de pedidos e entregas. O sistema oferece autenticação JWT, cadastro de produtos e complementos, ativação de estabelecimentos e consulta pública do cardápio vigente.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/delivery-app',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'PostgreSQL',
        'JWT',
      ],
    },
    {
      titulo: 'e-Agenda API',
      descricao:
        'API de agenda para centralizar contatos, compromissos, tarefas e despesas em uma solução organizada por módulos.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/e-agenda-api',
      tecnologias: ['C#', '.NET', 'ASP.NET Core', 'Web API'],
    },
    {
      titulo: 'Data Humanizada',
      descricao:
        'Biblioteca utilitária para converter datas e intervalos de tempo em representações mais legíveis e próximas da linguagem natural.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/data-humanizada',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Controle de Bar',
      descricao:
        'Sistema web multi-tenant para gerenciamento de bares, com controle de mesas, garçons, produtos, contas e pedidos. A aplicação calcula os valores das contas, acompanha o faturamento por período e mantém os dados isolados por estabelecimento.',
      urlImagem: '/img/projects/controle-de-bar/controle-de-bar.gif',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/controle-de-bar-2026',
      tecnologias: [
        'C#',
        '.NET 10',
        'ASP.NET Core MVC',
        'Entity Framework Core',
        'SQL Server',
        'ASP.NET Core Identity',
        'Bootstrap',
        'MSTest',
        'Playwright',
        'Azure',
      ],
    },
    {
      titulo: 'Gerador de Provas',
      descricao:
        'A aplicação organiza disciplinas, matérias e questões para permitir a criação de testes personalizados. Os testes podem ser gerados com questões selecionadas aleatoriamente, duplicados e exportados em PDF junto com seus respectivos gabaritos.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/gerador-de-provas-2026',
      tecnologias: ['HTML', 'CSS', 'C#', '.NET 10', 'Entity Framework'],
    },
    {
      titulo: 'Escola de Cursos',
      descricao:
        'Sistema web para administrar as operações de uma escola de cursos, incluindo cadastros e processos relacionados à rotina acadêmica.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/EscolaDeCursos',
      tecnologias: ['C#', '.NET', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    },
    {
      titulo: 'Escola de Cursos',
      descricao:
        'Aplicação web dedicada ao gerenciamento de uma escola de cursos, desenvolvida como evolução prática de fluxos de cadastro e administração acadêmica.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/escola-de-cursos-2026',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      titulo: 'e-Agenda Web',
      descricao:
        'Aplicação web para organização pessoal e profissional, com módulos de contatos, compromissos, tarefas, despesas e categorias.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/e-Agenda-Web',
      tecnologias: ['C#', 'ASP.NET Core MVC', 'Dapper', 'SQL Server', 'Bootstrap', 'Azure'],
    },
    {
      titulo: 'Conversor de Números Romanos',
      descricao:
        'Utilitário que converte números inteiros em algarismos romanos, aplicando as regras de composição e subtração da numeração romana.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Conversor-de-numeros-inteiros-para-romanos',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Controle de Medicamentos Web',
      descricao:
        'Sistema web para administrar medicamentos e estoque hospitalar, com cadastros de pacientes, fornecedores e funcionários.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/Controle-de-Medicamentos-Web',
      tecnologias: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    },
    {
      titulo: 'Lista de Compras Web',
      descricao:
        'Aplicação web para criar e acompanhar listas de compras, praticando operações de cadastro, edição e organização de itens.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/Lista-de-Compras-Web',
      tecnologias: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    },
    {
      titulo: 'Clube da Leitura Web',
      descricao:
        'Aplicação web para gerenciamento de um clube da leitura, reunindo os cadastros e operações necessários para sua organização.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/Clube-da-Leitura-Web',
      tecnologias: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    },
    {
      titulo: 'Cheque por Extenso',
      descricao:
        'Desafio de lógica que converte valores monetários em sua representação textual por extenso, considerando reais e centavos.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Cheque-por-extenso',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Gestão de Equipamentos Web',
      descricao:
        'Sistema web para controlar fabricantes, equipamentos e chamados de manutenção, substituindo processos manuais de inventário.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/gestao-de-equipamentos-web-2026',
      tecnologias: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    },
    {
      titulo: 'Controle de Medicamentos',
      descricao:
        'Aplicação para controle de medicamentos, estoque e operações relacionadas ao contexto hospitalar.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/WriteLine-GreenLife-Devs/Controle-de-Medicamentos',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Lista de Compras',
      descricao:
        'Aplicação para registrar e organizar itens de uma lista de compras, exercitando operações fundamentais de persistência e negócio.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Lista-de-Compras',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Clube da Leitura',
      descricao:
        'Sistema para organizar as informações e operações de um clube da leitura em uma aplicação de domínio estruturado.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/clube-da-leitura-2026',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Gestão de Equipamentos',
      descricao:
        'Aplicação para cadastrar equipamentos e acompanhar chamados de manutenção, modelando um fluxo básico de inventário.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/gestao-de-equipamentos-2026',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Atividades de Orientação a Objetos',
      descricao:
        'Conjunto de exercícios de orientação a objetos em C#, explorando modelagem de classes, encapsulamento e relações entre entidades.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Atividades-de-orientacao-a-objetos-csharp',
      tecnologias: ['C#', '.NET', 'Orientação a Objetos'],
    },
    {
      titulo: 'Sistema Bancário de Conta Corrente',
      descricao:
        'Simulação de operações de conta corrente, com regras de negócio para movimentações, saldo e gerenciamento de contas.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Sistema-Bancario-de-Conta-Corrente',
      tecnologias: ['C#', '.NET', 'Orientação a Objetos'],
    },
    {
      titulo: 'Termo',
      descricao:
        'Implementação de um jogo de adivinhação de palavras inspirado em Termo, trabalhando regras de tentativa e comparação de caracteres.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Termo',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Janken',
      descricao:
        'Jogo de pedra, papel e tesoura desenvolvido para praticar condicionais, aleatoriedade e interação em console.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Janken',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Gerador de Losango',
      descricao:
        'Exercício de lógica para gerar losangos no console, trabalhando laços, alinhamento e construção de padrões.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Gerador-de-Losango',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Tupiniquim',
      descricao:
        'Projeto de lógica em C# desenvolvido para praticar fluxo de execução, regras e interação em aplicações de console.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Tupiniquim',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Jogo dos Dados',
      descricao:
        'Jogo de console baseado em lançamentos de dados, explorando aleatoriedade, pontuação e regras de rodada.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Jogo-dos-Dados',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Jogo da Forca',
      descricao:
        'Versão em console do jogo da forca, com controle de tentativas, letras utilizadas e progresso da palavra.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Jogo-da-Forca',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Práticas Iniciais em C#',
      descricao:
        'Coleção de exercícios iniciais para consolidar sintaxe, variáveis, operadores, estruturas condicionais e laços em C#.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Atividades-de-Praticas-Iniciais-em-CSharp',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Jogo de Adivinhação',
      descricao:
        'Jogo de console em que o jogador tenta descobrir um número sorteado, praticando entrada de dados, condições e tentativas.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Jogo-de-Adivinhacao',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Calculadora',
      descricao:
        'Calculadora de console para operações aritméticas básicas, criada como exercício de fundamentos de programação.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/Calculadora-C-',
      tecnologias: ['C#', '.NET'],
    },
    {
      titulo: 'Hello World',
      descricao:
        'Primeiro projeto em C#, registrando o início da trajetória de estudos com uma aplicação de console.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/DrElucidator/HelloWorld',
      tecnologias: ['C#', '.NET'],
    },
  ];
}
