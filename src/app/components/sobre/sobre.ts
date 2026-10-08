import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../shared/idioma.service';
import { textosSobre } from './sobre.content';

@Component({
  imports: [],
  selector: 'app-sobre',
  templateUrl: './sobre.html',
})
export class Sobre {
  public readonly idioma = inject(IdiomaService);

  public readonly textos = textosSobre;
}
