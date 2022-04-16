import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemComponent } from './empresas/listagem/listagem.component';
const routes: Routes = [
  {path:'listagemempresas', component: ListagemComponent},
  {path:'', redirectTo:'listagemempresas', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
