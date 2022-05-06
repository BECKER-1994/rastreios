import { Component, OnInit } from '@angular/core';
import { Onibus } from '../model/onibus';

import { AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listaOnibus: any;
  refTabelaOnibus:AngularFireList<Onibus>
  onibus: Onibus
  constructor(private banco: AngularFireDatabase, public router: Router) {
    this.refTabelaOnibus = banco.list('/onibus/');
    this.onibus = new Onibus('');
   }

  ngOnInit(): void {
    this.iniciarOnibus();
  }

  iniciarOnibus():void{
    this.refTabelaOnibus.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => 
          ({key: c.payload.key, ...c.payload.val()})
          )
          )
    ).subscribe(data => {
      this.listaOnibus = data;
    });
  }

  excluirOnibus(objeto:any){
    this.banco.list('/onibus').remove(objeto.key);
  }
}
