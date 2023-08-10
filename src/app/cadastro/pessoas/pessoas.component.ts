import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../models/cadastro';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  cadastro: Cadastro[] = [
    {
      _id: 1,
      name: 'teste',
      street: 'rua a',
      city: 'cidade a',
      state: 'estado a',
      neighborhood: 'bairro a',
      number: '123',
      zipCode: '47000000',
    }
  ];

  displayedColumns = ['name', 'street', 'city', 'state', 'neighborhood', 'number', 'zipCode'];

  constructor() {

  }

  ngOnInit(): void {

  }
}
