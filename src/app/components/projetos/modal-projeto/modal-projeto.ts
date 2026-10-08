import { Component, input, output } from '@angular/core';
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

  public readonly modalFechado = output<void>();
}
