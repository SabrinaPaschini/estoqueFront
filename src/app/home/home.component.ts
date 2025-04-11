import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  componente = {
    tipo: '',
    medida: '',
    valor: '',
  };

  mostraTipo() {
    return this.componente.tipo;
  }

  mostraMedida() {
    return this.componente.medida;
  }

  mostraValor() {
    return this.componente.valor;
  }
}
