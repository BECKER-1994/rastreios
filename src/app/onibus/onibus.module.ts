import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { RastrearComponent } from './rastrear/rastrear.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    RastrearComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyBEqZkvyDbhSHcxyguDxf04_nMFU28pq4k"
    }),
  ]
})
export class OnibusModule { }
