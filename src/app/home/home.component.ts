import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DadosEstoqueService } from '../dados-estoque.service';

interface Componente {
  // typescript meu proprio tipo 
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

  componente = {
    tipo: '',
    medida: '',
    valor: '',
  };

  componentes: Componente[] = []; // um novo array de componentes .push

  constructor(private dadosEstoqueService: DadosEstoqueService) {}

  ngOnInit(): void {}


  salvaComponente() {
    this.componentes.push({ ...this.componente }); // spread operator - cria uma copia do objeto atual
  }

  chamaObjeto() {
    console.log(this.componente, 'esse é o objeto componente e suas propriedades');
    this.componente = { tipo: '', medida: '', valor: '' };
  }

  saveData(){ 
    this.dadosEstoqueService.sendData({... this.componente});
    this.componente = { tipo: '', medida: '', valor: '' };
  }


}
