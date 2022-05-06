import { Component, OnInit } from '@angular/core';
import { Localizacao } from '../model/localizacao';
import { map } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rastrear',
  templateUrl: './rastrear.component.html',
  styleUrls: ['./rastrear.component.css']
})
export class RastrearComponent implements OnInit {
  refLocal: AngularFireList<Localizacao>
  listaLocal: any;
  local: Localizacao;
  constructor(private banco: AngularFireDatabase, public router: Router) { 
    this.refLocal = this.banco.list('/locais');
    this.ini();
    this.local = new Localizacao(1,1, 1, 1, false, 1, 1,false, 1, 1, '', 1, 1,1, 1);
  }

  ngOnInit(): void {
  }

  
ini():void{
  this.refLocal.snapshotChanges().pipe(
  map(changes =>
    changes.map(c => 
      ({key: c.payload.key, ...c.payload.val()})
      )
      )
).subscribe(data => {this.listaLocal = data;
  this.local = this.listaLocal[0] as Localizacao;
});
}

}
