import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'; // 1 passo é a importacao
import { ApiComponentesService } from './api-componentes.service';

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

  constructor(private api: ApiComponentesService) {
    //já carrega a lista ao iniciar 
    this.loadAll();
  }

  // carrega do backend e atualiza o Behaviour subject 

  private loadAll(){
    this.api.listarComponentes().subscribe((dados)=>{
      this.componentesSubject.next(dados)
    })
  }



  // cria e adiciona tanto no backend quanto no estado local 

  createData(componente: Componente){
    this.api.criarComponente(componente).subscribe((novo) =>{
      const atuais = this.componentesSubject.value;
      this.componentesSubject.next([...atuais, novo])
    })
  }


}
