import { Component, HostListener, input, output } from '@angular/core';
import { Idioma, TextoLocalizado } from '../../../shared/idioma.service';

interface ProjetoSelecionado {
  titulo: TextoLocalizado;
  urlImagem: string;
}

@Component({
  imports: [],
  selector: 'app-modal-projeto',
  templateUrl: './modal-projeto.html',
})
export class ModalProjeto {
  public readonly projeto = input.required<ProjetoSelecionado | undefined>();
  public readonly idioma = input.required<Idioma>();
  public readonly textoFechar = input.required<string>();

  public readonly modalFechado = output<void>();

  public fechar(): void {
    this.modalFechado.emit();
  }

  @HostListener('document:keydown.escape')
  public fecharComEscape(): void {
    if (this.projeto()) {
      this.fechar();
    }
  }
}
