import { Injectable, signal } from '@angular/core';

export type Idioma = 'pt' | 'en';

export interface TextoLocalizado {
  pt: string;
  en: string;
}

@Injectable({ providedIn: 'root' })
export class IdiomaService {
  public readonly atual = signal<Idioma>(this.obterIdiomaInicial());

  public selecionar(idioma: Idioma): void {
    this.atual.set(idioma);
    window.localStorage.setItem('portfolio-idioma', idioma);
  }

  private obterIdiomaInicial(): Idioma {
    const idiomaSalvo = window.localStorage.getItem('portfolio-idioma');

    if (idiomaSalvo === 'pt' || idiomaSalvo === 'en') return idiomaSalvo;

    return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
