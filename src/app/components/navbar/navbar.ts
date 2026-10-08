import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { Idioma, IdiomaService, TextoLocalizado } from '../../shared/idioma.service';

interface ItemNavbar {
  titulo: TextoLocalizado;
  url: string;
  icone: string;
}

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
  public readonly idioma = inject(IdiomaService);
  public readonly menuIdiomaAberto = signal(false);

  public readonly idiomas: OpcaoIdioma[] = [
    { codigo: 'pt', nome: 'Português' },
    { codigo: 'en', nome: 'English' },
  ];

  public readonly itens: ItemNavbar[] = [
    {
      titulo: { pt: 'Sobre', en: 'About' },
      url: '#sobre',
      icone: 'bi-person'
    },
    {
      titulo: { pt: 'Habilidades', en: 'Skills' },
      url: '#habilidades',
      icone: 'bi-award'
    },
    {
      titulo: { pt: 'Projetos', en: 'Projects' },
      url: '#projetos',
      icone: 'bi-card-list'
    }
  ];

  public constructor(private readonly elemento: ElementRef<HTMLElement>) {}

  public selecionarIdioma(idioma: Idioma): void {
    this.idioma.selecionar(idioma);
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

}
