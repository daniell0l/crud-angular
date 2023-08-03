import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { PessoasComponent } from './pessoas/pessoas.component';


@NgModule({
  declarations: [
    PessoasComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
