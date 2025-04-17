import { Component, OnInit } from '@angular/core';

import { DadosEstoqueService } from '../dados-estoque.service';

interface Componente {
  // typescript
  tipo: string;
  medida: string;
  valor: string;
}

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  componentes: Componente[] = []; 

  constructor(private dadosEstoqueService:DadosEstoqueService) { }

  
  ngOnInit(): void { // se inscreve no observable para pegar as atualizações de dados 

    this.dadosEstoqueService.componentes$.subscribe((dados) => {
      
      console.log('Dados no estoque', dados); 
      this.componentes = dados; 
    });

   

  }




}
