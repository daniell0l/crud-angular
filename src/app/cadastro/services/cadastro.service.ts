import { Injectable } from '@angular/core';
import { Cadastro } from '../models/cadastro';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private readonly API = 'api/cadastros';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Cadastro[]>(this.API).pipe(
      first(),
      tap((cadastros) => console.log(cadastros))
    );
  }
}
