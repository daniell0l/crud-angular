import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss'],
})
export class PessoasComponent implements OnInit {
  cadastro: Observable<Cadastro[]>;
  displayedColumns = [
    'name',
    'street',
    'city',
    'state',
    'neighborhood',
    'number',
    'zipCode',
  ];

  constructor(private cadastroService: CadastroService) {
    this.cadastro = this.cadastroService.list();
  }

  ngOnInit(): void {}
}
