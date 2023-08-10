import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { PessoasComponent } from './pessoas/pessoas.component';


@NgModule({
  declarations: [
    PessoasComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    AppMaterialModule
  ]
})
export class CadastroModule { }
