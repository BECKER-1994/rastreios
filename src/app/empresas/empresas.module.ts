import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListagemComponent,
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmpresasModule { }
