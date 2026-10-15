import { Injectable, signal } from '@angular/core';

export type Idioma = 'pt' | 'en';

export interface TextoLocalizado {
  pt: string;
  en: string;
}

@Injectable({ providedIn: 'root' })
export class IdiomaService {
  public readonly atual = signal<Idioma>(this.obterIdiomaInicial());

  private readonly idiomaDoDocumento: Record<Idioma, string> = {
    pt: 'pt-BR',
    en: 'en',
  };

  private readonly metadadosPorIdioma: Record<Idioma, { titulo: string; descricao: string }> = {
    pt: {
      titulo: 'Alec Luí | Desenvolvedor Full Stack',
      descricao:
        'Portfólio de Alec Luí, desenvolvedor full stack que cria soluções digitais claras, úteis e bem construídas.',
    },
    en: {
      titulo: 'Alec Luí | Full Stack Developer',
      descricao:
        "Alec Luí's portfolio, a full stack developer building clear, useful, and well-crafted digital solutions.",
    },
  };

  public constructor() {
    this.atualizarDocumento(this.atual());
  }

  public selecionar(idioma: Idioma): void {
    this.atual.set(idioma);
    this.atualizarDocumento(idioma);
    window.localStorage.setItem('portfolio-idioma', idioma);
  }

  private atualizarDocumento(idioma: Idioma): void {
    const metadados = this.metadadosPorIdioma[idioma];
    document.documentElement.lang = this.idiomaDoDocumento[idioma];
    document.title = metadados.titulo;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadados.descricao);
  }

  private obterIdiomaInicial(): Idioma {
    const idiomaSalvo = window.localStorage.getItem('portfolio-idioma');

    if (idiomaSalvo === 'pt' || idiomaSalvo === 'en') return idiomaSalvo;

    return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
