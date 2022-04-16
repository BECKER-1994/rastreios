import { Component, OnInit } from '@angular/core';
import { Empresa } from '../model/empresa';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listaEmpresas: any;
  referenciaTabelaEmpresas: AngularFireList<Empresa>;

  constructor(private banco: AngularFireDatabase, public router: Router) {
    this.referenciaTabelaEmpresas = banco.list('/empresas');
   }

  ngOnInit(): void {
    this.iniciarArrayEmpresas();
  }

  iniciarArrayEmpresas():void{
    this.referenciaTabelaEmpresas.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
          )
        )
    ).subscribe(data => {
      this.listaEmpresas = data;
    });
  }

  excluirEmpresa(objeto:any){
    this.banco.list('/empresas').remove(objeto.key);
  }
}
