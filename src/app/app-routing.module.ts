import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemComponent } from './empresas/listagem/listagem.component';
import { CadastrarComponent } from './empresas/cadastrar/cadastrar.component';
import { HomeComponent } from './views/home/home.component';
import { RastrearComponent } from './onibus/rastrear/rastrear.component';
import { ListarComponent } from './onibus/listar/listar.component';

const routes: Routes = [
  {path:'listagemempresas', component: ListagemComponent},
  {path:'cadastrarempresas', component: CadastrarComponent},
  {path:'home', component: HomeComponent},
  {path:'mapa', component: RastrearComponent},
  {path:'onibus', component:ListarComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
