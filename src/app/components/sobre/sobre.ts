import { Component, inject } from '@angular/core';
import { Idioma, IdiomaService } from '../../shared/idioma.service';

@Component({
  imports: [],
  selector: 'app-sobre',
  templateUrl: './sobre.html',
})
export class Sobre {
  public readonly idioma = inject(IdiomaService);

  public readonly textos: Record<Idioma, {
    saudacao: string;
    cargo: string;
    introducao: string;
    destaque: string;
    conclusao: string;
    pais: string;
    fotoAlternativa: string;
  }> = {
    pt: {
      saudacao: 'Olá, sou',
      cargo: 'Desenvolvedor Full Stack',
      introducao: 'Crio soluções digitais',
      destaque: 'claras, úteis e bem construídas',
      conclusao: '. Com postura versátil diante de novos desafios, busco entender o problema previamente para escolher a ferramenta adequada para desenvolver experiências que façam sentido para quem utilizá-las.',
      pais: 'Brasil',
      fotoAlternativa: 'Foto de Alec Luí',
    },
    en: {
      saudacao: 'Hello, I’m',
      cargo: 'Full Stack Developer',
      introducao: 'I build',
      destaque: 'clear, useful, and well-crafted',
      conclusao: 'digital solutions. With a versatile approach to new challenges, I first seek to understand the problem, then choose the right tools to create experiences that genuinely work for the people using them.',
      pais: 'Brazil',
      fotoAlternativa: 'Photo of Alec Luí',
    },
  };
}
