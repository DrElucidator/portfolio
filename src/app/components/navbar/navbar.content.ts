import { Idioma, TextoLocalizado } from '../../shared/idioma.service';

export interface ItemNavbar {
  titulo: TextoLocalizado;
  url: string;
  icone: string;
}
export interface OpcaoIdioma {
  codigo: Idioma;
  nome: string;
}

export const itensNavbar: ItemNavbar[] = [
  { titulo: { pt: 'Sobre', en: 'About' }, url: '#sobre', icone: 'bi-person' },
  { titulo: { pt: 'Habilidades', en: 'Skills' }, url: '#habilidades', icone: 'bi-award' },
  { titulo: { pt: 'Projetos', en: 'Projects' }, url: '#projetos', icone: 'bi-card-list' },
];

export const idiomas: OpcaoIdioma[] = [
  { codigo: 'pt', nome: 'Português' },
  { codigo: 'en', nome: 'English' },
];
