import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../shared/idioma.service';
import { habilidades, textosHabilidades } from './habilidades.content';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
})
export class Habilidades {
  public readonly idioma = inject(IdiomaService);
  public readonly textos = textosHabilidades;
  public readonly habilidades = habilidades;
}
