import { Component, ElementRef, HostListener, signal } from '@angular/core';

interface ItemNavbar {
  titulo: string;
  url: string;
  icone: string;
}

type Idioma = 'pt' | 'en';

interface OpcaoIdioma {
  codigo: Idioma;
  nome: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  public readonly idiomaAtual = signal<Idioma>(this.obterIdiomaInicial());
  public readonly menuIdiomaAberto = signal(false);

  public readonly idiomas: OpcaoIdioma[] = [
    { codigo: 'pt', nome: 'Português' },
    { codigo: 'en', nome: 'English' },
  ];

  public readonly itens: ItemNavbar[] = [
    {
      titulo: 'Sobre',
      url: '#sobre',
      icone: 'bi-person'
    },
    {
      titulo: 'Habilidades',
      url: '#habilidades',
      icone: 'bi-award'
    },
    {
      titulo: 'Projetos',
      url: '#projetos',
      icone: 'bi-card-list'
    }
  ];

  public constructor(private readonly elemento: ElementRef<HTMLElement>) {}

  public selecionarIdioma(idioma: Idioma): void {
    this.idiomaAtual.set(idioma);
    window.localStorage.setItem('portfolio-idioma', idioma);
    this.menuIdiomaAberto.set(false);
  }

  public alternarMenuIdioma(): void {
    this.menuIdiomaAberto.update((aberto) => !aberto);
  }

  @HostListener('document:click', ['$event'])
  public fecharMenuAoClicarFora(evento: MouseEvent): void {
    if (evento.target instanceof Node && !this.elemento.nativeElement.contains(evento.target)) {
      this.menuIdiomaAberto.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  public fecharMenuComEscape(): void {
    this.menuIdiomaAberto.set(false);
  }

  private obterIdiomaInicial(): Idioma {
    const idiomaSalvo = window.localStorage.getItem('portfolio-idioma');

    if (idiomaSalvo === 'pt' || idiomaSalvo === 'en') {
      return idiomaSalvo;
    }

    return 'pt';
  }
}
