import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';



@NgModule({
  declarations: [
    ListagemComponent,
    CadastrarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpresasModule { }
