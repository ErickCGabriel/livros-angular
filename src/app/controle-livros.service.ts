import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Guia de aprendizagem de Java com abordagem visual e prática, cobrindo orientação a objetos.',
      autores: ['Kathy Sierra', 'Bert Bates']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo: 'Introdução completa à programação Java, com exemplos e exercícios do básico ao avançado.',
      autores: ['Paul Deitel', 'Harvey Deitel']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Core Java for the Impatient',
      resumo: 'Visão objetiva dos recursos modernos da linguagem Java para quem já programa.',
      autores: ['Cay Horstmann']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.reduce((max, l) => Math.max(max, l.codigo), 0);
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
