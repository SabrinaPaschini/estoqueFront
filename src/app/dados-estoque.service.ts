import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'; // 1 passo é a importacao 

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


  //é assim que cria um "subject", que guarda o estado atual da lista de compoenntes 
  private componentesSubject = new BehaviorSubject<Componente[]>([]); 

  componentes$ = this.componentesSubject.asObservable(); // deixa visivel o observable para outros componentes 

  constructor() {}

  sendData(componente: Componente): void{
    const componentesAtuais = this.componentesSubject.value;
    const novaLista = [... componentesAtuais, componente] // adicionando componente novo 
    console.log('Nova lista:', novaLista)
    this.componentesSubject.next(novaLista); // atualiza o behavior com uma nova lista 
  }

  
}
