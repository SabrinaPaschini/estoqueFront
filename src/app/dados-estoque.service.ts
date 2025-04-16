import { Component, Injectable } from '@angular/core';

interface Componente {
  // typescript
  tipo: string;
  medida: string;
  valor: string;
}

@Injectable({
  providedIn: 'root',
})
export class DadosEstoqueService {
  private componentes: Componente[] = [];

  constructor() {}

  sendData(componente: Componente) {
    this.componentes.push({ ...componente }); // colocando dentro do array os dados dos inputs
  }

  getData(): Componente[] {
    return this.componentes; // so retorna os componentes salvos
  }
}
