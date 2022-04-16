import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Empresa } from '../model/empresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  novaempresa:any;
  referenciaTabelaEmpresas: AngularFireList<Empresa>;
  
  constructor(private banco: AngularFireDatabase, public router: Router) { 
    this.referenciaTabelaEmpresas = banco.list('/empresas')
  }

  ngOnInit(): void {
    
    this.novaempresa = new Empresa("");
  }

  incluirEmpresa():void{
    this.banco.list('empresas').push(this.novaempresa)
    .then((resultado:any) =>{
      console.log(resultado.key);
      this.router.navigate(['listagemempresas']);
    }
    )}
}

