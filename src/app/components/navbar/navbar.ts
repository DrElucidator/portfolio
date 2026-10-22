import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { Idioma, IdiomaService } from '../../shared/idioma.service';
import { idiomas, itensNavbar, textosNavbar } from './navbar.content';

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  public readonly idioma = inject(IdiomaService);
  public readonly menuIdiomaAberto = signal(false);
  public readonly navegacaoAberta = signal(false);

  public readonly idiomas = idiomas;
  public readonly itens = itensNavbar;
  public readonly textos = textosNavbar;

  public constructor(private readonly elemento: ElementRef<HTMLElement>) {}

  public selecionarIdioma(idioma: Idioma): void {
    this.idioma.selecionar(idioma);
    this.menuIdiomaAberto.set(false);
  }

  public alternarMenuIdioma(): void {
    this.menuIdiomaAberto.update((aberto) => !aberto);
  }

  public alternarNavegacao(): void {
    this.navegacaoAberta.update((aberta) => !aberta);
  }

  public fecharNavegacao(): void {
    this.navegacaoAberta.set(false);
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
