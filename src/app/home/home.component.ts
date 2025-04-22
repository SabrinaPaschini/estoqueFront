import { Component, OnInit } from '@angular/core';

import { DadosEstoqueService } from '../dados-estoque.service';

interface Componente {
  // typescript, meu proprio tipo
  tipo: string;
  medida: string;
  valor: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  componente: Componente = {
    tipo: '',
    medida: '',
    valor: '',
  };

  componentes: Componente[] = []; // um novo array de componentes .push

  constructor(private dadosEstoqueService: DadosEstoqueService) {}

  ngOnInit(): void {
    // é assim que se inscreve no observable
    this.dadosEstoqueService.componentes$.subscribe((dados) => {
      this.componentes = dados; // a cada atualizaçao os dados vao para a lista
    });
  }

  sendData() {
    this.dadosEstoqueService.createData({ ...this.componente });
    this.componente = { tipo: '', medida: '', valor: '' };
  }
}
