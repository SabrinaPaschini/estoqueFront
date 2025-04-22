import { Component, OnInit } from '@angular/core';

import { DadosEstoqueService } from '../../sevices/dados-estoque.service';

interface Componente {
  // typescript
  tipo: string;
  medida: string;
  valor: string;
}

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent implements OnInit {
  componentes: Componente[] = [];

  constructor(private dadosEstoqueService: DadosEstoqueService) {}

  ngOnInit(): void {
    // se inscreve no observable para pegar as atualizações de dados

    this.dadosEstoqueService.componentes$.subscribe((dados) => { // essa variavel é uma variavel temporária 
      
      // aqui eu estou atribuindo o valor da variavel que é um array do tipo componente, e esse novo valor é dados, que é recebido pelo observable que veio do dados-estoque que eu importei no inicio e coloquei no constructor
      this.componentes = dados;
    });
  }
}
