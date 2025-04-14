import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Componente { // typescript 
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

  componentes: Componente[] = []; // relacionado a interface, tipo componente 

  constructor() {}

  ngOnInit(): void {}

  chamaObjeto() {
    console.log(this.componente);
  }


  salvaComponente() {
    this.componentes.push({ ...this.componente }); // spread operator - cria uma copia do objeto atual 
    this.componente = { tipo: '', medida: '', valor: '' };
  }
}
