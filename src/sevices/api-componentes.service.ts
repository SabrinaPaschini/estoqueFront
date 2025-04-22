import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Componente {
  tipo: string;
  medida: string; 
  valor: string; 
}


@Injectable({
  providedIn: 'root'
})

export class ApiComponentesService {

  private apiUrl = 'http://localhost:3000/componentes';

  constructor(private http: HttpClient) { }

  // cria um novo componente (POST)

  criarComponente(componente: Componente): Observable <Componente> {
    console.log('enviando para a api', componente)
    return this.http.post<Componente> (this.apiUrl, componente);
  }

  // lista todos os componentes (GET)

  listarComponentes(): Observable<Componente[]> {
    return this.http.get<Componente[]>(this.apiUrl);
  }
}

// apos as rotas feitas, injetar na outra service 
