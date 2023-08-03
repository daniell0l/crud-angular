import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  { path: '', component: PessoasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
