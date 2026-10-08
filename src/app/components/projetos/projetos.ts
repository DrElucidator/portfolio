import { Component, inject, signal } from '@angular/core';
import { IdiomaService } from '../../shared/idioma.service';
import { projetos, Projeto, textosProjetos } from './projetos.content';
import { ModalProjeto } from './modal-projeto/modal-projeto';

@Component({ imports: [ModalProjeto], selector: 'app-projetos', templateUrl: './projetos.html' })
export class Projetos {
  public readonly idioma = inject(IdiomaService);
  public readonly textos = textosProjetos;
  public readonly projetos = projetos;
  public readonly projetoSelecionado = signal<Projeto | undefined>(undefined);
}
