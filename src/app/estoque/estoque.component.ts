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

  constructor(private dadosEstoqueService:DadosEstoqueService) { }

  componentes: Componente[] = []; 

  ngOnInit(): void {

    this.componentes = this.dadosEstoqueService.getData();

  }




}
